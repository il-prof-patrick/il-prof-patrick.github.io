"""Aggiunge il sottotitolo (msg) alle slide di slide_NN.py. Uso: python msg.py NN mappa.json
mappa.json = {"titolo della slide": "il concetto della slide"}. Scrive il file e stampa le chiavi non trovate
e le slide che ancora non hanno sottotitolo."""
import json, re, sys, os
QUI = os.path.dirname(os.path.abspath(__file__))
n = sys.argv[1]
mappa = json.load(open(sys.argv[2], encoding='utf8'))
p = os.path.join(QUI, 'slide_%s.py' % n)
s = open(p, encoding='utf8').read()


def q(t): return "'" + t.replace('\\', '\\\\').replace("'", "\\'") + "'"


trovate = set()
for titolo, msg in mappa.items():
    a = "'titolo': " + q(titolo)
    fatto = False
    # slide scritte a mano: {'tipo': ..., 'titolo': '…', …}
    i = s.find(a)
    while i != -1:
        j = i + len(a)
        if not s[j:j + 8].startswith(", 'msg'"):
            s = s[:j] + ", 'msg': " + q(msg) + s[j:]; fatto = True
        i = s.find(a, j + 1)
    # slide da aiuti: c.AN('F…', 'titolo') · c.SC · c.WG
    for h in ('AN', 'SC', 'WG'):
        pat = re.compile(r"(c\.%s\((?:'[^']+'), %s)(\))" % (h, re.escape(q(titolo))))
        s, k = pat.subn(lambda m: m.group(1) + ', msg=' + q(msg) + m.group(2), s)
        fatto = fatto or k > 0
    if fatto: trovate.add(titolo)
open(p, 'w', encoding='utf8', newline='\n').write(s)
print('non trovate:', [t for t in mappa if t not in trovate])
# slide senza sottotitolo
manca = []
for m in re.finditer(r"\{'tipo': '(punti|tessere|confronto|tabella|storia|formula|foto|schema|anim|widget|codice)', 'titolo': ('(?:[^'\\]|\\.)*')(?!, 'msg')", s):
    manca.append(m.group(2))
for m in re.finditer(r"c\.(AN|SC|WG)\('[^']+', ('(?:[^'\\]|\\.)*')\)", s):
    manca.append(m.group(2))
print('senza sottotitolo:', manca)
