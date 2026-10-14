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

  /* ===================== Prova tu · e se spegnessi un linguaggio? ===================== */
  // Il mini sito è una pagina vera, in un iframe isolato (sandbox): i tre pezzi sono stringhe separate
  // e la pagina viene ricomposta ogni volta con solo i linguaggi accesi.
  var SITO_HTML = [
    '<header class="top"><a class="logo" href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M7 2v3M11 2v3M15 2v3"/></svg>Bottega Aurora</a>',
    '<nav><a href="#menu">Menu</a><a href="#dove">Dove siamo</a><a href="#dove">Contatti</a></nav>',
    '<div class="azioni"><button id="tema" type="button">Tema scuro</button><button id="carrello" type="button">Ordine: <span id="n">0</span></button></div></header>',
    '<section class="hero"><h1>Il caffè che ti sveglia il buonumore</h1><p>Torrefazione artigianale e dolci freschi ogni mattina, a due passi da scuola.</p><a class="cta" href="#menu">Guarda il menu</a></section>',
    '<main><h2 id="menu">Il menu di oggi</h2>',
    '<div class="filtri"><button type="button" data-f="tutti" class="on">Tutti</button><button type="button" data-f="caffe">Caffè</button><button type="button" data-f="dolci">Dolci</button></div>',
    '<ul class="griglia">',
    // categoria, nome, descrizione, prezzo, tracciato dell'icona
    [['caffe', 'Espresso', 'Corto, intenso, con la sua crema.', '1,20 €', 'M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4ZM7 2v3M11 2v3M15 2v3'],
     ['caffe', 'Cappuccino', 'Latte montato e una spolverata di cacao.', '1,80 €', 'M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4ZM7 2v3M11 2v3'],
     ['caffe', 'Tè matcha', 'Verde, vellutato, con latte d’avena.', '3,00 €', 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10ZM2 21c0-3 1.9-5.5 6-7 4-1.5 7-1.5 9-3'],
     ['dolci', 'Cornetto', 'Sfogliato, caldo di forno, alla crema.', '1,50 €', 'M3 15c2-7 7-11 13-12 2 0 3 1 3 3-1 6-5 11-12 13-3 .5-5-1.5-4-4ZM8 8l3 3M11 6l3 3'],
     ['dolci', 'Tiramisù', 'Fatto ogni mattina, con mascarpone vero.', '4,50 €', 'M3 11h18v9H3ZM3 11l3-7h12l3 7M8 15h.01M13 15h.01M17 17h.01'],
     ['dolci', 'Brownie', 'Cioccolato fondente e noci, ancora morbido.', '3,20 €', 'M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM4 9l2-5h12l2 5M9 14h.01M14 16h.01M15 12h.01']].map(function (c) {
      return '<li class="card" data-c="' + c[0] + '"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="' + c[4] + '"/></svg><h3>' + c[1] + '</h3><p>' + c[2] + '</p><div class="riga"><b>' + c[3] + '</b><button class="add" type="button">Aggiungi</button></div></li>';
    }).join(''),
    '</ul></main>',
    '<footer id="dove"><b>Via dei Mille 12</b> · aperti dalle 7:00 alle 19:00 · <a href="#menu">torna al menu</a></footer>'
  ].join('\n');

  var SITO_CSS = [
    ':root{--bg:#fffaf3;--card:#fff;--ink:#2a1e16;--mut:#7a6a5c;--acc:#c8541e;--line:#ecdfd0;--h1:#ffd9a8;--h2:#ff9d6c;--hi:#3b1d0e}',
    '[data-t=scuro]{--bg:#171210;--card:#241c18;--ink:#f6ece2;--mut:#b8a595;--acc:#ff8a4c;--line:#3a2d26;--h1:#4a2616;--h2:#8a3f1c;--hi:#fff1e4}',
    '*{box-sizing:border-box}',
    'body{margin:0;font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);color:var(--ink);transition:background .3s,color .3s}',
    '.top{position:sticky;top:0;z-index:2;display:flex;align-items:center;flex-wrap:wrap;gap:8px 18px;padding:10px 18px;background:var(--bg);border-bottom:1px solid var(--line)}',
    '.logo{display:flex;align-items:center;gap:8px;font-weight:800;color:var(--acc);text-decoration:none}',
    'nav{display:flex;gap:16px;margin-right:auto}nav a{color:var(--mut);font-weight:600;text-decoration:none;transition:color .15s}nav a:hover{color:var(--acc)}',
    '.azioni{display:flex;gap:8px}button{font:inherit;cursor:pointer}',
    '.azioni button,.filtri button{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:5px 14px;font-weight:600;transition:background .15s,color .15s,transform .15s}',
    '.azioni button:hover,.filtri button:hover{border-color:var(--acc)}',
    '#carrello.pop{transform:scale(1.12);background:var(--acc);color:#fff}',
    '.hero{padding:34px 18px;text-align:center;color:var(--hi);background:linear-gradient(135deg,var(--h1),var(--h2))}',
    '.hero h1{margin:0 0 8px;font-size:clamp(24px,5vw,34px);line-height:1.15}.hero p{margin:0 auto;max-width:34em}',
    '@media(min-width:700px){.hero{padding:20px 18px 22px}.hero h1{font-size:28px}}',
    '.cta{display:inline-block;margin-top:14px;padding:9px 22px;border-radius:999px;background:var(--hi);color:var(--h1);font-weight:700;text-decoration:none;transition:transform .15s}',
    '.cta:hover{transform:translateY(-2px)}',
    'main{padding:18px 18px 8px}h2{margin:0 0 10px;font-size:20px}',
    '.filtri{display:flex;gap:8px;margin-bottom:14px}.filtri .on{background:var(--acc);border-color:var(--acc);color:#fff}',
    '.griglia{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}',
    '.card{padding:14px;background:var(--card);border:1px solid var(--line);border-radius:14px;transition:transform .2s,box-shadow .2s}',
    '.card:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.14)}',
    '.card svg{color:var(--acc)}.card h3{margin:6px 0 2px;font-size:16px}.card p{margin:0 0 10px;color:var(--mut);font-size:13px;line-height:1.4}',
    '.riga{display:flex;align-items:center;justify-content:space-between;gap:8px}',
    '.add{border:0;border-radius:999px;padding:5px 12px;background:var(--acc);color:#fff;font-weight:700;font-size:13px;transition:filter .15s}.add:hover{filter:brightness(1.12)}',
    'footer{padding:16px 18px 20px;color:var(--mut);font-size:13px}footer a{color:var(--acc)}'
  ].join('\n');

  var SITO_JS = [
    'var n=0,num=document.getElementById("n"),car=document.getElementById("carrello");',
    'document.addEventListener("click",function(e){if(e.target.closest("a"))e.preventDefault();});',
    '[].forEach.call(document.querySelectorAll(".add"),function(b){b.onclick=function(){n++;num.textContent=n;car.classList.add("pop");setTimeout(function(){car.classList.remove("pop");},220);',
    ' b.textContent="Aggiunto";setTimeout(function(){b.textContent="Aggiungi";},900);};});',
    '[].forEach.call(document.querySelectorAll(".filtri button"),function(f){f.onclick=function(){',
    ' [].forEach.call(document.querySelectorAll(".filtri button"),function(x){x.classList.toggle("on",x===f);});',
    ' [].forEach.call(document.querySelectorAll(".card"),function(c){c.hidden=f.dataset.f!=="tutti"&&c.dataset.c!==f.dataset.f;});};});',
    'var tema=document.getElementById("tema");tema.onclick=function(){var s=document.documentElement.dataset.t==="scuro";',
    ' document.documentElement.dataset.t=s?"":"scuro";tema.textContent=s?"Tema scuro":"Tema chiaro";};'
  ].join('\n');

  W.registra('linguaggi', function (el) {
    var b = W.base(el, 'Prova tu · e se spegnessi un linguaggio?', 'clicca HTML, CSS, JavaScript');
    var acceso = { html: true, css: true, js: true };
    var voci = [['html', 'HTML', 'struttura'], ['css', 'CSS', 'aspetto'], ['js', 'JavaScript', 'comportamento']];
    b.ctrl.className = 'wid-ling';
    var frame = W.h('iframe', { title: 'Anteprima della pagina web', sandbox: 'allow-scripts', loading: 'lazy' });
    var barra = W.h('div', { 'class': 'barra' }, [W.h('i'), W.h('i'), W.h('i'), W.h('span', { 'class': 'indirizzo', testo: 'https://www.bottegaaurora.it' })]);
    b.ctrl.appendChild(W.h('div', { 'class': 'quadro' }, [barra, frame]));
    var tasti = W.h('div', { 'class': 'wid-ling-tasti', role: 'group', 'aria-label': 'Linguaggi della pagina' });
    var bt = {};
    voci.forEach(function (v) {
      var t = W.h('button', { 'class': 'tasto', type: 'button', 'aria-pressed': 'true' }, [W.h('b', { testo: v[1] }), W.h('span', { testo: v[2] + ' · acceso' })]);
      t.onclick = function () { acceso[v[0]] = !acceso[v[0]]; disegna(); };
      bt[v[0]] = t; tasti.appendChild(t);
    });
    b.ctrl.appendChild(tasti);
    b.chiudi();
    function dica(t, tono) { b.stato.textContent = t; b.stato.className = 'stato passi-desc' + (tono ? ' ' + tono : ''); }
    function disegna() {
      voci.forEach(function (v) {
        bt[v[0]].setAttribute('aria-pressed', String(acceso[v[0]]));
        bt[v[0]].lastChild.textContent = v[2] + (acceso[v[0]] ? ' · acceso' : ' · spento');
      });
      var doc = '<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bottega Aurora</title>' +
        (acceso.html && acceso.css ? '<style>' + SITO_CSS + '</style>' : '') + '</head><body style="margin:0">' +
        (acceso.html ? SITO_HTML : '') +
        (acceso.html && acceso.js ? '<script>' + SITO_JS + '<\/script>' : '') + '</body></html>';
      frame.srcdoc = doc;
      if (!acceso.html) dica('Senza HTML non c’è niente da mostrare: CSS e JavaScript descrivono come si vede e come si comporta una pagina, ma qui non c’è nessun elemento a cui applicarsi. Un arredamento e un impianto elettrico senza muri.', 'att');
      else if (acceso.css && acceso.js) dica('Tutti e tre accesi: una pagina moderna, bella e interattiva. Prova i filtri, il pulsante «Aggiungi» e il tema scuro.', 'ok');
      else if (!acceso.css && acceso.js) dica('Senza CSS la struttura c’è e tutto funziona (prova i filtri e il carrello), ma il browser usa l’aspetto di base: niente colori, niente impaginazione. La casa ha i muri e la luce, ma è spoglia.', 'att');
      else if (acceso.css && !acceso.js) dica('Senza JavaScript la pagina è bella ma ferma: i filtri, il carrello e il tema scuro non rispondono. La casa è arredata, ma manca l’impianto elettrico.', 'att');
      else dica('Solo HTML: titoli, testi, elenchi e pulsanti ci sono, ma senza aspetto e senza comportamento. Così erano le prime pagine del Web.', 'att');
    }
    disegna();
  });

})();
