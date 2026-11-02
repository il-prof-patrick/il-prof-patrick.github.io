/* Capitolo 1 · Come funziona il Web — schemi, animazioni a passi e widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var cartello = K.cartello, linea = K.linea, croce = K.croce;

  // freccia per gli schemi statici
  function punta(svg, id) {
    var d = S(svg, 'defs'), m = S(d, 'marker', { id: id, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto' });
    S(m, 'path', { d: 'M0 0 L10 5 L0 10 z', fill: 'var(--ink-muted)' });
  }
  // tablet disegnato a mano (nella libreria non c'è)
  function tablet(A, x, y, nome, sotto) {
    var g = A.g({}); g.setAttribute('transform', 'translate(' + x + ',' + y + ')');
    A.box(-20, -26, 40, 52, 'nodo', {}, g).setAttribute('rx', 5); A.box(-16, -21, 32, 40, 'schermo', {}, g);
    var c = S(g, 'circle', { cx: 0, cy: 23, r: 1.8, 'class': 'punto' });
    if (nome) A.txt(x, y + 26 + 16, nome, 't');
    if (sotto) A.txt(x, y + 26 + 31, sotto, 't-m');
  }

  /* ===================== 1.1 · il modello client-server ===================== */
  costruisci('s-clientserver', function (svg, A) {
    punta(svg, 'cs-fr');
    var C = [[85, 48, 'portatile', 'Chrome'], [85, 140, 'telefono', 'Firefox'], [85, 232, 'tablet', 'Safari']];
    C.forEach(function (c) {
      if (c[2] === 'tablet') tablet(A, c[0], c[1], c[3], 'client'); else A.disp(c[2], c[0], c[1], { nome: c[3], sotto: 'client' });
    });
    A.disp('nuvola', 360, 142, { s: 2.3 }); A.txt(360, 192, 'Internet', 't');
    A.disp('armadio', 640, 142, { s: 1.6, nome: 'web server', sotto: 'nel data center' });
    var richieste = [], risposte = [];
    C.forEach(function (c) {
      A.path('M' + (c[0] + 42) + ' ' + (c[1] - 6) + ' L292 128', 'lin att').setAttribute('marker-end', 'url(#cs-fr)');
      A.path('M292 156 L' + (c[0] + 42) + ' ' + (c[1] + 8), 'lin ok').setAttribute('marker-end', 'url(#cs-fr)');
    });
    A.path('M430 128 L598 128', 'lin att').setAttribute('marker-end', 'url(#cs-fr)');
    A.path('M598 158 L430 158', 'lin ok').setAttribute('marker-end', 'url(#cs-fr)');
    A.txt(514, 118, 'richiesta', 't-a'); A.txt(514, 180, 'risposta', 't-b');
  });

  /* ===================== 1.2 · il browser costruisce la pagina ===================== */
  costruisci('f-costruzione', function (svg, A) {
    // finestra del browser
    A.box(20, 14, 320, 206, 'nodo'); A.box(20, 14, 320, 26, 'nodo evid');
    S(svg, 'circle', { cx: 34, cy: 27, r: 3.5, 'class': 'punto' }); S(svg, 'circle', { cx: 46, cy: 27, r: 3.5, 'class': 'punto' }); S(svg, 'circle', { cx: 58, cy: 27, r: 3.5, 'class': 'punto' });
    A.box(72, 20, 190, 14, 'fondo'); A.txt(167, 31, 'scuola.it', 't-s');
    // server
    A.disp('server', 628, 112, { s: 1.5, nome: 'server', sotto: 'scuola.it' });
    A.path('M345 120 L575 120', 'lin');
    // cartella dei file ricevuti
    A.box(14, 252, 348, 52, 'fondo'); A.txt(188, 246, 'file ricevuti dal browser', 't-eti');
    var chip = [['index.html', 20, 1], ['style.css', 104, 3], ['logo.png', 188, 4], ['script.js', 272, 5]];
    chip.forEach(function (c) { A.box(c[1], 266, 80, 26, 'nodo evid', { p: c[2], r: 1400 }); A.txt(c[1] + 40, 283, c[0], 't-s', { p: c[2], r: 1400 }); });
    // vie
    A.via('cc-file', 'M575 112 L360 112 L360 278 L350 278');
    A.via('cc-r1', 'M345 92 L575 92'); A.via('cc-r2', 'M345 120 L575 120'); A.via('cc-r3', 'M345 148 L575 148');
    A.via('cc-a1', 'M575 100 L360 100 L360 278 L350 278');
    A.via('cc-a2', 'M575 120 L360 120 L360 278 L350 278');
    A.via('cc-a3', 'M575 140 L360 140 L360 278 L350 278');
    // 1 · arriva l'HTML
    A.pk('cc-file', { p: 1, d: 1500, f: 1 }, 'index.html', 'pkt-ok');
    // 2 · tre nuove richieste
    A.pk('cc-r1', { p: 2, f: 2, d: 1200 }, 'style.css'); A.pk('cc-r2', { p: 2, f: 2, d: 1200, r: 250 }, 'logo.png'); A.pk('cc-r3', { p: 2, f: 2, d: 1200, r: 500 }, 'script.js');
    // 3 · arriva il CSS: la pagina compare colorata, con il posto vuoto del logo
    A.pk('cc-a1', { p: 3, f: 3, d: 1500 }, 'style.css', 'pkt-ok');
    var P = { p: 3, r: 1500 };
    A.box(21, 41, 318, 40, 'nodo attivo', P); A.txt(180, 66, 'La nostra scuola', 't-on', P);
    A.box(34, 92, 66, 52, 'fondo', Object.assign({}, P)).setAttribute('stroke-dasharray', '4 4');
    A.txt(67, 123, 'logo?', 't-m', { p: 3, f: 3, r: 1500 });
    [[116, 96, 190], [116, 112, 160], [116, 128, 175], [34, 156, 290], [34, 170, 250]].forEach(function (r) { var b = A.box(r[0], r[1], r[2], 8, 'nodo evid', P); b.style.fill = 'var(--ink-soft)'; b.style.stroke = 'none'; b.style.fillOpacity = '.55'; });
    A.box(34, 188, 108, 22, 'nodo', P); A.txt(88, 203, 'Tema scuro', 't-s', P);
    // 4 · arriva il logo
    A.pk('cc-a2', { p: 4, f: 4, d: 1500 }, 'logo.png', 'pkt-ok');
    A.box(34, 92, 66, 52, 'nodo attivo', { p: 4, r: 1500 }); A.icona('image', 67, 118, { s: 28, p: 4, r: 1500 });
    // 5 · arriva lo script, clic sul pulsante, tema scuro
    A.pk('cc-a3', { p: 5, d: 1500 }, 'script.js', 'pkt-ok');
    var Q = { p: 5, r: 2400 };
    var buio = A.box(21, 41, 318, 178, 'nodo', Q); buio.style.fill = '#141b24'; buio.style.stroke = 'none';
    A.box(21, 41, 318, 40, 'nodo', Q).style.fill = '#1f6f66'; A.txt(180, 66, 'La nostra scuola', 't-on', Q);
    A.box(34, 92, 66, 52, 'nodo', Q).style.fill = '#2a3644'; A.icona('image', 67, 118, { s: 28, p: 5, r: 2400 });
    [[116, 96, 190], [116, 112, 160], [116, 128, 175], [34, 156, 290], [34, 170, 250]].forEach(function (r) { var b = A.box(r[0], r[1], r[2], 8, 'nodo', Q); b.style.fill = '#dbe3ec'; b.style.fillOpacity = '.75'; b.style.stroke = 'none'; });
    A.box(34, 188, 108, 22, 'nodo', Q).style.fill = '#2a3644'; A.txt(88, 203, 'Tema chiaro', 't-s', Q).style.fill = '#dbe3ec';
    A.icona('mouse-pointer-click', 160, 204, { s: 30, p: 5, f: 5, tono: 'accent' });
    A.txt(460, 100, 'nessuna nuova richiesta', 't-a', { p: 5, r: 2600 });
  });

  /* ===================== 1.4 · dall'Invio alla pagina ===================== */
  costruisci('f-chiamata', function (svg, A) {
    var L = [80, 150], D = [380, 52], Sv = [640, 150];
    A.disp('portatile', L[0], L[1], { nome: 'portatile' });
    A.box(8, 206, 170, 24, 'nodo'); A.txt(93, 223, 'www.scuola.it', 't-s');
    A.disp('server', D[0], D[1], { s: .8 }); A.txt(D[0] + 38, D[1] - 6, 'server DNS', 't', {}, 'start'); A.icona('book-open', D[0] + 54, D[1] + 22, { s: 22 }); A.txt(D[0] + 70, D[1] + 27, 'rubrica', 't-m', {}, 'start');
    A.disp('server', Sv[0], Sv[1], { s: 1.3 }); A.txt(Sv[0], Sv[1] + 56, 'web server', 't'); A.txt(Sv[0], Sv[1] + 72, 'www.scuola.it', 't-m');
    A.path('M120 150 L596 150', 'lin');
    A.via('ch-dns', 'M112 128 L338 62'); A.via('ch-dnsr', 'M338 62 L112 128');
    A.via('ch-v', 'M120 150 L545 150'); A.via('ch-r', 'M545 150 L190 150');
    A.via('ch-v2', 'M120 150 L596 150'); A.via('ch-r2', 'M596 150 L120 150'); A.via('ch-v3', 'M120 150 L480 150');
    function fum(t, o, cls) { cartello(A, 140, 250, 440, 28, t, cls || 'nodo', o, 't-s'); }
    // 1 · chiede il DNS
    A.pk('ch-dns', { p: 1, f: 1, d: 1100, resta: true }, 'IP?');
    fum('«Qual è l’IP di www.scuola.it?»', { p: 1, f: 1, r: 300 });
    // 2 · il DNS risponde
    S(svg, 'rect', Object.assign({ x: D[0] + 40, y: D[1] + 6, width: 112, height: 34, rx: 3, 'class': 'anello' }, pa({ p: 2, f: 2 })));
    A.pk('ch-dnsr', { p: 2, f: 2, d: 1200, r: 700, resta: true }, '193.205.86.10', 'pkt-ok');
    fum('Il DNS cerca nella rubrica e risponde', { p: 2, f: 2, r: 300 }, 'nodo evid');
    // 3 · GET con il lucchetto
    linea(svg, 'M120 150 L596 150', 'var(--brand-500)', 4, { p: 3, f: 3 }); A.icona('lock', 330, 120, { s: 24, p: 3, f: 3, tono: 'brand' });
    A.pk('ch-v', { p: 3, f: 3, d: 1500, resta: true }, 'GET /index.html');
    fum('La richiesta viaggia cifrata (HTTPS)', { p: 3, f: 3, r: 300 });
    // 4 · il server risponde 200 OK
    A.pk('ch-r', { p: 4, f: 4, d: 1500, resta: true }, '200 OK · index.html', 'pkt-ok');
    fum('Il server cerca il file e risponde «200 OK»', { p: 4, f: 4, r: 300 }, 'nodo evid');
    // 5 · gli altri file e la pagina
    A.pk('ch-v2', { p: 5, f: 5, d: 1100 }, 'style.css'); A.pk('ch-v2', { p: 5, f: 5, d: 1100, r: 500 }, 'logo.png');
    A.pk('ch-r2', { p: 5, f: 5, d: 1100, r: 1300 }, 'CSS', 'pkt-ok'); A.pk('ch-r2', { p: 5, f: 5, d: 1100, r: 1800 }, 'PNG', 'pkt-ok');
    A.box(20, 20, 150, 78, 'nodo attivo', { p: 5, r: 3200 }); A.txt(95, 64, 'pagina disegnata', 't-on', { p: 5, r: 3200 });
    fum('Il browser chiede gli altri file e disegna la pagina', { p: 5, f: 5, r: 300 });
    // 6 · variante: pagina inesistente
    A.box(8, 206, 250, 24, 'nodo evid', { p: 6 }); A.txt(133, 223, '/pagina-che-non-c’è.html', 't-s', { p: 6 });
    A.pk('ch-v3', { p: 6, d: 1200, resta: true }, '/pagina-che-non-c’è.html', 'pkt', 218);
    A.pk('ch-r', { p: 6, d: 1200, r: 1400, resta: true }, '404 Not Found', 'pkt-err');
    fum('Il file non esiste: il server risponde «404»', { p: 6 }, 'nodo guasto');
  });

  /* ===================== 1.4 · sito statico e sito dinamico ===================== */
  costruisci('f-statico', function (svg, A) {
    A.txt(360, 14, 'SITO STATICO', 't-eti'); A.txt(360, 188, 'SITO DINAMICO', 't-eti');
    // corsia statica: un server con lo scaffale dei file già pronti
    A.disp('portatile', 70, 82, {}); A.txt(70, 118, 'Giulia', 't', { f: 4 }); A.txt(70, 118, 'Marco', 't', { p: 5 });
    A.box(450, 30, 250, 112, 'fondo'); A.txt(575, 24, 'server', 't-m');
    [['home', 462], ['profilo', 541], ['contatti', 620]].forEach(function (f) {
      A.box(f[1], 48, 70, 72, 'nodo'); A.txt(f[1] + 35, 88, f[0], 't-s'); A.txt(f[1] + 35, 102, '.html', 't-m');
    });
    A.path('M106 82 L446 82', 'lin');
    A.via('st-v', 'M130 74 L446 74'); A.via('st-r', 'M520 90 L196 90');
    // corsia dinamica: un server con un programma e un database
    A.disp('portatile', 70, 250, {}); A.txt(70, 286, 'Giulia', 't', { f: 4 }); A.txt(70, 286, 'Marco', 't', { p: 5 });
    A.box(380, 204, 320, 108, 'fondo'); A.txt(540, 198, 'server', 't-m');
    A.icona('settings', 440, 244, { s: 34, nome: 'programma' }); A.icona('database', 640, 244, { s: 34, nome: 'database' });
    A.path('M106 250 L376 250', 'lin');
    A.via('dn-v', 'M130 242 L376 242'); A.via('dn-r', 'M376 262 L196 262');
    A.via('dn-db', 'M474 236 L606 236'); A.via('dn-dbr', 'M606 256 L474 256');
    // 1 · la richiesta
    A.pk('st-v', { p: 1, f: 1, d: 1300 }, 'GET /profilo'); A.pk('dn-v', { p: 1, f: 1, d: 1300 }, 'GET /profilo');
    // 2 · il server statico invia il foglio così com'è
    A.box(541, 48, 70, 72, 'nodo evid', { p: 2, f: 2 }); A.txt(576, 88, 'profilo', 't-s', { p: 2, f: 2 }); A.txt(576, 102, '.html', 't-m', { p: 2, f: 2 });
    A.pk('st-r', { p: 2, f: 2, d: 1700, resta: true }, 'profilo.html', 'pkt-ok');
    A.txt(300, 160, 'il file è già pronto: uguale per tutti', 't-b', { p: 2, f: 2, r: 400 });
    // 3 · il server dinamico interroga il database
    S(svg, 'circle', Object.assign({ cx: 440, cy: 244, r: 28, 'class': 'anello' }, pa({ p: 3, f: 3 })));
    A.pk('dn-db', { p: 3, f: 3, d: 1000, r: 200 }, 'Giulia?'); A.pk('dn-dbr', { p: 3, f: 3, d: 1000, r: 1300 }, 'nome, foto', 'pkt-ok');
    A.txt(540, 304, 'legge dal database i dati di Giulia', 't-b', { p: 3, f: 3, r: 400 });
    // 4 · invia la pagina personalizzata
    A.box(150, 274, 200, 28, 'nodo evid', { p: 4, f: 4, r: 1000 }); A.txt(250, 293, 'pagina costruita ora', 't-s', { p: 4, f: 4, r: 1000 });
    A.pk('dn-r', { p: 4, f: 4, d: 1500, r: 1600, resta: true }, 'Ciao Giulia', 'pkt-ok');
    // 5 · Marco: lo statico invia lo stesso foglio, il dinamico ne genera uno nuovo
    A.pk('st-v', { p: 5, d: 1000 }, 'GET /profilo'); A.pk('dn-v', { p: 5, d: 1000 }, 'GET /profilo');
    A.pk('st-r', { p: 5, d: 1500, r: 1100, resta: true }, 'profilo.html', 'pkt-ok'); A.pk('dn-r', { p: 5, d: 1500, r: 1100, resta: true }, 'Ciao Marco', 'pkt-ok');
    A.txt(300, 160, 'lo stesso identico file', 't-b', { p: 5, r: 2600 });
  });

