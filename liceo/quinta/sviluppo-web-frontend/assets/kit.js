/* Kit del modulo CSS: codice colorato, anteprime vere di una pagina web (shadow DOM con sfondo bianco),
   demo a passi (stessi comandi delle animazioni: Indietro · Avanti · Ricomincia) e piccoli comandi per i «Prova tu».
   Usa WIDGET (sito.js). Le demo si registrano come widget, così Presenta in aula le ricrea da sole. */
(function () {
  'use strict';
  var W = window.WIDGET;

  /* In Presenta in aula un widget deve stare tutto nel palco: se è più alto dello spazio, si rimpicciolisce (zoom).
     Si ricalcola quando il contenuto cambia (passi delle demo, comandi dei «Prova tu»). */
  var registraOrig = W.registra;
  W.registra = function (nome, fn) { registraOrig(nome, function (el) { fn(el); adattaAula(el); }); };
  // lo zoom parte da 1,5 (in aula il widget deve leggersi da lontano) e scende finché tutto sta nel palco
  function adattaAula(el) {
    var fig = el.closest && el.closest('.pl-figura'); if (!fig) return;
    var t = 0;
    function fit() {
      var z = 1.5;
      for (var k = 0; k < 8; k++) {
        el.style.zoom = z.toFixed(3);
        var sh = fig.scrollHeight, ch = fig.clientHeight;
        if (sh <= ch + 1 || ch < 100) break;
        z = Math.max(0.4, z * (ch / sh) * 0.99);
      }
    }
    requestAnimationFrame(fit);
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(fit, 30); }).observe(el, { childList: true, subtree: true, characterData: true });
  }
  // gli schemi in HTML copiati nelle slide: stessa regola
  if (window.MutationObserver) new MutationObserver(function (mm) {
    mm.forEach(function (m) { [].forEach.call(m.addedNodes, function (n) { if (n.nodeType === 1 && n.matches('.tela.schema') && !n.querySelector('svg:not(.ic)') && n.parentNode && n.parentNode.classList.contains('pl-figura')) adattaAula(n); }); });
  }).observe(document.documentElement, { childList: true, subtree: true });
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ---------- codice colorato (ogni riga resta chiusa: si può dividere per righe) ---------- */
  function span(cls, x) {
    return x.split('\n').map(function (p) { return p.trim() ? '<span class="' + cls + '">' + esc(p) + '</span>' : esc(p); }).join('\n');
  }
  function css(t) {
    var o = '', buf = '', st = 'sel', d = 0, i, c, CL = { sel: 'k', prop: 'a', val: 's' };
    function flush(cls) { if (buf) { o += cls ? span(cls, buf) : esc(buf); buf = ''; } }
    for (i = 0; i < t.length; i++) {
      c = t[i];
      if (c === '/' && t[i + 1] === '*') {
        flush(CL[st]); var j = t.indexOf('*/', i + 2); if (j < 0) j = t.length - 2;
        o += span('c', t.slice(i, j + 2)); i = j + 1; continue;
      }
      if (st === 'sel') {
        if (c === '{') { flush('k'); o += '{'; d++; st = 'prop'; }
        else if (c === '}') { flush('k'); o += '}'; d = Math.max(0, d - 1); }
        else if (c === ';') { flush('k'); o += ';'; }
        else buf += c;
      } else if (st === 'prop') {
        if (c === ':') { flush('a'); o += ':'; st = 'val'; }
        else if (c === '}') { flush('a'); o += '}'; d--; st = d > 0 ? 'prop' : 'sel'; }
        else if (c === ';') { flush('a'); o += ';'; }
        else if (c === '{') { flush('k'); o += '{'; d++; }
        else buf += c;
      } else {
        if (c === ';') { flush('s'); o += ';'; st = 'prop'; }
        else if (c === '}') { flush('s'); o += '}'; d--; st = d > 0 ? 'prop' : 'sel'; }
        else buf += c;
      }
    }
    flush(CL[st]);
    return o;
  }
  var TAG = /(<!--[\s\S]*?-->)|(<!DOCTYPE[^>]*>)|(<\/?)([a-zA-Z][\w-]*)((?:\s[^<>]*?)?)(\s?\/?>)/g;
  function html(t) {
    var out = '', pos = 0, m;
    TAG.lastIndex = 0;
    while ((m = TAG.exec(t))) {
      out += esc(t.slice(pos, m.index));
      if (m[1]) out += span('c', m[1]);
      else if (m[2]) out += '<span class="k">' + esc(m[2]) + '</span>';
      else {
        var at = (m[5] || '').replace(/([\w:-]+)(?:(=)("[^"]*"|'[^']*'))?/g, function (x, n, u, v) {
          return u ? '<span class="a">' + esc(n) + '</span>=<span class="s">' + esc(v) + '</span>' : '<span class="a">' + esc(n) + '</span>';
        });
        out += '<span class="k">' + esc(m[3] + m[4]) + '</span>' + at + '<span class="k">' + esc(m[6]) + '</span>';
      }
      pos = TAG.lastIndex;
    }
    return out + esc(t.slice(pos));
  }

  /* ---------- un file di codice con il nome sopra (come la scheda dell'editor) ---------- */
  // segni: { numeroRiga(1…): 'nuova' | 'errata' | 'spenta' }
  function file(nome, testo, lingua, segni) {
    var el = W.h('div', { 'class': 'kit-file' });
    var testa = W.h('div', { 'class': 'kit-file-nome', testo: nome });
    var pre = W.h('pre', { 'class': 'codice' }), cod = W.h('code');
    pre.appendChild(cod); el.appendChild(testa); el.appendChild(pre);
    el.metti = function (t, s, ling) {
      s = s || {}; ling = ling || lingua;
      var righe = (ling === 'html' ? html(t) : ling === 'testo' ? esc(t) : css(t)).split('\n');
      cod.innerHTML = righe.map(function (r, i) { return '<span class="kr' + (s[i + 1] ? ' ' + s[i + 1] : '') + '">' + (r || ' ') + '</span>'; }).join('');
      el.classList.toggle('vuoto', !t.trim());
    };
    el.nome = function (n) { testa.textContent = n; };
    el.metti(testo || '', segni);
    return el;
  }

  /* ---------- anteprima: una piccola pagina web vera, isolata dal sito (sfondo bianco proprio) ---------- */
  // Nel CSS si può scrivere body e html: diventano il corpo e la radice dell'anteprima.
  function adatta(c) {
    return String(c || '').replace(/(^|[\s,}>+~(])body(?=[\s,{.:#\[>+~)])/g, '$1.kit-body').replace(/(^|[\s,}(])html(?=[\s,{.:#\[>+~)])/g, '$1:host');
  }
  var BASE = ':host{all:initial;display:block;background:#fff;color:#000;contain:content}' +
    '.kit-body{display:block;margin:0;padding:10px 14px;min-height:100%;box-sizing:border-box}';
  function anteprima(o) {
    o = o || {};
    var el = W.h('div', { 'class': 'kit-ante' + (o.cls ? ' ' + o.cls : '') });
    if (o.barra !== false) el.appendChild(W.h('div', { 'class': 'kit-barra' }, [W.h('i'), W.h('i'), W.h('i'), W.h('span', { 'class': 'indirizzo', testo: o.indirizzo || 'club-robotica.it' })]));
    if (o.etichetta) el.appendChild(W.h('div', { 'class': 'kit-ante-et', testo: o.etichetta }));
    var host = W.h('div', { 'class': 'kit-host' });
    if (o.altezza) host.style.height = o.altezza + 'px';
    el.appendChild(host);
    var root = host.attachShadow({ mode: 'open' });
    el.root = root; el.host = host;
    el.metti = function (h, c, extra) {
      root.innerHTML = '<style>' + BASE + (extra || '') + '</style><style>' + adatta(c) + '</style><div class="kit-body">' + h + '</div>';
      el.corpo = root.querySelector('.kit-body');
      return root;
    };
    el.indirizzo = function (t) { var x = el.querySelector('.indirizzo'); if (x) x.textContent = t; };
    el.metti(o.html || '', o.css || '');
    return el;
  }

  /* ---------- demo a passi: stessi comandi e stessa testata delle animazioni ---------- */
  // cfg: { titolo, inizio (testo del passo 0), passi: [testo…], monta(corpo) → function vai(i, anima) }
  function passi(el, cfg) {
    el.classList.add('kit-passi');
    var testa = W.h('div', { 'class': 'passi-testa' });
    if (cfg.titolo) testa.appendChild(W.h('div', { 'class': 'passi-titolo', testo: cfg.titolo }));
    var st = W.h('div', { 'class': 'stato passi-desc', 'aria-live': 'polite' });
    testa.appendChild(st); el.appendChild(testa);
    var corpo = W.h('div', { 'class': 'kit-corpo' }); el.appendChild(corpo);
    var vai = cfg.monta(corpo);
    var n = cfg.passi.length, i = 0;
    var com = W.h('div', { 'class': 'passi-com' });
    var bI = W.bottone('', function () { va(i - 1, false); }), bA = W.bottone('', function () { va(i + 1, true); }, 'primario'), bR = W.bottone('', function () { va(0, false); });
    bI.innerHTML = window.icona('chevron-left', 'ic-16') + ' Indietro'; bA.innerHTML = 'Avanti ' + window.icona('chevron-right', 'ic-16'); bR.innerHTML = window.icona('rotate-ccw', 'ic-16') + ' Ricomincia';
    var conta = W.h('span', { 'class': 'passi-conta' });
    com.appendChild(bI); com.appendChild(bA); com.appendChild(bR); com.appendChild(conta); el.appendChild(com);
    function md(t) { return String(t).replace(/`([^`]+)`/g, function (x, c) { return '<code>' + esc(c) + '</code>'; }).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, '$1<i>$2</i>'); }
    function va(k, anima) {
      if (k < 0 || k > n) return;
      i = k; vai(i, anima && !W.ridotto);
      bI.disabled = i === 0; bA.disabled = i === n; conta.textContent = 'passo ' + i + ' di ' + n;
      st.innerHTML = md(i === 0 ? cfg.inizio : cfg.passi[i - 1]);
      st.className = 'stato passi-desc' + (i === n ? ' ok' : '');
    }
    va(0, false);
  }
  function registraPassi(nome, cfg) { W.registra(nome, function (el) { passi(el, typeof cfg === 'function' ? cfg() : cfg); }); }

  /* ---------- demo «codice + anteprima»: a ogni passo cambia il foglio di stile ---------- */
  // cfg: { titolo, inizio, html, css0, nomeFile, mostraHtml (testo di index.html), indirizzo, altezza,
  //        passi: [{ desc, css, html?, segna? }], due: { css (come lo volevi) } }
  function demo(nome, cfg) {
    registraPassi(nome, function () {
      return {
        titolo: cfg.titolo, inizio: cfg.inizio, passi: cfg.passi.map(function (p) { return p.desc; }),
        monta: function (corpo) {
          corpo.classList.add('kit-griglia');
          if (cfg.due) corpo.classList.add('due');
          var col = W.h('div', { 'class': 'kit-col' });
          var fh = cfg.mostraHtml ? file('index.html', cfg.mostraHtml, 'html') : null;
          var fc = file(cfg.nomeFile || 'stile.css', cfg.css0 || '', 'css');
          if (fh) col.appendChild(fh);
          col.appendChild(fc); corpo.appendChild(col);
          var dx = W.h('div', { 'class': 'kit-col' });
          var voluto = cfg.due ? anteprima({ etichetta: 'come lo volevi', altezza: cfg.altezza, indirizzo: cfg.indirizzo, barra: false }) : null;
          var a = anteprima({ altezza: cfg.altezza, indirizzo: cfg.indirizzo, etichetta: cfg.due ? 'come lo vede il browser' : null, barra: !cfg.due });
          if (voluto) dx.appendChild(voluto);
          dx.appendChild(a); corpo.appendChild(dx);
          return function (i, anima) {
            var p = i ? cfg.passi[i - 1] : { css: cfg.css0 || '', html: cfg.html, segna: cfg.segna0 };
            var c = p.css != null ? p.css : '', h = p.html || cfg.html;
            fc.metti(c, p.segna);
            if (p.file) fc.nome(p.file); else fc.nome(cfg.nomeFile || 'stile.css');
            var vero = cfg.vero || function (x) { return x; };
            a.metti(h, vero(c), cfg.extra);
            if (voluto) voluto.metti(h, vero(cfg.due.css), cfg.extra);
            if (anima) { a.classList.remove('lampo'); void a.offsetWidth; a.classList.add('lampo'); }
            if (cfg.dopo) cfg.dopo(i, a, p);
          };
        }
      };
    });
  }

  /* ---------- comandi per i «Prova tu» ---------- */
  function menu(etich, voci, val, fn) {
    var s = W.h('select', { 'aria-label': etich });
    voci.forEach(function (v) { var o = W.h('option', { value: v[0], testo: v[1] || v[0] }); if (v[0] === val) o.selected = true; s.appendChild(o); });
    s.onchange = function () { fn(s.value); };
    var l = W.h('label', { 'class': 'kit-menu' }, [W.h('span', { testo: etich }), s]);
    l.sel = s; return l;
  }
  function casella(etich, val, fn) {
    var c = W.h('input', { type: 'checkbox' }); c.checked = !!val;
    c.onchange = function () { fn(c.checked); };
    var l = W.h('label', { 'class': 'kit-casella' }, [c, W.h('span', { testo: etich })]);
    l.input = c; return l;
  }
  function campo(etich, val, fn, largo) {
    var c = W.h('input', { type: 'text', value: val, spellcheck: 'false', autocomplete: 'off', 'aria-label': etich });
    if (largo) c.style.width = largo;
    c.oninput = function () { fn(c.value); };
    var l = W.h('label', { 'class': 'kit-campo' }, [W.h('span', { testo: etich }), c]);
    l.input = c; return l;
  }
  // riga di CSS generata dai comandi
  function riga(nome) {
    var f = file(nome || 'CSS', '', 'css'); f.classList.add('kit-riga');
    return f;
  }

  /* ---------- la pagina campione «Club di robotica» ---------- */
  var CLUB = '<main><h1>Club di robotica</h1><nav><a href="/chi-siamo">Chi siamo</a><a href="https://www.arduino.cc">Arduino</a><a href="programma.pdf">Programma</a></nav>' +
    '<h2>I corsi</h2><div class="card"><h3>Arduino</h3><p class="nota">Giovedì</p></div><div class="card big"><h3>Stampa 3D</h3><p>Venerdì</p></div>' +
    '<div class="card"><h3 id="robot">Robot</h3><p>Lunedì</p></div><form><input type="text" placeholder="Nome"><input type="email" placeholder="Email"></form></main>';

  /* ---------- specificità di un selettore: [id, classi, tipi] (null se non valido) ---------- */
  function specificita(sel) {
    try { document.createDocumentFragment().querySelector(sel); } catch (e) { return null; }
    var parti = splitVirgole(sel);
    if (parti.length > 1) { var best = [0, 0, 0]; parti.forEach(function (p) { var s = specificita(p); if (confronta(s, best) > 0) best = s; }); return best; }
    var s = sel, a = 0, b = 0, c = 0;
    // pseudo-classi con argomento
    s = s.replace(/:(is|not|has|where)\(((?:[^()]|\([^()]*\))*)\)/g, function (x, f, arg) {
      if (f !== 'where') { var t = specificita(arg) || [0, 0, 0]; a += t[0]; b += t[1]; c += t[2]; }
      return ' ';
    });
    s = s.replace(/:nth-[\w-]+\([^)]*\)/g, function () { b++; return ' '; });
    s = s.replace(/\[[^\]]*\]/g, function () { b++; return ' '; });
    s = s.replace(/"[^"]*"|'[^']*'/g, ' ');
    s = s.replace(/#[\w-]+/g, function () { a++; return ' '; });
    s = s.replace(/\.[\w-]+/g, function () { b++; return ' '; });
    s = s.replace(/::[\w-]+(\([^)]*\))?/g, function () { c++; return ' '; });
    s = s.replace(/:(before|after|first-line|first-letter)\b/g, function () { c++; return ' '; });
    s = s.replace(/:[\w-]+(\([^)]*\))?/g, function () { b++; return ' '; });
    s.replace(/(^|[\s>+~(,])([a-zA-Z][\w-]*)/g, function () { c++; return ''; });
    return [a, b, c];
  }
  function splitVirgole(s) { var out = [], d = 0, cur = ''; for (var i = 0; i < s.length; i++) { var ch = s[i]; if (ch === '(') d++; if (ch === ')') d--; if (ch === ',' && !d) { out.push(cur); cur = ''; } else cur += ch; } out.push(cur); return out.map(function (x) { return x.trim(); }).filter(Boolean); }
  function confronta(x, y) { for (var i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i]; return 0; }

  /* ---------- FLIP: gli elementi con data-k scivolano dalla vecchia alla nuova posizione ---------- */
  // root: elemento o shadow root; cambia(): modifica DOM o CSS. Con data-dim anima anche larghezza e altezza.
  // Gli elementi nuovi (chiave non vista prima) entrano con una piccola dissolvenza dall'alto.
  var MOTO = 'cubic-bezier(.45,0,.2,1.12)';
  function flip(root, cambia, ms) {
    ms = ms || 620;
    var prima = {};
    [].forEach.call(root.querySelectorAll('[data-k]'), function (n) { prima[n.getAttribute('data-k')] = n.getBoundingClientRect(); });
    cambia();
    if (W.ridotto || !Element.prototype.animate) return;
    var nodi = [].slice.call(root.querySelectorAll('[data-k]'));
    nodi.forEach(function (n) { if (n.getAnimations) n.getAnimations().forEach(function (x) { if (x.constructor === window.Animation) x.cancel(); }); });
    // prima si misurano tutte le posizioni finali, poi si anima: un contenitore che si anima falserebbe le misure dei figli
    var dopo = nodi.map(function (n) { var r = n.getBoundingClientRect(); r.z = n.offsetWidth ? r.width / n.offsetWidth : 1; return r; });
    nodi.forEach(function (n, j) {
      var a = prima[n.getAttribute('data-k')], b = dopo[j];
      if (!b.width && !b.height) return;
      if (!a || (!a.width && !a.height)) {
        if (Object.keys(prima).length) n.animate([{ opacity: 0, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'none' }], { duration: ms * 0.8, easing: MOTO, delay: ms * 0.25, fill: 'backwards' });
        return;
      }
      // in aula il palco è scalato e il widget ha uno zoom: i rettangoli misurati vanno riportati in px CSS
      var z = b.z; if (!(z > 0.05)) z = 1;
      a = { left: a.left / z, top: a.top / z, width: a.width / z, height: a.height / z }; b = { left: b.left / z, top: b.top / z, width: b.width / z, height: b.height / z };
      var dx = a.left - b.left, dy = a.top - b.top, dim = n.hasAttribute('data-dim');
      var dw = Math.abs(a.width - b.width) > 0.5 || Math.abs(a.height - b.height) > 0.5;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && !(dim && dw)) return;
      var da = { transform: 'translate(' + dx + 'px,' + dy + 'px)' }, aa = { transform: 'none' };
      // min e max insieme a width: vale anche per gli elementi flex e grid, dove width da sola non basta
      if (dim && dw) ['width', 'minWidth', 'maxWidth'].forEach(function (p) { da[p] = a.width + 'px'; aa[p] = b.width + 'px'; });
      if (dim && dw) ['height', 'minHeight', 'maxHeight'].forEach(function (p) { da[p] = a.height + 'px'; aa[p] = b.height + 'px'; });
      n.animate([da, aa], { duration: ms, easing: MOTO });
    });
  }
  // scorrimento morbido di un elemento fino a y (accelera e frena)
  function scorri(el, y, ms) {
    var y0 = el.scrollTop, t0 = performance.now(); ms = ms || 900;
    if (W.ridotto) { el.scrollTop = y; return; }
    (function f(now) {
      var k = Math.min(1, (now - t0) / ms), e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      el.scrollTop = y0 + (y - y0) * e;
      if (k < 1) requestAnimationFrame(f);
    })(t0);
  }

  window.KIT = { esc: esc, css: css, html: html, file: file, anteprima: anteprima, passi: registraPassi, demo: demo,
    menu: menu, casella: casella, campo: campo, riga: riga, CLUB: CLUB, specificita: specificita, confronta: confronta, adatta: adatta,
    flip: flip, scorri: scorri, MOTO: MOTO };
})();
