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

/* Capitolo 4 · Implicazione e ragionamenti — schemi, animazioni a passi e widget */

  /* ===================== 4.1 · Roma e l’Italia ===================== */
  costruisci('s-roma', function (svg, A) {
    // cartina: Italy location map (Wikimedia Commons, NordNordWest), limiti 47,4–35,3 N e 6,2–19,0 E
    var X0 = 20, Y0 = 14, LW = 220, LH = LW * 1294.52 / 1030.462;
    A.img('https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Italy_location_map.svg/500px-Italy_location_map.svg.png', X0, Y0, LW, LH);
    S(svg, 'rect', { x: X0, y: Y0, width: LW, height: LH, fill: 'none', stroke: 'var(--border-strong)', 'stroke-width': 1 });
    function punto(lat, lon) { return [X0 + (lon - 6.2) / 12.8 * LW, Y0 + (47.4 - lat) / 12.1 * LH]; }
    var roma = punto(41.9, 12.5), mi = punto(45.46, 9.19);
    S(svg, 'circle', { cx: roma[0], cy: roma[1], r: 7, fill: 'var(--brand-600)', stroke: '#fff', 'stroke-width': 2 });
    A.txt(roma[0] + 12, roma[1] + 5, 'Roma', 't-b', {}, 'start');
    S(svg, 'circle', { cx: mi[0], cy: mi[1], r: 5, fill: 'var(--ink-muted)', stroke: '#fff', 'stroke-width': 2 });
    A.txt(mi[0] + 10, mi[1] - 6, 'Milano', 't', {}, 'start');
    A.txt(X0 + LW / 2, Y0 + LH + 16, 'cartina: Wikimedia Commons', 't-s');
    // le due frasi
    function scheda(y, parti, sotto, tono) {
      var b = A.box(268, y, 432, 92, tono === 'ok' ? 'nodo evid' : 'nodo'); if (tono === 'att') b.setAttribute('style', 'fill:var(--accent-100);stroke:var(--accent-500)');
      riga(svg, 286, y + 34, parti).style.fontSize = '16px';
      righe(A, 286, y + 60, sotto, 52, 't-m');
    }
    scheda(24, [['Essere a Roma è ', ''], ['sufficiente', 'b'], [' per essere in Italia', '']], 'se sei a Roma, sei per forza in Italia', 'ok');
    scheda(132, [['Essere in Italia è ', ''], ['necessario', 'a'], [' per essere a Roma', '']], 'non puoi essere a Roma senza essere in Italia, ma puoi essere in Italia senza essere a Roma: a Milano', 'att');
    var F = frase(svg, 484, 272, [['Roma', 'b'], [' → ', 'm'], ['Italia', 'a']], {}, 30);
    A.txt(F.pezzi[0].c, 300, 'sufficiente', 't-b'); A.txt(F.pezzi[2].c, 300, 'necessaria', 't-a');
  });

  /* ===================== 4.2 · il quadrato delle quattro frasi ===================== */
  costruisci('s-quadrato', function (svg, A) {
    function scheda(x, y, nome, formula, frase_, vera, perche) {
      A.box(x, y, 330, 104, vera ? 'nodo evid' : 'nodo guasto');
      A.txt(x + 16, y + 24, nome, 't-eti', {}, 'start');
      var f = A.txt(x + 314, y + 24, formula, 't-mono', {}, 'end'); f.style.fontSize = '15px';
      righe(A, x + 16, y + 52, frase_, 44, 't-n');
      pillola(A, x + 274, y + 84, vera ? 'vera' : 'falsa', vera ? 'ok' : 'no', {}, 64);
      if (perche) A.txt(x + 236, y + 89, perche, 't-e', {}, 'end');
    }
    scheda(20, 16, 'ORIGINALE', 'p → q', '«Se un animale è un gatto, allora ha quattro zampe»', true);
    scheda(370, 16, 'INVERSA', 'q → p', '«Se ha quattro zampe, è un gatto»', false, 'un cane');
    scheda(20, 140, 'CONTRARIA', '¬p → ¬q', '«Se non è un gatto, non ha quattro zampe»', false, 'un cane');
    scheda(370, 140, 'CONTRONOMINALE', '¬q → ¬p', '«Se non ha quattro zampe, non è un gatto»', true);
    // originale ≡ contronominale
    var d = A.path('M300 122 L390 138', 'lin ok'); d.style.strokeDasharray = '5 4';
    var e = A.box(330, 114, 30, 30, 'nodo evid'); e.setAttribute('rx', 15);
    A.txt(345, 135, '≡', 't-b').style.fontSize = '20px';
    // la tavola
    tavola(svg, A, 150, 262, [60, 60, 150, 150], ['p', 'q', 'p → q', '¬q → ¬p'], [['F', 'F', 'V', 'V'], ['F', 'V', 'V', 'V'], ['V', 'F', 'F', 'F'], ['V', 'V', 'V', 'V']], { alt: 26, finale: [2, 3] });
    A.txt(360, 410, 'stessa colonna: originale e contronominale sono equivalenti', 't-b');
  });

  /* ===================== 4.3 · le regole come stampi ===================== */
  var REGOLE = [
    ['MODUS PONENS', ['p → q', 'p'], 'q', 'Se è sera e fuori è buio serve la luce; è sera e fuori è buio; quindi serve la luce'],
    ['MODUS TOLLENS', ['p → q', '¬q'], '¬p', 'Se fosse entrato dalla porta, la serratura sarebbe rotta; è intatta; quindi non è entrato dalla porta'],
    ['SILLOGISMO IPOTETICO', ['p → q', 'q → r'], 'p → r', 'Se piove prendo l’ombrello; se prendo l’ombrello non mi bagno; quindi se piove non mi bagno'],
    ['SILLOGISMO DISGIUNTIVO', ['p ∨ q', '¬p'], 'q', 'Il ladro è entrato dalla porta o dalla finestra; non dalla porta; quindi dalla finestra'],
    ['INTRODUZIONE DELLA ∧', ['p', 'q'], 'p ∧ q', 'È sera; fuori è buio; quindi è sera e fuori è buio'],
    ['ELIMINAZIONE DELLA ∧', ['p ∧ q'], 'p', 'È sera e fuori è buio; quindi è sera'],
    ['INTRODUZIONE DELLA ∨', ['p'], 'p ∨ q', 'Ho la tessera; quindi ho la tessera o un documento']
  ];
  costruisci('s-stampi', function (svg, A) {
    // quattro schede per riga: in alto la regola come stampo (premesse, riga, conclusione), sotto l’esempio in italiano
    REGOLE.forEach(function (r, i) {
      var col = i % 4, rg = Math.floor(i / 4), x = 12 + col * 237 + (rg ? 118 : 0), y = 12 + rg * 204, cx = x + 112;
      A.box(x, y, 225, 192, 'nodo');
      A.txt(x + 12, y + 22, r[0], 't-eti', {}, 'start');
      var yy = y + 48;
      r[1].forEach(function (p) { A.txt(cx, yy, p, 't-mono', {}, 'middle'); yy += 20; });
      S(svg, 'path', { d: 'M' + (cx - 46) + ' ' + (yy - 12) + ' H' + (cx + 46), stroke: 'var(--ink)', 'stroke-width': 2 });
      var c = A.txt(cx, yy + 8, r[2], 't-mono', {}, 'middle'); c.setAttribute('fill', 'var(--brand-ink)');
      righe(A, x + 12, y + 122, '«' + r[3] + '»', 31, 't-m', {}, 'start', 17);
    });
  });

  /* ===================== 4.4 · valido o fallacia? ===================== */
  widgetCarte('fallacie', 'Prova tu · valido o fallacia?', [['valido', 'Valido'], ['fallacia', 'Fallacia']], [
    { testo: '«Se c’è lo sciopero dei bus, arrivo in ritardo. Oggi c’è lo sciopero dei bus. Quindi arrivo in ritardo.»', giusta: 'valido', nome: 'modus ponens', spiega: 'c’è la regola, c’è l’antecedente, quindi segue il conseguente.' },
    { testo: '«Chi usa questa crema ha la pelle liscia. Giulia ha la pelle liscia. Quindi usa questa crema.»', giusta: 'fallacia', nome: 'affermazione del conseguente', spiega: 'controesempio: Giulia può avere la pelle liscia per tutt’altro motivo, senza aver mai usato la crema.' },
    { testo: '«Se il telefono fosse carico, si accenderebbe. Non si accende. Quindi non è carico.»', giusta: 'valido', nome: 'modus tollens', spiega: 'il conseguente è falso, quindi lo è anche l’antecedente.' },
    { testo: '«O compri il telefono nuovo, o resterai indietro rispetto a tutti.»', giusta: 'fallacia', nome: 'falso dilemma', spiega: 'presenta due sole possibilità, ma ce ne sono altre: per esempio tenere il telefono che hai.' },
    { testo: '«Se studi, prendi la sufficienza. Non hai studiato. Quindi non prenderai la sufficienza.»', giusta: 'fallacia', nome: 'negazione dell’antecedente', spiega: 'controesempio: conoscevi già l’argomento e prendi la sufficienza lo stesso.' },
    { testo: '«La password è “gatto” oppure “cane”. Non è “gatto”. Quindi è “cane”.»', giusta: 'valido', nome: 'sillogismo disgiuntivo', spiega: 'delle due possibilità una è esclusa, resta l’altra.' },
    { testo: '«Per iscriverti serve l’email o il numero di telefono. Hai dato l’email. Quindi non hai un numero di telefono.»', giusta: 'fallacia', nome: 'affermazione di un disgiunto', spiega: 'controesempio: si possono avere tutti e due. L’«o» è inclusivo, non è uno XOR.' },
    { testo: '«Ho visto due video di gatti che odiano l’acqua: tutti i gatti odiano l’acqua.»', giusta: 'fallacia', nome: 'generalizzazione affrettata', spiega: 'due casi sono troppo pochi per una regola generale: basta un gatto a cui piace l’acqua per smentirla.' },
    { testo: '«Da quando ho la cover nuova la batteria dura meno: è colpa della cover.»', giusta: 'fallacia', nome: 'post hoc (falsa causa)', spiega: 'le due cose capitano insieme, ma magari la batteria si è consumata con il tempo o è arrivato un aggiornamento.' },
    { testo: '«Non ascoltare i suoi consigli su come studiare: ha solo 15 anni.»', giusta: 'fallacia', nome: 'ad hominem', spiega: 'attacca la persona invece di discutere i consigli: l’età non dice se sono giusti o sbagliati.' }
  ], 'Le fallacie si smontano con un controesempio: un caso con le premesse vere e la conclusione falsa.');

  /* ===================== 4.5 · l’indagine del detective ===================== */
  costruisci('f-detective', function (svg, A) {
    frecce(svg, 'dt');
    A.box(14, 14, 330, 318, 'fondo'); A.txt(30, 38, 'INDIZI (PREMESSE)', 't-eti', {}, 'start');
    A.box(376, 14, 330, 318, 'fondo'); A.txt(392, 38, 'DERIVAZIONE', 't-eti', {}, 'start');
    function scheda(x, y, num, formula, testo, o) {
      var g = A.g(o);
      var b = A.box(x, y, 298, 60, 'nodo', {}, g); b.style.fill = 'var(--surface-000)';
      var f = A.txt(x + 14, y + 24, num + '.  ' + formula, 't-mono', {}, 'start', g); f.style.fontSize = '15px';
      A.txt(x + 14, y + 46, testo, 't-m', {}, 'start', g);
      return g;
    }
    // evidenza sopra la scheda: bordo spesso e velo colorato
    function luce(x, y, cls, o) { var b = A.box(x, y, 298, 60, 'nodo', o); b.setAttribute('style', cls === 'att' ? 'fill:var(--accent-500);fill-opacity:.14;stroke:var(--accent-500);stroke-width:3' : 'fill:var(--brand-500);fill-opacity:.14;stroke:var(--brand-600);stroke-width:3'); }
    var I = [[54, '1', 'porta ∨ finestra', 'entrato dalla porta o dalla finestra'], [124, '2', 'porta → serratura rotta', 'se dalla porta, serratura rotta'],
      [194, '3', '¬ serratura rotta', 'la serratura è intatta'], [264, '4', 'finestra → impronte', 'se dalla finestra, impronte in giardino']];
    var D = [[54, '5', '¬ porta', 'modus tollens (2, 3)'], [124, '6', 'finestra', 'sillogismo disgiuntivo (1, 5)'], [194, '7', 'impronte in giardino', 'modus ponens (4, 6)']];
    // evidenze ambra degli indizi usati a ogni passo (sotto le schede)
    var uso = { 1: [[I, 1], [I, 2]], 2: [[I, 0], [D, 0]], 3: [[I, 3], [D, 1]] };
    I.forEach(function (k) { scheda(30, k[0], k[1], k[2], k[3]); });
    D.forEach(function (k, i) { scheda(392, k[0], k[1], k[2], k[3], { p: i + 1 }); });
    Object.keys(uso).forEach(function (s) { uso[s].forEach(function (u) { luce(u[0] === I ? 30 : 392, u[0][u[1]][0], 'att', { p: +s, f: +s }); }); });
    luce(392, 194, 'ok', { p: 4 });
    // frecce dagli indizi usati alla scheda nuova
    [[1, 'M330 154 C360 154 362 84 390 84'], [1, 'M330 224 C362 224 360 92 390 92'], [2, 'M330 84 C360 84 362 150 390 150'], [2, 'M540 114 V120'],
     [3, 'M330 294 C362 294 360 222 390 222'], [3, 'M540 184 V190']].forEach(function (f) {
      var p = A.path(f[1], 'lin att', { p: f[0], f: f[0] }); p.setAttribute('marker-end', 'url(#dt-att)');
    });
    A.box(392, 272, 298, 46, 'nodo evid', { p: 4 });
    A.txt(541, 300, 'Cercate in giardino!', 't-b', { p: 4 });
  });

  /* ===================== 4.6 · i fagioli di Peirce ===================== */
  function sacco(svg, x, y) {
    S(svg, 'path', { d: 'M' + (x - 50) + ' ' + (y + 70) + ' C' + (x - 70) + ' ' + (y + 10) + ' ' + (x - 40) + ' ' + (y - 30) + ' ' + (x - 16) + ' ' + (y - 50) +
      ' L' + (x + 16) + ' ' + (y - 50) + ' C' + (x + 40) + ' ' + (y - 30) + ' ' + (x + 70) + ' ' + (y + 10) + ' ' + (x + 50) + ' ' + (y + 70) + ' Z', fill: '#d9bf8f', stroke: '#9c7c45', 'stroke-width': 2 });
    S(svg, 'path', { d: 'M' + (x - 22) + ' ' + (y - 52) + ' q22 -14 44 0', fill: 'none', stroke: '#9c7c45', 'stroke-width': 4, 'stroke-linecap': 'round' });
    S(svg, 'path', { d: 'M' + (x - 18) + ' ' + (y - 66) + ' q18 10 36 0 l-4 -14 q-14 8 -28 0 z', fill: '#d9bf8f', stroke: '#9c7c45', 'stroke-width': 2 });
  }
  function fagioli(svg, x, y, n, seme) {
    var r = K.rnd(seme || 7);
    for (var i = 0; i < n; i++) {
      var fx = x + (r() - .5) * 70, fy = y + (r() - .5) * 18;
      S(svg, 'ellipse', { cx: fx, cy: fy, rx: 7, ry: 4.6, transform: 'rotate(' + Math.round(r() * 160) + ' ' + fx + ' ' + fy + ')', fill: '#fbfaf5', stroke: 'var(--border-strong)', 'stroke-width': 1.2 });
    }
  }
  costruisci('f-fagioli', function (svg, A) {
    frecce(svg, 'fg');
    // il tavolo con il sacco e la manciata di fagioli
    S(svg, 'rect', { x: 14, y: 236, width: 222, height: 12, rx: 3, fill: '#b98b5a' });
    S(svg, 'path', { d: 'M34 248 V310 M216 248 V310', stroke: '#8d6640', 'stroke-width': 8, 'stroke-linecap': 'round' });
    sacco(svg, 90, 162); fagioli(svg, 186, 226, 9, 11);
    A.txt(125, 330, 'DEDUZIONE', 't-b', { p: 1, f: 1 }); A.txt(125, 330, 'INDUZIONE', 't-a', { p: 2, f: 2 }); A.txt(125, 330, 'ABDUZIONE', 't-a', { p: 3, f: 3 });
    // le tre schede
    var SC = [['Regola', 'tutti i fagioli di questo sacco sono bianchi', 26], ['Caso', 'questi fagioli vengono da questo sacco', 126], ['Risultato', 'questi fagioli sono bianchi', 226]];
    // in ogni passo: quale scheda si ricava, con che etichetta
    var ricava = { 1: [2, 'certo', 'ok'], 2: [0, 'probabile', 'att'], 3: [1, 'probabile', 'att'] };
    SC.forEach(function (s, i) {
      A.box(272, s[2], 340, 80, 'nodo');
      A.txt(288, s[2] + 24, s[0].toUpperCase(), 't-eti', {}, 'start');
      [1, 2, 3].forEach(function (p) {
        var r = ricava[p], qui = r[0] === i;
        if (qui) { var b = A.box(272, s[2], 340, 80, 'nodo', { p: p, f: p }); b.setAttribute('style', r[2] === 'ok' ? 'fill:var(--brand-100);stroke:var(--brand-600);stroke-width:3' : 'fill:var(--accent-100);stroke:var(--accent-500);stroke-width:3'); }
        var t = A.txt(288, s[2] + 54, s[1], qui ? (r[2] === 'ok' ? 't-b' : 't-a') : 't-n', { p: p, f: p }, 'start'); t.style.fontSize = '15px';
        if (qui) pillola(A, 656, s[2] + 40, r[1], r[2], { p: p, f: p }, 92);
      });
    });
    // frecce: dalle due schede date a quella ricavata
    [[1, 'M612 66 C640 66 640 260 614 262'], [1, 'M612 166 C628 166 630 250 614 254'], [2, 'M612 166 C636 166 636 72 614 70'], [2, 'M612 266 C644 266 644 78 614 74'],
     [3, 'M612 66 C632 66 632 160 614 162'], [3, 'M612 266 C632 266 632 172 614 170']].forEach(function (f) {
      var p = A.path(f[1], f[0] === 1 ? 'lin ok' : 'lin att', { p: f[0], f: f[0] }); p.setAttribute('marker-end', 'url(#fg-' + (f[0] === 1 ? 'ok' : 'att') + ')');
    });
  });

  /* ===================== 4.6 · il tacchino induttivista ===================== */
  function tacchino(svg, x, y, o) {
    var g = S(svg, 'g', K.pa(o));
    [-50, -25, 0, 25, 50].forEach(function (a, i) {
      var r = a * Math.PI / 180, ex = x - 26 + Math.sin(r) * 46, ey = y - 46 - Math.cos(r) * 46;
      S(g, 'path', { d: 'M' + (x - 26) + ' ' + (y - 40) + ' L' + ex.toFixed(1) + ' ' + ey.toFixed(1), stroke: i % 2 ? '#a4673a' : '#7a4a28', 'stroke-width': 16, 'stroke-linecap': 'round' });
    });
    S(g, 'ellipse', { cx: x, cy: y - 34, rx: 34, ry: 26, fill: '#6b4226' });
    S(g, 'path', { d: 'M' + (x - 6) + ' ' + y + ' v14 M' + (x + 10) + ' ' + y + ' v14', stroke: '#c98a2b', 'stroke-width': 4, 'stroke-linecap': 'round' });
    S(g, 'path', { d: 'M' + (x + 22) + ' ' + (y - 50) + ' q14 -10 14 -30', stroke: '#6b4226', 'stroke-width': 10, fill: 'none', 'stroke-linecap': 'round' });
    S(g, 'circle', { cx: x + 38, cy: y - 84, r: 11, fill: '#9fb3c8' });
    S(g, 'circle', { cx: x + 41, cy: y - 87, r: 3, fill: '#fff' }); S(g, 'circle', { cx: x + 41.5, cy: y - 86.6, r: 1.6, fill: 'var(--ink)' });
    S(g, 'path', { d: 'M' + (x + 48) + ' ' + (y - 84) + ' l9 3 l-9 3 z', fill: '#e2a33a' });
    S(g, 'path', { d: 'M' + (x + 46) + ' ' + (y - 79) + ' q4 12 -2 16', stroke: '#c8352c', 'stroke-width': 5, fill: 'none', 'stroke-linecap': 'round' });
    return g;
  }
  costruisci('f-tacchino', function (svg, A) {
    // recinto della fattoria
    S(svg, 'rect', { x: 14, y: 272, width: 430, height: 54, fill: '#cfe0b0' });
    [30, 110, 190, 270, 350, 430].forEach(function (x) { S(svg, 'rect', { x: x - 5, y: 180, width: 10, height: 100, rx: 2, fill: '#b98b5a' }); });
    [200, 240].forEach(function (y) { S(svg, 'rect', { x: 24, y: y, width: 412, height: 8, rx: 2, fill: '#c99c69' }); });
    tacchino(svg, 200, 290, { f: 3 });
    // la ciotola: piena quando arriva il cibo
    S(svg, 'path', { d: 'M290 302 h60 l-8 18 h-44 z', fill: 'var(--ink-muted)' });
    var cibo = S(svg, 'path', Object.assign({ d: 'M294 302 q26 -16 52 0 z', fill: '#e2a33a' }, K.pa({ p: 1, f: 3 })));
    persona(svg, 392, 300, { p: 1, f: 3, maglia: 'var(--brand-600)' });
    // calendario e orologio
    var cal = A.box(480, 20, 120, 112, 'nodo'); cal.style.fill = 'var(--surface-000)'; cal.setAttribute('rx', 6);
    S(svg, 'rect', { x: 480, y: 20, width: 120, height: 28, rx: 6, fill: 'var(--errore-ink)' });
    A.txt(540, 40, 'GIORNO', 't-on', {}, 'middle').style.fontSize = '13px';
    var giorni = ['', '1', '50', '300', '24 dic'];
    giorni.forEach(function (g, s) { if (!s) return; var t = A.txt(540, 104, g, s === 4 ? 't-e' : 't', { p: s, f: s }); t.style.fontSize = s === 4 ? '30px' : '40px'; t.style.fontWeight = '800'; });
    A.icona('clock', 652, 62, { s: 40 }); A.txt(652, 108, 'ore 9:00', 't');
    // passo 2: piove, c’è il sole, è domenica: il cibo arriva sempre
    A.icona('cloud-rain', 506, 168, { s: 34, p: 2, f: 2 }); A.icona('sun', 566, 168, { s: 34, tono: 'accent', p: 2, f: 2 }); A.txt(640, 174, 'domenica', 't-m', { p: 2, f: 2 });
    A.txt(590, 210, 'il cibo arriva sempre alle 9', 't-m', { p: 2, f: 2 });
    // fumetto del tacchino
    var fb = A.box(40, 40, 330, 50, 'nodo', { p: 3, f: 3 }); fb.setAttribute('rx', 24); fb.style.fill = 'var(--surface-000)';
    S(svg, 'path', Object.assign({ d: 'M220 90 l14 22 l8 -22 z', fill: 'var(--surface-000)', stroke: 'var(--border-strong)', 'stroke-width': 2 }, K.pa({ p: 3, f: 3 })));
    A.txt(205, 71, '«Ogni giorno alle 9 mi danno da mangiare»', 't', { p: 3, f: 3 });
    // la barra: quanto è sicuro il tacchino
    A.txt(480, 252, 'quanto è sicuro il tacchino', 't-eti', {}, 'start');
    A.box(480, 262, 224, 24, 'nodo').setAttribute('rx', 12);
    [[1, 22], [2, 124], [3, 214]].forEach(function (k) { var b = A.box(482, 264, k[1], 20, 'nodo attivo', { p: k[0], f: k[0] }); b.setAttribute('rx', 10); });
    var crollo = A.box(482, 264, 6, 20, 'nodo', { p: 4 }); crollo.setAttribute('style', 'fill:var(--errore-ink);stroke:none'); crollo.setAttribute('rx', 3);
    // passo 4: niente cibo, la tavola di Natale
    A.txt(160, 140, 'ore 9: il cibo non arriva', 't-e', { p: 4 });
    A.box(480, 146, 224, 80, 'nodo guasto', { p: 4 });
    A.icona('utensils', 520, 186, { s: 36, p: 4 }); A.txt(560, 182, 'il pranzo', 't-e', { p: 4 }, 'start'); A.txt(560, 204, 'di Natale', 't-e', { p: 4 }, 'start');
  });

})();
