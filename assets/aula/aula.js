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
    function testa(s) { return '<header class="pl-testa en">' + titolo(s) + sottotitolo(s) + '</header>'; }
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
        return '<div class="pl-dom en">' + icona('message-circle-question') + '<p style="font-size:' + fs + 'px">' + md(s.testo) + '</p></div>' +
          (s.risposta ? '<div class="pl-dom-r rv">' + icona('circle-check') + '<span>' + md(s.risposta) + '</span></div>' : '');
      },
      errore: function (s) {
        return testa({ titolo: s.titolo || 'Trova l’errore' }) + '<div class="pl-err en"><div class="pl-err-no" data-fit data-min="22">' + icona('message-circle-question') + icona('circle-x') +
          '<div><span class="e1">Che cosa c’è di sbagliato?</span><span class="e2">Sbagliato</span><p>' + md(s.no) + '</p></div></div>' +
          '<div class="pl-err-si rv" data-fit data-min="22">' + icona('circle-check') + '<div><span>Corretto</span><p>' + md(s.si) + '</p></div></div></div>';
      },
      ricorda: function (s) { return R.punti({ titolo: s.titolo || 'Ricorda', punti: s.punti }); }
    };

    // etichetta in basso a sinistra: dove siamo (la funzione della slide, oppure la sezione)
    function etichetta(s) {
      if (s.tipo === 'domanda') return 'Domanda alla classe';
      if (s.tipo === 'errore') return 'Trova l’errore';
      return s._sez || '';
    }
    var CAMPO = { sezione: 1, domanda: 1, copertina: 0 };

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
        if (c) c.style.top = t.querySelector('.pl-msg') ? (t.offsetTop + t.offsetHeight + 26) + 'px' : '';
      });
      [].forEach.call(sec.querySelectorAll('[data-fit]'), function (f) { fit(f, parseFloat(f.getAttribute('data-min')) || 14, sfora); });
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
      sec.className = 'pl pl-t-' + s.tipo + (senzaMoto ? '' : (dietro ? ' ind' : ' av'));
      sec.innerHTML = R[s.tipo](s) + (s.tipo === 'copertina' ? '' :
        '<footer class="pl-piede"><span>' + md(etichetta(s)) + '</span><span class="pl-pag">' + (i + 1) + ' / ' + S.length + '</span></footer>');
      // la slide che esce resta sotto finché la nuova non è arrivata
      [].forEach.call(tela.children, function (o) { if (o !== sec) { o.classList.add('fuori'); o.setAttribute('aria-hidden', 'true'); vecchie.push(o); } });
      tela.appendChild(sec);
      setTimeout(function () { vecchie = vecchie.filter(function (o) { if (o.parentNode) o.parentNode.removeChild(o); return false; }); }, senzaMoto ? 0 : 700);
      palco.classList.toggle('campo', !!CAMPO[s.tipo]);
      palco.setAttribute('data-tipo', s.tipo);

      cur = { rv: [].slice.call(sec.querySelectorAll('.rv')), k: 0, av: null };
      if (dietro) { cur.rv.forEach(function (p) { p.classList.add('visto'); }); cur.k = cur.rv.length; marca(); }
      var f = sec.querySelector('[data-clona]');
      if (f) {
        var c = clona(f.getAttribute('data-clona'));
        if (c) { f.appendChild(c); iconeInline(f); avviaTutto(f); cur.av = f.querySelector('.passi-com .tasto.primario'); }
      }
      iconeInline(sec);
      adattaTesti(sec);
      vaiIn.value = i + 1; tot.textContent = '/ ' + S.length;
      progresso(); adatta();
    }
    // l'ultimo elemento svelato è in evidenza, i precedenti si abbassano un po'
    function marca() {
      cur.rv.forEach(function (p, n) { p.classList.toggle('ult', n === cur.k - 1); });
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
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (aperta) adattaTesti(tela.lastElementChild); });
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
