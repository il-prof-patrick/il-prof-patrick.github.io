"""sitolib - libreria per generare le pagine del sito didattico e le slide di Presenta in aula.

Uso tipico (vedi examples/capitolo-04/genera_capitolo_04.py):

    import sys; sys.path.insert(0, '<cartella della skill>/scripts')
    from sitolib import *
    configura(modulo='Reti e Internet')
    c = ''
    c += h2('4.1', 'p1', 'La scheda di rete')
    c += mg('Ethernet_pci_card.jpg', 'Scheda di rete Ethernet', 'Testo alternativo')
    c += '  <p>Testo con <b>idea chiave</b>…</p>\\n'
    ...
    scrivi('sito/capitolo-04.html', pagina(4, 'I dispositivi di rete', c, 'capitolo-04.js'))

Foto: chiave 'pexels:<ID>', 'unsplash:photo-<…>' oppure il nome del file su Wikimedia Commons
('Nome_file.jpg'). Le fonti vengono raccolte da sole e stampate in fondo alla pagina.
"""
import hashlib, json, re, urllib.parse

CONF = {'modulo': 'Modulo'}
CREDITI = []


def configura(**k):
    CONF.update(k)


# ---------------------------------------------------------------- foto
def _src(f):
    """(url diretto, nome fonte, pagina della foto)"""
    if f.startswith('pexels:'):
        i = f.split(':', 1)[1]
        return (f'https://images.pexels.com/photos/{i}/pexels-photo-{i}.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Pexels', f'https://www.pexels.com/photo/{i}/')
    if f.startswith('web:'):
        # foto trovata con Google Immagini: 'web:<url diretto dell'immagine>|<pagina di origine>'
        url, pag = f[4:].split('|', 1)
        return (url, urllib.parse.urlparse(pag).netloc.replace('www.', ''), pag)
    if f.startswith('unsplash:'):
        i = f.split(':', 1)[1]
        return (f'https://images.unsplash.com/{i}?w=1200&q=80&fm=jpg', 'Unsplash', 'https://unsplash.com/')
    nome = f.replace(' ', '_')
    h = hashlib.md5(nome.encode()).hexdigest()
    return (f'https://upload.wikimedia.org/wikipedia/commons/{h[0]}/{h[:2]}/{urllib.parse.quote(nome)}', 'Wikimedia Commons',
            f'https://commons.wikimedia.org/wiki/File:{urllib.parse.quote(nome)}')


def _img(f, alt, lazy=True, cornice=False):
    """Immagine che, cliccata, apre la sua pagina di origine (niente elenco delle fonti in fondo).
    Le foto non si tagliano mai e nel sito tengono le loro proporzioni (cornice=True: riquadro 4:3 con la foto sfocata dietro, non usato)."""
    url, lab, link = _src(f)
    CREDITI.append((alt, lab, link))
    lz = ' loading="lazy"' if lazy else ''
    cls, st = ('fonte cornice', f' style="--sf:url(&quot;{url}&quot;)"') if cornice else ('fonte', '')
    return f'<a class="{cls}"{st} href="{link}" target="_blank" rel="noopener"><img src="{url}" alt="{alt}"{lz} referrerpolicy="no-referrer"></a>'


def mg(f, tit, alt):
    """Foto di riconoscimento: colonna a margine destra, titoletto sotto. Va subito PRIMA del paragrafo che la riguarda."""
    return f'  <figure class="foto-margine">{_img(f, alt, lazy=False)}<figcaption class="foto-tit">{tit}</figcaption></figure>\n'


def grande(f, didascalia, alt):
    """Foto da guardare nei dettagli: grande, centrata nel flusso, con didascalia che dice che cosa osservare."""
    return f'  <figure class="foto-grande">{_img(f, alt, lazy=False, cornice=False)}<figcaption>{didascalia}</figcaption></figure>\n'


