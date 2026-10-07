/* Capitolo 7 · Reti e intelligenza artificiale — animazioni a passi */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var croce = K.croce, linea = K.linea, cartello = K.cartello, mobile = K.mobile;

  /* ===================== 7.1 · il viaggio di una domanda ===================== */
  costruisci('f-chatbot', function (svg, A) {
    // telefono grande con l'app
    S(svg, 'rect', { x: 14, y: 40, width: 150, height: 230, rx: 18, 'class': 'nodo' });
    S(svg, 'rect', { x: 24, y: 62, width: 130, height: 186, rx: 3, fill: 'var(--surface-100)' });
    cartello(A, 26, 72, 126, 24, 'Che cos’è un router?', 'nodo evid', {}, 't-s').querySelector('text').style.fontSize = '10.5px';
    // la rete
    var T = [[200, 'Wi-Fi'], [280, 'router'], [370, 'fibra'], [460, 'dorsale']];
    A.icona('wifi', 200, 150, { s: 28 }); A.disp('router', 280, 156, { s: .5 }); A.txt(370, 156, '', 't');
    linea(svg, 'M164 150 L560 150', 'var(--accent-500)', 3, {});
    T.forEach(function (t) { A.txt(t[0], 182, t[1], 't-s'); });
    // data center con le GPU
    A.box(560, 40, 150, 230, 'fondo'); A.txt(635, 62, 'DATA CENTER', 't-eti');
    for (var r = 0; r < 4; r++) for (var c = 0; c < 4; c++) {
      var x = 584 + c * 26, y = 90 + r * 26;
      S(svg, 'rect', { x: x, y: y, width: 20, height: 20, rx: 2, 'class': 'nodo' });
      S(svg, 'rect', Object.assign({ x: x, y: y, width: 20, height: 20, rx: 2, fill: 'var(--accent-500)' }, pa({ p: 2, f: 4, r: (r + c) * 80 })));
    }
    A.txt(635, 210, 'GPU', 't-b'); A.txt(635, 230, 'il modello', 't-s');
    A.via('cq', 'M150 150 L584 150'); A.via('cr', 'M584 150 L150 150');
    // 1 · la domanda parte cifrata
    mobile(A, 'cq', { p: 1, f: 1, d: 2600, resta: true }, function (g) { S(g, 'rect', { x: -34, y: -12, width: 68, height: 24, rx: 3, 'class': 'pkt' }); S(g, 'text', { y: 4, 'text-anchor': 'middle', 'class': 't-mono-on' }, 'domanda'); });
    A.icona('lock', 360, 120, { s: 22, p: 1, f: 1, tono: 'accent' }); A.txt(360, 104, 'cifrata (HTTPS)', 't-a', { p: 1, f: 1 });
    // 2 · le GPU si accendono
    A.txt(635, 250, 'calcolano insieme', 't-a', { p: 2, f: 2 });
    // 3 · una parola alla volta
    ['Un', 'router', 'collega'].forEach(function (w, k) { A.pk('cr', { p: 3, f: 3, d: 1800, r: k * 600 }, w); });
    A.txt(635, 250, 'una parola alla volta', 't-a', { p: 3, f: 4 });
    // 4 · la risposta compare a pezzi
    ['Un router', 'collega reti', 'diverse e…'].forEach(function (w, k) { A.txt(85, 128 + k * 18, w, 't-s', { p: 4, r: k * 600 }); });
    ['diverse', 'e', 'sceglie'].forEach(function (w, k) { A.pk('cr', { p: 4, f: 4, d: 1800, r: k * 600 }, w); });
    // 5 · modalità aereo
    A.icona('plane', 85, 230, { s: 22, p: 5, tono: 'errore' });
    cartello(A, 34, 186, 96, 24, 'E un modem?', 'nodo', { p: 5 }, 't-s');
    A.icona('circle-alert', 132, 198, { s: 20, p: 5, r: 300, tono: 'errore' });
    croce(A, 175, 150, { p: 5, r: 300 }); A.txt(250, 110, 'senza rete il chatbot non risponde', 't-e', { p: 5, r: 300 }, 'start');
  });

  /* ===================== 7.4 · il collasso del modello ===================== */
  costruisci('f-collasso', function (svg, A) {
    A.txt(140, 24, 'IL WEB', 't-eti');
    var COL = ['#2e86c1', '#e67e22', '#27ae60', '#8e44ad', '#c0392b', '#16a085'];
    var celle = []; for (var r = 0; r < 5; r++) for (var c = 0; c < 5; c++) celle.push([30 + c * 44, 40 + r * 50]);
    celle.forEach(function (p, k) { S(svg, 'rect', { x: p[0], y: p[1], width: 38, height: 44, rx: 3, fill: COL[k % 6], 'fill-opacity': .8 }); A.icona('user', p[0] + 19, p[1] + 20, { s: 16 }); });
    function grigie(idx, o) { idx.forEach(function (k, i) { var p = celle[k]; S(svg, 'rect', Object.assign({ x: p[0], y: p[1], width: 38, height: 44, rx: 3, fill: 'var(--surface-200)', stroke: 'var(--border-strong)' }, pa(Object.assign({}, o, { r: (o.r || 0) + i * 60 })))); A.icona('bot', p[0] + 19, p[1] + 20, Object.assign({ s: 16 }, o, { r: (o.r || 0) + i * 60 })); }); }
    // modello
    S(svg, 'circle', { cx: 380, cy: 150, r: 46, 'class': 'nodo evid' }); A.icona('brain', 380, 142, { s: 40, tono: 'brand' }); A.txt(380, 216, 'modello di IA', 't-b');
    A.txt(380, 236, '', 't'); A.txt(380, 236, 'generazione 1', 't-s', { f: 2 }); A.txt(380, 236, 'generazione 2', 't-s', { p: 3, f: 3 }); A.txt(380, 236, 'generazione 3', 't-s', { p: 4 });
    // contatore qualità
    A.txt(640, 24, 'QUALITÀ', 't-eti'); A.box(615, 40, 50, 220, 'fondo');
    function livello(h, col, o) { S(svg, 'rect', Object.assign({ x: 615, y: 260 - h, width: 50, height: h, rx: 2, fill: col }, pa(o))); }
    livello(200, 'var(--brand-500)', { f: 2 }); livello(130, 'var(--accent-500)', { p: 3, f: 3, r: 1200 }); livello(70, 'var(--errore-ink)', { p: 4, r: 1200 });
    A.via('cl1', 'M250 150 L334 150'); A.via('cl2', 'M426 150 L560 150'); A.via('cl3', 'M426 170 Q330 300 200 270');
    // 1 · impara dal Web umano e scrive testi buoni
    A.pk('cl1', { p: 1, f: 1, d: 900 }, null, 'goccia'); A.pk('cl2', { p: 1, f: 1, d: 900, r: 1000 }, 'testi buoni', 'pkt-ok');
    // 2 · i testi generati finiscono online
    A.pk('cl3', { p: 2, f: 2, d: 1400 }, 'pubblicati');
    grigie([3, 9, 12, 17, 21], { p: 2, r: 1300 });
    // 3 · un nuovo modello impara dal Web misto
    A.pk('cl1', { p: 3, f: 3, d: 900 }, null, 'goccia'); A.pk('cl2', { p: 3, f: 3, d: 900, r: 1000 }, 'più uniformi, più errori', 'pkt-err');
    // 4 · il ciclo si ripete
    grigie([0, 5, 7, 11, 14, 16, 19, 23, 24, 2], { p: 4 });
    cartello(A, 440, 276, 270, 28, 'i testi umani diventano preziosi', 'nodo evid', { p: 4, r: 1500 }, 't-b');
  });
})();
