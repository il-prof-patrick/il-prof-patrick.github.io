/* Capitolo 2 · HTML: la struttura — schemi e animazioni a passi */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var cartello = K.cartello, linea = K.linea, croce = K.croce;
  var MONO = 'font-family:var(--font-mono);font-weight:600';

  // testo a spaziatura fissa: ogni carattere occupa cw pixel (serve per allineare etichette e parentesi al codice)
  function codice(A, x, y, pezzi, cw, size, o) {
    var p = x;
    pezzi.forEach(function (z) {
      var t = A.txt(p, y, z[0], z[1] || 't', o || {}, 'start'); t.setAttribute('style', MONO + ';font-size:' + size + 'px;white-space:pre'); t.setAttribute('xml:space', 'preserve'); t.setAttribute('textLength', z[0].length * cw); t.setAttribute('lengthAdjust', 'spacing');
      p += z[0].length * cw;
    });
    return p;
  }
  // parentesi quadra sotto (dir = 1) o sopra (dir = -1) un tratto di codice, con etichetta
  function graffa(A, x1, x2, y, dir, testo, cls, o) {
    A.path('M' + x1 + ' ' + y + ' L' + x1 + ' ' + (y + dir * 8) + ' L' + x2 + ' ' + (y + dir * 8) + ' L' + x2 + ' ' + y, 'lin', o);
    A.txt((x1 + x2) / 2, y + dir * 24 + (dir > 0 ? 0 : -2), testo, cls || 't', o);
  }

  /* ===================== 2.1 · anatomia di un elemento ===================== */
  costruisci('s-elemento', function (svg, A) {
    var cw = 12.6, x0 = 46, y = 100;
    codice(A, x0, y, [['<a ', 't-b'], ['href', 't-a'], ['=', 't'], ['"https://info.cern.ch"', 't-a'], ['>', 't-b'], ['Primo sito', 't'], ['</a>', 't-b']], cw, 21);
    var X = function (c) { return x0 + c * cw; };
    // sopra: nome del tag e attributo
    graffa(A, X(1), X(2), 80, -1, 'nome del tag', 't-b');
    graffa(A, X(3), X(30), 80, -1, 'attributo: nome="valore"', 't-a');
    // sotto: le tre parti dell'elemento
    graffa(A, X(0), X(31), 116, 1, 'tag di apertura', 't-b');
    graffa(A, X(31), X(41), 116, 1, 'contenuto', 't');
    A.path('M' + X(41) + ' 116 L' + X(41) + ' 124 L' + X(45) + ' 124 L' + X(45) + ' 116', 'lin'); A.txt((X(41) + X(45)) / 2 + 20, 152, 'tag di chiusura', 't-b');
    // sotto a tutto: l'elemento
    A.path('M' + X(0) + ' 178 L' + X(0) + ' 190 L' + X(45) + ' 190 L' + X(45) + ' 178', 'lin att');
    A.txt((X(0) + X(45)) / 2, 214, 'elemento = tag di apertura + contenuto + tag di chiusura', 't-a');
  });

  /* ===================== 2.1 · annidare gli elementi ===================== */
  costruisci('f-annidamento', function (svg, A) {
    var cw = 9, x0 = 40;
    // codice corretto, sempre visibile
    A.txt(24, 30, '✓', 't-b'); codice(A, x0, 30, [['<p>', 't-b'], ['Molto ', 't'], ['<strong>', 't-b'], ['importante ', 't'], ['<em>', 't-b'], ['davvero', 't'], ['</em>', 't-b'], ['</strong>', 't-b'], ['</p>', 't-b']], cw, 15);
    // 1 · la scatola p
    A.box(40, 80, 640, 214, 'nodo', { p: 1 }); A.txt(56, 100, 'p', 't-eti', { p: 1 }, 'start'); A.txt(100, 100, 'Molto', 't', { p: 1 }, 'start');
    // 2 · strong ed em
    A.box(58, 112, 604, 170, 'nodo evid', { p: 2 }); A.txt(74, 132, 'strong', 't-eti', { p: 2 }, 'start'); A.txt(160, 132, 'importante', 't', { p: 2, r: 400 }, 'start');
    A.box(76, 146, 568, 124, 'nodo attivo', { p: 2, f: 4, r: 500 }); A.txt(92, 166, 'em', 't-on', { p: 2, f: 4, r: 500 }, 'start'); A.txt(360, 214, 'davvero', 't-on', { p: 2, f: 4, r: 700 });
    // 3 · si chiudono dalla più interna
    S(svg, 'rect', Object.assign({ x: 76, y: 146, width: 568, height: 124, rx: 2, 'class': 'anello' }, pa({ p: 3, f: 3 })));
    S(svg, 'rect', Object.assign({ x: 58, y: 112, width: 604, height: 170, rx: 2, 'class': 'anello' }, pa({ p: 3, f: 3, r: 700 })));
    S(svg, 'rect', Object.assign({ x: 40, y: 80, width: 640, height: 214, rx: 2, 'class': 'anello' }, pa({ p: 3, f: 3, r: 1400 })));
    A.txt(360, 70, 'chiuse nell’ordine: em, strong, p', 't-b', { p: 3, f: 3, r: 1800 });
    // 4 · l'ordine sbagliato
    A.txt(24, 52, '✗', 't-e', { p: 4 }); codice(A, x0, 52, [['<strong>', 't-b'], ['importante ', 't'], ['<em>', 't-b'], ['davvero', 't'], ['</strong>', 't-e'], ['</em>', 't-e']], cw, 15, { p: 4 });
    var g = A.box(76, 146, 600, 124, 'nodo guasto', { p: 4, f: 4, r: 500 }); g.style.fill = 'none'; g.style.strokeWidth = '3';
    A.txt(360, 70, 'em è ancora aperta quando strong si chiude', 't-e', { p: 4, f: 4, r: 800 });
    // 5 · il browser rimedia: chiude em in anticipo e ne apre un'altra
    A.box(76, 146, 410, 124, 'nodo attivo', { p: 5, r: 200 }); A.txt(92, 166, 'em', 't-on', { p: 5, r: 200 }, 'start'); A.txt(280, 214, 'davvero', 't-on', { p: 5, r: 200 });
    var n = A.box(496, 146, 148, 124, 'nodo attivo', { p: 5, r: 900 }); n.style.fillOpacity = '.45'; n.setAttribute('stroke-dasharray', '5 4'); A.txt(512, 166, 'em', 't-b', { p: 5, r: 900 }, 'start'); A.txt(570, 214, '(riaperta)', 't-m', { p: 5, r: 900 });
    A.txt(360, 70, 'il browser chiude em in anticipo e ne apre un’altra', 't-a', { p: 5, r: 1000 });
  });

  /* ===================== 2.4 · blocco e in linea ===================== */
  costruisci('s-blocchi', function (svg, A) {
    function barra(x, y, w) { var b = A.box(x, y, w, 8, 'nodo'); b.style.fill = 'var(--ink-soft)'; b.style.stroke = 'none'; b.style.fillOpacity = '.45'; }
    A.box(20, 8, 680, 40, 'nodo evid'); A.txt(36, 34, 'h1', 't-eti', {}, 'start'); A.txt(684, 34, 'blocco: va a capo e occupa tutta la larghezza', 't-b', {}, 'end');
    A.box(20, 58, 680, 100, 'nodo'); A.txt(36, 76, 'p', 't-eti', {}, 'start'); A.txt(684, 76, 'blocco', 't-b', {}, 'end');
    // riga di testo con elementi in linea
    barra(36, 94, 120); A.box(164, 86, 56, 24, 'nodo attivo'); A.txt(192, 103, 'a', 't-on'); barra(228, 94, 100);
    A.box(336, 86, 86, 24, 'nodo attivo'); A.txt(379, 103, 'strong', 't-on'); barra(430, 94, 80); A.box(518, 86, 44, 24, 'nodo attivo'); A.txt(540, 103, 'em', 't-on'); barra(570, 94, 110);
    barra(36, 124, 220); barra(264, 124, 160); A.txt(684, 142, 'in linea: restano nella riga e occupano solo il loro contenuto', 't-a', {}, 'end');
    A.box(20, 168, 680, 80, 'nodo evid'); A.txt(36, 186, 'ul', 't-eti', {}, 'start'); A.txt(684, 186, 'blocco', 't-b', {}, 'end');
    [0, 1, 2].forEach(function (k) { A.box(52, 196 + k * 17, 12, 8, 'nodo attivo'); barra(74, 196 + k * 17, 150 + k * 40); });
  });

  /* ===================== 2.6 · leggere un percorso relativo ===================== */
  costruisci('f-percorso', function (svg, A) {
    var riga = { sito: 40, indice: 74, img: 108, logo: 142, ricette: 176, primi: 210, dolci: 244 };
    function voce(x, y, ic, nome, ev) { A.icona(ic, x, y, { s: 20 }); A.txt(x + 18, y + 5, nome, 't-mono', {}, 'start'); }
    voce(36, riga.sito, 'folder', 'mio-sito/'); voce(66, riga.indice, 'file', 'index.html'); voce(66, riga.img, 'folder', 'img/');
    voce(96, riga.logo, 'image', 'logo.png'); voce(66, riga.ricette, 'folder', 'ricette/'); voce(96, riga.primi, 'file', 'primi.html'); voce(96, riga.dolci, 'file', 'dolci.html');
    A.path('M36 52 L36 252 M36 74 L56 74 M36 108 L56 108 M66 120 L66 142 L86 142 M36 176 L56 176 M66 188 L66 244 M66 210 L86 210 M66 244 L86 244', 'lin').setAttribute('stroke-dasharray', '3 4');
    // l'omino: parte dalla cartella ricette, dove si trova primi.html
    function omino(y, o) { A.icona('map-pin', 214, y, Object.assign({ s: 26, tono: 'accent' }, o)); }
    A.txt(230, riga.primi + 5, '', 't');
    omino(riga.ricette, { f: 0 }); omino(riga.sito, { p: 1, f: 1 }); omino(riga.img, { p: 2, f: 2 }); omino(riga.logo, { p: 3, f: 3 }); omino(riga.ricette, { p: 4 });
    A.txt(244, riga.ricette + 5, 'sei qui: il link è in primi.html', 't-a', { f: 0 }, 'start');
    // il percorso, un pezzo alla volta
    A.txt(390, 20, 'il link scritto in primi.html', 't-eti', {}, 'start');
    var cw = 14.4, x0 = 410, y = 74;
    function pezzo(t, c0, p) {
      var w = t.length * cw; A.box(x0 + c0 * cw - 4, y - 26, w + 8, 38, 'nodo evid', { p: p, f: p });
      var tx = A.txt(x0 + c0 * cw, y, t, 't', {}, 'start'); tx.setAttribute('style', MONO + ';font-size:24px;white-space:pre'); tx.setAttribute('textLength', t.length * cw); tx.setAttribute('lengthAdjust', 'spacing');
    }
    A.box(x0 - 14, y - 34, 4 * cw + 3 * cw + 8 * cw + 28, 52, 'fondo');
    pezzo('../', 0, 1); pezzo('img/', 3, 2); pezzo('logo.png', 7, 3);
    A.txt(x0 + 7.5 * cw, y + 36, '', 't');
    A.txt(550, 124, 'sali di un livello', 't-b', { p: 1, f: 1 }); A.txt(550, 124, 'entra in img', 't-b', { p: 2, f: 2 }); A.txt(550, 124, 'il file c’è', 't-b', { p: 3, f: 3 });
    A.icona('circle-check', 640, 180, { s: 34, tono: 'brand', p: 3, f: 3 });
    // 4 · errore: manca ../
    A.txt(470, 168, 'senza ../', 't-eti', { p: 4 }, 'start');
    var t2 = A.txt(470, 204, 'img/logo.png', 't', { p: 4 }, 'start'); t2.setAttribute('style', MONO + ';font-size:24px'); t2.setAttribute('textLength', 12 * 14.4); t2.setAttribute('lengthAdjust', 'spacing');
    A.box(244, riga.ricette + 12, 196, 24, 'nodo guasto', { p: 4 }); A.txt(342, riga.ricette + 29, 'ricette/img/ non esiste', 't-e', { p: 4 });
    A.icona('image-off', 640, 250, { s: 38, tono: 'errore', p: 4 }); A.txt(560, 256, 'immagine rotta', 't-e', { p: 4 }, 'end');
  });

  /* ===================== 2.8 · celle unite ===================== */
  costruisci('s-celleunite', function (svg, A) {
    var X = [110, 270, 430], W3 = 160, Y = [18, 66, 114, 162], H = 48;
    function cella(c, r, wc, hr, testo, cls, tcls) { A.box(X[c], Y[r], W3 * wc, H * hr, cls || 'nodo'); A.txt(X[c] + W3 * wc / 2, Y[r] + H * hr / 2 + 5, testo, tcls || 't'); }
    // la griglia sotto, tratteggiata
    for (var r = 0; r < 4; r++) for (var c = 0; c < 3; c++) { var g = A.box(X[c], Y[r], W3, H, 'fondo'); g.setAttribute('stroke-dasharray', '4 4'); }
    ['Giorno', 'Mattina', 'Pomeriggio'].forEach(function (t, c) { cella(c, 0, 1, 1, t, 'nodo evid', 't-b'); });
    cella(0, 1, 1, 1, 'Lunedì'); cella(1, 1, 2, 1, 'Gita a Firenze (tutto il giorno)', 'nodo attivo', 't-on');
    cella(0, 2, 1, 2, 'Martedì e mercoledì', 'nodo attivo', 't-on'); cella(1, 2, 1, 1, 'Lezione'); cella(2, 2, 1, 1, 'Laboratorio'); cella(1, 3, 1, 1, 'Lezione'); cella(2, 3, 1, 1, 'Libero');
    // i quadretti coperti
    function coperto(x, y) { A.path('M' + (x + 8) + ' ' + (y + 8) + ' L' + (x + 152) + ' ' + (y + 40) + ' M' + (x + 152) + ' ' + (y + 8) + ' L' + (x + 8) + ' ' + (y + 40), 'lin').setAttribute('stroke-opacity', '.35'); }
    A.txt(X[2] + W3 + 8, Y[1] + 28, 'non si scrive', 't-m', {}, 'start'); A.path('M' + (X[2] + 8) + ' ' + (Y[1] + 24) + ' L' + (X[2] + W3 - 8) + ' ' + (Y[1] + 24), 'lin').setAttribute('stroke-opacity', '0');
    A.txt(X[0] - 8, Y[3] + 28, 'non si scrive', 't-m', {}, 'end');
    A.txt(X[1] + W3, 232, 'colspan="2": una cella su due colonne  ·  rowspan="2": una cella su due righe', 't-a');
  });

  /* ===================== 2.9 · GET e POST ===================== */
  costruisci('f-getpost', function (svg, A) {
    // la finestra del browser con il modulo
    A.box(20, 44, 332, 190, 'nodo'); A.box(20, 14, 332, 26, 'nodo evid');
    A.txt(32, 31, 'scuola.it/login', 't-s', { f: 0 }, 'start');
    A.txt(32, 31, 'scuola.it/login', 't-s', { p: 3 }, 'start');
    var lungo = A.txt(32, 31, 'scuola.it/login?nome=Luca&password=gatto99', 't-e', { p: 1, f: 2 }, 'start');
    A.txt(40, 74, 'nome', 't-m', {}, 'start'); A.box(40, 80, 292, 26, 'fondo'); A.txt(50, 98, 'Luca', 't-s', {}, 'start');
    A.txt(40, 128, 'password', 't-m', {}, 'start'); A.box(40, 134, 292, 26, 'fondo'); A.txt(50, 152, 'gatto99', 't-s', {}, 'start');
    A.box(40, 182, 100, 30, 'nodo attivo'); A.txt(90, 202, 'Invia', 't-on');
    A.disp('server', 632, 120, { s: 1.5, nome: 'server', sotto: 'scuola.it' });
    A.path('M358 120 L580 120', 'lin');
    A.via('gp-v', 'M362 120 L525 120');
    // cronologia
    A.box(20, 252, 300, 56, 'nodo', { p: 2 }); A.txt(32, 270, 'cronologia del browser', 't-eti', { p: 2 }, 'start');
    A.txt(32, 292, '…/login?nome=Luca&password=gatto99', 't-e', { p: 2 }, 'start');
    // 1 · GET
    A.txt(450, 80, 'dati nell’indirizzo', 't-e', { p: 1, f: 2 });
    A.pk('gp-v', { p: 1, f: 1, d: 1300 }, '?password=gatto99');
    // 2 · la busta con l'indirizzo completo
    A.pk('gp-v', { p: 2, f: 2, d: 1500, resta: true }, '?password=gatto99');
    // 3 · POST: dati dentro la busta chiusa
    A.icona('mail', 450, 80, { s: 30, tono: 'brand', p: 3, f: 3 }); A.txt(450, 140, 'dati dentro la busta', 't-b', { p: 3, f: 3 });
    A.pk('gp-v', { p: 3, f: 3, d: 1500, resta: true }, 'POST /login', 'pkt-ok');
    // 4 · senza HTTPS si legge lo stesso, con HTTPS no
    A.pk('gp-v', { p: 4, f: 4, d: 1300 }, 'gatto99', 'pkt-err');
    A.txt(450, 150, 'senza HTTPS si legge lo stesso', 't-e', { p: 4, f: 4, r: 1400 });
    A.icona('lock', 450, 90, { s: 30, tono: 'brand', p: 4, r: 2600 }); linea(svg, 'M358 120 L580 120', 'var(--brand-500)', 4, { p: 4, r: 2600 });
    A.txt(450, 168, 'con HTTPS è cifrato', 't-b', { p: 4, r: 2600 });
  });

  /* ===================== 2.11 · la struttura semantica ===================== */
  costruisci('s-semantica', function (svg, A) {
    A.txt(210, 14, 'CON I TAG SEMANTICI', 't-eti'); A.txt(585, 14, 'SOLO CON DIV', 't-eti');
    // a sinistra: la pagina con i ruoli
    A.box(20, 24, 380, 52, 'nodo attivo'); A.txt(36, 46, 'header', 't-on', {}, 'start'); A.box(190, 36, 196, 28, 'nodo evid'); A.txt(288, 55, 'nav', 't-b');
    A.box(20, 84, 380, 188, 'nodo evid'); A.txt(36, 104, 'main', 't-b', {}, 'start');
    A.box(34, 114, 250, 70, 'nodo'); A.txt(46, 132, 'article', 't-eti', {}, 'start'); A.box(46, 140, 110, 34, 'fondo'); A.txt(101, 162, 'section', 't-s'); A.box(164, 140, 110, 34, 'fondo'); A.txt(219, 162, 'section', 't-s');
    A.box(34, 192, 250, 70, 'nodo'); A.txt(46, 210, 'article', 't-eti', {}, 'start'); A.box(46, 218, 110, 34, 'fondo'); A.txt(101, 240, 'section', 't-s'); A.box(164, 218, 110, 34, 'fondo'); A.txt(219, 240, 'section', 't-s');
    A.box(294, 114, 92, 148, 'nodo'); A.txt(340, 192, 'aside', 't-b');
    A.box(20, 280, 380, 32, 'nodo attivo'); A.txt(36, 301, 'footer', 't-on', {}, 'start');
    // a destra: solo div, tutti uguali
    function d(x, y, w, h) { var b = A.box(x, y, w, h, 'fondo'); A.txt(x + w / 2, y + h / 2 + 5, 'div', 't-m'); }
    d(440, 24, 260, 52); d(440, 84, 170, 90); d(440, 182, 170, 90); d(620, 84, 80, 188); d(440, 280, 260, 32);
  });

  /* ===================== 2.12 · come si appare su Google ===================== */
  costruisci('s-google', function (svg, A) {
    // il risultato di ricerca
    A.box(16, 20, 380, 150, 'nodo');
    A.txt(32, 46, 'www.liceospinelli.it › calcetto', 't-s', {}, 'start');
    A.txt(32, 76, 'Torneo di calcetto 2026 – Liceo Spinelli', 't-b', {}, 'start').setAttribute('style', 'font-size:17px;font-weight:600');
    A.txt(32, 104, 'Regolamento, calendario delle partite e iscrizioni al', 't-m', {}, 'start'); A.txt(32, 124, 'torneo di calcetto delle classi del triennio. Iscrizioni', 't-m', {}, 'start'); A.txt(32, 144, 'entro il 30 novembre.', 't-m', {}, 'start');
    // il codice
    A.box(430, 20, 274, 150, 'fondo');
    A.txt(442, 44, '<head>', 't-mono', {}, 'start'); A.txt(456, 74, '<title>…</title>', 't-mono t-b', {}, 'start'); A.txt(456, 104, '<meta name="description"', 't-mono t-a', {}, 'start'); A.txt(456, 122, '  content="…">', 't-mono t-a', {}, 'start'); A.txt(442, 154, '</head>', 't-mono', {}, 'start');
    // collegamenti
    A.path('M398 72 L452 72', 'lin ok'); A.path('M398 114 L452 114', 'lin att');
    A.txt(210, 196, 'il title diventa il titolo blu', 't-b'); A.txt(210, 216, 'la meta description, il testo grigio', 't-a');
    A.txt(210, 236, 'l’indirizzo è l’URL della pagina', 't-m');
  });

})();
