# Capitolo 4 · Che cos’è l’intelligenza — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
from capitolo_03 import foto_capitolo
configura(modulo='Introduzione a informatica ed AI')

ANIM = {
    'F4.2.1': dict(id='f-gardner', titolo='Chi è più intelligente?',
                   inizio='Una scheda con il titolo «Chi è più intelligente?», un gruppo di persone e otto barre vuote, una per ogni forma di intelligenza.',
                   vb='0 0 720 320', aria='Quattro ragazzi con profili diversi: Marta è forte in logica e matematica, Luca nella musica, Sara nel movimento e nello spazio, Omar nella natura. Nessuno è forte in tutto.'),
}
SCHEMI = {}
FOTO = foto_capitolo(4)
# il Word cita il link tagliato alla parentesi: l'indirizzo vero dell'immagine è questo
FOTO['F4.1.4']['chiave'] = ('web:https://www.thesprucepets.com/thmb/rSennhnkHYPFvYCkqHAQNpquimg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/'
                            'close-up-of-african-grey-parrot-perching-on-pipe-by-plants-673169277-58ad8e823df78c345b864c59.jpg|https://www.thesprucepets.com/top-talking-bird-species-390534')
FOTO['F4.1.4']['tit'] = 'Un pappagallo cenerino'

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(4, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO), OUT)
