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
     o: { maglia, capelli: 'corti'|'coda', berretto: colore, binocolo: 'occhi'|'mano', p, f } */
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
    if (o.berretto) {   // berretto con visiera (guardia)
      E('path', { d: 'M' + (x - 16) + ' ' + (ty - 5) + ' a16 14 0 0 1 32 0 z', fill: o.berretto });
      E('rect', { x: x - 19, y: ty - 7, width: 38, height: 5, rx: 2.5, fill: 'var(--ink)' });
    }
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

  /* ===================== 1.4 · lo stampo del ragionamento ===================== */
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

  /* ===================== 1.2 · una regola, due significati ===================== */
  costruisci('s-binocolo', function (svg, A) {
    var GUARDIA = '#34465f';
    var t = A.txt(360, 30, '«Se vedi un uomo con il binocolo, uccidilo»', 't-b'); t.style.fontSize = '18px';
    A.box(16, 50, 336, 230, 'nodo'); A.box(368, 50, 336, 230, 'nodo');
    // vignetta di sinistra: il binocolo ce l’ha la guardia, l’uomo è lontano oltre il fiume
    S(svg, 'rect', { x: 140, y: 52, width: 70, height: 226, fill: 'var(--brand-100)' });
    S(svg, 'path', { d: 'M150 90 q8 -4 16 0 t16 0 M156 170 q8 -4 16 0 t16 0 M146 240 q8 -4 16 0 t16 0', stroke: 'var(--brand-500)', 'stroke-width': 2, fill: 'none' });
    persona(svg, 80, 262, { berretto: GUARDIA, binocolo: 'occhi', maglia: GUARDIA });
    S(svg, 'path', { d: 'M104 157 L268 200', stroke: 'var(--ink-soft)', 'stroke-width': 2, 'stroke-dasharray': '3 6', fill: 'none' });
    var g = S(svg, 'g', { transform: 'translate(282 262) scale(.62) translate(-282 -262)' });
    persona(g, 282, 262, { maglia: 'var(--accent-500)' });
    // vignetta di destra: la guardia a occhio nudo, l’uomo vicino con il binocolo in mano
    persona(svg, 470, 262, { berretto: GUARDIA, maglia: GUARDIA });
    persona(svg, 600, 262, { binocolo: 'mano', maglia: 'var(--accent-500)' });
    A.txt(184, 304, '«Se, guardando nel binocolo,', 't');
    A.txt(184, 322, 'vedi un uomo, uccidilo»', 't');
    A.txt(536, 304, '«Se vedi un uomo che ha', 't');
    A.txt(536, 322, 'in mano un binocolo, uccidilo»', 't');
    A.txt(184, 346, 'il binocolo ce l’ha la guardia', 't-m');
    A.txt(536, 346, 'il binocolo ce l’ha l’uomo', 't-m');
  });

})();
