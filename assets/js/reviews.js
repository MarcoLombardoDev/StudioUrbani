/* ==========================================================================
   Studio Urbani — «Dicono di noi»
   Legge assets/data/reviews.json, un file statico aggiornato ogni giorno da
   GitHub Actions: il browser del visitatore non contatta mai Google, quindi
   la sezione non richiede consenso ne' cookie.
   Senza file, con file vuoto o con errore di rete la sezione resta nascosta.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.querySelector('[data-reviews]');
  if (!root) return;

  var section = root.closest('section');
  var track = root.querySelector('[data-reviews-track]');
  var dotsBox = root.querySelector('[data-reviews-dots]');
  var prev = root.querySelector('[data-reviews-prev]');
  var next = root.querySelector('[data-reviews-next]');
  var toggle = root.querySelector('[data-reviews-toggle]');

  /* Avanzamento automatico: cinque secondi e mezzo per recensione. Si ferma al
     passaggio del mouse, quando il fuoco entra nel carosello, quando la
     sezione non e' a schermo o la scheda passa in secondo piano, e su
     richiesta col comando di pausa. Con prefers-reduced-motion non parte. */
  var AUTO_MS = 5500;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var timer = null;
  var paused = false;   // scelta esplicita di chi guarda
  var held = 0;         // sospensioni temporanee: mouse, fuoco, fuori schermo

  function canAuto() {
    return !reduce.matches && !paused && held === 0 && track.querySelectorAll('.review').length > 1;
  }

  function tick() {
    var n = track.querySelectorAll('.review').length;
    if (!n) return;
    var last = index >= n - 1;
    /* Tornando in testa lo scorrimento sarebbe lungo quanto tutta la fila:
       meglio un salto secco. */
    goto(last ? 0 : index + 1, !last);
  }

  function play() {
    stop();
    if (!canAuto()) return;
    timer = setInterval(tick, AUTO_MS);
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function hold(on) {
    held = Math.max(0, held + (on ? 1 : -1));
    if (canAuto()) play();
    else stop();
  }

  function syncToggle() {
    if (!toggle) return;
    var off = paused;
    toggle.setAttribute('aria-pressed', String(off));
    toggle.setAttribute('aria-label', off ? T[lang()].play : T[lang()].pause);
    toggle.querySelector('[data-icon="pause"]').hidden = off;
    toggle.querySelector('[data-icon="play"]').hidden = !off;
  }

  var T = {
    it: {
      locale: 'it-IT',
      count: function (n) { return n === 1 ? '1 valutazione' : n.toLocaleString('it-IT') + ' valutazioni'; },
      stars: function (r) { return r.toLocaleString('it-IT', { maximumFractionDigits: 1 }) + ' stelle su 5'; },
      slide: function (i, n) { return 'Recensione ' + i + ' di ' + n; },
      dot: function (i) { return 'Vai alla recensione ' + i; },
      updated: function (d) { return 'ultimo aggiornamento ' + d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }); },
      photoAlt: function (a) { return 'Fotografia del profilo di ' + a; },
      pause: 'Metti in pausa lo scorrimento',
      play: 'Riprendi lo scorrimento',
      translated: 'Traduzione di Google'
    },
    en: {
      locale: 'en-GB',
      count: function (n) { return n === 1 ? '1 rating' : n.toLocaleString('en-GB') + ' ratings'; },
      stars: function (r) { return r.toLocaleString('en-GB', { maximumFractionDigits: 1 }) + ' stars out of 5'; },
      slide: function (i, n) { return 'Review ' + i + ' of ' + n; },
      dot: function (i) { return 'Go to review ' + i; },
      updated: function (d) { return 'last updated ' + d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); },
      photoAlt: function (a) { return 'Profile photo of ' + a; },
      pause: 'Pause the slideshow',
      play: 'Resume the slideshow',
      translated: 'Translated by Google'
    }
  };

  function lang() { return document.documentElement.lang === 'en' ? 'en' : 'it'; }
  function t() { return T[lang()]; }

  /* Cinque stelle: la fila piena e' ritagliata in larghezza sulla frazione
     effettiva, cosi' il mezzo voto e' esatto e non arrotondato. */
  function stars(value, cls) {
    var star = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.5l1.1-6.5L2.6 9.4l6.5-.9z"/></svg>';
    var row = '';
    for (var i = 0; i < 5; i++) row += star;
    var pct = Math.max(0, Math.min(100, (value / 5) * 100));
    return '<span class="stars ' + (cls || '') + '">' +
      '<span class="stars__empty">' + row + '</span>' +
      '<span class="stars__full" style="width:' + pct.toFixed(2) + '%">' + row + '</span>' +
      '</span>';
  }

  function text(review) {
    if (lang() === 'en' && review.textEn) return { body: review.textEn, translated: true };
    return { body: review.text, translated: false };
  }

  function when(review) {
    if (lang() === 'en' && review.relativeEn) return review.relativeEn;
    return review.relative || '';
  }

  function escape(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function initials(name) {
    return String(name).trim().split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0).toUpperCase(); }).join('');
  }

  var data = null;
  var index = 0;

  function renderAside() {
    var avg = root.querySelector('[data-reviews-avg]');
    var box = root.querySelector('[data-reviews-stars]');
    var meta = root.querySelector('[data-reviews-meta]');
    var link = root.querySelector('[data-reviews-link]');

    if (typeof data.rating === 'number') {
      avg.textContent = data.rating.toLocaleString(t().locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      box.innerHTML = stars(data.rating);
      box.setAttribute('aria-label', t().stars(data.rating));
      root.querySelector('.reviews__score').hidden = false;
    } else {
      root.querySelector('.reviews__score').hidden = true;
    }

    /* Un'unica etichetta: quante valutazioni e quando sono state prese. */
    var parts = [];
    if (typeof data.total === 'number') parts.push(t().count(data.total));
    var d = data.updatedAt ? new Date(data.updatedAt) : null;
    if (d && !isNaN(d)) parts.push(t().updated(d));
    meta.textContent = parts.join(', ');
    meta.hidden = parts.length === 0;

    if (data.url) link.href = data.url;
  }

  function renderSlides() {
    var list = data.reviews || [];
    track.innerHTML = list.map(function (r, i) {
      var body = text(r);
      var avatar = r.photo
        ? '<span class="review__avatar"><img src="' + escape(r.photo) + '" alt="' + escape(t().photoAlt(r.author)) +
          '" width="42" height="42" loading="lazy" decoding="async"></span>'
        : '<span class="review__avatar" aria-hidden="true">' + escape(initials(r.author)) + '</span>';
      return '<li class="review" role="group" aria-roledescription="slide" aria-label="' + escape(t().slide(i + 1, list.length)) + '">' +
        '<div class="review__head">' +
          avatar +
          '<span class="review__who"><span class="review__author">' + escape(r.author) + '</span>' +
            (when(r) ? '<span class="review__when">' + escape(when(r)) + '</span>' : '') +
          '</span>' +
          (typeof r.rating === 'number' ? stars(r.rating, 'stars--sm') : '') +
        '</div>' +
        '<blockquote class="review__text">' + escape(body.body) + '</blockquote>' +
        (body.translated ? '<p class="review__note">' + escape(t().translated) + '</p>' : '') +
        '</li>';
    }).join('');

    dotsBox.innerHTML = list.map(function (r, i) {
      return '<li><button type="button" data-go="' + i + '" aria-label="' + escape(t().dot(i + 1)) + '"' +
        (i === index ? ' aria-current="true"' : '') + '></button></li>';
    }).join('');

    var single = list.length < 2;
    root.querySelector('.reviews__nav').hidden = single;
    root.querySelector('.reviews__carousel').hidden = list.length === 0;
    if (toggle) toggle.hidden = single || reduce.matches;
  }

  function goto(i, smooth) {
    var slides = track.querySelectorAll('.review');
    if (!slides.length) return;
    index = Math.max(0, Math.min(slides.length - 1, i));
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: slides[index].offsetLeft - track.offsetLeft, behavior: smooth && !reduce ? 'smooth' : 'auto' });
    syncDots();
  }

  function syncDots() {
    dotsBox.querySelectorAll('button').forEach(function (b, i) {
      if (i === index) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index >= track.querySelectorAll('.review').length - 1;
  }

  function bind() {
    /* Chi prende in mano i comandi decide da se' quando scorrere: l'automatismo
       si ferma e resta fermo, senza riprendere sotto le dita. */
    if (prev) prev.addEventListener('click', function () { paused = true; syncToggle(); stop(); goto(index - 1, true); });
    if (next) next.addEventListener('click', function () { paused = true; syncToggle(); stop(); goto(index + 1, true); });
    dotsBox.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-go]');
      if (!b) return;
      paused = true; syncToggle(); stop();
      goto(Number(b.getAttribute('data-go')), true);
    });
    if (toggle) toggle.addEventListener('click', function () {
      paused = !paused;
      syncToggle();
      if (paused) stop(); else play();
    });

    root.addEventListener('mouseenter', function () { hold(true); });
    root.addEventListener('mouseleave', function () { hold(false); });
    /* Il fuoco dentro il carosello sospende lo scorrimento, cosi' chi naviga
       da tastiera legge senza fretta. Il comando di pausa e' l'eccezione:
       altrimenti premere «riprendi» non avrebbe effetto, perche' il fuoco
       resta proprio su quel bottone. */
    root.addEventListener('focusin', function (e) { if (!toggle || !toggle.contains(e.target)) hold(true); });
    root.addEventListener('focusout', function (e) { if (!toggle || !toggle.contains(e.target)) hold(false); });
    document.addEventListener('visibilitychange', function () { hold(document.hidden); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { hold(!e.isIntersecting); });
      }, { threshold: 0.2 }).observe(root);
    }
    if (reduce.addEventListener) reduce.addEventListener('change', function () {
      if (toggle) toggle.hidden = reduce.matches || track.querySelectorAll('.review').length < 2;
      if (canAuto()) play(); else stop();
    });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { goto(index + 1, true); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { goto(index - 1, true); e.preventDefault(); }
    });
    /* Trascinamento e swipe: il track e' uno scroller nativo, basta
       riallineare gli indicatori a scorrimento finito. */
    var timer;
    track.addEventListener('scroll', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var slides = track.querySelectorAll('.review');
        var mid = track.scrollLeft + track.clientWidth / 2;
        for (var i = 0; i < slides.length; i++) {
          var left = slides[i].offsetLeft - track.offsetLeft;
          if (mid >= left && mid < left + slides[i].offsetWidth) { index = i; break; }
        }
        syncDots();
      }, 90);
    });
    document.addEventListener('su:langchange', function () {
      if (!data) return;
      renderAside();
      renderSlides();
      syncToggle();
      goto(index, false);
    });
  }

  function file() {
    /* ?reviews=demo mostra il file di esempio: serve solo per vedere la
       sezione in anteprima prima di configurare la chiave Google. */
    try {
      if (new URLSearchParams(location.search).get('reviews') === 'demo') return 'assets/data/reviews.example.json';
    } catch (e) { /* URLSearchParams non disponibile */ }
    return 'assets/data/reviews.json';
  }

  fetch(file(), { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (json) {
      if (!json || (typeof json.rating !== 'number' && !(json.reviews || []).length)) throw new Error('dati vuoti');
      data = json;
      renderAside();
      renderSlides();
      bind();
      syncDots();
      syncToggle();
      section.hidden = false;
      play();
    })
    .catch(function () { /* niente dati: la sezione resta nascosta */ });
})();
