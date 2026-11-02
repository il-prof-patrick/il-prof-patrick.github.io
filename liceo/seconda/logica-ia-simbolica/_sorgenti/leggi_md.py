"""Legge il brainstorming in Markdown e scrive contenuto.json (stessa forma usata da rendi.py e slidelib.py).

Fonte: _brainstorming/Brainstorming - Logica e IA simbolica (Seconda liceo).md alla radice del repository.
Blocchi riconosciuti (righe che iniziano con «>»): [FOTO], [ANIMAZIONE], [SCHEMA], [WIDGET], [ESEMPIO], [NELLA STORIA],
[DOMANDA ALLA CLASSE], [ERRORE TIPICO], [RICORDA], [CONCETTO] (idea principale, riquadro a parte); un blocco «>» senza etichetta è un argomento scritto in colonna.
Uso: python leggi_md.py"""
import json, os, re

QUI = os.path.dirname(os.path.abspath(__file__))
MD = os.path.join(QUI, '..', '..', '..', '..', '_brainstorming', 'Brainstorming - Logica e IA simbolica (Seconda liceo).md')
TAG = re.compile(r'^\*\*\[([A-Z ]+)\]\*\*\s*(.*)$')


def titolo_tag(resto):
    """«*Titolo* · nota» → (Titolo, nota)."""
    m = re.match(r'\*(.+?)\*\s*(?:·\s*(.*))?$', resto.strip())
    return (m.group(1), (m.group(2) or '').strip()) if m else ('', resto.strip().lstrip('·').strip())


def descrizione(riga):
    m = re.search(r'Descrizione:\s*«(.*)»', riga)
    return m.group(1) if m else ''


def foto(tit, nota, righe):
    url = pag = did = ''
    for r in righe:
        if r.startswith('!['): url = re.search(r'\]\((\S+)\)', r).group(1)
        elif r.startswith('Fonte:'): pag = r[6:].strip()
        elif r.startswith('Didascalia:'): did = r[11:].strip()
    if pag.startswith('commons:'):
        chiave = pag[8:].strip()
    else:
        chiave = 'web:' + url + '|' + (pag or url)
    return {'t': 'figura', 'tipo': 'foto', 'x': tit, 'tit': tit, 'did': did,
            'modo': 'grande' if 'dettagli' in nota else 'mg', 'foto': {'url': url, 'pagina': pag, 'chiave': chiave}}


def sottoblocco(tag, resto, righe):
    tit, nota = titolo_tag(resto)
    if tag == 'FOTO':
        return foto(tit, nota, righe)
    if tag == 'ANIMAZIONE':
        d = {'t': 'figura', 'tipo': 'animazione', 'titolo': tit, 'x': '\n'.join(righe), 'passi': [], 'inizio': ''}
        for r in righe:
            if r.startswith('**Fa capire:**'): d['capire'] = r[14:].strip()
            elif r.startswith('**Scena iniziale'): d['inizio'] = descrizione(r)
            elif r.startswith('**Passo'): d['passi'].append(descrizione(r))
        return d
    if tag in ('SCHEMA', 'WIDGET'):
        return {'t': 'figura', 'tipo': tag.lower(), 'titolo': tit, 'x': '\n'.join(righe)}
    if tag in ('ESEMPIO', 'NELLA STORIA', 'CONCETTO'):
        return {'t': 'box', 'k': {'ESEMPIO': 'esempio', 'NELLA STORIA': 'storia', 'CONCETTO': 'concetto'}[tag], 'titolo': tit, 'x': '\n'.join(righe).strip()}
    if tag == 'DOMANDA ALLA CLASSE':
        q = next(r for r in righe if r.startswith('«'))
        risp = next((r for r in righe if r.startswith('**Risposta:**')), '')
        return {'t': 'domanda', 'q': q.strip('«»'), 'scopo': re.sub(r'^·?\s*scopo:\s*', '', resto.strip()), 'risposta': risp[13:].strip()}
    if tag == 'ERRORE TIPICO':
        no = next(r for r in righe if r.startswith('✗'))
        si = next(r for r in righe if r.startswith('✓'))
        return {'t': 'errore', 'errata': no[1:].strip(), 'corretta': si[1:].strip()}
    if tag == 'RICORDA':
        return {'t': 'ricorda', 'items': [r[2:].strip() for r in righe if r.startswith('- ')]}
    raise ValueError('etichetta sconosciuta: ' + tag)


