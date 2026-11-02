# Slide di Presenta in aula · Capitolo 1 · Come funziona il Web
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Sviluppo Web - Front end')
c = Capitolo(1)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Che cosa succede tra il clic e la pagina sullo schermo.'),
 c.DOM(0),
 # 1.1
 c.SEZ('1.1', 'Un’infrastruttura e un servizio'),
 {'tipo': 'punti', 'titolo': 'Internet', 'punti': [
   ['network', '**Rete mondiale** che collega miliardi di dispositivi'], ['cable', 'Cavi, fibre, antenne, router: l’**infrastruttura**'], ['list', 'Regole comuni: i protocolli della famiglia **TCP/IP**']]},
 {'tipo': 'punti', 'titolo': 'Il Web (*World Wide Web*)', 'punti': [
   ['globe', 'Un **servizio** che funziona sopra Internet'], ['link', 'Pagine web **collegate da link**'], ['map', 'Ogni pagina ha un **indirizzo** e si chiede con **HTTP**'], ['monitor', 'Si legge con un programma: il **browser**']],
  'nota': 'Internet = le strade · il Web = i corrieri che le usano (come autobus, ambulanze, taxi: e-mail, chat, giochi online)'},
 {'tipo': 'tabella', 'titolo': 'Internet e Web a confronto', 'righe': [['', 'Internet', 'Web'], ['Che cos’è', 'la rete che collega i dispositivi', 'un servizio: pagine e link'], ['Nasce', '1969 (ARPANET) · TCP/IP dal 1983', '1989–1991 (Berners-Lee, CERN)'],
   ['Regole', 'TCP/IP', 'HTTP/HTTPS, URL, HTML'], ['Per usarlo', 'dipende dal servizio', 'il browser']]},
 c.ERR(0),
 {'tipo': 'confronto', 'titolo': 'Client e server', 'a': {'icona': 'monitor', 'titolo': 'Client', 'righe': ['• di solito il **browser** (Chrome, Edge, Firefox, Safari)', '• **chiede** una risorsa', '• prende l’**iniziativa**']},
  'b': {'icona': 'server', 'titolo': 'Server', 'tono': 'buono', 'righe': ['• il **web server** (Nginx, Apache)', '• **risponde** inviando la risorsa', '• se nessuno chiede, **non succede niente**']}},
 {'tipo': 'foto', 'titolo': 'Dove “vive” una pagina', 'foto': [c.FO('F1.1.1', 'Un data center: server accesi 24 ore su 24')]},
 {'tipo': 'punti', 'titolo': 'Ruolo e macchina sono cose diverse', 'punti': [
   ['monitor', 'Lo stesso computer può fare **sia da client sia da server**'], ['code', 'Con **Live Server** di VS Code il tuo PC fa partire un piccolo web server e il tuo browser gli fa da client']]},
 c.SC('F1.1.2', 'Il modello client-server'),
 {'tipo': 'storia', 'titolo': 'Il Web nasce al CERN', 'anno': '1989 – 1993', 'foto': c.FO('F1.1.3', 'Tim Berners-Lee'), 'punti': [
   ['calendar', '**Marzo 1989**: Berners-Lee propone di collegare i documenti con link (**ipertesto**)'], ['message-square', 'Il capo scrive: «*Vague but exciting*»'],
   ['globe', '**1990**: primo browser, primo server, primo sito: **info.cern.ch**'], ['gift', '**1993**: Web di **pubblico dominio**, gratis e senza brevetti']]},
 {'tipo': 'foto', 'titolo': 'Il primo web server', 'foto': [c.FO('F1.1.4', 'L’etichetta: «Questa macchina è un server. NON SPEGNERLA!!»')]},
 {'tipo': 'foto', 'titolo': 'La prima pagina web', 'foto': [c.FO('F1.1.5', 'Solo titoli, testo e link sottolineati')]},
 # 1.2
 c.SEZ('1.2', 'Dal file alla pagina'),
 c.DOM(1),
 {'tipo': 'punti', 'titolo': 'Il server non manda una fotografia', 'punti': [
   ['file-code', 'Manda **file di testo con istruzioni**'], ['image', 'Più i file di immagini, video e caratteri'], ['monitor', '**Il browser costruisce e disegna** la pagina'], ['smartphone', 'Per questo la stessa pagina appare **diversa** su schermi e browser diversi']]},
 {'tipo': 'punti', 'titolo': 'I passi del browser (1)', 'punti': [
   ['file-code', '**1 · Riceve l’HTML** e lo legge dall’alto in basso: titoli, paragrafi, immagini, link, come sono annidati'], ['download', '**2 · Trova altri file** (CSS, immagini, script, caratteri) e li chiede **uno per uno**'], ['palette', '**3 · Applica gli stili**: colore, dimensione, margini di ogni elemento']]},
 {'tipo': 'punti', 'titolo': 'I passi del browser (2)', 'punti': [
   ['layout-template', '**4 · Layout**: dove va ogni elemento e quanto spazio occupa'], ['monitor', '**5 · Rendering**: disegna i pixel sullo schermo'], ['code', '**6 · Script**: JavaScript può cambiare la pagina anche dopo; a ogni modifica il browser **ricalcola e ridisegna**']]},
 c.AN('F1.2.1', 'La pagina arriva a pezzi'),
 {'tipo': 'punti', 'titolo': 'Molte richieste, un solo clic', 'punti': [
   ['download', 'Una pagina di notizie può richiedere **più di cento file**'], ['gauge', 'Il **peso** dei file, soprattutto delle immagini, decide la velocità']]},
 c.ERR(1),
 {'tipo': 'tabella', 'titolo': 'I browser e i loro motori', 'righe': [['Browser', 'Rendering', 'JavaScript', 'Azienda'], ['Chrome, Edge, Opera, Brave', 'Blink', 'V8', 'Google (Edge: Microsoft)'], ['Firefox', 'Gecko', 'SpiderMonkey', 'Mozilla'], ['Safari', 'WebKit', 'JavaScriptCore', 'Apple']]},
 {'tipo': 'punti', 'titolo': 'Tre soli motori di rendering', 'punti': [
   ['cpu', 'Il **motore di rendering** legge HTML e CSS e disegna la pagina; il **motore JavaScript** esegue gli script'], ['layers', 'Stesso motore → pagine disegnate **quasi allo stesso modo**'], ['smartphone', 'Oltre metà del traffico viene dai **telefoni**: si progetta prima per lo schermo piccolo'], ['chart-no-axes-combined', 'Chrome ≈ **due terzi**, Safari 15–20%, Edge e Firefox sotto il 10%']]},
 # 1.3
 c.SEZ('1.3', 'Struttura, aspetto, comportamento'),
 {'tipo': 'tabella', 'titolo': 'Tre linguaggi, tre compiti', 'righe': [['Linguaggio', 'Compito', 'Risponde a', 'Esempio'], ['**HTML**', 'struttura e contenuto', 'che cosa c’è?', 'questo è un titolo, un paragrafo, un’immagine'], ['**CSS**', 'presentazione', 'come appare?', 'il titolo è blu, grande 32 pixel, centrato'], ['**JavaScript**', 'comportamento', 'che cosa fa quando…?', 'quando clicchi il pulsante, mostra il menu']]},
 {'tipo': 'tessere', 'titolo': 'Che cos’è ciascuno', 'tessere': [
   ['file-code', 'HTML', '*HyperText Markup Language* · **marcatura**: etichetta le parti di un testo, non dà ordini'], ['palette', 'CSS', '*Cascading Style Sheets* · **stile**: regole sull’aspetto degli elementi'], ['code', 'JavaScript', '**programmazione**: variabili, condizioni, cicli, funzioni']],
  'nota': 'Separare i compiti: cambi l’aspetto di tutto il sito senza toccare i contenuti'},
 {'tipo': 'tessere', 'titolo': 'L’analogia della casa', 'tessere': [['house', 'HTML', 'la **struttura in muratura**: muri, stanze, porte, finestre'], ['paintbrush', 'CSS', 'l’**arredamento** e la tinteggiatura'], ['zap', 'JavaScript', 'l’**impianto elettrico**: accende la luce quando premi l’interruttore']],
  'nota': 'Il limite: in una casa vera l’impianto non sposta i muri, JavaScript può aggiungere e togliere elementi HTML'},
 c.WG('linguaggi', 'Prova tu: e se spegnessi un linguaggio?'),
 c.ERR(2), c.ERR(3),
 {'tipo': 'confronto', 'titolo': 'Front-end e back-end', 'a': {'icona': 'monitor', 'titolo': 'Front-end', 'tono': 'buono', 'righe': ['• arriva al **browser** ed è eseguito lì', '• HTML, CSS, JavaScript, immagini', '• **questo modulo**']},
  'b': {'icona': 'server', 'titolo': 'Back-end', 'righe': ['• gira **sul server**', '• PHP, Python, Java, JavaScript (Node.js)', '• legge e scrive nei **database**']}},
 {'tipo': 'punti', 'titolo': 'Il front-end è pubblico', 'punti': [
   ['eye', 'Chiunque lo legge: **Visualizza sorgente** o strumenti per sviluppatori'], ['lock', 'Il back-end resta sul server: l’utente vede solo il risultato'], ['triangle-alert', '**Mai password o dati riservati** nel codice del front-end']]},
 c.DOM(2),
 {'tipo': 'punti', 'titolo': 'In laboratorio: F12 su Wikipedia', 'punti': [
   ['monitor', '**F12** → scheda *Elements*: togli la spunta ad alcune regole CSS e guarda la pagina perdere l’aspetto'], ['code', 'Ctrl+Maiusc+P → «Disable JavaScript», ricarica: che cosa smette di funzionare?'], ['rotate-ccw', 'Ricaricando le modifiche spariscono: hai cambiato **solo la copia nel tuo browser**']]},
 # 1.4
 c.SEZ('1.4', 'Che cosa succede quando premi Invio'),
 c.COD(['https://www.scuola.it:443', '  /corsi/informatica/index.html', '  ?classe=5#programma'], 'L’indirizzo: l’URL', [
   ['lock', '`https://` · il **protocollo**'], ['server', '`www.scuola.it` · il **server**'], ['door-open', '`:443` · la **porta** (80 HTTP, 443 HTTPS: si omette)'], ['folder', '`/corsi/…/index.html` · **cartelle e file**'], ['search', '`?classe=5` · **parametri** `nome=valore`'], ['anchor', '`#programma` · un **punto della pagina** (non va al server)']]),
 {'tipo': 'punti', 'titolo': 'Il file predefinito', 'punti': [
   ['folder', 'Se il percorso finisce con una cartella (`www.scuola.it/corsi/`) il server manda il **file predefinito**'], ['file-code', 'Di solito `index.html`: per questo la pagina principale di un sito si chiama **sempre** così']]},
 {'tipo': 'punti', 'titolo': 'Dal nome all’indirizzo IP: il DNS', 'punti': [
   ['hash', 'Su Internet i dispositivi hanno **indirizzi IP**: numeri come `193.205.86.10`'], ['book-open', 'Il **DNS** (*Domain Name System*) traduce il nome di dominio nell’IP del server'], ['clock', 'Le risposte restano per un po’ in **cache**']],
  'nota': 'Il DNS è come la rubrica del telefono: cerchi il nome, ti dà il numero. Ma è distribuita su migliaia di server'},
 c.COD(['GET /corsi/index.html HTTP/1.1', 'Host: www.scuola.it', '', 'HTTP/1.1 200 OK', 'Content-Type: text/html; charset=utf-8', '', '<!DOCTYPE html>', '<html lang="it"> ...'], 'Richiesta e risposta: HTTP', [
   ['send', '**Richiesta**: metodo (`GET` = «dammi») e percorso'], ['circle-check', '**Risposta**: **codice di stato** e, se va bene, il file'], ['history', 'HTTP è **senza memoria**: ogni richiesta è indipendente'], ['cookie', 'Per ricordare un utente i siti usano i **cookie**']]),
 {'tipo': 'tabella', 'titolo': 'I codici di stato', 'righe': [['Codice', 'Significato', 'Quando capita'], ['**200** OK', 'tutto bene, ecco la risorsa', 'quasi sempre'], ['**301** / **302**', 'spostata a un altro indirizzo', 'cambio di dominio, da http a https'], ['**304** Not Modified', 'non è cambiata: usa la tua copia', 'ricaricando immagini e CSS'],
   ['**403** Forbidden', 'vietato', 'area riservata'], ['**404** Not Found', 'non trovata', 'link sbagliato, file rinominato'], ['**500** Internal Server Error', 'errore del server', 'il programma sul server si è bloccato'], ['**503** Service Unavailable', 'server non disponibile', 'sovraccarico o manutenzione']]},
 {'tipo': 'tessere', 'titolo': 'Le famiglie si riconoscono dalla prima cifra', 'tessere': [['circle-check', '2xx', 'successo'], ['arrow-right', '3xx', 'reindirizzamento'], ['circle-x', '4xx', 'errore del **client**: la richiesta è sbagliata'], ['server-crash', '5xx', 'errore del **server**']]},
 c.ERR(4),
 {'tipo': 'storia', 'titolo': 'La stanza 404', 'anno': 'una leggenda', 'icona': 'door-open', 'punti': [
   ['door-open', 'Si racconta che il 404 venga dalla «stanza 404» del CERN dove stava il primo server'], ['circle-x', '**Non ci sono prove**: è considerata una leggenda'], ['list', 'I codici furono scelti **a famiglie**: il 4 indica gli errori del client, 04 è il quarto della serie']]},
 {'tipo': 'punti', 'titolo': 'HTTPS', 'punti': [
   ['lock', '**HTTP con i dati cifrati** (la S è *Secure*)'], ['shield-check', 'Nessuno tra browser e server può **leggere o modificare** ciò che si scambiano'], ['key', 'Il server dimostra chi è con un **certificato digitale**'], ['triangle-alert', 'Il lucchetto dice che la connessione è **cifrata**, non che il sito è **onesto**']]},
 c.AN('F1.4.1', 'Dall’Invio alla pagina'),
 {'tipo': 'confronto', 'titolo': 'Sito statico e sito dinamico', 'a': {'icona': 'file', 'titolo': 'Statico', 'righe': ['• **file già pronti**, inviati così come sono', '• **uguali per tutti**', '• per cambiare: modifichi i file e li ricarichi', '• può essere **interattivo**: JavaScript gira nel browser']},
  'b': {'icona': 'database', 'titolo': 'Dinamico', 'tono': 'buono', 'righe': ['• la pagina è **costruita a ogni richiesta**', '• un programma sul server legge un **database**', '• **pagine diverse per utenti diversi**', '• profilo, carrello, voti sul registro']}},
 {'tipo': 'tabella', 'titolo': 'Statico e dinamico a confronto', 'righe': [['', 'Statico', 'Dinamico'], ['Pagina', 'file già pronto', 'generata a ogni richiesta'], ['Contenuto', 'uguale per tutti', 'può cambiare per ogni utente'], ['Sul server', 'solo un web server', 'web server + programma + database'], ['Velocità e costo', 'molto veloce, hosting anche gratuito', 'più lento e costoso'],
   ['Sicurezza', 'poche parti attaccabili', 'più parti da proteggere'], ['Esempi', 'portfolio, documentazione, sito di un evento', 'social, e-commerce, registro elettronico']]},
 c.AN('F1.4.2', 'Sito statico e sito dinamico'),
 c.ERR(5), c.DOM(3),
 {'tipo': 'punti', 'titolo': 'Molti siti sono ibridi', 'punti': [
   ['file', 'Le pagine sono file **statici**'], ['download', 'JavaScript chiede i dati a un servizio esterno (**API**) quando servono'], ['gauge', 'Anche blog e documentazione generano **in anticipo** le pagine: più veloci e sicure']]},
 {'tipo': 'punti', 'titolo': 'In laboratorio: la scheda Network', 'punti': [
   ['monitor', '**F12** → *Network*: ricarica la home della scuola e guarda le richieste: quante, di che tipo, con quale **codice di stato**, quanto pesano'], ['circle-x', 'Scrivi un indirizzo inesistente dello stesso sito: trova il **404**'], ['lock', 'Clicca il **lucchetto** e leggi a chi è intestato il certificato']]},
]
c.scrivi(OUT, S)
