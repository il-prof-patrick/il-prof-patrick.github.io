# Capitolo 7 · CSS: avanzato — temi: css/cap11.py … css/cap16.py (i vecchi capitoli 11–16 del modulo CSS)
# Uso: python capitolo_07.py  → capitolo-07.html e assets/capitolo-07-aula.js (widget a mano in assets/capitolo-07.js)
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'css'))
from lib import componi

componi(7, 'CSS: avanzato', [11, 12, 13, 14, 15, 16],
        'Impaginare con Flexbox e Grid, adattarsi a ogni schermo, animare, usare un framework.')