def citazione(righe):
    """Un gruppo di righe «>»: uno o più blocchi con etichetta, oppure un argomento in colonna."""
    righe = [re.sub(r'^>\s?', '', r) for r in righe]
    if not TAG.match(righe[0]):
        prem, concl, sopra = [], [], True
        for r in righe:
            if re.fullmatch(r'[―—─-]{3,}', r.strip()): sopra = False
            elif r.strip(): (prem if sopra else concl).append(r.strip())
        return [{'t': 'arg', 'premesse': prem, 'conclusione': concl}]
    out, cur = [], None
    for r in righe:
        m = TAG.match(r)
        if m:
            if cur: out.append(sottoblocco(*cur))
            cur = (m.group(1), m.group(2), [])
        else:
            cur[2].append(r)
    out.append(sottoblocco(*cur))
    # una foto subito dopo un riquadro (nello stesso gruppo) va dentro il riquadro
    fin = []
    for b in out:
        if b.get('tipo') == 'foto' and fin and fin[-1]['t'] == 'box':
            fin[-1].setdefault('foto', b['foto']); fin[-1].setdefault('foto_tit', b['tit'])
            fin[-1].setdefault('foto_tutte', []).append((b['foto']['chiave'], b['tit']))
        else:
            fin.append(b)
    return fin


def leggi():
    L = open(MD, encoding='utf8').read().split('\n')
    capitoli, cap, sez = [], None, None
    i = 0

    def agg(b):
        if b['t'] == 'ricorda': cap['ricorda'] = b['items']; return
        sez['blocchi'].append(b)

    while i < len(L):
        r = L[i]
        if m := re.match(r'^## (\d+)\. (.+)$', r):
            cap = {'n': int(m.group(1)), 'titolo': m.group(2).strip(), 'intro': '', 'sezioni': [], 'ricorda': []}
            capitoli.append(cap); sez = None; i += 1; continue
        if cap is None or not r.strip() or r.strip() == '---':
            i += 1; continue
        if m := re.match(r'^### (\d+\.\d+) (.+)$', r):
            sez = {'num': m.group(1), 'titolo': m.group(2).strip(), 'blocchi': []}
            cap['sezioni'].append(sez); i += 1; continue
        if sez is None:
            if re.fullmatch(r'\*[^*].*\*', r.strip()): cap['intro'] = r.strip()[1:-1]
            i += 1; continue
        if r.startswith('#### '):
            agg({'t': 'h3', 'x': r[5:].strip()}); i += 1; continue
        if r.startswith('>'):
            j = i
            while j < len(L) and L[j].startswith('>'): j += 1
            for b in citazione(L[i:j]): agg(b)
            i = j; continue
        if r.startswith('|'):
            j = i
            while j < len(L) and L[j].startswith('|'): j += 1
            SEGNO = chr(1)   # una barra scritta come \| dentro una cella non separa le colonne
            rows = [[c.strip().replace(SEGNO, '|') for c in x.replace('\\|', SEGNO).strip().strip('|').split('|')] for x in L[i:j]]
            rows = [x for x in rows if not all(re.fullmatch(r':?-{3,}:?', c) for c in x)]
            agg({'t': 'table', 'rows': rows}); i = j; continue
        if re.match(r'^(- |\d+\. )', r):
            num = not r.startswith('- ')
            j = i; items = []
            while j < len(L) and re.match(r'^(- |\d+\. )', L[j]):
                items.append(re.sub(r'^(- |\d+\. )', '', L[j]).strip()); j += 1
            agg({'t': 'num' if num else 'list', 'items': items}); i = j; continue
        agg({'t': 'p', 'x': r.strip()}); i += 1
    return capitoli


if __name__ == '__main__':
    C = leggi()
    # id delle figure: F<cap>.<sez>.<k> in ordine, come nei moduli fatti dal Word
    for c in C:
        for si, S in enumerate(c['sezioni']):
            k = 0
            for b in S['blocchi']:
                if b['t'] == 'figura':
                    k += 1; b['id'] = 'F%d.%d.%d' % (c['n'], si + 1, k)
    json.dump({'title': 'Logica e IA simbolica', 'chapters': C}, open(os.path.join(QUI, 'contenuto.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
    for c in C:
        tipi = {}
        for S in c['sezioni']:
            for b in S['blocchi']:
                k = b['t'] + ('/' + b['tipo'] if b['t'] == 'figura' else '')
                tipi[k] = tipi.get(k, 0) + 1
        print(c['n'], c['titolo'], len(c['sezioni']), 'sezioni', 'ricorda:', len(c['ricorda']), tipi)