def coppia(a, b):
    """Due foto da confrontare affiancate (es. RJ45 e RJ11), ognuna con la sua didascalia: coppia((f, didascalia, alt), (f, didascalia, alt))."""
    return '  <div class="foto-coppia">\n' + ''.join(f'    <figure>{_img(f, alt, lazy=False)}<figcaption>{d}</figcaption></figure>\n' for f, d, alt in (a, b)) + '  </div>\n'


def fl(*foto):
    """Foto dentro un riquadro (storia/esempio/lab), da passare come img=fl(...).
    Una foto: fl(f, tit, alt). Più foto affiancate: fl((f, tit, alt), (f, tit, alt))."""
    if foto and isinstance(foto[0], str):
        foto = (foto,)
    if len(foto) == 1:
        f, tit, alt = foto[0]
        return f'  <figure class="foto-lato dx">{_img(f, alt, lazy=False)}<figcaption class="foto-tit">{tit}</figcaption></figure>\n'
    dentro = ''.join(f'<div class="fl-uno">{_img(f, alt, lazy=False)}<span class="foto-tit">{tit}</span></div>' for f, tit, alt in foto)
    return f'  <figure class="foto-lato dx multi" data-n="{len(foto)}">{dentro}</figure>\n'


def crediti():
    if not CREDITI:
        return ''
    li = ''.join(f'      <li>{a[0].upper() + a[1:]}: <a href="{k}" target="_blank" rel="noopener">{l}</a></li>\n' for a, l, k in CREDITI)
    return f'  <div class="crediti-foto"><p>Fonti delle immagini</p>\n    <ul>\n{li}    </ul>\n  </div>\n'


# ---------------------------------------------------------------- blocchi di testo
def h2(n, id, t):
    return f'\n  <!-- ===================== {n} ===================== -->\n  <h2 id="{id}"><span class="num">{n}</span>{t}</h2>\n'


def tab(rows):
    h = '  <div class="tab"><table>\n    <thead><tr>' + ''.join(f'<th>{c}</th>' for c in rows[0]) + '</tr></thead>\n    <tbody>\n'
    for r in rows[1:]:
        h += '      <tr>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>\n'
    return h + '    </tbody></table></div>\n'


def box(k, titolo, ic, body, img=''):
    return f'  <div class="box {k}">{img.strip().replace("foto-lato ", "foto-lato testa ")}<h3><i data-ic="{ic}" class="ic-20"></i> {titolo}</h3>\n    {body}</div>\n'


def es(b, img=''): return box('esempio', 'Esempio', 'book-open', '<p>' + b + '</p>', img)
def storia(b, img=''): return box('storia', 'Nella storia', 'history', '<p>' + b + '</p>', img)
def lab(b, img=''): return box('lab', 'In laboratorio', 'users', '<p>' + b + '</p>', img)


def err(errata, corretta):
    """Errore tipico: frase sbagliata (come la direbbe uno studente) + correzione con il perché."""
    return box('errore', 'Errore tipico', 'circle-x', '<p class="err-no">' + errata + '</p>\n    <p class="err-si">' + corretta + '</p>')


def ricorda(items):
    return box('nota', 'Ricorda', 'lightbulb', '<ul>\n' + ''.join(f'      <li>{i}</li>\n' for i in items) + '    </ul>')


def dom(q):
    """Domanda alla classe: nella pagina è nascosta, compare solo nelle slide."""
    return f'  <p class="domanda">{q}</p>\n'


def formula(t):
    return f'  <p class="formula">{t}</p>\n'


# ---------------------------------------------------------------- figure
def anim(id, titolo, inizio, viewbox, aria, passi):
    """Animazione a passi. La scena si disegna in assets/capitolo-NN.js con SCENA.costruisci(id, ...)."""
    li = ''.join(f'        <li>{p}</li>\n' for p in passi)
    return (f'  <figure>\n    <div class="tela passi-anim" id="{id}" data-titolo="{titolo}" data-inizio="{inizio}">\n'
            f'      <svg viewBox="{viewbox}" role="img" aria-label="{aria}"></svg>\n      <ol class="passi-testo">\n{li}      </ol>\n    </div>\n  </figure>\n')


