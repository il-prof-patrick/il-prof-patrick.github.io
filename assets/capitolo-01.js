/* Capitolo 1 · La comunicazione digitale — schemi, animazioni a passi e widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var croce = K.croce, linea = K.linea, fulmine = K.fulmine, mobile = K.mobile, fermo = K.fermo;
  var ROSSO = 'var(--errore-ink)', BLU = 'var(--brand-600)', FIBRA = 'var(--accent-500)', RAME = '#b5651d', ACQUA = 'var(--brand-500)';

  function freccia(svg, x1, y1, x2, y2, cls, o) {
    var a = Math.atan2(y2 - y1, x2 - x1), L = 9;
    var g = S(svg, 'g', pa(o));
    S(g, 'path', { d: 'M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2, 'class': cls || 'lin' });
    S(g, 'path', { d: 'M' + x2 + ' ' + y2 + ' L' + (x2 - L * Math.cos(a - .45)).toFixed(1) + ' ' + (y2 - L * Math.sin(a - .45)).toFixed(1) + ' L' + (x2 - L * Math.cos(a + .45)).toFixed(1) + ' ' + (y2 - L * Math.sin(a + .45)).toFixed(1) + ' Z', fill: 'var(--ink-muted)' });
    return g;
  }

  /* ===================== 1.1 · schema della comunicazione ===================== */
  costruisci('s-comunicazione', function (svg, A) {
    A.txt(20, 22, 'LO SCHEMA', 't-eti', {}, 'start');
    // riga 1: lo schema classico
    var y = 80;
    A.icona('user', 50, y - 6, { s: 38, nome: 'mittente' });
    A.box(120, y - 24, 110, 44, 'nodo evid'); A.txt(175, y + 4, 'codifica', 't-b');
    A.box(490, y - 24, 110, 44, 'nodo evid'); A.txt(545, y + 4, 'decodifica', 't-b');
    A.icona('user', 668, y - 6, { s: 38, nome: 'destinatario' });
    freccia(svg, 74, y - 2, 116, y - 2); freccia(svg, 230, y - 2, 486, y - 2, 'lin att'); freccia(svg, 600, y - 2, 642, y - 2);
    A.txt(358, y + 20, 'canale', 't-a');
    A.disp('nuvola', 358, y - 44, { s: .8 }); A.txt(358, y - 40, 'rumore', 't-e');
    fulmine(svg, 330, y - 28, {}); fulmine(svg, 384, y - 28, {});
    // riga 2: il messaggio WhatsApp
    A.path('M20 140 L700 140', 'lin').setAttribute('stroke-dasharray', '4 5');
    A.txt(20, 166, 'UN MESSAGGIO WHATSAPP', 't-eti', {}, 'start');
    var y2 = 218;
    A.disp('telefono', 50, y2 - 4, { s: .8 }); A.txt(50, y2 + 38, 'tu che scrivi', 't-s');
    A.box(110, y2 - 22, 130, 40, 'nodo'); A.txt(175, y2 - 4, '“Ci vediamo', 't-s'); A.txt(175, y2 + 11, 'alle 5?” → bit', 't-s');
    A.disp('antenna', 290, y2 - 4, { s: .7 }); A.icona('cable', 358, y2 - 4, { s: 30 }); A.disp('antenna', 426, y2 - 4, { s: .7 });
    A.txt(358, y2 + 38, 'onde radio, fibra, cavi', 't-a');
    A.box(480, y2 - 22, 130, 40, 'nodo'); A.txt(545, y2 - 4, 'bit → “Ci vediamo', 't-s'); A.txt(545, y2 + 11, 'alle 5?”', 't-s');
    A.disp('telefono', 670, y2 - 4, { s: .8 }); A.txt(670, y2 + 38, 'il tuo amico', 't-s');
    freccia(svg, 72, y2 - 4, 106, y2 - 4); freccia(svg, 240, y2 - 4, 270, y2 - 4); freccia(svg, 310, y2 - 4, 336, y2 - 4, 'lin att'); freccia(svg, 380, y2 - 4, 406, y2 - 4, 'lin att'); freccia(svg, 446, y2 - 4, 476, y2 - 4); freccia(svg, 610, y2 - 4, 646, y2 - 4);
  });

  /* ===================== 1.2 · banda e latenza: due tubi ===================== */
  costruisci('f-tubi', function (svg, A) {
    var pA = 'M80 140 H140 V60 H240 V140 H340 V60 H440 V140 H540 V60 H620 V108';
    var pB = 'M80 168 V200 H180 V228';
    // rubinetto
    A.box(36, 124, 44, 56, 'nodo attivo'); A.box(48, 112, 20, 12, 'nodo'); A.txt(58, 100, 'rubinetto', 't-s');
    // tubi (contorno + interno vuoto)
    linea(svg, pA, 'var(--border-strong)', 24, {}).setAttribute('stroke-linecap', 'butt');
    linea(svg, pA, 'var(--surface-000)', 18, {}).setAttribute('stroke-linecap', 'butt');
    linea(svg, pB, 'var(--border-strong)', 9, {}).setAttribute('stroke-linecap', 'butt');
    linea(svg, pB, 'var(--surface-000)', 4, {}).setAttribute('stroke-linecap', 'butt');
    A.txt(390, 24, 'TUBO A · largo ma lunghissimo', 't-eti');
    A.txt(20, 228, 'TUBO B', 't-eti', {}, 'start'); A.txt(20, 244, 'stretto e corto', 't-s', {}, 'start');
    // bicchieri
    function bicchiere(x, y, w, h) { A.path('M' + x + ' ' + y + ' L' + (x + 4) + ' ' + (y + h) + ' L' + (x + w - 4) + ' ' + (y + h) + ' L' + (x + w) + ' ' + y, 'lin').style.strokeWidth = '3'; }
    bicchiere(588, 114, 64, 86); bicchiere(150, 234, 60, 60);
    // cronometri
    A.icona('timer', 688, 128, { s: 24 }); A.txt(688, 160, '0 ms', 't-mono', { f: 0 });
    A.icona('timer', 244, 252, { s: 22 }); A.txt(262, 258, '0 ms', 't-mono', { f: 0 }, 'start');
    // vie delle gocce
    A.via('tB', pB); A.via('tA1', 'M80 140 H140 V60 H240 V140 H340 V60'); A.via('tA2', 'M340 60 H440 V140 H540 V60 H620 V108');
    // 1: la prima goccia arriva subito in B, in A è a metà strada
    A.pk('tB', { p: 1, f: 2, resta: true, d: 600 }, null, 'goccia');
    A.pk('tA1', { p: 1, f: 1, resta: true, d: 2600 }, null, 'goccia');
    A.txt(262, 258, 'prima goccia: subito → latenza bassa', 't-b', { p: 1, f: 3, r: 600 }, 'start');
    A.txt(688, 160, '…', 't-mono', { p: 1, f: 1 });
    // 2: arriva anche in A
    A.pk('tA2', { p: 2, f: 2, resta: true, d: 2600 }, null, 'goccia');
    A.txt(688, 160, 'tardi', 't-e', { p: 2, r: 2600 });
    A.txt(578, 186, 'prima goccia: tardi → latenza alta', 't-e', { p: 2, f: 3, r: 2700 }, 'end');
    // 3: l'acqua scorre: il bicchiere A si riempie in fretta, il B goccia a goccia
    linea(svg, pA, ACQUA, 14, { p: 3 }).setAttribute('stroke-linecap', 'butt');
    linea(svg, pB, ACQUA, 3, { p: 3 }).setAttribute('stroke-linecap', 'butt');
    [0, 1, 2, 3].forEach(function (k) { S(svg, 'rect', Object.assign({ x: 594 + k * 0.6, y: 180 - k * 18, width: 52 - k * 1.2, height: 18, fill: ACQUA, 'fill-opacity': .75 }, pa({ p: 3, r: 300 + k * 450 }))); });
    S(svg, 'rect', Object.assign({ x: 155, y: 284, width: 50, height: 8, fill: ACQUA, 'fill-opacity': .75 }, pa({ p: 3, r: 1600 })));
    A.txt(578, 206, 'si riempie in fretta → banda alta', 't-b', { p: 3, f: 3, r: 1500 }, 'end');
    A.txt(244, 284, 'goccia dopo goccia → banda bassa', 't-a', { p: 3, f: 3, r: 1700 }, 'start');
    // 4: che cosa rappresentano
    A.box(380, 210, 320, 44, 'nodo', { p: 4 }); A.txt(540, 228, 'A = satellite geostazionario', 't', { p: 4 }); A.txt(540, 246, 'tanta banda, latenza alta', 't-m', { p: 4 });
    A.box(272, 262, 300, 44, 'nodo evid', { p: 4, r: 300 }); A.txt(422, 280, 'B = connessione lenta ma vicina', 't-b', { p: 4, r: 300 }); A.txt(422, 298, 'poca banda, latenza bassa', 't-m', { p: 4, r: 300 });
  });

  /* ===================== 1.2 · il jitter ===================== */
  costruisci('f-jitter', function (svg, A) {
    A.icona('user', 52, 64, { s: 40, nome: 'chi parla' });
    A.disp('computer', 666, 66, {}); A.txt(666, 112, 'chi riceve', 't');
    A.disp('nuvola', 360, 70, { s: 1.1 }); A.txt(360, 76, 'rete', 't-s');
    A.path('M90 70 L622 70', 'lin').setAttribute('stroke-dasharray', '3 5');
    A.via('jv', 'M92 70 L620 70');
    // linea del tempo
    var X0 = 160, X1 = 690, T = 5600; function x(t) { return X0 + t / T * (X1 - X0); }
    var righe = [['partenza', 178], ['arrivo', 216], ['video', 254]];
    righe.forEach(function (r, k) { A.txt(X0 - 12, r[1] + 4, r[0], 't-s', k === 2 ? { p: 3 } : {}, 'end'); A.path('M' + X0 + ' ' + r[1] + ' L' + X1 + ' ' + r[1], 'lin', k === 2 ? { p: 3 } : {}); });
    A.txt(X1, 288, 'tempo →', 't-m', {}, 'end');
    function tacca(t, y, n, cls, o) { var g = A.g(o); S(g, 'rect', { x: x(t) - 9, y: y - 10, width: 18, height: 20, rx: 2, 'class': cls || 'pkt' }); S(g, 'text', { x: x(t), y: y + 4, 'text-anchor': 'middle', 'class': cls === 'pkt-ok' ? 't-on' : 't-mono-on', style: 'font-size:11px' }, n); return g; }
    var PASSO = 330;
    // 1: rete stabile
    var arr1 = [];
    for (var k = 1; k <= 8; k++) {
      var t0 = (k - 1) * PASSO, d = 1200; arr1.push(t0 + d);
      A.pk('jv', { p: 1, f: 1, r: t0, d: d }, String(k));
      tacca(t0, 178, k, 'pkt', { p: 1, f: 2, r: t0 });
      tacca(t0 + d, 216, k, 'pkt', { p: 1, f: 1, r: t0 + d });
    }
    A.txt(640, 140, 'video fluido', 't-b', { p: 1, f: 1, r: 1300 });
    // 2: jitter: partono regolari, arrivano ammucchiati e con buchi
    var arr2 = [1500, 1900, 2950, 3000, 4350, 4450, 4650, 4950];
    for (var j = 1; j <= 8; j++) {
      var s0 = (j - 1) * PASSO, d2 = arr2[j - 1] - s0;
      A.pk('jv', { p: 2, f: 2, r: s0, d: d2 }, String(j));
      tacca(arr2[j - 1], 216, j, 'pkt', { p: 2, f: 3, r: arr2[j - 1] });
    }
    A.txt(640, 140, 'immagine bloccata…', 't-e', { p: 2, f: 2, r: 2000 });
    A.txt(640, 158, '…poi salta avanti', 't-e', { p: 2, f: 2, r: 4400 });
    S(svg, 'rect', Object.assign({ x: x(3000) + 12, y: 203, width: x(4350) - x(3000) - 24, height: 26, rx: 3, fill: 'none', stroke: 'var(--errore-ink)', 'stroke-width': 2, 'stroke-dasharray': '4 3' }, pa({ p: 2, f: 3, r: 4400 })));
    A.txt((x(3000) + x(4350)) / 2, 240, 'buco', 't-e', { p: 2, f: 2, r: 4400 });
    // 3: il buffer rimette in fila
    A.box(560, 32, 50, 76, 'nodo evid', { p: 3 }); A.txt(585, 124, 'buffer', 't-b', { p: 3 });
    for (var q = 1; q <= 8; q++) tacca(3300 + (q - 1) * 270, 254, q, 'pkt-ok', { p: 3, r: 400 + q * 150 });
    A.txt(640, 140, 'video fluido', 't-b', { p: 3, r: 1600 });
    A.txt(640, 158, 'con un piccolo ritardo', 't-m', { p: 3, r: 1600 });
  });

  /* ===================== 1.3 · le due famiglie di mezzi ===================== */
  costruisci('s-mezzi', function (svg, A) {
    A.box(250, 8, 220, 40, 'nodo attivo'); A.txt(360, 33, 'mezzi trasmissivi', 't-on');
    A.path('M360 48 L360 62 M180 62 L540 62 M180 62 L180 76 M540 62 L540 76');
    A.box(70, 76, 220, 36, 'nodo evid'); A.txt(180, 99, 'GUIDATI · in un cavo', 't-b');
    A.box(430, 76, 220, 36, 'nodo evid'); A.txt(540, 99, 'NON GUIDATI · nell’aria', 't-b');
    function foglia(x, y, ic, nome, uso, dx) { A.icona(ic, x, y, { s: 28 }); A.txt(x + 24, y - 1, nome, 't', {}, 'start'); A.txt(x + 24, y + 16, uso, 't-m', {}, 'start'); }
    A.path('M40 112 L40 262', 'lin'); A.path('M400 112 L400 280', 'lin');
    [[150, 'cable', 'doppino (rame)', 'cavo Ethernet, linea telefonica'], [205, 'tv', 'cavo coassiale (rame)', 'antenna della TV'], [260, 'sparkles', 'fibra ottica', 'dorsali e FTTH: luce nel vetro']].forEach(function (f) { A.path('M40 ' + f[0] + ' L58 ' + f[0], 'lin'); foglia(76, f[0], f[1], f[2], f[3]); });
    [[140, 'wifi', 'Wi-Fi', 'la rete di casa e di scuola'], [187, 'bluetooth', 'Bluetooth', 'cuffie, smartwatch, tastiere'], [234, 'radio-tower', 'rete cellulare', 'telefoni in 4G e 5G'], [280, 'satellite', 'satellite', 'navi, aerei, zone isolate']].forEach(function (f) { A.path('M400 ' + f[0] + ' L418 ' + f[0], 'lin'); foglia(436, f[0], f[1], f[2], f[3]); });
  });

  /* ===================== 1.3 · lo spettro ===================== */
  costruisci('s-spettro', function (svg, A) {
    var seg = [['radio FM', 'TV'], ['cellulare', ''], ['Wi-Fi', '2,4 · 5 GHz'], ['microonde', 'ponti radio', 'satelliti'], ['infrarossi', 'telecomando', 'fibra ottica'], ['luce', 'visibile']];
    var x0 = 30, w = 110, y = 110;
    var grad = S(svg, 'defs', {}); var lg = S(grad, 'linearGradient', { id: 'sp-gr', x1: 0, x2: 1, y1: 0, y2: 0 });
    S(lg, 'stop', { offset: 0, 'stop-color': 'var(--brand-100)' }); S(lg, 'stop', { offset: .7, 'stop-color': 'var(--brand-500)' }); S(lg, 'stop', { offset: .86, 'stop-color': '#c0392b' }); S(lg, 'stop', { offset: 1, 'stop-color': '#8e44ad' });
    S(svg, 'rect', { x: x0, y: y, width: w * 6, height: 46, fill: 'url(#sp-gr)', stroke: 'var(--border-strong)' });
    seg.forEach(function (s, k) {
      if (k) A.path('M' + (x0 + k * w) + ' ' + y + ' L' + (x0 + k * w) + ' ' + (y + 46), 'lin');
      A.txt(x0 + k * w + w / 2, y + 70, s[0], 't'); if (s[1]) A.txt(x0 + k * w + w / 2, y + 88, s[1], 't-m'); if (s[2]) A.txt(x0 + k * w + w / 2, y + 105, s[2], 't-m');
    });
    A.txt(x0, y + 132, 'frequenze basse', 't-s', {}, 'start'); A.txt(x0 + 6 * w, y + 132, 'frequenze alte', 't-s', {}, 'end');
    A.path('M' + (x0 + 126) + ' ' + (y + 128) + ' L' + (x0 + 6 * w - 116) + ' ' + (y + 128), 'lin').setAttribute('stroke-dasharray', '3 4');
    freccia(svg, 330, 40, 40, 40, 'lin ok'); A.txt(40, 28, '← arriva più lontano, attraversa meglio gli ostacoli', 't-b', {}, 'start');
    freccia(svg, 390, 78, 690, 78, 'lin att'); A.txt(690, 68, 'trasporta più dati →', 't-a', {}, 'end');
  });

  /* ===================== 1.3 · Wi-Fi 2,4 e 5 GHz ===================== */
  costruisci('s-bande', function (svg, A) {
    function casa(x0, tit, R, cls, nota, ncl) {
      var W2 = 300, H = 180, y0 = 40;
      A.txt(x0 + W2 / 2, 24, tit, 't-eti');
      var cl = S(svg, 'clipPath', { id: 'cl-' + x0 }); S(cl, 'rect', { x: x0, y: y0, width: W2, height: H });
      var g = S(svg, 'g', { 'clip-path': 'url(#cl-' + x0 + ')' });
      R.forEach(function (r, k) { S(g, 'circle', { cx: x0 + 22, cy: y0 + 22, r: r, fill: cls, 'fill-opacity': .18 + k * .06, stroke: 'none' }); });
      S(svg, 'rect', { x: x0, y: y0, width: W2, height: H, fill: 'none', stroke: 'var(--ink-soft)', 'stroke-width': 3 });
      A.path('M' + (x0 + 110) + ' ' + y0 + ' L' + (x0 + 110) + ' ' + (y0 + 70) + ' M' + (x0 + 110) + ' ' + (y0 + 100) + ' L' + (x0 + 110) + ' ' + (y0 + H) + ' M' + (x0 + 210) + ' ' + y0 + ' L' + (x0 + 210) + ' ' + (y0 + 120) + ' M' + x0 + ' ' + (y0 + 90) + ' L' + (x0 + 70) + ' ' + (y0 + 90) + ' M' + (x0 + 210) + ' ' + (y0 + 100) + ' L' + (x0 + W2) + ' ' + (y0 + 100), 'muro');
      A.disp('router', x0 + 30, y0 + 22, { s: .5 });
      A.txt(x0 + 160, y0 + 160, 'camera', 't-s'); A.txt(x0 + 260, y0 + 160, 'bagno', 't-s'); A.txt(x0 + 260, y0 + 60, 'studio', 't-s'); A.txt(x0 + 55, y0 + 150, 'cucina', 't-s');
      A.txt(x0 + W2 / 2, 250, nota, ncl);
    }
    casa(20, 'WI-FI A 2,4 GHz', [300, 230, 160], 'var(--brand-500)', 'arriva più lontano, ma più lento', 't-b');
    casa(400, 'WI-FI A 5 GHz', [150, 110, 70], 'var(--accent-500)', 'più veloce, ma più vicino', 't-a');
    [].forEach.call(svg.querySelectorAll('.muro'), function (m) { m.setAttribute('style', 'stroke:var(--ink-soft);stroke-width:5;fill:none'); });
  });

  /* ===================== 1.3 · intreccio, fibra, FTTC/FTTH, satelliti (dal capitolo dei mezzi trasmissivi) ===================== */
  function nodoR(A, x, y, w, h, nome, sotto, cls, o) {
    A.box(x, y, w, h, cls || 'nodo', o);
    var on = cls && cls.indexOf('attivo') >= 0;
    A.txt(x + w / 2, y + (sotto ? h / 2 - 1 : h / 2 + 5), nome, on ? 't-on' : 't', o);
    if (sotto) A.txt(x + w / 2, y + h / 2 + 15, sotto, on ? 't-on' : 't-m', o).style.cssText = on ? 'font-weight:400;font-size:12px' : '';
  }

  costruisci('f-intreccio', function (svg, A) {
    nodoR(A, 10, 72, 100, 56, 'trasmettitore');
    nodoR(A, 590, 72, 120, 56, 'ricevitore', 'fa la differenza', 'nodo attivo');
    function treccia(fase) { var d = ''; for (var x = 110; x <= 590; x += 4) { var y = 100 + 16 * Math.sin((x - 110) / 480 * 10 * Math.PI + fase); d += (x > 110 ? ' L' : 'M') + x + ' ' + y.toFixed(1); } return d; }
    linea(svg, treccia(0), ROSSO, 3, { f: 3 }); linea(svg, treccia(Math.PI), BLU, 3, { f: 3 });
    linea(svg, 'M110 88 L590 88', ROSSO, 3, { p: 4 }); linea(svg, 'M110 112 L590 112', BLU, 3, { p: 4 });
    A.txt(350, 150, 'fili intrecciati: si scambiano di posto di continuo', 't-m', { f: 3 });
    A.txt(350, 150, 'fili paralleli: il rosso è sempre più vicino al disturbo', 't-e', { p: 4 });
    fulmine(svg, 350, 20, { p: 2 }); A.txt(372, 40, 'disturbo', 't-a', { p: 2 }, 'start');
    var bit = [1, -1, 1, 1, -1];
    function sig(t) { var i = Math.min(4, Math.floor(t * 5)); return bit[i]; }
    function bump(t, a) { return a * Math.exp(-Math.pow((t - 0.5) / 0.07, 2)); }
    function grafico(x0, y0, fn, col, o) { var d = ''; for (var k = 0; k <= 100; k++) { var t = k / 100; d += (k ? ' L' : 'M') + (x0 + 10 + t * 200).toFixed(1) + ' ' + (y0 - 12 * fn(t)).toFixed(1); } return linea(svg, d, col, 2.5, o); }
    var G = [[10, 'filo rosso'], [250, 'filo blu'], [490, 'differenza (rosso − blu)']];
    G.forEach(function (g) { A.box(g[0], 180, 220, 100, 'fondo'); A.txt(g[0] + 110, 198, g[1].toUpperCase(), 't-eti'); A.path('M' + (g[0] + 10) + ' 240 L' + (g[0] + 210) + ' 240', 'lin'); });
    grafico(10, 240, function (t) { return sig(t); }, ROSSO, { p: 1, f: 1 });
    grafico(250, 240, function (t) { return -sig(t); }, BLU, { p: 1, f: 1 });
    grafico(10, 240, function (t) { return sig(t) + bump(t, 1.6); }, ROSSO, { p: 2, f: 3 });
    grafico(250, 240, function (t) { return -sig(t) + bump(t, 1.6); }, BLU, { p: 2, f: 3 });
    A.txt(120, 274, 'stesso disturbo', 't-a', { p: 2, f: 3 }); A.txt(360, 274, 'stesso disturbo', 't-a', { p: 2, f: 3 });
    grafico(490, 240, function (t) { return sig(t) * 1.6; }, 'var(--brand-500)', { p: 3, f: 3, r: 300 });
    A.txt(600, 274, 'il disturbo si annulla', 't-b', { p: 3, f: 3, r: 300 });
    grafico(10, 240, function (t) { return sig(t) + bump(t, 1.8); }, ROSSO, { p: 4 });
    grafico(250, 240, function (t) { return -sig(t) + bump(t, 0.6); }, BLU, { p: 4 });
    A.txt(120, 274, 'disturbo forte', 't-e', { p: 4 }); A.txt(360, 274, 'disturbo debole', 't-a', { p: 4 });
    grafico(490, 240, function (t) { return sig(t) * 1.6 + bump(t, 1.2); }, ROSSO, { p: 4, r: 300 });
    A.txt(600, 274, 'resta un pezzo di disturbo', 't-e', { p: 4, r: 300 });
  });

  costruisci('f-fibra', function (svg, A) {
    function cy(x) { return 95 - 30 * Math.sin(Math.PI * (x - 110) / 480); }
    var d = ''; for (var x = 110; x <= 590; x += 5) d += (x > 110 ? ' L' : 'M') + x + ' ' + cy(x).toFixed(1);
    linea(svg, d, 'var(--brand-100)', 50, {}).setAttribute('stroke-linecap', 'butt');
    linea(svg, d, 'var(--surface-000)', 26, {}).setAttribute('stroke-linecap', 'butt');
    A.txt(350, 140, 'mantello', 't-m'); A.txt(130, 50, 'nucleo', 't-s', {}, 'start');
    nodoR(A, 10, 70, 90, 44, 'laser', null, 'nodo attivo');
    A.box(600, 52, 110, 56, 'nodo'); A.txt(655, 85, 'ricevitore', 't');
    var pt = [[100, cy(110)]], N = 12; for (var k = 1; k <= N; k++) { var x2 = 110 + k * 480 / N; pt.push([x2, cy(x2) + (k % 2 ? -10 : 10)]); }
    pt[pt.length - 1] = [600, cy(590)];
    function pd(a, b) { return pt.slice(a, b + 1).map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' '); }
    A.via('fb1', pd(0, 1)); A.via('fb2', pd(1, 2)); A.via('fb3', pd(0, N));
    A.pk('fb1', { p: 1, f: 1, resta: true, d: 900 }, null, 'goccia');
    A.pk('fb2', { p: 2, f: 2, resta: true, d: 900 }, null, 'goccia');
    S(svg, 'circle', Object.assign({ cx: pt[1][0], cy: pt[1][1], r: 9, fill: 'none', stroke: 'var(--accent-500)', 'stroke-width': 2 }, pa({ p: 2, f: 2 })));
    A.txt(pt[1][0] + 8, 30, 'riflessione totale: la luce rimbalza dentro', 't-a', { p: 2, f: 2 }, 'start');
    linea(svg, pd(0, N), 'var(--accent-500)', 2, { p: 3, r: 2200 }).setAttribute('stroke-opacity', '.6');
    A.pk('fb3', { p: 3, f: 3, resta: true, d: 2200 }, null, 'goccia');
    A.box(600, 52, 110, 56, 'nodo evid', { p: 3, r: 2200 }); A.txt(655, 78, 'ricevitore', 't-b', { p: 3, r: 2200 }); A.txt(655, 98, 'luce = 1', 't-b', { p: 3, r: 2200 });
    A.txt(20, 172, 'FIBRA PIEGATA A GOMITO', 't-eti', { p: 4 }, 'start');
    var g = 'M110 270 L400 270 L470 205 L600 205';
    linea(svg, g, 'var(--brand-100)', 40, { p: 4 }).setAttribute('stroke-linecap', 'butt');
    linea(svg, g, 'var(--surface-000)', 20, { p: 4 }).setAttribute('stroke-linecap', 'butt');
    nodoR(A, 10, 250, 90, 40, 'laser', null, 'nodo attivo', { p: 4 });
    A.box(600, 185, 110, 40, 'nodo', { p: 4 }); A.txt(655, 210, 'niente', 't-e', { p: 4, r: 2000 });
    A.via('fb4', 'M100 270 L180 264 L260 276 L340 264 L420 276 L560 290');
    A.pk('fb4', { p: 4, resta: true, d: 2000 }, null, 'goccia');
    linea(svg, 'M100 270 L180 264 L260 276 L340 264 L420 276 L560 290', 'var(--errore-ink)', 2, { p: 4, r: 2000 }).setAttribute('stroke-dasharray', '5 4');
    A.txt(430, 305, 'angolo troppo ripido: la luce esce', 't-e', { p: 4, r: 1500 });
  });

  costruisci('f-ftth', function (svg, A) {
    A.disp('centrale', 65, 136, { nome: 'centrale', sotto: 'operatore' });
    A.disp('armadio', 340, 136, { nome: 'armadio', sotto: 'in strada' });
    A.disp('casa', 535, 60, { nome: 'casa vicina' }); A.disp('casa', 650, 232, { nome: 'casa lontana' });
    linea(svg, 'M101 140 L322 140', FIBRA, 5, {}); A.txt(210, 130, 'fibra', 't-a');
    A.path('M358 124 L505 72'); A.path('M358 152 L450 241 L620 241');
    A.txt(360, 22, 'FTTC · fibra fino all’armadio', 't-eti', { p: 1, f: 2 });
    linea(svg, 'M358 124 L505 72', RAME, 5, { p: 1, f: 2 }); linea(svg, 'M358 152 L450 241 L620 241', RAME, 5, { p: 1, f: 2 });
    A.txt(420, 88, 'rame 200 m', 't-s', { p: 1, f: 2 }, 'end'); A.txt(530, 232, 'rame 1 km', 't-s', { p: 1, f: 2 });
    A.via('ft0', 'M101 140 L322 140'); A.via('ft1', 'M358 124 L505 72'); A.via('ft2', 'M358 152 L450 241 L620 241');
    A.pk('ft0', { p: 1, d: 600 }, null, 'goccia'); A.pk('ft1', { p: 1, r: 650, d: 1400 }, null, 'goccia'); A.pk('ft2', { p: 1, r: 650, d: 2600 }, null, 'goccia');
    A.box(600, 46, 110, 50, 'nodo evid', { p: 2, f: 2 }); A.txt(655, 77, '≈ 200 Mbps', 't-b', { p: 2, f: 2 });
    A.box(440, 262, 140, 26, 'nodo', { p: 2, f: 2 }); A.txt(510, 280, '≈ 50 Mbps', 't-e', { p: 2, f: 2 });
    A.txt(170, 240, 'più rame = segnale più debole', 't-a', { p: 2, f: 2 }); A.txt(170, 260, '= velocità più bassa', 't-a', { p: 2, f: 2 });
    A.txt(360, 22, 'FTTH · fibra fino a casa', 't-eti', { p: 3 });
    linea(svg, 'M358 124 L505 72', FIBRA, 5, { p: 3 }); linea(svg, 'M358 152 L450 241 L620 241', FIBRA, 5, { p: 3 });
    A.pk('ft0', { p: 3, d: 600 }, null, 'goccia'); A.pk('ft1', { p: 3, r: 650, d: 500 }, null, 'goccia'); A.pk('ft2', { p: 3, r: 650, d: 700 }, null, 'goccia');
    A.box(600, 46, 110, 50, 'nodo attivo', { p: 4 }); A.txt(655, 77, '≤ 2,5 Gbps', 't-on', { p: 4 });
    A.box(440, 262, 140, 26, 'nodo attivo', { p: 4 }); A.txt(510, 280, '≤ 2,5 Gbps', 't-on', { p: 4 });
    A.txt(170, 250, 'la distanza non conta più', 't-b', { p: 4 });
  });

  costruisci('f-satelliti', function (svg, A) {
    var CX = 360, CY = 820;
    S(svg, 'circle', { cx: CX, cy: CY, r: 560, fill: 'var(--brand-100)', stroke: 'var(--brand-500)', 'stroke-width': 2 });
    S(svg, 'circle', { cx: CX, cy: CY, r: 640, fill: 'none', stroke: 'var(--border-strong)', 'stroke-width': 1.5, 'stroke-dasharray': '5 5' });
    function arc(th) { th = th * Math.PI / 180; return [CX + 640 * Math.sin(th), CY - 640 * Math.cos(th)]; }
    function sat(g, x, y, s) { s = s || 1; S(g, 'rect', { x: x - 6 * s, y: y - 5 * s, width: 12 * s, height: 10 * s, fill: 'var(--ink-soft)' }); S(g, 'rect', { x: x - 20 * s, y: y - 3 * s, width: 12 * s, height: 6 * s, fill: 'var(--brand-500)' }); S(g, 'rect', { x: x + 8 * s, y: y - 3 * s, width: 12 * s, height: 6 * s, fill: 'var(--brand-500)' }); }
    var H = [200, 284], T = [520, 284], G = [360, 46], L0 = arc(0);
    A.disp('casa', H[0], H[1] - 14, { s: .6 }); A.txt(H[0] - 26, H[1] + 2, 'casa', 't', {}, 'end');
    A.disp('parabola', T[0], T[1] - 16, { s: .7 }); A.txt(T[0] + 22, T[1] + 2, 'stazione a terra', 't', {}, 'start');
    sat(A.g({}), G[0], G[1], 1.3); A.txt(G[0] + 34, G[1] + 5, 'geostazionario · 36.000 km', 't-s', {}, 'start');
    var gL = A.g({ f: 2 }); [-14, -7, 0, 7, 14].forEach(function (t) { var p = arc(t); sat(gL, p[0], p[1], 0.7); });
    A.txt(arc(16)[0] + 10, arc(16)[1] + 5, 'orbita bassa · 550 km', 't-s', { f: 3 }, 'start');
    A.txt(14, 20, 'distanze non in scala', 't-m', {}, 'start');
    A.box(590, 8, 120, 56, 'nodo'); A.txt(650, 28, 'RITARDO', 't-eti');
    A.txt(650, 52, '0 ms', 't-mono', { f: 0 });
    var dg = 'M' + H + ' L' + G + ' L' + T + ' L' + G + ' L' + H;
    A.path(dg, 'lin att', { p: 1, f: 1 });
    A.via('sg', dg); A.pk('sg', { p: 1, f: 1, resta: true, d: 4000 }, null, 'goccia');
    A.txt(650, 52, '≈ 600 ms', 't-e', { p: 1, f: 1, r: 4000 }); A.txt(40, 120, '4 tratti da 36.000 km', 't-a', { p: 1, f: 1, r: 1000 }, 'start'); A.txt(40, 140, '≈ 144.000 km in tutto', 't-a', { p: 1, f: 1, r: 1000 }, 'start');
    var dl = 'M' + H + ' L' + L0 + ' L' + T + ' L' + L0 + ' L' + H;
    A.path(dl, 'lin ok', { p: 2, f: 2 });
    A.via('sl', dl); A.pk('sl', { p: 2, f: 2, resta: true, d: 1500 }, null, 'goccia');
    A.txt(650, 52, '≈ 30 ms', 't-b', { p: 2, r: 1500 }); A.txt(40, 120, 'percorso brevissimo', 't-b', { p: 2, f: 2, r: 500 }, 'start');
    function arcoD(a, b) { var d = ''; for (var t = a; t <= b; t += 1) { var p = arc(t); d += (t > a ? ' L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); } return d; }
    A.via('m1', arcoD(-15, 10)); A.via('m2', arcoD(-35, -15));
    var s1 = A.g({ p: 3, f: 3, rotta: '#m1', resta: true, d: 2500 }); s1.setAttribute('class', 'pk'); s1.style.filter = 'none'; sat(s1, 0, 0, 0.8);
    var s2 = A.g({ p: 3, f: 3, rotta: '#m2', resta: true, d: 2500 }); s2.setAttribute('class', 'pk'); s2.style.filter = 'none'; sat(s2, 0, 0, 0.8);
    A.path('M' + H + ' L' + arc(-15), 'lin ok', { p: 3, f: 3, r: 2500 });
    A.txt(40, 120, 'il satellite se ne va:', 't-a', { p: 3, f: 3, r: 1200 }, 'start'); A.txt(40, 140, 'il collegamento passa al successivo', 't-a', { p: 3, f: 3, r: 1200 }, 'start');
    [600, 640, 680].forEach(function (rr, j) { for (var t = -40; t <= 40; t += 3.2) { var th = (t + j * 1.1) * Math.PI / 180; S(svg, 'circle', Object.assign({ cx: CX + rr * Math.sin(th), cy: CY - rr * Math.cos(th), r: 2.6, fill: 'var(--brand-600)' }, pa({ p: 4, r: j * 300 }))); } });
    A.txt(40, 120, 'servono migliaia di satelliti', 't-b', { p: 4, r: 900 }, 'start'); A.txt(40, 140, 'per coprire tutta la Terra', 't-b', { p: 4, r: 900 }, 'start');
  });

  /* ===================== 1.3 · la gara dei download ===================== */
  var CORSIE = [['modem 56k', 0.056], ['ADSL · 20 Mbps', 20], ['4G · 50 Mbps', 50], ['FTTH · 1 Gbps', 1000]];
  var MEGABIT = 4 * 8 * 1000; // 4 GB = 32.000 megabit
  costruisci('f-gara', function (svg, A) {
    A.icona('download', 34, 26, { s: 26 }); A.txt(56, 33, 'FILM DA 4 GB', 't-eti', {}, 'start');
    A.txt(700, 33, 'tempo trascorso:', 't-m', {}, 'end');
    S(svg, 'text', { x: 700, y: 54, 'text-anchor': 'end', 'class': 't-mono', id: 'gara-tempo' }, '0 s');
    CORSIE.forEach(function (c, k) {
      var y = 84 + k * 52;
      A.txt(20, y + 18, c[0], 't', {}, 'start');
      A.box(180, y, 380, 28, 'fondo');
      S(svg, 'rect', { x: 180, y: y, width: 0, height: 28, rx: 2, fill: k === 3 ? 'var(--brand-500)' : 'var(--accent-500)', 'class': 'gara-barra', 'data-k': k });
      S(svg, 'text', { x: 574, y: y + 19, 'class': 't-mono gara-t', 'data-k': k }, '0 s');
    });
    S(svg, 'rect', Object.assign({ x: 296, y: 38, width: 270, height: 30, rx: 3, 'class': 'nodo guasto' }, pa({ p: 3, r: 300 })));
    A.txt(431, 58, 'al modem servirebbero quasi 7 giorni!', 't-e', { p: 3, r: 300 });
  });
  function durata(s) {
    if (s < 100) return Math.round(s) + ' s';
    if (s < 3600) return Math.round(s / 60) + ' min';
    if (s < 86400) return (s / 3600).toFixed(1).replace('.', ',') + ' ore';
    return (s / 86400).toFixed(1).replace('.', ',') + ' giorni';
  }
  window.ANIM_HOOK = window.ANIM_HOOK || {};
  ANIM_HOOK['f-gara'] = function (el, svg) {
    var TEMPI = [0, 32, 1600, 1600], ora = 0;
    function disegna(T) {
      var tt = svg.querySelector('#gara-tempo'); if (tt) tt.textContent = durata(T);
      [].forEach.call(svg.querySelectorAll('.gara-barra'), function (b) {
        var k = +b.getAttribute('data-k'), fine = MEGABIT / CORSIE[k][1], q = Math.min(1, T / fine);
        b.setAttribute('width', (T > 0 ? Math.max(1.5, 380 * q) : 0).toFixed(1));
        var t = svg.querySelector('.gara-t[data-k="' + k + '"]');
        t.textContent = q >= 1 ? '✓ ' + durata(fine) : durata(T);
        t.setAttribute('class', 't-mono gara-t ' + (q >= 1 ? 't-b' : ''));
      });
    }
    return {
      passo: function (i, anim, lista) {
        var a = ora, b = TEMPI[i]; ora = b;
        if (!anim || a === b) { disegna(b); return; }
        lista.push(W.tween(el, i === 1 ? 2200 : 3000, function (q) { var e = q * q * (3 - 2 * q); disegna(i === 2 ? a * Math.pow(b / a, e) : a + (b - a) * e); }, function () { disegna(b); }));
      }
    };
  };

  /* ===================== 1.4 · simplex, half-duplex, full-duplex ===================== */
  costruisci('f-modi', function (svg, A) {
    var Y = [72, 178, 284], XA = 56, XB = 664;
    [['SIMPLEX · senso unico', 0], ['HALF-DUPLEX · strada stretta, a turno', 1], ['FULL-DUPLEX · doppia corsia', 2]].forEach(function (r) { A.txt(100, Y[r[1]] - 24, r[0], 't-eti', {}, 'start'); });
    Y.forEach(function (y, k) {
      A.icona('building-2', XA, y - 4, { s: 30 }); A.txt(XA, y + 26, 'A', 't'); A.icona('building-2', XB, y - 4, { s: 30 }); A.txt(XB, y + 26, 'B', 't');
      var h = k === 2 ? 34 : 22;
      S(svg, 'rect', { x: 100, y: y - h / 2, width: 520, height: h, rx: 2, fill: 'var(--surface-200)', stroke: 'var(--border-strong)' });
      if (k === 2) A.path('M104 ' + y + ' L616 ' + y, 'lin').setAttribute('stroke-dasharray', '10 8');
      if (k === 0) [200, 330, 460].forEach(function (x) { A.txt(x, y + 5, '→', 't-m'); });
    });
    // semaforo della strada stretta
    function semaforo(col, o) { var g = A.g(o); S(g, 'rect', { x: 492, y: Y[1] - 46, width: 16, height: 28, rx: 3, fill: 'var(--ink-soft)' }); S(g, 'circle', { cx: 500, cy: Y[1] - 39, r: 4.5, fill: col === 'A' ? 'var(--ok-ink, #1e8e5a)' : '#555' }); S(g, 'circle', { cx: 500, cy: Y[1] - 25, r: 4.5, fill: col === 'B' ? 'var(--ok-ink, #1e8e5a)' : '#555' }); return g; }
    semaforo('A', { f: 1 }); semaforo('A', { p: 2, f: 2 }); semaforo('B', { p: 2, f: 2, r: 2000 }); semaforo('A', { p: 3 });
    K.cartello(A, 514, Y[1] - 44, 92, 24, 'verde per A', 'nodo', { p: 2, f: 2 }, 't-s'); K.cartello(A, 514, Y[1] - 44, 92, 24, 'verde per B', 'nodo', { p: 2, f: 2, r: 2000 }, 't-s');
    function auto(g, verso) { S(g, 'rect', { x: -14, y: -7, width: 28, height: 14, rx: 4, fill: verso > 0 ? 'var(--accent-500)' : 'var(--brand-500)', stroke: 'var(--ink-soft)' }); S(g, 'rect', { x: verso > 0 ? 3 : -11, y: -5, width: 8, height: 10, rx: 2, fill: 'var(--surface-000)' }); }
    A.via('m-s', 'M100 ' + Y[0] + ' L620 ' + Y[0]);
    A.via('m-h', 'M100 ' + Y[1] + ' L620 ' + Y[1]); A.via('m-hi', 'M620 ' + Y[1] + ' L100 ' + Y[1]);
    A.via('m-hc1', 'M100 ' + Y[1] + ' L346 ' + Y[1]); A.via('m-hc2', 'M620 ' + Y[1] + ' L374 ' + Y[1]);
    A.via('m-f1', 'M100 ' + (Y[2] - 9) + ' L620 ' + (Y[2] - 9)); A.via('m-f2', 'M620 ' + (Y[2] + 9) + ' L100 ' + (Y[2] + 9));
    // 1 · simplex
    [0, 600, 1200].forEach(function (r) { mobile(A, 'm-s', { p: 1, f: 1, r: r, d: 1800 }, function (g) { auto(g, 1); }); });
    A.txt(360, Y[0] + 30, 'da B non può tornare niente', 't-e', { p: 1, r: 1200 });
    // 2 · half-duplex a turno
    [0, 500].forEach(function (r) { mobile(A, 'm-h', { p: 2, f: 2, r: r, d: 1400 }, function (g) { auto(g, 1); }); });
    [2200, 2700].forEach(function (r) { mobile(A, 'm-hi', { p: 2, f: 2, r: r, d: 1400 }, function (g) { auto(g, -1); }); });
    A.txt(360, Y[1] + 30, 'prima da A a B, poi da B ad A: mai insieme', 't-a', { p: 2, f: 2, r: 2200 });
    // 3 · collisione
    mobile(A, 'm-hc1', { p: 3, f: 3, resta: true, d: 1100 }, function (g) { auto(g, 1); });
    mobile(A, 'm-hc2', { p: 3, f: 3, resta: true, d: 1100 }, function (g) { auto(g, -1); });
    croce(A, 360, Y[1], { p: 3, f: 3, r: 1150 });
    A.txt(360, Y[1] + 30, 'partiti insieme: collisione!', 't-e', { p: 3, f: 3, r: 1150 });
    // 4 · full-duplex
    [0, 700, 1400].forEach(function (r) { mobile(A, 'm-f1', { p: 4, r: r, d: 1800 }, function (g) { auto(g, 1); }); mobile(A, 'm-f2', { p: 4, r: r + 200, d: 1800 }, function (g) { auto(g, -1); }); });
    A.txt(360, Y[2] + 36, 'nei due sensi contemporaneamente, ognuno nella sua corsia', 't-b', { p: 4, r: 600 });
  });

  /* ===================== 1.5 · commutazione di circuito e di pacchetto ===================== */
  costruisci('f-commutazione', function (svg, A) {
    function rete(cy, sx, dx, nsx, ndx, disp) {
      var N = { L: [70, cy], n1: [200, cy - 40], n2: [200, cy + 40], n3: [360, cy - 44], n4: [360, cy + 44], n5: [520, cy], R: [650, cy] };
      [['L', 'n1'], ['L', 'n2'], ['n1', 'n3'], ['n1', 'n4'], ['n2', 'n4'], ['n3', 'n4'], ['n3', 'n5'], ['n4', 'n5'], ['n5', 'R']].forEach(function (l) { A.path('M' + N[l[0]] + ' L' + N[l[1]], 'lin'); });
      ['n1', 'n2', 'n3', 'n4', 'n5'].forEach(function (k) { S(svg, 'circle', { cx: N[k][0], cy: N[k][1], r: 13, 'class': 'nodo' }); });
      A.disp(disp, N.L[0] - 22, cy, { s: disp === 'telefono' ? .62 : .55 }); A.txt(N.L[0] - 22, cy + 34, nsx, 't');
      A.disp(disp, N.R[0] + 22, cy, { s: disp === 'telefono' ? .62 : .55 }); A.txt(N.R[0] + 22, cy + 34, ndx, 't');
      return N;
    }
    A.txt(14, 18, 'COMMUTAZIONE DI CIRCUITO', 't-eti', {}, 'start');
    var T = rete(85, 0, 0, 'Anna', 'Bruno', 'telefono');
    A.path('M8 168 L712 168', 'lin').setAttribute('stroke-dasharray', '4 5');
    A.txt(14, 190, 'COMMUTAZIONE DI PACCHETTO', 't-eti', {}, 'start');
    var B = rete(262, 0, 0, 'Carla', 'Dario', 'computer');
    function P(N, ks) { return ks.map(function (k, i) { return (i ? 'L' : 'M') + N[k][0] + ' ' + N[k][1]; }).join(' '); }
    // 1: circuito riservato
    var circ = P(T, ['L', 'n1', 'n3', 'n5', 'R']);
    linea(svg, circ, 'var(--accent-500)', 6, { p: 1, f: 2 }).setAttribute('stroke-opacity', '.85');
    A.icona('lock', 280, 26, { s: 22, p: 1, f: 2 }); A.txt(296, 32, 'riservato ad Anna e Bruno', 't-a', { p: 1, f: 2 }, 'start');
    A.via('cv1', circ); A.pk('cv1', { p: 1, f: 1, d: 1600 }, '“Pronto?”');
    // 2: silenzio, la linea resta occupata
    A.txt(706, 22, 'silenzio: nessun dato…', 't-m', { p: 2, f: 2 }, 'end');
    A.txt(706, 40, '…ma la linea resta occupata', 't-a', { p: 2, f: 2 }, 'end');
    A.icona('user', 118, 150, { s: 22, p: 2, f: 2 }); A.txt(134, 156, 'un altro utente', 't-s', { p: 2, f: 2 }, 'start');
    A.via('cv2', 'M126 142 L' + T.n2 + ' L' + T.n4 + ' L' + T.n5);
    A.pk('cv2', { p: 2, f: 2, resta: true, d: 1600, r: 400 }, 'per Bruno', 'pkt-ok');
    croce(A, 585, 85, { p: 2, f: 2, r: 2000 }); A.txt(585, 112, 'occupata!', 't-e', { p: 2, f: 2, r: 2000 });
    // 3: pacchetti numerati su strade diverse, mescolati con quelli di altri
    var rotte = { 1: ['L', 'n1', 'n3'], 2: ['L', 'n2', 'n4', 'n5'], 3: ['L', 'n1'], 4: ['L', 'n2', 'n4'] };
    Object.keys(rotte).forEach(function (k, i) { A.via('pv' + k, P(B, rotte[k])); A.pk('pv' + k, { p: 3, f: 4, resta: true, r: i * 350, d: 1500 }, k); });
    A.via('pa1', P(B, ['n2', 'n4', 'n5'])); A.via('pa2', P(B, ['n1', 'n3', 'n5'])); A.via('pa3', P(B, ['n4', 'n3']));
    A.pk('pa1', { p: 3, r: 300, d: 1800 }, null, 'pkt-ok'); A.pk('pa2', { p: 3, r: 900, d: 1800 }, null, 'pkt-ok'); A.pk('pa3', { p: 3, r: 600, d: 1200 }, null, 'pkt-err');
    A.txt(706, 206, 'verdi e rossi: pacchetti di altri utenti', 't-m', { p: 3, f: 3, r: 600 }, 'end');
    // 4: un collegamento si interrompe, i pacchetti successivi lo aggirano
    croce(A, 280, B.n1[1] - 2, { p: 4 }); A.path('M' + B.n1 + ' L' + B.n3, 'lin err', { p: 4 });
    A.via('pdet', P(B, ['L', 'n1', 'n4', 'n3'])); A.pk('pdet', { p: 4, f: 4, d: 1800, r: 300 }); A.pk('pdet', { p: 4, f: 4, d: 1800, r: 900 });
    A.txt(706, 206, 'guasto: i successivi passano da un’altra parte', 't-e', { p: 4, f: 4, r: 300 }, 'end');
    // 5: arrivano in disordine e vengono rimessi in fila
    A.via('pz2', P(B, ['n5', 'R'])); A.via('pz1', P(B, ['n3', 'n5', 'R'])); A.via('pz4', P(B, ['n4', 'n5', 'R'])); A.via('pz3', P(B, ['n1', 'n4', 'n5', 'R']));
    A.pk('pz2', { p: 5, d: 700 }, '2'); A.pk('pz1', { p: 5, d: 900, r: 300 }, '1'); A.pk('pz4', { p: 5, d: 1000, r: 600 }, '4'); A.pk('pz3', { p: 5, d: 1300, r: 800 }, '3');
    function fila(ord, y, cls, r0, o) { ord.forEach(function (n, i) { var g = A.g(Object.assign({ p: 5, r: r0 + i * 250 }, o)); S(g, 'rect', { x: 520 + i * 32, y: y, width: 26, height: 22, rx: 2, 'class': cls }); S(g, 'text', { x: 533 + i * 32, y: y + 16, 'text-anchor': 'middle', 'class': cls === 'pkt-ok' ? 't-on' : 't-mono-on' }, n); }); }
    A.txt(512, 310, 'arrivo:', 't-s', { p: 5, r: 700 }, 'end'); fila(['2', '1', '4', '3'], 296, 'pkt', 700, {});
    A.txt(512, 335, 'in ordine:', 't-b', { p: 5, r: 2000 }, 'end'); fila(['1', '2', '3', '4'], 321, 'pkt-ok', 2000, {});
  });

  /* ===================== Prova tu · quanto ci metto a scaricare? ===================== */
  W.registra('download', function (el) {
    var b = W.base(el, 'Prova tu · quanto ci metto a scaricare?', 'Mbps ÷ 8 = MB/s');
    var dim = 4000, banda = 100;
    var scelte = [[50, '50 MB · un’app'], [4000, '4 GB · un film'], [50000, '50 GB · un videogioco']];
    b.ctrl.appendChild(W.scelta(scelte.map(function (s) { return [String(s[0]), s[1]]; }), String(dim), function (v) { dim = +v; calcola(); }));
    b.ctrl.appendChild(W.cursore('Banda', 1, 1000, banda, 1, function (v) { banda = v; calcola(); }, function (v) { return v + ' Mbps'; }));
    var mbs = W.dato('Al massimo', ''), tempo = W.dato('Tempo (caso ideale)', '');
    b.ctrl.appendChild(mbs); b.ctrl.appendChild(tempo);
    var svg = W.s('svg', { viewBox: '0 0 720 120', role: 'img', 'aria-label': 'Il calcolo del tempo di download passo per passo' }); el.appendChild(svg);
    b.chiudi();
    function fmt(n) { return n.toLocaleString('it-IT', { maximumFractionDigits: n < 10 ? 2 : (n < 100 ? 1 : 0) }); }
    function calcola() {
      var mb = banda / 8, sec = dim / mb;
      mbs.v.textContent = fmt(mb) + ' MB al secondo';
      tempo.v.textContent = durata(sec);
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var r = [['1', fmt(banda) + ' Mbps ÷ 8 = ' + fmt(mb) + ' MB/s', 'da megabit a megabyte'], ['2', fmt(dim) + ' MB ÷ ' + fmt(mb) + ' MB/s = ' + fmt(sec) + ' s', 'dimensione ÷ velocità'], ['3', '≈ ' + durata(sec), 'nella realtà un po’ di più']];
      r.forEach(function (x, k) { var y = 26 + k * 36; S(svg, 'text', { x: 14, y: y, 'class': 't-eti' }, 'PASSO ' + x[0]); S(svg, 'text', { x: 100, y: y, 'class': 't-mono' }, x[1]); S(svg, 'text', { x: 706, y: y, 'text-anchor': 'end', 'class': 't-m' }, x[2]); });
      b.dica(banda >= 1000 && dim >= 1000 ? 'Anche con 1000 Mbps un file da ' + fmt(dim) + ' MB non arriva in un secondo: 1000 megabit sono solo 125 megabyte.' : 'Ricorda: la b minuscola (Mbps) sono bit, la B maiuscola (MB) sono byte. 1 byte = 8 bit.', banda >= 1000 ? 'att' : '');
    }
    calcola();
  });

  /* ===================== Prova tu · quanto sei lontano dall'armadio? ===================== */
  W.registra('distanza', function (el) {
    var b = W.base(el, 'Prova tu · quanto sei lontano dall’armadio?', 'FTTC e FTTH');
    var dist = 300, tipo = 'fttc';
    b.ctrl.appendChild(W.scelta([['fttc', 'FTTC (rame dall’armadio)'], ['ftth', 'FTTH (fibra fino a casa)']], tipo, function (v) { tipo = v; disegna(); }));
    b.ctrl.appendChild(W.cursore('Distanza casa–armadio', 50, 1500, dist, 50, function (v) { dist = v; disegna(); }, function (v) { return v + ' m'; }));
    var vel = W.dato('Velocità massima', ''); b.ctrl.appendChild(vel);
    var svg = W.s('svg', { viewBox: '0 0 720 220', role: 'img', 'aria-label': 'Grafico della velocità in funzione della distanza dall’armadio' }); el.appendChild(svg);
    b.chiudi();
    function fttc(d) { return Math.max(15, Math.min(200, 200 * Math.exp(-(d - 150) / 650))); }
    function y(v) { return 190 - 160 * Math.log10(v / 10) / Math.log10(2500 / 10); }
    function x(d) { return 70 + (d - 50) / 1450 * 620; }
    function disegna() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      S(svg, 'path', { d: 'M70 20 L70 190 L690 190', 'class': 'lin' });
      [[10, '10'], [100, '100'], [1000, '1000']].forEach(function (t) { S(svg, 'text', { x: 62, y: y(t[0]) + 4, 'text-anchor': 'end', 'class': 't-s' }, t[1]); });
      S(svg, 'text', { x: 14, y: 14, 'class': 't-s' }, 'Mbps');
      [0, 500, 1000, 1500].forEach(function (d) { var xx = x(Math.max(50, d)); S(svg, 'text', { x: xx, y: 208, 'text-anchor': 'middle', 'class': 't-s' }, d + ' m'); });
      var p = ''; for (var d = 50; d <= 1500; d += 25) p += (d > 50 ? ' L' : 'M') + x(d).toFixed(1) + ' ' + y(fttc(d)).toFixed(1);
      S(svg, 'path', { d: p, fill: 'none', stroke: RAME, 'stroke-width': tipo === 'fttc' ? 4 : 2, opacity: tipo === 'fttc' ? 1 : .4 });
      S(svg, 'path', { d: 'M70 ' + y(2500) + ' L690 ' + y(2500), fill: 'none', stroke: FIBRA, 'stroke-width': tipo === 'ftth' ? 4 : 2, opacity: tipo === 'ftth' ? 1 : .4 });
      S(svg, 'text', { x: 686, y: y(2500) + 18, 'text-anchor': 'end', 'class': 't-a' }, 'FTTH');
      S(svg, 'text', { x: 686, y: y(fttc(1500)) - 10, 'text-anchor': 'end', 'class': 't-s' }, 'FTTC');
      var v = tipo === 'fttc' ? fttc(dist) : 2500;
      S(svg, 'circle', { cx: x(dist), cy: y(v), r: 7, fill: 'var(--brand-500)', stroke: 'var(--surface-000)', 'stroke-width': 2 });
      vel.v.textContent = tipo === 'fttc' ? '≈ ' + Math.round(v / 5) * 5 + ' Mbps' : 'fino a 2,5 Gbps';
      b.dica(tipo === 'fttc' ? (dist <= 300 ? 'Casa vicina all’armadio: il tratto di rame è corto, la velocità è quasi la massima.' : 'Più rame c’è, più il segnale si indebolisce: la velocità scende.') : 'In FTTH non c’è rame: la velocità non dipende dalla distanza.', tipo === 'fttc' && dist > 300 ? 'att' : 'ok');
    }
    disegna();
  });
})();
