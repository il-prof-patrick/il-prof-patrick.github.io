/* Animazioni illustrate a passi (21 ottobre 2026).
   Kit comune: lettore (Avanti, Indietro, Da capo, passi), tavolozza e disegni riusabili.
   Regole di stile e di verifica: docs/linee-guida-animazioni.md.
   Ogni scena fornisce build(svg, Q) -> S e un elenco di passi function(S, tl, Q) che
   costruiscono SOLO timeline: così Indietro e Da capo ricostruiscono lo stato esatto. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var uid = 0, registro = {};

  function s(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function h(tag, attrs, parent, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  }
  /* testo SVG: t(parent, x, y, 'testo', {s:dimensione, w:peso, c:colore, a:'middle'|'start'|'end', ls:spaziatura}) */
  function t(p, x, y, txt, o) {
    o = o || {};
    var e = s('text', { x: x, y: y, 'text-anchor': o.a || 'middle', 'font-size': o.s || 15, 'font-weight': o.w || 600, fill: o.c || C.ink }, p);
    if (o.ls) e.setAttribute('letter-spacing', o.ls);
    e.textContent = txt;
    return e;
  }
  function g(p, x, y, sc, attrs) {
    var e = s('g', attrs || {}, p);
    e.setAttribute('transform', 'translate(' + (x || 0) + ' ' + (y || 0) + ')' + (sc && sc !== 1 ? ' scale(' + sc + ')' : ''));
    return e;
  }

  /* ---- tavolozza (le scene hanno uno sfondo proprio: valgono in tema chiaro e scuro) ---- */
  var C = {
    ink: '#1c2b2a', mute: '#5d6e6c', bg: '#eef3f1', white: '#ffffff',
    brand: '#0a6f66', brand2: '#13a596', brandBg: '#dcefec',
    amber: '#e9a313', amberDk: '#b36b00', amberBg: '#fbeccb',
    red: '#c0392b', redBg: '#fbe5e3', blue: '#3f82a6', blueBg: '#dcebf3',
    grass: '#cfe3c0', grass2: '#b9d6a6', sky: '#dbeaf0', road: '#c3c9c6', wood: '#a6804a', woodDk: '#8a6a3a',
    steel: '#7d8f9d', steelLt: '#cfd8dc', line: '#b8c4c0', skin: '#e9b090'
  };

  /* ---- disegni riusabili (tutti centrati in 0,0) ---- */
  var D = {};
  D.defs = function (svg, id) {
    var d = s('defs', null, svg);
    var f = s('filter', { id: 'sh' + id, x: '-30%', y: '-30%', width: '160%', height: '160%' }, d);
    s('feDropShadow', { dx: 0, dy: 2, stdDeviation: 2, 'flood-color': '#0b2a2a', 'flood-opacity': '.25' }, f);
    return d;
  };
  D.ombra = function (id) { return 'url(#sh' + id + ')'; };
  D.nuvola = function (p, x, y, sc, col, o) {
    var e = g(p, x, y, sc);
    s('path', { d: 'M-62 22Q-84 22 -84 0Q-84 -22 -56 -23Q-50 -52 -16 -52Q14 -54 26 -30Q62 -32 64 -2Q66 22 40 22Z', fill: col || '#fff', stroke: (o && o.stroke) || C.line, 'stroke-width': 2 }, e);
    return e;
  };
  D.telefono = function (p, x, y, sc, o) {
    o = o || {};
    var e = g(p, x, y, sc);
    s('rect', { x: -14, y: -26, width: 28, height: 52, rx: 6, fill: o.body || '#2c3b3a' }, e);
    s('rect', { class: 'sc', x: -11, y: -21, width: 22, height: 40, rx: 3, fill: o.screen || '#fff' }, e);
    s('rect', { x: -4, y: 21, width: 8, height: 2.5, rx: 1.2, fill: '#6d7b79' }, e);
    return e;
  };
  D.torre = function (p, x, y, sc, o) {
    o = o || {};
    var e = g(p, x, y, sc);
    s('path', { d: 'M-16 40L-4 -30H4L16 40Z', fill: 'none', stroke: C.steel, 'stroke-width': 3, 'stroke-linejoin': 'round' }, e);
    s('path', { d: 'M-12 24H12M-8 8H8M-5 -8H5', stroke: C.steel, 'stroke-width': 2.5 }, e);
    s('rect', { x: -14, y: -44, width: 7, height: 20, rx: 2, fill: C.white, stroke: C.steel, 'stroke-width': 2 }, e);
    s('rect', { x: -3.5, y: -50, width: 7, height: 22, rx: 2, fill: C.white, stroke: C.steel, 'stroke-width': 2 }, e);
    s('rect', { x: 7, y: -44, width: 7, height: 20, rx: 2, fill: C.white, stroke: C.steel, 'stroke-width': 2 }, e);
    s('circle', { class: 'led', cx: 0, cy: -56, r: 3.2, fill: o.led || C.brand2 }, e);
    return e;
  };
  D.server = function (p, x, y, sc, o) {
    o = o || {};
    var e = g(p, x, y, sc);
    s('rect', { x: -26, y: -32, width: 52, height: 64, rx: 5, fill: o.body || '#34495b' }, e);
    for (var i = 0; i < 4; i++) {
      s('rect', { x: -21, y: -27 + i * 15, width: 42, height: 11, rx: 2.5, fill: '#4b6378' }, e);
      s('circle', { class: 'led', cx: 14, cy: -21.5 + i * 15, r: 2.2, fill: o.led || '#2fc4b2' }, e);
      s('rect', { x: -17, y: -24 + i * 15, width: 16, height: 3, rx: 1.5, fill: '#6f879b' }, e);
    }
    return e;
  };
  D.laptop = function (p, x, y, sc, o) {
    o = o || {};
    var e = g(p, x, y, sc);
    s('rect', { x: -28, y: -22, width: 56, height: 38, rx: 4, fill: '#2c3b3a' }, e);
    s('rect', { class: 'sc', x: -24, y: -18, width: 48, height: 30, rx: 2, fill: o.screen || '#fff' }, e);
    s('path', { d: 'M-36 20H36L30 16H-30Z', fill: C.steel }, e);
    return e;
  };
  D.auto = function (p, x, y, sc, col) {
    var e = g(p, x, y, sc);
    s('rect', { x: -26, y: -13, width: 52, height: 26, rx: 9, fill: col || C.amber, stroke: 'rgba(0,0,0,.18)', 'stroke-width': 1.5 }, e);
    s('path', { d: 'M4 -10Q16 -10 18 0Q16 10 4 10Z', fill: '#cfe6ee' }, e);
    s('path', { d: 'M-16 -10H-6V10H-16Z', fill: 'rgba(255,255,255,.35)' }, e);
    s('rect', { x: 22, y: -10, width: 4, height: 5, rx: 1.5, fill: '#fff3c4' }, e);
    s('rect', { x: 22, y: 5, width: 4, height: 5, rx: 1.5, fill: '#fff3c4' }, e);
    return e;
  };
  D.chip = function (p, x, y, sc, col) {
    var e = g(p, x, y, sc);
    s('rect', { x: -16, y: -16, width: 32, height: 32, rx: 4, fill: col || '#2c3b3a' }, e);
    s('rect', { x: -9, y: -9, width: 18, height: 18, rx: 2, fill: '#13a596' }, e);
    for (var i = -1; i <= 1; i++) {
      s('rect', { x: -20, y: i * 8 - 1.5, width: 5, height: 3, fill: '#2c3b3a' }, e);
      s('rect', { x: 15, y: i * 8 - 1.5, width: 5, height: 3, fill: '#2c3b3a' }, e);
      s('rect', { x: i * 8 - 1.5, y: -20, width: 3, height: 5, fill: '#2c3b3a' }, e);
      s('rect', { x: i * 8 - 1.5, y: 15, width: 3, height: 5, fill: '#2c3b3a' }, e);
    }
    return e;
  };
  D.camera = function (p, x, y, sc) {
    var e = g(p, x, y, sc);
    s('rect', { x: -22, y: -12, width: 36, height: 24, rx: 5, fill: '#e9eef0', stroke: C.steel, 'stroke-width': 2 }, e);
    s('path', { d: 'M14 -6L26 -12V12L14 6Z', fill: '#cfd8dc', stroke: C.steel, 'stroke-width': 2, 'stroke-linejoin': 'round' }, e);
    s('circle', { cx: -6, cy: 0, r: 7, fill: '#2c3b3a' }, e);
    s('circle', { cx: -6, cy: 0, r: 3, fill: '#4b6378' }, e);
    s('circle', { class: 'led', cx: 8, cy: -7, r: 2, fill: '#2fc4b2' }, e);
    s('rect', { x: -4, y: 12, width: 8, height: 8, fill: C.steel }, e);
    return e;
  };
  D.freccia = function (p, d, col, w) {
    return s('path', { d: d, fill: 'none', stroke: col || C.mute, 'stroke-width': w || 2.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, p);
  };
  /* chip di testo (etichetta con sfondo) */
  D.etichetta = function (p, x, y, txt, o) {
    o = o || {};
    var e = g(p, x, y, 1), sz = o.s || 14, w = (o.w || (txt.length * sz * .58 + 22));
    s('rect', { x: -w / 2, y: -(sz + 8) / 2 - 1, width: w, height: sz + 12, rx: (sz + 12) / 2, fill: o.bg || '#fff', stroke: o.line || C.line, 'stroke-width': 1.5 }, e);
    t(e, 0, sz / 2 - 1, txt, { s: sz, w: 700, c: o.c || C.ink });
    return e;
  };

  /* percorso invisibile (una o più tratte): pt(f) dà il punto alla frazione f (0..1) */
  function rotta(parent, ds) {
    var els = ds.map(function (d) { return s('path', { d: d, fill: 'none', stroke: 'none' }, parent); });
    var lens = els.map(function (e) { return e.getTotalLength(); }), tot = lens.reduce(function (a, b) { return a + b; }, 0);
    return {
      pt: function (f) {
        var d = Math.max(0, Math.min(1, f)) * tot, i = 0;
        while (i < els.length - 1 && d > lens[i]) { d -= lens[i]; i++; }
        return els[i].getPointAtLength(Math.min(d, lens[i]));
      }
    };
  }
  /* un punto che percorre la rotta: tl.to(P,{f:1}) con onUpdate = muovi(el, rotta, P) */
  function muovi(el, r, P, off) {
    var p = r.pt(P.f); el.setAttribute('transform', 'translate(' + (p.x + (off ? off[0] : 0)) + ' ' + (p.y + (off ? off[1] : 0)) + ')');
  }

  /* ---- lettore ---- */
  function mount(el, cfg) {
    var id = ++uid, N = cfg.passi.length, k = 0, cur = null, svg, S, ctx, Q;
    el.classList.add('anim2');
    el.innerHTML = '';
    h('div', { class: 'a2-titolo' }, el, '<b>Animazione</b> · ' + cfg.titolo);
    var scena = h('div', { class: 'a2-scena' }, el);
    svg = s('svg', { viewBox: '0 0 ' + cfg.viewBox[0] + ' ' + cfg.viewBox[1], role: 'img', 'aria-label': cfg.aria }, scena);
    var desc = h('p', { class: 'a2-desc', 'aria-live': 'polite' }, el);
    var ctrl = h('div', { class: 'a2-ctrl' }, el);
    var bI = h('button', { type: 'button', class: 's' }, ctrl, 'Indietro');
    var bA = h('button', { type: 'button' }, ctrl, 'Avanti');
    var bR = h('button', { type: 'button', class: 's' }, ctrl, 'Da capo');
    var pun = h('span', { class: 'a2-pun', 'aria-hidden': 'true' }, ctrl);
    for (var i = 0; i < N; i++) h('i', null, pun);
    var nn = h('span', { class: 'a2-n' }, ctrl);

    function ui() {
      desc.innerHTML = k === 0 ? cfg.inizio : cfg.passi[k - 1];
      var pp = pun.children;
      for (var j = 0; j < pp.length; j++) pp[j].className = j < k ? 'on' : '';
      bI.disabled = k === 0; bA.disabled = k === N;
      bA.textContent = k === 0 ? 'Avvia' : 'Avanti';
      nn.textContent = 'passo ' + k + ' di ' + N;
    }
    function fermaCorrente() { if (cur) { cur.progress(1); cur = null; } }
    function costruisci() {
      if (ctx) ctx.revert();
      svg.innerHTML = '';
      Q = { id: id, svg: svg, defs: D.defs(svg, id), ombra: D.ombra(id) };
      ctx = gsap.context(function () { S = cfg.build(svg, Q); });
    }
    function passo(i, anima) {
      ctx.add(function () {
        var tl = gsap.timeline();
        cfg.steps[i - 1](S, tl, Q);
        if (anima) {
          cur = tl; tl.timeScale(reduce ? 100 : 1);
          tl.eventCallback('onComplete', function () { if (cur === tl) cur = null; });
        } else tl.progress(1);
      });
    }
    function vaiA(n, anima) {      // ricostruisce lo stato esatto del passo n
      fermaCorrente(); costruisci(); k = n;
      for (var i = 1; i <= n; i++) passo(i, anima && i === n);
      ui();
    }
    bA.onclick = function () { fermaCorrente(); if (k < N) { k++; passo(k, true); ui(); } };
    bI.onclick = function () { if (k > 0) vaiA(k - 1, false); };
    bR.onclick = function () { vaiA(0, false); };
    costruisci(); ui();
    registro[cfg.id] = {
      test: function (n, tt) {     // per le verifiche a fotogrammi
        vaiA(Math.max(0, n - 1), false);
        if (n > 0) {
          k = n;
          ctx.add(function () {
            var tl = gsap.timeline(); cfg.steps[n - 1](S, tl, Q);
            tl.pause(); tl.time(tt || 0); cur = tl;
          });
          ui();
        }
      }
    };
    return registro[cfg.id];
  }

  window.Anim2 = { s: s, h: h, t: t, g: g, C: C, D: D, mount: mount, registro: registro, reduce: reduce, rotta: rotta, muovi: muovi, scene: {} };

  /* verifica a fotogrammi: #a2=ID&k=PASSO&t=SECONDI  (mostra solo quella figura) */
  window.addEventListener('load', function () {
    var m = location.hash.match(/a2=([\w-]+)&k=(\d+)(?:&t=([\d.]+))?/);
    if (!m || !registro[m[1]]) return;
    var fig = document.getElementById(m[1]);
    registro[m[1]].test(+m[2], m[3] ? +m[3] : 0);
    document.body.innerHTML = '';
    document.body.style.cssText = 'padding:12px;background:#fbfaf6';
    var w = document.createElement('main'); w.className = 'lezione'; w.style.cssText = 'max-width:900px;margin:0 auto;padding:0';
    w.appendChild(fig); document.body.appendChild(w);
    gsap.globalTimeline.pause();
  });
})();
