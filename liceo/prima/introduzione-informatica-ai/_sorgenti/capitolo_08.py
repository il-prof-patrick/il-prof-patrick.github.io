# Capitolo 8 · Un po’ di storia — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
from capitolo_03 import foto_capitolo
configura(modulo='Introduzione a informatica ed AI')

ANIM = {
    'F8.3.1': dict(id='f-ondate', titolo='Dal 1950 a oggi',
                   inizio='Una curva dell’entusiasmo per l’IA dal 1950 al 2026: la si traccia un tratto alla volta. La curva è indicativa e non rappresenta dati.',
                   vb='0 0 720 330', aria='La curva dell’entusiasmo per l’IA: sale fino al 1973, scende nel primo inverno, risale con i sistemi esperti, scende nel secondo inverno, risale piano, cresce con il deep learning e dal 2022 esce dal grafico.',
                   passi=['1956–1973, entusiasmo: la curva sale. Nasce il nome (Dartmouth, 1956) e arrivano le prime promesse; ELIZA (1966) fa credere a molti che le macchine capiscano.',
                          '1974–1980, primo inverno: la curva scende. Le promesse non si realizzano e i finanziamenti calano.',
                          '1980–1987, i sistemi esperti: la curva risale. Tornano le speranze e le aziende investono.',
                          '1987–1993, secondo inverno: la curva scende di nuovo. I sistemi esperti costano troppo da mantenere e il mercato crolla.',
                          '1993–2011, ripresa lenta: la curva risale piano. Nel 1997 Deep Blue batte Kasparov a scacchi.',
                          '2012–2021, crescita: la curva sale più rapida con il deep learning (AlexNet, 2012) e AlphaGo (2016).',
                          'Dal 2022, impennata clamorosa: la curva schizza quasi in verticale con ChatGPT, che porta l’IA a tutti, e continua a salire fino a uscire dal grafico.']),
}
SCHEMI = {}
FOTO = foto_capitolo(8)
# due foto del Word non si caricano più (404 / blocco del sito): al loro posto Wikimedia Commons
FOTO['F8.1.3']['chiave'] = 'Mcculloch-pitts-neuron-model.png'
FOTO['F8.1.3']['did'] = 'Il neurone di McCulloch e Pitts: gli ingressi, la somma, una soglia e un’uscita. Osserva gli ingressi a sinistra e l’uscita a destra.'
FOTO['F8.2.3']['chiave'] = 'ELIZA conversation.png'
FOTO['F8.2.3']['did'] = 'Una conversazione con ELIZA (in una ricostruzione moderna). Osserva come le risposte riprendono le parole dell’utente.'
FOTO['F8.4.2']['chiave'] = 'Deep Blue.jpg'
FOTO['F8.4.2'].update(tit='Deep Blue', alt='Deep Blue, il computer IBM che nel 1997 batté Kasparov', ancora='Deep Blue di IBM batte')
# foto a margine accanto al paragrafo lungo; due foto di persone/gruppo affiancate
FOTO['F8.2.4']['ancora'] = 'scritto al MIT'
FOTO['F8.1.4']['modo'] = 'coppia'; FOTO['F8.1.4']['n'] = 2
for fid in ('F8.1.4', 'F8.1.5'):
    FOTO[fid]['did'] = FOTO[fid]['alt']
FOTO['F8.1.4']['did'] = 'John McCarthy, che inventò il termine «intelligenza artificiale» per la conferenza di Dartmouth del 1956'
FOTO['F8.1.5']['did'] = 'Alcuni partecipanti alla conferenza di Dartmouth del 1956'
# l'animazione di ELIZA del Word è un gioco con le scelte: widget «eliza», dopo la foto della conversazione
TOGLI = ['F8.2.5']
DOPO = {'F8.2.3': widget('eliza')}
RIGHE = ['F8.1.1', 'F8.2.2', 'F8.4.3', 'F8.4.4', 'F8.5.2']


def prepara_righe(n, ids):
    for S in cap_json(n)['sezioni']:
        B = S['blocchi']
        for k, b in enumerate(B):
            if b['t'] == 'figura' and b.get('id') in ids and k > 0 and B[k - 1]['t'] == 'p':
                f = FOTO[b['id']]
                B[k - 1] = {'t': 'riga', 'x': B[k - 1]['x'], 'chiave': f.get('chiave') or b['foto']['chiave'], 'tit': f['tit'], 'alt': f['alt']}
                f['modo'] = 'no'


if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    prepara_righe(8, RIGHE)
    capitolo(8, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, DOPO=DOPO, TOGLI=TOGLI), OUT)
