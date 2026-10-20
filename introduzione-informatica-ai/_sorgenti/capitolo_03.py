# Capitolo 3 · Un computer può essere intelligente? — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
from capitolo_01 import foto_capitolo
configura(modulo='Introduzione a informatica ed AI')

ANIM = {
    'F3.2.2': dict(id='f-stanza', titolo='La stanza cinese',
                   inizio='Una stanza chiusa con una fessura. Dentro c’è una persona che non conosce il cinese e un libro di regole; fuori, chi parla cinese.',
                   vb='0 0 720 320', aria='Una persona fuori scrive una domanda in cinese e la infila nella fessura; dentro, chi non conosce il cinese cerca i segni nel libro di regole e copia la risposta, senza capire nulla.',
                   passi=['Fuori, la persona scrive su un foglio «你好吗？» (significa «Come stai?») e lo infila nella fessura.',
                          'Dentro, la persona cerca quei segni nel libro, che dice «Se vedi 你好吗？ scrivi 我很好，谢谢。», e li copia senza sapere che cosa vogliano dire.',
                          'Fuori arriva il foglio «我很好，谢谢。» (significa «Sto bene, grazie»): una risposta perfetta. Là dentro c’è qualcuno che capisce il cinese!',
                          'Dentro compare un fumetto: «Non ho capito niente: ho solo seguito delle regole.» Seguire regole su dei simboli basta per rispondere bene senza capire. Searle pensa che per un computer sia lo stesso.']),
}
SCHEMI = {}
FOTO = foto_capitolo(3)
# l'animazione del Word sul gioco di Turing è un gioco con le scelte: widget «turing», messo dopo il paragrafo che lo introduce
TOGLI = ['F3.1.2']
DOPO = {('3.1', 3): widget('turing')}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(3, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, DOPO=DOPO, TOGLI=TOGLI), OUT)
