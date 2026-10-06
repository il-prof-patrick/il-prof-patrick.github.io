#!/usr/bin/env python3
"""Legge il Word di brainstorming (fase 1) e ne ricava il contenuto strutturato del modulo.
Uso: python3 leggi_word.py brainstorming.docx contenuto.json [main.js]
Il contenuto è nello stesso formato dei file di contenuto della fase 1 (P, H, L, N, F, T, S, E, LAB, ERR, D, FIG, R):
serve al sito (genera_capitolo_NN.py), alla dispensa (main.js per scripts/dispensa.py) e al Kahoot.
Testo con **grassetto**, *corsivo*, `codice` e [link](url).
I capitoli e i paragrafi vengono rinumerati in ordine (il Word ha numeri non progressivi)."""
import json, re, subprocess, sys

SRC, OUT = sys.argv[1], sys.argv[2]
MAINJS = sys.argv[3] if len(sys.argv) > 3 else None
ast = json.loads(subprocess.run(['pandoc', SRC, '-t', 'json'], capture_output=True, text=True, check=True).stdout)


# ------------------------------------------------------------------ inline
def inl(xs):
    out = ''
    for x in xs:
        t, c = x['t'], x.get('c')
        if t == 'Str': out += c
        elif t in ('Space', 'SoftBreak'): out += ' '
        elif t == 'LineBreak': out += '\n'
        elif t == 'Strong': out += '**' + inl(c) + '**'
        elif t == 'Emph': out += '*' + inl(c) + '*'
        elif t == 'Underline': out += inl(c)
        elif t == 'Code': out += '`' + c[1] + '`'
        elif t == 'Link':
            txt, url = inl(c[1]), c[2][0]
            out += f'[{txt}]({url})'
        elif t == 'Quoted': q = inl(c[1]); out += ('“' + q + '”') if c[0]['t'] == 'DoubleQuote' else ('‘' + q + '’')
        elif t == 'Superscript': out += inl(c)
        elif t == 'Subscript': out += inl(c)
        elif t == 'Span': out += inl(c[1])
        elif t == 'Image': pass
        elif t == 'Math': out += c[1]
        elif t == 'RawInline': pass
        else: out += inl(c) if isinstance(c, list) else ''
    return out


def pulisci(s):
    s = s.replace(' ', ' ').replace('\\\'', '’')
    s = re.sub(r'[ \t]+', ' ', s).strip()
    s = s.replace("'", '’')
    # grassetti/corsivi vuoti o spezzati
    s = s.replace('****', '').replace('** **', ' ')
    s = re.sub(r'\*\*\s+', '** ', s) if False else s
    return s


def testo_blocco(b):
    if b['t'] in ('Para', 'Plain'): return pulisci(inl(b['c']))
    return ''


def celle(b):
    """Tabella pandoc → righe di celle (ogni cella = lista di blocchi)."""
    c = b['c']
    head, bodies = c[3], c[4]
    righe = []
    for r in head[1]: righe.append([cell[4] for cell in r[1]])
    for body in bodies:
        for r in body[2] + body[3]: righe.append([cell[4] for cell in r[1]])
    return righe


def testo_celle(blocchi):
    return pulisci(' '.join(testo_blocco(x) if x['t'] in ('Para', 'Plain') else ' '.join(inl_list(x)) for x in blocchi))


def inl_list(b):
    if b['t'] in ('BulletList', 'OrderedList'):
        items = b['c'] if b['t'] == 'BulletList' else b['c'][1]
        return [' '.join(testo_blocco(y) for y in it) for it in items]
    return []


# ------------------------------------------------------------------ riquadri
MARCHE = ['NELLA STORIA', 'ESEMPIO', 'LABORATORIO', 'ERRORE TIPICO', 'DOMANDA ALLA CLASSE', 'FOTO', 'FIGURA', 'ANIMAZIONE', 'RICORDA', 'Foto da inserire', 'Animazione: le porte']


def marca(s):
    s2 = s.replace('*', '').strip()
    for m in MARCHE:
        if s2.startswith(m): return m
    return None


