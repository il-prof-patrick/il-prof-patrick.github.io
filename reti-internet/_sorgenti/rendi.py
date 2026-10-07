"""Rende una pagina del sito dal contenuto del Word (contenuto.json, da leggi_word.py) con sitolib.
Ogni capitolo ha il suo file capitolo_NN.py con le scelte che il Word non dice:
  ANIM   = {id_word: dict(id, titolo, inizio, vb, aria[, passi])}      animazioni a passi (scene in assets/capitolo-NN.js)
  SCHEMI = {id_word: dict(id, titolo, svg)}                              schemi statici
  FOTO   = {id_word: dict(modo='mg'|'grande'|'coppia'|'box'|'no', tit, dove='prima'|'qui', ...)}
  DOPO   = {indice_blocco_o_id: html}                                    widget o altro da inserire dopo un blocco
  FORMULE = [testo]                                                      paragrafi del Word da mostrare come formula
Il testo resta quello del Word: grassetti, corsivi, elenchi, tabelle, riquadri, errori, domande e Ricorda."""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sitolib import *

QUI = os.path.dirname(os.path.abspath(__file__))
CONT = json.load(open(os.path.join(QUI, 'contenuto.json')))


def html(s):
    """Testo del Word (**grassetto**, *corsivo*, `codice`, [link](url)) → HTML della pagina."""
    s = s.replace('<', '&lt;').replace('>', '&gt;')
    s = re.sub(r'\[([^\]]+)\]\((\S+?)\)', lambda m: f'<a href="{m.group(2)}" target="_blank" rel="noopener">{m.group(1)}</a>', s)
    s = re.sub(r'(?<![\w/])(https?://[^\s<"]+[^\s<".,;:)])(?![^<]*</a>)', r'<a href="\1" target="_blank" rel="noopener">\1</a>', s)
    s = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s)
    s = re.sub(r'(?<![\w*])\*([^*\s][^*]*?)\*(?![\w*])', r'<i>\1</i>', s)
    s = re.sub(r'`(.+?)`', r'<code>\1</code>', s)
    return s


ART = r'(?:Il|La|Lo|L’|Un|Una|Uno|Un’|Gli|I|Le|Nell’architettura|Nella|Nel)'


def termini(h):
    """La prima parola in grassetto di una definizione («La **X** (…) è …») diventa un termine definito."""
    return re.sub(r'^((?:' + ART + r'\s*)?)<b>([^<]{2,60})</b>(?=(?:\s*\([^)]*\))?\s*(?:è|sono|si chiama|\(|,))',
                  r'\1<span class="termine">\2</span>', h, count=1)


def tit_breve(x):
    """Titoletto sotto la foto a margine: la parte prima dei due punti."""
    t = re.split(r':|\. ', x.replace('*', ''), 1)[0].strip().rstrip('.')
    return t[0].upper() + t[1:] if t else t


