# Capitolo 5 · CSS: introduzione — temi: css/cap01.py … css/cap05.py (i vecchi capitoli 1–5 del modulo CSS)
# Uso: python capitolo_05.py  → capitolo-05.html e assets/capitolo-05-aula.js (widget a mano in assets/capitolo-05.js)
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'css'))
from lib import componi

componi(5, 'CSS: introduzione', [1, 2, 3, 4, 5],
        'Che cos’è il CSS, come si scrive e come il browser decide quale regola vince.')
