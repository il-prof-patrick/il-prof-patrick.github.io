/* Capitolo 6 · Il 5G, l'Internet of Things e il Cloud Computing — schemi e animazioni a passi */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var croce = K.croce, linea = K.linea, cartello = K.cartello, mobile = K.mobile;

  /* 2.5 · celle e handover */
  costruisci('f-handover', function (svg, A) {
    function esa(cx, cy, r, cls, o) { var d = ''; for (var k = 0; k < 6; k++) { var a = Math.PI / 3 * k + Math.PI / 6; d += (k ? ' L' : 'M') + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1); } return S(svg, 'path', Object.assign({ d: d + ' Z', fill: 'var(--surface-100)', stroke: 'var(--border-strong)', 'stroke-width': 1.5 }, pa(o))); }
    function antenna(x, y, o) { var g = A.g(o); S(g, 'path', { d: 'M' + x + ' ' + (y - 9) + ' L' + (x - 6) + ' ' + (y + 7) + ' L' + (x + 6) + ' ' + (y + 7) + ' Z', fill: 'var(--brand-500)' }); return g; }
    var R = 66, big = [[64, 140], [64 + R * Math.sqrt(3), 140], [64 + 2 * R * Math.sqrt(3), 140]];
    big.forEach(function (c) { esa(c[0], c[1], R); antenna(c[0], c[1]); });
    var r = 26, dx = r * Math.sqrt(3), small = [];
    for (var row = -1; row <= 1; row++) for (var k = 0; k < 7; k++) { var x = 408 + k * dx + (row ? dx / 2 : 0); if (x < 712) small.push([x, 140 + row * 1.5 * r]); }
    small.forEach(function (c) { esa(c[0], c[1], r); antenna(c[0], c[1]); });
    A.txt(180, 40, 'CAMPAGNA · celle grandi', 't-eti'); A.txt(560, 40, 'CITTÀ · celle piccole', 't-eti');
    // strada
    A.path('M20 178 L700 178'); A.via('hv1', 'M40 178 L110 178'); A.via('hv2', 'M110 178 L180 178'); A.via('hv3', 'M180 178 L660 178');
    function auto(g) { S(g, 'rect', { x: -14, y: -9, width: 28, height: 18, rx: 4, fill: 'var(--accent-500)', stroke: 'var(--accent-ink)' }); S(g, 'circle', { cx: 0, cy: 0, r: 3, fill: 'var(--surface-000)' }); }
    var g0 = A.g({ f: 0 }); g0.setAttribute('transform', 'translate(40,178)'); auto(g0);
    var g1 = A.g({ p: 1, f: 1, rotta: '#hv1', resta: true, d: 1200 }); g1.setAttribute('class', 'pk'); g1.style.filter = 'none'; auto(g1);
    var g2 = A.g({ p: 2, f: 2, rotta: '#hv2', resta: true, d: 1200 }); g2.setAttribute('class', 'pk'); g2.style.filter = 'none'; auto(g2);
    var g3 = A.g({ p: 3, rotta: '#hv3', resta: true, d: 4000 }); g3.setAttribute('class', 'pk'); g3.style.filter = 'none'; auto(g3);
    // collegamenti
    A.path('M40 170 L' + big[0][0] + ' ' + (big[0][1] + 8), 'lin ok', { f: 0 });
    A.path('M110 170 L' + big[0][0] + ' ' + (big[0][1] + 8), 'lin err', { p: 1, f: 1, r: 1200 });
    A.txt(60, 240, 'segnale debole', 't-e', { p: 1, f: 1, r: 1200 });
    A.path('M180 170 L' + big[1][0].toFixed(0) + ' ' + (big[1][1] + 8), 'lin ok', { p: 2, f: 2, r: 1200 });
    A.txt(180, 240, 'handover: passa all’antenna vicina, la chiamata continua', 't-b', { p: 2, f: 2, r: 1200 }, 'start');
    for (var i = 0; i < 9; i++) { var xh = 420 + i * dx; if (xh > 650) break; S(svg, 'circle', Object.assign({ cx: xh, cy: 178, r: 6, fill: 'none', stroke: 'var(--accent-500)', 'stroke-width': 2 }, pa({ p: 3, f: 3, r: (xh - 180) / 480 * 4000 }))); }
    A.txt(545, 240, 'in città: handover molto frequenti', 't-a', { p: 3, f: 3, r: 2000 });
    // passo 4: utenti per antenna
    var rnd = K.rnd(7);
    small.forEach(function (c) { for (var u = 0; u < 2; u++) S(svg, 'circle', Object.assign({ cx: c[0] - 9 + rnd() * 18, cy: c[1] + 8 + rnd() * 6, r: 3, fill: 'var(--ink)' }, pa({ p: 4 }))); });
    big.forEach(function (c) { for (var u = 0; u < 3; u++) S(svg, 'circle', Object.assign({ cx: c[0] - 30 + rnd() * 60, cy: c[1] - 40 + rnd() * 25, r: 3, fill: 'var(--ink)' }, pa({ p: 4 }))); });
    A.txt(360, 250, 'ogni antenna divide la sua capacità tra pochi utenti', 't-b', { p: 4 });
    A.txt(360, 270, '(in città gli utenti sono tanti: servono tante celle piccole)', 't-m', { p: 4 });
  });


  /* ===================== 6.3 · non ionizzanti e ionizzanti ===================== */
  costruisci('s-ionizzanti', function (svg, A) {
    var x0 = 20, y = 96, w = 680, lim = 500;
    S(svg, 'rect', { x: x0, y: y, width: lim - x0, height: 44, fill: 'var(--brand-100)', stroke: 'var(--border-strong)' });
    S(svg, 'rect', { x: lim, y: y, width: x0 + w - lim, height: 44, fill: 'var(--errore-bg)', stroke: 'var(--border-strong)' });
    var non = [['radio', 48], ['TV', 92], ['4G', 132], ['5G', 172], ['Wi-Fi', 218], ['microonde', 285], ['infrarossi', 368], ['luce visibile', 448]];
    non.forEach(function (n) { A.txt(n[1], y + 27, n[0], 't'); });
    [['UV estremi', 545], ['raggi X', 613], ['gamma', 668]].forEach(function (n) { A.txt(n[1], y + 27, n[0], 't-e').style.fontSize = '12px'; });
    S(svg, 'path', { d: 'M' + lim + ' ' + (y - 30) + ' L' + lim + ' ' + (y + 76), stroke: 'var(--errore-ink)', 'stroke-width': 3, 'stroke-dasharray': '6 4' });
    A.txt(260, y + 70, 'NON IONIZZANTI · non rompono i legami chimici', 't-b');
    A.txt(lim + 100, y + 70, 'IONIZZANTI', 't-e'); A.txt(lim + 100, y + 88, 'possono danneggiare il DNA', 't-e').style.fontSize = '12px';
    A.path('M172 ' + (y - 6) + ' L172 50 L' + (lim - 10) + ' 50', 'lin att');
    A.txt(182, 40, 'anche le onde millimetriche del 5G (26 GHz) restano lontanissime dalla linea', 't-a', {}, 'start');
    A.txt(20, 220, 'frequenze basse', 't-s', {}, 'start'); A.txt(700, 220, 'frequenze alte', 't-s', {}, 'end');
  });

  /* ===================== 6.4 · il termostato smart ===================== */
  costruisci('f-iot', function (svg, A) {
    A.box(20, 90, 430, 220, 'fondo'); A.txt(235, 112, 'LA STANZA', 't-eti');
    // finestra
    A.box(330, 130, 90, 90, 'nodo'); A.path('M375 130 L375 220 M330 175 L420 175', 'lin', { f: 3 });
    S(svg, 'path', Object.assign({ d: 'M330 130 L300 140 L300 210 L330 220 Z', fill: 'var(--surface-000)', stroke: 'var(--border-strong)', 'stroke-width': 2 }, pa({ p: 4 })));
    A.txt(375, 240, 'finestra', 't-s');
    // termostato
    A.box(50, 140, 110, 80, 'nodo attivo'); A.txt(105, 158, 'termostato', 't-on').style.fontSize = '12px';
    A.txt(105, 190, '— °C', 't-on', { f: 0 }).style.fontSize = '20px';
    function temp(t, o) { var x = A.txt(105, 190, t, 't-on', o); x.style.fontSize = '20px'; }
    temp('17 °C', { p: 1, f: 3 }); temp('14 °C', { p: 4, f: 4, r: 600 }); temp('14 °C', { p: 5 });
    A.txt(105, 212, 'obiettivo 20 °C', 't-on', { p: 2, f: 4 }).style.cssText = 'font-size:11px;font-weight:400';
    A.txt(105, 212, 'obiettivo 21 °C', 't-on', { p: 5, r: 2200 }).style.cssText = 'font-size:11px;font-weight:400';
    A.txt(105, 240, 'con il sensore', 't-s');
    // caldaia
    A.box(200, 230, 90, 66, 'nodo'); A.txt(245, 290, 'caldaia', 't-s');
    A.icona('flame', 245, 258, { s: 30, f: 1 });
    A.icona('flame', 245, 258, { s: 30, p: 2, f: 3, r: 700, tono: 'accent' });
    A.icona('flame', 245, 258, { s: 30, p: 4, r: 1200 });
    A.path('M160 200 L200 250', 'lin');
    // cloud e telefono
    A.disp('nuvola', 560, 50, { s: 1.6 }); A.txt(560, 56, 'cloud', 't-m');
    A.disp('telefono', 640, 210, { s: 1.1 }); A.txt(640, 280, 'app (fuori casa)', 't-s');
    A.via('io1', 'M160 160 L520 60'); A.via('io2', 'M600 70 L640 170'); A.via('io3', 'M640 170 L600 70'); A.via('io4', 'M520 60 L160 160');
    A.path('M160 160 L520 60', 'lin').setAttribute('stroke-dasharray', '4 4'); A.path('M600 70 L640 170', 'lin').setAttribute('stroke-dasharray', '4 4');
    // 2 · confronta e accende
    cartello(A, 170, 128, 150, 26, '17 < 20 → accendi', 'nodo evid', { p: 2, f: 2 }, 't-b');
    // 3 · il dato arriva all'app
    A.pk('io1', { p: 3, f: 3, d: 1100 }, '17 °C'); A.pk('io2', { p: 3, f: 3, d: 700, r: 1150 }, '17 °C');
    cartello(A, 470, 290, 240, 26, '17 °C, riscaldamento acceso', 'nodo', { p: 3, f: 3, r: 1800 }, 't-s');
    // 4 · finestra aperta
    A.txt(300, 270, '↓ calo brusco', 't-e', { p: 4, f: 4, r: 300 }).setAttribute('x', 360);
    A.pk('io1', { p: 4, f: 4, d: 1100, r: 1300 }, 'notifica'); A.pk('io2', { p: 4, f: 4, d: 700, r: 2450 }, 'notifica');
    cartello(A, 500, 290, 210, 26, 'finestra aperta: caldaia spenta', 'nodo guasto', { p: 4, f: 4, r: 3100 }, 't-e');
    // 5 · dall'app all'obiettivo
    A.pk('io3', { p: 5, d: 700 }, '21 °C'); A.pk('io4', { p: 5, d: 1200, r: 800 }, '21 °C');
    cartello(A, 520, 290, 190, 26, 'nuovo obiettivo: 21 °C', 'nodo evid', { p: 5 }, 't-b');
  });

  /* ===================== 6.8 · la grid ===================== */
  costruisci('f-grid', function (svg, A) {
    var C = [360, 165];
    var CITTA = [['Ginevra', 160, 70], ['Bologna', 250, 40], ['Parigi', 470, 40], ['Amburgo', 570, 70], ['Madrid', 80, 160], ['Varsavia', 640, 160], ['Lisbona', 110, 250], ['Roma', 260, 272], ['Vienna', 470, 272], ['Oslo', 610, 250]];
    A.box(C[0] - 70, C[1] - 40, 140, 80, 'nodo attivo', { f: 0 }); A.txt(C[0], C[1] - 4, 'calcolo', 't-on', { f: 0 }); A.txt(C[0], C[1] + 16, 'da 1000 ore', 't-on', { f: 0 });
    // 1 · cento pezzi
    for (var i = 0; i < 100; i++) S(svg, 'rect', Object.assign({ x: C[0] - 50 + (i % 10) * 10, y: C[1] - 50 + Math.floor(i / 10) * 10, width: 8, height: 8, fill: 'var(--brand-500)' }, pa({ p: 1, f: 1, r: i * 8 })));
    A.txt(C[0], C[1] + 72, '100 pezzi indipendenti', 't-b', { p: 1, f: 1 });
    CITTA.forEach(function (c, k) {
      A.disp('computer', c[1], c[2], { s: .5 }); A.txt(c[1], c[2] + 28, c[0], 't-s');
      A.via('g' + k, 'M' + C[0] + ' ' + C[1] + ' L' + c[1] + ' ' + c[2]); A.via('gr' + k, 'M' + c[1] + ' ' + c[2] + ' L' + C[0] + ' ' + C[1]);
      A.path('M' + C[0] + ' ' + C[1] + ' L' + c[1] + ' ' + c[2], 'lin', { p: 2 }).setAttribute('stroke-dasharray', '3 4');
      A.pk('g' + k, { p: 2, f: 2, d: 900, r: k * 120 }, null, 'goccia');
      A.box(c[1] - 24, c[2] + 34, 48, 6, 'fondo', { p: 2, f: 3 });
      S(svg, 'rect', Object.assign({ x: c[1] - 24, y: c[2] + 34, width: 30, height: 6, fill: 'var(--brand-500)' }, pa({ p: 2, f: 3, r: 1400 + k * 60 })));
    });
    A.box(C[0] - 40, C[1] - 24, 80, 48, 'nodo', { p: 2, f: 3 }); A.txt(C[0], C[1] + 5, 'coordinatore', 't-s', { p: 2, f: 3 });
    // 3 · un computer si spegne
    var c3 = CITTA[3]; S(svg, 'rect', Object.assign({ x: c3[1] - 24, y: c3[2] - 20, width: 48, height: 40, rx: 3, 'class': 'nodo guasto' }, pa({ p: 3, f: 3 }))); croce(A, c3[1], c3[2], { p: 3, f: 3 });
    A.pk('gr3', { p: 3, f: 3, d: 900, r: 300 }, null, 'goccia'); A.pk('g2', { p: 3, f: 3, d: 900, r: 1300 }, null, 'goccia'); A.pk('g5', { p: 3, f: 3, d: 900, r: 1400 }, null, 'goccia');
    A.txt(C[0], C[1] + 72, 'i suoi pezzi vanno agli altri', 't-a', { p: 3, f: 3, r: 1000 });
    // 4 · i risultati tornano
    CITTA.forEach(function (c, k) { if (k !== 3) A.pk('gr' + k, { p: 4, d: 900, r: k * 100 }, null, 'goccia'); });
    A.box(C[0] - 70, C[1] - 40, 140, 80, 'nodo evid', { p: 4, r: 1500 }); A.txt(C[0], C[1] - 4, 'calcolo finito', 't-b', { p: 4, r: 1500 }); A.txt(C[0], C[1] + 16, 'in un giorno', 't-b', { p: 4, r: 1500 });
  });

  /* ===================== 6.9 · cloud ed edge ===================== */
  costruisci('f-edge', function (svg, A) {
    A.txt(180, 22, 'CLOUD · si elabora lontano', 't-eti'); A.txt(540, 22, 'EDGE · si elabora vicino', 't-eti');
    A.path('M360 30 L360 310', 'lin').setAttribute('stroke-dasharray', '4 5');
    function scena(x0, chip) {
      A.icona('cctv', x0 + 50, 200, { s: 36 }); A.txt(x0 + 50, 236, 'videocamera', 't-s');
      A.box(x0 + 110, 220, 90, 60, 'nodo'); A.path('M' + (x0 + 125) + ' 220 L' + (x0 + 125) + ' 280 M' + (x0 + 140) + ' 220 L' + (x0 + 140) + ' 280 M' + (x0 + 155) + ' 220 L' + (x0 + 155) + ' 280 M' + (x0 + 170) + ' 220 L' + (x0 + 170) + ' 280 M' + (x0 + 185) + ' 220 L' + (x0 + 185) + ' 280'); A.txt(x0 + 155, 298, 'cancello', 't-s');
      A.icona('car', x0 + 50, 286, { s: 26 });
      A.icona('timer', x0 + 250, 270, { s: 22 });
      if (chip) { A.icona('cpu', x0 + 50, 130, { s: 34, tono: 'brand' }); A.txt(x0 + 50, 104, 'chip', 't-b'); A.path('M' + (x0 + 50) + ' 150 L' + (x0 + 50) + ' 180', 'lin'); }
    }
    scena(10, false); scena(370, true);
    A.disp('server', 280, 70, { s: .8 }); A.txt(280, 112, 'data center lontano', 't-s'); A.path('M80 180 L260 90', 'lin').setAttribute('stroke-dasharray', '4 4');
    A.disp('nuvola', 650, 60, { s: 1.2 }); A.txt(650, 66, 'cloud', 't-s'); A.path('M430 120 L630 72', 'lin').setAttribute('stroke-dasharray', '4 4');
    A.via('e1', 'M80 180 L260 90'); A.via('e2', 'M260 90 L190 220'); A.via('e3', 'M430 120 L630 72');
    A.txt(282, 276, '0 ms', 't-mono', { f: 1 }, 'start'); A.txt(642, 276, '0 ms', 't-mono', { f: 2 }, 'start');
    // 1 · tutto il video verso il data center
    for (var k = 0; k < 9; k++) A.pk('e1', { p: 1, f: 1, d: 900, r: k * 220 }, null, 'goccia');
    A.txt(150, 160, 'tutto il video', 't-a', { p: 1, f: 1 }, 'end');
    // 2 · il comando torna dopo parecchi decimi di secondo
    A.pk('e2', { p: 2, f: 2, d: 1500, r: 400, resta: true }, 'apri');
    A.txt(282, 276, '≈ 0,4 s', 't-e', { p: 2, r: 1900 }, 'start');
    // 3 · edge: il chip decide subito
    S(svg, 'rect', Object.assign({ x: 396, y: 108, width: 48, height: 44, rx: 4, 'class': 'anello' }, pa({ p: 3 })));
    A.txt(530, 200, 'auto riconosciuta: apre!', 't-b', { p: 3, r: 300 });
    A.txt(642, 276, '≈ 5 ms', 't-b', { p: 3, r: 300 }, 'start');
    // 4 · al cloud solo una riga
    A.pk('e3', { p: 4, d: 1300, resta: true }, '1 riga');
    cartello(A, 374, 156, 340, 26, '«ore 8:02, auto riconosciuta, cancello aperto»', 'nodo', { p: 4, r: 1300 }, 't-s');
  });
})();
