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

})();
