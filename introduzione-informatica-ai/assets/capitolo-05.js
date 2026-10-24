/* Capitolo 5 · Come ragiona un computer — le quattro forme dello stesso algoritmo */
(function () {
  'use strict';
  var K = window.SCENA, S = K.S, costruisci = K.costruisci;
  var NB = '    ';

  /* ===================== 4.4 · lo stesso algoritmo in quattro forme ===================== */
  costruisci('f-quattro', function (svg, A) {
    var LW = 350, LH = 256;
    var CELLE = [[6, 6], [364, 6], [6, 268], [364, 268]];
    var TIT = ['1 · Linguaggio naturale', '2 · Diagramma di flusso', '3 · Pseudocodice', '4 · Codice di programmazione'];
    CELLE.forEach(function (c, i) {
      A.box(c[0], c[1], LW, LH, 'nodo');
      A.txt(c[0] + 14, c[1] + 22, TIT[i], 't-eti', {}, 'start');
    });

    // elenchi di righe [testo, passo]: prima le strisce che si accendono, poi il testo
    function righe(cella, lista, passo, mono, fs) {
      var x = CELLE[cella][0] + 14, y0 = CELLE[cella][1] + 56;
      var y = y0, pos = [];
      lista.forEach(function (r, k) { if (k && r[1] !== lista[k - 1][1]) y += 8; pos.push(y); y += passo; });
      lista.forEach(function (r, k) { A.box(x - 6, pos[k] - 16, LW - 16, passo - 2, 'nodo evid', { p: r[1], f: r[1] }); });
      lista.forEach(function (r, k) { var t = A.txt(x, pos[k], r[0], mono ? 't-mono' : 't', {}, 'start'); if (fs) t.style.fontSize = fs + 'px'; });
    }
    righe(0, [
      ['1. Parti da un credito di zero.', 1],
      ['2. Finché il credito è minore del prezzo,', 2], [NB + 'chiedi una moneta e aggiungila.', 2],
      ['3. Quando il credito basta,', 3], [NB + 'prepara il caffè.', 3],
      ['4. Se il credito supera il prezzo,', 4], [NB + 'restituisci la differenza come resto.', 4]], 24, false, 14);
    righe(2, [
      ['credito ← 0', 1], ['leggi prezzo', 1],
      ['finché credito < prezzo', 2], [NB + 'leggi moneta', 2], [NB + 'credito ← credito + moneta', 2],
      ['scrivi «Caffè pronto»', 3],
      ['se credito > prezzo', 4], [NB + 'scrivi «Resto:», credito − prezzo', 4]], 23, true, 13);
    righe(3, [
      ['prezzo = 120  # in centesimi', 1], ['credito = 0', 1],
      ['while credito < prezzo:', 2], [NB + 'credito = credito + int(input("Moneta: "))', 2],
      ['print("Caffè pronto")', 3],
      ['if credito > prezzo:', 4], [NB + 'print("Resto:", credito - prezzo)', 4]], 28, true, 11);

    // diagramma di flusso
    var X0 = CELLE[1][0], Y0 = CELLE[1][1], cx = X0 + 112, rx = X0 + 284;
    function ovale(y, t) { S(svg, 'rect', { x: cx - 36, y: y - 10, width: 72, height: 20, rx: 10, 'class': 'nodo' }); A.txt(cx, y + 5, t, 't'); }
    function riq(x, y, w, t, passo) {
      A.box(x - w / 2, y - 11, w, 22, 'nodo');
      if (passo) A.box(x - w / 2, y - 11, w, 22, 'nodo evid', { p: passo, f: passo });
      A.txt(x, y + 5, t, 't');
    }
    function rombo(y, t, passo) {
      var d = 'M' + cx + ' ' + (y - 22) + ' L' + (cx + 82) + ' ' + y + ' L' + cx + ' ' + (y + 22) + ' L' + (cx - 82) + ' ' + y + ' Z';
      A.path(d, 'nodo');
      if (passo) A.path(d, 'nodo evid', { p: passo, f: passo });
      A.txt(cx, y + 4, t, 't').style.fontSize = '12px';
    }
    function freccia(d, ux, uy, dir) { // linea con punta (dir: 'g' giù, 'd' destra, 's' sinistra, 'u' su)
      A.path(d, 'lin');
      var h = dir === 'g' ? [-5, -6, 0, 0, 5, -6] : dir === 'd' ? [-6, -5, 0, 0, -6, 5] : dir === 's' ? [6, -5, 0, 0, 6, 5] : [-5, 6, 0, 0, 5, 6];
      A.path('M' + (ux + h[0]) + ' ' + (uy + h[1]) + ' L' + (ux + h[2]) + ' ' + (uy + h[3]) + ' L' + (ux + h[4]) + ' ' + (uy + h[5]), 'lin');
    }
    var yI = Y0 + 42, yC = Y0 + 72, yD1 = Y0 + 116, yP = Y0 + 158, yD2 = Y0 + 198, yF = Y0 + 240;
    ovale(yI, 'Inizio');
    riq(cx, yC, 130, 'credito = 0', 1);
    rombo(yD1, 'credito < prezzo?', 2);
    riq(rx, yD1, 116, 'aggiungi moneta', 2);
    riq(cx, yP, 130, 'prepara il caffè', 3);
    rombo(yD2, 'credito > prezzo?', 4);
    riq(rx, yD2, 116, 'dai il resto', 4);
    ovale(yF, 'Fine');
    freccia('M' + cx + ' ' + (yI + 10) + ' V' + (yC - 11), cx, yC - 11, 'g');
    freccia('M' + cx + ' ' + (yC + 11) + ' V' + (yD1 - 22), cx, yD1 - 22, 'g');
    freccia('M' + (cx + 82) + ' ' + yD1 + ' H' + (rx - 58), rx - 58, yD1, 'd');
    A.path('M' + rx + ' ' + (yD1 - 11) + ' V' + (yC + 22) + ' H' + cx, 'lin');   // la moneta aggiunta ricomincia il controllo
    freccia('M' + cx + ' ' + (yD1 + 22) + ' V' + (yP - 11), cx, yP - 11, 'g');
    freccia('M' + cx + ' ' + (yP + 11) + ' V' + (yD2 - 22), cx, yD2 - 22, 'g');
    freccia('M' + (cx + 82) + ' ' + yD2 + ' H' + (rx - 58), rx - 58, yD2, 'd');
    freccia('M' + rx + ' ' + (yD2 + 11) + ' V' + yF + ' H' + (cx + 36), cx + 36, yF, 's');
    freccia('M' + cx + ' ' + (yD2 + 22) + ' V' + (yF - 10), cx, yF - 10, 'g');
    A.txt(cx + 90, yD1 - 5, 'sì', 't-b', {}, 'start'); A.txt(cx + 6, yD1 + 34, 'no', 't-m', {}, 'start');
    A.txt(cx + 90, yD2 - 5, 'sì', 't-b', {}, 'start'); A.txt(cx + 6, yD2 + 34, 'no', 't-m', {}, 'start');

  });

})();

