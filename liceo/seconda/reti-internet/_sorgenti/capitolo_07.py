# Capitolo 7 · Reti e intelligenza artificiale — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Reti e Internet')

ANIM = {
    'F10.1.2': dict(id='f-chatbot', titolo='Il viaggio di una domanda a un chatbot',
                    inizio='A sinistra un telefono con l’app del chatbot e la domanda «Che cos’è un router?»; al centro la rete: Wi-Fi, router di casa, fibra, dorsale; a destra un data center con un gruppo di GPU.',
                    vb='0 0 720 300', aria='La domanda cifrata attraversa la rete fino al data center, le GPU calcolano la risposta una parola alla volta e le parole tornano subito al telefono; in modalità aereo la domanda resta ferma'),
    'F10.6.2': dict(id='f-collasso', titolo='Quando l’IA impara dall’IA',
                    inizio='A sinistra un Web fatto di pagine scritte da persone; al centro un modello di IA; a destra un contatore della qualità.',
                    vb='0 0 720 310', aria='Il modello impara dal Web umano e scrive testi buoni; i testi generati finiscono online e un nuovo modello impara da un Web sempre più pieno di testi generati, e la qualità scende'),
}
FOTO = {
    'F10.1.1': dict(tit='Una GPU per data center'),
    'F10.1.3': dict(tit='Un campus di data center'),
    'F10.6.1': dict(tit='Una phone farm'),
}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(7, dict(ANIM=ANIM, FOTO=FOTO), OUT)
