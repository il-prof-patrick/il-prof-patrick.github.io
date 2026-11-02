"""Rende una pagina del sito dal contenuto del Word (contenuto.json, da leggi_word.py) con sitolib.
Ogni capitolo ha il suo file capitolo_NN.py con le scelte che il Word non dice:
  ANIM   = {id_word: dict(id, titolo, inizio, vb, aria[, passi])}      animazioni a passi (scene in assets/capitolo-NN.js)
  SCHEMI = {id_word: dict(id, titolo, svg)}                              schemi statici
  FOTO   = {id_word: dict(modo='mg'|'grande'|'coppia'|'box'|'no', tit, dove='prima'|'qui', ...)}
  DOPO   = {indice_blocco_o_id: html}                                    widget o altro da inserire dopo un blocco
  FORMULE = [testo]                                                      paragrafi del Word da mostrare come formula
  RICORDA = [testo]                                                      riassunto finale (se diverso da quello del Word)
Il testo resta quello del Word: grassetti, corsivi, elenchi, tabelle, riquadri, errori, domande e Ricorda.
Versione per il modulo Sviluppo Web: i tag, gli attributi e i nomi di file scritti nel testo vanno in <code>
e i blocchi di codice (quote) hanno i colori."""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sitolib import *
from webconv import T

QUI = os.path.dirname(os.path.abspath(__file__))
CONT = json.load(open(os.path.join(QUI, 'contenuto.json'), encoding='utf8'))
def cap_json(n): return next(c for c in CONT['chapters'] if c['n'] == n)


def html(s):
    """Testo del Word (**grassetto**, *corsivo*, tag e attributi) → HTML della pagina."""
    return T(s)


ART = r'(?:Il|La|Lo|L’|Un|Una|Uno|Un’|Gli|I|Le|Nell’architettura|Nella|Nel)'


def termini(h):
    """La prima parola in grassetto di una definizione («La **X** (…) è …») diventa un termine definito."""
    return re.sub(r'^((?:' + ART + r'\s*)?)<b>([^<]{2,60})</b>(?=(?:\s*\([^)]*\))?\s*(?:è|sono|si chiama|\(|,))',
                  r'\1<span class="termine">\2</span>', h, count=1)


def corpo_md(x):
    """Testo di un riquadro: paragrafi separati da una riga vuota, righe «- » come elenco."""
    out = []
    for par in re.split(r'\n\s*\n', x.strip()):
        righe = [r for r in par.split('\n') if r.strip()]
        voci = [r[2:] for r in righe if r.startswith('- ')]
        testo = [r for r in righe if not r.startswith('- ')]
        if testo: out.append('<p>' + html(' '.join(testo)) + '</p>')
        if voci: out.append('<ul>\n' + ''.join(f'      <li>{html(v)}</li>\n' for v in voci) + '    </ul>')
    return '\n    '.join(out)


def argomento(premesse, conclusione):
    """Un argomento scritto in colonna: premesse sopra, una riga, conclusione sotto."""
    p = ''.join(f'    <p>{html(x)}</p>\n' for x in premesse)
    c = ''.join(f'    <p class="concl">{html(x)}</p>\n' for x in conclusione)
    return f'  <div class="argomento">\n{p}    <hr>\n{c}  </div>\n'


def tit_breve(x):
    """Titoletto sotto la foto a margine: la parte prima dei due punti."""
    t = re.split(r':|\. ', x.replace('*', ''), 1)[0].strip().rstrip('.')
    return t[0].upper() + t[1:] if t else t


