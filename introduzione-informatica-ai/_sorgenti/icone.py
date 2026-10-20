#!/usr/bin/env python3
"""Aggiunge icone Lucide (oltre 1500, licenza ISC) al modulo: scrive assets/icone.js con quelle richieste
più quelle già presenti. Le icone si usano nelle scene con A.icona(nome, x, y, {...}) e nelle slide.
Uso: python3 icone.py <cartella del sito> cpu database lock key user ...
Elenco e anteprime: https://lucide.dev/icons  (il nome è quello del file, es. "hard-drive", "memory-stick")."""
import sys, os, re, json, subprocess, glob
sito, nomi = sys.argv[1], sys.argv[2:]
def cartella_lucide():
    for base in [os.path.expanduser('~/.cache/lucide'), '/tmp']:
        d = os.path.join(base, 'node_modules', 'lucide-static', 'icons')
        if os.path.isdir(d): return d
    base = os.path.expanduser('~/.cache/lucide'); os.makedirs(base, exist_ok=True)
    subprocess.run(['npm', 'i', '--prefix', base, 'lucide-static'], check=True, stdout=subprocess.DEVNULL)
    return os.path.join(base, 'node_modules', 'lucide-static', 'icons')
L = cartella_lucide()
f = os.path.join(sito, 'assets', 'icone.js')
attuali = {}
if os.path.exists(f):
    m = re.search(r'window\.ICONE_EXTRA = (\{.*\});', open(f, encoding='utf-8').read(), re.S)
    if m: attuali = json.loads(m.group(1))
mancanti = []
for n in nomi:
    p = os.path.join(L, n + '.svg')
    if not os.path.exists(p): mancanti.append(n); continue
    s = open(p, encoding='utf-8').read()
    inner = re.search(r'<svg[^>]*>(.*)</svg>', s, re.S).group(1)
    attuali[n] = re.sub(r'\s*\n\s*', '', inner).replace(' />', '/>').strip()
open(f, 'w', encoding='utf-8').write('/* Icone Lucide in più per questo modulo (generato da scripts/icone.py). */\nwindow.ICONE_EXTRA = ' + json.dumps(attuali, ensure_ascii=False) + ';\n')
print('icone nel modulo:', len(attuali), '· aggiunte:', [n for n in nomi if n not in mancanti])
if mancanti:
    simili = {n: [os.path.basename(x)[:-4] for x in glob.glob(os.path.join(L, '*' + n.split('-')[0] + '*.svg'))][:8] for n in mancanti}
    print('NON TROVATE (nomi simili):', simili)
