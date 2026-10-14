"""Conversione del contenuto del Word (contenuto.json) in HTML del sito, per il modulo Sviluppo Web.

Il Word scrive i tag e gli attributi come testo semplice (<p>, href="…", index.html…): qui vengono
riconosciuti e messi in <code>, mentre grassetti (**…**) e corsivi (*…*) diventano <b> e <i>.
"""
import html as H
import json
import re
from sitolib import *

# ------------------------------------------------------------------ testo in linea
_COPPIA = r'<([a-zA-Z][\w-]*)(?:\s[^<>]*)?>[^<>]*</\1>'           # <h1>Titolo</h1>
_TAG = r'<!--.*?-->|<!DOCTYPE[^>]*>|</?[a-zA-Z][\w-]*(?:\s[^<>]*)?/?>|<\s>'
_ENT = r'(?:&[a-zA-Z]+;|&#\d+;)+'
_ATTR = r'(?<![\w-])[a-zA-Z][\w-]*="[^"]*"'
_FILE = r'(?<![\w.’-])/?(?:[\w’-]+/)*[\w’-]+\.(?:html?|css|js|png|jpe?g|svg|webp|avif|gif|mp4|mp3|ogg|webm|ico|pdf|json|txt)(?![\w-])'
_EXTRA = r'ul>li\*3>a|h[1-6]–h[1-6]|data-\*|(?<![\w’-])\.(?:html|css|js)(?![\w-])'

TAG_NUDI = ('head body html div span strong em ul ol dl nav main aside article section footer header img iframe '
            'table thead tbody tfoot td th caption select option optgroup textarea fieldset legend label input button form '
            'picture abbr address blockquote details summary dialog datalist hr br code pre mark small sub sup ins '
            'h1 h2 h3 h4 h5 h6').split()
ATTR_NUDI = ('id class src alt href lang charset width height loading colspan rowspan scope action method name type value '
             'checked required controls autoplay muted poster preload placeholder pattern min max step minlength maxlength '
             'target rel title style disabled readonly autofocus autocomplete inputmode srcset sizes for').split()
ATTR_NUDI.remove('for')
CSS_NUDI = 'font-size margin padding text-indent list-style display'.split()
_NUDI = re.compile(r'(?<![\w./#@-])(' + '|'.join(sorted(TAG_NUDI + ATTR_NUDI + CSS_NUDI, key=len, reverse=True)) + r')(?![\w@-]|\.\w)')


def T(s, nudi=True):
    """Testo del Word → HTML in linea."""
    pezzi = []

    def tieni(m):
        pezzi.append('<code>' + H.escape(m.group(0), quote=False) + '</code>')
        return '\x00%d\x00' % (len(pezzi) - 1)

    for rx in (_COPPIA, _TAG, _ENT, _ATTR, _FILE, _EXTRA):
        s = re.sub(rx, tieni, s, flags=re.S)
    if nudi:
        s = _NUDI.sub(tieni, s)
    s = H.escape(s, quote=False)
    s = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s, flags=re.S)
    s = re.sub(r'(?<![\w*])\*([^*\s][^*]*?)\*(?![\w*])', r'<i>\1</i>', s)
    s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
    s = re.sub(r'\x00(\d+)\x00', lambda m: pezzi[int(m.group(1))], s)
    return s


# ------------------------------------------------------------------ blocchi
def tabella(rows, prima_colonna_codice=False):
    rows = [r for r in rows if any(c.strip() for c in r)]
    return tab([[T(c) for c in r] for r in rows])


def elenco(items, ordinato=False):
    t = 'ol' if ordinato else 'ul'
    return f'  <{t}>\n' + ''.join(f'    <li>{T(i)}</li>\n' for i in items) + f'  </{t}>\n'


def blocco_codice(righe):
    return codice([r for r in righe])


def render(blocchi, figure=None, dopo_box_codice=True):
    """Converte i blocchi di una sezione. figure: dict id → funzione che restituisce l'HTML della figura
    (o None per saltarla); 'prima' e 'dopo' si gestiscono nel generatore con lo spostamento dei blocchi."""
    figure = figure or {}
    out = ''
    i = 0
    n = len(blocchi)
    while i < n:
        b = blocchi[i]
        t = b['t']
        if t == 'p':
            out += f'  <p>{T(b["x"])}</p>\n'
        elif t == 'h3':
            out += f'  <h3>{T(b["x"])}</h3>\n'
        elif t == 'table':
            out += tabella(b['rows'])
        elif t == 'num':
            out += elenco(b['items'], True)
        elif t == 'list':
            out += elenco(b['items'])
        elif t == 'quote':
            out += blocco_codice(b['righe'])
        elif t == 'errore':
            out += err(T(b['errata']), T(b['corretta']))
        elif t == 'domanda':
            out += dom(T(b['q']))
        elif t == 'box':
            k, x = b['k'], T(b['x'])
            f = {'esempio': es, 'storia': storia, 'lab': lab}[k]
            if dopo_box_codice and i + 1 < n and blocchi[i + 1]['t'] == 'quote' and len(b['x']) < 90:
                # «Esempio svolto: …» seguito dal suo codice: il codice sta dentro il riquadro
                extra = blocco_codice(blocchi[i + 1]['righe'])
                out += box('esempio', 'Esempio', 'book-open', '<p>' + x + '</p>\n' + extra)
                i += 1
            else:
                out += f(x)
        elif t == 'figura':
            fn = figure.get(b['id'])
            if fn is not None:
                r = fn(b)
                if r:
                    out += r
        else:
            raise ValueError('blocco sconosciuto: ' + t)
        i += 1
    return out


def Tmd(s):
    """Testo del Word → testo per le slide (markdown: **grassetto**, *corsivo*, `codice`): tag, attributi e nomi di file vanno tra apici inversi."""
    pezzi = []

    def tieni(m):
        pezzi.append('`' + m.group(0) + '`')
        return '§%d§' % (len(pezzi) - 1)

    for rx in (_COPPIA, _TAG, _ENT, _ATTR, _FILE, _EXTRA):
        s = re.sub(rx, tieni, s, flags=re.S)
    s = _NUDI.sub(tieni, s)
    return re.sub('§([0-9]+)§', lambda m: pezzi[int(m.group(1))], s)
