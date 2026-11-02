# Capitolo 5 · La logica dei predicati — scelte della pagina (il testo è quello del brainstorming).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Logica e IA simbolica')

ANIM = {
    'F5.1.1': anim_md(5, 'F5.1.1', 'f-blocchi', '0 0 720 300',
                      'Il ragionamento «Tutti gli abbonati entrano gratis; Anna è abbonata; quindi Anna entra gratis». Per la logica proposizionale sono tre blocchi chiusi p, q, r, senza legami. Aprendoli compaiono l’oggetto anna e i predicati Abbonato ed EntraGratis, in comune tra le frasi.'),
    'F5.4.1': anim_md(5, 'F5.4.1', 'f-insiemi', '0 0 720 380',
                      'Dodici studenti nel dominio della classe e due cerchi: O, porta gli occhiali, e C, gioca a calcio. A ogni passo si accendono gli studenti che rendono vera una formula: O, C, intersezione, unione, complementare, differenza simmetrica e infine chi non è in nessuno dei due cerchi.'),
}
SCHEMI = {
    'F5.2.1': schema_js(5, 'F5.2.1', 's-anatomia', '0 0 720 250',
                        'La formula atomica Genitore(anna, marco): Genitore è il predicato, anna e marco sono gli argomenti 1 e 2, l’arità è 2. Si legge: Anna è genitore di Marco.'),
}
WIDGET = {'F5.3.1': 'relazioni', 'F5.5.2': 'blocchi'}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(5, dict(ANIM=ANIM, SCHEMI=SCHEMI, WIDGET=WIDGET), OUT)
