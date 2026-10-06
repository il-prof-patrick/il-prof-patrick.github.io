/* Capitolo 2 · Le reti di computer — schemi, animazioni a passi e widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var croce = K.croce, linea = K.linea;

  /* ===================== 2.2 · l'estensione delle reti ===================== */
  costruisci('s-estensione', function (svg, A) {
    var CX = 360, CY = 290, R = [50, 100, 150, 200, 250];
    var dati = [['BAN', 'corpo', 'watch'], ['PAN', 'intorno a te', 'headphones'], ['LAN', 'casa, scuola', 'house'], ['MAN', 'città', 'building-2'], ['WAN', 'nazioni e continenti', 'globe']];
    for (var k = R.length - 1; k >= 0; k--) {
      var r = R[k];
      S(svg, 'path', { d: 'M' + (CX - r) + ' ' + CY + ' A' + r + ' ' + r + ' 0 0 1 ' + (CX + r) + ' ' + CY + ' Z', fill: 'var(--brand-500)', 'fill-opacity': (0.06 + 0.045 * (R.length - k)).toFixed(3), stroke: 'var(--brand-500)', 'stroke-width': 1.5 });
    }
    A.icona('user', CX, CY - 18, { s: 24, tono: 'brand' });
    dati.forEach(function (d, k) {
      var r = R[k], rin = k ? R[k - 1] : 0, xm = k ? CX + (r + rin) / 2 : CX + 28, xs = k ? CX - (r + rin) / 2 : CX - 28;
      A.txt(xm, CY - 6, d[0], 't-b');
      A.icona(d[2], xs, CY - 14, { s: 20 });
      if (k >= 2) A.txt(CX, CY - r + 22, d[1], 't-s');
    });
  });

  /* ===================== 2.3 · le topologie ===================== */
  var NOMI_T = ['bus', 'anello', 'stella', 'albero', 'maglia parziale'];
  function topologie(svg, A, y0, conAnim) {
    var info = [];
    NOMI_T.forEach(function (nome, t) {
      var cx = 72 + t * 144, cy = y0 + 100, pc = [], linee = [], centri = [];
      if (t === 0) { pc = [[cx - 48, cy - 42], [cx, cy - 42], [cx + 48, cy - 42], [cx - 48, cy + 42], [cx, cy + 42], [cx + 48, cy + 42]]; linee.push('M' + (cx - 64) + ' ' + cy + ' L' + (cx + 64) + ' ' + cy); pc.forEach(function (p) { linee.push('M' + p[0] + ' ' + p[1] + ' L' + p[0] + ' ' + cy); }); }
      if (t === 1 || t === 2 || t === 4) { for (var k = 0; k < 6; k++) { var a = -Math.PI / 2 + k * Math.PI / 3; pc.push([cx + 52 * Math.cos(a), cy + 52 * Math.sin(a)]); } }
      if (t === 1) { S(svg, 'circle', { cx: cx, cy: cy, r: 52, fill: 'none', 'class': 'lin' }); }
      if (t === 2) { centri.push([cx, cy]); pc.forEach(function (p) { linee.push('M' + cx + ' ' + cy + ' L' + p[0].toFixed(1) + ' ' + p[1].toFixed(1)); }); }
      if (t === 3) { centri = [[cx, cy - 56], [cx - 34, cy - 4], [cx + 34, cy - 4]]; pc = [[cx - 56, cy + 52], [cx - 34, cy + 52], [cx - 12, cy + 52], [cx + 12, cy + 52], [cx + 34, cy + 52], [cx + 56, cy + 52]];
        linee.push('M' + centri[0] + ' L' + centri[1], 'M' + centri[0] + ' L' + centri[2]); for (var j = 0; j < 6; j++) linee.push('M' + centri[j < 3 ? 1 : 2] + ' L' + pc[j]); }
      if (t === 4) { var L = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 3], [1, 4], [2, 5]]; L.forEach(function (l) { linee.push('M' + pc[l[0]][0].toFixed(1) + ' ' + pc[l[0]][1].toFixed(1) + ' L' + pc[l[1]][0].toFixed(1) + ' ' + pc[l[1]][1].toFixed(1)); }); }
      linee.forEach(function (d) { A.path(d, 'lin'); });
      centri.forEach(function (c) { A.disp('switch', c[0], c[1], { s: .38, attivo: true }); });
      pc.forEach(function (p) { A.disp('computer', p[0], p[1], { s: .34, attivo: !!conAnim }); });
      A.txt(cx, y0 + 186, nome, 't');
      info.push({ cx: cx, cy: cy, pc: pc, centri: centri });
    });
    return info;
  }
  costruisci('s-topologie', function (svg, A) { topologie(svg, A, 20, false); });

  costruisci('f-topologie', function (svg, A) {
    var T = topologie(svg, A, 30, true);
    function spegni(t, idx, o) { idx.forEach(function (i) { var p = T[t].pc[i]; A.disp('computer', p[0], p[1], Object.assign({ s: .34 }, o)); }); }
    var tutti = [0, 1, 2, 3, 4, 5];
    // 1 · bus: si spezza il cavo
    croce(A, T[0].cx - 24, T[0].cy, { p: 1 }); spegni(0, tutti, { p: 1, r: 500 });
    A.txt(T[0].cx, 268, 'tutto fermo', 't-e', { p: 1, r: 500 });
    // 2 · anello
    croce(A, T[1].cx + 45, T[1].cy - 26, { p: 2 }); spegni(1, tutti, { p: 2, r: 500 });
    A.txt(T[1].cx, 268, 'l’anello si ferma', 't-e', { p: 2, r: 500 });
    // 3 · stella: prima un cavo, poi lo switch
    var p3 = T[2].pc[1]; croce(A, (T[2].cx + p3[0]) / 2, (T[2].cy + p3[1]) / 2, { p: 3 }); spegni(2, [1], { p: 3, r: 400 });
    A.txt(T[2].cx, 268, 'solo quel computer…', 't-a', { p: 3, f: 3, r: 400 });
    S(svg, 'rect', Object.assign({ x: T[2].cx - 20, y: T[2].cy - 10, width: 40, height: 20, rx: 3, 'class': 'nodo guasto' }, pa({ p: 3, r: 2000 })));
    spegni(2, [0, 2, 3, 4, 5], { p: 3, r: 2300 });
    A.txt(T[2].cx, 284, '…poi lo switch: tutti', 't-e', { p: 3, r: 2300 });
    // 4 · albero: si guasta lo switch di un piano
    var c4 = T[3].centri[2]; S(svg, 'rect', Object.assign({ x: c4[0] - 20, y: c4[1] - 10, width: 40, height: 20, rx: 3, 'class': 'nodo guasto' }, pa({ p: 4 })));
    spegni(3, [3, 4, 5], { p: 4, r: 400 }); A.txt(T[3].cx, 268, 'si spegne un ramo', 't-a', { p: 4, r: 400 });
    // 5 · maglia: due collegamenti interrotti, ma ci sono altre strade
    var m = T[4].pc; croce(A, (m[0][0] + m[1][0]) / 2, (m[0][1] + m[1][1]) / 2, { p: 5 }); croce(A, (m[2][0] + m[5][0]) / 2, (m[2][1] + m[5][1]) / 2, { p: 5 });
    A.via('mg1', 'M' + m[0][0].toFixed(1) + ' ' + m[0][1].toFixed(1) + ' L' + m[5][0].toFixed(1) + ' ' + m[5][1].toFixed(1) + ' L' + m[4][0].toFixed(1) + ' ' + m[4][1].toFixed(1) + ' L' + m[1][0].toFixed(1) + ' ' + m[1][1].toFixed(1));
    A.pk('mg1', { p: 5, r: 500, d: 1800 }, null, 'goccia');
    A.txt(T[4].cx, 268, 'tutti ancora accesi', 't-b', { p: 5, r: 600 });
  });

  /* ===================== 2.4 · client-server e peer-to-peer ===================== */
  var COLORI = ['#e67e22', '#2e86c1', '#27ae60', '#8e44ad', '#c0392b', '#f1c40f'];
  function pezzi(svg, x, y, quali, o, dim) {
    dim = dim || 9;
    for (var k = 0; k < 6; k++) {
      var pieno = quali.indexOf(k) >= 0;
      S(svg, 'rect', Object.assign({ x: x - 3 * (dim + 1) + k * (dim + 1), y: y, width: dim, height: dim, rx: 1, fill: pieno ? COLORI[k] : 'none', stroke: pieno ? 'none' : 'var(--border-strong)', 'stroke-width': 1 }, pa(o)));
    }
  }
  costruisci('f-p2p', function (svg, A) {
    var SC = [180, 168], PC = [540, 168], R = 108;
    A.txt(180, 22, 'CLIENT-SERVER', 't-eti'); A.txt(540, 22, 'PEER-TO-PEER', 't-eti');
    A.path('M360 36 L360 312', 'lin').setAttribute('stroke-dasharray', '4 5');
    var cl = [], pp = [];
    for (var k = 0; k < 6; k++) { var a = -Math.PI / 2 + k * Math.PI / 3; cl.push([SC[0] + R * Math.cos(a), SC[1] + R * Math.sin(a) * .9]); pp.push([PC[0] + R * Math.cos(a), PC[1] + R * Math.sin(a) * .9]); }
    cl.forEach(function (c, k) { A.path('M' + SC + ' L' + c[0].toFixed(1) + ' ' + c[1].toFixed(1)); A.via('cs' + k, 'M' + SC + ' L' + c[0].toFixed(1) + ' ' + c[1].toFixed(1)); });
    for (var i = 0; i < 6; i++) for (var j = i + 1; j < 6; j++) A.path('M' + pp[i][0].toFixed(1) + ' ' + pp[i][1].toFixed(1) + ' L' + pp[j][0].toFixed(1) + ' ' + pp[j][1].toFixed(1), 'lin').setAttribute('stroke-opacity', '.45');
    S(svg, 'circle', { cx: SC[0], cy: SC[1], r: 30, 'class': 'nodo-sfondo' }); A.disp('server', SC[0], SC[1], { s: .8 });
    cl.forEach(function (c) { A.disp('computer', c[0], c[1] - 6, { s: .5 }); pezzi(svg, c[0], c[1] + 12, []); });
    pp.forEach(function (c, k) { A.disp('computer', c[0], c[1] - 6, { s: .5 }); pezzi(svg, c[0], c[1] + 12, [k, (k + 2) % 6], { f: 2 }); });
    pezzi(svg, SC[0], SC[1] + 26, [0, 1, 2, 3, 4, 5]);
    // 1 · tutti chiedono, il server manda sei copie intere
    cl.forEach(function (c, k) { A.path('M' + SC + ' L' + c[0].toFixed(1) + ' ' + c[1].toFixed(1), 'lin att', { p: 1, f: 1 }); A.pk('cs' + k, { p: 1, f: 1, d: 1500, r: k * 120 }, 'file'); pezzi(svg, c[0], c[1] + 12, [0, 1, 2, 3, 4, 5], { p: 1, f: 1, r: 1500 + k * 120 }); });
    A.box(110, 296, 140, 22, 'nodo guasto', { p: 1, f: 1, r: 300 }); A.txt(180, 312, 'server sotto sforzo', 't-e', { p: 1, f: 1, r: 300 });
    // 2 · il server si spegne
    S(svg, 'rect', Object.assign({ x: SC[0] - 30, y: SC[1] - 28, width: 60, height: 56, rx: 4, 'class': 'nodo guasto' }, pa({ p: 2, f: 2 })));
    croce(A, SC[0], SC[1], { p: 2, f: 2 });
    A.txt(180, 312, 'server spento: nessuno riceve nulla', 't-e', { p: 2, f: 2 });
    // 3 · peer-to-peer: i pezzi si scambiano in tutte le direzioni
    var vie = 0;
    function scambio(a, b, colore, o) { var id = 'pp' + (vie++); A.via(id, 'M' + pp[a][0].toFixed(1) + ' ' + (pp[a][1] - 6).toFixed(1) + ' L' + pp[b][0].toFixed(1) + ' ' + (pp[b][1] - 6).toFixed(1)); var g = A.pk(id, o, null, 'goccia'); g.querySelector('circle').setAttribute('style', 'fill:' + COLORI[colore]); }
    for (var q = 0; q < 6; q++) { scambio(q, (q + 1) % 6, q, { p: 3, f: 3, r: q * 180, d: 1000 }); scambio(q, (q + 3) % 6, (q + 2) % 6, { p: 3, f: 3, r: 700 + q * 180, d: 1000 }); scambio((q + 4) % 6, q, (q + 4) % 6, { p: 3, f: 3, r: 1400 + q * 180, d: 1000 }); }
    pp.forEach(function (c, k) { pezzi(svg, c[0], c[1] + 12, [0, 1, 2, 3, 4, 5], { p: 3, r: 2600 + k * 100 }); });
    A.txt(540, 312, 'ognuno scarica da tanti e intanto offre i suoi pezzi', 't-b', { p: 3, f: 3, r: 1000 });
    // 4 · un computer si spegne, gli altri continuano
    S(svg, 'rect', Object.assign({ x: pp[1][0] - 24, y: pp[1][1] - 26, width: 48, height: 52, rx: 4, 'class': 'nodo guasto' }, pa({ p: 4 })));
    croce(A, pp[1][0], pp[1][1] - 6, { p: 4 });
    [[0, 3], [3, 5], [5, 2], [2, 4], [4, 0]].forEach(function (c, k) { scambio(c[0], c[1], k, { p: 4, r: k * 250, d: 1000 }); });
    A.txt(540, 312, 'uno si spegne: gli altri continuano', 't-b', { p: 4, r: 300 });
  });

  /* ===================== 2.5 · coprire la casa con il Wi-Fi ===================== */
  costruisci('s-wifi', function (svg, A) {
    var conf = [['Solo router + access point', [1, 1, 0, 1, 0, 0], [[0, 'AP']], 'metà casa senza segnale', 't-e'],
      ['Router + ripetitore', [1, 1, 2, 1, 2, 2], [[0, 'AP'], [1, 'rip']], 'copertura estesa, banda ridotta', 't-a'],
      ['Sistema mesh', [1, 1, 1, 1, 1, 1], [[0, '1'], [2, '2'], [4, '3']], 'un’unica rete in tutta la casa', 't-b']];
    var fill = { 0: 'var(--errore-bg)', 1: 'var(--brand-100)', 2: 'var(--accent-100)' };
    conf.forEach(function (c, i) {
      var x0 = 15 + i * 240, y0 = 40;
      A.txt(x0 + 105, 22, c[0], 't-b');
      for (var k = 0; k < 6; k++) S(svg, 'rect', { x: x0 + (k % 3) * 70, y: y0 + Math.floor(k / 3) * 65, width: 70, height: 65, fill: fill[c[1][k]], stroke: 'var(--border-strong)', 'stroke-width': 2 });
      c[2].forEach(function (a) { var x = x0 + (a[0] % 3) * 70 + 35, y = y0 + Math.floor(a[0] / 3) * 65 + 32; S(svg, 'circle', { cx: x, cy: y, r: 15, 'class': 'nodo attivo' }); S(svg, 'text', { x: x, y: y + 4, 'text-anchor': 'middle', 'class': 't-on', style: 'font-size:11px' }, a[1]); });
      A.txt(x0 + 105, 200, c[3], c[4]);
    });
  });

  /* ===================== 2.6 · switch o router? ===================== */
  costruisci('f-switchrouter', function (svg, A) {
    A.box(10, 30, 270, 250, 'fondo'); A.txt(145, 52, 'CASA A · una rete', 't-eti');
    A.box(440, 30, 270, 250, 'fondo'); A.txt(575, 52, 'CASA B · un’altra rete', 't-eti');
    var swA = [200, 160], swB = [520, 160], R = [360, 160];
    var dA = { tel: [70, 90], stamp: [70, 160], pc: [70, 230] }, dB = { tel: [650, 90], stamp: [650, 160], pc: [650, 230] };
    [dA, dB].forEach(function (D, j) { var sw = j ? swB : swA; Object.keys(D).forEach(function (k) { A.path('M' + D[k] + ' L' + sw, 'lin'); }); });
    A.path('M' + swA + ' L' + R, 'lin'); A.path('M' + R + ' L' + swB, 'lin');
    function disp(D, k, nome) { var p = D[k]; S(svg, 'rect', { x: p[0] - 26, y: p[1] - 24, width: 52, height: 48, 'class': 'nodo-sfondo' }); if (k === 'stamp') A.icona('printer', p[0], p[1] - 6, { s: 30 }); else A.disp(k === 'tel' ? 'telefono' : 'computer', p[0], p[1] - 6, { s: .55 }); A.txt(p[0], p[1] + 30, nome, 't-s'); }
    disp(dA, 'tel', 'telefono'); disp(dA, 'stamp', 'stampante'); disp(dA, 'pc', 'computer');
    disp(dB, 'tel', 'telefono'); disp(dB, 'stamp', 'stampante'); disp(dB, 'pc', 'computer');
    [swA, swB].forEach(function (s) { S(svg, 'rect', { x: s[0] - 48, y: s[1] - 18, width: 96, height: 36, 'class': 'nodo-sfondo' }); A.disp('switch', s[0], s[1], { s: .9 }); A.txt(s[0], s[1] + 32, 'switch', 't'); });
    S(svg, 'circle', { cx: R[0], cy: R[1], r: 30, 'class': 'nodo-sfondo' }); A.disp('router', R[0], R[1] + 6, { s: .75 }); A.txt(R[0], R[1] + 42, 'router', 't-b');
    function via(id, pts) { A.via(id, pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0] + ' ' + p[1]; }).join(' ')); }
    via('sr1', [dA.tel, swA]); via('sr2', [swA, dA.stamp]); via('sr3', [swA, R]); via('sr4', [R, swB]); via('sr5', [swB, dB.pc]);
    // 1 · nella stessa casa
    A.pk('sr1', { p: 1, d: 900 }, 'stampante'); A.pk('sr2', { p: 1, f: 1, r: 950, d: 900, resta: true }, 'stampante');
    A.txt(145, 296, 'stessa rete: basta lo switch', 't-b', { p: 1, f: 1, r: 1000 });
    // 2 · verso l'altra casa: lo switch passa al router
    A.pk('sr1', { p: 2, d: 900 }, 'PC di B'); A.pk('sr3', { p: 2, f: 2, r: 950, d: 1100, resta: true }, 'PC di B');
    A.txt(280, 116, 'non è in questa rete:', 't-a', { p: 2, f: 2, r: 950 }); A.txt(280, 134, 'al router', 't-a', { p: 2, f: 2, r: 950 });
    // 3 · il router guarda l'IP e inoltra
    A.pk('sr4', { p: 3, f: 3, d: 1100, resta: true }, 'PC di B');
    A.box(300, 74, 120, 40, 'nodo evid', { p: 3, f: 3 }); A.txt(360, 92, 'IP della rete B', 't-b', { p: 3, f: 3 }); A.txt(360, 107, '→ casa B', 't-s', { p: 3, f: 3 });
    // 4 · lo switch di B consegna
    A.pk('sr5', { p: 4, d: 1000, resta: true }, 'PC di B');
    S(svg, 'rect', Object.assign({ x: 616, y: 198, width: 68, height: 64, rx: 4, 'class': 'anello' }, pa({ p: 4, r: 1000 })));
  });

  // un dispositivo: disegnato (computer, modem, switch…) con il nome accanto; le reti restano riquadri
  var GLIFI = { PC: 'computer', computer: 'computer', modem: 'modem', switch: 'switch', hub: 'switch', telefono: 'telefono', portatile: 'portatile', console: 'computer', 'smart TV': 'computer', Internet: 'nuvola' };
  function nodo(A, x, y, w, h, nome, sotto, cls, o) {
    var tipo = GLIFI[nome.split(' ')[0]] || GLIFI[nome], on = cls && cls.indexOf('attivo') >= 0;
    if (tipo) {
      // il dispositivo al centro del suo spazio, il nome fuori: a sinistra, a destra o sotto (o.et)
      o = o || {}; var cx = x + w / 2, cy = y + h / 2, sc = Math.min(1, (h + 6) / 56);
      var et = o.et || (w >= 110 ? 'sotto' : (cx < 360 ? 'sx' : 'dx'));
      A.box(cx - 32 * sc, cy - 28 * sc, 64 * sc, 56 * sc, 'nodo-sfondo', o);
      A.disp(tipo, cx, cy, Object.assign({ s: sc, attivo: on }, o));
      var cl = on ? 't-b' : 't', dx = 38 * sc;
      if (et === 'sotto') { A.txt(cx, cy + 30 * sc + 14, nome, cl, o); if (sotto) A.txt(cx, cy + 30 * sc + 29, sotto, 't-m', o); }
      else { var ax = et === 'sx' ? cx - dx : cx + dx, an = et === 'sx' ? 'end' : 'start';
        A.txt(ax, cy + (sotto ? -1 : 5), nome, cl, o, an); if (sotto) A.txt(ax, cy + 15, sotto, 't-m', o, an); }
      return;
    }
    A.box(x, y, w, h, cls || 'nodo', o);
    A.txt(x + w / 2, y + (sotto ? h / 2 - 1 : h / 2 + 5), nome, on ? 't-on' : 't', o);
    if (sotto) A.txt(x + w / 2, y + h / 2 + 15, sotto, on ? 't-on' : 't-m', o).style.cssText = on ? 'font-weight:400;font-size:12px' : '';
  }
  function croce(A, x, y, o) { var g = A.g(o); A.path('M' + (x - 10) + ' ' + (y - 10) + ' L' + (x + 10) + ' ' + (y + 10) + ' M' + (x + 10) + ' ' + (y - 10) + ' L' + (x - 10) + ' ' + (y + 10), 'lin err', {}, null, g).style.cssText = 'stroke-dasharray:none;stroke-width:4'; return g; }

  /* 4.2 · hub e switch */
  costruisci('f-hub', function (svg, A) {
    var C = { x: 360, y: 140 }, P = { A: [90, 50], B: [630, 50], C: [90, 230], D: [630, 230] };
    Object.keys(P).forEach(function (k) {
      var p = P[k]; A.path('M' + p[0] + ' ' + p[1] + ' L' + C.x + ' ' + C.y);
      A.via('h-' + k + 'c', 'M' + p[0] + ' ' + p[1] + ' L' + C.x + ' ' + C.y); A.via('h-c' + k, 'M' + C.x + ' ' + C.y + ' L' + p[0] + ' ' + p[1]);
      nodo(A, p[0] - 45, p[1] - 22, 90, 44, 'PC ' + k, null, k === 'A' ? 'nodo attivo' : 'nodo');
    });
    A.box(306, 122, 108, 46, 'nodo-sfondo'); A.disp('switch', 360, 140, { f: 3 }); A.txt(360, 172, 'hub', 't', { p: 0, f: 3 });
    A.disp('switch', 360, 140, { p: 4, attivo: true }); A.txt(360, 172, 'switch', 't-b', { p: 4 });
    // 1: A invia a C, arriva all'hub
    A.pk('h-Ac', { p: 1, f: 1, resta: true }, 'per C');
    // 2: l'hub ripete su tutte le porte
    ['B', 'C', 'D'].forEach(function (k) { A.pk('h-c' + k, { p: 2, f: 2, resta: true }, 'per C'); });
    A.txt(630, 100, 'non è per me: scartato', 't-e', { p: 2, f: 2, r: 1500 }); A.txt(630, 280, 'non è per me: scartato', 't-e', { p: 2, f: 2, r: 1500 });
    A.txt(90, 280, 'ricevuto', 't-a', { p: 2, f: 2, r: 1500 });
    // 3: A e B insieme: collisione
    A.pk('h-Ac', { p: 3, f: 3, resta: true, d: 1200 }, 'A'); A.pk('h-Bc', { p: 3, f: 3, resta: true, d: 1200 }, 'B', 'pkt-ok');
    croce(A, 360, 100, { p: 3, f: 3, r: 1250 }); A.txt(360, 80, 'collisione: due messaggi persi', 't-e', { p: 3, f: 3, r: 1250 });
    // 4: con lo switch va solo a C
    A.pk('h-Ac', { p: 4, d: 1100 }, 'per C'); A.pk('h-cC', { p: 4, f: 4, resta: true, r: 1150, d: 1100 }, 'per C');
    A.txt(360, 285, 'B e D non ricevono niente', 't-a', { p: 4, f: 4, r: 2300 });
    // 5: due conversazioni insieme
    A.pk('h-Ac', { p: 5, d: 1100 }, 'per C'); A.pk('h-cC', { p: 5, resta: true, r: 1150, d: 1100 }, 'per C');
    A.pk('h-Bc', { p: 5, d: 1100 }, 'per D', 'pkt-ok'); A.pk('h-cD', { p: 5, resta: true, r: 1150, d: 1100 }, 'per D', 'pkt-ok');
    A.txt(360, 285, 'due conversazioni nello stesso momento', 't-b', { p: 5, r: 2300 });
  });

  /* 4.3 · il router */
  costruisci('f-router', function (svg, A) {
    var R = { r1: [210, 140], r2: [370, 60], r3: [370, 220], r4: [530, 140] };
    function linea(a, b) { A.path('M' + a[0] + ' ' + a[1] + ' L' + b[0] + ' ' + b[1]); }
    linea([140, 140], R.r1); linea(R.r1, R.r2); linea(R.r1, R.r3); linea(R.r2, R.r4); linea(R.r3, R.r4); linea(R.r4, [575, 140]); linea(R.r2, [455, 30]);
    nodo(A, 20, 110, 120, 60, 'rete di casa', 'LAN'); nodo(A, 575, 110, 140, 60, 'rete della scuola', 'LAN');
    nodo(A, 455, 10, 150, 40, 'rete di un ufficio');
    Object.keys(R).forEach(function (k) { S(svg, 'circle', { cx: R[k][0], cy: R[k][1], r: 24, 'class': 'nodo-sfondo' }); A.disp('router', R[k][0], R[k][1] + 4, { s: .62 }); A.txt(R[k][0], R[k][1] + 30, k.toUpperCase(), 't-s'); });
    A.via('ro1', 'M140 140 L210 140'); A.via('ro2', 'M210 140 L370 220'); A.via('ro3', 'M370 220 L530 140'); A.via('ro4', 'M530 140 L575 140');
    A.pk('ro1', { p: 1, f: 1, resta: true, d: 1000 }, '→ scuola');
    A.box(20, 200, 150, 50, 'nodo evid', { p: 1, f: 3, r: 1000 }); A.txt(95, 220, 'tabella di R1', 't-s', { p: 1, f: 3, r: 1000 }); A.txt(95, 240, 'scuola → via R3', 't-b', { p: 1, f: 3, r: 1000 });
    A.pk('ro2', { p: 2, d: 1300 }, '→ scuola'); A.pk('ro3', { p: 2, f: 2, resta: true, r: 1350, d: 1300 }, '→ scuola');
    A.pk('ro4', { p: 3, d: 700 }, '→ scuola');
    S(svg, 'rect', Object.assign({ x: 569, y: 104, width: 148, height: 72, rx: 2, 'class': 'anello' }, pa({ p: 3, f: 3, r: 750 })));
    croce(A, 320, 195, { p: 4 });
    A.box(20, 200, 150, 50, 'nodo evid', { p: 4, r: 500 }); A.txt(95, 220, 'tabella di R1', 't-s', { p: 4, r: 500 }); A.txt(95, 240, 'scuola → via R2', 't-b', { p: 4, r: 500 });
    A.via('ro5', 'M140 140 L210 140 L370 60 L530 140 L575 140');
    A.pk('ro5', { p: 4, r: 1200, d: 3000 }, '→ scuola');
    S(svg, 'rect', Object.assign({ x: 569, y: 104, width: 148, height: 72, rx: 2, 'class': 'anello' }, pa({ p: 4, r: 4250 })));
  });

  /* 4.4 · modulazione e demodulazione */
  costruisci('f-modem', function (svg, A) {
    nodo(A, 10, 60, 90, 50, 'computer', null, null, { et: 'sotto' }); nodo(A, 140, 60, 90, 50, 'modem', null, 'nodo attivo', { et: 'sotto' });
    nodo(A, 490, 60, 90, 50, 'modem', null, 'nodo attivo', { et: 'sotto' }); nodo(A, 620, 60, 90, 50, 'computer', null, null, { et: 'sotto' });
    A.path('M100 85 L140 85'); A.path('M580 85 L620 85'); A.path('M230 85 L490 85');
    A.txt(360, 60, 'LINEA DELL’OPERATORE', 't-eti');
    (function () { var d = ''; for (var x = 0; x <= 250; x += 2) d += (x ? ' L' : 'M') + (235 + x) + ' ' + (85 - 7 * Math.sin(x / 250 * 12 * Math.PI)).toFixed(1); S(svg, 'path', Object.assign({ d: d, fill: 'none', stroke: 'var(--brand-500)', 'stroke-width': 2 }, pa({ f: 2 }))); })();
    A.txt(360, 150, 'portante: un’onda regolare che non porta ancora nulla', 't-m', { f: 1 });
    ['1', '0', '1', '1', '0'].forEach(function (b, k) { A.txt(28 + k * 14, 170, b, 't-mono', { p: 1, r: k * 150 }, 'start'); });
    A.txt(10, 192, 'bit dal computer', 't-m', { p: 1 }, 'start');
    function onda(x0, y0) { var d = ''; for (var x = 0; x <= 110; x += 2) { var bit = [1, 0, 1, 1, 0][Math.min(4, Math.floor(x / 22))], am = bit ? 14 : 5; d += (x ? ' L' : 'M') + (x0 + x) + ' ' + (y0 - am * Math.sin(x / 22 * 4 * Math.PI)).toFixed(1); } return d; }
    S(svg, 'path', Object.assign({ d: onda(130, 170), fill: 'none', stroke: 'var(--brand-500)', 'stroke-width': 2.5 }, pa({ p: 2 })));
    A.txt(185, 207, 'modulazione: bit → onda', 't-a', { p: 2 });
    A.via('md', 'M285 85 L435 85');
    var g = A.g({ p: 3, f: 3, rotta: '#md', resta: true, d: 2000 }); g.setAttribute('class', 'pk');
    var d = ''; for (var x = -50; x <= 50; x += 2) { var bit = [1, 0, 1, 1, 0][Math.min(4, Math.floor((x + 50) / 20))], am = bit ? 12 : 4; d += (x > -50 ? ' L' : 'M') + x + ' ' + (-am * Math.sin((x + 50) / 20 * 4 * Math.PI)).toFixed(1); }
    S(g, 'path', { d: d, fill: 'none', stroke: 'var(--accent-500)', 'stroke-width': 3 });
    S(svg, 'path', Object.assign({ d: onda(480, 170), fill: 'none', stroke: 'var(--brand-500)', 'stroke-width': 2.5 }, pa({ p: 4 })));
    A.txt(535, 207, 'demodulazione: onda → bit', 't-a', { p: 4 });
    ['1', '0', '1', '1', '0'].forEach(function (b, k) { A.txt(638 + k * 14, 170, b, 't-mono', { p: 4, r: 400 + k * 150 }, 'start'); });
    A.txt(710, 192, 'bit al computer', 't-m', { p: 4 }, 'end');
  });
  /* Prova tu · lo switch impara */
  W.registra('switch', function (el) {
    var b = W.base(el, 'Prova tu · hub o switch?', 'tabella MAC–porta');
    var modo = 'switch', tab = {}, da = 'A', a = 'C', corsa = null;
    var PC = { A: [90, 50, 1], B: [630, 50, 2], C: [90, 230, 3], D: [630, 230, 4] }, CX = 360, CY = 140;
    b.ctrl.appendChild(W.scelta([['hub', 'Hub'], ['switch', 'Switch']], modo, function (m) { modo = m; tab = {}; disegna(); b.dica(m === 'hub' ? 'Ora c’è un hub: ripete tutto su tutte le porte.' : 'Ora c’è uno switch con la tabella vuota: invia qualche pacchetto e guardala riempirsi.'); }));
    function sel(et, val, fn) { var s = W.h('select', { 'aria-label': et, style: 'font:600 14px var(--font-sans);padding:4px 6px;border:1px solid var(--border-strong);border-radius:2px;background:var(--surface-000);color:var(--ink)' });
      ['A', 'B', 'C', 'D'].forEach(function (k) { var o = W.h('option', { value: k, testo: 'PC ' + k }); if (k === val) o.selected = true; s.appendChild(o); }); s.onchange = function () { fn(s.value); }; return W.h('label', { 'class': 'wid-campo' }, [W.h('span', { testo: et }), s]); }
    b.ctrl.appendChild(sel('Da', da, function (v) { da = v; })); b.ctrl.appendChild(sel('A', a, function (v) { a = v; }));
    b.ctrl.appendChild(W.bottone('Invia', invia, 'primario'));
    b.ctrl.appendChild(W.bottone('Svuota la tabella', function () { tab = {}; disegna(); b.dica('Tabella svuotata: lo switch non sa più dove sono i computer.'); }));
    var svg = W.s('svg', { viewBox: '0 0 720 280', role: 'img', 'aria-label': 'Quattro computer collegati a un hub o a uno switch' }); el.appendChild(svg);
    var tabEl = W.h('div', { 'class': 'tab', style: 'margin:0' }); el.appendChild(tabEl); b.chiudi();
    function disegna(acceso) {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      Object.keys(PC).forEach(function (k) { var p = PC[k];
        S(svg, 'line', { x1: p[0], y1: p[1], x2: CX, y2: CY, 'class': 'lin' + (acceso && acceso[k] ? ' att' : '') });
        S(svg, 'rect', { x: p[0] - 45, y: p[1] - 22, width: 90, height: 44, rx: 2, 'class': 'nodo' + (acceso && acceso[k] === 'ok' ? ' evid' : acceso && acceso[k] === 'no' ? ' guasto' : '') });
        S(svg, 'text', { x: p[0], y: p[1] + 5, 'text-anchor': 'middle', 'class': 't' }, 'PC ' + k);
        S(svg, 'text', { x: CX + (p[0] < CX ? -80 : 80), y: CY + (p[1] < CY ? -24 : 34), 'text-anchor': 'middle', 'class': 't-s' }, 'porta ' + p[2]);
        if (acceso && acceso[k] === 'no') S(svg, 'text', { x: p[0], y: p[1] + (p[1] < CY ? -30 : 40), 'text-anchor': 'middle', 'class': 't-e' }, 'scartato');
        if (acceso && acceso[k] === 'ok') S(svg, 'text', { x: p[0], y: p[1] + (p[1] < CY ? -30 : 40), 'text-anchor': 'middle', 'class': 't-a' }, 'ricevuto');
      });
      S(svg, 'rect', { x: 300, y: 118, width: 120, height: 44, rx: 2, 'class': modo === 'switch' ? 'nodo attivo' : 'nodo' });
      S(svg, 'text', { x: CX, y: 145, 'text-anchor': 'middle', 'class': modo === 'switch' ? 't-on' : 't' }, modo);
      var righe = Object.keys(tab).sort().map(function (k) { return '<tr><td>MAC di PC ' + k + '</td><td class="num">porta ' + tab[k] + '</td></tr>'; }).join('');
      tabEl.innerHTML = modo === 'hub' ? '<table><tbody><tr><td>L’hub non ha nessuna tabella: non legge gli indirizzi.</td></tr></tbody></table>' :
        '<table><thead><tr><th>Indirizzo MAC</th><th>Porta</th></tr></thead><tbody>' + (righe || '<tr><td colspan="2">tabella vuota</td></tr>') + '</tbody></table>';
    }
    function invia() {
      if (da === a) { b.dica('Mittente e destinatario sono lo stesso computer: scegline due diversi.', 'att'); return; }
      if (corsa) corsa.stop();
      var noto = modo === 'switch' && tab[a], verso = modo === 'hub' || !noto ? ['A', 'B', 'C', 'D'].filter(function (k) { return k !== da; }) : [a];
      disegna(); var pk = []; var p0 = PC[da];
      var g = S(svg, 'rect', { width: 26, height: 16, rx: 2, 'class': 'pkt', x: -13, y: -8 }); pk.push(g);
      corsa = W.tween(el, 1100, function (q) { g.setAttribute('transform', 'translate(' + (p0[0] + (CX - p0[0]) * q) + ',' + (p0[1] + (CY - p0[1]) * q) + ')'); }, function () {
        svg.removeChild(g);
        var gg = verso.map(function (k) { return S(svg, 'rect', { width: 26, height: 16, rx: 2, 'class': 'pkt', x: -13, y: -8 }); });
        corsa = W.tween(el, 1100, function (q) { verso.forEach(function (k, i) { var p = PC[k]; gg[i].setAttribute('transform', 'translate(' + (CX + (p[0] - CX) * q) + ',' + (CY + (p[1] - CY) * q) + ')'); }); }, function () {
          var imparato = modo === 'switch' && !tab[da]; if (modo === 'switch') tab[da] = PC[da][2];
          var acc = {}; verso.forEach(function (k) { acc[k] = k === a ? 'ok' : 'no'; }); acc[da] = acc[da] || 'att';
          disegna(acc);
          var frase;
          if (modo === 'hub') frase = 'L’hub ha ripetuto il pacchetto su tutte e 3 le altre porte: PC ' + a + ' lo tiene, gli altri lo scartano.';
          else if (noto) frase = 'Lo switch sapeva già che PC ' + a + ' è sulla porta ' + tab[a] + ': il pacchetto è andato solo lì.';
          else frase = 'Lo switch non sapeva dov’è PC ' + a + ': ha inviato a tutte le porte, come un hub.';
          if (imparato) frase += ' Intanto ha imparato che PC ' + da + ' è sulla porta ' + PC[da][2] + '.';
          b.dica(frase, noto || modo === 'hub' ? (modo === 'hub' ? 'att' : 'ok') : 'att');
        });
      });
    }
    disegna(); b.dica('Scegli mittente e destinatario e premi «Invia». Prova poi a far rispondere il destinatario e a reinviare.');
  });
})();
