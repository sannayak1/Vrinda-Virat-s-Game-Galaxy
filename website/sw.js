/* Offline helper for the installed app (a "service worker").
   The first time the app opens it saves the arcade, the help page, the current version of every game
   and the 3D engines they load from the internet, so everything plays without Wi-Fi afterwards.
   Older versions and anything else are saved the first time they're played.
   New games in games.js are picked up automatically; there's nothing to edit here. */
const CACHE = 'arcade-v1';
const SHELL = ['./', 'index.html', 'help.html', 'games.js', 'app.js', 'app-back.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png'];
const SAVE_FROM = ['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

importScripts('games.js');

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.allSettled([...SHELL, ...GAMES.flatMap(g => [g.file, g.thumb])].map(f => cache.add(f)));
    // also save the scripts the games load from the internet (the 3D engines)
    const urls = new Set();
    for (const g of GAMES) {
      const res = await cache.match(g.file);
      if (!res) continue;
      for (const m of (await res.text()).matchAll(/<script[^>]+src="(https:[^"]+)"/g)) urls.add(m[1]);
    }
    await Promise.allSettled([...urls].map(u => cache.add(new Request(u, { mode: 'cors' }))));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('arcade-') && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // the arcade, help page and game list: newest copy when online, so new games show up straight away
    const base = url.pathname.slice(url.pathname.lastIndexOf('/') + 1);
    if (['', 'index.html', 'help.html', 'games.js'].includes(base) && !url.pathname.includes('/games/')) e.respondWith(networkFirst(req));
    // games and pictures: open instantly from the saved copy, and fetch any update for next time
    else e.respondWith(staleWhileRevalidate(req, e));
  } else if (SAVE_FROM.includes(url.hostname)) {
    e.respondWith(cacheFirst(req));
  }
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(req, { ignoreSearch: true });
  const net = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; });
  if (!saved) return net;
  // on very slow Wi-Fi, don't wait forever when there's a saved copy
  const slow = new Promise(r => setTimeout(() => r(saved), 4000));
  return Promise.race([net.catch(() => saved), slow]);
}

async function staleWhileRevalidate(req, e) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(req, { ignoreSearch: true });
  const net = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => null);
  if (saved) { e.waitUntil(net); return saved; }
  return (await net) || Response.error();
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(req);
  if (saved) return saved;
  const res = await fetch(req);
  if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
  return res;
}
