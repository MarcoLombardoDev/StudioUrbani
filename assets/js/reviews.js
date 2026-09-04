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

  var T = {
    it: {
      count: function (n) { return n === 1 ? '1 valutazione su Google' : n.toLocaleString('it-IT') + ' valutazioni su Google'; },
      stars: function (r) { return r.toLocaleString('it-IT', { maximumFractionDigits: 1 }) + ' stelle su 5'; },
      slide: function (i, n) { return 'Recensione ' + i + ' di ' + n; },
      dot: function (i) { return 'Vai alla recensione ' + i; },
      updated: function (d) { return 'Aggiornate il ' + d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }); },
      full: 'Leggi su Google',
      translated: 'Traduzione di Google'
    },
    en: {
      count: function (n) { return n === 1 ? '1 rating on Google' : n.toLocaleString('en-GB') + ' ratings on Google'; },
      stars: function (r) { return r.toLocaleString('en-GB', { maximumFractionDigits: 1 }) + ' stars out of 5'; },
      slide: function (i, n) { return 'Review ' + i + ' of ' + n; },
      dot: function (i) { return 'Go to review ' + i; },
      updated: function (d) { return 'Updated on ' + d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); },
      full: 'Read on Google',
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
    var count = root.querySelector('[data-reviews-count]');
    var link = root.querySelector('[data-reviews-link]');
    var updated = root.querySelector('[data-reviews-updated]');

    if (typeof data.rating === 'number') {
      avg.textContent = data.rating.toLocaleString(lang() === 'en' ? 'en-GB' : 'it-IT', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      box.innerHTML = stars(data.rating);
      box.setAttribute('aria-label', t().stars(data.rating));
    } else {
      avg.closest('.reviews__score').hidden = true;
      box.hidden = true;
    }

    if (typeof data.total === 'number') count.textContent = t().count(data.total);
    else count.hidden = true;

    if (data.url) link.href = data.url;

    var d = data.updatedAt ? new Date(data.updatedAt) : null;
    if (d && !isNaN(d)) updated.textContent = t().updated(d);
  }

  function renderSlides() {
    var list = data.reviews || [];
    track.innerHTML = list.map(function (r, i) {
      var body = text(r);
      return '<li class="review" role="group" aria-roledescription="slide" aria-label="' + escape(t().slide(i + 1, list.length)) + '">' +
        '<div class="review__head">' +
          '<span class="review__avatar" aria-hidden="true">' + escape(initials(r.author)) + '</span>' +
          '<span class="review__who"><span class="review__author">' + escape(r.author) + '</span>' +
            (when(r) ? '<span class="review__when">' + escape(when(r)) + '</span>' : '') +
          '</span>' +
          (typeof r.rating === 'number' ? stars(r.rating, 'stars--sm') : '') +
        '</div>' +
        '<blockquote class="review__text">' + escape(body.body) + '</blockquote>' +
        (r.url ? '<a class="review__link" href="' + escape(r.url) + '" target="_blank" rel="noopener noreferrer">' + escape(t().full) + '</a>' : '') +
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
    if (prev) prev.addEventListener('click', function () { goto(index - 1, true); });
    if (next) next.addEventListener('click', function () { goto(index + 1, true); });
    dotsBox.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-go]');
      if (b) goto(Number(b.getAttribute('data-go')), true);
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
      section.hidden = false;
    })
    .catch(function () { /* niente dati: la sezione resta nascosta */ });
})();