def schema(titolo, svg, id):
    """Schema statico (SVG scritto a mano con le classi della scena). L'id serve per riusarlo nelle slide."""
    return f'  <figure>\n    <div class="tela schema" id="{id}"><p class="passi-titolo">{titolo}</p>\n{svg}\n    </div>\n  </figure>\n'


def widget(nome):
    """Widget «Prova tu» registrato in assets/capitolo-NN.js con WIDGET.registra(nome, fn)."""
    return f'  <figure>\n    <div class="tela" data-widget="{nome}"></div>\n  </figure>\n'


# ---------------------------------------------------------------- pagina
def _controlla_margine(corpo):
    """Una foto a margine deve avere subito dopo un paragrafo o un elenco: altrimenti resta un buco bianco."""
    righe = corpo.split('\n')
    for i, r in enumerate(righe):
        if 'class="foto-margine"' in r:
            dopo = next((x.strip() for x in righe[i + 1:] if x.strip()), '')
            if not (dopo.startswith('<p') or dopo.startswith('<ul') or dopo.startswith('<ol')) or dopo.startswith('<p class="domanda"'):
                tit = r.split('foto-tit">')[1].split('<')[0] if 'foto-tit">' in r else r[:80]
                raise ValueError(f'Foto a margine «{tit}» senza testo accanto (dopo c\'è: {dopo[:60]}…). '
                                 'Mettila prima di un paragrafo o di un elenco, oppure dentro il riquadro con img=fl(...).')


def pagina(n, titolo, corpo, js):
    L = corpo.split('\n'); out = []
    for l in L:
        if l.startswith('  <h2 '):
            out.append('  <div class="stacco"></div>')
        out.append(l)
    corpo = '\n'.join(out)
    parti = corpo.split('  <div class="stacco"></div>\n')
    corpo = parti[0] + ''.join('  <section class="sez">\n' + p + '  </section>\n' for p in parti[1:])
    _controlla_margine(corpo)
    m = CONF['modulo']
    aula = js.replace('.js', '-aula.js')
    return f'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{n}. {titolo} · {m}</title>
<link rel="stylesheet" href="assets/sito.css">
</head>
<body data-capitolo="{n}">
<div class="corpo">
<nav class="menu" id="menu" aria-label="Capitoli del modulo"></nav>
<main class="lezione" lang="it">
  <div class="meta"><span><i data-ic="layers" class="ic-16"></i> {m} · Capitolo {n:02d}</span></div>
  <h1>{titolo}</h1>

  <div class="contenuto">
{corpo}
  </div>
  <nav class="fine" data-auto aria-label="Capitoli vicini"></nav>
</main>
</div>
<script src="assets/modulo.js"></script>
<script src="assets/icone.js"></script>
<script src="assets/sito.js"></script>
<script src="assets/scena.js"></script>
<script src="assets/{js}"></script>
<script src="assets/{aula}"></script>
</body>
</html>
'''


def scrivi(percorso, testo):
    open(percorso, 'w').write(testo)
    print('scritto', percorso)


# ---------------------------------------------------------------- slide (Presenta in aula)
def F(key, tit='', alt=''):
    """Foto per le slide."""
    return {'src': _src(key)[0], 'tit': tit, 'alt': alt or tit}


def scrivi_aula(percorso, n, titolo, slide):
    """Scrive assets/capitolo-NN-aula.js. n come stringa a due cifre ('04')."""
    data = {'modulo': CONF['modulo'], 'n': n, 'titolo': titolo, 'slide': slide}
    open(percorso, 'w').write('window.AULA = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')
    print('scritto', percorso, len(slide), 'slide')
