/* Inside the installed app there's no browser Back button, so each game gets a small
   "‹ Arcade" button to return to the arcade. It only shows inside the app, never in a normal browser tab. */
(function () {
  var inApp = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  if (!inApp) return;
  function add() {
    var a = document.createElement('a');
    a.href = '../index.html';
    a.textContent = '‹ Arcade';
    a.setAttribute('aria-label', 'Back to the Arcade');
    a.style.cssText = 'position:fixed;z-index:2147483647;top:calc(env(safe-area-inset-top, 0px) + 8px);left:calc(env(safe-area-inset-left, 0px) + 8px);' +
      'font:800 14px/1 system-ui,-apple-system,sans-serif;color:#2b1e4f;background:rgba(255,255,255,.88);border:2px solid #2b1e4f;border-radius:999px;' +
      'padding:6px 12px 7px 9px;text-decoration:none;box-shadow:0 2px 0 #2b1e4f;opacity:.8;-webkit-tap-highlight-color:transparent';
    document.body.appendChild(a);
  }
  if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);
})();
