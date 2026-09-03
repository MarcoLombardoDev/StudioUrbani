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

    /* Mentre il pannello copre lo schermo, il resto della pagina non deve
       ricevere il focus: 'inert' lo esclude da tastiera e screen reader. */
    var rest = [document.getElementById('main'), document.querySelector('.site-footer')].filter(Boolean);
    var setRest = function (inert) {
      rest.forEach(function (el) {
        if ('inert' in el) el.inert = inert;
        else if (inert) el.setAttribute('aria-hidden', 'true');
        else el.removeAttribute('aria-hidden');
      });
    };

    var close = function (returnFocus) {
      if (!document.body.classList.contains('nav-open')) return;
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
      setRest(false);
      if (returnFocus) btn.focus();
    };

    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', String(open));
      setRest(open);
      if (open) {
        /* il pannello entra in dissolvenza: sposto il focus a transizione
           avviata, altrimenti l'elemento non e' ancora focalizzabile */
        window.setTimeout(function () {
          var first = nav.querySelector('a');
          if (first && document.body.classList.contains('nav-open')) first.focus();
        }, 60);
      } else {
        btn.focus();
      }
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) close(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(true); });
    window.addEventListener('resize', function () { if (window.innerWidth > 940) close(false); });
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

    var dismiss = function () {
      set(LS.notice, 'read');
      bar.classList.remove('is-open');
    };
    var open = function () { bar.classList.add('is-open'); };

    /* Su schermi piccoli l'avviso coprirebbe le azioni della prima
       schermata: aspetta il primo scroll invece di presentarsi subito. */
    if (window.innerWidth <= 900) {
      var onFirstScroll = function () {
        window.removeEventListener('scroll', onFirstScroll);
        open();
      };
      window.addEventListener('scroll', onFirstScroll, { passive: true, once: true });
    } else {
      window.setTimeout(open, 900);
    }

    bar.querySelectorAll('[data-cookie-accept]').forEach(function (b) {
      b.addEventListener('click', dismiss);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && bar.classList.contains('is-open')) dismiss();
    });
  }

  /* ---------- Mappa Google Maps caricata solo su consenso ---------- */
  function map() {
    var shell = document.getElementById('mapShell');
    var consent = document.getElementById('mapConsent');
    var button = document.getElementById('mapLoad');
    if (!shell) return;

    var ADDRESS = 'Via Cristoforo Colombo 348, 00145 Roma, Italia';

    var error = document.getElementById('mapError');
    var timer = null;

    /* Il gate viene nascosto e non rimosso: se Google non risponde
       ricompare con un messaggio, invece di lasciare un rettangolo vuoto. */
    var showGate = function (failed) {
      if (!consent) return;
      consent.hidden = false;
      if (error) error.hidden = !failed;
    };

    var load = function () {
      if (shell.querySelector('iframe')) return;
      var lang = document.documentElement.lang === 'en' ? 'en' : 'it';
      var frame = document.createElement('iframe');
      frame.src = 'https://www.google.com/maps?q=' + encodeURIComponent(ADDRESS) + '&hl=' + lang + '&z=17&output=embed';
      frame.title = lang === 'en' ? 'Map of the Studio Urbani office' : 'Mappa della sede dello Studio Urbani';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      frame.setAttribute('allowfullscreen', '');

      var fail = function () {
        window.clearTimeout(timer);
        frame.remove();
        showGate(true);
      };
      frame.addEventListener('load', function () {
        window.clearTimeout(timer);
        if (consent) { consent.hidden = true; if (error) error.hidden = true; }
      });
      frame.addEventListener('error', fail);
      timer = window.setTimeout(fail, 8000);

      /* Un iframe che non carica emette 'load' sulla pagina d'errore del
         browser, quindi l'evento non basta a dire che è andata bene: prima
         di inserirlo verifico che l'host risponda. Il consenso è già dato,
         quindi la richiesta è legittima. */
      if (window.fetch) {
        var settled = false;
        var guard = window.setTimeout(function () {
          if (!settled) { settled = true; shell.appendChild(frame); }
        }, 4000);
        window.fetch('https://www.google.com/generate_204', { mode: 'no-cors', cache: 'no-store' })
          .then(function () {
            if (settled) return;
            settled = true; window.clearTimeout(guard); shell.appendChild(frame);
          })
          .catch(function () {
            if (settled) return;
            settled = true; window.clearTimeout(guard);
            window.clearTimeout(timer);
            showGate(true);
          });
      } else {
        shell.appendChild(frame);
      }
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
      if (consent) consent.hidden = true;
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
