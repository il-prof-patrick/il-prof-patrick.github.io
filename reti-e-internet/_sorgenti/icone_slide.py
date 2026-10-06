# Aggiunge a assets/icone.js tutte le icone usate nelle slide e non ancora presenti
import re, glob, subprocess, os, sys
QUI = os.path.dirname(os.path.abspath(__file__)); SITO = os.path.join(QUI, '..')
base = set(re.findall(r"'([a-z0-9-]+)': '", open(os.path.join(SITO, 'assets/sito.js')).read()))
extra = set(re.findall(r'"([a-z0-9-]+)": "', open(os.path.join(SITO, 'assets/icone.js')).read()))
usate = set()
for f in glob.glob(os.path.join(SITO, 'assets/capitolo-*-aula.js')):
    t = open(f).read()
    usate |= set(re.findall(r'\[\s*"([a-z0-9-]+)",', t)) | set(re.findall(r'"(?:icona|icon)": "([a-z0-9-]+)"', t))
manca = sorted(usate - base - extra)
print('mancano:', manca)
if manca: subprocess.run(['python3', os.path.join(QUI, 'icone.py'), SITO] + manca)
