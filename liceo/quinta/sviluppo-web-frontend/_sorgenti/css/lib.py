"""lib - costruzione delle pagine CSS (capitoli 5, 6, 7) del modulo Sviluppo Web - Front end (Quinta liceo).

La fonte è _brainstorming/Brainstorming - CSS (Quinta liceo).md (radice del repo). Ogni file capNN.py è un TEMA
(i vecchi 16 capitoli del modulo CSS): scrive il suo h2 con P.capo(), i paragrafi (h3) con P.sez() e le sue slide con P.aula().
I file _sorgenti/capitolo_05/06/07.py mettono insieme i temi con componi():
  5 CSS: introduzione = cap01–cap05 · 6 CSS: base = cap06–cap10 · 7 CSS: avanzato = cap11–cap16.
I numeri dei paragrafi in P.sez('9.2', …) e nelle chiavi di SP sono quelli vecchi: servono solo come chiavi (SP, atmosfera).

Testo con la stessa sintassi delle slide: **grassetto**, *corsivo* (inglesismi), `codice`, [[termine definito]].
Widget, schemi e animazioni stanno in assets/capitolo-NN.js (registrati con WIDGET.registra o KIT.demo/KIT.passi).
"""
import html as _h, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))     # sitolib.py del modulo
import sitolib as SL
from sitolib import mg, grande, coppia, fl, h2, err, dom, scrivi, F, configura

QUI = os.path.dirname(os.path.abspath(__file__))
SITO = os.path.join(QUI, '..', '..')
MODULO = 'Sviluppo Web - Front end'
configura(modulo=MODULO)
ATM = json.load(open(os.path.join(QUI, 'atmosfera.json'), encoding='utf8')) if os.path.exists(os.path.join(QUI, 'atmosfera.json')) else {}


# ---------------------------------------------------------------- testo
def md(s):
    """**grassetto** · *corsivo* · `codice` · [[termine]] → HTML della pagina (il resto è reso innocuo)."""
    cod = []
    def tieni(m):
        cod.append('<code>' + _h.escape(m.group(1), quote=False) + '</code>'); return '\x00%d\x00' % (len(cod) - 1)
    s = re.sub(r'`([^`]+)`', tieni, s)
    s = _h.escape(s, quote=False)
    s = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s)
    s = re.sub(r'(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])', r'\1<i>\2</i>', s)
    s = re.sub(r'\[\[(.+?)\]\]', r'<span class="termine">\1</span>', s)
    return re.sub(r'\x00(\d+)\x00', lambda m: cod[int(m.group(1))], s)


def evidenzia_css(t):
    """CSS colorato come in assets/kit.js: selettori .k, proprietà .a, valori .s, commenti .c (ogni riga chiusa)."""
    o, buf, st, d = [], [], 'sel', 0
    def span(cls, x):
        return '\n'.join(('<span class="%s">%s</span>' % (cls, _h.escape(p, quote=False)) if p.strip() else _h.escape(p, quote=False)) for p in x.split('\n'))
    def flush(cls):
        if buf: o.append(span(cls, ''.join(buf)) if cls else _h.escape(''.join(buf), quote=False)); buf.clear()
    i = 0
    while i < len(t):
        c = t[i]
        if c == '/' and t[i + 1:i + 2] == '*':
            flush({'sel': 'k', 'prop': 'a', 'val': 's'}[st])
            j = t.find('*/', i + 2); j = len(t) - 2 if j < 0 else j
            o.append(span('c', t[i:j + 2])); i = j + 2; continue
        if st == 'sel':
            if c == '{': flush('k'); o.append('{'); d += 1; st = 'prop'
            elif c == '}': flush('k'); o.append('}'); d = max(0, d - 1)
            elif c == ';': flush('k'); o.append(';')
            else: buf.append(c)
        elif st == 'prop':
            if c == ':': flush('a'); o.append(':'); st = 'val'
            elif c == '}': flush('a'); o.append('}'); d -= 1; st = 'prop' if d > 0 else 'sel'
            elif c == ';': flush('a'); o.append(';')
            elif c == '{': flush('k'); o.append('{'); d += 1
            else: buf.append(c)
        else:
            if c == ';': flush('s'); o.append(';'); st = 'prop'
            elif c == '}': flush('s'); o.append('}'); d -= 1; st = 'prop' if d > 0 else 'sel'
            else: buf.append(c)
        i += 1
    flush({'sel': 'k', 'prop': 'a', 'val': 's'}[st])
    return ''.join(o)


