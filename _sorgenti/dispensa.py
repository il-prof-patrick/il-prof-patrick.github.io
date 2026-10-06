#!/usr/bin/env python3
"""Costruisce la dispensa Word del modulo (stile «Libro di studio»), con indice e numeri di pagina.
Uso: python3 dispensa.py <main.js del brainstorming> <cartella del sito> "<Dispensa - Modulo>.docx" [passi.json]
  main.js    = file che unisce i capitoli del brainstorming (formato di 1-brainstorming)
  passi.json = facoltativo, quali passi delle animazioni fotografare: {"f-ftth":[2,4]} (default: l'ultimo)
Passi: contenuto JSON → figure dal sito (PNG) → Word → PDF per trovare le pagine → Word con l'indice completo.
"""
import sys, os, json, subprocess, tempfile, re, shutil
QUI = os.path.dirname(os.path.abspath(__file__))
main_js, sito, out = sys.argv[1], sys.argv[2], os.path.abspath(sys.argv[3])
passi = open(sys.argv[4]).read() if len(sys.argv) > 4 else '{}'
tmp = tempfile.mkdtemp(prefix='dispensa-'); fig = os.path.join(tmp, 'fig')
env = dict(os.environ)
def run(*a, **k): subprocess.run(a, check=True, env=env, **k)
with open(os.path.join(tmp, 'contenuto.json'), 'w') as f:
    run('node', os.path.join(QUI, 'contenuto_json.js'), main_js, stdout=f)
cap = json.load(open(os.path.join(tmp, 'contenuto.json')))['chapters']
for c in cap:
    pag = 'capitolo-%02d' % c['n']
    if os.path.exists(os.path.join(sito, pag + '.html')):
        run('node', os.path.join(QUI, 'figure_dispensa.js'), sito, pag, fig, passi, stdout=subprocess.DEVNULL)
os.makedirs(fig, exist_ok=True)
build = lambda pagine='': run('node', os.path.join(QUI, 'build_dispensa.js'), os.path.join(tmp, 'contenuto.json'), fig, out, '{"classe":"Seconda liceo"}', pagine)
build()
# numeri di pagina: converti in PDF e cerca i titoli pagina per pagina
pdfdir = os.path.join(tmp, 'pdf'); os.makedirs(pdfdir)
run('soffice', '--headless', '--convert-to', 'pdf', '--outdir', pdfdir, out, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
pdf = os.path.join(pdfdir, os.path.basename(out)[:-5] + '.pdf')
txt = subprocess.run(['pdftotext', '-layout', pdf, '-'], capture_output=True, text=True).stdout.split('\f')
voci = json.load(open(out[:-5] + '.voci.json')); pagine = {}; da = 2
norm = lambda s: re.sub(r'\s+', ' ', s).strip()
for v in voci:
    for i in range(da, len(txt)):
        if norm(v) in norm(txt[i]): pagine[v] = i + 1; da = i; break
json.dump(pagine, open(os.path.join(tmp, 'pagine.json'), 'w'))
build(os.path.join(tmp, 'pagine.json'))
os.remove(out[:-5] + '.voci.json'); shutil.rmtree(tmp)
print('dispensa pronta:', out, '·', len(txt) - 1, 'pagine circa')
