# Capitolo 2 · La logica proposizionale — scelte della pagina (il testo è quello del brainstorming).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Logica e IA simbolica')

ANIM = {
    'F2.4.1': anim_md(2, 'F2.4.1', 'f-promessa', '0 0 720 330',
                      'Il fumetto dice «Se prendi 8, ti porto al cinema». Quattro casi riempiono la tavola dell’implicazione: 8 e cinema, vera; 8 e niente cinema, falsa, l’unico caso; 5 e cinema, vera; 5 e niente cinema, vera.'),
    'F2.4.2': anim_md(2, 'F2.4.2', 'f-numeri', '0 0 720 330',
                      'La regola «se un numero è divisibile per 4, allora è pari» provata con 8, 6 e 7: la riga vero-falso non capita mai, quindi è vera. Rovesciata, «se un numero è pari è divisibile per 4», il 6 è un controesempio e la rende falsa.'),
    'F2.5.1': anim_md(2, 'F2.5.1', 'f-traduci', '0 0 720 290',
                      'La frase «Se è sera e non c’è nessuno in casa, la luce resta spenta» diventa una formula: le atomiche s, m, a; i connettivi se-allora, e, non; poi «se s e non m, allora non a» e infine (s ∧ ¬m) → ¬a.'),
}
SCHEMI = {
    'F2.2.1': schema_js(2, 'F2.2.1', 's-smonta', '0 0 720 250',
                        'La frase «Se piove e non ho l’ombrello, mi bagno»: i connettivi se-allora, e, non in ambra; le proposizioni atomiche piove, ho l’ombrello, mi bagno in verde, con le lettere p, q, r. Sotto: se p e non q, allora r.'),
}
WIDGET = {'F2.1.1': 'proposizione', 'F2.3.1': 'interruttori'}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(2, dict(ANIM=ANIM, SCHEMI=SCHEMI, WIDGET=WIDGET), OUT)