def codice_css(t, nome=''):
    testa = f'<span class="kit-pre-nome">{nome}</span>' if nome else ''
    return f'  <pre class="codice">{testa}<code>{evidenzia_css(t.strip(chr(10)))}</code></pre>\n'


def codice_html(t, nome=''):
    testa = f'<span class="kit-pre-nome">{nome}</span>' if nome else ''
    return f'  <pre class="codice">{testa}<code>{SL.evidenzia(t.strip(chr(10)))}</code></pre>\n'


def cod_aula(t, lingua='css'):
    return evidenzia_css(t.strip('\n')) if lingua == 'css' else SL.evidenzia(t.strip('\n'))


# ---------------------------------------------------------------- pagina
class Pagina:
    def __init__(self, n, titolo):
        self.n, self.titolo = n, titolo
        self.c = ''
        self.sezioni = []          # [{num, titolo, R, fig:[], err:[], dom:[], slide:[]}]
        self.ric_extra = []
        self.capi = []             # temi: [{num, titolo, v (vecchio capitolo), da (prima sezione)}]
        self.slide = []

    def capo(self, titolo, vecchio):
        """Comincia un tema della pagina (h2 numerato n.k): il vecchio capitolo `vecchio` del modulo CSS."""
        self.capi.append(dict(num='%d.%d' % (self.n, len(self.capi) + 1), titolo=titolo, v=vecchio, da=len(self.sezioni)))
        self.c += h2(self.capi[-1]['num'], 'p%d' % len(self.capi), md(titolo))

    @property
    def S(self): return self.sezioni[-1]

    def sez(self, num, titolo, R, ic=None):
        """Paragrafo (h3) con l'icona Lucide della sua idea (scrittura-e-forma: un'icona sui sotto-titoli)."""
        self.sezioni.append(dict(num=num, titolo=titolo, R=R, fig=[], err=[], dom=[]))
        i = f'<i data-ic="{ic}" class="ic-20"></i>' if ic else ''
        self.c += f'  <h3 id="s{num.replace(".", "-")}"' + (' class="con-ic"' if ic else '') + f'>{i}{md(titolo)}</h3>\n'

    def p(self, *righe):
        for r in righe: self.c += '  <p>' + md(r) + '</p>\n'

    def h3(self, t): self.c += f'  <h3>{md(t)}</h3>\n'

    def ul(self, voci, tag='ul'):
        self.c += f'  <{tag}>\n' + ''.join(f'    <li>{md(v)}</li>\n' for v in voci) + f'  </{tag}>\n'

    def ol(self, voci): self.ul(voci, 'ol')

    def tab(self, righe, titolo=None, aula=True):
        r = [[md(c) for c in x] for x in righe]
        self.c += SL.tab(r)
        if aula: self.S['fig'].append(('tab', righe, titolo))

    def css(self, t, nome='', aula=None):
        self.c += codice_css(t, nome)
        if aula: self.S['fig'].append(('cod', t, aula, 'css'))

    def html(self, t, nome='', aula=None):
        self.c += codice_html(t, nome)
        if aula: self.S['fig'].append(('cod', t, aula, 'html'))

    def es(self, t, titolo='Esempio'):
        """Riquadro «Esempio»: riga grigia a sinistra, etichetta piccola; paragrafi separati da una riga vuota, righe con «- » = elenco."""
        corpo = ''
        for x in t.split('\n\n'):
            rr = x.split('\n')
            if all(r.startswith('- ') for r in rr): corpo += '<ul>' + ''.join('<li>' + md(r[2:]) + '</li>' for r in rr) + '</ul>'
            else: corpo += '<p>' + md(x) + '</p>'
        self.c += f'  <div class="ese"><b>{titolo}</b>{corpo}</div>\n'

    def forma(self, *voci):
        """Schema in una riga: blocco, freccia, blocco… (voci pari = 'nome|sottotitolo', dispari = nome del passaggio)."""
        h = ''
        for k, v in enumerate(voci):
            if k % 2: h += f'<span class="fr"><i>⟶</i>{md(v)}</span>'
            else:
                n, _, sotto = v.partition('|')
                cl = ' class="out"' if k == len(voci) - 1 else ''
                h += f'<span{cl}>{md(n)}' + (f'<small>{md(sotto)}</small>' if sotto else '') + '</span>'
        self.c += f'  <div class="forma">{h}</div>\n'

    def casi(self, *cc):
        """Due colonne per un confronto vero: (tono 'si'/'no', etichetta, testo, css facoltativo)."""
        h = ''
        for c in cc:
            tono, et, testo = c[0], c[1], c[2]
            segno = '✓ ' if tono == 'si' else '✗ ' if tono == 'no' else ''
            h += f'<div class="{tono}"><b>{segno}{md(et)}</b>' + ''.join('<p>' + md(x) + '</p>' for x in testo.split('\n\n') if x)
            if len(c) > 3: h += codice_css(c[3]).strip()
            h += '</div>'
        self.c += f'  <div class="casi">{h}</div>\n'

    def approfondimento(self, t, titolo='Approfondimento'):
        corpo = '</p>\n    <p>'.join(md(x) for x in t.split('\n\n'))
        self.c += SL.box('storia', titolo, 'scale', '<p>' + corpo + '</p>')

    def err(self, no, si):
        self.c += err(md(no), md(si)); self.S['err'].append((no, si))

    def dom(self, q, r, prima=False):
        self.c += dom(md(q)); self.S['dom'].append((q, r, prima))

    def widget(self, nome, titolo, aula=True):
        self.c += SL.widget(nome)
        if aula: self.S['fig'].append(('widget', nome, titolo))

    def schema(self, id, titolo, corpo, aula=True, titolo_aula=None):
        """Schema statico in HTML (o SVG scritto a mano) con le classi di kit.css."""
        self.c += f'  <figure>\n    <div class="tela schema" id="{id}"><p class="passi-titolo">{titolo}</p>\n{corpo}\n    </div>\n  </figure>\n'
        if aula: self.S['fig'].append(('schema', id, titolo_aula or titolo))

    def svg(self, id, titolo, vb, aria, aula=True):
        """Schema SVG disegnato in assets/capitolo-NN.js con SCENA.costruisci(id, ...)."""
        self.schema(id, titolo, f'      <svg viewBox="{vb}" role="img" aria-label="{aria}"></svg>', aula)

    def mg(self, chiave, tit, alt):
        self.c += mg(chiave, tit, alt)

    def grande(self, chiave, did, alt, aula=None):
        self.c += grande(chiave, md(did), alt)
        if aula: self.S['fig'].append(('foto', chiave, aula, alt))

    def coppia(self, a, b, aula=None):
        self.c += coppia((a[0], md(a[1]), a[2]), (b[0], md(b[1]), b[2]))
        if aula: self.S['fig'].append(('foto2', (a, b), aula))

    def raw(self, h): self.c += h

    def scrivi(self):
        ric = [s['R'] for s in self.sezioni] + self.ric_extra
        corpo = self.c + SL.ricorda([md(r) for r in ric])
        scrivi(os.path.join(SITO, 'capitolo-%02d.html' % self.n), SL.pagina(self.n, md(self.titolo), corpo, 'capitolo-%02d.js' % self.n))

    # ------------------------------------------------------------ slide
    def aula(self, sotto, spiega, apertura=None, sotto_sez=None):
        """Slide del tema in corso: la sua apertura, poi per ogni paragrafo domande di previsione, slide di spiegazione
        (spiega[num], scritte a mano), figure della pagina (widget, schemi, tabelle, codice, foto), errori e domande."""
        cp = self.capi[-1]
        S = [{'tipo': 'sezione', 'num': cp['num'], 'titolo': cp['titolo'], 'sotto': sotto, 'foto': atm('c%d' % cp['v'])}]
        if apertura: S.append({'tipo': 'domanda', 'testo': apertura[0], 'risposta': apertura[1]})
        for s in self.sezioni[cp['da']:]:
            # niente slide di sezione per i paragrafi (h3): il loro titolo va nell'occhiello delle slide
            n0 = len(S)
            S += [{'tipo': 'domanda', 'testo': q, 'risposta': r} for q, r, pr in s['dom'] if pr]
            usati = set()
            for x in spiega.get(s['num'], []):
                if isinstance(x, str):            # rimando a una figura della pagina, nel punto voluto
                    usati.add(x); S.append(self._fig(s, x))
                else: S.append(x)
            for f in s['fig']:
                if isinstance(f[1], str) and f[1] in usati: continue
                S.append(self._figura(f))
            S += [{'tipo': 'errore', 'no': no, 'si': si} for no, si in s['err']]
            S += [{'tipo': 'domanda', 'testo': q, 'risposta': r} for q, r, pr in s['dom'] if not pr]
            for x in S[n0:]:
                if x['tipo'] not in ('domanda', 'errore', 'sezione') and 'occhiello' not in x: x['occhiello'] = s['titolo']
        self.slide += S

    def scrivi_aula(self, sotto):
        cop = {'tipo': 'copertina', 'titolo': self.titolo, 'sotto': sotto,
               'indice': [[c['num'], c['titolo']] for c in self.capi], 'foto': atm('c%d' % self.capi[0]['v'])}
        SL.scrivi_aula(os.path.join(SITO, 'assets', 'capitolo-%02d-aula.js' % self.n), '%02d' % self.n, self.titolo, fix([cop] + self.slide), stile='schema')

    def _fig(self, s, chiave):
        for f in s['fig']:
            if isinstance(f[1], str) and f[1] == chiave: return self._figura(f)
        raise KeyError('figura non trovata nella sezione %s: %s' % (s['num'], chiave))

    def _figura(self, f):
        t = f[0]
        if t == 'widget': return {'tipo': 'widget', 'titolo': f[2], 'w': f[1]}
        if t == 'schema': return {'tipo': 'schema', 'titolo': f[2], 'sel': '#' + f[1]}
        if t == 'tab': return {'tipo': 'tabella', 'titolo': f[2] or 'Tabella', 'righe': f[1]}
        if t == 'cod': return {'tipo': 'codice', 'titolo': f[2], 'html': cod_aula(f[1], f[3])}
        if t == 'foto': return {'tipo': 'foto', 'titolo': f[2], 'foto': [F(f[1], '', f[3])]}
        if t == 'foto2': return {'tipo': 'foto', 'titolo': f[2], 'foto': [F(a[0], '', a[2]) for a in f[1]]}
        raise ValueError(t)


