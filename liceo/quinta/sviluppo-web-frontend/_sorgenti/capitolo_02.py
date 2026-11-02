# Capitolo 2 · HTML: introduzione — scelte della pagina (il testo è quello del Word, capitolo 2 «HTML: la struttura»).
# Il capitolo 2 del Word è diviso in tre pagine: 2 (questa), 3 (capitolo_03.py) e 4 (capitolo_04.py);
# animazioni, schemi, foto e correzioni stanno qui e le altre due pagine li importano.
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
# rimandi del Word al vecchio piano del modulo → capitoli attuali (HTML semantico è il 4.3; CSS nei cap. 5–7, JavaScript nel cap. 8)
CORREZIONI = [('header…; 2.12)', 'header…; 4.3)'), ('(da evitare, 3.1)', '(da evitare, 5.1)'), ('(3.9)', '(7.5)'),
              ('(display, 3.10)', '(display, 6.4)'), ('3.12–3.13', '7.1–7.2'), ('(3.12)', '(7.1)'), ('(3.15)', '(7.3)'),
              ('(cap. 3)', '(cap. 5–7)'), ('(cap. 4)', '(cap. 8)'), ('JavaScript, 4.11)', 'JavaScript, cap. 8)')]
JS = 'capitolo-02.js'          # schemi e animazioni delle tre pagine HTML (monta_js.py 02)
TITOLO = 'HTML: introduzione'
SEZ = ['2.1', '2.2', '2.4']
RICORDA = [
    'Un elemento è formato da tag di apertura, contenuto e tag di chiusura; gli elementi vuoti (img, br, input, meta) non hanno chiusura; gli attributi si scrivono solo nel tag di apertura come nome="valore".',
    'Gli elementi si annidano chiudendo per primo l’ultimo aperto; id è unico nella pagina, class si può ripetere e raggruppa elementi con lo stesso stile.',
    'Ogni pagina ha lo scheletro DOCTYPE, html con lang, head (charset UTF-8, viewport, title) e body; i nomi dei file sono minuscoli, senza spazi, e la home si chiama index.html.',
    'Gli elementi di blocco occupano tutta la riga e vanno a capo, quelli in linea restano nel testo; div e span sono contenitori senza significato, da usare quando non c’è un tag semantico adatto.',
    'Una pagina che si vede bene non è per forza corretta: gli errori si cercano con il validatore e si osserva con F12 come il browser ha interpretato il codice.',
]

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(2, dict(DA=2, SEZ=SEZ, TITOLO=TITOLO, JS=JS, ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, RICORDA=RICORDA, CORREZIONI=CORREZIONI), OUT)
