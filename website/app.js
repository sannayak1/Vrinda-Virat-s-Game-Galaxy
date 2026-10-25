/* Makes the arcade installable as an app: switches on the offline helper (sw.js) and shows the
   "Get the app" buttons (anything with data-install) when this phone or browser can install it.
   Where there's no install pop-up (iPhone and iPad), the button links to the install guide instead. */
(function () {
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
  var inApp = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var installPrompt = null;
  function show(on) { document.querySelectorAll('[data-install]').forEach(function (b) { b.hidden = !on; }); }

  addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); installPrompt = e; if (!inApp) show(true); });
  addEventListener('appinstalled', function () { installPrompt = null; show(false); });
  if (isIOS && !inApp) show(true);
  document.querySelectorAll('[data-install]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      if (!installPrompt) return;
      e.preventDefault();
      installPrompt.prompt();
      installPrompt.userChoice.then(function () { installPrompt = null; show(false); });
    });
  });
})();
