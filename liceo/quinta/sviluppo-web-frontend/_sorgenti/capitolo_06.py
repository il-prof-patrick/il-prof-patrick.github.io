# Capitolo 6 · CSS: base — temi: css/cap06.py … css/cap10.py (i vecchi capitoli 6–10 del modulo CSS)
# Uso: python capitolo_06.py  → capitolo-06.html e assets/capitolo-06-aula.js (widget a mano in assets/capitolo-06.js)
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'css'))
from lib import componi

componi(6, 'CSS: base', [6, 7, 8, 9, 10],
        'Colori, testo, scatole e posizione: l’aspetto di ogni elemento.')
