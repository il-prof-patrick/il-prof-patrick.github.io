/* Capitolo 3 · L’IA nella vita di tutti i giorni — animazioni a passi e widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, costruisci = K.costruisci;

  /* ===================== 1.1 · una giornata piena di IA ===================== */
  var ORE = [
    ['7:00', 'Face ID', 'Sblocchi il telefono guardandolo.', 'Riconosce il tuo volto anche con occhiali o capelli diversi.', 'scan-face', 1],
    ['7:30', 'Siri', 'A colazione chiedi che tempo fa.', 'Capisce la tua voce e risponde sul tempo.', 'volume-2', 1],
    ['8:00', 'Google Maps', 'Vai a scuola con il navigatore.', 'Prevede il traffico e sceglie la strada più veloce.', 'map', 1],
    ['10:00', 'Google Traduttore', 'Nel compito di inglese traduci un testo.', 'Traduce il testo da una lingua all’altra.', 'languages', 1],
    ['13:00', 'YouTube', 'Finito un video, ne parte un altro.', 'Sceglie lui che cosa mostrarti dopo.', 'play', 0],
    ['16:00', 'La fotocamera', 'Fai una foto con gli amici.', 'Trova i volti e mette a fuoco su di loro.', 'camera', 0],
    ['18:00', 'Gmail', 'Controlli la posta.', 'Butta via la posta indesiderata prima che tu la veda.', 'mail', 0],
    ['21:00', 'ChatGPT', 'Chiedi aiuto per un compito.', 'Capisce la domanda e scrive una risposta.', 'message-circle', 1]
  ];
  costruisci('f-giornata', function (svg, A) {
    var BLU = 'var(--brand-600)', GIALLO = 'var(--accent-500)';
    // legenda
    S(svg, 'circle', { cx: 28, cy: 20, r: 6, fill: BLU }); A.txt(40, 25, 'te ne accorgi', 't-m', {}, 'start');
    S(svg, 'circle', { cx: 150, cy: 20, r: 6, fill: GIALLO }); A.txt(162, 25, 'lavora di nascosto', 't-m', {}, 'start');
    // contatore
    A.txt(692, 26, 'IA incontrate: 0', 't-b', { f: 0 }, 'end');
    ORE.forEach(function (o, i) {
      A.txt(692, 26, 'IA incontrate: ' + (i + 1), 't-b', i === 7 ? { p: 8 } : { p: i + 1, f: i + 1 }, 'end');
    });
    // striscia delle ore
    var xs = ORE.map(function (o, i) { return 54 + i * 87.4; });
    A.path('M' + xs[0] + ' 66 L' + xs[7] + ' 66', 'lin');
    ORE.forEach(function (o, i) {
      S(svg, 'circle', { cx: xs[i], cy: 66, r: 11, 'class': 'nodo' });
      var c = S(svg, 'circle', Object.assign({ cx: xs[i], cy: 66, r: 11, fill: o[5] ? BLU : GIALLO, stroke: 'none' }, K.pa({ p: i + 1 })));
      A.txt(xs[i], 96, o[0], 't-s');
    });
    // riquadro della scena
    A.box(30, 116, 660, 186, 'fondo');
    A.icona('clock', 360, 176, { s: 56, f: 0 }); A.txt(360, 236, 'Una giornata come tante', 't-b', { f: 0 });
    A.txt(360, 258, 'Premi Avanti: ogni clic è un momento della giornata', 't-m', { f: 0 });
    ORE.forEach(function (o, i) {
      var P = { p: i + 1, f: i + 1 };
      A.icona(o[4], 110, 208, { s: 70, tono: o[5] ? '' : 'accent', p: i + 1, f: i + 1 });
      A.txt(190, 160, o[0] + ' · ' + o[1], 't-b', P, 'start');
      A.txt(190, 196, o[2], 't', P, 'start');
      A.txt(190, 224, 'L’IA: ' + o[3].charAt(0).toLowerCase() + o[3].slice(1), 't-m', P, 'start');
      A.box(190, 250, o[5] ? 112 : 160, 26, o[5] ? 'nodo evid' : 'nodo', P);
      A.txt(190 + (o[5] ? 56 : 80), 268, o[5] ? 'te ne accorgi' : 'lavora di nascosto', o[5] ? 't-b' : 't-a', P);
    });
    A.icona('sparkles', 110, 190, { s: 64, p: 9 });
    A.txt(190, 176, '8 IA in una sola giornata', 't-b', { p: 9 }, 'start');
    A.txt(190, 210, 'Te ne sei accorto di 5,', 't', { p: 9 }, 'start');
    A.txt(190, 236, 'le altre 3 lavorano senza che tu le veda.', 't', { p: 9 }, 'start');
  });

  /* ===================== 1.5 · il computer prova le mosse ===================== */
  // griglia del tris: st = tre stringhe ('X', 'O', '.'), evid = caselle da evidenziare [[riga, colonna]…]
  function griglia(A, x, y, c, st, o, evid) {
    var g = A.g(o);
    (evid || []).forEach(function (e) { A.box(x + e[1] * c + 2, y + e[0] * c + 2, c - 4, c - 4, 'nodo evid', {}, g); });
    A.path('M' + (x + c) + ' ' + y + ' V' + (y + 3 * c) + ' M' + (x + 2 * c) + ' ' + y + ' V' + (y + 3 * c) + ' M' + x + ' ' + (y + c) + ' H' + (x + 3 * c) + ' M' + x + ' ' + (y + 2 * c) + ' H' + (x + 3 * c), 'lin', {}, null, g);
    for (var r = 0; r < 3; r++) for (var k = 0; k < 3; k++) {
      var ch = st[r].charAt(k); if (ch === '.') continue;
      var t = A.txt(x + k * c + c / 2, y + r * c + c * 0.72, ch, ch === 'X' ? 't-b' : 't-a', {}, 'middle', g);
      t.style.fontSize = Math.round(c * 0.62) + 'px'; t.style.fontWeight = '800';
    }
    return g;
  }
  costruisci('f-tris', function (svg, A) {
    var INI = ['X..', '.O.', '..X'];
    griglia(A, 300, 14, 40, INI, {});
    A.txt(360, 158, 'Il computer sta decidendo', 't-b', { f: 0 });
    A.txt(360, 158, 'Prova l’angolo in alto a destra', 't-b', { p: 1, f: 1 });
    A.txt(360, 158, 'Prova il lato in alto', 't-b', { p: 2, f: 2 });
    A.txt(360, 158, 'Sceglie il lato in alto', 't-b', { p: 3 });
    A.txt(360, 178, 'tocca a O, cioè al computer', 't-m');
    var o3 = A.txt(300 + 40 + 20, 14 + 29, 'O', 't-a', { p: 3 }); o3.style.fontSize = '25px'; o3.style.fontWeight = '800';
    // ramo 1: angolo in alto a destra → perde
    var A1 = { p: 1 };
    function etichetta(x, y, righe, o) { righe.forEach(function (t, i) { A.txt(x, y + i * 16, t, 't-m', o); }); }
    A.txt(170, 212, 'Prova 1 · angolo in alto a destra', 't-eti', A1);
    griglia(A, 70, 226, 20, ['X.O', '.O.', '..X'], A1, [[0, 2]]);
    A.path('M134 256 H206 M206 256 l-6 -4 m6 4 l-6 4', 'lin att', A1);
    griglia(A, 212, 226, 20, ['X.O', '.O.', 'X.X'], A1, [[2, 0]]);
    etichetta(100, 306, ['O prova', 'l’angolo'], A1); etichetta(242, 306, ['X blocca e minaccia', 'due tris insieme'], A1);
    A.box(120, 346, 100, 30, 'nodo guasto', A1); A.txt(170, 366, 'perde', 't-e', A1);
    // ramo 2: lato in alto → pareggia
    var B2 = { p: 2 };
    A.txt(520, 212, 'Prova 2 · lato in alto', 't-eti', B2);
    griglia(A, 370, 226, 20, ['XO.', '.O.', '.XX'], B2, [[0, 1], [2, 1]]);
    A.path('M434 256 H484 M484 256 l-6 -4 m6 4 l-6 4', 'lin ok', B2);
    griglia(A, 490, 226, 20, ['XOX', '.O.', 'OXX'], B2, [[2, 0], [0, 2]]);
    A.path('M554 256 H604 M604 256 l-6 -4 m6 4 l-6 4', 'lin ok', B2);
    griglia(A, 610, 226, 20, ['XOX', 'XOO', 'OXX'], B2, [[1, 2], [1, 0]]);
    etichetta(400, 306, ['O prova il lato,', 'X deve bloccare'], B2); etichetta(520, 306, ['poi si bloccano', 'a vicenda'], B2); etichetta(640, 306, ['griglia piena,', 'nessun tris'], B2);
    A.box(465, 346, 110, 30, 'nodo evid', B2); A.txt(520, 366, 'pareggia', 't-b', B2);
    A.icona('circle-check', 640, 360, { s: 28, p: 3 }); A.txt(640, 392, 'mossa scelta', 't-b', { p: 3 });
  });

  /* ===================== 1.7 · Prova tu · è IA o non è IA? ===================== */
  var COMMONS = 'https://commons.wikimedia.org/wiki/';
  var CASI = [
    { nome: 'Calcolatrice', ia: false, perche: 'Fa solo il calcolo che le dai, sempre allo stesso modo.', foto: 'Metalmate Calculator 02.jpg' },
    { nome: 'Tastiera dello smartphone che suggerisce la parola successiva', ia: true, perche: 'Prevede la parola che stai per scrivere in base a come scrivi.', url: 'https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2024/12/IMG_1245-1200x675.jpg' },
    { nome: 'Filtri dei social che seguono il volto (per esempio quelli di Instagram)', ia: true, perche: 'Trovano il tuo volto nell’immagine e lo seguono mentre ti muovi.', url: 'https://p16-seeyou-useast8.capcutcdn-us.com/tos-useast8-i-2zwwjm3azk-tx2/d8b9b17f83994e719d76c71da796ea1f~tplv-2zwwjm3azk-compress:q75.image' },
    { nome: 'Semaforo a tempo', ia: false, perche: 'Cambia colore ogni tot secondi, qualunque cosa succeda.', foto: 'Traffic Light, Vienna.jpg' },
    { nome: 'Antifrode della carta di pagamento', ia: true, perche: 'Riconosce un pagamento insolito tra milioni.', url: 'https://cisl-bergamo.it/wp-content/uploads/2025/11/furto-carta-di-credito-phishing.jpg' },
    { nome: 'Lavatrice con i programmi', ia: false, perche: 'Segue il programma che scegli tu, passo dopo passo.', foto: 'Pictogram on washing machine AEG-Electrolux Öko-Lavamat.jpg' },
    { nome: 'Ascensore', ia: false, perche: 'Va al piano del pulsante premuto: non decide nulla.', foto: 'Elevator buttons 2015-07 1436030703.JPG' },
    { nome: 'Lettura delle targhe ai varchi delle zone a traffico limitato', ia: true, perche: 'Legge lettere e numeri di una targa da una fotografia.', url: 'https://cdn.auto.it/img/1200/1200/2024/09/13/145141171-59720e01-dea9-4c00-bede-f19cf1d6bece.jpg' },
    { nome: 'Playlist «Discover Weekly» di Spotify', ia: true, perche: 'Sceglie le canzoni in base a ciò che hai ascoltato tu.', foto: 'Spotify App (23745887894).jpg' },
    { nome: 'Distributore automatico di bevande', ia: false, perche: 'Dà la bevanda in base al tasto premuto e ai soldi inseriti.', foto: 'Japanese drink vending machine(2).jpg' }
  ];
  W.registra('iaonon', function (el) {
    var b = W.base(el, 'Prova tu · è IA o non è IA?', 'caso 1 di ' + CASI.length);
    var badge = el.querySelector('.wid-badge');
    var n = 0, punti = 0, risposto = false;
    b.ctrl.className = 'wid-iaonon';
    var quadro = W.h('div', { 'class': 'ia-quadro' });
    var nome = W.h('p', { 'class': 'ia-nome' });
    var tasti = W.h('div', { 'class': 'ia-tasti', role: 'group', 'aria-label': 'Risposta' });
    var bSi = W.bottone('È IA', function () { rispondi(true); }, 'primario');
    var bNo = W.bottone('Non è IA', function () { rispondi(false); });
    var bAv = W.bottone('Avanti', function () { n++; mostra(); }, 'primario');
    tasti.appendChild(bSi); tasti.appendChild(bNo);
    var col = W.h('div', { 'class': 'ia-col' }, [nome, tasti, bAv]);
    b.ctrl.appendChild(quadro); b.ctrl.appendChild(col);
    b.chiudi();

    function figura(c) {
      quadro.innerHTML = '';
      if (c.foto || c.url) {
        var img = W.h('img', { src: c.url || 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(c.foto) + '?width=900', alt: c.nome, referrerpolicy: 'no-referrer', loading: 'lazy' });
        var a = c.url ? W.h('div', { 'class': 'ia-foto' }, [img])
          : W.h('a', { href: COMMONS + 'File:' + encodeURIComponent(c.foto.replace(/ /g, '_')), target: '_blank', rel: 'noopener', 'class': 'ia-foto', title: 'Wikimedia Commons: fonte e licenza' }, [img]);
        quadro.appendChild(a);
        if (c.foto) quadro.appendChild(W.h('span', { 'class': 'ia-fonte', testo: 'foto: Wikimedia Commons' }));
      } else {
        var svg = W.s('svg', { viewBox: '0 0 24 24', 'class': 'ic ia-icona', 'aria-hidden': 'true' });
        svg.innerHTML = (window.ICONE || {})[c.icona] || '';
        quadro.appendChild(W.h('div', { 'class': 'ia-foto ia-senza' }, [svg]));
      }
    }
    function mostra() {
      risposto = false;
      if (n >= CASI.length) { fine(); return; }
      var c = CASI[n];
      badge.textContent = 'caso ' + (n + 1) + ' di ' + CASI.length;
      figura(c); nome.textContent = c.nome;
      tasti.hidden = false; bAv.hidden = true; bSi.disabled = bNo.disabled = false;
      b.dica('Che cosa ne pensi? Scegli «È IA» o «Non è IA».');
    }
    function rispondi(dico) {
      if (risposto) return; risposto = true;
      var c = CASI[n], giusto = dico === c.ia; if (giusto) punti++;
      bSi.disabled = bNo.disabled = true; bAv.hidden = false;
      bAv.textContent = n === CASI.length - 1 ? 'Vedi il risultato' : 'Avanti';
      b.dica((giusto ? 'Giusto. ' : 'Non proprio. ') + (c.ia ? 'È IA: ' : 'Non è IA: ') + c.perche.charAt(0).toLowerCase() + c.perche.slice(1), giusto ? 'ok' : 'no');
    }
    function fine() {
      badge.textContent = 'risultato';
      quadro.innerHTML = '';
      var svg = W.s('svg', { viewBox: '0 0 24 24', 'class': 'ic ia-icona', 'aria-hidden': 'true' });
      svg.innerHTML = (window.ICONE || {})['trophy'] || '';
      quadro.appendChild(W.h('div', { 'class': 'ia-foto ia-senza' }, [svg]));
      nome.textContent = 'Hai indovinato ' + punti + ' casi su ' + CASI.length + '.';
      tasti.hidden = true; bAv.hidden = false; bAv.textContent = 'Ricomincia';
      bAv.onclick = function () { n = 0; punti = 0; bAv.onclick = function () { n++; mostra(); }; mostra(); };
      b.dica('Il criterio completo lo costruiamo nel capitolo 4.', 'ok');
    }
    mostra();
  });
