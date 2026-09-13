(function () {
  "use strict";

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");
  var INTERVAL_MS = 3200;

  function setup(gallery) {
    var timer = null;
    var stoppedByUser = false;

    function canAuto() {
      return !stoppedByUser && !REDUCED.matches && !document.hidden;
    }

    function inView() {
      var r = gallery.getBoundingClientRect();
      return r.bottom > 0 && r.top < window.innerHeight;
    }

    function advance() {
      if (!canAuto() || !inView()) return;
      var step = gallery.clientWidth;
      var next = gallery.scrollLeft + step;
      if (next >= gallery.scrollWidth - step / 2) next = 0;
      gallery.scrollTo({ left: next, behavior: "smooth" });
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    function start() {
      stop();
      if (canAuto()) timer = setInterval(advance, INTERVAL_MS);
    }

    function stopForever() {
      stoppedByUser = true;
      stop();
    }

    gallery.addEventListener("pointerdown", stopForever, { passive: true });
    gallery.addEventListener("touchstart", stopForever, { passive: true });

    if (REDUCED.addEventListener) REDUCED.addEventListener("change", start);
    document.addEventListener("visibilitychange", start);

    start();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".gallery--3").forEach(setup);
  });
})();
