import subprocess, sys, os
from PIL import Image, ImageDraw
"""Estrae fotogrammi a intervalli regolari da un'animazione e li compone in una tavola.
Uso: python estrai-fotogrammi.py NOME_FILE_SENZA_ESTENSIONE PASSO T_INIZIALE INTERVALLO N_FOTOGRAMMI tavola.png [x0,y0,x1,y1]
L'animazione deve accettare nell'URL #go=PASSO&t=SECONDI (vedi docs/linee-guida-animazioni.md). Servono Edge e Pillow."""
import subprocess, sys, os, pathlib
from PIL import Image, ImageDraw
SP = os.environ.get('TEMP', '.')
BASE = pathlib.Path(__file__).resolve().parent
F = BASE.as_uri() + '/%s.html'
E = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
name = sys.argv[1]; step = int(sys.argv[2]); t0 = float(sys.argv[3]); dt = float(sys.argv[4]); cnt = int(sys.argv[5]); out = sys.argv[6]
box = tuple(int(x) for x in sys.argv[7].split(',')) if len(sys.argv) > 7 else (30, 260, 1070, 600)
frames = []
for i in range(cnt):
    t = round(t0 + i * dt, 2)
    png = os.path.join(SP, 'fr_%d.png' % i)
    subprocess.run([E, '--headless=new', '--window-size=1100,860', '--virtual-time-budget=5000', '--screenshot=' + png, (F % name) + '#go=%d&t=%s' % (step, t)], capture_output=True)
    im = Image.open(png).convert('RGB').crop(box)
    d = ImageDraw.Draw(im); d.rectangle((0, 0, 70, 22), fill=(255, 255, 255)); d.text((4, 4), 't=%.2f' % t, fill=(0, 0, 0))
    frames.append(im)
w, h = frames[0].size; sc = 0.62
w2, h2 = int(w * sc), int(h * sc); cols = 3; rows = (cnt + cols - 1) // cols
sheet = Image.new('RGB', (w2 * cols, h2 * rows), (255, 255, 255))
for i, im in enumerate(frames):
    sheet.paste(im.resize((w2, h2)), ((i % cols) * w2, (i // cols) * h2))
sheet.save(out); print(sheet.size)
