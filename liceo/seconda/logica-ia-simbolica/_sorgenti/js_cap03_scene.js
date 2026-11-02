/* Capitolo 3 · Tavole di verità — animazione dell’enigma, schemi e widget delle leggi */

  /* ===================== 3.1 · la tavola risolve l’enigma ===================== */
  costruisci('f-enigma', function (svg, A) {
    riga(svg, 360, 26, [['a', 'b'], [' = «A è un cavaliere» · ', ''], ['b', 'b'], [' = «B è un cavaliere»', '']], {}, 'middle');
    riga(svg, 360, 50, [['A dice: ', 'k'], ['«Siamo entrambi furfanti»', '']], {}, 'middle');
    var L = [60, 60, 76, 76, 130, 190];
    var R = [
      ['F', 'F', 'V', 'V', 'V', 'F'],
      ['F', 'V', 'V', 'F', 'F', 'V'],
      ['V', 'F', 'F', 'V', 'F', 'F'],
      ['V', 'V', 'F', 'F', 'F', 'F']
    ];
    var passoCol = [1, 1, 2, 2, 3, 4];
    var T = tavola(svg, A, 64, 70, L, ['a', 'b', '¬a', '¬b', '¬a ∧ ¬b', 'a ↔ (¬a ∧ ¬b)'], R, { cella: function () { return null; }, finale: 5, finaleP: { p: 4 } });
    evidRiga(A, T, 1, 'evid', { p: 5 });
    R.forEach(function (r, i) { r.forEach(function (v, c) { vf(A, T.X[c] + L[c] / 2, T.riga(i) + 22, v, { p: passoCol[c] }); }); });
    // la colonna appena riempita ha una cornice ambra
    [[0, 2, 1], [2, 4, 2], [4, 5, 3], [5, 6, 4]].forEach(function (k) {
      var b = A.box(T.X[k[0]] + 1, T.y + 1, T.X[k[1]] - T.X[k[0]] - 2, T.h * 5 - 2, 'nodo', { p: k[2], f: k[2] });
      b.setAttribute('style', 'fill:none;stroke:var(--accent-500);stroke-width:3');
    });
    A.box(64, 262, 592, 48, 'nodo evid', { p: 5 });
    riga(svg, 360, 292, [['Unica riga vera: a falso, b vero → ', ''], ['A è un furfante, B è un cavaliere', 'b']], { p: 5 }, 'middle');
  });

  /* ===================== 3.2 · tre formule, tre colonne finali ===================== */
  costruisci('s-tre-formule', function (svg, A) {
    tavola(svg, A, 20, 20, [50, 50, 100], ['p', '¬p', 'p ∨ ¬p'], [['F', 'V', 'V'], ['V', 'F', 'V']], { finale: 2 });
    tavola(svg, A, 250, 20, [50, 50, 100], ['p', '¬p', 'p ∧ ¬p'], [['F', 'V', 'F'], ['V', 'F', 'F']], { finale: 2, finaleTono: 'no' });
    tavola(svg, A, 480, 20, [50, 50, 100], ['p', 'q', 'p ∧ q'], [['F', 'F', 'F'], ['F', 'V', 'F'], ['V', 'F', 'F'], ['V', 'V', 'V']], { finale: 2, finaleTono: 'att' });
    pillola(A, 120, 112 + 30, 'tautologia', 'ok', {}, 120);
    pillola(A, 350, 112 + 30, 'contraddizione', 'no', {}, 140);
    pillola(A, 580, 188 + 30, 'soddisfacibile', 'att', {}, 140);
    A.txt(120, 172, 'vera in ogni riga', 't-m'); A.txt(350, 172, 'falsa in ogni riga', 't-m'); A.txt(580, 248, 'vera in almeno una riga', 't-m');
  });

  /* ===================== 3.3 · stessa colonna, stessa formula ===================== */
  costruisci('s-stessa-colonna', function (svg, A) {
    var RR = [['F', 'F', 'V'], ['F', 'V', 'V'], ['V', 'F', 'F'], ['V', 'V', 'V']];
    tavola(svg, A, 30, 30, [56, 56, 110], ['p', 'q', 'p → q'], RR, { finale: 2 });
    tavola(svg, A, 400, 30, [56, 56, 70, 110], ['p', 'q', '¬p', '¬p ∨ q'], [['F', 'F', 'V', 'V'], ['F', 'V', 'V', 'V'], ['V', 'F', 'F', 'F'], ['V', 'V', 'F', 'V']], { finale: 3 });
    var e = A.txt(326, 120, '≡', 't-b'); e.style.fontSize = '44px';
    A.path('M256 116 H296', 'lin ok'); A.path('M356 116 H396', 'lin ok');
    A.txt(326, 214, 'stessa colonna finale', 't-b');
  });

  /* ===================== 3.4 · verifica la legge ===================== */
  function n(x) { return !x; }
  var LEGGI = {
    doppia: { nome: 'doppia negazione', v: 'p', sx: [['¬p', function (o) { return n(o.p); }], ['¬¬p', function (o) { return o.p; }]], dx: [['p', function (o) { return o.p; }]] },
    comm: { nome: 'commutativa', v: 'pq', sx: [['p ∧ q', function (o) { return o.p && o.q; }]], dx: [['q ∧ p', function (o) { return o.q && o.p; }]] },
    assoc: { nome: 'associativa', v: 'pqr', sx: [['p ∧ q', function (o) { return o.p && o.q; }], ['(p ∧ q) ∧ r', function (o) { return o.p && o.q && o.r; }]], dx: [['q ∧ r', function (o) { return o.q && o.r; }], ['p ∧ (q ∧ r)', function (o) { return o.p && o.q && o.r; }]] },
    distr: { nome: 'distributiva', v: 'pqr', sx: [['q ∨ r', function (o) { return o.q || o.r; }], ['p ∧ (q ∨ r)', function (o) { return o.p && (o.q || o.r); }]], dx: [['p ∧ q', function (o) { return o.p && o.q; }], ['p ∧ r', function (o) { return o.p && o.r; }], ['(p ∧ q) ∨ (p ∧ r)', function (o) { return (o.p && o.q) || (o.p && o.r); }]] },
    idemp: { nome: 'idempotenza', v: 'p', sx: [['p ∧ p', function (o) { return o.p; }]], dx: [['p', function (o) { return o.p; }]] },
    assorb: { nome: 'assorbimento', v: 'pq', sx: [['p ∨ q', function (o) { return o.p || o.q; }], ['p ∧ (p ∨ q)', function (o) { return o.p && (o.p || o.q); }]], dx: [['p', function (o) { return o.p; }]] },
    dm1: { nome: 'De Morgan (AND)', v: 'pq', sx: [['p ∧ q', function (o) { return o.p && o.q; }], ['¬(p ∧ q)', function (o) { return n(o.p && o.q); }]], dx: [['¬p', function (o) { return n(o.p); }], ['¬q', function (o) { return n(o.q); }], ['¬p ∨ ¬q', function (o) { return n(o.p) || n(o.q); }]] },
    dm2: { nome: 'De Morgan (OR)', v: 'pq', sx: [['p ∨ q', function (o) { return o.p || o.q; }], ['¬(p ∨ q)', function (o) { return n(o.p || o.q); }]], dx: [['¬p', function (o) { return n(o.p); }], ['¬q', function (o) { return n(o.q); }], ['¬p ∧ ¬q', function (o) { return n(o.p) && n(o.q); }]] },
    imp: { nome: 'implicazione', v: 'pq', sx: [['p → q', function (o) { return n(o.p) || o.q; }]], dx: [['¬p', function (o) { return n(o.p); }], ['¬p ∨ q', function (o) { return n(o.p) || o.q; }]] },
    sbagliata: { nome: 'formula sbagliata', v: 'pq', sx: [['p ∨ q', function (o) { return o.p || o.q; }], ['¬(p ∨ q)', function (o) { return n(o.p || o.q); }]], dx: [['¬p', function (o) { return n(o.p); }], ['¬q', function (o) { return n(o.q); }], ['¬p ∨ ¬q', function (o) { return n(o.p) || n(o.q); }]] }
  };
  // righe ordinate partendo dal falso
  function casi(v) {
    var out = [], k = v.length;
    for (var i = 0; i < (1 << k); i++) { var o = {}; v.split('').forEach(function (x, j) { o[x] = !!(i & (1 << (k - 1 - j))); }); out.push(o); }
    return out;
  }
  W.registra('leggi', function (el) {
    var b = W.base(el, 'Prova tu · verifica la legge');
    var L = 'dm1', fatte = 0;
    var sel = W.h('select', { 'class': 'leggi-sel', 'aria-label': 'Legge da verificare' });
    Object.keys(LEGGI).forEach(function (k) { sel.appendChild(W.h('option', { value: k, testo: LEGGI[k].nome })); });
    sel.value = L;
    sel.onchange = function () { L = sel.value; fatte = 0; disegna(); };
    var bAv = W.bottone('Riempi la colonna successiva', function () { fatte++; disegna(); }, 'primario');
    var bTu = W.bottone('Tutto', function () { fatte = 99; disegna(); });
    var bDa = W.bottone('Da capo', function () { fatte = 0; disegna(); });
    var tit = W.h('p', { 'class': 'leggi-tit' });
    var tavole = W.h('div', { 'class': 'leggi-tavole' });
    b.ctrl.className = 'wid-leggi';
    b.ctrl.appendChild(W.h('div', { 'class': 'wid-gruppo' }, [sel, bAv, bTu, bDa]));
    b.ctrl.appendChild(tit); b.ctrl.appendChild(tavole);
    b.chiudi();
    function V(x) { return '<span class="' + (x ? 'vv' : 'ff') + '">' + (x ? 'V' : 'F') + '</span>'; }
    function disegna() {
      var G = LEGGI[L], C = casi(G.v), tot = G.sx.length + G.dx.length;
      var fin = Math.min(fatte, tot), fine = fin === tot;
      var sxF = G.sx[G.sx.length - 1], dxF = G.dx[G.dx.length - 1];
      tit.innerHTML = '<code>' + sxF[0] + '</code> ' + (L === 'sbagliata' ? '≟' : '≡') + ' <code>' + dxF[0] + '</code>';
      var diverse = C.map(function (o) { return sxF[1](o) !== dxF[1](o); });
      function tab(cols, da) {
        var h = '<table class="leggi-tab"><thead><tr>' + G.v.split('').map(function (x) { return '<th>' + x + '</th>'; }).join('') +
          cols.map(function (c, i) { return '<th' + (i === cols.length - 1 ? ' class="fin"' : '') + '>' + c[0] + '</th>'; }).join('') + '</tr></thead><tbody>';
        C.forEach(function (o, r) {
          var cl = fine ? (diverse[r] ? ' class="no"' : ' class="si"') : '';
          h += '<tr' + cl + '>' + G.v.split('').map(function (x) { return '<td>' + V(o[x]) + '</td>'; }).join('') +
            cols.map(function (c, i) { return '<td' + (i === cols.length - 1 ? ' class="fin"' : '') + '>' + (da + i < fin ? V(c[1](o)) : '') + '</td>'; }).join('') + '</tr>';
        });
        return h + '</tbody></table>';
      }
      tavole.innerHTML = '<div>' + tab(G.sx, 0) + '</div><div class="leggi-eq">' + (fine ? (diverse.some(Boolean) ? '≠' : '≡') : '?') + '</div><div>' + tab(G.dx, G.sx.length) + '</div>';
      bAv.disabled = fine; bTu.disabled = fine;
      if (!fine) b.dica(fin === 0 ? 'Le righe sono ordinate partendo dal falso. Premi «Riempi la colonna successiva».' : 'Colonna ' + fin + ' di ' + tot + ': continua fino alla colonna finale.');
      else if (diverse.some(Boolean)) b.dica('Le colonne finali sono diverse nelle righe in rosso: le due formule NON sono equivalenti. Negando un OR si ottiene un AND delle negazioni.', 'no');
      else b.dica('Le colonne finali sono uguali in ogni riga: le due formule sono equivalenti.', 'ok');
    }
    disegna();
  });
