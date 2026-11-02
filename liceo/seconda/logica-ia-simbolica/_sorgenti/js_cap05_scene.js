/* Capitolo 5 · La logica dei predicati — animazioni a passi, schema e widget */

  /* ===================== 5.1 · aprire i blocchi ===================== */
  costruisci('f-blocchi', function (svg, A) {
    var Y = [70, 130, 220];
    var frasi = ['Tutti gli abbonati entrano gratis', 'Anna è abbonata', 'Anna entra gratis'];
    // la riga tra premesse e conclusione
    S(svg, 'path', { d: 'M170 170 H550', stroke: 'var(--ink)', 'stroke-width': 2 });
    // passo 1: tre blocchi chiusi con una lettera; p resta chiuso fino al passo 2, q e r fino al passo 1
    ['p', 'q', 'r'].forEach(function (l, i) {
      var fino = i === 0 ? 2 : 1;
      var b = A.box(150, Y[i] - 32, 420, 46, 'nodo', { p: 1, f: fino }); b.setAttribute('style', 'fill:var(--surface-300);stroke:var(--border-strong)');
      var c = S(svg, 'circle', Object.assign({ cx: 128, cy: Y[i] - 9, r: 16, fill: 'var(--surface-000)', stroke: 'var(--border-strong)', 'stroke-width': 2 }, K.pa({ p: 1, f: fino })));
      var t = A.txt(128, Y[i] - 3, l, 't-mono', { p: 1, f: fino }); t.style.fontSize = '17px';
      // aperto: cornice tratteggiata
      var a = A.box(150, Y[i] - 32, 420, 46, 'nodo', { p: i === 0 ? 3 : 2 }); a.setAttribute('style', 'fill:var(--surface-000);stroke:var(--border-strong);stroke-dasharray:6 4');
    });
    // le frasi in italiano, finché il loro blocco non si apre
    frasi.forEach(function (f, i) { var t = A.txt(360, Y[i], f, 't-n', { f: i === 0 ? 2 : 1 }); t.style.fontSize = '18px'; });
    // le formule: al passo 2 si vede «anna» in comune, al passo 3 anche i predicati in comune
    function r(i, parti, o) { var t = riga(svg, 360, Y[i], parti, o, 'middle'); t.style.fontSize = '19px'; t.style.fontFamily = 'var(--font-mono)'; return t; }
    r(1, [['Abbonato(', ''], ['anna', 'b'], [')', '']], { p: 2, f: 2 });
    r(2, [['EntraGratis(', ''], ['anna', 'b'], [')', '']], { p: 2, f: 2 });
    r(0, [['per ogni x, ', ''], ['Abbonato', 'a'], ['(x) → ', ''], ['EntraGratis', 'a'], ['(x)', '']], { p: 3 }).style.fontSize = '15px';
    r(1, [['Abbonato', 'a'], ['(', ''], ['anna', 'b'], [')', '']], { p: 3 });
    r(2, [['EntraGratis', 'a'], ['(', ''], ['anna', 'b'], [')', '']], { p: 3 });
    A.txt(360, 278, 'niente collega p, q e r: per la logica proposizionale non è valido', 't-e', { p: 1, f: 1 });
    A.txt(360, 278, 'dentro c’è un oggetto in comune: Anna', 't-b', { p: 2, f: 2 });
    A.txt(360, 278, 'ora i pezzi in comune si vedono: il ragionamento si può dimostrare', 't-b', { p: 3 });
  });

  /* ===================== 5.2 · anatomia di una formula atomica ===================== */
  costruisci('s-anatomia', function (svg, A) {
    var F = frase(svg, 360, 130, [['Genitore', 'a'], ['(', 'm'], ['anna', 'b'], [', ', 'm'], ['marco', 'b'], [')', 'm']], {}, 40);
    var P = F.pezzi;
    function graffa(x0, x1, y, cls) { S(svg, 'path', { d: 'M' + x0 + ' ' + (y + 8) + ' V' + y + ' H' + x1 + ' V' + (y + 8), fill: 'none', stroke: cls, 'stroke-width': 2.5 }); }
    graffa(P[0].x0, P[0].x1, 84, 'var(--accent-500)'); A.txt(P[0].c, 72, 'predicato', 't-a');
    graffa(P[2].x0, P[4].x1, 84, 'var(--brand-600)'); A.txt((P[2].x0 + P[4].x1) / 2, 46, 'argomenti', 't-b');
    [[2, '1'], [4, '2']].forEach(function (k) {
      S(svg, 'circle', { cx: P[k[0]].c, cy: 66, r: 11, fill: 'var(--brand-100)', stroke: 'var(--brand-600)', 'stroke-width': 1.5 });
      A.txt(P[k[0]].c, 71, k[1], 't-b');
    });
    var ar = A.box(300, 156, 120, 32, 'nodo'); ar.setAttribute('rx', 16);
    A.txt(360, 177, 'arità 2', 't');
    var t = A.txt(360, 230, '«Anna è genitore di Marco»', 't-n'); t.style.fontSize = '20px';
  });

  /* ===================== 5.3 · che proprietà ha? ===================== */
  var NOMI = ['Anna', 'Bea', 'Carla', 'Dario'];
  var REL = {
    segue: { nome: 'segue su Instagram', archi: [[0, 1], [1, 2], [2, 0], [3, 0], [0, 3]] },
    classe: { nome: 'è nella stessa classe di', archi: [[0, 0], [1, 1], [2, 2], [3, 3], [0, 1], [1, 0], [0, 2], [2, 0], [1, 2], [2, 1]] },
    alto: { nome: 'è più alto di', archi: [[3, 0], [3, 1], [3, 2], [0, 1], [0, 2], [1, 2]] },
    genitore: { nome: 'è genitore di', archi: [[0, 1], [3, 1], [1, 2]] }
  };
  function proprieta(archi) {
    var has = {}; archi.forEach(function (a) { has[a[0] + '-' + a[1]] = true; });
    var out = {};
    var nr = [0, 1, 2, 3].filter(function (x) { return !has[x + '-' + x]; });
    out.riflessiva = nr.length ? { ok: false, perche: 'manca la freccia da ' + NOMI[nr[0]] + ' a ' + (nr[0] === 3 ? 'sé stesso' : 'sé stessa'), archi: [] } : { ok: true, perche: 'ognuno è in relazione con sé stesso', archi: [] };
    var ns = archi.filter(function (a) { return !has[a[1] + '-' + a[0]]; });
    out.simmetrica = ns.length ? { ok: false, perche: NOMI[ns[0][0]] + ' → ' + NOMI[ns[0][1]] + ', ma non ' + NOMI[ns[0][1]] + ' → ' + NOMI[ns[0][0]], archi: [ns[0]] } : { ok: true, perche: 'ogni freccia ha quella di ritorno', archi: [] };
    var nt = null;
    archi.forEach(function (a) { archi.forEach(function (b) { if (!nt && a[1] === b[0] && a[0] !== b[1] && a[0] !== a[1] && b[0] !== b[1] && !has[a[0] + '-' + b[1]]) nt = [a, b]; }); });
    out.transitiva = nt ? { ok: false, perche: NOMI[nt[0][0]] + ' → ' + NOMI[nt[0][1]] + ' e ' + NOMI[nt[1][0]] + ' → ' + NOMI[nt[1][1]] + ', ma non ' + NOMI[nt[0][0]] + ' → ' + NOMI[nt[1][1]], archi: nt } : { ok: true, perche: 'ogni catena di due frecce ha la scorciatoia', archi: [] };
    return out;
  }
  W.registra('relazioni', function (el) {
    var b = W.base(el, 'Prova tu · che proprietà ha?');
    var rel = 'segue', vista = 'transitiva';
    var menu = W.scelta(Object.keys(REL).map(function (k) { return [k, REL[k].nome]; }), rel, function (k) { rel = k; disegna(); });
    var spie = W.h('div', { 'class': 'rel-spie' });
    var svg = W.s('svg', { viewBox: '0 0 560 380', 'class': 'rel-svg', role: 'img' });
    b.ctrl.className = 'wid-rel';
    b.ctrl.appendChild(menu); b.ctrl.appendChild(W.h('div', { 'class': 'rel-corpo' }, [svg, spie]));
    b.chiudi();
    var POS = [[130, 110], [430, 110], [430, 300], [130, 300]];
    function disegna() {
      var R = REL[rel], P = proprieta(R.archi);
      svg.innerHTML = '';
      svg.setAttribute('aria-label', 'Relazione «' + R.nome + '» tra Anna, Bea, Carla e Dario');
      var d = S(svg, 'defs', {});
      [['n', 'var(--ink-muted)'], ['a', 'var(--accent-500)']].forEach(function (c) {
        var m = S(d, 'marker', { id: 'rel-' + c[0], viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 10, markerHeight: 10, markerUnits: 'userSpaceOnUse', orient: 'auto' });
        S(m, 'path', { d: 'M0 0 L10 5 L0 10 z', fill: c[1] });
      });
      var ev = {}; (P[vista].archi || []).forEach(function (a) { ev[a[0] + '-' + a[1]] = true; });
      var has = {}; R.archi.forEach(function (a) { has[a[0] + '-' + a[1]] = true; });
      R.archi.forEach(function (a) {
        var on = ev[a[0] + '-' + a[1]], col = on ? 'var(--accent-500)' : 'var(--ink-muted)', mk = 'url(#rel-' + (on ? 'a' : 'n') + ')';
        var p1 = POS[a[0]], p2 = POS[a[1]];
        if (a[0] === a[1]) {
          S(svg, 'path', { d: 'M' + (p1[0] - 14) + ' ' + (p1[1] - 52) + ' c-36 -46 64 -46 28 0', fill: 'none', stroke: col, 'stroke-width': on ? 3 : 2, 'marker-end': mk });
          return;
        }
        var dx = p2[0] - p1[0], dy = p2[1] - p1[1], L = Math.sqrt(dx * dx + dy * dy), ux = dx / L, uy = dy / L, t0 = Math.abs(uy) > .5 ? 64 : 50;
        var off = has[a[1] + '-' + a[0]] ? 7 : 0, nx = -uy * off, ny = ux * off;
        S(svg, 'path', { d: 'M' + (p1[0] + ux * t0 + nx) + ' ' + (p1[1] + uy * t0 + ny) + ' L' + (p2[0] - ux * t0 + nx) + ' ' + (p2[1] - uy * t0 + ny), stroke: col, 'stroke-width': on ? 3.5 : 2, 'marker-end': mk });
      });
      NOMI.forEach(function (n_, i) {
        var g = S(svg, 'g', { transform: 'translate(' + POS[i][0] + ' ' + (POS[i][1] + 34) + ') scale(.62) translate(' + (-POS[i][0]) + ' ' + (-POS[i][1] - 34) + ')' });
        persona(g, POS[i][0], POS[i][1] + 34, { capelli: i === 3 ? 'corti' : 'coda', maglia: ['var(--brand-600)', 'var(--accent-500)', 'var(--brand-500)', 'var(--ink-muted)'][i] });
        S(svg, 'text', { x: POS[i][0], y: POS[i][1] + 58, 'text-anchor': 'middle', 'class': 't' }, n_);
      });
      spie.innerHTML = '';
      ['riflessiva', 'simmetrica', 'transitiva'].forEach(function (k) {
        var s = W.h('button', { type: 'button', 'class': 'rel-spia ' + (P[k].ok ? 'ok' : 'no') + (k === vista ? ' scelta' : ''), 'aria-pressed': String(k === vista) },
          [W.h('span', { 'class': 'rel-luce' }), W.h('b', { testo: k }), W.h('span', { 'class': 'rel-perche', testo: (P[k].ok ? 'sì: ' : 'no: ') + P[k].perche })]);
        s.onclick = function () { vista = k; disegna(); };
        spie.appendChild(s);
      });
      b.dica('«' + R.nome + '»: ' + ['riflessiva', 'simmetrica', 'transitiva'].map(function (k) { return (P[k].ok ? '' : 'non ') + k; }).join(', ') + '. Tocca una spia per vedere le frecce che lo dimostrano.');
    }
    disegna();
  });

  /* ===================== 5.4 · la classe e gli insiemi ===================== */
  costruisci('f-insiemi', function (svg, A) {
    var VIOLA = '#7c5cbf';
    A.box(14, 40, 520, 326, 'fondo');
    A.txt(30, 62, 'DOMINIO: LA CLASSE', 't-eti', {}, 'start');
    var cO = [205, 210], cC = [345, 210], R = 110;
    S(svg, 'circle', { cx: cO[0], cy: cO[1], r: R, fill: VIOLA, 'fill-opacity': .08, stroke: VIOLA, 'stroke-width': 2.5 });
    S(svg, 'circle', { cx: cC[0], cy: cC[1], r: R, fill: 'var(--brand-500)', 'fill-opacity': .08, stroke: 'var(--brand-600)', 'stroke-width': 2.5 });
    var tO = A.txt(120, 92, 'O = porta gli occhiali', 't', {}, 'middle'); tO.setAttribute('fill', VIOLA);
    A.txt(430, 92, 'C = gioca a calcio', 't-b', {}, 'middle');
    // dodici studenti: [x, y dei piedi, gruppo] o = solo occhiali, e = entrambi, c = solo calcio, f = fuori
    var ST = [[140, 190, 'o'], [180, 160, 'o'], [128, 268, 'o'], [186, 296, 'o'], [275, 196, 'e'], [275, 284, 'e'],
      [360, 160, 'c'], [410, 196, 'c'], [360, 296, 'c'], [420, 278, 'c'], [60, 352, 'f'], [488, 350, 'f']];
    var QUALI = { 1: 'oe', 2: 'ec', 3: 'e', 4: 'oec', 5: 'cf', 6: 'oc', 7: 'f' };
    // anelli ambra dietro gli studenti scelti, a ogni passo
    Object.keys(QUALI).forEach(function (s) {
      ST.forEach(function (st) { if (QUALI[s].indexOf(st[2]) >= 0) S(svg, 'circle', Object.assign({ cx: st[0], cy: st[1] - 22, r: 25, fill: 'var(--accent-100)', stroke: 'var(--accent-500)', 'stroke-width': 2.5 }, K.pa({ p: +s, f: +s }))); });
    });
    ST.forEach(function (st, i) {
      var g = S(svg, 'g', { transform: 'translate(' + st[0] + ' ' + st[1] + ') scale(.36) translate(' + (-st[0]) + ' ' + (-st[1]) + ')' });
      persona(g, st[0], st[1], { capelli: i % 3 ? 'corti' : 'coda', binocolo: null, maglia: ['var(--brand-600)', 'var(--accent-500)', 'var(--ink-muted)', VIOLA][i % 4] });
      if (st[2] === 'o' || st[2] === 'e') {   // occhiali
        S(svg, 'path', { d: 'M' + (st[0] - 6) + ' ' + (st[1] - 36.5) + ' h12', stroke: 'var(--ink)', 'stroke-width': 1.2 });
        [-3, 3].forEach(function (dx) { S(svg, 'circle', { cx: st[0] + dx, cy: st[1] - 36.5, r: 2.4, fill: 'none', stroke: 'var(--ink)', 'stroke-width': 1.1 }); });
      }
    });
    // velo bianco sugli studenti non scelti
    Object.keys(QUALI).forEach(function (s) {
      ST.forEach(function (st) { if (QUALI[s].indexOf(st[2]) < 0) S(svg, 'circle', Object.assign({ cx: st[0], cy: st[1] - 22, r: 25, fill: 'var(--surface-200)', 'fill-opacity': .72 }, K.pa({ p: +s, f: +s }))); });
    });
    // a destra: la formula e l’operazione tra insiemi
    var FO = [null, ['O(x)', 'insieme di verità di O'], ['C(x)', 'insieme di verità di C'], ['O(x) ∧ C(x)', 'intersezione'], ['O(x) ∨ C(x)', 'unione'],
      ['¬O(x)', 'complementare'], ['O(x) ⊕ C(x)', 'differenza simmetrica'], ['¬(O ∨ C) ≡ ¬O ∧ ¬C', 'De Morgan con gli insiemi']];
    FO.forEach(function (f, s) {
      if (!f) return;
      var t = A.txt(626, 190, f[0], 't-mono', { p: s, f: s }); t.style.fontSize = s === 7 ? '13px' : '20px';
      A.txt(626, 222, f[1], 't-a', { p: s, f: s });
    });
    A.txt(626, 190, 'due formule aperte', 't', { f: 0 }); A.txt(626, 214, 'O(x) e C(x)', 't-mono', { f: 0 });
  });

  /* ===================== 5.5 · il mondo dei blocchi ===================== */
  // oggetti: [nome, forma, grande, colonna, riga]
  var MONDI = [
    [['a', 'cubo', true, 0, 1], ['b', 'piramide', true, 2, 0], ['c', 'piramide', false, 1, 3], ['d', 'sfera', false, 3, 2]],
    [['a', 'sfera', false, 2, 1], ['b', 'cubo', false, 0, 2], ['c', 'piramide', true, 3, 0], ['d', 'cubo', true, 1, 3]]
  ];
  function ogg(M, n_) { return M.filter(function (o) { return o[0] === n_; })[0]; }
  var FORMULE = [
    ['Cubo(a)', ['a'], function (M) { return ogg(M, 'a')[1] === 'cubo'; }],
    ['Grande(b)', ['b'], function (M) { return ogg(M, 'b')[2]; }],
    ['ASinistraDi(a, b)', ['a', 'b'], function (M) { return ogg(M, 'a')[3] < ogg(M, 'b')[3]; }],
    ['Piramide(c) ∧ Piccola(c)', ['c'], function (M) { return ogg(M, 'c')[1] === 'piramide' && !ogg(M, 'c')[2]; }],
    ['¬Sfera(d)', ['d'], function (M) { return ogg(M, 'd')[1] !== 'sfera'; }],
    ['ASinistraDi(c, d) ∨ Cubo(d)', ['c', 'd'], function (M) { return ogg(M, 'c')[3] < ogg(M, 'd')[3] || ogg(M, 'd')[1] === 'cubo'; }]
  ];
  W.registra('blocchi', function (el) {
    var b = W.base(el, 'Prova tu · il mondo dei blocchi');
    b.ctrl.className = 'wid-blocchi';
    var mondi = W.h('div', { 'class': 'bl-mondi' });
    var svgs = MONDI.map(function (M, k) {
      var s = W.s('svg', { viewBox: '0 0 220 236', 'class': 'bl-svg', role: 'img', 'aria-label': 'Mondo ' + (k + 1) + ': ' + M.map(function (o) { return o[0] + ' ' + o[1] + ' ' + (o[2] ? 'grande' : 'piccolo') + ' in colonna ' + (o[3] + 1) + ', riga ' + (o[4] + 1); }).join('; ') });
      mondi.appendChild(W.h('figure', { 'class': 'bl-mondo' }, [s, W.h('figcaption', { testo: 'Mondo ' + (k + 1) })]));
      return s;
    });
    var lista = W.h('table', { 'class': 'bl-lista' });
    b.ctrl.appendChild(mondi); b.ctrl.appendChild(W.h('div', { 'class': 'tab' }, [lista]));
    b.chiudi();
    var evid = [[], []];
    function disegnaMondo(k) {
      var s = svgs[k], M = MONDI[k]; s.innerHTML = '';
      for (var r = 0; r < 4; r++) for (var c = 0; c < 4; c++) S(s, 'rect', { x: 10 + c * 50, y: 10 + r * 50, width: 50, height: 50, fill: (r + c) % 2 ? 'var(--surface-200)' : 'var(--surface-000)', stroke: 'var(--border)' });
      M.forEach(function (o) {
        var cx = 35 + o[3] * 50, cy = 35 + o[4] * 50, z = o[2] ? 18 : 10, on = evid[k].indexOf(o[0]) >= 0;
        if (on) S(s, 'rect', { x: cx - 24, y: cy - 24, width: 48, height: 48, rx: 6, fill: 'var(--accent-100)', stroke: 'var(--accent-500)', 'stroke-width': 2.5 });
        var col = 'var(--brand-500)';
        if (o[1] === 'cubo') S(s, 'rect', { x: cx - z, y: cy - z, width: 2 * z, height: 2 * z, rx: 2, fill: col, stroke: 'var(--brand-ink)', 'stroke-width': 1.5 });
        if (o[1] === 'sfera') S(s, 'circle', { cx: cx, cy: cy, r: z, fill: col, stroke: 'var(--brand-ink)', 'stroke-width': 1.5 });
        if (o[1] === 'piramide') S(s, 'path', { d: 'M' + cx + ' ' + (cy - z) + ' L' + (cx + z) + ' ' + (cy + z) + ' L' + (cx - z) + ' ' + (cy + z) + ' Z', fill: col, stroke: 'var(--brand-ink)', 'stroke-width': 1.5 });
        var t = S(s, 'text', { x: cx, y: cy + 5, 'text-anchor': 'middle', 'class': 't-on' }, o[0]); t.style.fontSize = o[2] ? '15px' : '11px';
      });
      S(s, 'text', { x: 110, y: 230, 'text-anchor': 'middle', 'class': 't-m' }, 'colonne da sinistra a destra');
    }
    var risposte = FORMULE.map(function () { return [null, null]; });
    function disegnaLista() {
      var h = '<thead><tr><th>Formula</th><th>Mondo 1</th><th>Mondo 2</th></tr></thead><tbody>';
      FORMULE.forEach(function (f, i) {
        h += '<tr><td><code>' + f[0] + '</code></td>' + [0, 1].map(function (k) {
          var r = risposte[i][k], giusto = f[2](MONDI[k]);
          if (r === null) return '<td><span class="wid-gruppo"><button type="button" class="tasto" data-i="' + i + '" data-k="' + k + '" data-v="1">V</button><button type="button" class="tasto" data-i="' + i + '" data-k="' + k + '" data-v="0">F</button></span></td>';
          return '<td class="' + (r === giusto ? 'bl-si' : 'bl-no') + '">' + (r === giusto ? '✓ ' : '✗ ') + 'è <span class="' + (giusto ? 'vv' : 'ff') + '">' + (giusto ? 'V' : 'F') + '</span></td>';
        }).join('') + '</tr>';
      });
      lista.innerHTML = h + '</tbody>';
      [].forEach.call(lista.querySelectorAll('button'), function (bt) {
        bt.onclick = function () {
          var i = +bt.getAttribute('data-i'), k = +bt.getAttribute('data-k'), v = bt.getAttribute('data-v') === '1', giusto = FORMULE[i][2](MONDI[k]);
          risposte[i][k] = v; evid = [[], []]; evid[k] = FORMULE[i][1];
          disegnaMondo(0); disegnaMondo(1); disegnaLista();
          b.dica((v === giusto ? 'Giusto: ' : 'Non proprio: ') + FORMULE[i][0] + ' nel mondo ' + (k + 1) + ' è ' + (giusto ? 'vera' : 'falsa') + '. Gli oggetti coinvolti sono evidenziati.', v === giusto ? 'ok' : 'no');
        };
      });
    }
    disegnaMondo(0); disegnaMondo(1); disegnaLista();
    b.dica('Per ogni formula scegli V o F in ciascun mondo. ASinistraDi(x, y) vuol dire che x sta in una colonna più a sinistra di y.');
  });