def componi(n, titolo, vecchi, sotto):
    """Pagina n con i temi capNN.py (vecchi = numeri dei file), poi le slide con la copertina (sotto = sottotitolo)."""
    P = Pagina(n, titolo)
    for v in vecchi:
        f = os.path.join(QUI, 'cap%02d.py' % v)
        exec(compile(open(f, encoding='utf8').read(), f, 'exec'), {'P': P, '__name__': 'tema'})
    P.scrivi(); P.scrivi_aula(sotto)
    return P


def atm(k):
    v = ATM.get(k)
    return F('local:assets/immagini/atmosfera/' + v, '', '') if v else None


NON_TESTO = {'src', 'sel', 'id', 'w', 'tipo', 'num', 'alt', 'icona', 'html', 'tono', 'tonoOcc'}


def fix(o, chiave=None):
    """Testi delle slide resi innocui (i tag tra apici inversi restano visibili come testo)."""
    if isinstance(o, str): return o if chiave in NON_TESTO else _h.escape(o, quote=False)
    if isinstance(o, list): return [fix(x, chiave) for x in o]
    if isinstance(o, dict): return {k: fix(v, k) for k, v in o.items() if v is not None}
    return o


# slide scritte a mano: scorciatoie
def punti(titolo, msg, pp, nota=None, foto=None):
    d = {'tipo': 'punti', 'titolo': titolo, 'msg': msg, 'punti': pp}
    if nota: d['nota'] = nota
    if foto: d['foto'] = foto
    return d


