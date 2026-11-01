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
    m.style.setProperty('--r', b.ratio || '4/3');
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

  /* ---------- klok + jaartal ---------- */
  function initClock() {
    $$('[data-year]').forEach(function (n) { n.textContent = new Date().getFullYear(); });
    var els = $$('[data-clock]');
    if (!els.length) return;
    var f;
    try {
      f = new Intl.DateTimeFormat('nl-BE', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Europe/Brussels' });
    } catch (e) { return; }
    function tick() {
      var t = f.format(new Date());
      els.forEach(function (n) { n.textContent = 'Antwerpen ' + t; });
    }
    tick();
    setInterval(tick, 15000);
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

  /* ---------- startpagina: projectenindex ---------- */
  function renderIndex() {
    var list = $('#plist');
    if (!list || !window.PROJECTS) return;
    var fine = window.matchMedia('(hover:hover) and (pointer:fine) and (min-width:900px)');
    var pv = $('.preview');
    var items = [];
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, on = false;

    function place(x, y) {
      var w = pv.offsetWidth, h = pv.offsetHeight;
      var nx = x + 32;
      if (nx + w > window.innerWidth - 16) nx = x - w - 32;
      tx = nx;
      ty = Math.max(80, Math.min(window.innerHeight - h - 16, y - h / 2));
    }
    function loop() {
      var k = reduce ? 1 : 0.18;
      cx += (tx - cx) * k; cy += (ty - cy) * k;
      pv.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
      if (on || Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(loop);
      else raf = 0;
    }
    function show(i, x, y) {
      items.forEach(function (n, k) { n.classList.toggle('on', k === i); });
      place(x, y);
      if (!on) { cx = tx; cy = ty; }
      on = true;
      pv.classList.add('on');
      if (!raf) raf = requestAnimationFrame(loop);
    }
    function hide() { on = false; if (pv) pv.classList.remove('on'); }

    window.PROJECTS.forEach(function (p, i) {
      var li = el('li', 'reveal');
      li.style.setProperty('--d', (i * 90) + 'ms');
      var a = el('a', 'prow');
      a.href = 'project.html?p=' + encodeURIComponent(p.slug);

      var im = figure({ src: p.hero.src, alt: p.hero.alt, ratio: '4/3', w: 1200, h: 900, zoom: false }, { cls: 'prow__img', nocap: true });
      a.appendChild(im);

      var t = el('span', 'prow__title');
      t.appendChild(el('b', 'num', p.nummer));
      t.appendChild(el('span', 'ttl', p.titel));
      a.appendChild(t);

      var m = el('span', 'prow__meta label');
      m.appendChild(document.createTextNode(p.jaar));
      m.appendChild(document.createElement('br'));
      m.appendChild(document.createTextNode(p.type));
      a.appendChild(m);

      if (pv) {
        var src = p.voorbeeld || p.hero;
        var pf = figure({ src: src.src, alt: src.alt, ratio: '4/3', w: 1200, h: 900, zoom: false }, { cls: 'preview__item', nocap: true });
        pv.appendChild(pf);
        items.push(pf);
        a.addEventListener('pointerenter', function (e) {
          if (e.pointerType === 'touch' || !fine.matches) return;
          show(i, e.clientX, e.clientY);
        });
        a.addEventListener('pointermove', function (e) { if (on) place(e.clientX, e.clientY); });
        a.addEventListener('pointerleave', hide);
        a.addEventListener('focus', function () {
          if (!fine.matches) return;
          var r = a.getBoundingClientRect();
          show(i, r.left + r.width * 0.6, r.top + r.height / 2);
        });
        a.addEventListener('blur', hide);
      }
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

  function scene(s, i, p) {
    var sec = el('section', 'scene scene--' + s.layout);
    sec.setAttribute('data-scene', i + 1);
    var imgs = s.beelden || [];
    var c, g, mc, f;

    switch (s.layout) {
      case 'paar':
      case 'tekeningen': {
        c = el('div', 'container');
        c.appendChild(textBlock(s.tekst));
        var pr = el('div', 'pair');
        imgs.forEach(function (b, k) {
          rev(f = figure(b, { fit: s.layout === 'tekeningen' ? 'contain' : null }), k * 120);
          pr.appendChild(f);
        });
        c.appendChild(pr);
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
          var gl = el('div', 'gallery');
          p.galerij.forEach(function (b, k) { gl.appendChild(rev(figure(b), (k % 2) * 120)); });
          gc.appendChild(gl);
          sec.appendChild(gc);
        }
        break;
      }
      default: { /* split, split-rev, sticky, donker */
        c = el('div', 'container');
        g = el('div', 'grid');
        mc = rev(el('div', 'scene__media'));
        imgs.forEach(function (b) { mc.appendChild(figure(b)); });
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
    link.appendChild(figure({ src: nx.hero.src, alt: nx.hero.alt, ratio: '16/10', w: 1600, h: 1000, zoom: false }, { nocap: true }));
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
    } catch (err) {
      $$('.reveal').forEach(function (e) { e.classList.add('in'); });
      if (window.console) console.error(err);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
