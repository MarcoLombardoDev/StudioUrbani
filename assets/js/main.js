/* ==========================================================================
   Studio Urbani — interazioni di interfaccia
   Nessuna dipendenza esterna: tutto è servito dal dominio dello Studio.
   ========================================================================== */
(function () {
  'use strict';

  var LS = {
    notice: 'su_notice',
    map: 'su_map_consent'
  };

  function get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* noop */ } }
  function del(key) { try { localStorage.removeItem(key); } catch (e) { /* noop */ } }

  /* ---------- Anno di copyright sempre corrente ---------- */
  function year() {
    var now = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = now; });
  }

  /* ---------- Header compatto allo scroll ---------- */
  function header() {
    var el = document.getElementById('siteHeader');
    if (!el || el.classList.contains('is-solid')) return;
    var onScroll = function () {
      el.classList.toggle('is-solid', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Menu mobile ---------- */
  function burger() {
    var btn = document.getElementById('burger');
    var nav = document.getElementById('mainNav');
    if (!btn || !nav) return;

    var close = function () {
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 940) close(); });
  }

  /* ---------- Comparsa dei blocchi allo scroll ---------- */
  function reveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Torna su ---------- */
  function toTop() {
    var btn = document.getElementById('toTop');
    if (!btn) return;
    var onScroll = function () { btn.classList.toggle('is-visible', window.scrollY > 700); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', function () {
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Avviso informativo (solo cookie tecnici) ---------- */
  function notice() {
    var bar = document.getElementById('cookieBar');
    if (!bar) return;
    if (get(LS.notice) === 'read') return;

    window.setTimeout(function () { bar.classList.add('is-open'); }, 900);
    bar.querySelectorAll('[data-cookie-accept]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        set(LS.notice, 'read');
        bar.classList.remove('is-open');
      });
    });
  }

  /* ---------- Mappa Google Maps caricata solo su consenso ---------- */
  function map() {
    var shell = document.getElementById('mapShell');
    var consent = document.getElementById('mapConsent');
    var button = document.getElementById('mapLoad');
    if (!shell) return;

    var ADDRESS = 'Via Cristoforo Colombo 348, 00145 Roma, Italia';

    var load = function () {
      if (shell.querySelector('iframe')) return;
      var lang = document.documentElement.lang === 'en' ? 'en' : 'it';
      var frame = document.createElement('iframe');
      frame.src = 'https://www.google.com/maps?q=' + encodeURIComponent(ADDRESS) + '&hl=' + lang + '&z=17&output=embed';
      frame.title = lang === 'en' ? 'Map of the Studio Urbani office' : 'Mappa della sede dello Studio Urbani';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      frame.setAttribute('allowfullscreen', '');
      shell.appendChild(frame);
      if (consent) consent.remove();
    };

    if (get(LS.map) === 'yes') load();

    if (button) {
      button.addEventListener('click', function () {
        set(LS.map, 'yes');
        load();
      });
    }

    /* Se la lingua cambia a mappa già caricata, ricarico con la lingua giusta. */
    document.addEventListener('su:langchange', function () {
      var frame = shell.querySelector('iframe');
      if (!frame) return;
      frame.remove();
      load();
    });
  }

  /* ---------- Azzeramento preferenze (pagina cookie policy) ---------- */
  function resetPrefs() {
    var btn = document.getElementById('resetPrefs');
    var msg = document.getElementById('resetMsg');
    if (!btn) return;
    btn.addEventListener('click', function () {
      del(LS.map);
      del(LS.notice);
      del('su_lang');
      if (msg) msg.hidden = false;
    });
  }

  function init() {
    year();
    header();
    burger();
    reveal();
    toTop();
    notice();
    map();
    resetPrefs();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
