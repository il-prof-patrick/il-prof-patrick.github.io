/* Capitolo 2 · Che cos’è l’intelligenza — animazione sulle intelligenze multiple */
(function () {
  'use strict';
  var K = window.SCENA, S = K.S, costruisci = K.costruisci;

  /* ===================== 2.2 · chi è più intelligente? ===================== */
  var FORME = ['Linguistica', 'Logico-matematica', 'Spaziale', 'Musicale', 'Corporeo-cinestetica', 'Interpersonale', 'Intrapersonale', 'Naturalistica'];
  // punteggi di fantasia, da 0 a 10: servono solo a far vedere che i profili sono diversi
  var RAGAZZI = [
    ['Marta', 'prende dieci in matematica', 'calculator', [5, 10, 6, 3, 4, 5, 5, 4]],
    ['Luca', 'va male in matematica ma suona tre strumenti', 'music', [5, 2, 4, 10, 5, 6, 6, 3]],
    ['Sara', 'gioca a calcio: capisce lo spazio e la squadra', 'trophy', [4, 5, 9, 4, 10, 6, 5, 3]],
    ['Omar', 'conosce ogni pianta e ogni animale del parco', 'leaf', [5, 5, 5, 3, 4, 5, 6, 10]]
  ];
  costruisci('f-gardner', function (svg, A) {
    var X0 = 410, LARG = 290, Y0 = 18, PASSO = 36;
    // scheda a sinistra
    A.box(10, 14, 240, 292, 'fondo', { f: 4 });
    A.icona('users', 130, 100, { s: 70, f: 0 });
    A.txt(130, 170, 'Chi è più intelligente?', 't-b', { f: 0 });
    A.txt(130, 200, 'Quattro ragazzi.', 't', { f: 0 });
    A.txt(130, 220, 'Premi Avanti e guarda', 't-m', { f: 0 });
    A.txt(130, 238, 'in che cosa sono forti.', 't-m', { f: 0 });
    RAGAZZI.forEach(function (r, i) {
      var P = { p: i + 1, f: i + 1 };
      A.icona(r[2], 130, 90, { s: 64, tono: 'accent', p: i + 1, f: i + 1 });
      A.txt(130, 160, r[0], 't-b', P);
      var parole = r[1].split(' '), riga = '', righe = [];
      parole.forEach(function (w) { if ((riga + ' ' + w).length > 28) { righe.push(riga); riga = w; } else riga = riga ? riga + ' ' + w : w; });
      righe.push(riga);
      righe.forEach(function (t, k) { A.txt(130, 190 + k * 20, t, 't', P); });
    });
    // le otto barre
    FORME.forEach(function (nome, k) {
      var y = Y0 + k * PASSO;
      A.txt(X0 - 10, y + 17, nome, 't-m', { f: 4 }, 'end');
      A.box(X0, y, LARG, 22, 'fondo', { f: 4 });
      RAGAZZI.forEach(function (r, i) {
        var v = r[3][k];
        A.box(X0, y, LARG * v / 10, 22, v >= 8 ? 'nodo attivo' : 'nodo', { p: i + 1, f: i + 1 });
      });
    });
    // schermata finale: la forza di ciascuno
    var FORTE = ['logico-matematica', 'musicale', 'corporeo-cinestetica', 'naturalistica'];
    RAGAZZI.forEach(function (r, i) {
      var y = 22 + i * 58;
      A.box(140, y, 440, 46, 'fondo', { p: 5 });
      A.icona(r[2], 172, y + 23, { s: 30, tono: 'accent', p: 5 });
      A.txt(204, y + 29, r[0], 't-b', { p: 5 }, 'start');
      A.txt(560, y + 29, 'più forte: ' + FORTE[i], 't', { p: 5 }, 'end');
    });
    A.txt(360, 280, 'Nessuno è forte in tutto, e andare male', 't-b', { p: 5 });
    A.txt(360, 302, 'in matematica non vuol dire essere stupidi', 't-b', { p: 5 });
  });

})();
