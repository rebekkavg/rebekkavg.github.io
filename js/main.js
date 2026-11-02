/* ==========================================================================
   R.V.G — main.js (vanilla JS, geen dependencies)
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CREDIT = '© Rebekka Groeneveld';

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  /* ---------- ontbrekende afbeeldingen: nette placeholder ---------- */
  function markMissing(img) {
    var h = img.closest ? img.closest('.media') : null;
    if (!h) return;
    h.classList.add('is-missing');
    h.setAttribute('data-name', (img.getAttribute('src') || '').split('/').pop());
  }
  document.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') markMissing(e.target);
  }, true);
  function checkImgs() {
    $$('.media img').forEach(function (i) {
      if (i.complete && i.naturalWidth === 0 && i.getAttribute('src')) markMissing(i);
    });
  }

  /* ---------- afbeelding + bijschrift ---------- */
  function captionText(b) {
    var t = b.bijschrift || '';
    if (b.credit) t += (t ? ' — ' : '') + CREDIT;
    return t;
  }
  function figure(b, o) {
    o = o || {};
    var fig = el('figure', 'fig' + (o.cls ? ' ' + o.cls : ''));
    var zoom = b.zoom !== false && !o.nozoom;
    var m = el(zoom ? 'button' : 'div', 'media' + (zoom ? ' media--zoom' : ''));
    if (zoom) {
      m.type = 'button';
      m.setAttribute('aria-label', 'Vergroot afbeelding: ' + b.alt);
      m.setAttribute('data-lb', '');
      m.setAttribute('data-src', b.src);
      m.setAttribute('data-alt', b.alt);
      m.setAttribute('data-cap', captionText(b));
    }
    m.style.setProperty('--r', b.crop || ((b.w && b.h) ? b.w + '/' + b.h : (b.ratio || '4/3')));
    var rn = (b.w && b.h) ? b.w / b.h : 4 / 3;
    m.style.setProperty('--rn', rn.toFixed(4));
    if (rn < 1) fig.classList.add('fig--tall');
    var fit = b.fit || o.fit;
    if (fit) m.style.setProperty('--fit', fit);
    if (b.pos) m.style.setProperty('--pos', b.pos);
    var img = document.createElement('img');
    img.alt = b.alt || '';
    img.width = b.w || 1600;
    img.height = b.h || 1200;
    img.decoding = 'async';
    img.loading = o.eager ? 'eager' : 'lazy';
    if (o.eager) img.setAttribute('fetchpriority', 'high');
    img.src = b.src;
    m.appendChild(img);
    fig.appendChild(m);
    var c = captionText(b);
    if (c && !o.nocap) fig.appendChild(el('figcaption', 'cap', c));
    return fig;
  }
  function rev(node, delay) {
    node.classList.add('reveal');
    if (delay) node.style.setProperty('--d', delay + 'ms');
    return node;
  }

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    var els = $$('.reveal:not(.in)');
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- menu (mobiel) ---------- */
  function initMenu() {
    var btn = $('.menu-btn'), menu = $('#mobile-menu');
    if (!btn || !menu) return;
    var lab = $('.menu-btn__label', btn);
    function set(open) {
      document.body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (lab) lab.textContent = open ? 'Sluit' : 'Menu';
    }
    btn.addEventListener('click', function () { set(!document.body.classList.contains('menu-open')); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 600) set(false); });
  }

  /* ---------- jaartal ---------- */
  function initClock() {
    $$('[data-year]').forEach(function (n) { n.textContent = new Date().getFullYear(); });
  }

  /* ---------- paginatransities (eenvoudige fade) ---------- */
  function initTransitions() {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a || a.target || a.hasAttribute('download')) return;
      var u;
      try { u = new URL(a.href, location.href); } catch (err) { return; }
      if (u.origin !== location.origin) return;
      if (u.pathname === location.pathname && u.search === location.search && u.hash) return;
      if (reduce) return;
      e.preventDefault();
      document.body.classList.add('is-leaving');
      setTimeout(function () { location.href = a.href; }, 260);
    });
    window.addEventListener('pageshow', function () { document.body.classList.remove('is-leaving'); });
  }

  /* ---------- startpagina: drie projectkaarten naast elkaar ---------- */
  function renderIndex() {
    var list = $('#plist');
    if (!list || !window.PROJECTS) return;

    window.PROJECTS.forEach(function (p, i) {
      var li = el('li', 'reveal');
      li.style.setProperty('--d', (i * 120) + 'ms');
      var a = el('a', 'pcard');
      a.href = 'project.html?p=' + encodeURIComponent(p.slug);
      var label = p.nummer + ' ' + p.titel + (p.kaartLabel ? ', ' + p.kaartLabel : '');
      a.setAttribute('aria-label', label);

      var k = p.kaart;
      var fig;
      if (k && k.src) {
        fig = figure({ src: k.src, alt: k.alt || p.titel, crop: '3/4', w: k.w || 1000, h: k.h || 1333, zoom: false }, { cls: 'pcard__img', nocap: true });
      } else {
        /* nog geen beeld: rustige placeholder */
        fig = el('figure', 'fig pcard__img');
        var ph = el('div', 'media is-missing');
        ph.style.setProperty('--r', '3/4');
        ph.setAttribute('data-name', p.kaartLabel || 'Binnenkort');
        fig.appendChild(ph);
      }
      a.appendChild(fig);

      /* titel: verschijnt bij hover/focus (muis), altijd zichtbaar op touch */
      var over = el('span', 'pcard__over');
      var t = el('span', 'pcard__title');
      t.appendChild(el('b', 'num', p.nummer));
      t.appendChild(el('span', 'ttl', p.titel));
      over.appendChild(t);
      over.appendChild(el('span', 'pcard__meta label', p.kaartLabel || p.type));
      a.appendChild(over);

      li.appendChild(a);
      list.appendChild(li);
    });
  }

  /* ---------- projectpagina: opbouw als verhaal ---------- */
  function textBlock(t) {
    var d = el('div', 'scene__text reveal');
    (Array.isArray(t) ? t : [t]).forEach(function (x) { d.appendChild(el('p', null, x)); });
    return d;
  }

  function labelBlock(t) {
    return rev(el('p', 'label scene__label', t));
  }

  function scene(s, i, p) {
    var sec = el('section', 'scene scene--' + s.layout + ((s.donker || s.layout === 'donker') ? ' is-dark' : ''));
    sec.setAttribute('data-scene', i + 1);
    var imgs = s.beelden || [];
    var c, g, mc, f;

    switch (s.layout) {
      case 'paar':
      case 'tekeningen': {
        c = el('div', 'container');
        if (s.label) c.appendChild(labelBlock(s.label));
        if (s.tekst) c.appendChild(textBlock(s.tekst));
        var pr = el('div', 'pair' + (imgs.length === 1 ? ' pair--single' : '') + (s.breedEerste ? ' pair--lead' : '') + (!s.tekst ? ' pair--first' : ''));
        imgs.forEach(function (b, k) {
          rev(f = figure(b, { fit: s.layout === 'tekeningen' ? 'contain' : null }), k * 120);
          pr.appendChild(f);
        });
        c.appendChild(pr);
        sec.appendChild(c);
        break;
      }
      case 'galerij': {
        c = el('div', 'container');
        if (s.label) c.appendChild(labelBlock(s.label));
        var gl = el('div', 'gallery gallery--plain');
        imgs.forEach(function (b, k) { gl.appendChild(rev(figure(b), (k % 2) * 120)); });
        c.appendChild(gl);
        sec.appendChild(c);
        break;
      }
      case 'bleed':
      case 'bleed-over':
      case 'slot': {
        f = rev(figure(imgs[0], { cls: 'bleed' }));
        if (s.layout === 'bleed-over') {
          var holder = el('div', 'bleed-holder');
          var m = f.firstChild;
          f.insertBefore(holder, m);
          holder.appendChild(m);
          var over = el('div', 'over reveal');
          (Array.isArray(s.tekst) ? s.tekst : [s.tekst]).forEach(function (x) { over.appendChild(el('p', null, x)); });
          holder.appendChild(over);
          sec.appendChild(f);
        } else {
          sec.appendChild(f);
          var after = el('div', 'container scene__after');
          after.appendChild(textBlock(s.tekst));
          sec.appendChild(after);
        }
        if (s.layout === 'slot' && p.galerij && p.galerij.length) {
          var gc = el('div', 'container');
          var gl2 = el('div', 'gallery');
          p.galerij.forEach(function (b, k) { gl2.appendChild(rev(figure(b), (k % 2) * 120)); });
          gc.appendChild(gl2);
          sec.appendChild(gc);
        }
        break;
      }
      default: { /* split, split-rev, sticky, stapel, donker */
        c = el('div', 'container');
        g = el('div', 'grid');
        mc = el('div', 'scene__media');
        imgs.forEach(function (b, k) { mc.appendChild(rev(figure(b), k ? 80 : 0)); });
        if (s.layout === 'sticky') { g.appendChild(mc); g.appendChild(textBlock(s.tekst)); }
        else { g.appendChild(textBlock(s.tekst)); g.appendChild(mc); }
        c.appendChild(g);
        sec.appendChild(c);
      }
    }
    return sec;
  }

  function setMeta(sel, val) { var n = $(sel); if (n) n.setAttribute('content', val); }

  function renderProject() {
    var main = $('[data-project]');
    if (!main || !window.PROJECTS) return;
    var slug = new URLSearchParams(location.search).get('p');
    var idx = -1;
    window.PROJECTS.forEach(function (p, i) { if (p.slug === slug) idx = i; });

    if (idx < 0) {
      document.title = 'Project niet gevonden — R.V.G';
      var nf = el('section', 'container nf');
      nf.appendChild(el('p', 'label', 'Niet gevonden'));
      nf.appendChild(el('h1', 'display', 'Dit project bestaat niet'));
      window.PROJECTS.forEach(function (p) {
        var a = el('a', 'link', p.nummer + ' ' + p.titel);
        a.href = 'project.html?p=' + encodeURIComponent(p.slug);
        var para = el('p'); para.appendChild(a); nf.appendChild(para);
      });
      main.appendChild(nf);
      return;
    }

    var p = window.PROJECTS[idx];
    document.title = p.titel + ' — R.V.G';
    setMeta('meta[name="description"]', p.beschrijving || p.type);
    setMeta('meta[property="og:title"]', p.titel + ' — R.V.G');
    setMeta('meta[property="og:description"]', p.beschrijving || p.type);

    /* intro */
    var intro = el('section', 'p-intro');
    var head = el('div', 'container p-intro__head');
    head.appendChild(rev(el('p', 'label', [p.vak, p.jaar, p.type].filter(Boolean).join(' · '))));
    var h1 = el('h1', 'display');
    h1.appendChild(el('b', 'num', p.nummer));
    h1.appendChild(el('span', 'ttl', p.titel));
    head.appendChild(rev(h1, 80));
    var dl = el('dl', 'meta');
    [['Opdracht', p.type], ['Locatie', p.locatie], ['Instelling', p.instelling], ['Jaar', p.jaar]].forEach(function (r) {
      if (!r[1]) return;
      var d = el('div');
      d.appendChild(el('dt', 'label', r[0]));
      d.appendChild(el('dd', null, r[1]));
      dl.appendChild(d);
    });
    head.appendChild(rev(dl, 160));
    intro.appendChild(head);
    intro.appendChild(figure(p.hero, { cls: 'bleed', eager: true }));
    main.appendChild(intro);

    /* scènes */
    p.scenes.forEach(function (s, i) { main.appendChild(scene(s, i, p)); });

    /* volgend project */
    var nx = window.PROJECTS[(idx + 1) % window.PROJECTS.length];
    var next = el('section', 'next');
    var nc = el('div', 'container');
    var link = el('a', 'next__link');
    link.href = 'project.html?p=' + encodeURIComponent(nx.slug);
    var tx = el('span');
    tx.appendChild(el('span', 'label', 'Volgend project →'));
    var nt = el('span', 'next__title display');
    nt.appendChild(el('b', 'num', nx.nummer));
    nt.appendChild(el('span', 'ttl', nx.titel));
    tx.appendChild(nt);
    link.appendChild(tx);
    link.appendChild(figure({ src: nx.hero.src, alt: nx.hero.alt, crop: '16/10', w: nx.hero.w || 1600, h: nx.hero.h || 1000, zoom: false }, { nocap: true }));
    nc.appendChild(rev(link));
    var back = el('a', 'link back', '← Terug naar projecten');
    back.href = 'index.html#projecten';
    nc.appendChild(back);
    next.appendChild(nc);
    main.appendChild(next);
  }

  /* ---------- voortgangsbalk + teller ---------- */
  function initProgress() {
    var bar = $('.progress span'), counter = $('.counter');
    if (!bar || !counter) return;
    var txt = $('.counter__txt', counter), line = $('.counter__line span', counter);
    var scenes = $$('.scene[data-scene]');
    var total = scenes.length, ticking = false;

    function update() {
      ticking = false;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var r = h > 0 ? window.pageYOffset / h : 0;
      bar.style.transform = 'scaleX(' + Math.min(1, Math.max(0, r)) + ')';
      var mid = window.innerHeight * 0.5, cur = 0;
      scenes.forEach(function (s, i) {
        var b = s.getBoundingClientRect();
        if (b.top <= mid && b.bottom >= mid) cur = i + 1;
      });
      if (cur) {
        txt.textContent = pad(cur) + ' / ' + pad(total);
        line.style.transform = 'scaleX(' + (cur / total) + ')';
        counter.classList.add('on');
      } else {
        counter.classList.remove('on');
      }
    }
    function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    update();
  }

  /* ---------- lightbox ---------- */
  function initLightbox() {
    var lb = $('.lb');
    if (!lb) return;
    var img = $('.lb__img', lb), cap = $('.lb__cap', lb), count = $('.lb__count', lb), stage = $('.lb__stage', lb);
    var closeBtn = $('.lb__close', lb), prev = $('.lb__prev', lb), next = $('.lb__next', lb);
    var items = [], cur = 0, lastFocus = null, startX = null;

    function show(i) {
      cur = (i + items.length) % items.length;
      var it = items[cur];
      lb.classList.remove('zoom');
      stage.classList.remove('is-missing');
      stage.setAttribute('data-name', (it.getAttribute('data-src') || '').split('/').pop());
      img.alt = it.getAttribute('data-alt') || '';
      img.src = it.getAttribute('data-src');
      cap.textContent = it.getAttribute('data-cap') || '';
      count.textContent = pad(cur + 1) + ' / ' + pad(items.length);
    }
    function open(i) {
      items = $$('[data-lb]');
      if (!items.length) return;
      lastFocus = document.activeElement;
      show(i);
      lb.classList.add('open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
      closeBtn.focus();
    }
    function close() {
      lb.classList.remove('open', 'zoom');
      lb.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function isOpen() { return lb.classList.contains('open'); }

    img.addEventListener('error', function () { stage.classList.add('is-missing'); });
    img.addEventListener('load', function () { stage.classList.remove('is-missing'); });
    img.addEventListener('click', function () { lb.classList.toggle('zoom'); });
    stage.addEventListener('click', function (e) { if (e.target === stage) close(); });
    closeBtn.addEventListener('click', close);
    prev.addEventListener('click', function () { show(cur - 1); });
    next.addEventListener('click', function () { show(cur + 1); });

    document.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('[data-lb]') : null;
      if (!t) return;
      var all = $$('[data-lb]');
      open(all.indexOf(t));
    });

    document.addEventListener('keydown', function (e) {
      if (!isOpen()) return;
      if (e.key === 'Escape') { close(); }
      else if (e.key === 'ArrowLeft') { show(cur - 1); }
      else if (e.key === 'ArrowRight') { show(cur + 1); }
      else if (e.key === 'Tab') {
        var f = [closeBtn, prev, next];
        var i = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus();
      }
    });

    lb.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (startX == null || lb.classList.contains('zoom')) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
  }


  /* ---------- contactformulier (verzonden via formsubmit.co) ---------- */
  function initForm() {
    var form = $('#contact-form');
    if (!form) return;
    var status = $('.form__status', form);
    var btn = $('button[type="submit"]', form);
    function say(msg, ok) {
      status.textContent = msg;
      status.className = 'form__status label ' + (ok ? 'is-ok' : 'is-err');
    }
    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return; /* zonder JS/fetch: gewone verzending */
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);
      if (data.get('_honey')) return; /* bot */
      btn.disabled = true;
      say('Bezig met verzenden…', true);
      fetch(form.getAttribute('data-ajax'), { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (res.ok && (res.j.success === true || res.j.success === 'true')) {
            form.reset();
            say('Bedankt! Je bericht is verzonden. Ik neem snel contact met je op.', true);
          } else {
            throw new Error('mislukt');
          }
        })
        .catch(function () {
          say('Verzenden is niet gelukt. Stuur me gerust rechtstreeks een e-mail.', false);
        })
        .then(function () { btn.disabled = false; });
    });
  }

  /* ---------- start ---------- */
  function init() {
    try {
      initMenu();
      initClock();
      initTransitions();
      renderIndex();
      renderProject();
      checkImgs();
      initReveal();
      initProgress();
      initLightbox();
      initForm();
    } catch (err) {
      $$('.reveal').forEach(function (e) { e.classList.add('in'); });
      if (window.console) console.error(err);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