def url_foto(testi):
    """Dalle righe della foto ricava (url diretto, pagina di origine)."""
    t = ' '.join(testi)
    diretto = re.search(r'\[link\s*d\s*i\s*r\s*e\s*t\s*t\s*o\]\((\S+?)\)', t.replace('\n', ''))
    pag = re.search(r'\[pagina della foto[^\]]*\]\((\S+?)\)', t)
    if diretto:
        u = diretto.group(1)
        return u, (pag.group(1) if pag else u)
    m = re.search(r'(https?://\S+)', t.replace(' ', ''))
    if m:
        u = m.group(1).rstrip(')').rstrip('.')
        return u, u
    return None, None


def chiave_foto(url, pag):
    url = (url or '').replace('*', ''); pag = (pag or '').replace('*', '')
    m = re.match(r'https://images\.pexels\.com/photos/(\d+)/', url or '')
    if m: return 'pexels:' + m.group(1)
    m = re.match(r'https://images\.unsplash\.com/(photo-[\w-]+)', url or '')
    if m: return 'unsplash:' + m.group(1)
    m = re.match(r'https://upload\.wikimedia\.org/wikipedia/commons/\w/\w\w/(.+)$', url or '')
    if m:
        import urllib.parse
        return urllib.parse.unquote(m.group(1))
    return f'web:{url}|{pag}'


def leggi_figura(tipo, id_, righe):
    """righe: lista di blocchi pandoc dopo la riga di intestazione"""
    paras = []; passi = []
    for b in righe:
        if b['t'] == 'BlockQuote':
            for y in b['c']:
                s = testo_blocco(y)
                if s: paras.append(s)
        elif b['t'] in ('OrderedList', 'BulletList'):
            paras += [pulisci(x) for x in inl_list(b)]
        else:
            s = testo_blocco(b)
            if s: paras.append(s)
    if tipo == 'foto':
        desc = [p for p in paras if '[link' not in p and not p.startswith('http') and not re.match(r'^\S+\.(jpg|jpeg|png|webp)', p, re.I) and not re.match(r'^(Pexels|Unsplash) ', p) and 'pagina della foto' not in p]
        src = [p for p in paras if p not in desc]
        url, pag = url_foto(src or paras)
        return {'t': 'figura', 'tipo': 'foto', 'id': id_, 'x': ' '.join(desc[:1]) if desc else '', 'foto': {'url': url, 'pagina': pag, 'chiave': chiave_foto(url, pag)}}
    desc = []
    for p in paras:
        m = re.match(r'^\**Clic\s*(\d+)\**\s*:?\**\s*:?\s*(.*)$', p, re.S)
        if m: passi.append(pulisci(m.group(2)))
        else: desc.append(p)
    x = ' '.join(desc)
    x = x.replace('**Fa capire:**', 'Fa capire:').replace('**Scena iniziale:**', 'Scena iniziale:')
    return {'t': 'figura', 'tipo': tipo, 'id': id_, 'x': x, 'passi': passi}


def da_riquadro(blocchi):
    """Un riquadro (cella di tabella a una colonna) → blocco di contenuto."""
    if not blocchi: return None
    t0 = testo_blocco(blocchi[0])
    m = marca(t0)
    resto = blocchi[1:]
    if m == 'Foto da inserire':
        u, p = url_foto([testo_blocco(b) for b in blocchi])
        return {'t': 'figura', 'tipo': 'foto', 'id': None, 'x': '', 'foto': {'url': u, 'pagina': p, 'chiave': chiave_foto(u, p)}}
    if m in ('FOTO', 'FIGURA', 'ANIMAZIONE'):
        id_ = (re.search(r'(F\d+\.\d+\.\d+)', t0) or [None, None])[1] if re.search(r'F\d+\.\d+\.\d+', t0) else None
        tipo = {'FOTO': 'foto', 'FIGURA': 'schema', 'ANIMAZIONE': 'animazione'}[m]
        return leggi_figura(tipo, id_, resto)
    if m == 'ERRORE TIPICO':
        tt = [testo_blocco(b) for b in resto if testo_blocco(b)]
        no = next((x for x in tt if x.startswith('✗')), ''); si = ' '.join(x for x in tt if x.startswith('✓'))
        return {'t': 'errore', 'errata': no.lstrip('✗').strip(), 'corretta': si.lstrip('✓').strip()}
    if m == 'DOMANDA ALLA CLASSE':
        scopo = t0.split('·', 1)[1].strip() if '·' in t0 else ''
        tt = [testo_blocco(b) for b in resto if testo_blocco(b)]
        q = next((x for x in tt if not x.startswith('*Risposta')), '')
        r = next((x for x in tt if x.startswith('*Risposta')), '')
        r = re.sub(r'^\*Risposta breve:\s*', '', r).rstrip('*').strip()
        return {'t': 'domanda', 'q': q.strip('*').strip(), 'scopo': scopo, 'risposta': r}
    if m == 'RICORDA':
        items = []
        for b in resto:
            items += [pulisci(x) for x in inl_list(b)]
        return {'t': 'ricorda', 'items': [i for i in items if i]}
    if m in ('NELLA STORIA', 'ESEMPIO', 'LABORATORIO'):
        k = {'NELLA STORIA': 'storia', 'ESEMPIO': 'esempio', 'LABORATORIO': 'lab'}[m]
        paras, foto, video = [], None, None
        for b in resto:
            s = testo_blocco(b)
            if not s: continue
            if s.startswith('Foto da inserire'):
                u, p = url_foto([s]); foto = {'url': u, 'pagina': p, 'chiave': chiave_foto(u, p)}; continue
            if s.startswith('Video da integrare'):
                video = re.search(r'(https?://\S+)', s).group(1); continue
            paras.append(s)
        d = {'t': 'box', 'k': k, 'x': '\n\n'.join(paras)}
        if foto: d['foto'] = foto
        if video: d['video'] = video
        return d
    return None


