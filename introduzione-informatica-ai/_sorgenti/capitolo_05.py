# Capitolo 5 · Dall’algoritmo all’IA che impara — scelte della pagina (il testo è quello del Word).
import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
from sitolib import _src
import capitolo_01
from capitolo_01 import foto_capitolo
configura(modulo='Introduzione a informatica ed AI')


def url_foto(n, fid):
    """Indirizzo della foto fid del capitolo n (con le scelte di capitolo_01 per le foto sostituite o locali)."""
    for S in CONT['chapters'][n - 1]['sezioni']:
        for b in S['blocchi']:
            if b['t'] == 'figura' and b.get('id') == fid:
                ch = (capitolo_01.FOTO.get(fid, {}).get('chiave') if n == 1 else None) or b['foto']['chiave']
                return _src(ch)[0]
    raise KeyError(fid)


def foto_scene():
    """Foto usate dalle animazioni di questo capitolo, scritte in js_cap05_foto.js (le scene non leggono la pagina)."""
    u = {k: url_foto(5, 'F5.1.%d' % i) for k, i in dict(gatto=1, volpe=2, fold=3, scatola=4, sphynx=5, spalle=6, palla=7, luce=8, salto=9, pancia=10).items()}
    comm = lambda nome: 'https://commons.wikimedia.org/wiki/Special:FilePath/' + nome + '?width=360'
    u.update(cane=comm('Labrador_Retriever_-_Yellow.JPG'), uccello=comm('Blue_Tit_perched_on_a_branch.jpg'), auto=comm('Red_car_yellow_buildings_(Unsplash).jpg'))
    u.update(stockfish=url_foto(1, 'F1.5.1'), lens=url_foto(1, 'F1.2.1'), faceid=url_foto(1, 'F1.1.2'), gmail=url_foto(1, 'F1.1.8'))
    open(os.path.join(QUI, 'js_cap05_foto.js'), 'w', encoding='utf8', newline='\n').write(
        '/* Capitolo 5 · indirizzi delle foto usate dalle scene (generato da capitolo_05.py) */\nwindow.FU5 = ' + json.dumps(u, indent=2) + ';\n')


