/* Capitolo 4 · Internet — schemi, animazioni a passi e widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, pa = K.pa, costruisci = K.costruisci;
  var croce = K.croce, linea = K.linea, cartello = K.cartello;
  var FIBRA = 'var(--accent-500)';

  /* 2.7 · cavi sottomarini */
  costruisci('f-cavi', function (svg, A) {
    A.box(150, 30, 420, 250, 'fondo'); A.txt(360, 52, 'OCEANO ATLANTICO', 't-eti');
    S(svg, 'path', { d: 'M0 20 L170 30 L150 120 L175 200 L140 290 L0 290 Z', fill: 'var(--surface-200)', stroke: 'var(--border-strong)' });
    S(svg, 'path', { d: 'M720 20 L545 40 L570 110 L540 190 L575 290 L720 290 Z', fill: 'var(--surface-200)', stroke: 'var(--border-strong)' });
    A.txt(60, 40, 'AMERICA', 't-eti'); A.txt(660, 40, 'EUROPA', 't-eti');
    A.disp('server', 75, 146, { nome: 'server', sotto: 'New York' }); A.disp('computer', 650, 216, { nome: 'computer', sotto: 'Roma' });
    var cavi = { A: 'M160 95 C 280 70, 440 70, 555 95', B: 'M165 160 C 280 140, 440 140, 562 160', C: 'M160 230 C 280 250, 440 250, 560 230' };
    Object.keys(cavi).forEach(function (k) { linea(svg, cavi[k], FIBRA, 4, {}); });
    A.txt(360, 92, 'cavo A', 't-s'); A.txt(360, 158, 'cavo B', 't-s'); A.txt(360, 262, 'cavo C', 't-s');
    A.path('M650 188 L555 95', 'lin'); A.path('M650 188 L562 160', 'lin'); A.path('M102 140 L160 95', 'lin'); A.path('M102 150 L165 160', 'lin');
    A.via('ca1', 'M650 188 L555 95');
    A.via('ca2', 'M555 95 C 440 70, 280 70, 160 95'); A.via('ca3', 'M160 95 L102 140');
    A.via('cb1', 'M650 188 L562 160'); A.via('cb2', 'M562 160 C 440 140, 280 140, 165 160'); A.via('cb3', 'M165 160 L102 150');
    A.pk('ca1', { p: 1, f: 1, resta: true, d: 1000 }, null, 'goccia');
    A.pk('ca2', { p: 2, d: 1800 }, null, 'goccia'); A.pk('ca3', { p: 2, f: 2, resta: true, r: 1850, d: 500 }, null, 'goccia');
    S(svg, 'rect', Object.assign({ x: 38, y: 112, width: 74, height: 102, rx: 4, 'class': 'anello' }, pa({ p: 2, f: 2, r: 2400 })));
    A.txt(360, 120, 'in fibra, sotto il mare: circa 6.000 km', 't-a', { p: 2, f: 2, r: 400 });
    // 3: ancora sul cavo A
    croce(A, 360, 76, { p: 3 }); linea(svg, cavi.A, 'var(--errore-ink)', 4, { p: 3 }).setAttribute('stroke-dasharray', '6 6');
    A.txt(360, 120, 'un’ancora danneggia il cavo A', 't-e', { p: 3, f: 3 });
    // 4: deviazione sul cavo B
    A.pk('cb1', { p: 4, d: 900 }, null, 'goccia'); A.pk('cb2', { p: 4, r: 950, d: 1800 }, null, 'goccia'); A.pk('cb3', { p: 4, resta: true, r: 2800, d: 400 }, null, 'goccia');
    S(svg, 'rect', Object.assign({ x: 38, y: 112, width: 74, height: 102, rx: 4, 'class': 'anello' }, pa({ p: 4, r: 3250 })));
    A.txt(360, 195, 'deviato sul cavo B: arriva lo stesso,', 't-b', { p: 4, r: 1000 }); A.txt(360, 213, 'ma con più traffico è un po’ più lento', 't-b', { p: 4, r: 1000 });
  });


  /* ===================== 4.2 · il viaggio fisico di una richiesta ===================== */
  costruisci('f-viaggio', function (svg, A) {
    var Y = 170;
    S(svg, 'path', { d: 'M470 120 Q500 108 530 120 T590 120 L590 250 L470 250 Z', fill: '#dceaf7', stroke: 'none' });
    A.txt(530, 240, 'MARE', 't-eti');
    var N = [[60, 'casa', 'telefono e router'], [175, 'centrale ISP', 'Roma'], [295, 'router', 'Milano'], [420, 'approdo', 'Sicilia'], [650, 'data center', 'Stati Uniti']];
    A.disp('casa', 60, Y - 6, { s: .8 }); A.disp('telefono', 30, Y + 6, { s: .4 });
    A.disp('centrale', 175, Y - 6, { s: .8 });
    A.disp('router', 295, Y - 6, { s: .6 });
    A.icona('anchor', 420, Y - 6, { s: 34 });
    A.disp('server', 650, Y - 6, { s: .9 });
    N.forEach(function (n) { A.txt(n[0], Y + 42, n[1], 't'); A.txt(n[0], Y + 58, n[2], 't-m'); });
    var tratti = [['M88 ' + Y + ' L145 ' + Y, 'fibra'], ['M205 ' + Y + ' L271 ' + Y, 'dorsale'], ['M319 ' + Y + ' L402 ' + Y, 'dorsale'], ['M438 ' + Y + ' Q540 ' + (Y + 50) + ' 622 ' + Y, 'cavo sottomarino']];
    tratti.forEach(function (t, k) { linea(svg, t[0], FIBRA, 4, {}); A.via('vg' + k, t[0]); });
    A.txt(116, Y - 14, 'fibra', 't-a'); A.txt(238, Y - 14, 'dorsale', 't-a'); A.txt(360, Y - 14, 'dorsale', 't-a'); A.txt(530, Y + 46, 'cavo sottomarino', 't-a');
    A.box(560, 20, 150, 52, 'nodo'); A.txt(635, 40, 'TEMPO TOTALE', 't-eti'); A.txt(635, 62, '0 s', 't-mono', { f: 3 });
    A.via('vgw', 'M30 ' + (Y + 6) + ' L60 ' + (Y - 6));
    // 1
    [30, 44].forEach(function (r, k) { S(svg, 'path', Object.assign({ d: 'M' + (36 + 6) + ' ' + (Y - 18 - r / 3) + ' a' + r / 3 + ' ' + r / 3 + ' 0 0 1 ' + r / 3 + ' ' + r / 3, 'class': 'lin att', fill: 'none' }, pa({ p: 1, f: 1, r: k * 200 }))); });
    A.txt(60, 90, 'Wi-Fi → router', 't-a', { p: 1, f: 1 });
    A.pk('vg0', { p: 1, f: 1, d: 1000, r: 400, resta: true }, null, 'goccia');
    // 2
    A.pk('vg1', { p: 2, f: 2, d: 900, resta: true }, null, 'goccia');
    cartello(A, 220, 82, 150, 28, 'rete internazionale', 'nodo evid', { p: 2, f: 2, r: 900 }, 't-b');
    // 3
    A.pk('vg2', { p: 3, f: 3, d: 1100, resta: true }, null, 'goccia');
    A.txt(420, 100, 'si tuffa nel mare', 't-a', { p: 3, f: 3, r: 1100 });
    // 4
    A.pk('vg3', { p: 4, d: 2200, resta: true }, null, 'goccia');
    S(svg, 'rect', Object.assign({ x: 614, y: 130, width: 72, height: 64, rx: 4, 'class': 'anello' }, pa({ p: 4, r: 2200 })));
    A.txt(635, 62, '< 0,1 s', 't-b', { p: 4, r: 2200 });
  });

  /* ===================== 4.3 · i numeri ===================== */
  costruisci('s-numeri', function (svg, A) {
    var dati = [['paesi ad alto reddito', 94, 'var(--brand-500)'], ['media mondiale', 74, 'var(--brand-600)'], ['paesi a basso reddito', 23, 'var(--accent-500)'], null, ['giovani 15–24 anni', 82, 'var(--brand-500)'], ['resto della popolazione', 72, 'var(--brand-600)']];
    var y = 20;
    A.txt(14, y + 6, 'PERSONE ONLINE', 't-eti', {}, 'start'); y += 18;
    dati.forEach(function (d) {
      if (!d) { A.path('M14 ' + (y + 8) + ' L706 ' + (y + 8), 'lin').setAttribute('stroke-dasharray', '4 5'); y += 22; return; }
      A.txt(200, y + 20, d[0], 't', {}, 'end');
      A.box(212, y + 4, 440, 24, 'fondo');
      S(svg, 'rect', { x: 212, y: y + 4, width: 4.4 * d[1], height: 24, rx: 2, fill: d[2] });
      A.txt(212 + 4.4 * d[1] + 8, y + 21, d[1] + '%', 't-mono', {}, 'start');
      y += 36;
    });
    A.txt(706, 262, 'Fonte: ITU, Facts and Figures 2025 (valori indicativi)', 't-m', {}, 'end');
  });

  /* ===================== 4.5 · intranet, extranet, Internet ===================== */
  costruisci('s-intranet', function (svg, A) {
    var C = [250, 150];
    [[135, 'var(--surface-100)'], [92, 'var(--accent-100)'], [50, 'var(--brand-100)']].forEach(function (c) { S(svg, 'circle', { cx: C[0], cy: C[1], r: c[0], fill: c[1], stroke: 'var(--border-strong)', 'stroke-width': 2 }); });
    A.icona('building-2', C[0], C[1] - 8, { s: 28, tono: 'brand' }); A.txt(C[0], C[1] + 24, 'intranet', 't-b');
    A.icona('lock', C[0] + 50, C[1], { s: 20, tono: 'accent' }); A.icona('lock', C[0] + 92, C[1], { s: 20, tono: 'accent' });
    A.txt(C[0], C[1] - 64, 'extranet', 't-a'); A.txt(C[0], C[1] - 108, 'Internet', 't');
    var R = [[30, 'INTRANET', 'solo i membri, dentro l’organizzazione', 'circolari, moduli, turni'], [110, 'EXTRANET', 'alcuni esterni, con le credenziali', 'fornitori, clienti, famiglie'], [190, 'INTERNET', 'la rete pubblica, aperta a tutti', 'chiunque']];
    R.forEach(function (r) { A.txt(420, r[0] + 30, r[1], 't-eti', {}, 'start'); A.txt(420, r[0] + 50, r[2], 't', {}, 'start'); A.txt(420, r[0] + 68, r[3], 't-m', {}, 'start'); });
  });

  /* ===================== 4.5 · la VPN ===================== */
  costruisci('f-vpn', function (svg, A) {
    A.disp('portatile', 70, 170, {}); A.txt(70, 206, 'portatile', 't'); A.icona('coffee', 70, 96, { s: 26 }); A.txt(70, 128, 'Wi-Fi del bar', 't-s');
    A.disp('nuvola', 330, 170, { s: 2.2 }); A.txt(330, 178, 'Internet', 't-m');
    A.icona('eye', 330, 92, { s: 28, tono: 'errore' }); A.txt(330, 66, 'un curioso', 't-e');
    A.box(490, 50, 220, 220, 'fondo'); A.txt(600, 72, 'SEDE DELL’AZIENDA', 't-eti');
    A.disp('server', 540, 170, { s: .7 }); A.txt(540, 206, 'server VPN', 't-s');
    A.disp('server', 650, 170, { s: .7, attivo: true }); A.txt(650, 206, 'documenti', 't-s');
    A.path('M105 170 L490 170', 'lin'); A.path('M565 170 L625 170', 'lin');
    A.via('v1', 'M105 170 L488 170'); A.via('v2', 'M568 170 L622 170');
    // 1 · senza VPN
    A.pk('v1', { p: 1, f: 1, d: 2400, resta: true }, 'documenti interni');
    cartello(A, 240, 110, 180, 26, 'legge: «documenti interni»', 'nodo guasto', { p: 1, f: 1, r: 1100 }, 't-e');
    croce(A, 488, 170, { p: 1, f: 1, r: 2400 }); A.txt(470, 290, 'da fuori: accesso rifiutato', 't-e', { p: 1, f: 1, r: 2400 });
    // 2 · la busta con il lucchetto
    var g = A.g({ p: 2, f: 2 }); S(g, 'rect', { x: 110, y: 220, width: 170, height: 46, rx: 3, 'class': 'nodo evid' }); S(g, 'text', { x: 195, y: 238, 'text-anchor': 'middle', 'class': 't-b' }, 'cifrato → server VPN');
    S(g, 'rect', { x: 130, y: 244, width: 130, height: 18, rx: 2, fill: 'var(--accent-100)', stroke: 'var(--accent-500)' }); S(g, 'text', { x: 195, y: 257, 'text-anchor': 'middle', 'class': 't-s', style: 'font-size:10px' }, 'documenti interni');
    A.txt(195, 286, 'il pacchetto, cifrato, dentro un altro', 't-m', { p: 2, f: 2 });
    // 3 · nel tunnel
    linea(svg, 'M105 170 L488 170', 'var(--brand-500)', 26, { p: 3 }).setAttribute('stroke-opacity', '.25');
    A.pk('v1', { p: 3, f: 3, d: 2400, resta: true }, 'cifrato → server VPN', 'pkt-ok');
    cartello(A, 240, 110, 180, 26, 'vede solo: cifrato → server VPN', 'nodo', { p: 3, f: 3, r: 1100 }, 't-s');
    // 4 · il server VPN apre la busta
    A.pk('v2', { p: 4, d: 1000, r: 300, resta: true }, 'doc');
    S(svg, 'rect', Object.assign({ x: 620, y: 140, width: 60, height: 60, rx: 4, 'class': 'anello' }, pa({ p: 4, r: 1300 })));
    A.txt(600, 248, 'come se fosse in ufficio ✓', 't-b', { p: 4, r: 1300 });
  });

  /* ===================== 4.6 · i servizi sopra Internet ===================== */
  costruisci('s-servizi', function (svg, A) {
    A.box(20, 176, 680, 54, 'nodo attivo'); A.txt(360, 200, 'Internet', 't-on'); A.txt(360, 218, 'cavi, router, protocolli TCP/IP', 't-on').style.fontWeight = '400';
    var SV = [['globe', 'Web', 'HTTP, HTTPS'], ['mail', 'Posta', 'SMTP, IMAP'], ['message-circle', 'Messaggistica', ''], ['video', 'Videochiamate', ''], ['gamepad-2', 'Giochi online', ''], ['tv', 'Streaming', '']];
    SV.forEach(function (s, k) {
      var x = 30 + k * 112, h = k === 0 ? 132 : 112;
      S(svg, 'path', { d: 'M' + x + ' 176 L' + x + ' ' + (176 - h + 16) + ' L' + (x + 50) + ' ' + (176 - h) + ' L' + (x + 100) + ' ' + (176 - h + 16) + ' L' + (x + 100) + ' 176 Z', 'class': k === 0 ? 'nodo evid' : 'nodo' });
      A.icona(s[0], x + 50, 176 - h + 48, { s: 28, tono: k === 0 ? 'brand' : '' });
      A.txt(x + 50, 176 - h + 86, s[1], k === 0 ? 't-b' : 't').style.fontSize = '12.5px'; if (s[2]) A.txt(x + 50, 176 - h + 104, s[2], 't-s');
    });
  });

  /* ===================== 4.8 · lineare e ipertesto ===================== */
  costruisci('s-ipertesto', function (svg, A) {
    A.txt(170, 22, 'UN LIBRO · lettura lineare', 't-eti'); A.txt(530, 22, 'UN IPERTESTO · lettura non lineare', 't-eti');
    function pagina(x, y, ic) { A.box(x - 22, y - 28, 44, 56, 'nodo'); if (ic) A.icona(ic, x, y, { s: 20 }); else for (var k = 0; k < 4; k++) A.path('M' + (x - 13) + ' ' + (y - 14 + k * 9) + ' L' + (x + 13) + ' ' + (y - 14 + k * 9)); }
    [40, 105, 170, 235, 300].forEach(function (x, k) { pagina(x, 130); if (k) A.path('M' + (x - 43) + ' 130 L' + (x - 24) + ' 130', 'lin att'); });
    A.txt(170, 200, 'dalla prima all’ultima pagina', 't-m');
    A.path('M352 40 L352 240', 'lin').setAttribute('stroke-dasharray', '4 5');
    var P = [[420, 70, null], [560, 60, 'image'], [670, 110, 'video'], [470, 170, 'music'], [610, 180, null], [690, 205, 'image'], [420, 205, null]];
    [[0, 1], [0, 3], [1, 2], [1, 4], [3, 4], [2, 5], [4, 5], [3, 6], [6, 4], [0, 4], [2, 4]].forEach(function (l) { var a = P[l[0]], b = P[l[1]]; A.path('M' + a[0] + ' ' + a[1] + ' L' + b[0] + ' ' + b[1], 'lin att'); });
    P.forEach(function (p) { pagina(p[0], p[1], p[2]); });
    A.txt(550, 262, 'testi, immagini, video e audio collegati: ipermedia', 't-b');
  });

  /* ===================== 4.9 · l'URL ===================== */
  costruisci('s-url', function (svg, A) {
    var parti = [['https://', 'protocollo', 'var(--accent-500)'], ['www.istruzione.it', 'dominio', 'var(--brand-500)'], ['/esame_di_stato/index.html', 'percorso', '#2e86c1'], ['?anno=2026', 'parametri', '#8e44ad'], ['#date', 'segnalibro', '#c0392b']];
    var CH = 10.2, x = 20;
    parti.forEach(function (p) {
      var w = p[0].length * CH;
      S(svg, 'rect', { x: x, y: 30, width: w, height: 34, rx: 2, fill: p[2], 'fill-opacity': .15, stroke: p[2] });
      S(svg, 'text', { x: x + w / 2, y: 53, 'text-anchor': 'middle', 'class': 't-mono', style: 'font-size:16px' }, p[0]);
      A.path('M' + (x + 3) + ' 72 L' + (x + 3) + ' 80 L' + (x + w - 3) + ' 80 L' + (x + w - 3) + ' 72', 'lin');
      A.txt(x + w / 2, 102, p[1], 't');
      x += w + 4;
    });
    A.txt(20, 128, 'si legge pezzo per pezzo: con quali regole, a quale server, dove sul server,', 't-m', {}, 'start'); A.txt(20, 146, 'con quali informazioni aggiuntive, in quale punto della pagina', 't-m', {}, 'start');
  });

  /* ===================== 4.10 · HTTP ===================== */
  costruisci('f-http', function (svg, A) {
    var L = [100, 210], Sv = [630, 210], D = [360, 54];
    A.disp('portatile', L[0], L[1], {}); A.box(4, 250, 210, 24, 'nodo'); A.txt(109, 266, 'https://www.wikipedia.org', 't-s');
    A.disp('server', Sv[0], Sv[1], {}); A.txt(Sv[0], Sv[1] + 44, 'server web', 't');
    A.disp('server', D[0], D[1], { s: .6 }); A.txt(D[0] + 30, D[1] + 4, 'server DNS', 't', {}, 'start');
    A.path('M125 210 L595 210', 'lin');
    A.via('hd', 'M110 190 L345 70'); A.via('hdr', 'M345 70 L110 190');
    A.via('hv', 'M125 210 L595 210'); A.via('hr', 'M595 210 L125 210');
    function fum(t, o, cls) { cartello(A, 230, 232, 260, 28, t, cls || 'nodo', o, 't-s'); }
    // 1 · DNS
    A.path('M110 190 L345 70', 'lin', { p: 1, f: 1 });
    A.pk('hd', { p: 1, f: 1, d: 900 }, 'IP?'); A.pk('hdr', { p: 1, f: 1, d: 900, r: 1000, resta: true }, '185.15.58.224', 'pkt-ok');
    fum('1 · DNS: il nome diventa un numero', { p: 1, f: 1 });
    // 2 · TCP
    A.pk('hv', { p: 2, f: 2, d: 900 }, 'ciao?'); A.pk('hr', { p: 2, f: 2, d: 900, r: 1000 }, 'ci sono'); A.pk('hv', { p: 2, f: 2, d: 900, r: 2000 }, 'iniziamo');
    fum('2 · TCP: si apre la connessione', { p: 2, f: 2 });
    // 3 · cifratura
    A.pk('hv', { p: 3, f: 3, d: 900 }, 'chiave'); A.pk('hr', { p: 3, f: 3, d: 900, r: 1000 }, 'chiave');
    A.icona('lock', 360, 186, { s: 26, p: 3, r: 2000, tono: 'brand' }); linea(svg, 'M125 210 L595 210', 'var(--brand-500)', 5, { p: 3, r: 2000 });
    fum('3 · TLS: la comunicazione è cifrata', { p: 3, f: 3 });
    // 4 · GET
    A.pk('hv', { p: 4, f: 4, d: 1300, resta: true }, 'GET /');
    fum('4 · richiesta HTTP', { p: 4, f: 4 });
    // 5 · 200 OK e altre richieste
    A.pk('hr', { p: 5, f: 5, d: 1300 }, '200 OK · HTML', 'pkt-ok');
    A.pk('hv', { p: 5, f: 5, d: 1100, r: 1500 }, 'GET logo.png'); A.pk('hv', { p: 5, f: 5, d: 1100, r: 2000 }, 'GET stile.css');
    fum('5 · risposta, poi altre richieste', { p: 5, f: 5 });
    // 6 · la pagina si compone
    var pg = [[200, 40, 260, 24, 'nodo attivo'], [200, 72, 120, 70, 'fondo'], [330, 72, 130, 14, 'nodo'], [330, 92, 130, 14, 'nodo'], [330, 112, 100, 14, 'nodo'], [200, 150, 260, 14, 'nodo']];
    A.box(190, 30, 280, 140, 'nodo', { p: 6 });
    pg.forEach(function (r, k) { A.box(r[0], r[1], r[2], r[3], r[4], { p: 6, r: 300 + k * 350 }); });
    A.icona('image', 260, 107, { s: 26, p: 6, r: 650 }); A.txt(330, 58, 'Wikipedia', 't-on', { p: 6, r: 300 });
    fum('6 · la pagina compare a pezzi', { p: 6 }, 'nodo evid');
  });

  /* ===================== 4.13 · i cookie di terze parti ===================== */
  costruisci('f-cookie', function (svg, A) {
    var SITI = [['shopping-bag', 'negozio di scarpe', 110], ['newspaper', 'giornale', 360], ['users', 'social', 610]];
    SITI.forEach(function (s) { A.box(s[2] - 80, 110, 160, 90, 'nodo'); A.icona(s[0], s[2] - 50, 140, { s: 26 }); A.txt(s[2] - 30, 146, s[1], 't', {}, 'start'); A.box(s[2] - 60, 160, 120, 30, 'fondo'); A.txt(s[2], 180, 'spazio pubblicità', 't-s'); });
    A.disp('server', 360, 40, { s: .6 }); A.txt(392, 34, 'azienda pubblicitaria', 't', {}, 'start'); A.txt(392, 52, '(presente su tutti e tre)', 't-m', {}, 'start');
    SITI.forEach(function (s) { A.path('M360 62 L' + s[2] + ' 158', 'lin').setAttribute('stroke-dasharray', '3 4'); });
    A.icona('monitor', 250, 270, { s: 34 }); A.txt(250, 306, 'il tuo browser', 't');
    A.icona('cookie', 420, 268, { s: 30, tono: 'accent' }); A.txt(420, 306, 'barattolo dei cookie', 't-s');
    A.txt(470, 274, 'vuoto', 't-m', { f: 0 }, 'start');
    A.via('ck1', 'M360 62 L110 158'); A.via('ck1b', 'M110 200 L410 250'); A.via('ck2', 'M260 250 L360 200'); A.via('ck2b', 'M360 160 L360 62');
    // 1
    A.box(50, 160, 120, 30, 'nodo evid', { p: 1, f: 3 }); A.icona('footprints', 110, 175, { s: 20, p: 1, f: 3, tono: 'brand' });
    A.pk('ck1b', { p: 1, f: 1, d: 1300, r: 300, resta: true }, '4821');
    A.txt(470, 274, 'utente 4821', 't-a', { p: 1, f: 4, r: 1600 }, 'start');
    // 2
    A.pk('ck2', { p: 2, f: 2, d: 900 }, '4821'); A.pk('ck2b', { p: 2, f: 2, d: 1000, r: 950, resta: true }, '4821');
    // 3
    cartello(A, 470, 72, 240, 28, '«4821 ha guardato scarpe»', 'nodo evid', { p: 3, f: 4 }, 't-b');
    // 4
    A.box(550, 160, 120, 30, 'nodo evid', { p: 4, f: 4, r: 300 }); A.icona('footprints', 610, 175, { s: 20, p: 4, f: 4, r: 300, tono: 'brand' });
    A.txt(610, 228, 'le stesse scarpe!', 't-a', { p: 4, f: 4, r: 300 });
    // 5
    croce(A, 420, 268, { p: 5 }); A.txt(470, 274, 'terze parti bloccate', 't-e', { p: 5 }, 'start');
    A.box(550, 160, 120, 30, 'nodo', { p: 5, r: 300 }); A.txt(610, 180, 'pubblicità qualsiasi', 't-s', { p: 5, r: 300 });
  });

  /* ===================== 4.15 · l'iceberg ===================== */
  costruisci('s-iceberg', function (svg, A) {
    S(svg, 'rect', { x: 0, y: 92, width: 720, height: 238, fill: '#dceaf7' });
    A.path('M0 92 L720 92', 'lin');
    S(svg, 'path', { d: 'M300 92 L340 30 L372 52 L400 22 L440 92 Z', fill: 'var(--surface-000)', stroke: 'var(--border-strong)', 'stroke-width': 2 });
    S(svg, 'path', { d: 'M300 92 L440 92 L520 170 L500 250 L430 300 L300 300 L220 240 L210 150 Z', fill: 'var(--surface-100)', stroke: 'var(--border-strong)', 'stroke-width': 2 });
    S(svg, 'path', { d: 'M300 300 L430 300 L400 324 L330 324 Z', fill: 'var(--ink-soft)', stroke: 'var(--ink-soft)' });
    A.txt(470, 40, 'SURFACE WEB', 't-eti', {}, 'start'); A.txt(470, 58, 'indicizzato dai motori di ricerca', 't', {}, 'start'); A.txt(470, 76, 'siti pubblici', 't-m', {}, 'start');
    A.txt(365, 150, 'DEEP WEB', 't-eti'); A.txt(365, 172, 'non indicizzato: la parte più grande', 't'); A.txt(365, 192, 'posta, registro elettronico,', 't-m'); A.txt(365, 210, 'Drive, banca online', 't-m');
    A.txt(540, 300, 'DARK WEB', 't-eti', {}, 'start'); A.txt(540, 318, 'piccolo, solo con Tor', 't', {}, 'start'); A.path('M535 306 L420 312', 'lin');
  });

  /* ===================== Prova tu · di chi è davvero questo indirizzo? ===================== */
  W.registra('url', function (el) {
    var b = W.base(el, 'Prova tu · di chi è davvero questo indirizzo?', 'leggi il dominio da destra');
    var inp = W.h('input', { type: 'text', value: 'https://login.poste.it/accedi', 'aria-label': 'Indirizzo da analizzare', style: 'font:600 15px var(--font-mono);padding:6px 10px;border:1px solid var(--border-strong);border-radius:2px;background:var(--surface-000);color:var(--ink);width:min(100%,420px)' });
    b.ctrl.appendChild(W.h('label', { 'class': 'wid-campo' }, [W.h('span', { testo: 'Indirizzo' }), inp]));
    var es = ['https://login.poste.it/accedi', 'https://poste.it.login-sicuro.com/accedi', 'https://classroom.google.com/c/123', 'http://google.com.sicurezza-account.ru/verifica?id=7#ok'];
    var sel = W.scelta(es.map(function (e, k) { return [e, 'Esempio ' + (k + 1)]; }), es[0], function (v) { inp.value = v; analizza(); });
    b.ctrl.appendChild(sel);
    var svg = W.s('svg', { viewBox: '0 0 720 160', role: 'img', 'aria-label': 'L’indirizzo diviso nelle sue parti, con il dominio registrato evidenziato' }); el.appendChild(svg);
    b.chiudi();
    function analizza() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var u; try { u = new URL(inp.value.trim().indexOf('://') < 0 ? 'https://' + inp.value.trim() : inp.value.trim()); } catch (e) { b.dica('Questo non sembra un indirizzo: prova con https://www.esempio.it/pagina', 'err'); return; }
      var host = u.hostname, et = host.split('.'), reg = et.slice(-2).join('.'), sotto = et.slice(0, -2).join('.');
      var righe = [['protocollo', u.protocol.replace(':', ''), u.protocol === 'https:' ? 'cifrato' : 'in chiaro!'], ['sottodomini', sotto || '—', ''], ['dominio registrato', reg, 'è questo che conta'], ['percorso', u.pathname, ''], ['parametri', u.search || '—', ''], ['segnalibro', u.hash || '—', '']];
      righe.forEach(function (r, k) {
        var y = 22 + k * 23, ev = k === 2;
        if (ev) S(svg, 'rect', { x: 6, y: y - 16, width: 708, height: 22, rx: 2, 'class': 'nodo evid' });
        S(svg, 'text', { x: 14, y: y, 'class': 't-eti' }, r[0].toUpperCase());
        S(svg, 'text', { x: 180, y: y, 'class': ev ? 't-b' : 't-mono' }, r[1].length > 44 ? r[1].slice(0, 43) + '…' : r[1]);
        if (r[2]) S(svg, 'text', { x: 706, y: y, 'text-anchor': 'end', 'class': k === 0 && u.protocol !== 'https:' ? 't-e' : 't-m' }, r[2]);
      });
      var marchi = ['poste', 'google', 'amazon', 'apple', 'paypal', 'instagram'];
      var trappola = marchi.filter(function (m) { return sotto.indexOf(m) >= 0 && reg.indexOf(m) < 0; });
      if (trappola.length) b.dica('Attenzione: «' + trappola[0] + '» compare nell’indirizzo, ma il dominio registrato è ' + reg + '. Il sito non è di ' + trappola[0] + '.', 'err');
      else b.dica('Il sito appartiene a chi ha registrato ' + reg + '. Il lucchetto (https) dice solo che la comunicazione è cifrata.', 'ok');
    }
    inp.oninput = analizza; analizza();
  });
})();