def tessere(titolo, msg, tt, nota=None):
    d = {'tipo': 'tessere', 'titolo': titolo, 'msg': msg, 'tessere': tt}
    if nota: d['nota'] = nota
    return d


def confronto(titolo, msg, a, b, verdetto=None):
    d = {'tipo': 'confronto', 'titolo': titolo, 'msg': msg, 'a': a, 'b': b}
    if verdetto: d['verdetto'] = verdetto
    return d


def codice(titolo, msg, testo, note=None, lingua='css'):
    d = {'tipo': 'codice', 'titolo': titolo, 'msg': msg, 'html': cod_aula(testo, lingua)}
    if note: d['note'] = note
    return d


def tabella(titolo, msg, righe):
    return {'tipo': 'tabella', 'titolo': titolo, 'msg': msg, 'righe': righe}


# forme «schema geometrico» (scrittura-e-forma.md, parte 2): la slide ha la forma del suo significato
def _d(tipo, titolo, **k):
    d = {'tipo': tipo, 'titolo': titolo}
    d.update({a: b for a, b in k.items() if b is not None})
    return d


def nd(titolo=None, testo=None, icona=None, righe=None, css=None, html=None, tono=None, nota=None, riga=None):
    """Blocco di flusso/bivio/casi: css = codice CSS da colorare, html = codice HTML."""
    b = {'titolo': titolo, 'testo': testo, 'icona': icona, 'righe': righe, 'tono': tono, 'nota': nota, 'riga': riga}
    if css: b['html'] = cod_aula(css)
    if html: b['html'] = cod_aula(html, 'html')
    return {a: v for a, v in b.items() if v is not None}