/* Capitolo 7 · indirizzi delle foto usate dalle scene (generato da capitolo_07.py) */
window.FU5 = {
  "gatto": "https://images.pexels.com/photos/8305815/pexels-photo-8305815.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "volpe": "https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "fold": "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "scatola": "https://images.pexels.com/photos/9823020/pexels-photo-9823020.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "sphynx": "https://images.squarespace-cdn.com/content/v1/53c5b010e4b0c3db71b3067c/1472801684905-BXYK2YRQY81GSO0LI5O9/close-up-portrait-sphynx-hairless-cat-alicia-rius-animal-photographer.jpg",
  "spalle": "https://images.pexels.com/photos/10066594/pexels-photo-10066594.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "palla": "https://articles.hepper.com/wp-content/uploads/2021/09/tabby-cat-sleeping-in-a-ball-position-on-a-cat-tree.jpg",
  "luce": "https://images.pexels.com/photos/13516205/pexels-photo-13516205.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "salto": "https://i.chzbgr.com/full/9037549056/h54637546/freeze-frame-photo-of-a-cat-in-mid-air-in-the-bedroom",
  "pancia": "https://images.pexels.com/photos/35247528/pexels-photo-35247528.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "cane": "https://commons.wikimedia.org/wiki/Special:FilePath/Labrador_Retriever_-_Yellow.JPG?width=360",
  "uccello": "https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Tit_perched_on_a_branch.jpg?width=360",
  "auto": "https://commons.wikimedia.org/wiki/Special:FilePath/Red_car_yellow_buildings_(Unsplash).jpg?width=360",
  "stockfish": "https://stockfishchess.org/images/gui/lichess_gui.webp",
  "lens": "assets/immagini/ia-google-lens-pianta.webp",
  "faceid": "https://cdn.osxdaily.com/wp-content/uploads/2017/11/use-iphone-x-without-face-id.jpg",
  "gmail": "https://wips.plug.it/cips/tecnologia/cms/2020/02/gmail.jpg"
};

