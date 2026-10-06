# Kahoot del modulo «Reti e Internet»: 50 domande, 4 risposte, una corretta, tipi variegati.
# La corretta è scritta per prima; la posizione viene mescolata in modo bilanciato (12–13 per posizione).
import json, random
D = [
 # --- Capitolo 1 (8)
 ('definizione', 1, 'Nella comunicazione, che cos’è il «canale»?', 'Il mezzo fisico su cui viaggia il messaggio', ['Il servizio usato, ad esempio WhatsApp', 'Le regole con cui si scrive il messaggio', 'Tutto ciò che disturba il messaggio'], 20),
 ('calcolo', 1, 'Con una connessione da 100 Mbps, quanti MB al secondo si scaricano al massimo?', '12,5 MB', ['100 MB', '800 MB', '1,25 MB'], 30),
 ('trova l’errore', 1, '«Con 1000 Mega scarico un file da 1000 MB in un secondo». Che cosa c’è di sbagliato?', '1000 megabit/s sono al massimo 125 megabyte/s', ['Niente: Mega e MB sono la stessa cosa', 'Servono almeno 1000 secondi', 'I file si misurano in bit, non in byte'], 30),
 ('confronto', 1, 'Che differenza c’è tra banda e latenza?', 'Banda: quanti dati al secondo; latenza: quanto ci mette un dato', ['Sono due nomi della stessa grandezza', 'Banda: quanto ci mette un dato; latenza: quanti dati', 'La latenza si misura in Mbps, la banda in ms'], 20),
 ('perché', 1, 'Perché i fili del doppino sono intrecciati?', 'Il disturbo colpisce entrambi i fili e nella differenza si annulla', ['Per rendere il cavo più resistente agli strappi', 'Per occupare meno spazio nel muro', 'Per far viaggiare il segnale più veloce'], 30),
 ('situazione', 1, 'Un’offerta dice «fibra fino a 200 Mega». Che cosa è probabile?', 'È FTTC: fibra fino all’armadio, poi rame', ['È FTTH: fibra fino in casa', 'È una connessione via satellite', 'È una linea ADSL senza fibra'], 20),
 ('riconoscimento', 1, 'Quale di questi è un esempio di comunicazione half-duplex?', 'Il walkie-talkie', ['La radio FM', 'La telefonata', 'La videochiamata'], 20),
 ('vero/falso', 1, 'Vero o falso: «nella commutazione di pacchetto i tempi di arrivo sono garantiti»', 'Falso: i pacchetti possono aspettare in coda', ['Vero: ogni pacchetto ha una linea riservata', 'Vero: arrivano sempre in ordine', 'Falso: i pacchetti viaggiano solo via satellite'], 20),
 # --- Capitolo 2 (8)
 ('trova l’errore', 2, '«La scuola è una WAN perché ha tanti computer». Che cosa c’è di sbagliato?', 'Conta l’estensione geografica, non il numero di dispositivi', ['Una scuola è sempre una MAN', 'Le WAN hanno pochi computer', 'Niente: con tanti computer è una WAN'], 30),
 ('riconoscimento', 2, 'Quale rete collega lo smartwatch e il telefono nella tua tasca?', 'PAN', ['WAN', 'MAN', 'LAN'], 20),
 ('situazione', 2, 'In una rete a stella si stacca il cavo di un computer. Che cosa succede?', 'Si ferma solo quel computer', ['Si ferma tutta la rete', 'Si ferma metà rete', 'I dati vanno persi in tutta la rete'], 20),
 ('trova l’errore', 2, '«Il server è un computer gigante, il client un computer piccolo». Dov’è l’errore?', 'Client e server sono ruoli, non tipi di computer', ['Il client è sempre più potente', 'I server non hanno schermo, quindi non sono computer', 'Niente: è la definizione corretta'], 30),
 ('confronto', 2, 'Che cosa fa lo switch che l’hub non fa?', 'Invia i dati solo alla porta del destinatario', ['Ripete i dati su tutte le porte', 'Collega la casa a Internet', 'Trasforma i bit in onde'], 20),
 ('definizione', 2, 'Che cosa fa il router?', 'Collega reti diverse e sceglie il passo successivo', ['Crea la rete Wi-Fi', 'Traduce i bit per la linea dell’operatore', 'Ripete i dati su tutte le porte'], 20),
 ('perché', 2, 'Perché un ripetitore Wi-Fi spesso dimezza la banda?', 'Usa lo stesso canale per ricevere e ritrasmettere', ['Perché è più lontano dal router', 'Perché crea una seconda rete Internet', 'Perché usa solo i 2,4 GHz'], 30),
 # --- Capitolo 3 (7)
 ('definizione', 3, 'Che cos’è un protocollo?', 'L’insieme di regole con cui due dispositivi si scambiano dati', ['Il programma che manda i dati', 'Il cavo che collega due computer', 'L’indirizzo di un sito web'], 20),
 ('perché', 3, 'Perché un nuovo Wi-Fi più veloce non richiede di riscrivere i browser?', 'Il Wi-Fi è solo nel livello di accesso alla rete', ['I browser non usano Internet', 'Il Wi-Fi è nel livello di applicazione', 'I browser si aggiornano da soli ogni giorno'], 30),
 ('confronto', 3, 'Porti il telefono da casa a scuola: che cosa cambia?', 'L’IP cambia, il MAC resta uguale', ['Il MAC cambia, l’IP resta uguale', 'Cambiano tutti e due', 'Non cambia niente'], 20),
 ('calcolo', 3, 'Quanti bit ha un indirizzo IPv4?', '32 bit', ['48 bit', '128 bit', '8 bit'], 20),
 ('riconoscimento', 3, 'Quale servizio assegna in automatico l’indirizzo IP a chi si collega?', 'Il DHCP', ['Il DNS', 'L’HTTP', 'L’UDP'], 20),
 ('trova l’errore', 3, '«Il DNS è il server dove si trova il sito». Che cosa c’è di sbagliato?', 'Il DNS traduce il nome nell’IP del server, non contiene il sito', ['Il DNS è il browser', 'Il DNS è solo un tipo di cavo', 'Niente: il DNS ospita tutti i siti'], 30),
 ('situazione', 3, 'In una videochiamata si perde un pacchetto. Che cosa fa l’UDP?', 'Lo lascia perdere e va avanti', ['Lo fa rimandare', 'Ferma la chiamata finché non arriva', 'Riapre la connessione'], 20),
 # --- Capitolo 4 (12)
 ('storia', 4, 'Qual è stato il primo messaggio di ARPANET, nel 1969?', '«LO»', ['«LOGIN»', '«HELLO»', '«PING»'], 20),
 ('vero/falso', 4, 'Vero o falso: «quasi tutto il traffico tra continenti passa dai satelliti»', 'Falso: oltre il 95% passa nei cavi sottomarini', ['Vero: i cavi non attraversano gli oceani', 'Vero: i satelliti hanno più banda', 'Falso: passa tutto via ponte radio'], 20),
 ('trova l’errore', 4, '«Il cloud è nell’aria, i miei dati non sono da nessuna parte». Dov’è l’errore?', 'I dati sono su dischi veri in data center veri', ['I dati sono dentro il telefono', 'Il cloud è un satellite', 'Niente: il cloud non ha un luogo fisico'], 30),
 ('definizione', 4, 'Che cos’è il divario digitale?', 'La differenza di accesso e di capacità di usare Internet', ['La distanza tra due data center', 'Il ritardo di una connessione satellitare', 'La differenza tra download e upload'], 20),
 ('definizione', 4, 'Che cosa garantisce la neutralità della rete?', 'Tutto il traffico va trattato allo stesso modo', ['Internet non ha un proprietario', 'Ogni paese può filtrare i siti', 'Gli operatori scelgono quali servizi accelerare'], 20),
 ('trova l’errore', 4, '«Con la VPN nessuno può sapere che cosa faccio online». Che cosa c’è di sbagliato?', 'Il fornitore della VPN vede tutto il traffico', ['La VPN non cifra nulla', 'La VPN funziona solo in ufficio', 'Niente: la VPN rende anonimi'], 30),
 ('confronto', 4, 'Che differenza c’è tra Internet e Web?', 'Internet è la rete di reti, il Web un servizio sopra di essa', ['Sono la stessa cosa', 'Il Web è la rete fisica, Internet le pagine', 'Internet è nato al CERN nel 1989'], 20),
 ('storia', 4, 'Chi ha inventato il World Wide Web?', 'Tim Berners-Lee', ['Leonard Kleinrock', 'Paul Baran', 'Martin Cooper'], 20),
 ('situazione', 4, 'Quale indirizzo appartiene davvero a Poste Italiane?', 'login.poste.it', ['poste.it.login-sicuro.com', 'poste-it.accesso.net', 'www.login-poste.it.ru'], 30),
 ('riconoscimento', 4, 'Quale codice di stato HTTP indica una risorsa che non esiste?', '404', ['200', '301', '500'], 20),
 ('vero/falso', 4, 'Vero o falso: «il lucchetto dice che il sito è affidabile»', 'Falso: dice solo che la comunicazione è cifrata', ['Vero: i siti truffa non hanno il lucchetto', 'Vero: lo controlla la polizia postale', 'Falso: il lucchetto indica un sito statico'], 20),
 # --- Capitolo 5 (5)
 ('perché', 5, 'Perché Google risponde in mezzo secondo?', 'Consulta un indice preparato prima, non tutto il Web', ['Visita tutti i siti in quel momento', 'Chiede la risposta a un chatbot', 'Ha copiato l’intero Web sul tuo telefono'], 30),
 ('confronto', 5, 'Che differenza c’è tra risultati organici e sponsorizzati?', 'Gli sponsorizzati sono annunci pagati', ['Gli organici sono annunci pagati', 'Gli sponsorizzati sono i più veri', 'Non c’è differenza'], 20),
 ('definizione', 5, 'Che cos’è la disinformazione?', 'Informazione falsa creata apposta per ingannare', ['Informazione falsa condivisa in buona fede', 'Una notizia vera ma vecchia', 'Un errore di battitura in un articolo'], 20),
 ('definizione', 5, 'In che cosa consiste la «lettura laterale»?', 'Aprire altre schede per scoprire chi c’è dietro un sito', ['Leggere solo i titoli di una pagina', 'Leggere la pagina da destra a sinistra', 'Fidarsi dell’aspetto professionale del sito'], 20),
 ('trova l’errore', 5, '«Il chatbot ha risposto sicuro e con un link, quindi è giusto». Dov’è l’errore?', 'Il tono sicuro non prova nulla: il link va aperto e controllato', ['I chatbot non danno mai link', 'I link dei chatbot sono sempre falsi', 'Niente: un link è una garanzia'], 30),
 # --- Capitolo 6 (7)
 ('definizione', 6, 'Che cos’è l’handover?', 'Il passaggio del telefono da una cella all’altra', ['Il passaggio dal 4G al 5G', 'Lo scambio di chiavi di HTTPS', 'Lo spegnimento di un’antenna'], 20),
 ('storia', 6, 'Quale generazione ha portato Internet sul telefono?', 'La 3G', ['La 1G', 'La 2G', 'La 5G'], 20),
 ('vero/falso', 6, 'Vero o falso: «le onde del 5G possono danneggiare il DNA»', 'Falso: sono onde non ionizzanti', ['Vero: sono come i raggi X', 'Vero: solo a 26 GHz', 'Falso: il 5G non usa onde elettromagnetiche'], 20),
 ('storia', 6, 'Che cosa fece il malware Mirai nel 2016?', 'Usò videocamere con password predefinite per attaccare un DNS', ['Rubò i dati dei telefoni 5G', 'Spense i data center di Google', 'Cancellò i siti dei comuni'], 30),
 ('riconoscimento', 6, 'Classroom è un esempio di…', 'SaaS', ['IaaS', 'PaaS', 'grid computing'], 20),
 ('confronto', 6, 'Che cosa distingue il grid computing dal cloud?', 'Unisce i computer di tanti enti per un unico calcolo enorme', ['È un servizio a pagamento di un solo fornitore', 'Funziona solo senza Internet', 'Serve per la posta elettronica'], 30),
 ('perché', 6, 'Perché l’edge computing riduce la latenza?', 'Elabora i dati vicino a dove nascono', ['Usa data center più grandi', 'Manda tutto il video al cloud', 'Usa solo cavi in rame'], 20),
 # --- Capitolo 7 (3)
 ('situazione', 7, 'Metti il telefono in modalità aereo e chiedi qualcosa a un chatbot. Che cosa succede?', 'Non risponde: il modello gira in un data center', ['Risponde lo stesso, il modello è nel telefono', 'Risponde più lentamente via satellite', 'Risponde solo con testi brevi'], 20),
 ('trova l’errore', 7, '«Una rete neurale è una rete di computer». Che cosa c’è di sbagliato?', 'È un modello matematico, un programma', ['È una rete di telefoni', 'È una rete di cavi in fibra', 'Niente: è la definizione corretta'], 30),
 ('definizione', 7, 'Che cos’è il «collasso del modello»?', 'La qualità cala se i modelli imparano da testi scritti da IA', ['Un guasto dei data center dell’IA', 'Il blocco di un chatbot senza Internet', 'La fine delle batterie di un telefono'], 30),
]
# capitolo 4 ha 15 paragrafi: due domande in più
D.insert(33, ('situazione', 4, 'Chiudi il banner dei cookie con la X. Che cosa hai scelto?', 'Rifiuto dei cookie non tecnici', ['Accetto tutti i cookie', 'Accetto solo i cookie di terze parti', 'Nessuna scelta: il banner riappare'], 20))
D.insert(34, ('trova l’errore', 4, '«Il deep web è la parte illegale di Internet». Dov’è l’errore?', 'Il deep web è ciò che non è indicizzato, come la posta', ['Il deep web è più piccolo del dark web', 'Il deep web si raggiunge solo con Tor', 'Niente: deep web e dark web sono uguali'], 30))
assert len(D) == 50, len(D)
random.seed(7)
pos = [1] * 13 + [2] * 13 + [3] * 12 + [4] * 12
random.shuffle(pos)
out = []
for (tipo, cap, q, giusta, altre, t), p in zip(D, pos):
    r = altre[:]; r.insert(p - 1, giusta)
    out.append({'domanda': q, 'risposte': r, 'corretta': p, 'tempo': t, 'tipo': tipo, 'capitolo': cap})
json.dump(out, open('domande.json', 'w'), ensure_ascii=False, indent=1)
from collections import Counter
print(Counter(x['tipo'] for x in out)); print(Counter(x['capitolo'] for x in out))