# ------------------------------------------------------------------ lettura
cap = None; sez = None; capitoli = []
B = ast['blocks']; i = 0


def aggiungi(b):
    global sez
    if sez is None:
        sez = {'titolo': '', 'blocchi': []}; cap['sezioni'].append(sez)
    if b['t'] == 'ricorda':
        cap['ricorda'] = b['items']; return
    sez['blocchi'].append(b)


def para_marca(i):
    """Riquadri spezzati dal Word (marca in un paragrafo normale): raccoglie i blocchi che seguono."""
    t0 = testo_blocco(B[i]); m = marca(t0)
    j = i + 1; corpo = []
    if m == 'ERRORE TIPICO':
        while j < len(B) and B[j]['t'] == 'Para' and testo_blocco(B[j])[:1] in '✗✓':
            corpo.append(B[j]); j += 1
    elif m == 'DOMANDA ALLA CLASSE':
        while j < len(B) and B[j]['t'] == 'Para' and len(corpo) < 2:
            corpo.append(B[j]); j += 1
    elif m in ('ANIMAZIONE', 'Animazione: le porte'):
        while j < len(B) and B[j]['t'] in ('Para', 'BlockQuote', 'OrderedList'):
            s = testo_blocco(B[j]) if B[j]['t'] == 'Para' else 'x'
            if B[j]['t'] == 'Para' and not (s.startswith('Fa capire') or s.startswith('**Fa capire') or s.startswith('**Scena') or s.startswith('**Clic') or s.startswith('Scena')):
                break
            corpo.append(B[j]); j += 1
        if m == 'Animazione: le porte':
            r = leggi_figura('animazione', None, corpo); r['titolo_word'] = 'Le porte'; return r, j
    r = da_riquadro([B[i]] + corpo)
    return r, j


