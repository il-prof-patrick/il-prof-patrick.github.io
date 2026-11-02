/* Modulo Logica e IA simbolica — aiuti comuni a tutte le scene e ai widget (montato in testa a ogni assets/capitolo-NN.js da monta_js.py) */
(function () {
  'use strict';
  var K = window.SCENA, S = K.S, costruisci = K.costruisci, W = window.WIDGET;
  var PELLE = '#e8b48c', CAPELLI = '#3a2b24', VERDE = 'var(--brand-600)', AMBRA = 'var(--accent-500)';

  /* Punta di freccia comune (una per scena, colore del tratto). */
  function frecce(svg, pre) {
    var d = S(svg, 'defs', {});
    [['ok', VERDE], ['att', AMBRA], ['n', 'var(--border-strong)']].forEach(function (c) {
      var m = S(d, 'marker', { id: pre + '-' + c[0], viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 11, markerHeight: 11, markerUnits: 'userSpaceOnUse', orient: 'auto' });
      S(m, 'path', { d: 'M0 0 L10 5 L0 10 z', fill: c[1] });
    });
  }

  /* Persona con volto minimo e braccia corte, in piedi con i piedi in (x, y).
     o: { maglia, capelli: 'corti'|'coda', binocolo: 'occhi'|'mano', p, f } */
  function persona(svg, x, y, o) {
    o = o || {};
    var g = S(svg, 'g', K.pa(o)), maglia = o.maglia || VERDE;
    function E(t, a) { return S(g, t, a); }
    // gambe e scarpe
    E('path', { d: 'M' + (x - 7) + ' ' + (y - 36) + ' V' + (y - 4) + ' M' + (x + 7) + ' ' + (y - 36) + ' V' + (y - 4), stroke: 'var(--ink-muted)', 'stroke-width': 9, 'stroke-linecap': 'round', fill: 'none' });
    E('path', { d: 'M' + (x - 13) + ' ' + y + ' h11 M' + (x + 2) + ' ' + y + ' h11', stroke: 'var(--ink)', 'stroke-width': 6, 'stroke-linecap': 'round' });
    // busto
    E('rect', { x: x - 16, y: y - 80, width: 32, height: 48, rx: 10, fill: maglia });
    // braccia (spalla → gomito in basso → mano); con il binocolo agli occhi le mani salgono al viso
    var mani;
    if (o.binocolo === 'occhi') {
      E('path', { d: 'M' + (x - 13) + ' ' + (y - 74) + ' L' + (x - 18) + ' ' + (y - 58) + ' L' + (x - 6) + ' ' + (y - 96), stroke: maglia, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' });
      E('path', { d: 'M' + (x + 13) + ' ' + (y - 74) + ' L' + (x + 18) + ' ' + (y - 58) + ' L' + (x + 6) + ' ' + (y - 96), stroke: maglia, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' });
      mani = [[x - 6, y - 96], [x + 6, y - 96]];
    } else {
      E('path', { d: 'M' + (x - 14) + ' ' + (y - 74) + ' L' + (x - 22) + ' ' + (y - 54) + ' L' + (x - 18) + ' ' + (y - 36), stroke: maglia, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' });
      E('path', { d: 'M' + (x + 14) + ' ' + (y - 74) + ' L' + (x + 22) + ' ' + (y - 54) + ' L' + (x + 18) + ' ' + (y - 36), stroke: maglia, 'stroke-width': 8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none' });
      mani = [[x - 18, y - 36], [x + 18, y - 36]];
    }
    // testa: collo, viso, capelli, occhi con pupille, sopracciglia, bocca
    E('rect', { x: x - 4, y: y - 88, width: 8, height: 8, fill: PELLE });
    var ty = y - 104;
    if (o.capelli === 'coda') E('path', { d: 'M' + (x + 12) + ' ' + (ty - 6) + ' q12 6 8 24', stroke: CAPELLI, 'stroke-width': 7, 'stroke-linecap': 'round', fill: 'none' });
    E('circle', { cx: x, cy: ty, r: 16, fill: PELLE });
    E('path', { d: 'M' + (x - 16) + ' ' + (ty - 1) + ' a16 16 0 0 1 32 0 q-8 -9 -16 -7 q-9 -2 -16 7 z', fill: CAPELLI });
    if (o.binocolo !== 'occhi') {
      [-6, 6].forEach(function (d) {
        E('circle', { cx: x + d, cy: ty + 2, r: 3.4, fill: '#fff' });
        E('circle', { cx: x + d, cy: ty + 2.4, r: 1.9, fill: 'var(--ink)' });
        E('path', { d: 'M' + (x + d - 4) + ' ' + (ty - 4) + ' h8', stroke: CAPELLI, 'stroke-width': 1.6, 'stroke-linecap': 'round' });
      });
    }
    E('path', { d: 'M' + (x - 5) + ' ' + (ty + 9) + ' q5 4 10 0', stroke: 'var(--ink)', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' });
    // binocolo
    if (o.binocolo === 'occhi') binocolo(g, x, ty + 1);
    else if (o.binocolo === 'mano') binocolo(g, mani[1][0] + 2, mani[1][1] - 6);
    // mani (sopra il binocolo)
    mani.forEach(function (m) { E('circle', { cx: m[0], cy: m[1], r: 4.2, fill: PELLE }); });
    return g;
  }
  function binocolo(g, x, y) {
    [-6, 6].forEach(function (d) { S(g, 'rect', { x: x + d - 5, y: y - 6, width: 10, height: 13, rx: 3, fill: 'var(--ink)' }); });
    S(g, 'rect', { x: x - 2, y: y - 3, width: 4, height: 6, fill: 'var(--ink-muted)' });
  }

  /* Riga di testo con alcune parole in evidenza: parti = [[testo, 'b'|'a'|''], …] */
  function riga(svg, x, y, parti, o, anchor) {
    var t = S(svg, 'text', Object.assign({ x: x, y: y, 'class': 't-n', 'text-anchor': anchor || 'start' }, K.pa(o)));
    parti.forEach(function (p) {
      var s = S(t, 'tspan', {}, p[0]);
      if (p[1] === 'b') { s.setAttribute('font-weight', 700); s.setAttribute('fill', 'var(--brand-ink)'); }
      if (p[1] === 'a') { s.setAttribute('font-weight', 700); s.setAttribute('fill', 'var(--accent-ink)'); }
      if (p[1] === 'k') { s.setAttribute('font-weight', 700); }
    });
    return t;
  }

  /* ---------- altri aiuti comuni: tavole di verità, frasi a pezzi, testo a capo, widget a carte ---------- */
  var ROSSO = 'var(--errore-ink)';

  /* In Presenta in aula un widget deve stare tutto nel palco: parte da uno zoom di 1,5 (si legge da lontano)
     e scende finché tutto sta nello spazio; si ricalcola quando il contenuto cambia (come nel modulo CSS). */
  var registraOrig = W.registra;
  W.registra = function (nome, fn) { registraOrig(nome, function (el) { fn(el); adattaAula(el); }); };
  function adattaAula(el) {
    var fig = el.closest && el.closest('.pl-figura'); if (!fig) return;
    var t = 0;
    function fit() {
      var z = 1.5;
      for (var k = 0; k < 8; k++) {
        el.style.zoom = z.toFixed(3);
        var sh = fig.scrollHeight, ch = fig.clientHeight;
        if (sh <= ch + 1 || ch < 100) break;
        z = Math.max(0.4, z * (ch / sh) * 0.99);
      }
    }
    requestAnimationFrame(fit);
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(fit, 30); }).observe(el, { childList: true, subtree: true, characterData: true });
  }


  /* Valore di verità scritto in una cella: V verde, F rosso. */
  function vf(A, x, y, v, o, g) {
    var t = A.txt(x, y, v, v === 'V' ? 't-b' : (v === 'F' ? 't-e' : 't'), o, 'middle', g);
    t.style.fontSize = '15px'; t.style.fontWeight = '700';
    return t;
  }

  /* Tavola di verità disegnata nello svg.
     x, y: angolo in alto a sinistra; larg: larghezze delle colonne; intest: intestazioni; righe: valori ('V'/'F'/'');
     o.alt: altezza riga (34); o.cella(r, c): opzioni di passo per la cella (null = non disegnarla); o.testa: opzioni per l'intestazione;
     o.finale: indice della colonna da evidenziare (sfondo verde chiaro). Restituisce le coordinate per aggiungere evidenze. */
  function tavola(svg, A, x, y, larg, intest, righe, o) {
    o = o || {};
    var h = o.alt || 34, X = [x], tot = 0;
    larg.forEach(function (w) { X.push(X[X.length - 1] + w); tot += w; });
    var g = A.g(o.testa || {});
    A.box(x, y, tot, h + righe.length * h, 'nodo', {}, g).style.fill = 'var(--surface-000)';
    [].concat(o.finale == null ? [] : o.finale).forEach(function (fc) { var f = A.box(X[fc], y + h, larg[fc], righe.length * h, 'fondo', o.finaleP || {}, g); f.style.fill = { no: 'var(--errore-bg)', att: 'var(--accent-100)' }[o.finaleTono] || 'var(--brand-100)'; });
    A.box(x, y, tot, h, 'fondo', {}, g);
    intest.forEach(function (t, c) { var tt = A.txt(X[c] + larg[c] / 2, y + h / 2 + 5, t, 't', {}, 'middle', g); tt.style.fontFamily = 'var(--font-mono)'; });
    for (var c = 1; c < larg.length; c++) A.path('M' + X[c] + ' ' + y + ' V' + (y + h + righe.length * h), 'lin', {}, null, g).style.strokeWidth = 1;
    for (var r = 0; r <= righe.length; r++) A.path('M' + x + ' ' + (y + h + r * h) + ' H' + (x + tot), 'lin', {}, null, g).style.strokeWidth = r === 0 ? 2 : 1;
    righe.forEach(function (riga_, r) {
      riga_.forEach(function (v, c) {
        var op = o.cella ? o.cella(r, c) : {};
        if (op === null || !v) return;
        vf(A, X[c] + larg[c] / 2, y + h + r * h + h / 2 + 5, v, op);
      });
    });
    return { X: X, y: y, h: h, tot: tot, riga: function (r) { return y + h + r * h; } };
  }

  /* Evidenzia una riga intera della tavola (rettangolo sotto i valori): cls 'evid' verde, 'guasto' rosso, 'att' ambra. */
  function evidRiga(A, T, r, cls, o) {
    var b = A.box(T.X[0] + 2, T.riga(r) + 2, T.tot - 4, T.h - 4, 'nodo', o);
    var st = { evid: 'fill:var(--brand-100);stroke:var(--brand-600)', guasto: 'fill:var(--errore-bg);stroke:var(--errore-ink)', att: 'fill:var(--accent-100);stroke:var(--accent-500)', tratt: 'fill:none;stroke:var(--accent-500);stroke-dasharray:6 4' }[cls];
    b.setAttribute('style', st + ';stroke-width:2');
    return b;
  }

  /* Frase scritta a pezzi, centrata in cx: pezzi = [[testo, tipo]], tipo '' normale, 'a' ambra (connettivo), 'b' verde (atomica), 'k' grassetto.
     Misura i pezzi dopo averli scritti e restituisce per ciascuno { x0, x1, centro }. */
  function frase(svg, cx, y, pezzi, o, dim) {
    var g = S(svg, 'g', K.pa(o)), xs = [], x = 0;
    pezzi.forEach(function (p) {
      var t = S(g, 'text', { x: x, y: y, 'class': 't-n', 'text-anchor': 'start' }, p[0]);
      t.style.fontSize = (dim || 20) + 'px';
      t.style.whiteSpace = 'pre';   // gli spazi in testa e in coda contano nella misura
      if (p[1] === 'a') { t.setAttribute('fill', 'var(--accent-ink)'); t.style.fontWeight = '700'; }
      if (p[1] === 'b') { t.setAttribute('fill', 'var(--brand-ink)'); t.style.fontWeight = '700'; }
      if (p[1] === 'k') { t.style.fontWeight = '700'; }
      if (p[1] === 'm') { t.style.fontFamily = 'var(--font-mono)'; }
      var w = t.getComputedTextLength ? t.getComputedTextLength() : p[0].length * (dim || 20) * 0.5;
      if (!w) w = p[0].length * (dim || 20) * 0.5;
      // la larghezza resta quella misurata anche quando arriva il carattere del sito: sottolineature e frecce restano allineate
      if (p[0].trim()) { t.setAttribute('textLength', w.toFixed(1)); t.setAttribute('lengthAdjust', 'spacingAndGlyphs'); }
      xs.push([x, x + w]); x += w;
    });
    var sp = cx - x / 2;
    [].forEach.call(g.children, function (t, i) { t.setAttribute('x', xs[i][0] + sp); });
    return { g: g, pezzi: xs.map(function (a) { return { x0: a[0] + sp, x1: a[1] + sp, c: (a[0] + a[1]) / 2 + sp }; }) };
  }

  /* Testo su più righe (a capo dopo circa n caratteri). */
  function acapo(testo, n) {
    var parole = testo.split(' '), righe = [''];
    parole.forEach(function (p) {
      var r = righe[righe.length - 1];
      if (r && (r + ' ' + p).length > n) righe.push(p); else righe[righe.length - 1] = r ? r + ' ' + p : p;
    });
    return righe;
  }
  function righe(A, x, y, testo, n, cls, o, anchor, passo) {
    return acapo(testo, n).map(function (r, i) { return A.txt(x, y + i * (passo || 18), r, cls || 't-n', o, anchor || 'start'); });
  }

  /* Pillola con una scritta (vera / falsa / certo / probabile). tono: 'ok' | 'no' | 'att' */
  function pillola(A, cx, cy, testo, tono, o, w) {
    w = w || Math.max(54, testo.length * 8 + 18);
    var g = A.g(o);
    var b = A.box(cx - w / 2, cy - 12, w, 24, tono === 'ok' ? 'nodo evid' : (tono === 'no' ? 'nodo guasto' : 'nodo'), {}, g); b.setAttribute('rx', 12);
    if (tono === 'att') b.setAttribute('style', 'fill:var(--accent-100);stroke:var(--accent-500)');
    A.txt(cx, cy + 5, testo, tono === 'ok' ? 't-b' : (tono === 'no' ? 't-e' : 't-a'), {}, 'middle', g);
    return g;
  }

  /* Widget a carte: una frase per volta, lo studente sceglie e al clic vede la spiegazione.
     carte: [{ testo, giusta: chiave, spiega, nome? }]; scelte: [[chiave, etichetta]] */
  function widgetCarte(nome, titolo, scelte, carte, fineTesto) {
    W.registra(nome, function (el) {
      var b = W.base(el, titolo, 'carta 1 di ' + carte.length);
      var badge = el.querySelector('.wid-badge');
      var n = 0, punti = 0, risposto = false;
      b.ctrl.className = 'wid-carte';
      var carta = W.h('blockquote', { 'class': 'carta-frase' });
      var tasti = W.h('div', { 'class': 'wid-gruppo', role: 'group', 'aria-label': 'Risposta' });
      var bott = scelte.map(function (s) { var t = W.bottone(s[1], function () { rispondi(s[0]); }); tasti.appendChild(t); return t; });
      var bAv = W.bottone('Avanti', function () { n++; mostra(); }, 'primario');
      var bDa = W.bottone('Ricomincia', function () { n = 0; punti = 0; mostra(); });
      b.ctrl.appendChild(carta); b.ctrl.appendChild(tasti); b.ctrl.appendChild(W.h('div', { 'class': 'wid-gruppo' }, [bAv, bDa]));
      b.chiudi();
      function mostra() {
        risposto = false;
        if (n >= carte.length) {
          carta.textContent = 'Hai risposto bene a ' + punti + ' carte su ' + carte.length + '.';
          tasti.hidden = true; bAv.hidden = true; bDa.hidden = false; badge.textContent = 'fine';
          b.dica(fineTesto || 'Premi «Ricomincia» per rifarlo.', 'ok'); return;
        }
        var c = carte[n];
        badge.textContent = 'carta ' + (n + 1) + ' di ' + carte.length;
        carta.textContent = c.testo; tasti.hidden = false; bAv.hidden = true; bDa.hidden = true;
        bott.forEach(function (t) { t.disabled = false; t.setAttribute('aria-pressed', 'false'); });
        b.dica('Scegli una risposta.');
      }
      function rispondi(k) {
        if (risposto) return; risposto = true;
        var c = carte[n], ok = k === c.giusta; if (ok) punti++;
        bott.forEach(function (t, i) { t.disabled = true; t.setAttribute('aria-pressed', String(scelte[i][0] === k)); });
        bAv.hidden = false; bAv.textContent = n === carte.length - 1 ? 'Vedi il risultato' : 'Avanti';
        b.dica((ok ? 'Giusto. ' : 'Non proprio. ') + (c.nome ? c.nome + ': ' : '') + c.spiega, ok ? 'ok' : 'no');
      }
      mostra();
    });
  }

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

})();
