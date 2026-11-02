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

})();
