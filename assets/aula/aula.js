/* Informatica con il Prof. Patrick — Presenta in aula: motore condiviso dai moduli.
   Lo carica sito.js alla prima apertura (assets/aula/aula.js + aula.css). Le slide arrivano da window.AULA (capitolo-NN-aula.js).
   Il palco è 1280×720 scalato a tutto schermo; ogni tipo di slide ha una sua composizione (aula.css). */
(function () {
  'use strict';

  window.AulaMotore = function (A, api) {
    var main = api.main, icona = api.icona, iconeInline = api.iconeInline, avviaTutto = api.avviaTutto, md = api.md;
    var S = A.slide, i = 0, aperta = false, cur = null, nera = false;

    var palco = document.createElement('div');
    palco.id = 'palco'; palco.setAttribute('role', 'dialog'); palco.setAttribute('aria-label', 'Presenta in aula');
    palco.innerHTML = '<div class="pl-scena"><div class="pl-tela"></div></div>' +
      '<div class="pl-binario" aria-hidden="true"><i></i></div>' +
      '<div class="pl-com" role="toolbar" aria-label="Comandi della presentazione">' +
      '<button class="pl-b" id="pl-ind" aria-label="Indietro" title="Indietro (←)">' + icona('chevron-left') + '</button>' +
      '<label class="pl-conta"><input id="pl-vai" type="text" inputmode="numeric" aria-label="Vai alla slide" autocomplete="off"><span class="pl-tot"></span></label>' +
      '<button class="pl-b" id="pl-ava" aria-label="Avanti" title="Avanti (→ o spazio)">' + icona('chevron-right') + '</button>' +
      '<span class="pl-sep"></span>' +
      '<button class="pl-b" id="pl-sch" aria-label="Schermo intero" title="Schermo intero (F)"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg></button>' +
      '<button class="pl-b pl-esci" id="pl-esci" aria-label="Esci dalla presentazione" title="Esci (Esc)">' + icona('x') + '<span>Esci</span></button></div>';
    document.body.appendChild(palco);
    // stile «schema geometrico» (2 novembre 2026): lo sceglie il modulo con AULA.stile = 'schema'; domanda ed errore ridisegnati, fondo chiaro
    var SCHEMA = A.stile === 'schema';
    if (SCHEMA) palco.classList.add('st-schema');
    var scena = palco.querySelector('.pl-scena'), tela = palco.querySelector('.pl-tela'), vaiIn = palco.querySelector('#pl-vai'), tot = palco.querySelector('.pl-tot'),
        com = palco.querySelector('.pl-com'), binario = palco.querySelector('.pl-binario'), riempi = binario.querySelector('i');

    // il contesto di ogni slide (sezione in corso) e i tacchetti del binario di avanzamento
    var sezione = ''; S.forEach(function (s) { if (s.tipo === 'sezione') sezione = s.num + ' · ' + s.titolo; s._sez = s.tipo === 'copertina' ? '' : sezione; });
    S.forEach(function (s, k) {
      if (s.tipo !== 'sezione' || !k) return;
      var t = document.createElement('b'); t.style.left = (k / (S.length - 1) * 100) + '%'; binario.appendChild(t);
    });

    function ic(n) { return '<span class="pl-ic">' + icona(n || 'arrow-right') + '</span>'; }
    function nudo(t) { return String(t || '').replace(/\*\*|`|\*/g, ''); }
    function esc(t) { return String(t || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

    // foto: copertina e sezione ritagliate a tutta altezza; le foto didattiche intere, dentro una cornice (la stessa foto sfocata dietro)
    function fotoHtml(f, cls, rv) {
      var img = '<img src="' + f.src + '" alt="' + esc(f.alt || f.tit) + '" referrerpolicy="no-referrer">';
      var taglia = /pl-cop-foto|pl-sez-foto/.test(cls || '');
      return '<figure class="pl-foto ' + (cls || '') + (rv ? ' rv' : '') + '">' +
        (taglia ? img : '<div class="pl-cornice" style="--sf:url(&quot;' + f.src + '&quot;)">' + img + '</div>') +
        (f.tit && !taglia ? '<figcaption>' + md(f.tit) + '</figcaption>' : '') + '</figure>';
    }
    function titolo(s, extra) { return '<h2 class="pl-tit"' + (extra || '') + '>' + md(s.titolo) + '</h2>'; }
    // sottotitolo = il concetto della slide (campo msg), sotto il titolo-argomento
    function sottotitolo(s) { return s.msg ? '<p class="pl-msg">' + md(s.msg) + '</p>' : ''; }
    // occhiello: riga piccola maiuscola sopra il titolo («5.2 · Definizione», «Nella storia»)
    function occ(s) { return s.occhiello ? '<div class="pl-occ' + (s.tonoOcc ? ' ' + s.tonoOcc : '') + '">' + md(s.occhiello) + '</div>' : ''; }
    function testa(s) { return '<header class="pl-testa en">' + occ(s) + titolo(s) + sottotitolo(s) + '</header>'; }
    // parole che accompagnano un passo: stanno nella riga sotto la slide (data-riga sull'elemento che si svela)
    function riga(t) { return t ? ' data-riga="' + esc(md(t)) + '"' : ''; }
    function corpoNd(b) {
      return (b.testo ? '<p>' + md(b.testo) + '</p>' : '') +
        (b.righe ? '<ul>' + b.righe.map(function (r) { return '<li>' + md(r) + '</li>'; }).join('') + '</ul>' : '') +
        (b.html ? '<pre class="codice"><code>' + b.html + '</code></pre>' : '') +
        (b.nota ? '<p class="pl-nd-nota">' + md(b.nota) + '</p>' : '');
    }
    // blocco bianco con icona nel quadratino e titolo; tono: si (verde), no (rosso), forse (ambra), fine (risultato)
    function nodo(b, cls) {
      return '<div class="pl-nd ' + (b.tono || '') + ' ' + (cls || '') + '"' + riga(b.riga) + '>' +
        (b.titolo || b.icona ? '<div class="pl-nd-t">' + (b.icona ? '<span class="pl-ib">' + icona(b.icona) + '</span>' : '') + '<b>' + md(b.titolo || '') + '</b></div>' : '') + corpoNd(b) + '</div>';
    }
    function tag(c) { return c.etichetta ? '<span class="pl-tag ' + (c.tono || '') + '">' + (c.tono === 'si' ? '✓ ' : c.tono === 'no' ? '✗ ' : '') + md(c.etichetta) + '</span>' : ''; }

    // anatomia: i pezzi del codice diventano <span class="pz">, anche annidati (la dichiarazione contiene proprietà e valore)
    function pezzi(t, parti) {
      var rr = [];
      parti.forEach(function (p, k) {
        var da = 0, at = -1;
        for (var j = 0; j <= (p[3] || 0); j++) { at = t.indexOf(p[0], da); if (at < 0) break; da = at + 1; }
        if (at >= 0) rr.push({ a: at, b: at + p[0].length, k: k });
      });
      var ev = [];
      rr.forEach(function (r) { ev.push([r.a, 1, r], [r.b, 0, r]); });
      ev.sort(function (x, y) {
        if (x[0] !== y[0]) return x[0] - y[0];
        if (x[1] !== y[1]) return x[1] - y[1];               // prima si chiude, poi si apre
        return x[1] ? y[2].b - x[2].b : y[2].a - x[2].a;      // si apre prima il più lungo, si chiude prima il più corto
      });
      var o = '', pos = 0;
      ev.forEach(function (e) { o += t.slice(pos, e[0]); pos = e[0]; o += e[1] ? '<span class="an-pz" data-k="' + e[2].k + '">' : '</span>'; });
      return o + t.slice(pos);
    }
    // dispone le etichette dell'anatomia intorno al codice e disegna le linee (misure in px del palco, senza la scala)
    function disponiAnatomia(sec) {
      var c = sec.querySelector('.pl-anat'); if (!c) return;
      var k = c.getBoundingClientRect().width / c.offsetWidth || 1, R0 = c.getBoundingClientRect();
      function box(el) { var r = el.getBoundingClientRect(); return { l: (r.left - R0.left) / k, t: (r.top - R0.top) / k, w: r.width / k, h: r.height / k }; }
      var cod = c.querySelector('.pl-an-cod'), W = c.offsetWidth, H = c.offsetHeight, lato = c.classList.contains('lato');
      var et = [].slice.call(c.querySelectorAll('.pl-an-et')), svg = c.querySelector('.pl-an-ln'), ln = '';
      var cb = box(cod);
      if (lato) {
        var x0 = cb.l + cb.w + 110, voci = [];
        et.forEach(function (e) {
          var pz = c.querySelector('.an-pz[data-k="' + e.getAttribute('data-k') + '"]'); if (!pz) return;
          e.style.left = x0 + 'px'; e.style.maxWidth = (W - x0) + 'px';
          var b = box(pz); voci.push({ e: e, b: b, y: b.t + b.h / 2 - e.offsetHeight / 2, h: e.offsetHeight });
        });
        voci.sort(function (a, b) { return a.y - b.y; });
        var giu = 0; voci.forEach(function (v) { v.y = Math.max(v.y, giu); giu = v.y + v.h + 14; });
        var sopra = Math.max(0, giu - 14 - H); voci.forEach(function (v) { v.y -= sopra; });
        voci.forEach(function (v) {
          v.e.style.top = Math.max(0, v.y) + 'px';
          ln += '<path data-k="' + v.e.getAttribute('data-k') + '" d="M' + (cb.l + cb.w + 4) + ' ' + (v.b.t + v.b.h / 2) + ' H' + (cb.l + cb.w + 30) + ' L' + (x0 - 10) + ' ' + (Math.max(0, v.y) + v.h / 2) + '"/>';
        });
      } else {
        var voci1 = [];
        et.forEach(function (e) {
          var pz = c.querySelector('.an-pz[data-k="' + e.getAttribute('data-k') + '"]'); if (!pz) return;
          var b = box(pz); voci1.push({ e: e, b: b, cx: b.l + b.w / 2 });
        });
        voci1.sort(function (a, b) { return a.cx - b.cx; });
        // in ordine da sinistra, a turno sopra e sotto; su ogni lato le etichette si dividono la larghezza in parti uguali
        var lati = [voci1.filter(function (v, n) { return n % 2 === 0; }), voci1.filter(function (v, n) { return n % 2 === 1; })];
        voci1.forEach(function (v, n) {
          var su = n % 2 === 0, lato1 = lati[su ? 0 : 1], q = lato1.indexOf(v), m = lato1.length, w = v.e.offsetWidth, h = v.e.offsetHeight;
          var l = Math.max(0, Math.min(W - w, W * (q + 0.5) / m - w / 2));
          var top = su ? Math.max(0, cb.t - 54 - h) : Math.min(H - h - (c.classList.contains('con-eff') ? 50 : 0), cb.t + cb.h + 54);
          v.e.style.left = l + 'px'; v.e.style.top = top + 'px';
          var y1 = su ? v.b.t - 4 : v.b.t + v.b.h + 4, y2 = su ? top + h + 6 : top - 6, x2 = Math.max(l + 12, Math.min(l + w - 12, v.cx));
          ln += '<path data-k="' + v.e.getAttribute('data-k') + '" d="M' + v.cx + ' ' + y1 + ' L' + x2 + ' ' + y2 + '"/>';
        });
      }
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = ln;
    }
    function nota(s) { return s.nota ? '<p class="pl-nota rv">' + icona('lightbulb') + '<span>' + md(s.nota) + '</span></p>' : ''; }
    function righe(arr, cls) { return arr.map(function (p) { return '<li class="rv">' + ic(p[0]) + '<span>' + md(p[1]) + '</span></li>'; }).join(''); }

    // copia di un pezzo di pagina (animazione, schema, widget) dentro la slide
    function clona(sel) {
      var o = main.querySelector(sel); if (!o) return null;
      var c = o.cloneNode(true);
      [].forEach.call(c.querySelectorAll('.passi-testa,.passi-com'), function (x) { x.remove(); });
      [].forEach.call(c.querySelectorAll('[data-widget]'), function (w) { w.innerHTML = ''; w._wid = false; w.className = w.className.replace(/\bwid\b/, ''); });
      if (c.matches('[data-widget]')) { c.innerHTML = ''; c.className = c.className.replace(/\bwid\b/, ''); }
      return c;
    }

    var R = {
      copertina: function (s) {
        return '<div class="pl-cop-sx en"><span class="pl-marchio">' + md(A.modulo) + '</span>' +
          '<h1 class="pl-tit" data-maxh="290">' + md(s.titolo) + '</h1>' + (s.sotto ? '<p class="pl-cop-sotto">' + md(s.sotto) + '</p>' : '') +
          '<ol class="pl-indice">' + (s.indice || []).map(function (x) { return '<li><span>' + x[0] + '</span>' + md(x[1]) + '</li>'; }).join('') + '</ol></div>' +
          '<div class="pl-cop-dx en">' + (s.foto ? fotoHtml(s.foto, 'pl-cop-foto') : '') + '<div class="pl-cop-n" aria-label="Capitolo ' + A.n + '"><span>' + parseInt(A.n, 10) + '</span></div></div>';
      },
      sezione: function (s) {
        return '<div class="pl-sez-num" aria-hidden="true">' + s.num + '</div>' +
          '<div class="pl-sez-testo en"><h2 class="pl-tit" data-maxh="300">' + md(s.titolo) + '</h2>' + (s.sotto ? '<p>' + md(s.sotto) + '</p>' : '') + '</div>' +
          (s.foto ? fotoHtml(s.foto, 'pl-sez-foto') : '<div class="pl-sez-icona">' + icona(s.icona || 'layers') + '</div>');
      },
      punti: function (s) {
        return '<div class="pl-corpo pl-punti' + (s.foto ? ' con-foto' : '') + '">' +
          '<div class="pl-lato en">' + titolo(s, ' data-maxh="' + (s.foto ? 190 : 330) + '"') + sottotitolo(s) + (s.foto ? fotoHtml(s.foto) : '') + '</div>' +
          '<div class="pl-cella en" data-fit data-min="20"><ul class="pl-lista">' + righe(s.punti) + '</ul></div>' + nota(s) + '</div>';
      },
      tessere: function (s) {
        return testa(s) + '<div class="pl-corpo en" data-fit data-min="18"><div class="pl-tessere n' + s.tessere.length + '">' + s.tessere.map(function (t) {
          return '<div class="pl-tessera rv">' + ic(t[0]) + '<b>' + md(t[1]) + '</b><span>' + md(t[2] || '') + '</span></div>'; }).join('') + '</div>' + nota(s) + '</div>';
      },
      confronto: function (s) {
        function col(c) {
          return '<div class="pl-col rv ' + (c.tono || '') + '"><div class="pl-col-t">' + ic(c.icona) + '<b>' + md(c.titolo) + '</b></div><ul>' +
            c.righe.map(function (r) { var g = r[0] === '+' ? 'si' : r[0] === '-' ? 'no' : 'nn'; return '<li class="' + g + '">' + (g === 'nn' ? '<i></i>' : icona(g === 'si' ? 'circle-check' : 'circle-x')) + '<span>' + md(r.slice(1).trim()) + '</span></li>'; }).join('') +
            '</ul>' + (c.piede ? '<p class="pl-col-p">' + md(c.piede) + '</p>' : '') + '</div>';
        }
        return testa(s) + '<div class="pl-confronto en" data-fit data-min="18">' + col(s.a) + col(s.b) + '</div>' +
          (s.verdetto ? '<p class="pl-verdetto rv">' + md(s.verdetto) + '</p>' : '');
      },
      anim: function (s) { return testa(s) + '<div class="pl-corpo pl-figura en" data-clona="#' + s.id + '"></div>'; },
      schema: function (s) { return testa(s) + '<div class="pl-corpo pl-figura en" data-clona="' + s.sel + '"></div>'; },
      widget: function (s) { return testa(s) + '<div class="pl-corpo pl-figura en" data-clona="[data-widget=&quot;' + s.w + '&quot;]"></div>'; },
      foto: function (s) {
        return testa(s) + '<div class="pl-corpo en"><div class="pl-galleria n' + s.foto.length + '">' + s.foto.map(function (f) { return fotoHtml(f, '', s.aClic); }).join('') + '</div></div>';
      },
      storia: function (s) {
        return '<div class="pl-st-foto en">' + (s.foto ? fotoHtml(s.foto, 'pl-st-img') : '<div class="pl-st-icona">' + icona(s.icona || 'history') + '</div>') + '</div>' +
          '<div class="pl-st-testo en"><h2 class="pl-tit" data-maxh="120">' + md(s.titolo) + '</h2>' + sottotitolo(s) + '<div class="pl-anno">' + md(s.anno) + '</div>' +
          '<div class="pl-cella" data-fit data-min="18"><ul class="pl-lista piccola">' + righe(s.punti) + '</ul></div></div>';
      },
      formula: function (s) {
        var k = Math.max(1, nudo(s.formula).length);
        var fs = Math.max(26, Math.min(62, Math.floor(1020 / (0.6 * k))));
        return testa(s) + '<div class="pl-corpo pl-formula en"><div class="pl-f" style="font-size:' + fs + 'px">' + md(s.formula) + '</div>' +
          (s.righe ? '<dl class="pl-f-righe">' + s.righe.map(function (r) { return '<div class="rv"><dt>' + md(r[0]) + '</dt><dd>' + md(r[1]) + '</dd></div>'; }).join('') + '</dl>' : '') + '</div>';
      },
      tabella: function (s) {
        return testa(s) + '<div class="pl-corpo en" data-fit data-min="14"><table class="pl-tab"><thead><tr>' + s.righe[0].map(function (c) { return '<th>' + md(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          s.righe.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      },
      codice: function (s) {
        var piano = document.createElement('div'); piano.innerHTML = s.html;
        var rr = (piano.textContent || '').split('\n'), largo = Math.max.apply(null, rr.map(function (r) { return r.length; }));
        var note = s.note && s.note.length, sopra = note && largo > 46 && rr.length <= 6;
        return testa(s) + '<div class="pl-corpo pl-codice en' + (note ? (sopra ? ' con-note sopra' : ' con-note') : '') + '"><div class="pl-cod-cella" data-fit data-min="12"><pre class="codice"><code>' + s.html + '</code></pre></div>' +
          (note ? '<ul class="pl-lista piccola pl-cod-note">' + righe(s.note) + '</ul>' : '') + '</div>';
      },
      domanda: function (s) {
        var k = nudo(s.testo).length, fs = k < 70 ? 78 : k < 130 ? 64 : k < 200 ? 52 : 44;
        if (SCHEMA) fs = Math.round(fs * 0.82);
        return '<div class="pl-dom en">' + (SCHEMA ? '<span class="pl-dom-ic">' + icona('message-circle-question') + '</span><span class="pl-dom-k">Domanda per la classe</span>' : icona('message-circle-question')) + '<p style="font-size:' + fs + 'px">' + md(s.testo) + '</p></div>' +
          (s.risposta ? '<div class="pl-dom-r rv">' + icona('circle-check') + '<span>' + md(s.risposta) + '</span></div>' : '');
      },
      errore: function (s) {
        if (SCHEMA) return '<header class="pl-testa en">' + occ({ occhiello: s.occhiello || 'Errore tipico', tonoOcc: 'r' }) + '</header>' +
          '<div class="pl-err2 en"><div class="pl-e2-no" data-fit data-min="24"><span class="pl-x">✗</span><p>' + md(s.no) + '</p></div>' +
          '<div class="pl-e2-si rv" data-fit data-min="20"><span class="pl-x ok">✓</span><p>' + md(s.si) + '</p></div></div>';
        return testa({ titolo: s.titolo || 'Trova l’errore' }) + '<div class="pl-err en"><div class="pl-err-no" data-fit data-min="22">' + icona('message-circle-question') + icona('circle-x') +
          '<div><span class="e1">Che cosa c’è di sbagliato?</span><span class="e2">Sbagliato</span><p>' + md(s.no) + '</p></div></div>' +
          '<div class="pl-err-si rv" data-fit data-min="22">' + icona('circle-check') + '<div><span>Corretto</span><p>' + md(s.si) + '</p></div></div></div>';
      },
      ricorda: function (s) { return R.punti({ titolo: s.titolo || 'Ricorda', punti: s.punti }); },

      // ---------- forme «schema geometrico»: la slide ha la forma del suo significato ----------
      // definizione: la frase grande; al clic, sotto, gli ingredienti con l'icona (e la nota)
      definizione: function (s) {
        return testa(s) + '<div class="pl-corpo pl-def en"><p class="pl-def-frase" data-fit data-min="24">' + md(s.frase) + '</p>' +
          (s.parti || s.nota ? '<div class="pl-def-giu rv">' + (s.parti ? '<div class="pl-def-parti n' + s.parti.length + '">' + s.parti.map(function (p) {
            return '<div>' + icona(p[0]) + '<span>' + md(p[1]) + '</span></div>'; }).join('') + '</div>' : '') +
            (s.nota ? '<p class="pl-def-nota">' + md(s.nota) + '</p>' : '') + '</div>' : '') + '</div>';
      },
      // processo A → B → C: blocchi da sinistra a destra, uno per clic (il primo c'è già); frecce con il nome del passaggio
      flusso: function (s) {
        var fr = s.frecce || [];
        return testa(s) + '<div class="pl-corpo pl-flusso n' + s.blocchi.length + (fr.length ? ' con-nomi' : '') + ' en" data-fit data-min="16">' + s.blocchi.map(function (b, k) {
          var f = k ? '<span class="pl-fr">' + icona('arrow-right') + (fr[k - 1] ? '<small>' + md(fr[k - 1]) + '</small>' : '') + '</span>' : '';
          return '<div class="pl-fl-c' + (k ? ' rv' : '') + '"' + riga(b.riga) + '>' + f + nodo(b) + '</div>';
        }).join('') + '</div>';
      },
      // due casi da confrontare: colonne con bordo verde / rosso ed etichetta ✓ ✗
      casi: function (s) {
        return testa(s) + '<div class="pl-corpo pl-casi n' + s.casi.length + ' en" data-fit data-min="16">' + s.casi.map(function (c, k) {
          return '<div class="pl-nd ' + (c.tono || '') + (k && s.aClic ? ' rv' : '') + '"' + riga(c.riga) + '>' + tag(c) + (c.titolo || c.icona ? '<div class="pl-nd-t">' + (c.icona ? '<span class="pl-ib">' + icona(c.icona) + '</span>' : '') + '<b>' + md(c.titolo || '') + '</b></div>' : '') + corpoNd(c) + '</div>';
        }).join('') + '</div>';
      },
      // un'ambiguità o una scelta: la frase al centro che si divide in due rami
      bivio: function (s) {
        return testa(s) + '<div class="pl-corpo pl-bivio en" data-fit data-min="16"><div class="pl-nd pl-bv-frase">' + md(s.frase) + '</div>' +
          '<div class="pl-bv-fr">' + icona('arrow-right') + icona('arrow-right') + '</div><div class="pl-bv-rami">' +
          s.rami.map(function (r) { return nodo(r, 'rv'); }).join('') + '</div></div>';
      },
      // storia con date: linea del tempo orizzontale, una data per clic
      linea: function (s) {
        return testa(s) + '<div class="pl-corpo pl-linea n' + s.punti.length + ' en"><i class="pl-ln"></i>' + s.punti.map(function (p) {
          return '<div class="pl-ln-p rv"><span class="pl-ln-anno">' + md(p[0]) + '</span><p>' + md(p[1]) + '</p></div>'; }).join('') + '</div>';
      },
      // confronto con un dato: due colonne con icona tonda, poi la cifra enorme con la cautela
      cifra: function (s) {
        function col(c, k) { return '<div class="pl-cf-col rv"><span class="pl-tondo' + (k ? ' b' : '') + '">' + icona(c[0]) + '</span><div><b>' + md(c[1]) + '</b><p>' + md(c[2] || '') + '</p></div></div>'; }
        return testa(s) + '<div class="pl-corpo pl-cifra en"><div class="pl-cf-due">' + col(s.a, 0) + col(s.b, 1) + '</div>' +
          '<div class="pl-cf-num rv"><span class="g">' + md(s.cifra) + '</span><p>' + md(s.testo || '') + '</p>' + (s.cautela ? '<small>' + md(s.cautela) + '</small>' : '') + '</div></div>';
      },
      // oggetti + a che cosa servono: foto a metà slide, gli oggetti come gettoni, poi un perché per clic
      gettoni: function (s) {
        return (s.foto ? '<div class="pl-gt-foto en"><img class="sf" src="' + s.foto.src + '" alt="" aria-hidden="true">' + fotoHtml(s.foto) + '</div>' : '') +
          '<div class="pl-gt-dx en' + (s.foto ? '' : ' pieno') + '">' + occ(s) + titolo(s) + sottotitolo(s) +
          '<div class="pl-gt-chips">' + s.gettoni.map(function (g) { return '<span class="pl-chip">' + icona(g[0]) + '<span>' + md(g[1]) + '</span></span>'; }).join('') + '</div>' +
          '<div class="pl-gt-perche" data-fit data-min="16">' + (s.perche || []).map(function (p) {
            return '<div class="rv"><span class="pl-ib">' + icona(p[0]) + '</span><div><b>' + md(p[1]) + '</b>' + (p[2] ? '<p>' + md(p[2]) + '</p>' : '') + '</div></div>'; }).join('') + '</div></div>';
      },
      // com'è fatto: il codice (o l'oggetto) al centro, un'etichetta collegata da una linea per clic
      anatomia: function (s) {
        var rr = s.codice.split('\n'), largo = Math.max.apply(null, rr.map(function (r) { return r.length; })), lato = rr.length > 1;
        var fs = Math.max(20, Math.min(lato ? 40 : 54, Math.floor((lato ? 560 : 1100) / (0.61 * largo)), Math.floor(400 / (1.5 * rr.length + 1))));
        return testa(s) + '<div class="pl-corpo pl-anat en ' + (lato ? 'lato' : 'riga1') + (s.effetto ? ' con-eff' : '') + '">' +
          '<pre class="pl-an-cod" style="font-size:' + fs + 'px">' + pezzi(s.codice, s.parti) + '</pre><svg class="pl-an-ln" aria-hidden="true"></svg>' +
          s.parti.map(function (p, k) { return '<div class="pl-an-et rv" data-k="' + k + '"><b>' + md(p[1]) + '</b>' + (p[2] ? '<span>' + md(p[2]) + '</span>' : '') + '</div>'; }).join('') +
          (s.effetto ? '<p class="pl-an-eff rv">' + md(s.effetto) + '</p>' : '') + '</div>';
      }
    };

    // etichetta in basso a sinistra: dove siamo (la funzione della slide, oppure la sezione)
    function etichetta(s) {
      if (s.tipo === 'domanda') return 'Domanda alla classe';
      if (s.tipo === 'errore') return 'Trova l’errore';
      return s._sez || '';
    }
    var CAMPO = { sezione: 1, domanda: SCHEMA ? 0 : 1, copertina: 0 };

    // riduce il testo finché sta nello spazio che ha
    function sfora(el) { return el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1; }
    function fit(el, min, troppo) {
      el.style.fontSize = '';
      var fs = parseFloat(getComputedStyle(el).fontSize), n = 0;
      while (troppo(el) && fs > min && n++ < 40) { fs -= 1; el.style.fontSize = fs + 'px'; }
    }
    function adattaTesti(sec) {
      [].forEach.call(sec.querySelectorAll('.pl-tit[data-maxh]'), function (t) {
        var mh = parseFloat(t.getAttribute('data-maxh'));
        fit(t, 28, function (e) { return e.scrollWidth > e.clientWidth + 1 || e.offsetHeight > mh; });
      });
      [].forEach.call(sec.querySelectorAll('.pl-testa .pl-tit'), function (t) { fit(t, 30, function (e) { return e.offsetHeight > 118 || e.scrollWidth > e.clientWidth + 1; }); });
      // con il sottotitolo la testata è più alta: il corpo parte subito sotto di essa
      [].forEach.call(sec.querySelectorAll('.pl-testa'), function (t) {
        var c = sec.querySelector('.pl-corpo');
        if (c) c.style.top = t.querySelector('.pl-msg,.pl-occ') ? (t.offsetTop + t.offsetHeight + 26) + 'px' : '';
      });
      [].forEach.call(sec.querySelectorAll('[data-fit]'), function (f) { fit(f, parseFloat(f.getAttribute('data-min')) || 14, sfora); });
      disponiAnatomia(sec);
    }

    function adatta() {
      if (!aperta) return;
      var r = scena.getBoundingClientRect(), k = Math.min(r.width / 1280, r.height / 720);
      tela.style.transform = 'translate(-50%,-50%) scale(' + k + ')';
    }
    function progresso() { riempi.style.width = (S.length > 1 ? i / (S.length - 1) * 100 : 100) + '%'; }

    var vecchie = [];
    function mostra(dietro, senzaMoto) {
      var s = S[i], sec = document.createElement('section');
      sec.className = 'pl pl-t-' + s.tipo + (s.ruolo ? ' pl-r-' + s.ruolo : '') + (senzaMoto ? '' : (dietro ? ' ind' : ' av'));
      sec.innerHTML = R[s.tipo](s) + (s.tipo === 'copertina' ? '' :
        '<footer class="pl-piede"><span>' + md(etichetta(s)) + '</span><span class="pl-pag">' + (i + 1) + ' / ' + S.length + '</span></footer>');
      // la slide che esce resta sotto finché la nuova non è arrivata
      [].forEach.call(tela.children, function (o) { if (o !== sec) { o.classList.add('fuori'); o.setAttribute('aria-hidden', 'true'); vecchie.push(o); } });
      tela.appendChild(sec);
      setTimeout(function () { vecchie = vecchie.filter(function (o) { if (o.parentNode) o.parentNode.removeChild(o); return false; }); }, senzaMoto ? 0 : 700);
      palco.classList.toggle('campo', !!CAMPO[s.tipo]);
      palco.setAttribute('data-tipo', s.tipo);

      if (s.tipo !== 'copertina' && (s.riga || sec.querySelector('[data-riga]'))) sec.insertAdjacentHTML('beforeend', '<p class="pl-riga">' + md(s.riga || '') + '</p>');
      cur = { rv: [].slice.call(sec.querySelectorAll('.rv')), k: 0, av: null, sec: sec, s: s };
      if (dietro) { cur.rv.forEach(function (p) { p.classList.add('visto'); }); cur.k = cur.rv.length; }
      var f = sec.querySelector('[data-clona]');
      if (f) {
        var c = clona(f.getAttribute('data-clona'));
        if (c) { f.appendChild(c); iconeInline(f); avviaTutto(f); cur.av = f.querySelector('.passi-com .tasto.primario'); }
      }
      iconeInline(sec);
      adattaTesti(sec);
      marca();
      vaiIn.value = i + 1; tot.textContent = '/ ' + S.length;
      progresso(); adatta();
    }
    // l'ultimo elemento svelato è in evidenza, i precedenti si abbassano un po'
    function marca() {
      var vis = {}, ult = null, rg = null;
      cur.rv.forEach(function (p, n) {
        p.classList.toggle('ult', n === cur.k - 1);
        if (n >= cur.k) return;
        if (p.hasAttribute('data-k')) { vis[p.getAttribute('data-k')] = 1; if (n === cur.k - 1) ult = p.getAttribute('data-k'); }
        if (p.hasAttribute('data-riga')) rg = p.getAttribute('data-riga');
      });
      // anatomia: si accendono il pezzo di codice e la linea dell'etichetta svelata
      [].forEach.call(cur.sec.querySelectorAll('.an-pz[data-k],.pl-an-ln [data-k]'), function (z) {
        var k = z.getAttribute('data-k'); z.classList.toggle('vis', !!vis[k]); z.classList.toggle('on', k === ult);
      });
      var r = cur.sec.querySelector('.pl-riga');
      if (r) { if (rg === null) { var p0 = cur.sec.querySelector('[data-riga]:not(.rv)'); rg = p0 ? p0.getAttribute('data-riga') : md(cur.s.riga || ''); } r.innerHTML = rg; }
    }
    function avanti() {
      if (cur && cur.k < cur.rv.length) { cur.rv[cur.k++].classList.add('visto'); marca(); return; }
      if (cur && cur.av && !cur.av.disabled) { cur.av.click(); return; }
      if (i < S.length - 1) { i++; mostra(false); }
    }
    function indietro() {
      if (cur && cur.k > 0 && !cur.av) { cur.rv[--cur.k].classList.remove('visto'); marca(); return; }
      if (i > 0) { i--; mostra(true); }
    }
    function salta(k) { k = Math.max(1, Math.min(S.length, parseInt(k, 10) || 0)); if (!k) return; var dietro = k - 1 < i; i = k - 1; mostra(dietro); }

    // comandi: compaiono col mouse e spariscono da soli; con la tastiera restano nascosti
    var tCom;
    function mostraCom() {
      com.classList.remove('nascosta'); palco.classList.remove('quieto'); clearTimeout(tCom);
      tCom = setTimeout(function () { if (document.activeElement === vaiIn) return; com.classList.add('nascosta'); palco.classList.add('quieto'); }, 2400);
    }
    palco.addEventListener('mousemove', mostraCom);
    palco.addEventListener('touchstart', mostraCom, { passive: true });
    com.addEventListener('focusin', function () { clearTimeout(tCom); com.classList.remove('nascosta'); });

    function schermoIntero() {
      if (document.fullscreenElement) { document.exitFullscreen(); return; }
      if (palco.requestFullscreen) palco.requestFullscreen().catch(function () {});
    }
    function schermoNero() {
      nera = !nera; palco.classList.toggle('nera', nera);
    }

    var cifre = '', tCifre;
    vaiIn.addEventListener('keydown', function (e) { e.stopPropagation(); if (e.key === 'Enter') { salta(vaiIn.value); vaiIn.blur(); } else if (e.key === 'Escape') { vaiIn.value = i + 1; vaiIn.blur(); } });
    vaiIn.addEventListener('focus', function () { vaiIn.select(); });
    vaiIn.addEventListener('blur', mostraCom);
    function apri() {
      i = 0; aperta = true; nera = false; palco.classList.remove('nera'); document.body.classList.add('presenta');
      tela.innerHTML = ''; mostra(false, true); mostraCom();
      // il primo schermo parte quando i caratteri sono pronti
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (aperta) { adattaTesti(tela.lastElementChild); marca(); } });
    }
    function chiudi() {
      aperta = false; document.body.classList.remove('presenta'); tela.innerHTML = ''; clearTimeout(tCom);
      if (document.fullscreenElement) document.exitFullscreen();
    }
    palco.querySelector('#pl-esci').onclick = chiudi;
    palco.querySelector('#pl-ava').onclick = avanti;
    palco.querySelector('#pl-ind').onclick = indietro;
    palco.querySelector('#pl-sch').onclick = schermoIntero;
    window.addEventListener('resize', adatta);
    document.addEventListener('fullscreenchange', adatta);
    document.addEventListener('keydown', function (e) {
      if (!aperta) return;
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'select') return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (/^[0-9]$/.test(e.key)) { cifre += e.key; vaiIn.value = cifre; mostraCom(); clearTimeout(tCifre); tCifre = setTimeout(function () { cifre = ''; vaiIn.value = i + 1; }, 2500); return; }
      if (e.key === 'Enter' && cifre) { salta(cifre); cifre = ''; return; }
      if (e.key === 'Escape') { if (!document.fullscreenElement) chiudi(); }
      else if (e.key === 'Home') salta(1); else if (e.key === 'End') salta(S.length);
      else if (e.key === 'f' || e.key === 'F') schermoIntero();
      else if (e.key === 'b' || e.key === 'B' || e.key === '.') schermoNero();
      else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); if (nera) schermoNero(); else avanti(); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); if (nera) schermoNero(); else indietro(); }
    });
    scena.addEventListener('click', function (e) {
      if (e.target.closest('.wid,.passi-anim,.tela,button,input,select,a,label')) return;
      avanti();
    });

    return { apri: apri, chiudi: chiudi, aperta: function () { return aperta; } };
  };
})();
