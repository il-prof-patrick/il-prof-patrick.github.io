/* Capitolo 3 · Un computer può essere intelligente? — gioco di Turing e stanza cinese */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.SCENA, S = K.S, costruisci = K.costruisci;

  /* ===================== 3.1 · il gioco dell’imitazione ===================== */
  // risposte scritte a mano: la macchina è sempre B
  var GIRI = [
    { titolo: 'Giro 1', domande: [
      ['Che cosa hai fatto ieri sera?', 'Sono uscita con le mie amiche: pizza e poi a casa presto.', 'Niente di speciale: pizza, un po’ di serie TV e a letto presto.'],
      ['Quanto fa 34 957 + 70 764?', '105 721.', 'Uh, aspetta… più o meno 105 000, direi.'],
      ['Com’è il profumo del mare?', 'Sa di sale e di alghe, e con la bassa marea è fortissimo.', 'Mi ricorda le vacanze dalla nonna: sale, crema solare e pesce fritto.']],
      esito: function (scelta) {
        return 'La macchina era B: ha finto di non saper fare il conto e ha inventato dei ricordi. ' +
          (scelta === 'A' ? 'Ti ha ingannato: la macchina supera il test.' : 'L’hai riconosciuta, ma le sue risposte erano molto da persona.'); } },
    { titolo: 'Giro 2', domande: [
      ['Quanto fa 34 957 × 70 764?', 'Boh, è troppo difficile.', '2 473 697 148.'],
      ['Elenca i numeri primi tra 1000 e 1060.', 'Ehm… forse 1001?', '1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051.'],
      ['Traduci in francese: «domani piove, ma io esco lo stesso».', 'Non parlo francese.', 'Demain il pleut, mais je sors quand même.']],
      esito: function (scelta) {
        return 'La macchina era B, e la si riconosce subito, perché sa fare cose che una persona non sa fare. ' +
          (scelta === 'A' ? 'Hai scelto A, che era la persona. ' : '') + 'La macchina non supera il test, ma ha fatto cose molto intelligenti.'; } }
  ];
  W.registra('turing', function (el) {
    var b = W.base(el, 'Prova tu · il gioco dell’imitazione', 'giro 1 di 2');
    var badge = el.querySelector('.wid-badge');
    var giro = 0, n = 0, fase = 'domande';
    b.ctrl.className = 'wid-turing';
    var info = W.h('p', { 'class': 'tu-info' });
    var colA = W.h('div', { 'class': 'tu-col' }), colB = W.h('div', { 'class': 'tu-col' });
    var cols = W.h('div', { 'class': 'tu-cols' }, [colA, colB]);
    var esito = W.h('p', { 'class': 'tu-esito' });
    var tasti = W.h('div', { 'class': 'tu-tasti' });
    b.ctrl.appendChild(info); b.ctrl.appendChild(cols); b.ctrl.appendChild(esito); b.ctrl.appendChild(tasti);
    b.chiudi();

    function intesta(col, nome) {
      col.innerHTML = '';
      var svg = W.s('svg', { viewBox: '0 0 24 24', 'class': 'ic tu-ic', 'aria-hidden': 'true' });
      svg.innerHTML = (window.ICONE || {})['message-circle'] || '';
      col.appendChild(W.h('div', { 'class': 'tu-nome' }, [svg, W.h('span', { testo: nome })]));
    }
    function scambio(col, d, i) {
      var box = W.h('div', { 'class': 'tu-scambio' }, [W.h('p', { 'class': 'tu-q', testo: d[0] }), W.h('p', { 'class': 'tu-r', testo: d[i] })]);
      col.appendChild(box);
    }
    function tasto(t, fn, tipo) { tasti.appendChild(W.bottone(t, fn, tipo)); }
    function disegna() {
      var G = GIRI[giro];
      badge.textContent = fase === 'fine' ? 'conclusione' : G.titolo.toLowerCase() + ' di 2';
      tasti.innerHTML = ''; esito.textContent = ''; esito.className = 'tu-esito';
      if (fase === 'fine') {
        cols.hidden = true;
        info.textContent = 'Che cosa dimostra il test di Turing?';
        esito.className = 'tu-esito fine';
        esito.textContent = 'Quanto bene una macchina imita una persona, non quanto sia intelligente. Superarlo non prova che pensi; non superarlo non prova che non sia intelligente.';
        tasto('Ricomincia', function () { giro = 0; n = 0; fase = 'domande'; riparti(); }, 'primario');
        b.dica('Dal gioco: la macchina passa fingendo di sbagliare e fallisce quando è troppo brava.', 'ok');
        return;
      }
      cols.hidden = false;
      intesta(colA, 'Interlocutore A'); intesta(colB, 'Interlocutore B');
      for (var i = 0; i < n; i++) { scambio(colA, G.domande[i], 1); scambio(colB, G.domande[i], 2); }
      if (fase === 'domande') {
        info.textContent = G.titolo + ' · Tu sei l’interrogatore. Una persona e una macchina ti rispondono per iscritto. Non sai chi è chi.';
        if (n < 3) tasto(n === 0 ? 'Fai la prima domanda' : 'Fai un’altra domanda', function () { n++; disegna(); }, 'primario');
        else {
          info.textContent = G.titolo + ' · Dopo tre domande, chi è la macchina?';
          tasto('A è la macchina', function () { fase = 'scelta'; scegli('A'); });
          tasto('B è la macchina', function () { fase = 'scelta'; scegli('B'); });
        }
        b.dica(n < 3 ? 'Ogni domanda compare in piccolo sopra le due risposte.' : 'Scegli: quale delle due è la macchina?');
      }
    }
    function scegli(s) {
      var G = GIRI[giro];
      disegna();
      tasti.innerHTML = '';
      info.textContent = G.titolo + ' · Risultato';
      esito.textContent = G.esito(s);
      esito.className = 'tu-esito ' + (giro === 0 ? (s === 'A' ? 'no' : 'ok') : (s === 'B' ? 'ok' : 'no'));
      tasto(giro === 0 ? 'Giro 2 · domande difficilissime' : 'Che cosa dimostra?', function () {
        if (giro === 0) { giro = 1; n = 0; fase = 'domande'; } else fase = 'fine';
        disegna();
      }, 'primario');
      b.dica('La macchina è sempre B.');
    }
    function riparti() { disegna(); }
    disegna();
  });

  /* ===================== 3.2 · la stanza cinese ===================== */
  costruisci('f-stanza', function (svg, A) {
    var Y = 104;
    // a sinistra, fuori
    A.icona('user', 90, Y, { s: 64, nome: 'Fuori', sotto: 'chi parla cinese' });
    // frecce: ciò che entra e ciò che esce
    function freccia(x1, x2, y) {
      var v = x2 > x1 ? 1 : -1;
      A.path('M' + x1 + ' ' + y + ' H' + x2, 'lin');
      A.path('M' + (x2 - 8 * v) + ' ' + (y - 6) + ' L' + x2 + ' ' + y + ' L' + (x2 - 8 * v) + ' ' + (y + 6), 'lin');
    }
    freccia(260, 400, 52);
    freccia(400, 260, 156);
    // la stanza chiusa, con una fessura nella parete di sinistra
    A.box(430, 24, 270, 280, 'fondo');
    A.box(430, 24, 270, 280, 'nodo');
    A.box(426, Y - 20, 8, 40, 'nodo evid');
    A.txt(418, Y + 38, 'fessura', 't-m', {}, 'end');
    A.txt(565, 48, 'La stanza chiusa', 't-eti');
    A.icona('user', 500, 108, { s: 56, nome: 'Dentro', sotto: 'non sa il cinese' });
    A.icona('book-open', 640, 108, { s: 56, tono: 'accent', nome: 'Libro di regole' });
    // 1: la domanda entra
    A.via('st1', 'M190 ' + Y + ' L450 ' + Y);
    A.pk('st1', { p: 1, f: 1, resta: true, d: 1400 }, '你好吗？', 'pkt', 86);
    A.txt(90, 210, '«Come stai?»', 't-b', { p: 1, f: 1 });
    // 2: dentro si cerca nel libro e si copia
    A.box(442, 176, 246, 56, 'nodo evid', { p: 2, f: 3 });
    A.txt(565, 198, 'Se vedi 你好吗？', 't', { p: 2, f: 3 });
    A.txt(565, 220, 'scrivi 我很好，谢谢。', 't-b', { p: 2, f: 3 });
    // 3: la risposta esce
    A.via('st2', 'M450 ' + Y + ' L190 ' + Y);
    A.pk('st2', { p: 3, f: 3, resta: true, d: 1400 }, '我很好，谢谢。', 'pkt-ok', 118);
    A.txt(90, 210, '«Sto bene, grazie»', 't-b', { p: 3, f: 3 });
    A.txt(90, 242, 'Una risposta perfetta!', 't-m', { p: 3, f: 3 });
    // 4: dentro non si è capito niente
    A.box(442, 244, 246, 48, 'nodo guasto', { p: 4 });
    A.txt(565, 264, 'Non ho capito niente:', 't-e', { p: 4 });
    A.txt(565, 282, 'ho solo seguito delle regole.', 't-e', { p: 4 });
    A.txt(90, 210, 'Fuori, tutti pensano', 't', { p: 4 });
    A.txt(90, 230, 'che dentro qualcuno', 't', { p: 4 });
    A.txt(90, 250, 'capisca il cinese.', 't', { p: 4 });
  });

})();
