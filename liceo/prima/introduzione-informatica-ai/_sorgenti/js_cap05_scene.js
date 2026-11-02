/* Capitolo 5 · Come ragiona un computer — le quattro forme dello stesso algoritmo */
(function () {
  'use strict';
  var K = window.SCENA, S = K.S, costruisci = K.costruisci;
  var NB = '    ';

  /* ===================== 4.4 · lo stesso algoritmo in quattro forme ===================== */
  costruisci('f-quattro', function (svg, A) {
    var LW = 350, LH = 256;
    var CELLE = [[6, 6], [364, 6], [6, 268], [364, 268]];
    var TIT = ['1 · Linguaggio naturale', '2 · Diagramma di flusso', '3 · Pseudocodice', '4 · Codice di programmazione'];
    CELLE.forEach(function (c, i) {
      A.box(c[0], c[1], LW, LH, 'nodo');
      A.txt(c[0] + 14, c[1] + 22, TIT[i], 't-eti', {}, 'start');
    });

    // elenchi di righe [testo, passo]: prima le strisce che si accendono, poi il testo
    function righe(cella, lista, passo, mono, fs) {
      var x = CELLE[cella][0] + 14, y0 = CELLE[cella][1] + 56;
      var y = y0, pos = [];
      lista.forEach(function (r, k) { if (k && r[1] !== lista[k - 1][1]) y += 8; pos.push(y); y += passo; });
      lista.forEach(function (r, k) { A.box(x - 6, pos[k] - 16, LW - 16, passo - 2, 'nodo evid', { p: r[1], f: r[1] }); });
      lista.forEach(function (r, k) { var t = A.txt(x, pos[k], r[0], mono ? 't-mono' : 't', {}, 'start'); if (fs) t.style.fontSize = fs + 'px'; });
    }
    righe(0, [
      ['1. Parti da un credito di zero.', 1],
      ['2. Finché il credito è minore del prezzo,', 2], [NB + 'chiedi una moneta e aggiungila.', 2],
      ['3. Quando il credito basta,', 3], [NB + 'prepara il caffè.', 3],
      ['4. Se il credito supera il prezzo,', 4], [NB + 'restituisci la differenza come resto.', 4]], 24, false, 14);
    righe(2, [
      ['credito ← 0', 1], ['leggi prezzo', 1],
      ['finché credito < prezzo', 2], [NB + 'leggi moneta', 2], [NB + 'credito ← credito + moneta', 2],
      ['scrivi «Caffè pronto»', 3],
      ['se credito > prezzo', 4], [NB + 'scrivi «Resto:», credito − prezzo', 4]], 23, true, 13);
    righe(3, [
      ['prezzo = 120  # in centesimi', 1], ['credito = 0', 1],
      ['while credito < prezzo:', 2], [NB + 'credito = credito + int(input("Moneta: "))', 2],
      ['print("Caffè pronto")', 3],
      ['if credito > prezzo:', 4], [NB + 'print("Resto:", credito - prezzo)', 4]], 28, true, 11);

    // diagramma di flusso
    var X0 = CELLE[1][0], Y0 = CELLE[1][1], cx = X0 + 112, rx = X0 + 284;
    function ovale(y, t) { S(svg, 'rect', { x: cx - 36, y: y - 10, width: 72, height: 20, rx: 10, 'class': 'nodo' }); A.txt(cx, y + 5, t, 't'); }
    function riq(x, y, w, t, passo) {
      A.box(x - w / 2, y - 11, w, 22, 'nodo');
      if (passo) A.box(x - w / 2, y - 11, w, 22, 'nodo evid', { p: passo, f: passo });
      A.txt(x, y + 5, t, 't');
    }
    function rombo(y, t, passo) {
      var d = 'M' + cx + ' ' + (y - 22) + ' L' + (cx + 82) + ' ' + y + ' L' + cx + ' ' + (y + 22) + ' L' + (cx - 82) + ' ' + y + ' Z';
      A.path(d, 'nodo');
      if (passo) A.path(d, 'nodo evid', { p: passo, f: passo });
      A.txt(cx, y + 4, t, 't').style.fontSize = '12px';
    }
    function freccia(d, ux, uy, dir) { // linea con punta (dir: 'g' giù, 'd' destra, 's' sinistra, 'u' su)
      A.path(d, 'lin');
      var h = dir === 'g' ? [-5, -6, 0, 0, 5, -6] : dir === 'd' ? [-6, -5, 0, 0, -6, 5] : dir === 's' ? [6, -5, 0, 0, 6, 5] : [-5, 6, 0, 0, 5, 6];
      A.path('M' + (ux + h[0]) + ' ' + (uy + h[1]) + ' L' + (ux + h[2]) + ' ' + (uy + h[3]) + ' L' + (ux + h[4]) + ' ' + (uy + h[5]), 'lin');
    }
    var yI = Y0 + 42, yC = Y0 + 72, yD1 = Y0 + 116, yP = Y0 + 158, yD2 = Y0 + 198, yF = Y0 + 240;
    ovale(yI, 'Inizio');
    riq(cx, yC, 130, 'credito = 0', 1);
    rombo(yD1, 'credito < prezzo?', 2);
    riq(rx, yD1, 116, 'aggiungi moneta', 2);
    riq(cx, yP, 130, 'prepara il caffè', 3);
    rombo(yD2, 'credito > prezzo?', 4);
    riq(rx, yD2, 116, 'dai il resto', 4);
    ovale(yF, 'Fine');
    freccia('M' + cx + ' ' + (yI + 10) + ' V' + (yC - 11), cx, yC - 11, 'g');
    freccia('M' + cx + ' ' + (yC + 11) + ' V' + (yD1 - 22), cx, yD1 - 22, 'g');
    freccia('M' + (cx + 82) + ' ' + yD1 + ' H' + (rx - 58), rx - 58, yD1, 'd');
    A.path('M' + rx + ' ' + (yD1 - 11) + ' V' + (yC + 22) + ' H' + cx, 'lin');   // la moneta aggiunta ricomincia il controllo
    freccia('M' + cx + ' ' + (yD1 + 22) + ' V' + (yP - 11), cx, yP - 11, 'g');
    freccia('M' + cx + ' ' + (yP + 11) + ' V' + (yD2 - 22), cx, yD2 - 22, 'g');
    freccia('M' + (cx + 82) + ' ' + yD2 + ' H' + (rx - 58), rx - 58, yD2, 'd');
    freccia('M' + rx + ' ' + (yD2 + 11) + ' V' + yF + ' H' + (cx + 36), cx + 36, yF, 's');
    freccia('M' + cx + ' ' + (yD2 + 22) + ' V' + (yF - 10), cx, yF - 10, 'g');
    A.txt(cx + 90, yD1 - 5, 'sì', 't-b', {}, 'start'); A.txt(cx + 6, yD1 + 34, 'no', 't-m', {}, 'start');
    A.txt(cx + 90, yD2 - 5, 'sì', 't-b', {}, 'start'); A.txt(cx + 6, yD2 + 34, 'no', 't-m', {}, 'start');

  });
