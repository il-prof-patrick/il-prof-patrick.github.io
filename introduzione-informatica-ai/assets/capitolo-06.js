/* Capitolo 6 · Un po’ di storia — ELIZA e la curva dell’entusiasmo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, costruisci = K.costruisci;

  /* ===================== 6.2 · ELIZA: regole, non comprensione ===================== */
  var FRASI = [
    ['Mi sento triste.', 'Perché ti senti triste?', 'Regola: «Mi sento X» diventa «Perché ti senti X?»'],
    ['Mia madre non mi capisce.', 'Parlami di più della tua famiglia.', 'Regola: la parola «madre» fa scattare quella risposta.'],
    ['Ho litigato con il mio amico.', 'Continua, ti ascolto.', 'Nessuna regola adatta: risposta generica.'],
    ['Domani c’è il compito di matematica.', 'Continua, ti ascolto.', 'Nessuna regola adatta: risposta generica.']
  ];
  W.registra('eliza', function (el) {
    var b = W.base(el, 'Prova tu · parla con ELIZA', '1966');
    b.ctrl.className = 'wid-eliza';
    var chat = W.h('div', { 'class': 'el-chat', 'aria-live': 'polite' });
    var frasi = W.h('div', { 'class': 'el-frasi', role: 'group', 'aria-label': 'Frasi da dire' });
    var fine = W.h('p', { 'class': 'el-fine' });
    b.ctrl.appendChild(chat); b.ctrl.appendChild(frasi); b.ctrl.appendChild(fine);
    b.chiudi();
    var usate = 0, tasti = [];

    function vuota() { chat.innerHTML = ''; chat.appendChild(W.h('p', { 'class': 'el-vuota', testo: 'Scegli una frase da dire. Il programma ha poche regole scritte da una persona.' })); }
    function reset() {
      usate = 0; fine.textContent = ''; frasi.innerHTML = ''; tasti = [];
      vuota();
      FRASI.forEach(function (f, i) {
        var t = W.bottone(f[0], function () { di(i, t); });
        tasti.push(t); frasi.appendChild(t);
      });
      b.dica('Scegli una delle quattro frasi.');
    }
    function di(i, t) {
      if (!usate) chat.innerHTML = '';
      var f = FRASI[i];
      chat.appendChild(W.h('p', { 'class': 'el-tu', testo: f[0] }));
      chat.appendChild(W.h('p', { 'class': 'el-eliza' }, [W.h('span', { 'class': 'el-nome', testo: 'ELIZA' }), f[1]]));
      chat.appendChild(W.h('p', { 'class': 'el-regola', testo: f[2] }));
      t.disabled = true; usate++;
      if (usate === FRASI.length) {
        fine.textContent = 'ELIZA non capisce nulla: sostituisce parole con regole. Eppure nel 1966 molti pensavano il contrario.';
        frasi.appendChild(W.bottone('Ricomincia', reset, 'primario'));
        b.dica('Anche qui: sembrare intelligente non è esserlo.', 'ok');
      } else b.dica('Ancora ' + (FRASI.length - usate) + ' frasi da provare.');
    }
    reset();
  });

  /* ===================== 6.3 · alti e bassi ===================== */
  costruisci('f-ondate', function (svg, A) {
    var X0 = 70, X1 = 690, YB = 296, YT = 44;
    function px(a) { return Math.round(X0 + (a - 1950) / 76 * (X1 - X0)); }
    function py(l) { return Math.round(YB - l * (YB - YT)); }
    // assi
    A.path('M' + X0 + ' ' + YB + ' H' + X1, 'lin');
    A.path('M' + X0 + ' ' + YB + ' V28', 'lin');
    for (var a = 1950; a <= 2020; a += 10) { A.txt(px(a), YB + 20, String(a), 't-m'); A.path('M' + px(a) + ' ' + YB + ' v5', 'lin'); }
    A.txt(X0 - 8, py(1) + 4, 'alto', 't-m', {}, 'end'); A.txt(X0 - 8, YB, 'basso', 't-m', {}, 'end');
    A.txt(X0 + 8, 22, 'entusiasmo', 't-eti', {}, 'start');
    // tratti: [anni e nome, inverno?, punti (anno, livello), etichetta (x, y)]
    var T = [
      ['1956–1973 · Entusiasmo', false, [[1950, .08], [1956, .22], [1965, .5], [1973, .78]], [px(1958), py(.1)], 'start'],
      ['1974–1980 · Primo inverno', true, [[1973, .78], [1976, .5], [1980, .3]], [px(1978), py(.6) - 10], 'start'],
      ['1980–1987 · Sistemi esperti', false, [[1980, .3], [1984, .5], [1987, .66]], [px(1984), py(.78)], 'middle'],
      ['1987–1993 · Secondo inverno', true, [[1987, .66], [1990, .42], [1993, .26]], [px(1994) + 4, py(.6)], 'start'],
      ['1993–2011 · Ripresa lenta', false, [[1993, .26], [2002, .33], [2011, .4]], [px(2002), py(.2) + 36], 'middle'],
      ['2012–2021 · Crescita', false, [[2011, .4], [2016, .52], [2021, .66]], [px(2013) - 20, py(.9)], 'middle'],
      ['Dal 2022 · Impennata', false, [[2021, .66], [2023, .88], [2025, 1.2], [2026, 1.4]], [px(2019), py(.9)], 'end']
    ];
    T.forEach(function (t, i) {
      var d = t[2].map(function (p, k) { return (k ? 'L' : 'M') + px(p[0]) + ' ' + py(p[1]); }).join(' ');
      var l = A.path(d, t[1] ? 'lin att' : 'lin ok', { p: i + 1 });
      l.style.strokeWidth = '4'; l.style.strokeDasharray = 'none'; l.style.strokeLinecap = 'round'; l.style.strokeLinejoin = 'round';
      var fine = t[2][t[2].length - 1];
      if (i < 6) S(svg, 'circle', { cx: px(fine[0]), cy: py(fine[1]), r: 5, 'class': t[1] ? 'nodo guasto' : 'nodo attivo', 'data-passo': i + 1 });
      var e = A.txt(t[3][0], t[3][1], t[0], t[1] ? 't-a' : 't-b', { p: i + 1, f: i + 1 }, t[4]);
      e.style.fontSize = '14px';
    });
    // fuori scala
    A.path('M' + px(2026) + ' 16 l-6 10 m6 -10 l6 10', 'lin ok', { p: 7 }).style.strokeWidth = '3';
    A.txt(px(2026) - 20, 22, 'fuori scala', 't-b', { p: 7 }, 'end');
  });

})();
