/* Capitolo 3 · Come comunicano i computer: indirizzi e protocolli — animazioni a passi e widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var croce = K.croce, linea = K.linea, cartello = K.cartello;
  var VERDE = ['var(--brand-100)', 'var(--brand-600)'], BLU = ['#dceaf7', '#2e86c1'], GIALLO = ['var(--accent-100)', 'var(--accent-500)'], GRIGIO = ['var(--surface-200)', 'var(--border-strong)'];

  /* un pacchetto fatto a strati: segmenti affiancati [testo, colori, larghezza] */
  function busta(A, svg, x, y, seg, o, h) {
    h = h || 34; var g = A.g(o), xx = x;
    seg.forEach(function (s) {
      var w = s[2] || 44;
      S(g, 'rect', { x: xx, y: y, width: w, height: h, rx: 2, fill: s[1][0], stroke: s[1][1], 'stroke-width': 1.5 });
      S(g, 'text', { x: xx + w / 2, y: y + h / 2 + 4, 'text-anchor': 'middle', 'class': 't-s', style: 'font-size:11px' }, s[0]);
      xx += w;
    });
    return g;
  }
  var TESTO = ['“Ci vediamo alle 5?”', ['var(--surface-000)', 'var(--border-strong)'], 128];
  var APP = ['app', GRIGIO], PORTA = ['porta', GIALLO], IP = ['IP L→S', BLU], MAC = ['MAC', VERDE];

  /* ===================== 3.2 · incapsulamento ===================== */
  costruisci('f-incapsulamento', function (svg, A) {
    var LIV = ['Applicazione', 'Trasporto', 'Internet', 'Accesso'], Y = [62, 112, 162, 212];
    function pila(x, nome) {
      A.txt(x + 60, 26, nome, 't-b'); A.disp('telefono', x + 60 - 70, 30, { s: .45 });
      LIV.forEach(function (l, k) { A.box(x, Y[k], 120, 40, 'nodo'); A.txt(x + 60, Y[k] + 25, l, 't-s'); });
    }
    pila(20, 'Luca'); pila(580, 'Sara');
    // cavo e router
    A.path('M80 252 L80 292 L320 292'); A.path('M400 292 L640 292 L640 252');
    S(svg, 'circle', { cx: 360, cy: 290, r: 26, 'class': 'nodo-sfondo' }); A.disp('router', 360, 296, { s: .7 }); A.txt(360, 326, 'router', 't-s');
    // 0 · il messaggio in cima a Luca
    busta(A, svg, 150, Y[0] + 3, [TESTO], { f: 0 });
    // 1–4 · il messaggio scende e si veste
    busta(A, svg, 150, Y[0] + 3, [APP, TESTO], { p: 1, f: 1 });
    busta(A, svg, 150, Y[1] + 3, [PORTA, APP, TESTO], { p: 2, f: 2 });
    busta(A, svg, 150, Y[2] + 3, [IP, PORTA, APP, TESTO], { p: 3, f: 3 });
    busta(A, svg, 150, Y[3] + 3, [MAC, IP, PORTA, APP, TESTO], { p: 4, f: 4 });
    A.txt(150, Y[0] - 4, 'aggiunge l’intestazione dell’app', 't-m', { p: 1, f: 1 }, 'start');
    A.txt(150, Y[1] - 4, 'busta gialla: la porta di destinazione', 't-a', { p: 2, f: 2 }, 'start');
    A.txt(150, Y[2] - 4, 'busta blu: gli indirizzi IP di Luca e Sara', 't-s', { p: 3, f: 3 }, 'start');
    A.txt(150, Y[3] - 4, 'busta verde: gli indirizzi MAC', 't-b', { p: 4, f: 4 }, 'start');
    A.via('inc1', 'M80 252 L80 292 L320 292');
    A.pk('inc1', { p: 4, f: 4, r: 900, d: 1500, resta: true }, '010110…');
    // 5 · il router apre solo la busta verde e legge la blu
    busta(A, svg, 268, 236, [['MAC', ['var(--errore-bg)', 'var(--errore-ink)']], ['IP L→S', BLU], ['…', GRIGIO, 30]], { p: 5, f: 5 }, 26);
    S(svg, 'rect', Object.assign({ x: 310, y: 232, width: 52, height: 34, rx: 3, 'class': 'anello' }, pa({ p: 5, f: 5, r: 700 })));
    A.txt(360, 222, 'legge l’IP: va a Sara', 't-s', { p: 5, f: 5, r: 700 });
    busta(A, svg, 268, 236, [['MAC nuovo', VERDE, 42], ['IP L→S', BLU], ['…', GRIGIO, 30]], { p: 5, f: 5, r: 1700 }, 26);
    A.via('inc2', 'M400 292 L640 292 L640 252');
    A.pk('inc2', { p: 5, f: 5, r: 2200, d: 1300, resta: true }, '010110…');
    // 6 · Sara: ogni ripiano toglie la sua busta
    busta(A, svg, 274, Y[3] + 3, [MAC, IP, PORTA, APP, TESTO], { p: 6, f: 6 });
    busta(A, svg, 318, Y[2] + 3, [IP, PORTA, APP, TESTO], { p: 6, r: 700 });
    busta(A, svg, 362, Y[1] + 3, [PORTA, APP, TESTO], { p: 6, r: 1400 });
    busta(A, svg, 406, Y[0] + 3, [APP, TESTO], { p: 6, r: 2100 });
    S(svg, 'rect', Object.assign({ x: 452, y: 28, width: 124, height: 26, rx: 3, 'class': 'nodo evid' }, pa({ p: 6, r: 2800 })));
    A.txt(514, 46, '“Ci vediamo alle 5?”', 't-b', { p: 6, r: 2800 });
  });

  /* ===================== 3.4 · DHCP ===================== */
  costruisci('f-dhcp', function (svg, A) {
    A.disp('casa', 360, 22, { s: .5 }); A.txt(360, 54, 'rete di casa · 192.168.1.…', 't-eti');
    A.disp('telefono', 110, 150, {}); A.txt(110, 196, 'telefono', 't');
    S(svg, 'circle', Object.assign({ cx: 140, cy: 122, r: 13, 'class': 'nodo guasto' }, pa({ f: 3 }))); A.txt(140, 127, '?', 't-e', { f: 3 });
    A.txt(110, 216, 'senza indirizzo', 't-m', { f: 3 });
    A.txt(110, 216, 'IP 192.168.1.4', 't-b', { p: 4, r: 1300 });
    S(svg, 'circle', { cx: 500, cy: 150, r: 34, 'class': 'nodo-sfondo' }); A.disp('router', 500, 158, {}); A.txt(500, 196, 'router (server DHCP)', 't');
    A.txt(640, 74, 'INDIRIZZI LIBERI', 't-eti');
    ['.2', '.3', '.4', '.5', '.6'].forEach(function (a, k) { A.box(605, 86 + k * 32, 70, 26, 'nodo'); A.txt(640, 104 + k * 32, a, 't-mono'); });
    A.box(605, 150, 70, 26, 'nodo evid', { p: 2, f: 3, r: 1100 }); A.txt(640, 168, '.4 ?', 't-b', { p: 2, f: 3, r: 1100 });
    A.box(605, 150, 70, 26, 'nodo guasto', { p: 4, r: 1200 }); A.txt(640, 168, '.4 ✓', 't-e', { p: 4, r: 1200 });
    A.icona('hourglass', 692, 163, { s: 18, p: 4, r: 1200, tono: 'accent' }); A.txt(690, 262, 'in prestito per un certo tempo', 't-a', { p: 4, r: 1400 }, 'end');
    A.path('M140 150 L466 150');
    A.via('dh1', 'M140 150 L466 150'); A.via('dh2', 'M466 150 L140 150');
    // 1 · scoperta in broadcast
    [30, 52, 74].forEach(function (r, k) { S(svg, 'circle', Object.assign({ cx: 110, cy: 150, r: r, fill: 'none', stroke: 'var(--accent-500)', 'stroke-width': 2, 'stroke-opacity': .7 }, pa({ p: 1, f: 1, r: k * 250 }))); });
    A.pk('dh1', { p: 1, f: 1, d: 1300, r: 500, resta: true }, 'scoperta');
    cartello(A, 170, 92, 220, 30, '«C’è un server DHCP?» (a tutti)', 'nodo', { p: 1, f: 1, r: 300 }, 't-s');
    // 2 · offerta
    A.pk('dh2', { p: 2, f: 2, d: 1300, resta: true }, 'offerta');
    cartello(A, 170, 92, 220, 30, '«Ti propongo 192.168.1.4»', 'nodo', { p: 2, f: 2, r: 300 }, 't-s');
    // 3 · richiesta
    A.pk('dh1', { p: 3, f: 3, d: 1300, resta: true }, 'richiesta');
    cartello(A, 170, 92, 220, 30, '«Accetto 192.168.1.4»', 'nodo', { p: 3, f: 3, r: 300 }, 't-s');
    // 4 · conferma con router e DNS
    A.pk('dh2', { p: 4, d: 1300, resta: true }, 'conferma', 'pkt-ok');
    cartello(A, 150, 84, 270, 46, '', 'nodo evid', { p: 4, r: 300 });
    A.txt(285, 102, '«OK: 192.168.1.4', 't-b', { p: 4, r: 300 }); A.txt(285, 120, 'router 192.168.1.1 · DNS 192.168.1.1»', 't-s', { p: 4, r: 300 });
  });

  /* ===================== 3.5 · DNS ===================== */
  costruisci('f-dns', function (svg, A) {
    var L = [80, 250], D = [300, 250], SV = { r: [330, 70], o: [480, 110], w: [630, 150] };
    // gradini
    A.path('M250 92 L410 92 L410 132 L560 132 L560 172 L712 172', 'lin');
    A.disp('server', SV.r[0], SV.r[1], { s: .6 }); A.txt(SV.r[0], 30, 'radice «.»', 't');
    A.disp('server', SV.o[0], SV.o[1], { s: .6 }); A.txt(SV.o[0], 70, 'server di .org', 't');
    A.disp('server', SV.w[0], SV.w[1], { s: .6 }); A.txt(SV.w[0], 110, 'wikipedia.org', 't');
    A.disp('portatile', L[0], L[1], {}); A.txt(L[0], L[1] + 36, 'portatile', 't');
    A.box(14, 186, 132, 24, 'nodo'); A.txt(80, 203, 'www.wikipedia.org', 't-s');
    S(svg, 'circle', { cx: D[0], cy: D[1], r: 30, 'class': 'nodo-sfondo' }); A.disp('server', D[0], D[1], { s: .7, attivo: true }); A.txt(D[0], D[1] + 44, 'DNS dell’operatore', 't');
    A.icona('notebook-pen', 400, 258, { s: 24 }); A.txt(420, 250, 'CACHE', 't-eti', {}, 'start');
    A.txt(420, 270, 'vuota', 't-m', { f: 4 }, 'start');
    A.txt(420, 270, 'wikipedia.org → 185.15.58.224', 't-b', { p: 5, r: 400 }, 'start');
    function v(id, a, b) { A.via(id, 'M' + a[0] + ' ' + a[1] + ' L' + b[0] + ' ' + b[1]); A.via(id + 'r', 'M' + b[0] + ' ' + b[1] + ' L' + a[0] + ' ' + a[1]); }
    v('dL', [L[0] + 30, L[1] - 4], [D[0] - 30, D[1] - 4]); v('dR', [D[0], D[1] - 30], [SV.r[0], SV.r[1] + 20]); v('dO', [D[0] + 20, D[1] - 24], [SV.o[0], SV.o[1] + 20]); v('dW', [D[0] + 28, D[1] - 14], [SV.w[0], SV.w[1] + 20]);
    A.path('M' + (L[0] + 30) + ' ' + (L[1] - 4) + ' L' + (D[0] - 30) + ' ' + (D[1] - 4), 'lin');
    function fum(x, y, t, o, cls) { cartello(A, x, y, 300, 28, t, cls || 'nodo', o, 't-s'); }
    // 1
    A.pk('dL', { p: 1, f: 1, d: 1100, resta: true }, '?');
    fum(6, 140, '«Qual è l’IP di www.wikipedia.org?»', { p: 1, f: 1, r: 200 });
    // 2
    A.pk('dR', { p: 2, f: 2, d: 1000 }, '?'); A.pk('dRr', { p: 2, f: 2, d: 1000, r: 1100, resta: true }, '.org');
    fum(40, 20, '«Non lo so: chiedi a .org»', { p: 2, f: 2, r: 1100 });
    // 3
    A.pk('dO', { p: 3, f: 3, d: 1000 }, '?'); A.pk('dOr', { p: 3, f: 3, d: 1000, r: 1100, resta: true }, 'wiki');
    fum(40, 20, '«Chiedi a wikipedia.org»', { p: 3, f: 3, r: 1100 });
    // 4
    A.pk('dW', { p: 4, f: 4, d: 1100 }, '?'); A.pk('dWr', { p: 4, f: 4, d: 1100, r: 1200, resta: true }, 'IP', 'pkt-ok');
    fum(40, 20, '«185.15.58.224»', { p: 4, f: 4, r: 1200 }, 'nodo evid');
    // 5
    A.pk('dLr', { p: 5, f: 5, d: 1100, r: 600, resta: true }, 'IP', 'pkt-ok');
    fum(6, 140, 'sito aperto!', { p: 5, f: 5, r: 1700 }, 'nodo evid');
    // 6 · un compagno: risposta immediata dalla cache
    A.disp('portatile', 80, 70, { s: .7, p: 6 }); A.txt(80, 104, 'un compagno', 't-s', { p: 6 });
    A.via('dC', 'M104 82 L278 226'); A.via('dCr', 'M278 226 L104 82'); A.path('M104 82 L278 226', 'lin', { p: 6 });
    A.pk('dC', { p: 6, d: 900 }, '?'); A.pk('dCr', { p: 6, d: 700, r: 1000, resta: true }, 'IP', 'pkt-ok');
    S(svg, 'rect', Object.assign({ x: 392, y: 236, width: 296, height: 44, rx: 3, 'class': 'anello' }, pa({ p: 6, r: 800 })));
    A.txt(560, 310, 'risponde subito leggendo il quaderno', 't-b', { p: 6, r: 1000 });
  });

  /* ===================== 3.6 · le porte ===================== */
  costruisci('f-porte', function (svg, A) {
    A.box(20, 40, 210, 270, 'fondo'); A.txt(125, 62, 'TELEFONO · 192.168.1.4', 't-eti');
    var POR = [['message-circle', 'WhatsApp', '50211', 110], ['music', 'Spotify', '50488', 170], ['globe', 'browser', '51032', 230]];
    POR.forEach(function (p) { A.icona(p[0], 50, p[3], { s: 26 }); A.txt(72, p[3] + 5, p[1], 't', {}, 'start'); A.box(190, p[3] - 16, 56, 32, 'nodo'); A.txt(218, p[3] + 5, p[2], 't-mono'); });
    A.box(190, 268, 56, 32, 'fondo'); A.txt(218, 289, '7000', 't-m'); A.txt(180, 289, 'nessuna app', 't-m', {}, 'end');
    var SRV = [['WhatsApp', 100], ['Spotify', 180], ['Wikipedia', 260]];
    SRV.forEach(function (s) { A.disp('server', 620, s[1], { s: .55 }); A.txt(620, s[1] - 22, s[0], 't-s'); A.box(656, s[1] - 13, 48, 26, 'nodo'); A.txt(680, s[1] + 5, ':443', 't-mono'); });
    A.disp('nuvola', 420, 180, { s: 1.4 }); A.txt(420, 186, 'Internet', 't-s');
    function via(id, d) { A.via(id, d); }
    via('pt1', 'M246 230 L380 200 L590 260'); via('pt1r', 'M590 260 L380 200 L246 230');
    via('pa', 'M590 100 L380 170 L246 110'); via('pb', 'M590 180 L380 180 L246 170'); via('pc', 'M590 260 L380 190 L246 230'); via('px', 'M590 180 L380 200 L250 284');
    A.path('M246 230 L380 200 L590 260', 'lin', { p: 1, f: 4 });
    // 1 · il browser chiede
    cartello(A, 260, 12, 200, 28, 'Dove va? IP + porta', 'nodo evid', { p: 1, f: 1 }, 't-b');
    A.pk('pt1', { p: 1, f: 1, d: 2200, resta: true }, '→ Wikipedia:443');
    A.box(190, 214, 56, 32, 'nodo evid', { p: 1, f: 1 }); A.txt(218, 235, '51032', 't-b', { p: 1, f: 1 });
    A.txt(300, 316, 'mittente: 192.168.1.4 : 51032', 't-s', { p: 1, f: 3 });
    // 2 · al server web sulla porta 443
    S(svg, 'rect', Object.assign({ x: 652, y: 243, width: 56, height: 34, rx: 3, 'class': 'anello' }, pa({ p: 2, f: 2 })));
    A.txt(560, 300, 'consegnato al server web (443)', 't-b', { p: 2, f: 2 });
    // 3 · la risposta torna al mittente
    A.pk('pt1r', { p: 3, f: 3, d: 2200, resta: true }, '→ .4:51032');
    // 4 · solo la porta del browser si accende
    A.box(190, 214, 56, 32, 'nodo attivo', { p: 4, f: 4 }); A.txt(218, 235, '51032', 't-on', { p: 4, f: 4 });
    A.txt(125, 326, 'solo il browser riceve', 't-b', { p: 4, f: 4 });
    // 5 · tre pacchetti insieme, tre app diverse
    A.pk('pa', { p: 5, f: 5, d: 1800, resta: true }, ':50211'); A.pk('pb', { p: 5, f: 5, d: 1800, resta: true }, ':50488'); A.pk('pc', { p: 5, f: 5, d: 1800, resta: true }, ':51032');
    POR.forEach(function (p) { A.box(190, p[3] - 16, 56, 32, 'nodo attivo', { p: 5, f: 5, r: 1800 }); A.txt(218, p[3] + 5, p[2], 't-on', { p: 5, f: 5, r: 1800 }); });
    cartello(A, 260, 12, 200, 28, 'stesso IP, app diverse', 'nodo evid', { p: 5, f: 5, r: 1900 }, 't-b');
    // 6 · porta chiusa
    A.pk('px', { p: 6, d: 1800, resta: true }, ':7000', 'pkt-err');
    K.croce(A, 300, 270, { p: 6, r: 1800 });
    cartello(A, 260, 12, 200, 28, 'nessuna app in ascolto', 'nodo guasto', { p: 6, r: 1900 }, 't-e');
  });

  /* ===================== 3.6 · TCP e UDP ===================== */
  costruisci('f-tcpudp', function (svg, A) {
    function riga(y, nome) {
      A.txt(14, y - 50, nome, 't-eti', {}, 'start');
      A.disp('computer', 60, y, { s: .6 }); A.txt(60, y + 30, 'mittente', 't-s');
      A.disp('computer', 520, y, { s: .6 }); A.txt(520, y + 30, 'destinatario', 't-s');
      A.path('M90 ' + y + ' L490 ' + y, 'lin');
      for (var k = 0; k < 4; k++) { A.box(570 + k * 34, y - 14, 28, 28, 'fondo'); A.txt(584 + k * 34, y + 5, String(k + 1), 't-m'); }
      A.txt(637, y - 22, 'ricevuti', 't-s');
      A.via('v' + y, 'M92 ' + y + ' L488 ' + y); A.via('r' + y, 'M488 ' + y + ' L92 ' + y); A.via('m' + y, 'M92 ' + y + ' L290 ' + y);
    }
    var T = 92, U = 252;
    riga(T, 'TCP'); A.path('M8 168 L712 168', 'lin').setAttribute('stroke-dasharray', '4 5'); riga(U, 'UDP');
    function ricevuto(y, k, cls, o) { var g = A.g(o); S(g, 'rect', { x: 570 + k * 34, y: y - 14, width: 28, height: 28, rx: 2, 'class': cls || 'pkt-ok' }); S(g, 'text', { x: 584 + k * 34, y: y + 5, 'text-anchor': 'middle', 'class': 't-on' }, String(k + 1)); return g; }
    // 1 · TCP: tre messaggi di apertura
    A.pk('v' + T, { p: 1, f: 1, d: 1000 }, 'ciao?'); A.pk('r' + T, { p: 1, f: 1, d: 1000, r: 1100 }, 'ciao, ci sono'); A.pk('v' + T, { p: 1, f: 1, d: 1000, r: 2200 }, 'iniziamo');
    A.txt(290, T - 20, 'connessione aperta', 't-b', { p: 1, r: 3200 });
    // 2 · partono 1, 2, 3, 4; il 3 si perde
    [0, 1, 3].forEach(function (k) { A.pk('v' + T, { p: 2, f: 2, d: 1200, r: k * 400 }, String(k + 1)); ricevuto(T, k, 'pkt-ok', { p: 2, r: 1200 + k * 400 }); });
    A.pk('m' + T, { p: 2, f: 2, d: 700, r: 800 }, '3'); K.croce(A, 300, T, { p: 2, f: 3, r: 1500 }); A.txt(300, T + 34, 'perso', 't-e', { p: 2, f: 3, r: 1500 });
    // 3 · conferme e segnalazione
    A.pk('r' + T, { p: 3, f: 3, d: 1100 }, '✓1 ✓2'); A.pk('r' + T, { p: 3, f: 3, d: 1100, r: 1300 }, 'manca il 3!', 'pkt-err');
    // 4 · il mittente rimanda il 3
    A.pk('v' + T, { p: 4, d: 1200 }, '3'); ricevuto(T, 2, 'pkt-ok', { p: 4, r: 1200 });
    A.txt(637, T + 46, 'file completo,', 't-b', { p: 4, r: 1300 }); A.txt(637, T + 62, 'un po’ in ritardo', 't-m', { p: 4, r: 1300 });
    // 5 · UDP
    [0, 1, 3].forEach(function (k) { A.pk('v' + U, { p: 5, d: 1000, r: k * 300 }, String(k + 1)); ricevuto(U, k, 'pkt-ok', { p: 5, r: 1000 + k * 300 }); });
    A.pk('m' + U, { p: 5, f: 5, d: 600, r: 600 }, '3'); K.croce(A, 300, U, { p: 5, r: 1200 });
    ricevuto(U, 2, 'pkt-err', { p: 5, r: 1900 }).querySelector('text').textContent = '✗';
    A.txt(290, U + 46, 'nessuno lo rimanda: un attimo di immagine sgranata', 't-a', { p: 5, r: 1900 });
  });

  /* ===================== Prova tu · un indirizzo IPv4 in bit ===================== */
  W.registra('ipv4', function (el) {
    var b = W.base(el, 'Prova tu · un indirizzo IPv4 in bit', '32 bit = 4 byte');
    var inp = W.h('input', { type: 'text', value: '192.168.1.4', 'aria-label': 'Indirizzo IPv4', style: 'font:600 16px var(--font-mono);padding:6px 10px;border:1px solid var(--border-strong);border-radius:2px;background:var(--surface-000);color:var(--ink);width:180px' });
    b.ctrl.appendChild(W.h('label', { 'class': 'wid-campo' }, [W.h('span', { testo: 'Indirizzo' }), inp]));
    ['192.168.1.4', '10.0.5.27', '8.8.8.8'].forEach(function (e) { b.ctrl.appendChild(W.bottone(e, function () { inp.value = e; calcola(); })); });
    var svg = W.s('svg', { viewBox: '0 0 720 150', role: 'img', 'aria-label': 'I quattro numeri dell’indirizzo scritti in binario, 8 bit ciascuno' }); el.appendChild(svg);
    b.chiudi();
    function calcola() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var p = inp.value.trim().split('.');
      var ok = p.length === 4 && p.every(function (x) { return /^\d{1,3}$/.test(x) && +x <= 255; });
      if (!ok) { b.dica('Scrivi quattro numeri da 0 a 255 separati da punti, ad esempio 192.168.1.4.', 'err'); return; }
      p.forEach(function (x, k) {
        var x0 = 14 + k * 176, bits = (+x).toString(2).padStart(8, '0');
        S(svg, 'text', { x: x0 + 80, y: 24, 'text-anchor': 'middle', 'class': 't-mono' }, x);
        for (var i = 0; i < 8; i++) {
          S(svg, 'rect', { x: x0 + i * 20, y: 38, width: 18, height: 26, rx: 2, 'class': bits[i] === '1' ? 'nodo attivo' : 'nodo' });
          S(svg, 'text', { x: x0 + i * 20 + 9, y: 56, 'text-anchor': 'middle', 'class': bits[i] === '1' ? 't-on' : 't-m', style: 'font-size:12px' }, bits[i]);
          S(svg, 'text', { x: x0 + i * 20 + 9, y: 80, 'text-anchor': 'middle', 'class': 't-s', style: 'font-size:9px' }, String(Math.pow(2, 7 - i)));
        }
        S(svg, 'text', { x: x0 + 80, y: 100, 'text-anchor': 'middle', 'class': 't-s' }, 'byte ' + (k + 1));
      });
      S(svg, 'path', { d: 'M14 116 L540 116', 'class': 'lin ok' }); S(svg, 'text', { x: 277, y: 138, 'text-anchor': 'middle', 'class': 't-b' }, 'la rete (nella rete di casa, di solito)');
      S(svg, 'path', { d: 'M542 116 L702 116', 'class': 'lin att' }); S(svg, 'text', { x: 622, y: 138, 'text-anchor': 'middle', 'class': 't-a' }, 'il dispositivo');
      b.dica('Ogni numero vale 8 bit: 4 × 8 = 32 bit in tutto. Sotto ogni bit c’è il suo valore: sommando quelli accesi si ottiene il numero.', 'ok');
    }
    inp.oninput = calcola; calcola();
  });
})();
