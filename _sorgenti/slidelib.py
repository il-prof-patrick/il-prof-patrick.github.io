"""Aiuti per le slide di Presenta in aula: domande, errori, animazioni, schemi, widget e foto si prendono
dal contenuto del Word (contenuto.json) e dalle scelte della pagina (capitolo_NN.py), così non si riscrivono a mano.
Le slide di spiegazione (punti, tessere, confronto, formula, tabella, storia) si scrivono nel file slide_NN.py."""
import json, os, re, importlib
from sitolib import F, scrivi_aula, configura
from rendi import CONT, tit_breve

QUI = os.path.dirname(os.path.abspath(__file__))
ATM = json.load(open(os.path.join(QUI, 'atmosfera.json')))


class Capitolo:
    def __init__(self, n):
        self.n = n; self.C = CONT['chapters'][n - 1]
        self.conf = importlib.import_module('capitolo_%02d' % n)
        self.dom, self.err, self.fig, self.box = [], [], {}, []
        for si, S in enumerate(self.C['sezioni']):
            for k, b in enumerate(S['blocchi']):
                if b['t'] == 'domanda': self.dom.append(b)
                elif b['t'] == 'errore': self.err.append(b)
                elif b['t'] == 'figura': self.fig[b.get('id') or f'X{n}.{si + 1}.{k}'] = b
                elif b['t'] == 'box': self.box.append((S['num'], b))
        self.usati = {'dom': set(), 'err': set(), 'fig': set()}

    def md(self, s):  # dal Word alle slide: niente link markdown
        return re.sub(r'\[([^\]]+)\]\(\S+?\)', r'\1', s)

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
        return {'tipo': 'sezione', 'num': num, 'titolo': titolo or S['titolo'], 'sotto': sotto, 'foto': F('unsplash:' + ATM[num], '', '')}

    def COP(self, sotto, titolo=None):
        return {'tipo': 'copertina', 'titolo': titolo or self.C['titolo'], 'sotto': sotto,
                'indice': [[s['num'], s['titolo']] for s in self.C['sezioni']], 'foto': F('unsplash:' + ATM['c%d' % self.n], '', '')}

    def scrivi(self, out, slide):
        mancano = []
        mancano += ['domanda %d: %s' % (i, self.dom[i]['q'][:50]) for i in range(len(self.dom)) if i not in self.usati['dom']]
        mancano += ['errore %d: %s' % (i, self.err[i]['errata'][:50]) for i in range(len(self.err)) if i not in self.usati['err']]
        togli = getattr(self.conf, 'TOGLI', [])
        mancano += ['figura ' + f for f in self.fig if f not in self.usati['fig'] and f not in togli and getattr(self.conf, 'FOTO', {}).get(f, {}).get('modo') != 'no']
        for w in re.findall(r'data-widget="(\w+)"', open(os.path.join(out, 'capitolo-%02d.html' % self.n)).read()):
            if not any(s.get('w') == w for s in slide): mancano.append('widget ' + w)
        if mancano: print('MANCANO NELLE SLIDE:\n  ' + '\n  '.join(mancano))
        scrivi_aula(os.path.join(out, 'assets', 'capitolo-%02d-aula.js' % self.n), '%02d' % self.n, self.C['titolo'], slide)