/* Capitolo 7 · Dall’algoritmo all’IA che impara — animazioni a passi (le foto sono vere: indirizzi in FU) */
(function () {
  'use strict';
  var K = window.SCENA, S = K.S, costruisci = K.costruisci;
  var FU = window.FU5;

  // foto intera in un riquadro (mai tagliata)
  function ph(A, k, x, y, w, h, o) {
    A.box(x, y, w, h, 'fondo', o);
    return A.img(FU[k], x, y, w, h, o);
  }
  function righe(A, x, y, lista, cls, passo, o, anchor) {
    lista.forEach(function (t, i) { A.txt(x, y + i * (passo || 18), t, cls, o, anchor); });
  }

  /* ===================== 5.1 · le regole non bastano ===================== */
  costruisci('f-gatti', function (svg, A) {
    ph(A, 'gatto', 240, 20, 240, 180, { f: 0 });
    A.txt(360, 232, 'Riconoscere un gatto: per noi è facile', 't-b', { f: 0 });
    var REGOLE = [
      ['Regola 1 · «Ha le orecchie a punta»', [['volpe', ['non è un gatto']], ['fold', ['è un gatto senza', 'orecchie a punta']], ['scatola', ['è un gatto, ma l’oggetto', 'ne nasconde le orecchie']]]],
      ['Regola 2 · «Ha il pelo»', [['volpe', ['ha il pelo e', 'non è un gatto']], ['sphynx', ['è un gatto senza pelo']]]],
      ['Regola 3 · «Si vedono baffi e muso»', [['spalle', ['è un gatto, ma non', 'si vede il muso']], ['palla', ['è un gatto, ma non', 'si vede il muso']], ['luce', ['è un gatto, ma non', 'si vede il muso']]]],
      ['Regola 4 · «Sta in piedi sulle quattro zampe»', [['salto', ['è un gatto, ma in', 'una posa insolita']], ['pancia', ['è un gatto, ma in', 'una posa insolita']]]]
    ];
    REGOLE.forEach(function (r, i) {
      var P = { p: i + 1, f: i + 1 }, n = r[1].length, X = n === 3 ? [30, 260, 490] : [130, 390];
      A.txt(360, 26, r[0], 't-b', P);
      r[1].forEach(function (f, j) {
        ph(A, f[0], X[j], 44, 200, 150, P);
        righe(A, X[j] + 100, 216, f[1], 't-e', 18, P);
      });
    });
    // schermata finale: tutte le eccezioni insieme
    var TUTTE = ['volpe', 'fold', 'scatola', 'sphynx', 'spalle', 'palla', 'luce', 'salto', 'pancia'];
    TUTTE.forEach(function (k, i) {
      var riga = i < 5 ? 0 : 1, col = i < 5 ? i : i - 5, x0 = riga ? 89 : 20;
      ph(A, k, x0 + col * 138, 24 + riga * 108, 128, 96, { p: 5 });
    });
    A.txt(360, 262, 'Per ogni regola, un’eccezione', 't-b', { p: 5 });
    A.txt(360, 284, 'servirebbero migliaia di regole', 't-m', { p: 5 });
  });

  /* ===================== 5.2 · imparare dagli esempi ===================== */
  costruisci('f-impara', function (svg, A) {
    A.icona('graduation-cap', 360, 110, { s: 80, tono: 'accent', f: 0 });
    A.txt(360, 190, 'Impara dagli esempi', 't-b', { f: 0 });
    var MISTI = ['gatto', 'cane', 'fold', 'uccello', 'sphynx', 'volpe', 'spalle', 'auto', 'palla', 'salto'];
    MISTI.forEach(function (k, i) { ph(A, k, 20 + (i % 5) * 138, 24 + Math.floor(i / 5) * 108, 128, 96, { p: 1, f: 1 }); });
    A.txt(360, 262, 'Gatti e non gatti, tutti mischiati', 't-m', { p: 1, f: 1 });
    var P = { p: 2, f: 4 };
    A.txt(180, 26, 'gatti', 't-b', P); A.txt(520, 26, 'non gatti', 't-b', P);
    ['gatto', 'fold', 'sphynx', 'spalle', 'palla', 'salto'].forEach(function (k, i) { ph(A, k, 30 + (i % 3) * 110, 40 + Math.floor(i / 3) * 84, 100, 75, P); });
    ['volpe', 'cane', 'uccello', 'auto'].forEach(function (k, i) { ph(A, k, 410 + (i % 2) * 110, 40 + Math.floor(i / 2) * 84, 100, 75, P); });
    A.txt(360, 218, 'cerca da solo che cosa li distingue', 't-b', { p: 2, f: 2 });
    ph(A, 'pancia', 296, 224, 128, 96, { p: 3 });
    A.txt(280, 276, 'foto nuova,', 't-m', { p: 3 }, 'end'); A.txt(280, 294, 'mai vista', 't-m', { p: 3 }, 'end');
    var t = A.txt(444, 268, 'gatto, 94%', 't-b', { p: 4 }, 'start'); t.style.fontSize = '30px';
    A.txt(444, 294, 'Non è una certezza:', 't-m', { p: 4 }, 'start'); A.txt(444, 312, 'è la risposta più probabile', 't-m', { p: 4 }, 'start');
  });

  /* ===================== 5.3 · il filtro antispam in due modi ===================== */
  costruisci('f-antispam', function (svg, A) {
    var MAIL = ['VINCI un telefono GRATIS, clicca qui!', 'G R A T I S!!! cl1cca q u i', 'Ho vinto la partita, domani te la racconto!'];
    A.box(60, 10, 600, 62, 'nodo');
    A.txt(360, 46, 'Arrivano tre email, una alla volta', 't', { f: 0 });
    MAIL.forEach(function (m, i) {
      A.icona('mail', 96, 41, { s: 30, tono: 'accent', p: i + 1, f: i + 1 });
      A.txt(130, 48, '«' + m + '»', 't-b', { p: i + 1, f: i + 1 }, 'start').style.fontSize = '18px';
    });
    var COL = [{ x: 20, tit: 'Algoritmo tradizionale', r: ['Regola scritta da una persona:', 'se c’è «gratis» o «vinci», è spam'] },
               { x: 370, tit: 'Apprendimento automatico', r: ['Ha visto migliaia di email', 'spam e non spam'] }];
    COL.forEach(function (c) {
      A.box(c.x, 92, 330, 282, 'nodo');
      A.txt(c.x + 165, 120, c.tit, 't-b');
      A.txt(c.x + 165, 148, c.r[0], 't-m'); A.txt(c.x + 165, 168, c.r[1], 't');
    });
    var V = [   // [verdetto, giusto, motivo]
      [['spam', true, []], ['spam al 99%', true, []]],
      [['non spam', false, ['la parola è scritta', 'in modo nuovo']], ['spam al 96%', true, ['somiglia a tante', 'email viste']]],
      [['spam', false, ['contiene «vinto»']], ['non spam', true, ['spam all’8%']]]
    ];
    V.forEach(function (coppia, i) {
      coppia.forEach(function (v, c) {
        var x = COL[c].x, P = { p: i + 1, f: i + 1 };
        A.box(x + 30, 196, 270, 96, v[1] ? 'nodo evid' : 'nodo guasto', P);
        A.icona(v[1] ? 'circle-check' : 'circle-x', x + 64, 244, { s: 40, tono: v[1] ? 'brand' : 'errore', p: i + 1, f: i + 1 });
        var t = A.txt(x + 92, 238, v[0], v[1] ? 't-b' : 't-e', P, 'start'); t.style.fontSize = '20px';
        A.txt(x + 92, 262, v[1] ? 'giusto' : 'sbagliato', 't-m', P, 'start');
        righe(A, x + 165, 316, v[2].map(function (s) { return s; }), 't-m', 18, P);
      });
    });
  });

  /* ===================== 5.4 · i quattro cerchi ===================== */
  costruisci('f-cerchi', function (svg, A) {
    var CX = 170, BASE = 326, R = [150, 112, 74, 36];
    var SIGLE = ['IA', 'ML', 'DL', 'GenAI'];
    R.forEach(function (r, i) {
      var cy = BASE - r;
      S(svg, 'circle', { cx: CX, cy: cy, r: r, 'class': 'nodo' });
      S(svg, 'circle', { cx: CX, cy: cy, r: r, 'class': 'nodo evid', 'data-passo': i + 1 });
      S(svg, 'circle', { cx: CX, cy: cy, r: r, 'class': 'anello', 'data-passo': i + 1, 'data-fino': i + 1 });
      A.txt(CX, i === 3 ? cy + 5 : cy - r + 26, SIGLE[i], 't-b');
    });
    A.txt(540, 150, 'Quattro termini,', 't-b', { f: 0 }).style.fontSize = '22px';
    A.txt(540, 180, 'uno dentro l’altro', 't-b', { f: 0 }).style.fontSize = '22px';
    var PAN = [
      ['IA', 'Artificial Intelligence (AI)', ['Tutto ciò che svolge compiti che', 'richiederebbero intelligenza.'], ['I sistemi a regole scritte a mano,', 'come i primi programmi di conversazione.']],
      ['Apprendimento automatico', 'Machine Learning (ML)', ['L’IA che impara dagli esempi.'], ['Il filtro antispam di Gmail.']],
      ['Apprendimento profondo', 'Deep Learning (DL)', ['Apprendimento automatico con sistemi', 'molto grandi, a più livelli.'], ['Google Lens, che riconosce una pianta.']],
      ['IA generativa', 'Generative AI (GenAI)', ['Produce contenuti nuovi.'], ['Midjourney, Suno.']]
    ];
    PAN.forEach(function (d, i) {
      var P = { p: i + 1, f: i + 1 };
      A.txt(370, 62, d[0], 't-b', P, 'start').style.fontSize = '22px';
      A.txt(370, 88, d[1], 't-m', P, 'start');
      righe(A, 370, 136, d[2], 't', 22, P, 'start');
      A.txt(370, 214, 'ESEMPIO', 't-eti', P, 'start');
      righe(A, 370, 238, d[3], 't', 22, P, 'start');
    });
    righe(A, 540, 124, ['Ogni cerchio sta dentro quello più grande.', 'Un’IA generativa è anche apprendimento', 'profondo, apprendimento automatico e IA.'], 't', 26, { p: 5 });
    A.txt(540, 214, 'Non vale il contrario.', 't-b', { p: 5 });
  });

  /* ===================== 5.5 · tre gradini ===================== */
  costruisci('f-gradini', function (svg, A) {
    var G = [
      { x: 20, y: 240, h: 80, t: ['IA specializzata', 'Narrow AI (ANI)'], et: 'esiste oggi', cl: 't-b' },
      { x: 250, y: 180, h: 140, t: ['IA generale', 'Artificial General', 'Intelligence (AGI)'], et: 'ipotetica', cl: 't-m' },
      { x: 480, y: 120, h: 200, t: ['Superintelligenza', 'Artificial Super', 'Intelligence (ASI)'], et: 'ipotetica', cl: 't-m' }
    ];
    G.forEach(function (g, i) {
      var b = A.box(g.x, g.y, 210, g.h, 'nodo');
      if (i) b.style.strokeDasharray = '6 4';
      var l = A.box(g.x, g.y, 210, g.h, 'nodo evid', { p: i + 1, f: i + 1 }); if (i) l.style.strokeDasharray = '6 4';
      var l2 = A.box(g.x, g.y, 210, g.h, 'nodo evid', { p: 4 }); if (i) l2.style.strokeDasharray = '6 4';
      A.txt(g.x + 105, g.y + 26, g.t[0], 't-b');
      righe(A, g.x + 105, g.y + 46, g.t.slice(1), 't-m', 16);
      A.txt(g.x + 105, g.y + g.h - 12, g.et, g.cl);
    });
    // gli esempi del capitolo 3, sul primo gradino
    var P = { p: 1, f: 1 };
    [['stockfish', 'Stockfish: scacchi'], ['lens', 'Google Lens: piante'], ['faceid', 'Face ID: volti'], ['gmail', 'Gmail: antispam']].forEach(function (f, i) {
      var x = 20 + (i % 2) * 108, y = 12 + Math.floor(i / 2) * 110;
      ph(A, f[0], x, y, 102, 74, P);
      A.txt(x + 51, y + 90, f[1], 't-m', P).style.fontSize = '11px';
    });
  });

})();
