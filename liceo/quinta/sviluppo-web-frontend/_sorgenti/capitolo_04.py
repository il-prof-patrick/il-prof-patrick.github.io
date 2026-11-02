# Capitolo 4 · HTML: avanzato — dal capitolo 2 del Word; animazioni, schemi, foto e correzioni sono in capitolo_02.py.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
from capitolo_02 import ANIM, SCHEMI, FOTO, CORREZIONI, JS
configura(modulo='Sviluppo Web - Front end')

TITOLO = 'HTML: avanzato'
SEZ = ['2.9', '2.10', '2.11', '2.12']
RICORDA = [
    'Un modulo invia i dati all’indirizzo di action con il metodo GET (dati nell’URL, per le ricerche) o POST (dati nel corpo della richiesta); solo i campi con name vengono inviati; ogni campo ha la sua label; il tipo di input giusto dà controllo del formato e tastiera adatta; la validazione del browser va sempre ripetuta sul server.',
    'video e audio con controls inseriscono contenuti multimediali senza plugin; autoplay funziona solo con muted; iframe incorpora pagine di altri siti come mappe e video.',
    'I tag semantici header, nav, main, section, article, aside e footer dicono il ruolo di ogni parte della pagina e aiutano screen reader, motori di ricerca e chi legge il codice.',
    'title e meta description determinano come la pagina appare su Google; l’HTML ben scritto e un contenuto utile sono la base della SEO.',
]

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(4, dict(DA=2, SEZ=SEZ, TITOLO=TITOLO, JS=JS, ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, RICORDA=RICORDA, CORREZIONI=CORREZIONI), OUT)