def caso(tono, etichetta, **k):
    """Un caso di casi(): tono 'si' (✓ verde) o 'no' (✗ rosso) + gli stessi campi di nd()."""
    b = nd(tono=tono, **k); b['etichetta'] = etichetta
    return b


def definizione(titolo, frase, parti=None, nota=None, occhiello=None):
    return _d('definizione', titolo, frase=frase, parti=parti, nota=nota, occhiello=occhiello)


def flusso(titolo, blocchi, frecce=None, msg=None, occhiello=None, riga=None):
    return _d('flusso', titolo, blocchi=blocchi, frecce=frecce, msg=msg, occhiello=occhiello, riga=riga)


def casi(titolo, cc, msg=None, occhiello=None, aClic=None):
    return _d('casi', titolo, casi=cc, msg=msg, occhiello=occhiello, aClic=aClic)


def bivio(titolo, frase, rami, msg=None, occhiello=None):
    return _d('bivio', titolo, frase=frase, rami=rami, msg=msg, occhiello=occhiello)


def linea(titolo, pp, msg=None, occhiello=None):
    return _d('linea', titolo, punti=pp, msg=msg, occhiello=occhiello)


def anatomia(titolo, codice, parti, msg=None, effetto=None, occhiello=None):
    """parti: [frammento, nome, spiegazione(, occorrenza)]: il frammento è cercato nel codice."""
    return _d('anatomia', titolo, codice=codice, parti=parti, msg=msg, effetto=effetto, occhiello=occhiello)


def cifra(titolo, a, b, num, testo, cautela=None, occhiello=None):
    return _d('cifra', titolo, a=a, b=b, cifra=num, testo=testo, cautela=cautela, occhiello=occhiello)


def gettoni(titolo, gg, perche=None, foto=None, msg=None, occhiello=None):
    return _d('gettoni', titolo, gettoni=gg, perche=perche, foto=foto, msg=msg, occhiello=occhiello)


def domanda(testo, risposta=None):
    d = {'tipo': 'domanda', 'testo': testo}
    if risposta: d['risposta'] = risposta
    return d