while i < len(B):
    b = B[i]; t = b['t']
    if t == 'Header':
        lv = b['c'][0]; tit = pulisci(inl(b['c'][2]))
        if lv == 1:
            m = re.match(r'^\d+\.\s*(.*)$', tit)
            cap = {'n': len(capitoli) + 1, 'titolo': m.group(1) if m else tit, 'intro': '', 'sezioni': [], 'ricorda': []}
            capitoli.append(cap); sez = None
        elif lv == 2:
            m = re.match(r'^[\d.]+\s*(.*)$', tit)
            tt = (m.group(1) if m else tit).strip()
            if tt:
                sez = {'titolo': tt, 'blocchi': []}; cap['sezioni'].append(sez)
        else:
            if tit: aggiungi({'t': 'h3', 'x': tit})
        i += 1; continue
    if cap is None: i += 1; continue
    if t == 'Para':
        s = testo_blocco(b)
        if not s or s in ('.', '3'): i += 1; continue
        if not cap['sezioni'] and s.startswith('*') and s.endswith('*') and not cap['intro']:
            cap['intro'] = s.strip('*'); i += 1; continue
        if marca(s) in ('ERRORE TIPICO', 'DOMANDA ALLA CLASSE', 'ANIMAZIONE', 'Animazione: le porte') and len(s) < 80:
            r, i = para_marca(i)
            if r: aggiungi(r)
            continue
        aggiungi({'t': 'p', 'x': s}); i += 1; continue
    if t == 'BulletList':
        aggiungi({'t': 'list', 'items': [pulisci(x) for x in inl_list(b)]}); i += 1; continue
    if t == 'OrderedList':
        aggiungi({'t': 'num', 'items': [pulisci(x) for x in inl_list(b)]}); i += 1; continue
    if t == 'BlockQuote':
        # l'URL scomposto (4.4) o un riquadro spezzato
        aggiungi({'t': 'quote', 'righe': [testo_blocco(y) for y in b['c'] if testo_blocco(y)]}); i += 1; continue
    if t == 'Table':
        rr = celle(b)
        ncol = max(len(r) for r in rr)
        if ncol == 1:
            for r in rr:
                x = da_riquadro(r[0])
                if x: aggiungi(x)
        else:
            righe = [[testo_celle(c) for c in r] for r in rr]
            righe = [[re.sub(r'^\*\*(.*)\*\*$', r'\1', c) if k == 0 else c for c in r] if k == 0 else r for k, r in enumerate(righe)]
            aggiungi({'t': 'table', 'rows': righe})
        i += 1; continue
    i += 1

# sezioni vuote (titoli "## " senza testo) e numerazione
for c in capitoli:
    c['sezioni'] = [s for s in c['sezioni'] if s['blocchi'] or s['titolo']]
    for k, s in enumerate(c['sezioni']): s['num'] = f"{c['n']}.{k + 1}"

# rimandi ai paragrafi: il Word cita ancora la vecchia numerazione (13 capitoli). Si portano alla nuova;
# quelli verso argomenti che non sono più nel modulo si tolgono.
RIMANDI = [
    ('(paragrafo 3.6)', '(paragrafo 3.5)'),
    ('chiederne una copia (paragrafo 3.7)', 'chiederne una copia (paragrafo 3.6)'),
    ('più adatto** (capitolo 6).', 'più adatto**.'),
    ('un’altra cosa (capitolo 5)', 'un’altra cosa (paragrafo 4.6)'),
    ('(capitolo 10)', '(capitolo 7)'),
    (' **SMTP e IMAP** (capitolo 7).', ' **SMTP e IMAP**.'),
    ('contro i link truffa (capitolo 7).', 'contro i link truffa.'),
    ('**motore di ricerca** (capitolo 6)', '**motore di ricerca** (capitolo 5)'),
    (' (paragrafo 6.8)', ''), (' (paragrafo 8.10)', ''), (' (paragrafo 6.5)', ''), (' (paragrafo 6.6)', ''),
    ('(paragrafo 10.2)', '(paragrafo 7.3)'), ('(paragrafo 2.8)', '(paragrafo 1.3)'), ('(paragrafo 10.5)', '(paragrafo 7.2)'),
    ('(paragrafo 4.8)', '(paragrafo 4.4)'), ('(paragrafo 9.9)', '(paragrafo 6.9)'), ('(paragrafo 6.1)', '(paragrafo 5.1)'),
    ('(paragrafo 6.7)', '(paragrafo 5.5)'), ('(paragrafo 6.2)', '(paragrafo 5.1)'), ('(paragrafo 6.4)', '(paragrafo 5.4)'),
]
def rimanda(o):
    if isinstance(o, str):
        for a, b in RIMANDI: o = o.replace(a, b)
        return o
    if isinstance(o, list): return [rimanda(x) for x in o]
    if isinstance(o, dict): return {k: (rimanda(v) if k not in ('foto', 'video') else v) for k, v in o.items()}
    return o
capitoli = rimanda(capitoli)

modulo = {'title': 'Reti e Internet', 'header': 'Reti e Internet · Seconda liceo', 'chapters': capitoli}
json.dump(modulo, open(OUT, 'w'), ensure_ascii=False, indent=1)
print('capitoli:', len(capitoli), '· paragrafi:', sum(len(c['sezioni']) for c in capitoli))
if MAINJS:
    open(MAINJS, 'w').write('// generato da leggi_word.py: contenuto del Word nel formato della fase 1\nmodule.exports = () => (' + json.dumps(modulo, ensure_ascii=False) + ');\n')
