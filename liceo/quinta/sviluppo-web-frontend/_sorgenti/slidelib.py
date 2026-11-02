"""Aiuti per le slide di Presenta in aula: domande, errori, animazioni, schemi, widget e foto si prendono
dal contenuto del Word (contenuto.json) e dalle scelte della pagina (capitolo_NN.py), così non si riscrivono a mano.
Le slide di spiegazione (punti, tessere, confronto, formula, tabella, storia) si scrivono nel file slide_NN.py."""
import json, os, re, importlib
import html as _h
from sitolib import F, scrivi_aula, configura, evidenzia
from rendi import CONT, tit_breve
from webconv import Tmd

QUI = os.path.dirname(os.path.abspath(__file__))
ATM = json.load(open(os.path.join(QUI, 'atmosfera.json'), encoding='utf8'))

NON_TESTO = {'src', 'sel', 'id', 'w', 'tipo', 'num', 'alt', 'icona', 'html'}


def fix(o, chiave=None):
    """Rende innocuo per la slide ogni testo (i tag scritti tra apici inversi restano visibili come testo)."""
    if isinstance(o, str):
        return o if chiave in NON_TESTO else _h.escape(o, quote=False)
    if isinstance(o, list):
        return [fix(x, chiave) for x in o]
    if isinstance(o, dict):
        return {k: fix(v, k) for k, v in o.items()}
    return o


class Capitolo:
    def __init__(self, n, da=None):
        """n = capitolo del sito; da = capitolo del Word (il 2 del Word è diviso nelle pagine 2, 3, 4: SEZ in capitolo_NN.py).
        Domande ed errori si contano su tutto il capitolo del Word (c.ERR(25) resta lo stesso in ogni pagina)."""
        self.n = n; self.da = da or n; self.C = CONT['chapters'][self.da - 1]
        self.conf = importlib.import_module('capitolo_%02d' % n)
        self.titolo = getattr(self.conf, 'TITOLO', self.C['titolo'])
        self.sez = getattr(self.conf, 'SEZ', None) or [s['num'] for s in self.C['sezioni']]
        self.dom_sez, self.err_sez, self.fig_sez = [], [], {}
        self.dom, self.err, self.fig, self.box = [], [], {}, []
        for si, S in enumerate(self.C['sezioni']):
            for k, b in enumerate(S['blocchi']):
                if b['t'] == 'domanda': self.dom.append(b); self.dom_sez.append(S['num'])
                elif b['t'] == 'errore': self.err.append(b); self.err_sez.append(S['num'])
                elif b['t'] == 'figura':
                    fid = b.get('id') or f'X{self.da}.{si + 1}.{k}'
                    self.fig[fid] = b; self.fig_sez[fid] = S['num']
                elif b['t'] == 'box': self.box.append((S['num'], b))
        self.usati = {'dom': set(), 'err': set(), 'fig': set()}

    def md(self, s):  # dal Word alle slide: niente link markdown
        return Tmd(re.sub(r'\[([^\]]+)\]\(\S+?\)', r'\1', s))

    def DOM(self, i, testo=None, risposta=None):
        b = self.dom[i]; self.usati['dom'].add(i)
        return {'tipo': 'domanda', 'testo': testo or self.md(b['q']), 'risposta': risposta if risposta is not None else self.md(b['risposta'])}

    def ERR(self, i, titolo=None):
        b = self.err[i]; self.usati['err'].add(i)
        d = {'tipo': 'errore', 'no': self.md(b['errata']), 'si': self.md(b['corretta'])}
        if titolo: d['titolo'] = titolo
        return d

    def AN(self, fid, titolo):
        self.usati['fig'].add(fid); return {'tipo': 'anim', 'titolo': titolo, 'id': self.conf.ANIM[fid]['id']}

    def SC(self, fid, titolo):
        self.usati['fig'].add(fid); return {'tipo': 'schema', 'titolo': titolo, 'sel': '#' + self.conf.SCHEMI[fid]['id']}

    def COD(self, righe, titolo, note=None):
        """Slide con un blocco di codice colorato e, a destra, le note che compaiono a clic."""
        d = {'tipo': 'codice', 'titolo': titolo, 'html': evidenzia(righe if isinstance(righe, str) else chr(10).join(righe))}
        if note: d['note'] = note
        return d

    def WG(self, nome, titolo): return {'tipo': 'widget', 'titolo': titolo, 'w': nome}

    def FO(self, fid, tit=None):
        b = self.fig[fid]; self.usati['fig'].add(fid)
        f = getattr(self.conf, 'FOTO', {}).get(fid, {})
        return F(f.get('chiave') or b['foto']['chiave'], tit or f.get('tit') or tit_breve(b['x']), re.sub(r'\*', '', b['x']) or tit or '')

    def FOBOX(self, sez, tit):
        b = next(b for s, b in self.box if s == sez and 'foto' in b)
        return F(b['foto']['chiave'], tit, tit)

    def SEZ(self, num, sotto, titolo=None):
        S = next(s for s in self.C['sezioni'] if s['num'] == num)
        return {'tipo': 'sezione', 'num': self.num(num), 'titolo': titolo or S['titolo'], 'sotto': sotto, 'foto': F('unsplash:' + ATM[num], '', '')}

    def COP(self, sotto, titolo=None):
        idx = [next(s for s in self.C['sezioni'] if s['num'] == x) for x in self.sez]
        return {'tipo': 'copertina', 'titolo': titolo or self.titolo, 'sotto': sotto,
                'indice': [[self.num(s['num']), s['titolo']] for s in idx], 'foto': F('unsplash:' + ATM.get('c%d' % self.n, ATM['c%d' % self.da]), '', '')}

    def num(self, x):
        """Numero del Word → numero nella pagina (2.4 del Word → 2.3 del sito)."""
        return x if self.da == self.n and not hasattr(self.conf, 'SEZ') else '%d.%d' % (self.n, self.sez.index(x) + 1)

    def scrivi(self, out, slide):
        mancano = []
        mancano += ['domanda %d: %s' % (i, self.dom[i]['q'][:50]) for i in range(len(self.dom)) if i not in self.usati['dom'] and self.dom_sez[i] in self.sez]
        mancano += ['errore %d: %s' % (i, self.err[i]['errata'][:50]) for i in range(len(self.err)) if i not in self.usati['err'] and self.err_sez[i] in self.sez]
        togli = getattr(self.conf, 'TOGLI', [])
        mancano += ['figura ' + f for f in self.fig if f not in self.usati['fig'] and self.fig_sez[f] in self.sez and f not in togli and getattr(self.conf, 'FOTO', {}).get(f, {}).get('modo') != 'no']
        for w in re.findall(r'data-widget="(\w+)"', open(os.path.join(out, 'capitolo-%02d.html' % self.n), encoding='utf8').read()):
            if not any(s.get('w') == w for s in slide): mancano.append('widget ' + w)
        if mancano: print('MANCANO NELLE SLIDE:\n  ' + '\n  '.join(mancano))
        scrivi_aula(os.path.join(out, 'assets', 'capitolo-%02d-aula.js' % self.n), '%02d' % self.n, self.titolo, fix(slide))