ANIM = {
    'F5.1.11': dict(id='f-gatti', titolo='Riconoscere un gatto con le regole',
                    inizio='Un gatto: per noi è facile riconoscerlo. Provando a scrivere le regole, a ogni clic si vedono le eccezioni.',
                    vb='0 0 720 300', aria='Per riconoscere un gatto si provano quattro regole. Per ognuna ci sono eccezioni: animali che sembrano gatti e non lo sono, e gatti che non rispettano la regola.',
                    passi=['Regola 1, «Ha le orecchie a punta»: la volpe le ha ma non è un gatto; il Scottish Fold non le ha ed è un gatto; il gatto che spunta da una scatola le ha nascoste.',
                           'Regola 2, «Ha il pelo»: la volpe ce l’ha e non è un gatto; lo sphynx non ce l’ha ed è un gatto.',
                           'Regola 3, «Si vedono baffi e muso»: un gatto di spalle, uno raggomitolato e uno in controluce sono gatti, ma non si vede il muso.',
                           'Regola 4, «Sta in piedi sulle quattro zampe»: un gatto in salto e uno a pancia in su sono gatti, ma in una posa insolita.',
                           'Per ogni regola c’è un’eccezione: servirebbero migliaia di regole, e non basterebbero lo stesso.']),
    'F5.2.1': dict(id='f-impara', titolo='Imparare dagli esempi',
                   inizio='Nessuno scrive le regole: al sistema si mostrano tanti esempi.',
                   vb='0 0 720 330', aria='Un mucchio di foto di gatti e non gatti si dispone in due gruppi; arriva una foto nuova e il sistema risponde «gatto, 94%».',
                   passi=['Compare un mucchio di foto vere: tanti gatti di razze e pose diverse e tanti non-gatti, come cani, uccelli e auto.',
                          'Il sistema le confronta: le foto si dispongono in due gruppi, «gatti» e «non gatti», e cerca da solo che cosa li distingue.',
                          'Arriva una foto nuova, mai vista: un gatto in una posa insolita.',
                          'Compare la risposta, «gatto, 94%». Non è una certezza: è la risposta più probabile.']),
    'F5.3.1': dict(id='f-antispam', titolo='Il filtro antispam in due modi',
                   inizio='Arrivano tre email, una alla volta. A sinistra le regole scritte da una persona, a destra un sistema che ha imparato dagli esempi.',
                   vb='0 0 720 380', aria='Tre email passano per due filtri antispam: quello a regole sbaglia due volte su tre, quello che ha imparato dagli esempi dà una probabilità e le azzecca.',
                   passi=['«VINCI un telefono GRATIS, clicca qui!»: un caso facile, le due strade sono d’accordo.',
                          '«G R A T I S!!! cl1cca q u i»: davanti a un caso nuovo, le regole non lo riconoscono; chi ha imparato dagli esempi sì.',
                          '«Ho vinto la partita, domani te la racconto!»: la regola scatta anche quando non dovrebbe. L’apprendimento automatico dà una probabilità, non una certezza: a volte sbaglia anche lui.']),
    'F5.4.1': dict(id='f-cerchi', titolo='I quattro cerchi',
                   inizio='Quattro cerchi concentrici, appoggiati sulla stessa base: dal più grande al più piccolo.',
                   vb='0 0 720 340', aria='Quattro cerchi uno dentro l’altro: intelligenza artificiale, apprendimento automatico, apprendimento profondo, IA generativa.',
                   passi=['Il cerchio più grande, IA: tutto ciò che svolge compiti che richiederebbero intelligenza.',
                          'Dentro, l’apprendimento automatico: l’IA che impara dagli esempi.',
                          'Dentro ancora, l’apprendimento profondo: apprendimento automatico con sistemi molto grandi, a più livelli.',
                          'Il più piccolo, l’IA generativa: produce contenuti nuovi.',
                          'Ogni cerchio sta dentro quello più grande. Un’IA generativa è anche apprendimento profondo, apprendimento automatico e IA. Non vale il contrario.']),
    'F5.5.1': dict(id='f-gradini', titolo='Tre gradini',
                   inizio='Una scala a tre gradini: solo il primo, con il contorno pieno, esiste oggi; gli altri due sono tratteggiati.',
                   vb='0 0 720 340', aria='Tre gradini: IA specializzata, che esiste oggi; IA generale e superintelligenza, ipotetiche.',
                   passi=['IA specializzata: fa una cosa sola, anche molto bene, e fuori da quella non sa fare nulla. Gli esempi del capitolo 1, ciascuno con il suo compito.',
                          'IA generale: saprebbe svolgere qualsiasi compito intellettuale come una persona. È ipotetica. Nel 2026 c’è chi dice che sia già stata raggiunta e molti esperti che non sono d’accordo.',
                          'Superintelligenza: supererebbe le persone in praticamente tutto. È ipotetica.',
                          'Tre gradini: il primo esiste oggi, gli altri due sono ipotetici.']),
}
SCHEMI = {}
FOTO = foto_capitolo(5)
for fid, f in FOTO.items():
    f['did'] = f['alt']
for fid in ('F5.1.2', 'F5.1.6', 'F5.1.9'):
    FOTO[fid]['modo'] = 'coppia'
FOTO['F5.1.2']['n'] = 3; FOTO['F5.1.6']['n'] = 3; FOTO['F5.1.9']['n'] = 2
FOTO['F5.5.4']['modo'] = 'coppia'; FOTO['F5.5.4']['n'] = 4
FOTO['F5.1.1']['tit'] = 'Un gatto'; FOTO['F5.1.5']['tit'] = 'Un gatto sphynx'
FOTO['F5.5.2']['tit'] = 'Jensen Huang'; FOTO['F5.5.3']['tit'] = 'Yann LeCun'
# il mosaico dei film (F5.5.8) serve solo alle slide: nella pagina le quattro foto stanno già affiancate
TOGLI = ['F5.5.8']
RIGHE = ['F5.1.1', 'F5.1.5']


def prepara_righe(n, ids):
    for S in CONT['chapters'][n - 1]['sezioni']:
        B = S['blocchi']
        for k, b in enumerate(B):
            if b['t'] == 'figura' and b.get('id') in ids and k > 0 and B[k - 1]['t'] == 'p':
                f = FOTO[b['id']]
                B[k - 1] = {'t': 'riga', 'x': B[k - 1]['x'], 'chiave': f.get('chiave') or b['foto']['chiave'], 'tit': f['tit'], 'alt': f['alt']}
                f['modo'] = 'no'


if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    prepara_righe(5, RIGHE)
    foto_scene()
    capitolo(5, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, TOGLI=TOGLI), OUT)
