# Slide di Presenta in aula · Capitolo 4 · Internet
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Reti e Internet')
c = Capitolo(4)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Un accordo tra decine di migliaia di reti, fatto di cavi, server e regole comuni.'),
 c.DOM(0),
 # 4.1
 c.SEZ('4.1', 'Nessun proprietario, nessun centro'),
 {'tipo': 'punti', 'titolo': 'Internet è una rete di reti', 'punti': [['network', '**Decine di migliaia** di reti indipendenti, di proprietari diversi'], ['list', 'Comunicano con gli stessi protocolli: **TCP/IP**'],
   ['house', 'Casa, scuola, operatori, Google: reti separate che **si collegano**'], ['users', '**Nessun proprietario né centro**; alcune organizzazioni coordinano ciò che deve essere unico']]},
 {'tipo': 'storia', 'titolo': 'Il primo messaggio: «LO»', 'anno': '1957–1969', 'foto': c.FO('F4.1.1', 'Kleinrock e l’IMP'), 'punti': [
   ['satellite', '1957: lo **Sputnik** → gli USA creano l’**ARPA**'], ['cpu', 'Una rete per **condividere i costosissimi computer** delle università'], ['send', '**29 ottobre 1969**, UCLA → Stanford: «LOGIN» si blocca dopo **«LO»**'], ['network', 'Fine 1969: **4 nodi**']]},
 {'tipo': 'foto', 'titolo': 'La prima ARPANET', 'foto': [c.FO('F4.1.2', 'Pochi cerchi e poche linee: l’inizio di una rete che oggi collega miliardi di dispositivi')]},
 {'tipo': 'storia', 'titolo': 'L’Italia in rete', 'anno': '1986', 'icona': 'flag', 'punti': [['flag', '**Primo paese dell’Europa continentale** collegato a Internet'], ['building-2', '**30 aprile 1986**, CNUCE di Pisa (CNR)'], ['satellite-dish', 'Ponte satellitare verso gli Stati Uniti'], ['activity', 'Il primo segnale: un **ping**']]},
 c.ERR(0),
 c.DOM(1),
 # 4.2
 c.SEZ('4.2', 'Internet è fatta di oggetti'),
 {'tipo': 'tessere', 'titolo': 'Il viaggio di un pacchetto', 'tessere': [['building-2', 'ISP', 'l’azienda che ti collega: TIM, Vodafone, WindTre, Iliad, Fastweb…'], ['cable', 'Dorsali', 'fibra ad altissima capacità lungo autostrade e ferrovie'], ['anchor', 'Cavi sottomarini', 'oltre 500, più di un milione di km'], ['server', 'Data center', 'migliaia di server, sempre accesi']]},
 {'tipo': 'punti', 'titolo': 'Sotto il mare, non nello spazio', 'punti': [['anchor', '**Oltre il 95%** del traffico tra continenti viaggia in **cavi sottomarini**'], ['gauge', 'Una coppia di fibre porta **più dati di un satellite**, con meno ritardo e meno costi'],
   ['cable', 'Grosso come un tubo da giardino · **ripetitori** che amplificano la luce'], ['triangle-alert', 'Ancore, reti da pesca, terremoti, sabotaggi: **infrastrutture strategiche**']], 'foto': c.FO('F4.2.2')},
 c.AN('F4.2.3', 'Da Roma a New York'),
 {'tipo': 'foto', 'titolo': 'La mappa dei cavi sottomarini', 'foto': [c.FO('F4.2.4', 'Tanti cavi nell’Atlantico e nel Mediterraneo, pochissimi verso alcune isole del Pacifico')]},
 {'tipo': 'punti', 'titolo': 'Se un cavo si rompe', 'punti': [['route', 'Il traffico viene **deviato su altri cavi**: rallenta, non si ferma'], ['triangle-alert', 'Rischio vero per chi ha pochissimi cavi: **Tonga, 2022**'], ['map-pin', 'L’Italia è un **punto di approdo**: Sicilia (Mazara del Vallo, Catania) e Genova']], 'foto': c.FO('F4.2.6')},
 {'tipo': 'punti', 'titolo': 'I data center', 'punti': [['server', '**Migliaia di server** con alimentazione, raffreddamento e rete **ridondanti**'], ['globe', 'Lì “abitano” siti, email, foto nel *cloud*, video, modelli di IA'], ['zap', 'Consumano **quanto una cittadina**: vicino a centrali, acqua o nei paesi freddi']]},
 {'tipo': 'foto', 'titolo': 'Dentro un data center', 'foto': [c.FO('F4.2.7', 'Corridoi organizzati per far circolare aria fredda e calda')]},
 c.AN('F4.2.8', 'Il viaggio fisico di una richiesta'),
 c.ERR(1),
 # 4.3
 c.SEZ('4.3', 'Chi è online e chi no'),
 c.ERR(2),
 {'tipo': 'punti', 'titolo': 'I numeri (ITU, 2025, indicativi)', 'punti': [['users', 'Circa **6 miliardi** di persone usano Internet: tre quarti dell’umanità'], ['user-x', '**2,2 miliardi** sono offline'], ['signal', '**3 miliardi** di abbonamenti 5G']]},
 c.SC('F4.7.1', 'Chi è online nel mondo'),
 {'tipo': 'tessere', 'titolo': 'Il divario digitale (*digital divide*)', 'tessere': [['wifi-off', 'Accesso', 'avere o non avere la connessione'], ['gauge', 'Qualità', 'una connessione lenta e costosa non basta per una lezione online'], ['graduation-cap', 'Competenze', 'saper cercare, valutare, proteggersi']],
  'nota': 'Nel 2020 molti studenti italiani avevano **un solo telefono per tutta la famiglia**'},
 # 4.4
 c.SEZ('4.4', 'Limiti e problemi'),
 {'tipo': 'tessere', 'titolo': 'Quattro problemi', 'tessere': [['zap', 'Energia', 'data center ≈ 1,5% dell’elettricità mondiale (2024), può raddoppiare entro il 2030 · acqua e rifiuti elettronici'],
   ['ban', 'Censura e blackout', 'filtri (il “Grande Firewall”) e *Internet shutdown*'], ['scale', 'Neutralità della rete', 'tutto il traffico trattato allo stesso modo · in UE dal 2015'], ['building', 'Il potere di pochi', 'pochi cloud, motori e social: un guasto ferma mezzo web']]},
 c.DOM(2),
 # 4.5
 c.SEZ('4.5', 'Le tecnologie di Internet in privato'),
 c.SC('F2.10.1', 'Intranet, extranet e Internet'),
 {'tipo': 'punti', 'titolo': 'La VPN (*Virtual Private Network*)', 'punti': [['lock', 'Un **tunnel cifrato** su Internet verso una rete privata'], ['package', 'Ogni pacchetto **cifrato e chiuso dentro un altro**, diretto al server VPN'], ['eye-off', 'Chi intercetta vede solo pacchetti illeggibili']]},
 c.AN('F2.10.2', 'Che cosa vuol dire tunnel'),
 {'tipo': 'confronto', 'titolo': 'Due usi da non confondere', 'a': {'icona': 'building-2', 'titolo': 'VPN aziendali o scolastiche', 'tono': 'buono', 'righe': ['• lavorare da casa sulla **rete privata**', '• file e programmi interni']},
  'b': {'icona': 'globe', 'titolo': 'VPN commerciali', 'righe': ['• nascondono il traffico al Wi-Fi in cui sei', '• fanno sembrare un **altro paese**', '- **non rendono anonimi**: il fornitore vede tutto', '- non proteggono da phishing e virus']}},
 c.ERR(3),
 c.DOM(3),
 # 4.6
 c.SEZ('4.6', 'Internet e Web non sono la stessa cosa'),
 c.DOM(4),
 {'tipo': 'confronto', 'titolo': 'Internet e Web', 'a': {'icona': 'network', 'titolo': 'Internet', 'righe': ['• l’**infrastruttura**', '• rete di reti: cavi, router, TCP/IP']},
  'b': {'icona': 'globe', 'titolo': 'World Wide Web', 'tono': 'buono', 'righe': ['• **uno dei servizi** sopra Internet', '• pagine collegate da **link**, lette con un **browser**', '• protocollo **HTTP/HTTPS**']},
  'verdetto': 'Internet = la **rete stradale** · Web = il **servizio di autobus** (ma oggi molti servizi si usano attraverso pagine web)'},
 c.SC('F5.1.1', 'Tanti servizi sulla stessa base'),
 c.DOM(5),
 # 4.7
 c.SEZ('4.7', 'Un inventore, un luogo, una data'),
 {'tipo': 'punti', 'titolo': 'Il CERN, fine anni ’80', 'punti': [['building-2', 'Migliaia di fisici, computer diversi, documenti sparsi'], ['search', 'Trovare un’informazione era **un’impresa**'], ['link', '**Tim Berners-Lee**: collegarli con dei **link**, da qualsiasi computer']], 'foto': c.FO('F5.2.1')},
 {'tipo': 'storia', 'titolo': '«Vague but exciting…»', 'anno': '1989', 'foto': c.FO('F5.2.2', 'La proposta del 1989'), 'punti': [['file', 'Marzo 1989: la proposta *Information Management: A Proposal*'], ['pencil', 'Il capo, **Mike Sendall**, annota a matita: «vago ma entusiasmante»'], ['clock', 'E gli lascia il tempo di provarci']]},
 {'tipo': 'punti', 'titolo': 'Il primo browser, il primo server', 'punti': [['monitor', 'Berners-Lee scrive il **primo browser** e il **primo server web**'], ['sticky-note', 'Sul computer: «Questa macchina è un server. NON SPEGNERLA!!»'], ['globe', '**Agosto 1991**: la prima pagina, **info.cern.ch**']], 'foto': c.FO('F5.2.3')},
 {'tipo': 'storia', 'titolo': 'Un regalo al mondo', 'anno': '1993', 'icona': 'gift', 'punti': [['gift', '**30 aprile 1993**: il CERN rende il Web **pubblico e gratuito**'], ['trending-up', 'Per questo si diffonde **così in fretta**: niente da pagare'], ['crown', '2004: Berners-Lee nominato **cavaliere**']]},
 # 4.8
 c.SEZ('4.8', 'Leggere saltando'),
 {'tipo': 'confronto', 'titolo': 'Testo e ipertesto', 'a': {'icona': 'book-open', 'titolo': 'Libro', 'righe': ['• lettura **lineare**', '• dalla prima all’ultima pagina']},
  'b': {'icona': 'link', 'titolo': 'Ipertesto', 'tono': 'buono', 'righe': ['• testi collegati da **link**', '• lettura **non lineare**: ognuno il suo percorso', '• con immagini, audio, video → **ipermedia**']}},
 c.SC('F5.3.1', 'Lineare e ipertesto'),
 {'tipo': 'punti', 'titolo': 'Esempio: dieci minuti su Wikipedia', 'punti': [['search', '“fibra ottica” → “riflessione totale” → “Snell” → “Paesi Bassi”'], ['circle-check', 'Pregio: **curiosità**, collegamenti'], ['circle-x', 'Rischio: **perdere il filo**']]},
 c.ERR(4),
 c.DOM(6),
 # 4.9
 c.SEZ('4.9', 'L’indirizzo di ogni risorsa'),
 c.SC('X4.9.1', 'Un URL pezzo per pezzo') if 'X4.9.1' in c.fig else {'tipo': 'schema', 'titolo': 'Un URL pezzo per pezzo', 'sel': '#s-url'},
 {'tipo': 'tabella', 'titolo': 'Le parti di un URL', 'righe': [['Parte', 'Che cosa indica', 'Nell’esempio'], ['Protocollo', 'con quali regole parlare al server', '`https`'], ['Dominio', 'il nome del server, tradotto dal DNS', '`www.istruzione.it`'], ['Percorso', 'dove si trova la risorsa sul server', '`/esame_di_stato/index.html`'], ['Parametri', 'informazioni aggiuntive', '`?anno=2026`'], ['Segnalibro', 'un punto della pagina', '`#date`']]},
 {'tipo': 'punti', 'titolo': 'I domini si leggono da destra', 'punti': [['flag', '**Primo livello** (TLD): paese (.it, .fr) o categoria (.com, .org, .edu, .gov)'], ['tag', 'A sinistra il **nome** registrato, poi i **sottodomini** (www, mail, classroom)'],
   ['shield', 'classroom.**google.com** è di Google · google.com.**sicurezza-account.ru** no!']]},
 c.WG('url', 'Prova tu: di chi è davvero questo indirizzo?'),
 c.ERR(5),
 c.DOM(7),
 # 4.10
 c.SEZ('4.10', 'Richiesta e risposta'),
 {'tipo': 'punti', 'titolo': 'HTTP (*HyperText Transfer Protocol*)', 'punti': [['send', 'Il browser **chiede** una risorsa, il server la **invia**'], ['arrow-left-right', 'Modello **richiesta–risposta** del client-server'], ['hash', 'La risposta ha un **codice di stato**']]},
 c.AN('F5.5.1', 'Dall’Invio alla pagina'),
 {'tipo': 'tabella', 'titolo': 'I codici di stato', 'righe': [['Codice', 'Significato', 'Quando lo vedi'], ['**200** OK', 'tutto bene', 'sempre, ma non si vede'], ['**301 / 302**', 'la risorsa si è spostata', 'il browser segue da solo'], ['**403** Forbidden', 'non hai il permesso', 'pagine riservate'], ['**404** Not Found', 'non esiste', 'link sbagliati'], ['**500**', 'errore del server', 'sito guasto'], ['**503**', 'server sovraccarico', 'il giorno dei risultati dei test']]},
 {'tipo': 'tessere', 'titolo': 'La prima cifra dice già molto', 'tessere': [['circle-check', '2xx', 'successo'], ['corner-down-right', '3xx', 'reindirizzamento'], ['user-x', '4xx', 'errore del client'], ['server-crash', '5xx', 'errore del server']]},
 {'tipo': 'confronto', 'titolo': 'HTTP e HTTPS', 'a': {'icona': 'eye', 'titolo': 'HTTP', 'tono': 'vecchio', 'righe': ['- dati **in chiaro**', '- sullo stesso Wi-Fi qualcuno può leggerli']},
  'b': {'icona': 'lock', 'titolo': 'HTTPS (*Secure*)', 'tono': 'buono', 'righe': ['+ comunicazione **cifrata** con **TLS**', '+ nessuno può modificarla senza che il browser se ne accorga']}},
 c.ERR(6),
 # 4.11
 c.SEZ('4.11', 'Tre linguaggi, tre compiti'),
 {'tipo': 'tessere', 'titolo': 'Una pagina web come una casa', 'tessere': [['file-code', 'HTML', '**struttura e contenuto** · i muri e le stanze'], ['palette', 'CSS', '**aspetto** · arredamento e pittura'], ['zap', 'JavaScript', '**comportamento** · impianto elettrico e domotica']],
  'nota': 'Separare i compiti: cambi la grafica di tutto il sito **senza toccare i contenuti**'},
 c.WG('linguaggi', 'Prova tu: e se spegnessi un linguaggio?'),
 c.ERR(7),
 {'tipo': 'confronto', 'titolo': 'Pagine statiche e dinamiche', 'a': {'icona': 'file', 'titolo': 'Statica', 'righe': ['• **file già pronto** sul server', '• uguale per tutti', '• “chi siamo”, un sito didattico']},
  'b': {'icona': 'refresh-cw', 'titolo': 'Dinamica', 'tono': 'buono', 'righe': ['• **costruita al momento** dal server', '• spesso da un **database**', '• feed dei social, registro elettronico, carrello']}},
 c.DOM(8),
 # 4.12
 c.SEZ('4.12', 'Il programma che sfoglia il Web'),
 {'tipo': 'punti', 'titolo': 'Il browser', 'punti': [['monitor', 'Il **client** che chiede, interpreta e mostra le pagine'], ['paintbrush', '**Motore di rendering**: legge HTML e CSS e “disegna”'], ['cpu', '**Motore JavaScript**: esegue il codice'], ['globe', 'Chrome, Safari, Edge, Firefox · molti usano il motore di Chrome · standard del **W3C**']]},
 {'tipo': 'tabella', 'titolo': 'Le parti del browser', 'righe': [['Elemento', 'A che cosa serve'], ['Barra degli indirizzi', 'URL o ricerca · mostra dominio e lucchetto'], ['Schede (*tab*)', 'più pagine nella stessa finestra'], ['Preferiti', 'salvare gli indirizzi'], ['Cronologia', 'le pagine visitate'], ['Estensioni', 'traduttori, blocco pubblicità, password'], ['Profili', 'separare personale e scuola, sincronizzare']]},
 {'tipo': 'storia', 'titolo': 'La guerra dei browser', 'anno': '1993–2008', 'foto': c.FO('F5.7.1', 'Mosaic, 1993'), 'punti': [['image', '**Mosaic** (1993): immagini dentro il testo'], ['swords', '**Netscape** contro **Internet Explorer** gratis in Windows'], ['flame', 'Dalle ceneri di Netscape: **Firefox** (2004)'], ['globe', '2008: **Chrome**, oggi il più usato']]},
 c.ERR(8),
 c.DOM(9),
 # 4.13
 c.SEZ('4.13', 'Che cosa resta dopo la visita'),
 {'tipo': 'tessere', 'titolo': 'Cronologia e cache', 'tessere': [['history', 'Cronologia', 'l’elenco delle pagine visitate'], ['hard-drive', 'Cache', 'copie di immagini, stili, script: la pagina compare prima · svuotarla risolve pagine “strane”']]},
 {'tipo': 'punti', 'titolo': 'I cookie', 'punti': [['cookie', 'Un **piccolo file di testo** che il sito chiede al browser di conservare'], ['repeat', 'Il browser lo **rimanda** a ogni visita'], ['brain', 'HTTP **non ha memoria**: il cookie fa **ricordare** l’utente al sito']]},
 {'tipo': 'tabella', 'titolo': 'Tipi di cookie', 'righe': [['Tipo', 'A che cosa serve', 'Consenso?'], ['**Tecnici**', 'login, carrello, lingua', 'no'], ['**Analitici**', 'contare le visite', 'dipende'], ['**Di profilazione**', 'pubblicità mirata', 'sì'], ['**Di terze parti**', 'di un altro dominio, **ti seguono da un sito all’altro**', 'sì']]},
 c.AN('F5.8.1', 'Come ti segue un cookie'),
 {'tipo': 'punti', 'titolo': 'Il banner dei cookie', 'punti': [['scale', 'In Europa serve il **consenso** per i cookie non tecnici'], ['circle-x', 'Garante: **rifiutare** deve essere facile quanto accettare'], ['x', 'Chiudere il banner con la **X** = rifiutare']], 'foto': c.FO('F5.8.2', 'Quale pulsante è più evidente?')},
 {'tipo': 'punti', 'titolo': 'La navigazione in incognito', 'punti': [['eye-off', '**Non salva** cronologia, cookie e moduli sul dispositivo'], ['users', 'Utile sul computer di un altro, o per un secondo account'], ['circle-x', '**Non rende anonimi**: sito, rete, operatore e account vedono tutto']]},
 {'tipo': 'punti', 'titolo': 'In laboratorio: privacy nel browser', 'punti': [['settings', 'Impostazioni **privacy e sicurezza**: quanti siti hanno cookie?'], ['ban', 'Bloccare i cookie di terze parti, svuotare la cache di un sito'], ['file-text', 'Tre siti di notizie: «Rifiuta» è facile da trovare quanto «Accetta»? (Documento Google)']]},
 c.ERR(9),
 c.DOM(10),
 # 4.14
 c.SEZ('4.14', 'Pubblicare un sito'),
 {'tipo': 'tessere', 'titolo': 'Per pubblicare un sito servono', 'tessere': [['file-code', 'I file', 'HTML, CSS, immagini'], ['server', 'Un server web', 'programma che risponde alle richieste HTTP (nginx, Apache) · di solito in **hosting**'], ['globe', 'Un dominio', 'si **registra** presso un **registrar**, a pagamento, e si rinnova']]},
 {'tipo': 'punti', 'titolo': 'Esempi', 'punti': [['map-pin', 'I domini **.it**: Registro .it, **CNR di Pisa** · oltre 3,5 milioni (indicativo)'], ['layout-template', '**Google Sites**: editor visuale, pubblica su un indirizzo di Google'], ['code', '**GitHub Pages**: siti statici gratis']]},
 {'tipo': 'punti', 'titolo': 'In laboratorio: un sito con Google Sites', 'punti': [['users', 'A gruppi, un sito sul modulo “Reti e Internet”'], ['file', 'Una pagina per capitolo, immagini con testo alternativo'], ['link', 'Link tra le pagine e verso le fonti · pubblicato solo per la scuola']]},
 c.ERR(10),
 c.DOM(11),
 # 4.15
 c.SEZ('4.15', 'Surface, deep e dark'),
 c.SC('F5.10.1', 'L’iceberg del Web'),
 {'tipo': 'tessere', 'titolo': 'Tre parti del Web', 'tessere': [['search', 'Surface web', 'indicizzato dai motori di ricerca'], ['lock', 'Deep web', 'non indicizzato: posta, registro, Drive, banca · **la parte più grande, normale e legale**'], ['eye-off', 'Dark web', 'piccolo, solo con software come **Tor** · giornalisti e dissidenti, ma anche attività illegali']]},
 c.ERR(11),
 c.DOM(12),
]
c.scrivi(OUT, S)
