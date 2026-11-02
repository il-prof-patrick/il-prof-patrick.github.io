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
