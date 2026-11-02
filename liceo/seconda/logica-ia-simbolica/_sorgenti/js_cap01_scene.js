/* Capitolo 1 · Macchine che ragionano — animazioni a passi e schemi disegnati */

  /* ===================== 1.1 · la casa che ragiona ===================== */
  costruisci('f-casa', function (svg, A) {
    frecce(svg, 'cs');
    // --- i fatti
    A.box(14, 20, 196, 324, 'fondo');
    A.txt(112, 44, 'FATTI', 't-eti');
    function fatto(y, testo, passo) {
      if (passo) {
        A.box(28, y, 168, 30, 'nodo', { p: passo + 1 });
        A.box(28, y, 168, 30, 'nodo evid', { p: passo, f: passo });
        A.txt(112, y + 20, testo, 't', { p: passo });
      } else {
        A.box(28, y, 168, 30, 'nodo'); A.txt(112, y + 20, testo, 't');
      }
    }
    fatto(60, 'è sera (19:00)'); fatto(100, 'fuori è buio');
    fatto(140, 'serve la luce', 1); fatto(180, 'Marco è in casa', 3); fatto(220, 'luci accese', 4);

    // --- le regole; stati: verde = scatta, ambra = controlla ma non scatta
    function luce(y, h, o, stile) { var r = A.box(236, y, 230, h, 'nodo', o); if (stile) r.setAttribute('style', stile); return r; }
    luce(40, 112); luce(190, 136);
    luce(40, 112, { p: 1, f: 1 }, 'fill:var(--brand-100);stroke:var(--brand-600);stroke-width:3');
    luce(190, 136, { p: 2, f: 2 }, 'fill:var(--accent-100);stroke:var(--accent-500);stroke-width:3');
    luce(190, 136, { p: 4 }, 'fill:var(--brand-100);stroke:var(--brand-600);stroke-width:3');
    A.txt(252, 64, 'REGOLA 1', 't-eti', {}, 'start');
    riga(svg, 252, 92, [['SE ', 'k'], ['è sera', '']]);
    riga(svg, 252, 114, [['E ', 'k'], ['fuori è buio', '']]);
    riga(svg, 252, 138, [['ALLORA ', 'k'], ['serve la luce', 'b']]);
    A.txt(252, 214, 'REGOLA 2', 't-eti', {}, 'start');
    riga(svg, 252, 242, [['SE ', 'k'], ['serve la luce', '']]);
    riga(svg, 252, 264, [['E ', 'k'], ['c’è qualcuno in casa', '']]);
    riga(svg, 252, 288, [['ALLORA ', 'k'], ['accendi le luci', 'b']]);
    A.txt(351, 346, 'manca: c’è qualcuno in casa', 't-a', { p: 2, f: 2 });
    A.txt(351, 346, 'tutti i fatti ci sono', 't-b', { p: 4 });

    // --- frecce: i fatti entrano nella regola, la conclusione torna tra i fatti
    function fr(d, cls, o) { var p = A.path(d, 'lin ' + cls, o); p.setAttribute('marker-end', 'url(#cs-' + (cls || 'n') + ')'); return p; }
    fr('M198 75 C218 75 216 90 234 90', 'ok', { p: 1, f: 1 });
    fr('M198 115 C218 115 216 104 234 104', 'ok', { p: 1, f: 1 });
    fr('M236 146 C222 152 214 155 200 155', 'ok', { p: 1, f: 1, r: 500 });
    fr('M198 155 C220 155 214 236 234 236', 'att', { p: 2, f: 2 });
    fr('M198 155 C220 155 214 236 234 236', 'ok', { p: 4 });
    fr('M198 195 C220 195 214 258 234 258', 'ok', { p: 4 });

    // --- la casa (in sezione): tetto, pareti, finestra con la luna, lampada, sensore
    A.path('M484 96 L596 34 L708 96 Z', 'nodo');
    A.box(494, 96, 204, 248, 'nodo');
    var stanza = A.box(502, 104, 188, 232, 'fondo'); stanza.style.fill = 'var(--surface-300)';
    var calda = A.box(502, 104, 188, 232, 'fondo', { p: 4 }); calda.style.fill = 'var(--accent-100)';
    S(svg, 'path', { d: 'M502 336 H690', stroke: 'var(--border-strong)', 'stroke-width': 3 });
    // finestra con la notte e la luna
    S(svg, 'rect', { x: 516, y: 128, width: 58, height: 66, rx: 3, fill: '#1f2b45', stroke: 'var(--border-strong)', 'stroke-width': 3 });
    S(svg, 'circle', { cx: 536, cy: 150, r: 10, fill: '#f3e3a6' });
    S(svg, 'circle', { cx: 541, cy: 146, r: 9, fill: '#1f2b45' });
    [[556, 140], [562, 172], [528, 178]].forEach(function (s) { S(svg, 'circle', { cx: s[0], cy: s[1], r: 1.3, fill: '#f3e3a6' }); });
    S(svg, 'path', { d: 'M545 128 V194 M516 161 H574', stroke: 'var(--border-strong)', 'stroke-width': 2 });
    // lampada: cono di luce e raggi solo quando si accende
    var cono = S(svg, 'path', Object.assign({ d: 'M590 166 L540 336 H664 L610 166 Z', fill: AMBRA, 'fill-opacity': .22 }, K.pa({ p: 4 })));
    S(svg, 'path', { d: 'M600 104 V142', stroke: 'var(--ink-muted)', 'stroke-width': 2 });
    S(svg, 'path', { d: 'M580 162 L591 142 H609 L620 162 Z', fill: 'var(--ink-muted)' });
    S(svg, 'circle', { cx: 600, cy: 166, r: 7, fill: 'var(--surface-000)', stroke: 'var(--border-strong)', 'stroke-width': 1.5 });
    S(svg, 'circle', Object.assign({ cx: 600, cy: 166, r: 7, fill: AMBRA }, K.pa({ p: 4 })));
    var raggi = S(svg, 'g', K.pa({ p: 4 }));
    [[-30, 172, -40, 178], [30, 172, 40, 178], [-22, 186, -30, 196], [22, 186, 30, 196]].forEach(function (r) {
      S(raggi, 'path', { d: 'M' + (600 + r[0]) + ' ' + r[1] + ' L' + (600 + r[2]) + ' ' + r[3], stroke: AMBRA, 'stroke-width': 3, 'stroke-linecap': 'round' });
    });
    // sensore di presenza sulla parete: spento, poi verde quando vede Marco
    S(svg, 'rect', { x: 674, y: 120, width: 12, height: 20, rx: 4, 'class': 'nodo' });
    S(svg, 'circle', { cx: 680, cy: 130, r: 3.2, fill: 'var(--border-strong)' });
    S(svg, 'circle', Object.assign({ cx: 680, cy: 130, r: 3.2, fill: 'var(--brand-500)' }, K.pa({ p: 3 })));
    var onde = S(svg, 'g', K.pa({ p: 3, f: 3 }));
    [10, 18].forEach(function (r) { S(onde, 'path', { d: 'M' + (672 - r * .3) + ' ' + (130 - r) + ' A' + r + ' ' + r + ' 0 0 0 ' + (672 - r * .3) + ' ' + (130 + r), stroke: VERDE, 'stroke-width': 2, fill: 'none' }); });
    A.txt(668, 133, 'sensore', 't-s', { f: 2 }, 'end');
    // Marco entra
    persona(svg, 618, 334, { p: 3, maglia: 'var(--brand-500)' });
    A.txt(618, 206, 'Marco', 't-b', { p: 3 });
    // la regola 2 accende la lampada
    fr('M466 252 C520 252 530 170 588 168', 'ok', { p: 4, r: 300 });
  });

  /* ===================== 1.3 · lo stampo del ragionamento ===================== */
  costruisci('f-stampo', function (svg, A) {
    frecce(svg, 'st');
    // stampo a sinistra (tratteggiato)
    var st = A.box(20, 24, 260, 190, 'nodo'); st.style.strokeDasharray = '7 5'; st.style.fill = 'var(--surface-100)';
    A.txt(36, 48, 'STAMPO', 't-eti', {}, 'start');
    function stampo(r2, r3, o, cambia) {
      riga(svg, 40, 92, [['Tutti gli ', ''], ['A', 'b'], [' sono ', ''], ['B', 'b']], o);
      if (cambia) { A.box(34, 108, 120, 28, 'nodo', o).setAttribute('style', 'fill:var(--accent-100);stroke:none'); A.box(34, 156, 120, 28, 'nodo', o).setAttribute('style', 'fill:var(--accent-100);stroke:none'); }
      riga(svg, 40, 128, [['x', 'b'], [' è un ', ''], [r2, cambia ? 'a' : 'b']], o);
      riga(svg, 40, 176, [['x', 'b'], [' è un ', ''], [r3, cambia ? 'a' : 'b']], o);
    }
    stampo('A', 'B', { f: 2 }); stampo('B', 'A', { p: 3 }, true);
    S(svg, 'path', { d: 'M40 146 H260', stroke: 'var(--ink)', 'stroke-width': 2 });
    // freccia «riempiamo»
    var f = A.path('M288 120 H330', 'lin'); f.setAttribute('marker-end', 'url(#st-n)');
    // le frasi a destra
    A.box(340, 24, 360, 190, 'nodo');
    A.txt(356, 48, 'LE PAROLE', 't-eti', {}, 'start');
    S(svg, 'path', { d: 'M356 146 H684', stroke: 'var(--ink)', 'stroke-width': 2 });
    function vuoto(o) { [86, 122, 170].forEach(function (y) { A.box(356, y - 12, [190, 120, 150][[86, 122, 170].indexOf(y)], 14, 'fondo', o).setAttribute('rx', 7); }); }
    vuoto({ f: 0 }); vuoto({ p: 3, f: 3 });
    function frasi(righe, o) {
      righe.forEach(function (r, i) {
        var y = [92, 128, 176][i];
        A.txt(356, y, r[0], 't-n', o, 'start');
        var vera = r[1];
        A.box(626, y - 17, 62, 24, vera ? 'nodo evid' : 'nodo guasto', o).setAttribute('rx', 12);
        A.txt(657, y, vera ? 'vera' : 'falsa', vera ? 't-b' : 't-e', o);
      });
    }
    frasi([['Tutti gli uomini sono mortali', 1], ['Socrate è un uomo', 1], ['Socrate è mortale', 1]], { p: 1, f: 1 });
    frasi([['Tutti i pesci sanno volare', 0], ['Bolla è un pesce', 1], ['Bolla sa volare', 0]], { p: 2, f: 2 });
    frasi([['Tutti i gatti hanno quattro zampe', 1], ['Fido ha quattro zampe', 1], ['Fido è un gatto', 0]], { p: 4 });
    // il verdetto in basso
    A.box(20, 232, 680, 46, 'nodo evid', { p: 1, f: 2 });
    A.txt(360, 261, 'valido', 't-b', { p: 1, f: 1 });
    A.txt(360, 261, 'valido (ma una premessa è falsa)', 't-b', { p: 2, f: 2 });
    A.box(20, 232, 680, 46, 'nodo guasto', { p: 4 });
    A.txt(360, 261, 'non valido', 't-e', { p: 4 });
  });

  /* ===================== 1.4 · una frase, due significati ===================== */
  costruisci('s-binocolo', function (svg, A) {
    var t = A.txt(360, 30, '«Ho visto un uomo col binocolo»', 't-b'); t.style.fontSize = '18px';
    // vignetta di sinistra: il binocolo ce l’ha lei, l’uomo è lontano oltre il fiume
    A.box(16, 50, 336, 230, 'nodo'); A.box(368, 50, 336, 230, 'nodo');
    S(svg, 'rect', { x: 140, y: 52, width: 70, height: 226, fill: 'var(--brand-100)' });
    S(svg, 'path', { d: 'M150 90 q8 -4 16 0 t16 0 M156 170 q8 -4 16 0 t16 0 M146 240 q8 -4 16 0 t16 0', stroke: 'var(--brand-500)', 'stroke-width': 2, fill: 'none' });
    persona(svg, 80, 262, { capelli: 'coda', binocolo: 'occhi', maglia: 'var(--accent-500)' });
    S(svg, 'path', { d: 'M104 157 L268 200', stroke: 'var(--ink-soft)', 'stroke-width': 2, 'stroke-dasharray': '3 6', fill: 'none' });
    var g = S(svg, 'g', { transform: 'translate(282 262) scale(.62) translate(-282 -262)' });
    persona(g, 282, 262, { maglia: 'var(--brand-600)' });
    // vignetta di destra: lei a occhio nudo, l’uomo vicino con il binocolo in mano
    persona(svg, 470, 262, { capelli: 'coda', maglia: 'var(--accent-500)' });
    persona(svg, 600, 262, { binocolo: 'mano', maglia: 'var(--brand-600)' });
    A.txt(184, 308, '«Con il binocolo, ho visto un uomo»', 't');
    A.txt(536, 308, '«Ho visto un uomo che aveva un binocolo»', 't');
    A.txt(184, 330, 'il binocolo ce l’ha chi guarda', 't-m');
    A.txt(536, 330, 'il binocolo ce l’ha l’uomo', 't-m');
  });
