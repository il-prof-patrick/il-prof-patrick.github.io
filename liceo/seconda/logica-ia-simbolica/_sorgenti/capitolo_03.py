# Capitolo 3 · Tavole di verità — scelte della pagina (il testo è quello del brainstorming).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Logica e IA simbolica')

ANIM = {
    'F3.1.1': anim_md(3, 'F3.1.1', 'f-enigma', '0 0 720 320',
                      'L’enigma dei cavalieri e dei furfanti diventa la formula a ↔ (¬a ∧ ¬b). La tavola si riempie colonna per colonna: a e b, poi ¬a e ¬b, poi ¬a ∧ ¬b, infine la formula, vera solo nella riga a falso, b vero: A è un furfante, B un cavaliere.'),
}
SCHEMI = {
    'F3.2.1': schema_js(3, 'F3.2.1', 's-tre-formule', '0 0 720 260',
                        'Tre tavole: p ∨ ¬p ha la colonna finale tutta vera, è una tautologia; p ∧ ¬p tutta falsa, è una contraddizione; p ∧ q è vera in una riga, è soddisfacibile.'),
    'F3.3.1': schema_js(3, 'F3.3.1', 's-stessa-colonna', '0 0 720 230',
                        'Le tavole di p → q e di ¬p ∨ q hanno la stessa colonna finale, V V F V: le due formule sono equivalenti.'),
}
WIDGET = {'F3.4.1': 'leggi'}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(3, dict(ANIM=ANIM, SCHEMI=SCHEMI, WIDGET=WIDGET), OUT)
