/* Modulo Logica e IA simbolica — aiuti comuni a tutte le scene e ai widget (montato in testa a ogni assets/capitolo-NN.js da monta_js.py) */
(function () {
  'use strict';
  var K = window.SCENA, S = K.S, costruisci = K.costruisci, W = window.WIDGET;
  var PELLE = '#e8b48c', CAPELLI = '#3a2b24', VERDE = 'var(--brand-600)', AMBRA = 'var(--accent-500)';

  /* Punta di freccia comune (una per scena, colore del tratto). */
  function frecce(svg, pre) {
    var d = S(svg, 'defs', {});
    [['ok', VERDE], ['att', AMBRA], ['n', 'var(--border-strong)']].forEach(function (c) {
      var m = S(d, 'marker', { id: pre + '-' + c[0], viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 11, markerHeight: 11, markerUnits: 'userSpaceOnUse', orient: 'auto' });
      S(m, 'path', { d: 'M0 0 L10 5 L0 10 z', fill: c[1] });
    });
  }

  /* Persona con volto minimo e braccia corte, in piedi con i piedi in (x, y).
     o: { maglia, capelli: 'corti'|'coda', binocolo: 'occhi'|'mano', p, f } */
  function persona(svg, x, y, o) {
    o = o || {};
    var g = S(svg, 'g', K.pa(o)), maglia = o.maglia || VERDE;
    function E(t, a) { return S(g, t, a); }
    // gambe e scarpe
    E('path', { d: 'M' + (x - 7) + ' ' + (y - 36) + ' V' + (y - 4) + ' M' + (x + 7) + ' ' + (y - 36) + ' V' + (y - 4), stroke: 'var(--ink-muted)', 'stroke-width': 9, 'stroke-linecap': 'round', fill: 'none' });
    E('path', { d: 'M' + (x - 13) + ' ' + y + ' h11 M' + (x + 2) + ' ' + y + ' h11', stroke: 'var(--ink)', 'stroke-width': 6, 'stroke-linecap': 'round' });
    // busto
    E('rect', { x: x - 16, y: y - 80, width: 32, height: 48, rx: 10, fill: maglia });
    // braccia (spalla → gomito in basso → mano); con il binocolo agli occhi le mani salgono al viso
    var mani;
    if (o.binocolo === 'occhi') {
      E('path', { d: 'M' + (x - 13) + ' ' + (y - 74) + ' L' + (x - 18) + ' ' + (y - 58) + ' L' + (x - 6) + ' ' + (y - 96), stroke: maglia, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' });
      E('path', { d: 'M' + (x + 13) + ' ' + (y - 74) + ' L' + (x + 18) + ' ' + (y - 58) + ' L' + (x + 6) + ' ' + (y - 96), stroke: maglia, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' });
      mani = [[x - 6, y - 96], [x + 6, y - 96]];
    } else {
      E('path', { d: 'M' + (x - 14) + ' ' + (y - 74) + ' L' + (x - 22) + ' ' + (y - 54) + ' L' + (x - 18) + ' ' + (y - 36), stroke: maglia, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' });
      E('path', { d: 'M' + (x + 14) + ' ' + (y - 74) + ' L' + (x + 22) + ' ' + (y - 54) + ' L' + (x + 18) + ' ' + (y - 36), stroke: maglia, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' });
      mani = [[x - 18, y - 36], [x + 18, y - 36]];
    }
    // testa: collo, viso, capelli, occhi con pupille, sopracciglia, bocca
    E('rect', { x: x - 4, y: y - 88, width: 8, height: 8, fill: PELLE });
    var ty = y - 104;
    if (o.capelli === 'coda') E('path', { d: 'M' + (x + 12) + ' ' + (ty - 6) + ' q12 6 8 24', stroke: CAPELLI, 'stroke-width': 7, 'stroke-linecap': 'round', fill: 'none' });
    E('circle', { cx: x, cy: ty, r: 16, fill: PELLE });
    E('path', { d: 'M' + (x - 16) + ' ' + (ty - 1) + ' a16 16 0 0 1 32 0 q-8 -9 -16 -7 q-9 -2 -16 7 z', fill: CAPELLI });
    if (o.binocolo !== 'occhi') {
      [-6, 6].forEach(function (d) {
        E('circle', { cx: x + d, cy: ty + 2, r: 3.4, fill: '#fff' });
        E('circle', { cx: x + d, cy: ty + 2.4, r: 1.9, fill: 'var(--ink)' });
        E('path', { d: 'M' + (x + d - 4) + ' ' + (ty - 4) + ' h8', stroke: CAPELLI, 'stroke-width': 1.6, 'stroke-linecap': 'round' });
      });
    }
    E('path', { d: 'M' + (x - 5) + ' ' + (ty + 9) + ' q5 4 10 0', stroke: 'var(--ink)', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' });
    // binocolo
    if (o.binocolo === 'occhi') binocolo(g, x, ty + 1);
    else if (o.binocolo === 'mano') binocolo(g, mani[1][0] + 2, mani[1][1] - 6);
    // mani (sopra il binocolo)
    mani.forEach(function (m) { E('circle', { cx: m[0], cy: m[1], r: 4.2, fill: PELLE }); });
    return g;
  }
  function binocolo(g, x, y) {
    [-6, 6].forEach(function (d) { S(g, 'rect', { x: x + d - 5, y: y - 6, width: 10, height: 13, rx: 3, fill: 'var(--ink)' }); });
    S(g, 'rect', { x: x - 2, y: y - 3, width: 4, height: 6, fill: 'var(--ink-muted)' });
  }

  /* Riga di testo con alcune parole in evidenza: parti = [[testo, 'b'|'a'|''], …] */
  function riga(svg, x, y, parti, o, anchor) {
    var t = S(svg, 'text', Object.assign({ x: x, y: y, 'class': 't-n', 'text-anchor': anchor || 'start' }, K.pa(o)));
    parti.forEach(function (p) {
      var s = S(t, 'tspan', {}, p[0]);
      if (p[1] === 'b') { s.setAttribute('font-weight', 700); s.setAttribute('fill', 'var(--brand-ink)'); }
      if (p[1] === 'a') { s.setAttribute('font-weight', 700); s.setAttribute('fill', 'var(--accent-ink)'); }
      if (p[1] === 'k') { s.setAttribute('font-weight', 700); }
    });
    return t;
  }
