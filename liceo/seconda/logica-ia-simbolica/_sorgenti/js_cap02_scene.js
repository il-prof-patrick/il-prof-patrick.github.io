/* Capitolo 2 · La logica proposizionale — schemi, animazioni a passi e widget */

  /* ===================== 2.1 · è una proposizione? ===================== */
  widgetCarte('proposizione', 'Prova tu · è una proposizione?', [['si', 'Sì, è una proposizione'], ['no', 'No']], [
    { testo: '«Roma è la capitale d’Italia»', giusta: 'si', spiega: 'sì, ed è vera.' },
    { testo: '«7 è un numero pari»', giusta: 'si', spiega: 'sì, ed è falsa: anche le frasi false sono proposizioni.' },
    { testo: '«Che ore sono?»', giusta: 'no', spiega: 'no: è una domanda, non afferma niente.' },
    { testo: '«Chiudi la porta!»', giusta: 'no', spiega: 'no: è un ordine.' },
    { testo: '«La pizza è il cibo più buono»', giusta: 'no', spiega: 'no: è un giudizio personale, il valore cambia da persona a persona.' },
    { testo: '«Questa frase è falsa»', giusta: 'no', spiega: 'no: se fosse vera sarebbe falsa e viceversa, quindi non può avere un valore di verità.' }
  ], 'Una proposizione afferma qualcosa e ha un solo valore di verità, uguale per tutti: vero o falso.');

  /* ===================== 2.2 · smontare una frase ===================== */
  costruisci('s-smonta', function (svg, A) {
    frecce(svg, 'sm');
    var F = frase(svg, 360, 52, [['Se ', 'a'], ['piove', 'b'], [' ', ''], ['e', 'a'], [' ', ''], ['non', 'a'], [' ', ''], ['ho l’ombrello', 'b'], [', ', ''], ['mi bagno', 'b']], {}, 24);
    var P = F.pezzi, atom = [[1, 'p'], [7, 'q'], [9, 'r']];
    atom.forEach(function (a) {
      var z = P[a[0]];
      S(svg, 'path', { d: 'M' + z.x0 + ' 62 H' + z.x1, stroke: 'var(--brand-600)', 'stroke-width': 3 });
      var f = A.path('M' + z.c + ' 70 V122', 'lin ok'); f.setAttribute('marker-end', 'url(#sm-ok)');
      S(svg, 'circle', { cx: z.c, cy: 146, r: 20, fill: 'var(--brand-100)', stroke: 'var(--brand-600)', 'stroke-width': 2 });
      var t = A.txt(z.c, 154, a[1], 't-b'); t.style.fontSize = '22px'; t.style.fontFamily = 'var(--font-mono)';
    });
    frase(svg, 360, 205, [['se ', 'a'], ['p', 'b'], [' e ', 'a'], ['non ', 'a'], ['q', 'b'], [', allora ', 'a'], ['r', 'b']], {}, 24);
    A.txt(350, 240, 'connettivi', 't-a', {}, 'end'); A.txt(370, 240, 'proposizioni atomiche', 't-b', {}, 'start');
  });

  /* ===================== 2.3 · interruttori e lampadina ===================== */
  var CONN = {
    not: { nome: 'NOT', simb: '¬p', f: function (p) { return !p; }, uno: true },
    and: { nome: 'AND', simb: 'p ∧ q', f: function (p, q) { return p && q; } },
    or: { nome: 'OR', simb: 'p ∨ q', f: function (p, q) { return p || q; } },
    xor: { nome: 'XOR', simb: 'p ⊕ q', f: function (p, q) { return p !== q; } },
    imp: { nome: 'se… allora', simb: 'p → q', f: function (p, q) { return !p || q; } },
    iff: { nome: 'se e solo se', simb: 'p ↔ q', f: function (p, q) { return p === q; } }
  };
  function V(b) { return b ? 'V' : 'F'; }
  W.registra('interruttori', function (el) {
    var b = W.base(el, 'Prova tu · interruttori e lampadina');
    var p = false, q = false, c = 'and';
    b.ctrl.className = 'wid-int';
    var menu = W.scelta(Object.keys(CONN).map(function (k) { return [k, CONN[k].nome]; }), c, function (k) { c = k; disegna(); });
    var sx = W.h('div', { 'class': 'int-sx' });
    var bp = W.h('button', { 'class': 'int-tasto', type: 'button' }), bq = W.h('button', { 'class': 'int-tasto', type: 'button' });
    bp.onclick = function () { p = !p; disegna(); }; bq.onclick = function () { q = !q; disegna(); };
    var lamp = W.s('svg', { viewBox: '-10 -14 100 124', 'class': 'int-lamp', role: 'img' });
    lamp.innerHTML = '<circle cx="40" cy="40" r="28" class="bulbo"/><path d="M28 66 h24 v10 h-24z M30 80 h20 v8 h-20z" fill="var(--ink-muted)"/><path d="M32 52 L36 34 L40 46 L44 34 L48 52" fill="none" stroke="var(--ink-muted)" stroke-width="2"/>' +
      '<g class="raggi"><path d="M40 -2 V-10 M6 40 H-4 M74 40 H84 M14 14 L7 7 M66 14 L73 7" stroke="var(--accent-500)" stroke-width="4" stroke-linecap="round"/></g>';
    var formula = W.h('p', { 'class': 'int-formula' });
    sx.appendChild(W.h('div', { 'class': 'int-righe' }, [bp, bq]));
    sx.appendChild(W.h('div', { 'class': 'int-luce' }, [lamp, formula]));
    var tab = W.h('table', { 'class': 'int-tab' });
    var corpo = W.h('div', { 'class': 'int-corpo' }, [sx, W.h('div', { 'class': 'tab' }, [tab])]);
    b.ctrl.appendChild(menu); b.ctrl.appendChild(corpo);
    b.chiudi();
    function disegna() {
      var C = CONN[c], val = C.f(p, q);
      bp.innerHTML = '<span class="int-nome">p</span><span class="int-lev' + (p ? ' on' : '') + '"></span><span>' + (p ? 'acceso · V' : 'spento · F') + '</span>';
      bq.innerHTML = '<span class="int-nome">q</span><span class="int-lev' + (q ? ' on' : '') + '"></span><span>' + (q ? 'acceso · V' : 'spento · F') + '</span>';
      bp.setAttribute('aria-pressed', String(p)); bq.setAttribute('aria-pressed', String(q));
      bq.hidden = !!C.uno;
      lamp.classList.toggle('accesa', val);
      lamp.setAttribute('aria-label', 'Lampadina ' + (val ? 'accesa' : 'spenta'));
      formula.innerHTML = '<code>' + C.simb + '</code> = <b class="' + (val ? 'vv' : 'ff') + '">' + V(val) + '</b>';
      var casi = C.uno ? [[false], [true]] : [[false, false], [false, true], [true, false], [true, true]];
      var h = '<thead><tr><th>p</th>' + (C.uno ? '' : '<th>q</th>') + '<th>' + C.simb + '</th></tr></thead><tbody>';
      casi.forEach(function (k) {
        var r = C.f(k[0], k[1]), qui = k[0] === p && (C.uno || k[1] === q);
        h += '<tr' + (qui ? ' class="qui"' : '') + '>' + k.map(function (x) { return '<td><span class="' + (x ? 'vv' : 'ff') + '">' + V(x) + '</span></td>'; }).join('') +
          '<td><span class="' + (r ? 'vv' : 'ff') + '">' + V(r) + '</span></td></tr>';
      });
      tab.innerHTML = h + '</tbody>';
      b.dica(C.uno ? 'p è ' + (p ? 'vera' : 'falsa') + ', quindi ¬p è ' + (val ? 'vera' : 'falsa') + '.'
        : 'p è ' + (p ? 'vera' : 'falsa') + ' e q è ' + (q ? 'vera' : 'falsa') + ': ' + C.simb + ' è ' + (val ? 'vera, la lampadina si accende.' : 'falsa, la lampadina resta spenta.'), val ? 'ok' : '');
    }
    disegna();
  });

  /* ===================== 2.4 · la promessa ===================== */
  // biglietto del cinema e casa «niente cinema»
  function biglietto(svg, A, x, y, o) {
    var g = A.g(o);
    S(g, 'path', { d: 'M' + x + ' ' + y + ' h120 v18 a8 8 0 0 0 0 16 v18 h-120 v-18 a8 8 0 0 0 0 -16 z', fill: 'var(--accent-100)', stroke: 'var(--accent-500)', 'stroke-width': 2 });
    S(g, 'path', { d: 'M' + (x + 88) + ' ' + (y + 4) + ' V' + (y + 48), stroke: 'var(--accent-500)', 'stroke-width': 1.5, 'stroke-dasharray': '3 3' });
    var t = A.txt(x + 46, y + 32, 'CINEMA', 't-a', {}, 'middle', g); t.style.letterSpacing = '.12em';
    A.icona('film', x + 104, y + 26, Object.assign({ s: 20, tono: 'accent' }, o));
    return g;
  }
  function voto(svg, A, x, y, n, o) {
    var t = A.txt(x, y, String(n), n >= 6 ? 't-b' : 't-e', o); t.style.fontSize = '44px'; t.style.fontWeight = '800';
    return t;
  }
  function foglio(svg, A, x, y) {
    var r = A.box(x, y, 130, 170, 'nodo'); r.style.fill = 'var(--surface-000)'; r.setAttribute('rx', 4);
    A.txt(x + 14, y + 26, 'VERIFICA', 't-eti', {}, 'start');
    [48, 64, 80, 96, 112].forEach(function (d, i) { S(svg, 'path', { d: 'M' + (x + 14) + ' ' + (y + d) + ' h' + (i % 2 ? 70 : 100), stroke: 'var(--border)', 'stroke-width': 4, 'stroke-linecap': 'round' }); });
    S(svg, 'circle', { cx: x + 96, cy: y + 140, r: 24, fill: 'none', stroke: 'var(--border-strong)', 'stroke-width': 2 });
  }
  costruisci('f-promessa', function (svg, A) {
    // fumetto della promessa
    var fb = A.box(150, 10, 420, 44, 'nodo'); fb.setAttribute('rx', 22); fb.style.fill = 'var(--surface-000)';
    S(svg, 'path', { d: 'M250 54 l-10 16 l26 -16', fill: 'var(--surface-000)', stroke: 'var(--border-strong)', 'stroke-width': 2 });
    S(svg, 'path', { d: 'M251 53 h14', stroke: 'var(--surface-000)', 'stroke-width': 3 });
    riga(svg, 360, 38, [['Se ', 'a'], ['prendi 8', 'b'], [', ', ''], ['ti porto al cinema', 'b']], {}, 'middle').style.fontSize = '17px';
    foglio(svg, A, 30, 84);
    var voti = [0, 8, 8, 5, 5];
    for (var s = 1; s <= 4; s++) {
      voto(svg, A, 126, 240, voti[s], { p: s, f: s });
      if (s % 2) biglietto(svg, A, 186, 140, { p: s, f: s });
      else { A.disp('casa', 246, 162, { s: 1.2, p: s, f: s }); A.txt(246, 214, 'niente cinema', 't-m', { p: s, f: s }); }
    }
    // la fascia sotto
    [[1, 'ok', 'promessa non tradita'], [2, 'no', 'promessa tradita'], [3, 'ok', 'promessa non tradita'], [4, 'ok', 'promessa non tradita']].forEach(function (f) {
      var b = A.box(30, 272, 300, 40, f[1] === 'ok' ? 'nodo evid' : 'nodo guasto', { p: f[0], f: f[0] });
      A.txt(180, 297, f[2], f[1] === 'ok' ? 't-b' : 't-e', { p: f[0], f: f[0] });
    });
    // la tavola: ogni caso va nella sua riga
    A.txt(540, 96, 'p = prendi 8 · q = vai al cinema', 't-m');
    var R = [['F', 'F', 'V'], ['F', 'V', 'V'], ['V', 'F', 'F'], ['V', 'V', 'V']], ordine = { 3: 1, 2: 2, 1: 3, 0: 4 };
    var T = tavola(svg, A, 400, 110, [60, 60, 160], ['p', 'q', 'se p allora q'], R, { cella: function () { return null; } });
    evidRiga(A, T, 3, 'evid', { p: 1, f: 1 }); evidRiga(A, T, 2, 'guasto', { p: 2, f: 4 });
    evidRiga(A, T, 1, 'evid', { p: 3, f: 3 }); evidRiga(A, T, 0, 'evid', { p: 4, f: 4 });
    // riporta i valori sopra le evidenze
    R.forEach(function (riga_, r) { riga_.forEach(function (v, c) { vf(A, T.X[c] + [60, 60, 160][c] / 2, T.riga(r) + T.h / 2 + 5, v, { p: ordine[r] }); }); });
  });

  /* ===================== 2.4 · una regola sui numeri ===================== */
  costruisci('f-numeri', function (svg, A) {
    var r1 = riga(svg, 360, 34, [['Se ', 'a'], ['un numero è divisibile per 4', 'b'], [', allora ', 'a'], ['è pari', 'b']], { f: 4 }, 'middle'); r1.style.fontSize = '17px';
    var r2 = riga(svg, 360, 34, [['Se ', 'a'], ['un numero è pari', 'b'], [', allora ', 'a'], ['è divisibile per 4', 'b']], { p: 5 }, 'middle'); r2.style.fontSize = '17px';
    // la carta con il numero
    var c = A.box(70, 60, 120, 150, 'nodo'); c.setAttribute('rx', 10); c.style.fill = 'var(--surface-000)';
    var num = ['', '8', '6', '7', '?', '6'];
    for (var s = 1; s <= 5; s++) { var t = A.txt(130, 160, num[s], s === 4 ? 't-a' : 't', { p: s, f: s }); t.style.fontSize = '64px'; t.style.fontWeight = '800'; }
    // le due domande
    function caselle(d1, d2, o) {
      A.txt(36, 248, d1, 't-m', o, 'start'); A.txt(36, 298, d2, 't-m', o, 'start');
    }
    caselle('divisibile per 4?', 'pari?', { f: 4 }); caselle('pari?', 'divisibile per 4?', { p: 5 });
    [256, 306].forEach(function (y) { A.box(196, y - 26, 64, 34, 'nodo'); });
    var ris = [null, ['sì', 'sì'], ['no', 'sì'], ['no', 'no'], null, ['sì', 'no']];
    ris.forEach(function (r, s) {
      if (!r) return;
      A.txt(228, 252, r[0], r[0] === 'sì' ? 't-b' : 't-e', { p: s, f: s });
      A.txt(228, 302, r[1], r[1] === 'sì' ? 't-b' : 't-e', { p: s, f: s });
    });
    // la tavola
    A.txt(540, 72, 'p = divisibile per 4 · q = pari', 't-m', { f: 4 });
    A.txt(540, 72, 'p = pari · q = divisibile per 4', 't-m', { p: 5 });
    var R = [['F', 'F', 'V'], ['F', 'V', 'V'], ['V', 'F', ''], ['V', 'V', 'V']], quando = { 3: 1, 1: 2, 0: 3 };
    var T = tavola(svg, A, 400, 86, [60, 60, 160], ['p', 'q', 'se p allora q'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']]);
    [[3, 1], [1, 2], [0, 3]].forEach(function (k) {
      evidRiga(A, T, k[0], 'evid', { p: k[1], f: k[1] });
      R[k[0]].forEach(function (v, cc) { vf(A, T.X[cc] + [60, 60, 160][cc] / 2, T.riga(k[0]) + 22, v, { p: k[1], f: 4 }); });
    });
    evidRiga(A, T, 2, 'tratt', { p: 4, f: 4 });
    A.txt(T.X[0] + T.tot / 2, T.riga(2) + 22, 'V F → nessun numero', 't-a', { p: 4, f: 4 });
    evidRiga(A, T, 2, 'guasto', { p: 5 });
    ['V', 'F', 'F'].forEach(function (v, cc) { vf(A, T.X[cc] + [60, 60, 160][cc] / 2, T.riga(2) + 22, v, { p: 5 }); });
    A.txt(540, 270, 'un solo controesempio: la regola è falsa', 't-e', { p: 5 });
    A.txt(540, 270, 'la riga «vero, falso» non capita mai', 't-b', { p: 4, f: 4 });
  });

  /* ===================== 2.5 · traduci la frase ===================== */
  costruisci('f-traduci', function (svg, A) {
    // passo 0–1: la frase normale; dal passo 2 i connettivi diventano ambra
    var pezzi = [['Se ', ''], ['è sera', ''], [' ', ''], ['e', ''], [' ', ''], ['non c’è nessuno in casa', ''], [', ', ''], ['la luce resta spenta', '']];
    var F = frase(svg, 360, 44, pezzi, {}, 20);
    var P = F.pezzi;
    // dal passo 2 i connettivi hanno lo sfondo ambra
    [0, 3, 5, 7].forEach(function (i) { var b = A.box(P[i].x0 - 3, 22, P[i].x1 - P[i].x0 + 6, 30, 'nodo', { p: 2 }); b.setAttribute('style', 'fill:var(--accent-100);stroke:var(--accent-500)'); svg.insertBefore(b, F.g); });
    // passo 1: le atomiche, in forma affermativa, con la loro lettera
    var at = [[1, 's', 'è sera'], [5, 'm', 'c’è qualcuno in casa'], [7, 'a', 'la luce è accesa']];
    var xs = [150, 360, 570];
    at.forEach(function (a, i) {
      var z = P[a[0]];
      S(svg, 'path', Object.assign({ d: 'M' + z.x0 + ' 52 H' + z.x1, stroke: 'var(--brand-600)', 'stroke-width': 3 }, K.pa({ p: 1 })));
      A.path('M' + z.c + ' 58 L' + xs[i] + ' 112', 'lin', { p: 1 }).style.strokeDasharray = '3 4';
      var b = A.box(xs[i] - 92, 112, 184, 34, 'nodo evid', { p: 1 }); b.setAttribute('rx', 17);
      riga(svg, xs[i], 134, [[a[1], 'b'], [' = ' + a[2], '']], { p: 1 }, 'middle');
    });
    // passo 2: i connettivi con il loro simbolo, sotto la frase
    [[0, '→'], [3, '∧'], [5, '¬m'], [7, '¬a']].forEach(function (k) {
      var z = P[k[0]];
      var t = A.txt(z.c, 82, k[1], 't-a', { p: 2 }); t.style.fontSize = '20px'; t.style.fontFamily = 'var(--font-mono)';
    });
    // passo 3: solo lettere e connettivi
    frase(svg, 360, 204, [['se ', 'a'], ['s', 'b'], [' e ', 'a'], ['non ', 'a'], ['m', 'b'], [', allora ', 'a'], ['non ', 'a'], ['a', 'b']], { p: 3 }, 22);
    // passo 4: la formula con le parentesi in evidenza
    var fo = frase(svg, 360, 266, [['(', 'a'], ['s ∧ ¬m', 'm'], [')', 'a'], [' → ¬a', 'm']], { p: 4 }, 30);
    var par = fo.pezzi;
    [0, 2].forEach(function (i) { var b = A.box(par[i].x0 - 4, 234, par[i].x1 - par[i].x0 + 8, 44, 'nodo', { p: 4 }); b.setAttribute('style', 'fill:var(--accent-100);stroke:none'); svg.insertBefore(b, fo.g); });
  });
