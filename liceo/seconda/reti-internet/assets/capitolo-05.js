/* Capitolo 5 · Fare ricerche nel web — animazioni a passi */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var croce = K.croce, linea = K.linea, cartello = K.cartello, mobile = K.mobile;

  function pagina(A, x, y, n, o, cls) { var g = A.g(o); A.box(x - 22, y - 28, 44, 56, cls || 'nodo', {}, g); for (var k = 0; k < 3; k++) A.path('M' + (x - 13) + ' ' + (y - 12 + k * 9) + ' L' + (x + 13) + ' ' + (y - 12 + k * 9), 'lin', {}, null, g); if (n) A.txt(x, y + 22, n, 't-s', {}, 'middle', g); return g; }

  /* ===================== 5.1 · il motore di ricerca ===================== */
  costruisci('f-motore', function (svg, A) {
    var P = [[50, 80, '2'], [140, 60, '3'], [100, 160, '7'], [200, 140, '12']];
    [[0, 1], [0, 2], [1, 3], [2, 3], [1, 2]].forEach(function (l) { A.path('M' + P[l[0]][0] + ' ' + P[l[0]][1] + ' L' + P[l[1]][0] + ' ' + P[l[1]][1], 'lin att'); });
    P.forEach(function (p) { pagina(A, p[0], p[1], 'pag. ' + p[2]); });
    A.txt(125, 216, 'IL WEB', 't-eti');
    // schedario (indice)
    A.box(470, 30, 230, 150, 'fondo'); A.txt(585, 52, 'INDICE (lo schedario)', 't-eti');
    A.txt(585, 110, 'vuoto', 't-m', { f: 1 });
    // utente e barra di ricerca
    A.icona('user', 270, 268, { s: 32 }); A.box(300, 252, 260, 32, 'nodo'); A.icona('search', 540, 268, { s: 18 });
    // 1 · il crawler segue i link
    A.via('cr', 'M50 80 L140 60 L200 140 L100 160');
    mobile(A, 'cr', { p: 1, f: 1, d: 3000, resta: true }, function (g) { var ic = window.ICONE && window.ICONE['bug']; var gg = S(g, 'g', { transform: 'translate(-14,-14) scale(1.15)', 'class': 'ic-scena errore' }); if (ic) gg.innerHTML = ic; });
    A.icona('bug', 330, 80, { s: 32, tono: 'errore', f: 0 }); A.txt(330, 116, 'crawler (il «ragno»)', 't-s');
    P.forEach(function (p, k) { A.txt(p[0], p[1] - 34, 'copiata', 't-a', { p: 1, f: 1, r: k * 750 + 200 }); });
    // 2 · le parole nello schedario
    cartello(A, 482, 66, 206, 28, 'router → pagine 3, 7, 12', 'nodo', { p: 2, r: 300 }, 't-mono');
    cartello(A, 482, 100, 206, 28, 'fibra → pagine 2, 7', 'nodo', { p: 2, r: 800 }, 't-mono');
    A.via('pi', 'M220 130 L470 90'); A.pk('pi', { p: 2, f: 2, d: 1000 }, 'parole');
    // 3 · la ricerca usa solo l'indice
    A.txt(310, 273, 'router fibra', 't-mono', { p: 3 }, 'start');
    S(svg, 'rect', Object.assign({ x: 478, y: 62, width: 214, height: 70, rx: 3, 'class': 'anello' }, pa({ p: 3, r: 400 })));
    cartello(A, 520, 140, 130, 28, 'in comune: pag. 7', 'nodo evid', { p: 3, r: 900 }, 't-b');
    A.via('pr', 'M585 170 L560 260'); A.pk('pr', { p: 3, f: 3, d: 800, r: 1200 });
    // 4 · la SERP
    A.box(600, 200, 110, 110, 'nodo', { p: 4 }); A.txt(655, 218, 'SERP', 't-eti', { p: 4 });
    ['pag. 7', 'pag. 12', 'pag. 2'].forEach(function (t, k) { A.txt(612, 242 + k * 22, (k + 1) + '. ' + t, 't-s', { p: 4, r: 300 + k * 300 }, 'start'); });
    A.icona('timer', 400, 222, { s: 22, p: 4, r: 900 }); A.txt(420, 228, '0,3 secondi', 't-b', { p: 4, r: 900 }, 'start');
  });

  /* ===================== 5.4 · il feed impara ===================== */
  var TEMI = [['sport', '#2e86c1'], ['musica', '#8e44ad'], ['cucina', '#e67e22'], ['animali', '#27ae60'], ['videogiochi', '#c0392b'], ['liti', '#555']];
  costruisci('f-feed', function (svg, A) {
    S(svg, 'rect', { x: 120, y: 10, width: 170, height: 300, rx: 22, 'class': 'nodo' });
    S(svg, 'rect', { x: 132, y: 34, width: 146, height: 252, rx: 4, fill: 'var(--surface-100)' });
    function feed(temi, o) {
      temi.forEach(function (t, k) { var c = TEMI[t]; var g = A.g(Object.assign({}, o, { r: (o.r || 0) + k * 120 })); S(g, 'rect', { x: 138, y: 40 + k * 49, width: 134, height: 44, rx: 3, fill: c[1], 'fill-opacity': .85 }); S(g, 'text', { x: 205, y: 67 + k * 49, 'text-anchor': 'middle', 'class': 't-on' }, c[0]); });
    }
    feed([0, 1, 2, 3, 4], { f: 1 });
    feed([2, 0, 2, 3, 2], { p: 2, f: 2 });
    feed([2, 2, 2, 1, 2], { p: 3, f: 3 });
    feed([5, 2, 5, 5, 2], { p: 4 });
    // profilo
    A.box(380, 20, 320, 280, 'fondo'); A.txt(540, 44, 'PROFILO DELL’UTENTE', 't-eti');
    var Y0 = 64;
    TEMI.forEach(function (t, k) { A.txt(470, Y0 + 20 + k * 36, t[0], 't', k === 5 ? { p: 4 } : {}, 'end'); A.box(480, Y0 + 6 + k * 36, 200, 20, 'nodo', k === 5 ? { p: 4 } : {}); });
    function barra(k, w, o) { S(svg, 'rect', Object.assign({ x: 480, y: Y0 + 6 + k * 36, width: w, height: 20, rx: 2, fill: TEMI[k][1] }, pa(o))); }
    [0, 1, 3, 4].forEach(function (k) { barra(k, 30, {}); });
    barra(2, 30, { f: 0 }); barra(2, 90, { p: 1, f: 1, r: 900 }); barra(2, 140, { p: 2, f: 2, r: 900 }); barra(2, 190, { p: 3, r: 600 });
    barra(5, 120, { p: 4, r: 1000 });
    // 1 · si ferma 20 secondi
    S(svg, 'rect', Object.assign({ x: 135, y: 135, width: 140, height: 50, rx: 4, 'class': 'anello' }, pa({ p: 1, f: 1 })));
    A.icona('timer', 316, 160, { s: 22, p: 1, f: 1 }); A.txt(316, 190, '20 s', 't-a', { p: 1, f: 1 });
    // 2 · guarda fino alla fine
    A.txt(316, 120, 'fino alla', 't-a', { p: 2, f: 2 }); A.txt(316, 138, 'fine', 't-a', { p: 2, f: 2 });
    // 3 · la varietà sparisce
    A.txt(205, 304, 'la varietà è sparita', 't-e', { p: 3, f: 3, r: 700 });
    // 4 · le liti trattengono
    A.txt(205, 304, 'le liti «trattengono»', 't-e', { p: 4, r: 700 });
  });

  /* ===================== 5.5 · RAG ===================== */
  costruisci('f-rag', function (svg, A) {
    A.icona('user', 40, 50, { s: 30 }); cartello(A, 64, 30, 300, 40, '«Quando è stata posata la prima fibra…?»', 'nodo', {}, 't-s');
    S(svg, 'circle', { cx: 200, cy: 170, r: 40, 'class': 'nodo evid' }); A.icona('bot', 200, 162, { s: 36, tono: 'brand' }); A.txt(200, 228, 'chatbot', 't-b');
    var PG = [[620, 70], [620, 160], [620, 250]];
    PG.forEach(function (p, k) { pagina(A, p[0], p[1], 'pagina ' + (k + 1)); });
    A.icona('search', 420, 160, { s: 30 }); A.txt(420, 196, 'motore di ricerca', 't-s');
    // 1 · senza ricerca
    cartello(A, 20, 250, 330, 44, '«Nel 1976, da Mario Rossi»', 'nodo', { p: 1, f: 1 }, 't');
    var tb = A.g({ p: 1, f: 1, r: 800 }); S(tb, 'rect', { x: 230, y: 236, width: 120, height: 28, rx: 3, fill: 'none', stroke: 'var(--errore-ink)', 'stroke-width': 3, transform: 'rotate(-8 290 250)' }); S(tb, 'text', { x: 290, y: 255, 'text-anchor': 'middle', 'class': 't-e', transform: 'rotate(-8 290 250)' }, 'DA VERIFICARE');
    A.txt(185, 310, 'risposta «a memoria», scritta con sicurezza', 't-m', { p: 1, f: 1 });
    // 2 · cerca prima
    A.via('rq', 'M240 170 L400 160'); A.pk('rq', { p: 2, f: 2, d: 900 }, 'domanda');
    PG.forEach(function (p, k) { A.via('rp' + k, 'M440 160 L' + (p[0] - 24) + ' ' + p[1]); A.via('rb' + k, 'M' + (p[0] - 24) + ' ' + p[1] + ' L240 170'); A.path('M440 160 L' + (p[0] - 24) + ' ' + p[1], 'lin', { p: 2 }); A.pk('rp' + k, { p: 2, f: 2, d: 900, r: 1000 + k * 150 }); });
    // 3 · legge ed estrae le frasi utili
    PG.forEach(function (p, k) { S(svg, 'rect', Object.assign({ x: p[0] - 16, y: p[1] - 8 + (k % 2) * 9, width: 32, height: 6, fill: 'var(--brand-500)' }, pa({ p: 3, r: k * 300 }))); A.pk('rb' + k, { p: 3, f: 3, d: 1100, r: 600 + k * 250 }, null, 'goccia'); });
    A.txt(470, 300, 'estrae le frasi utili', 't-b', { p: 3, f: 3, r: 300 });
    // 4 · risposta con le fonti
    cartello(A, 20, 250, 330, 44, '', 'nodo evid', { p: 4 });
    A.txt(185, 270, 'risposta scritta dalle pagine trovate', 't-b', { p: 4 }); A.txt(185, 288, 'con le fonti [1] [2] [3]', 't-mono', { p: 4 });
    A.path('M300 288 Q470 300 596 250', 'lin ok', { p: 4, r: 800 });
    S(svg, 'rect', Object.assign({ x: 592, y: 216, width: 56, height: 66, rx: 4, 'class': 'anello' }, pa({ p: 4, r: 1300 })));
    A.icona('mouse-pointer-click', 670, 270, { s: 24, p: 4, r: 1300 }); A.txt(470, 314, 'lo studente apre la fonte e controlla', 't-b', { p: 4, r: 1300 });
  });
})();
