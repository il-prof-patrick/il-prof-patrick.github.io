# Capitolo 1 · Come funziona il Web — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Sviluppo Web - Front end')

ANIM = {
    'F1.2.1': dict(id='f-costruzione', titolo='Come il browser costruisce la pagina',
                   inizio='A sinistra la finestra del browser, ancora vuota, con l’indirizzo scuola.it; a destra il server; sotto il browser la cartella dei file ricevuti, vuota.',
                   vb='0 0 720 320', aria='Il browser chiede il file HTML, poi i file collegati uno dopo l’altro: arrivano il CSS e la pagina si colora, arriva il logo, arriva lo script e il pulsante cambia il tema senza nuove richieste'),
    'F1.4.1': dict(id='f-chiamata', titolo='Dall’Invio alla pagina',
                   inizio='A sinistra il portatile con l’indirizzo www.scuola.it nella barra; in alto il server DNS con la sua rubrica; a destra il web server di www.scuola.it.',
                   vb='0 0 720 300', aria='Il browser chiede al DNS l’indirizzo IP, poi invia al web server la richiesta GET cifrata, il server risponde 200 OK con il file index.html, il browser chiede gli altri file e disegna la pagina; con un indirizzo sbagliato il server risponde 404'),
    'F1.4.2': dict(id='f-statico', titolo='Sito statico e sito dinamico',
                   inizio='In alto un browser e un server statico con uno scaffale di file HTML già pronti; in basso un browser e un server dinamico con un programma e un database; l’utente è Giulia.',
                   vb='0 0 720 320', aria='Il server statico invia il file già pronto, uguale per tutti; il server dinamico interroga il database e genera una pagina diversa per Giulia e per Marco'),
}
SCHEMI = {
    'F1.1.2': dict(id='s-clientserver', titolo='Il modello client-server',
                   svg='      <svg viewBox="0 0 720 300" role="img" aria-label="Tre client (un portatile, un telefono e un tablet, ciascuno con un browser) inviano richieste attraverso Internet a un web server in un data center, che risponde"></svg>'),
}
FOTO = {
    'F1.1.1': dict(modo='mg', tit='Un data center', alt='Corridoio di un data center con gli armadi pieni di server'),
    'F1.1.3': dict(modo='box', tit='Tim Berners-Lee', chiave='Sir_Tim_Berners-Lee_(cropped).jpg', alt='Tim Berners-Lee, inventore del Web'),
    'F1.1.4': dict(modo='grande', alt='Il computer NeXT usato da Tim Berners-Lee come primo web server, con l’etichetta «Questa macchina è un server. NON SPEGNERLA!!»'),
    'F1.1.5': dict(modo='grande', alt='La prima pagina web della storia su info.cern.ch: solo titoli, testo e link sottolineati'),
}
TOGLI = ['F1.3.1']          # al posto dell'animazione c'è il widget «linguaggi», che si può provare con ogni combinazione
DOPO = {('1.3', 6): widget('linguaggi')}
RICORDA = [
    'Internet è la rete mondiale che collega i dispositivi; il Web è un servizio che funziona su Internet, fatto di pagine collegate da link.',
    'Nel modello client-server il client (il browser) chiede una risorsa e il server (il web server) risponde inviandola; ruolo e macchina sono cose diverse.',
    'Il Web è stato inventato da Tim Berners-Lee al CERN tra il 1989 e il 1991 ed è stato reso libero nel 1993.',
    'Il server non invia una pagina già disegnata ma file di testo con istruzioni: il browser chiede uno per uno i file collegati, applica gli stili, impagina, disegna ed esegue gli script.',
    'Ogni browser disegna la pagina da solo: una pagina va provata su più browser e più larghezze di schermo, a partire dal telefono.',
    'HTML descrive la struttura e il contenuto, CSS l’aspetto, JavaScript il comportamento; solo JavaScript è un linguaggio di programmazione.',
    'Il front-end (HTML, CSS, JS) arriva al browser ed è leggibile da tutti; il back-end gira sul server; nel front-end non si mettono mai dati riservati.',
    'L’URL indica protocollo, dominio, eventuale porta, percorso, parametri e frammento; il file predefinito di una cartella è index.html.',
    'Il DNS traduce il nome di dominio nell’indirizzo IP del server; poi il browser invia una richiesta HTTP e riceve una risposta con un codice di stato (2xx successo, 3xx reindirizzamento, 4xx errore del client, 5xx errore del server).',
    'HTTPS cifra la comunicazione e verifica il server con un certificato; il lucchetto non garantisce che il sito sia onesto.',
    'Un sito statico è fatto di file già pronti inviati uguali a tutti, ma può essere interattivo grazie a JavaScript; un sito dinamico genera le pagine sul server con un programma e un database.',
]

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(1, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, DOPO=DOPO, TOGLI=TOGLI, RICORDA=RICORDA), OUT)
