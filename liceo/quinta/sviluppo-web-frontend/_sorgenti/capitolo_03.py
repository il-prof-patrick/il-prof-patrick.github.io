# Capitolo 3 · HTML: base — dal capitolo 2 del Word; animazioni, schemi, foto e correzioni sono in capitolo_02.py.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
from capitolo_02 import ANIM, SCHEMI, FOTO, CORREZIONI, JS
configura(modulo='Sviluppo Web - Front end')

TITOLO = 'HTML: base'
SEZ = ['2.3', '2.5', '2.6', '2.7', '2.8']
RICORDA = [
    'I titoli h1–h6 descrivono la struttura come un indice (un solo h1, nessun livello saltato); il browser riduce gli spazi a uno; strong ed em danno significato, b e i solo aspetto; i caratteri speciali si scrivono con le entità.',
    'ul si usa quando l’ordine non conta, ol quando conta, dl per termini e definizioni; ul e ol contengono solo li, e i sottoelenchi vanno dentro un li.',
    'Il link si scrive con a e href; tra pagine dello stesso sito si usano percorsi relativi alla pagina che contiene il link (../ sale di una cartella); #id porta a un punto della pagina; il testo del link dice dove porta.',
    'Ogni immagine ha src, un alt che ne descrive il significato (vuoto solo se decorativa) e width/height; JPEG per le foto, PNG per grafiche nitide, SVG per loghi e icone, WebP e AVIF per alleggerire; le immagini vanno ridimensionate prima di essere pubblicate.',
    'Le tabelle servono per i dati, mai per impaginare: si costruiscono riga per riga con tr, td e th, caption, thead, tbody, tfoot; colspan e rowspan uniscono le celle.',
]

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(3, dict(DA=2, SEZ=SEZ, TITOLO=TITOLO, JS=JS, ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, RICORDA=RICORDA, CORREZIONI=CORREZIONI), OUT)