def capitolo(n, conf, out):
    C = cap_json(n)
    corr = conf.get('CORREZIONI', [])      # rimandi e piccoli errori del Word da sistemare prima di rendere
    if corr:
        j = json.dumps(C, ensure_ascii=False)
        for x, y in corr:
            assert x in j, 'correzione non trovata: ' + x
            j = j.replace(x, y)
        C = json.loads(j)
    ANIM, SCHEMI, FOTO = conf.get('ANIM', {}), conf.get('SCHEMI', {}), conf.get('FOTO', {})
    DOPO, FORMULE, PRIMA = conf.get('DOPO', {}), conf.get('FORMULE', []), conf.get('PRIMA', {})
    TOGLI = conf.get('TOGLI', [])
    corpo = ''
    for si, S in enumerate(C['sezioni']):
        corpo += h2(S['num'], 'p%d' % (si + 1), html(S['titolo']))
        B = S['blocchi']
        # 1) costruisce la lista degli elementi html, con le foto a margine da spostare
        el = []          # (tipo, html, dove, chiave)
        k = 0
        while k < len(B):
            b = B[k]; t = b['t']
            if t == 'figura':
                fid = b.get('id') or f'X{n}.{si + 1}.{k}'
                if fid in TOGLI: k += 1; continue
                if b['tipo'] == 'foto':
                    f = FOTO.get(fid, {})
                    modo = f.get('modo') or b.get('modo') or 'mg'
                    ch = f.get('chiave') or b['foto']['chiave']
                    alt = f.get('alt') or re.sub(r'\*', '', b['x']).strip() or f.get('tit', '')
                    if modo == 'no': k += 1; continue
                    if modo == 'mg':
                        dove = ('ancora', f['ancora'].replace('*', '')) if f.get('ancora') else f.get('dove', 'prima')
                        el.append(('mg', mg(ch, f.get('tit') or tit_breve(b['x']), alt.replace('"', '’')), dove, fid))
                    elif modo == 'grande':
                        d = f.get('did') or b.get('did') or b['x']
                        el.append(('fig', grande(ch, html(d[0].upper() + d[1:]), alt.replace('"', '’')), None, fid))
                    elif modo == 'coppia':
                        gruppo = [(ch, html(f.get('did') or b['x']), alt.replace('"', '’'))]
                        for j in range(1, f.get('n', 2)):
                            b2 = B[k + j]; f2 = FOTO.get(b2.get('id'), {})
                            gruppo.append((f2.get('chiave') or b2['foto']['chiave'], html(f2.get('did') or b2['x']), re.sub(r'\*', '', b2['x']).replace('"', '’')))
                        el.append(('fig', coppia(*gruppo), None, fid)); k += f.get('n', 2) - 1
                    elif modo == 'box':
                        el.append(('fotobox', (ch, f.get('tit') or tit_breve(b['x']), alt.replace('"', '’')), f.get('dove', 'prima'), fid))
                    k += 1; continue
                if b['tipo'] == 'animazione':
                    a = ANIM[fid]
                    passi = a.get('passi') or [html(p) for p in b['passi']]
                    el.append(('fig', anim(a['id'], a['titolo'], a['inizio'], a['vb'], a['aria'], passi), None, fid))
                elif b['tipo'] == 'schema':
                    s = SCHEMI[fid]
                    el.append(('fig', schema(s['titolo'], s['svg'], s['id']), None, fid))
                elif b['tipo'] == 'widget':
                    el.append(('fig', widget(conf['WIDGET'][fid]), None, fid))
                k += 1; continue
            if t == 'p':
                x = b['x']
                if x in FORMULE: el.append(('blk', formula(html(x)), None, k))
                else: el.append(('p', '  <p>' + termini(html(x)) + '</p>\n', None, k))
            elif t == 'riga':      # paragrafo + sua foto, preparati dal capitolo_NN.py (b['x'], b['chiave'], b['tit'], b['alt'])
                el.append(('blk', riga(html(b['x']), b['chiave'], b['tit'], b['alt']), None, k))
            elif t == 'h3': el.append(('h3', f'  <h3>{html(b["x"])}</h3>\n', None, k))
            elif t in ('list', 'num'):
                tag = 'ul' if t == 'list' else 'ol'
                el.append(('p', f'  <{tag}>\n' + ''.join(f'    <li>{termini(html(i))}</li>\n' for i in b['items']) + f'  </{tag}>\n', None, k))
            elif t == 'table':
                rows = [[{'V': '<span class="vv">V</span>', 'F': '<span class="ff">F</span>'}.get(c.strip(), html(c)) for c in r] for r in b['rows'] if any(c.strip() for c in r)]
                h_ = tab(rows)
                if all(c.strip() in ('V', 'F') for r in b['rows'][1:] for c in r):   # tavola di verità: stretta e centrata
                    h_ = h_.replace('<div class="tab">', '<div class="tab verita">', 1)
                el.append(('blk', h_, None, k))
            elif t == 'box':
                nome, ic = {'esempio': ('Esempio', 'book-open'), 'storia': ('Nella storia', 'history'), 'concetto': ('Concetto', 'key')}[b['k']]
                img = ''
                if 'foto' in b:
                    f = FOTO.get('box' + S['num'], {})
                    tt = f.get('tit') or b.get('foto_tit', '')
                    img = fl(f.get('chiave') or b['foto']['chiave'], tt, f.get('alt', tt))
                    if len(b.get('foto_tutte', [])) > 1:
                        img = fl(*[(ch_, t_, t_) for ch_, t_ in b['foto_tutte']])
                tit = nome + (' · ' + html(b['titolo']) if b.get('titolo') else '')
                el.append(('box', box(b['k'], tit, ic, corpo_md(b['x']), img), None, k))
            elif t == 'arg':
                el.append(('blk', argomento(b['premesse'], b['conclusione']), None, k))
            elif t == 'errore':
                el.append(('blk', err(html(b['errata']), html(b['corretta'])), None, k))
            elif t == 'domanda':
                el.append(('blk', dom(html(b['q'])), None, k))
            elif t == 'quote':
                cod = codice(b['righe'])
                if el and el[-1][0] == 'box' and len(B[k - 1]['x']) < 90 and B[k - 1]['k'] == 'esempio' and 'foto-lato' not in el[-1][1]:
                    # «Esempio svolto: …» seguito dal suo codice: il codice sta dentro il riquadro
                    h_ = el[-1][1]
                    el[-1] = ('box', h_[:-len('</div>\n')] + cod.replace('  <pre', '    <pre', 1) + '  </div>\n', None, el[-1][3])
                else:
                    el.append(('blk', cod, None, k))
            k += 1
        # 2) foto dentro i riquadri vicini
        for i, e in enumerate(el):
            if e[0] == 'fotobox':
                j = next((j for j in (range(i - 1, -1, -1) if e[2] == 'prima' else range(i + 1, len(el))) if el[j][0] == 'box'), None)
                ch, tt, alt = e[1]
                if j is None: raise ValueError('nessun riquadro vicino per la foto ' + e[3])
                bx = el[j][1]
                if 'foto-lato' in bx:
                    raise ValueError('due foto nello stesso riquadro: usa FOTO[...]["insieme"]')
                el[j] = ('box', bx.replace('<h3>', fl(ch, tt, alt).strip().replace('foto-lato ', 'foto-lato testa ') + '<h3>', 1), None, el[j][3])
                el[i] = ('vuoto', '', None, e[3])
        # 3) foto a margine: subito prima del paragrafo o elenco che le riguarda
        uscita = [x for x in el if x[0] != 'vuoto']
        ordinati = []
        for e in uscita:
            if e[0] == 'mg' and isinstance(e[2], tuple): ordinati.append(e); continue
            if e[0] == 'mg' and e[2] == 'prima':
                j = len(ordinati) - 1
                while j >= 0 and ordinati[j][0] in ('mg',):
                    j -= 1
                if j >= 0 and ordinati[j][0] == 'p':
                    ordinati.insert(j, e); continue
                e = (e[0], e[1], 'dopo', e[3])
            ordinati.append(e)
        fin = []; attesa = []
        for e in ordinati:
            if e[0] == 'mg' and e[2] == 'dopo': attesa.append(e); continue
            if attesa and e[0] == 'p': fin += attesa; attesa = []
            fin.append(e)
        if attesa: raise ValueError('foto a margine senza paragrafo dopo: ' + ', '.join(a[3] for a in attesa))
        for e in [x for x in fin if x[0] == 'mg' and isinstance(x[2], tuple)]:
            fin.remove(e)
            j = next((j for j, x in enumerate(fin) if x[0] == 'p' and e[2][1] in re.sub(r'<[^>]+>', '', x[1])), None)
            if j is None: raise ValueError('ancora non trovata per la foto ' + e[3])
            fin.insert(j, e)
        for e in fin:
            corpo += e[1]
            if e[3] in DOPO: corpo += DOPO[e[3]]
            if (S['num'], e[3]) in DOPO: corpo += DOPO[(S['num'], e[3])]
        if S['num'] in DOPO: corpo += DOPO[S['num']]
    ric = conf.get('RICORDA') or C.get('ricorda')
    if ric:
        corpo += ricorda([html(i) for i in ric if i.strip()])
    titolo = conf.get('TITOLO', C['titolo'])
    scrivi(os.path.join(out, 'capitolo-%02d.html' % n), pagina(n, html(titolo), corpo, 'capitolo-%02d.js' % n))
    return C


# ---------------------------------------------------------------- aiuti per i capitolo_NN.py
def virgolette(s):
    """Le virgolette dritte del brainstorming diventano caporali (servono anche dentro gli attributi HTML)."""
    return re.sub(r'"([^"]+)"', r'“\1”', s)


def figura_md(n, fid):
    return next(b for S in cap_json(n)['sezioni'] for b in S['blocchi'] if b.get('id') == fid)


def anim_md(n, fid, id, vb, aria, titolo=None):
    """Animazione con passi e descrizione iniziale presi dal brainstorming; la scena è in js_capNN_scene.js."""
    b = figura_md(n, fid)
    return dict(id=id, titolo=titolo or virgolette(b['titolo']), inizio=html(virgolette(b['inizio'])),
                passi=[html(virgolette(p)) for p in b['passi']], vb=vb, aria=aria)


def schema_js(n, fid, id, vb, aria, titolo=None):
    """Schema disegnato in js_capNN_scene.js (qui solo lo svg vuoto con la descrizione per chi non vede)."""
    b = figura_md(n, fid)
    return dict(id=id, titolo=titolo or virgolette(b['titolo']), svg=f'      <svg viewBox="{vb}" role="img" aria-label="{aria}"></svg>')