def capitolo(n, conf, out):
    C = CONT['chapters'][n - 1]
    ANIM, SCHEMI, FOTO = conf.get('ANIM', {}), conf.get('SCHEMI', {}), conf.get('FOTO', {})
    DOPO, FORMULE, PRIMA = conf.get('DOPO', {}), conf.get('FORMULE', []), conf.get('PRIMA', {})
    TOGLI = conf.get('TOGLI', [])
    corpo = ''
    anon = 0
    for si, S in enumerate(C['sezioni']):
        corpo += h2(S['num'], 'p%d' % (si + 1), html(S['titolo']))
        B = S['blocchi']
        # 1) costruisce la lista degli elementi html, con le foto a margine da spostare
        el = []          # (tipo, html, chiave)
        k = 0
        while k < len(B):
            b = B[k]; t = b['t']
            if t == 'figura':
                fid = b.get('id') or f'X{n}.{si + 1}.{k}'
                if fid in TOGLI: k += 1; continue
                if b['tipo'] == 'foto':
                    f = FOTO.get(fid, {})
                    modo = f.get('modo') or ('grande' if 'Osservare' in b['x'] else 'mg')
                    ch = f.get('chiave') or b['foto']['chiave']
                    alt = f.get('alt') or re.sub(r'\*', '', b['x']).strip() or f.get('tit', '')
                    if modo == 'no': k += 1; continue
                    if modo == 'mg':
                        dove = ('ancora', f['ancora'].replace('*', '')) if f.get('ancora') else f.get('dove', 'prima')
                        el.append(('mg', mg(ch, f.get('tit') or tit_breve(b['x']), alt.replace('"', '’')), dove, fid))
                    elif modo == 'grande':
                        el.append(('fig', grande(ch, html(f.get('did') or b['x']), alt.replace('"', '’')), None, fid))
                    elif modo == 'coppia':
                        b2 = B[k + 1]; f2 = FOTO.get(b2.get('id'), {})
                        a = (ch, html(f.get('did') or b['x']), alt.replace('"', '’'))
                        bb = (f2.get('chiave') or b2['foto']['chiave'], html(f2.get('did') or b2['x']), re.sub(r'\*', '', b2['x']).replace('"', '’'))
                        el.append(('fig', coppia(a, bb), None, fid)); k += 1
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
                k += 1; continue
            if t == 'p':
                x = b['x']
                if x in FORMULE: el.append(('blk', formula(html(x)), None, k))
                else: el.append(('p', '  <p>' + termini(html(x)) + '</p>\n', None, k))
            elif t == 'h3': el.append(('h3', f'  <h3>{html(b["x"])}</h3>\n', None, k))
            elif t in ('list', 'num'):
                tag = 'ul' if t == 'list' else 'ol'
                el.append(('p', f'  <{tag}>\n' + ''.join(f'    <li>{termini(html(i))}</li>\n' for i in b['items']) + f'  </{tag}>\n', None, k))
            elif t == 'table':
                rows = [[html(c) for c in r] for r in b['rows']]
                el.append(('blk', tab(rows), None, k))
            elif t == 'box':
                fn = {'esempio': es, 'storia': storia, 'lab': lab}[b['k']]
                corpo_box = '</p>\n    <p>'.join(html(p) for p in b['x'].split('\n\n'))
                img = ''
                if 'foto' in b:
                    f = FOTO.get('box' + S['num'], {})
                    img = fl(b['foto']['chiave'], f.get('tit', ''), f.get('alt', f.get('tit', '')))
                h_ = fn(corpo_box, img)
                if 'video' in b:
                    vid = re.search(r'v=([\w-]+)', b['video']).group(1)
                    h_ = h_[:-len('</div>\n')] + f'\n    <a class="video" href="https://www.youtube.com/watch?v={vid}" target="_blank" rel="noopener" data-yt="{vid}"><img src="https://i.ytimg.com/vi/{vid}/hqdefault.jpg" alt="Anteprima del video" loading="lazy"><span class="play" aria-hidden="true"></span><span class="video-eti">Guarda il video</span></a>\n  </div>\n'
                el.append(('box', h_, None, k))
            elif t == 'errore':
                el.append(('blk', err(html(b['errata']), html(b['corretta'])), None, k))
            elif t == 'domanda':
                el.append(('blk', dom(html(b['q'])), None, k))
            elif t == 'quote':
                el.append(('blk', PRIMA.get('quote', ''), None, k))
            k += 1
        # 2) foto dentro i riquadri vicini
        for i, e in enumerate(el):
            if e[0] == 'fotobox':
                j = next((j for j in (range(i - 1, -1, -1) if e[2] == 'prima' else range(i + 1, len(el))) if el[j][0] == 'box'), None)
                ch, tt, alt = e[1]
                if j is None: raise ValueError('nessun riquadro vicino per la foto ' + e[3])
                bx = el[j][1]
                if 'foto-lato' in bx:  # c'è già una foto: due affiancate
                    old = re.search(r'<a class="fonte"[^>]*>.*?</a>', bx).group(0)
                    raise ValueError('due foto nello stesso riquadro: usa FOTO[...]["insieme"]')
                el[j] = ('box', bx.replace('<div class="box ', '<div class="box ', 1).replace('<h3>', fl(ch, tt, alt).strip().replace('foto-lato ', 'foto-lato testa ') + '<h3>', 1), None, el[j][3])
                el[i] = ('vuoto', '', None, e[3])
        # 3) foto a margine: subito prima del paragrafo o elenco che le riguarda
        uscita = [x for x in el if x[0] != 'vuoto']
        ordinati = []
        for e in uscita:
            if e[0] == 'mg' and isinstance(e[2], tuple): ordinati.append(e); continue
            if e[0] == 'mg' and e[2] == 'prima':
                # torna indietro fino al paragrafo/elenco più vicino (non oltre titoli e riquadri)
                j = len(ordinati) - 1
                while j >= 0 and ordinati[j][0] in ('mg',):
                    j -= 1
                if j >= 0 and ordinati[j][0] == 'p':
                    # risali ai paragrafi consecutivi solo se la foto riguarda il primo (dove='prima2')
                    ordinati.insert(j, e); continue
                e = (e[0], e[1], 'dopo', e[3])
            ordinati.append(e)
        # foto 'dopo': spostale prima del primo paragrafo successivo
        fin = []; attesa = []
        for e in ordinati:
            if e[0] == 'mg' and e[2] == 'dopo': attesa.append(e); continue
            if attesa and e[0] == 'p': fin += attesa; attesa = []
            fin.append(e)
        if attesa: raise ValueError('foto a margine senza paragrafo dopo: ' + ', '.join(a[3] for a in attesa))
        # foto con un'ancora: subito prima del paragrafo/elenco che contiene quel testo
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
    if C.get('ricorda'):
        corpo += ricorda([html(i) for i in C['ricorda'] if i.strip()])
    titolo = conf.get('TITOLO', C['titolo'])
    scrivi(os.path.join(out, 'capitolo-%02d.html' % n), pagina(n, html(titolo), corpo, 'capitolo-%02d.js' % n))
    return C
