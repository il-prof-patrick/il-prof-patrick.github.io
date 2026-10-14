# Capitolo 2 · HTML: la struttura — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Sviluppo Web - Front end')

SV = lambda vb, aria: f'      <svg viewBox="{vb}" role="img" aria-label="{aria}"></svg>'
ANIM = {
    'F2.1.2': dict(id='f-annidamento', titolo='Chiudere gli elementi nell’ordine giusto',
                   inizio='In alto il codice corretto, un paragrafo con una parola importante e una enfatizzata; sotto un piano vuoto dove compariranno le scatole.',
                   vb='0 0 720 300', aria='Il browser apre una scatola p, dentro una scatola strong e dentro una scatola em; le chiude dalla più interna; con le chiusure incrociate la scatola em esce dal bordo e il browser la chiude in anticipo e ne apre un’altra'),
    'F2.6.1': dict(id='f-percorso', titolo='Come si legge un percorso relativo',
                   inizio='A sinistra le cartelle del sito: mio-sito con index.html, la cartella img con logo.png, la cartella ricette con primi.html e dolci.html; il segnaposto è sulla cartella ricette, perché il link è scritto in primi.html.',
                   vb='0 0 720 300', aria='Il segnaposto parte dalla cartella ricette, con .. sale in mio-sito, con img/ entra nella cartella img e con logo.png raggiunge il file; senza ../ cerca img dentro ricette, non la trova e l’immagine risulta rotta'),
    'F2.10.1': dict(id='f-getpost', titolo='Dove finiscono i dati di un modulo',
                    inizio='A sinistra un browser con un modulo compilato (nome «Luca», password «gatto99») e il pulsante «Invia», con l’indirizzo scuola.it/login nella barra; a destra il server.',
                    vb='0 0 720 320', aria='Con GET i dati si attaccano all’indirizzo e restano visibili e nella cronologia; con POST viaggiano dentro la busta, fuori dall’indirizzo; senza HTTPS si leggono comunque, con HTTPS no'),
}
SCHEMI = {
    'F2.1.1': dict(id='s-elemento', titolo='Anatomia di un elemento',
                   svg=SV('0 0 720 230', 'L’elemento <a href="https://info.cern.ch">Primo sito</a> con indicati il nome del tag, l’attributo, il tag di apertura, il contenuto, il tag di chiusura e, sotto tutto, l’elemento')),
    'F2.4.1': dict(id='s-blocchi', titolo='Elementi di blocco ed elementi in linea',
                   svg=SV('0 0 720 256', 'Una pagina con i contorni visibili: h1, p e ul sono blocchi che occupano tutta la riga; dentro il paragrafo a, strong ed em restano sulla riga del testo')),
    'F2.9.1': dict(id='s-celleunite', titolo='Celle unite: colspan e rowspan',
                   svg=SV('0 0 720 246', 'Una tabella su una griglia di tre colonne e quattro righe: la cella «Gita a Firenze» copre due colonne e la cella «Martedì e mercoledì» due righe; i quadretti coperti non si scrivono')),
    'F2.12.1': dict(id='s-semantica', titolo='La struttura di una pagina',
                    svg=SV('0 0 720 322', 'A sinistra una pagina con header e nav, main con due article e un aside, footer; a destra la stessa pagina scritta solo con div tutti uguali')),
    'F2.15.1': dict(id='s-google', titolo='Come si appare su Google',
                    svg=SV('0 0 720 246', 'Un risultato di Google: il titolo blu viene dal title, il testo grigio dalla meta description, sopra c’è l’indirizzo della pagina')),
}
FOTO = {
    'F2.7.1': dict(modo='grande', chiave='local:assets/immagini/jpeg-contro-png.png',
                   did='Lo stesso logo con testo, ingrandito al 400%: a sinistra in JPEG di bassa qualità, con aloni e quadratini intorno alle lettere; a destra in PNG, con i bordi netti. Osservare i contorni delle lettere.',
                   alt='Lo stesso logo con testo ingrandito al 400%, in JPEG di bassa qualità con aloni e quadratini e in PNG con bordi netti'),
}
CORREZIONI = [('header…; 2.12)', 'header…; 2.11)')]    # i paragrafi sono stati rinumerati: HTML semantico è il 2.11
RICORDA = [
    'Un elemento è formato da tag di apertura, contenuto e tag di chiusura; gli elementi vuoti (img, br, input, meta) non hanno chiusura; gli attributi si scrivono solo nel tag di apertura come nome="valore".',
    'Gli elementi si annidano chiudendo per primo l’ultimo aperto; id è unico nella pagina, class si può ripetere e raggruppa elementi con lo stesso stile.',
    'Ogni pagina ha lo scheletro DOCTYPE, html con lang, head (charset UTF-8, viewport, title) e body; i nomi dei file sono minuscoli, senza spazi, e la home si chiama index.html.',
    'I titoli h1–h6 descrivono la struttura come un indice (un solo h1, nessun livello saltato); il browser riduce gli spazi a uno; strong ed em danno significato, b e i solo aspetto; i caratteri speciali si scrivono con le entità.',
    'Gli elementi di blocco occupano tutta la riga e vanno a capo, quelli in linea restano nel testo; div e span sono contenitori senza significato, da usare quando non c’è un tag semantico adatto.',
    'ul si usa quando l’ordine non conta, ol quando conta, dl per termini e definizioni; ul e ol contengono solo li, e i sottoelenchi vanno dentro un li.',
    'Il link si scrive con a e href; tra pagine dello stesso sito si usano percorsi relativi alla pagina che contiene il link (../ sale di una cartella); #id porta a un punto della pagina; il testo del link dice dove porta.',
    'Ogni immagine ha src, un alt che ne descrive il significato (vuoto solo se decorativa) e width/height; JPEG per le foto, PNG per grafiche nitide, SVG per loghi e icone, WebP e AVIF per alleggerire; le immagini vanno ridimensionate prima di essere pubblicate.',
    'Le tabelle servono per i dati, mai per impaginare: si costruiscono riga per riga con tr, td e th, caption, thead, tbody, tfoot; colspan e rowspan uniscono le celle.',
    'Un modulo invia i dati all’indirizzo di action con il metodo GET (dati nell’URL, per le ricerche) o POST (dati nel corpo della richiesta); solo i campi con name vengono inviati; ogni campo ha la sua label; il tipo di input giusto dà controllo del formato e tastiera adatta; la validazione del browser va sempre ripetuta sul server.',
    'video e audio con controls inseriscono contenuti multimediali senza plugin; autoplay funziona solo con muted; iframe incorpora pagine di altri siti come mappe e video.',
    'I tag semantici header, nav, main, section, article, aside e footer dicono il ruolo di ogni parte della pagina e aiutano screen reader, motori di ricerca e chi legge il codice.',
    'title e meta description determinano come la pagina appare su Google; l’HTML ben scritto e un contenuto utile sono la base della SEO.',
    'Una pagina che si vede bene non è per forza corretta: gli errori si cercano con il validatore e si osserva con F12 come il browser ha interpretato il codice.',
]

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(2, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, RICORDA=RICORDA, CORREZIONI=CORREZIONI), OUT)
