# Slide di Presenta in aula · Capitolo 6 · Il 5G, l'Internet of Things e il Cloud Computing
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Reti e Internet')
c = Capitolo(6)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('La rete mobile, miliardi di oggetti connessi e il calcolo a distanza.', '5G, Internet of Things e cloud'),
 c.DOM(0),
 # 6.1
 c.SEZ('6.1', 'Celle, antenne e handover'),
 {'tipo': 'punti', 'titolo': 'La rete cellulare', 'punti': [['hexagon', 'Il territorio è diviso in **celle**, ognuna con un’antenna (**stazione radio base**)'], ['smartphone', 'Il telefono parla con l’antenna della **sua** cella'], ['repeat', 'Ti sposti? Passa alla cella vicina **senza interrompere**: **handover**']], 'foto': c.FO('F9.1.1')},
 {'tipo': 'confronto', 'titolo': 'Celle grandi e celle piccole', 'a': {'icona': 'trees', 'titolo': 'Campagna', 'righe': ['• pochi utenti', '• **celle grandi**, poche antenne']},
  'b': {'icona': 'building-2', 'titolo': 'Città', 'tono': 'buono', 'righe': ['• tanti utenti', '• **celle piccole**, tante antenne']},
  'verdetto': 'Ogni antenna ha una **capacità limitata** che divide tra i telefoni della sua cella'},
 c.AN('F9.1.2', 'Celle e handover'),
 c.ERR(0),
 # 6.2
 c.SEZ('6.2', 'Una generazione ogni dieci anni'),
 {'tipo': 'tabella', 'titolo': 'Dalla 1G alla 5G', 'righe': [['Generazione', 'In Italia', 'Novità', 'Banda'], ['**1G** (TACS)', 'fine ’80 – ’90', 'mobile **analogica**, solo voce', '—'], ['**2G** (GSM)', 'anni ’90', '**digitale**, **SMS**, primi dati', 'decine di kbps'],
   ['**3G** (UMTS)', 'anni 2000', '**Internet sul telefono**, videochiamate', 'alcuni Mbps'], ['**4G** (LTE)', 'dal 2012', 'streaming, social, app', 'decine–centinaia di Mbps'], ['**5G**', 'dal 2019', '**latenza bassissima**, tantissimi dispositivi', 'centinaia di Mbps – oltre 1 Gbps']]},
 {'tipo': 'foto', 'titolo': 'Martin Cooper', 'foto': [c.FO('F9.2.2', 'Con il DynaTAC, nel 2007')]},
 c.ERR(1),
 {'tipo': 'punti', 'titolo': 'Esempio: lo smartphone', 'punti': [['smartphone', '**iPhone** 2007 e primi **Android** 2008: arrivano con il **3G**'], ['video', 'Senza il **4G** niente Instagram e TikTok come li conosciamo']]},
 c.DOM(1),
 # 6.3
 c.SEZ('6.3', 'Paure e fisica'),
 {'tipo': 'punti', 'titolo': 'Partire dalla fisica', 'punti': [['triangle-alert', '2020: la falsa notizia «il 5G diffonde il COVID-19» · antenne incendiate'], ['waves', 'Onde **non ionizzanti**, come radio, TV, Wi-Fi'], ['dna', '**Non hanno abbastanza energia** per danneggiare il DNA (a differenza dei raggi X)'], ['thermometer', 'Unico effetto accertato, a intensità molto alte: **riscaldamento** → **limiti di esposizione**']]},
 c.SC('F9.4.1', 'Non ionizzanti e ionizzanti'),
 {'tipo': 'punti', 'titolo': 'Un dato controintuitivo', 'punti': [['radio-tower', '**Più antenne vicine** = meno esposizione per chi telefona'], ['signal-low', 'Antenna lontana → il telefono trasmette **alla massima potenza**, accanto alla testa'], ['signal-high', 'Antenna vicina → basta **pochissima potenza**']]},
 c.DOM(2),
 # 6.4
 c.SEZ('6.4', 'Quando a comunicare sono le cose'),
 c.DOM(3),
 {'tipo': 'punti', 'titolo': 'L’Internet of Things (IoT)', 'punti': [['cpu', 'Oggetti fisici con **sensori**, **calcolo** e **connessione**'], ['activity', 'Raccolgono dati, li scambiano via Internet e **agiscono**, spesso da soli'], ['sparkles', 'Oggetti **smart** o **connessi**'], ['users', 'Gli oggetti connessi sono già **più delle persone**: decine di miliardi (indicativo)']]},
 c.AN('F9.6.2', 'Il termostato smart'),
 {'tipo': 'storia', 'titolo': 'Una lattina connessa', 'anno': '1999', 'icona': 'history', 'punti': [['user', '**Kevin Ashton** usa per primo «Internet of Things» (tag RFID nei magazzini)'], ['cup-soda', 'Primi anni ’80: un **distributore di Coca-Cola** della Carnegie Mellon su ARPANET'], ['thermometer-snowflake', 'Gli studenti controllavano da lontano se c’erano lattine fredde']]},
 c.ERR(2),
 # 6.5
 c.SEZ('6.5', 'Casa e città intelligenti'),
 {'tipo': 'punti', 'titolo': 'La casa intelligente (*smart home*)', 'punti': [['house', 'Termostati, lampadine, prese, serrature, videocamere, robot, elettrodomestici'], ['mic', 'Gli **assistenti vocali** fanno da telecomando'], ['leaf', '**Risparmio energetico**'], ['accessibility', '**Autonomia** di anziani e persone con disabilità']], 'foto': c.FO('F9.8.1')},
 {'tipo': 'punti', 'titolo': 'La città intelligente (*smart city*)', 'punti': [['car', '**Parcheggi** che segnalano i posti liberi'], ['lamp', '**Lampioni** che si accendono quando passa qualcuno'], ['trash-2', '**Cassonetti** che avvisano quando sono pieni'], ['traffic-cone', '**Semafori** regolati dal traffico · qualità dell’aria']], 'foto': c.FO('F9.8.2')},
 c.DOM(4, risposta=''),
 # 6.6
 c.SEZ('6.6', 'Una porta in più verso la rete'),
 {'tipo': 'tessere', 'titolo': 'Perché gli oggetti IoT sono rischiosi', 'tessere': [['key', 'Password predefinite', 'uguali per tutti, mai cambiate'], ['refresh-cw', 'Aggiornamenti', 'che non arrivano mai'], ['lock-open', 'Niente cifratura', 'dati inviati in chiaro']]},
 {'tipo': 'storia', 'titolo': 'Mirai', 'anno': '2016', 'icona': 'bug', 'punti': [['cctv', 'Infetta centinaia di migliaia di **videocamere** con password come “admin/admin”'], ['network', 'Diventano una **botnet** e bombardano il DNS di **Dyn**'], ['globe', 'Per ore irraggiungibili Twitter, Netflix, Spotify'], ['eye-off', 'I proprietari **non se ne accorgono**']]},
 {'tipo': 'punti', 'titolo': 'Privacy', 'punti': [['house', 'Quando sei in casa, che cosa dici, come dormi, quanto consumi'], ['file-text', 'Chi possiede i dati e a chi li cede: **condizioni d’uso** che nessuno legge'], ['cctv', 'Videocamere e campanelli **riprendono altre persone**']]},
 c.DOM(5),
 # 6.7
 c.SEZ('6.7', 'Affittare invece di comprare'),
 c.DOM(6),
 {'tipo': 'punti', 'titolo': 'Il cloud computing', 'punti': [['cloud', 'Usare via Internet risorse nei **data center di un fornitore**'], ['hard-drive', 'Spazio, potenza di calcolo, programmi'], ['coins', 'Si **affitta** e si paga **quanto si usa**, come l’elettricità'], ['server', 'Dentro la nuvola: **data center, server e cavi reali**']]},
 {'tipo': 'tabella', 'titolo': 'I modelli di servizio', 'righe': [['Modello', 'Che cosa si affitta', 'Chi lo usa', 'Esempi'], ['**IaaS**', 'macchine virtuali, dischi, reti', 'tecnici', 'AWS EC2, Google Compute Engine, Azure'], ['**PaaS**', 'una piattaforma per i propri programmi', 'programmatori', 'Google App Engine, Firebase'], ['**SaaS**', 'un programma finito', 'tutti', 'Gmail, Documenti, Classroom, Canva, Netflix']]},
 {'tipo': 'tessere', 'titolo': 'Esempio: la pizza', 'tessere': [['house', 'Fatta in casa', 'tutto tuo: i tuoi server'], ['chef-hat', 'IaaS', 'noleggi la cucina, la pizza la fai tu'], ['flame', 'PaaS', 'impasto e forno pronti, metti il condimento'], ['pizza', 'SaaS', 'ordini la pizza pronta']], 'nota': 'Limite: nel cloud si possono **combinare** i modelli'},
 {'tipo': 'confronto', 'titolo': 'Vantaggi e rischi', 'a': {'icona': 'circle-check', 'titolo': 'Vantaggi', 'tono': 'buono', 'righe': ['+ nessun server da comprare', '+ si paga quanto si usa', '+ accesso ovunque', '+ collaborazione in tempo reale', '+ backup gestiti da professionisti']},
  'b': {'icona': 'triangle-alert', 'titolo': 'Rischi', 'righe': ['- **senza Internet** non si lavora', '- **dipendenza** dal fornitore', '- **privacy**: dati su computer altrui', '- un guasto ferma migliaia di clienti', '- un account violato espone tutto']}},
 {'tipo': 'punti', 'titolo': 'In laboratorio: Google Drive', 'punti': [['folder', 'Cartella di gruppo con permessi diversi: visualizzatore, commentatore, editor'], ['file-text', 'Lavorare **insieme** su un Documento Google'], ['history', 'Guardare la **cronologia delle versioni**'], ['message-circle-question', 'Dov’è il documento? Senza connessione? Chi lo vede?']]},
 c.ERR(3),
 c.DOM(7),
 # 6.8
 c.SEZ('6.8', 'Tanti computer per un problema enorme'),
 {'tipo': 'punti', 'titolo': 'Il grid computing', 'punti': [['globe', 'Clima del pianeta, collisioni del CERN, proteine: **troppo per un solo computer**'], ['grid-3x3', 'Unisce la potenza di **tanti computer**, anche di proprietari diversi'], ['puzzle', 'Un problema enorme diviso in **pezzi indipendenti**'], ['plug', 'Il nome dalla **rete elettrica** (*power grid*)']]},
 {'tipo': 'punti', 'titolo': 'Esempi', 'punti': [['atom', '**Worldwide LHC Computing Grid**: ~170 centri in più di 40 paesi, Italia compresa (INFN)'], ['house', '**Folding@home**: i computer di casa di milioni di volontari'], ['trophy', 'Nel 2020 più potente dei più grandi supercomputer']], 'foto': c.FO('F4.6.1')},
 c.AN('F4.6.2', 'Un calcolo diviso tra tanti'),
 {'tipo': 'tabella', 'titolo': 'Cloud e grid', 'righe': [['', 'Cloud computing', 'Grid computing'], ['Idea', 'affittare risorse di un fornitore', 'unire risorse di tanti'], ['Proprietà', 'un solo fornitore', 'molti enti'], ['Utenti', 'chiunque, a pagamento', 'soprattutto ricerca'], ['Lavoro', 'servizi di tutti i giorni', 'calcoli enormi divisibili'], ['Esempi', 'Google Drive, AWS', 'griglia del CERN, Folding@home']]},
 c.ERR(4),
 c.DOM(8),
 # 6.9
 c.SEZ('6.9', 'Elaborare dove nascono i dati'),
 {'tipo': 'tessere', 'titolo': 'Mandare tutto nel cloud? Tre problemi', 'tessere': [['timer', 'Latenza', 'andare e tornare richiede tempo'], ['gauge', 'Banda', 'una videocamera che invia tutto consuma moltissimo'], ['lock', 'Privacy', 'i dati escono da casa o dalla fabbrica']],
  'nota': 'L’**edge computing** elabora **vicino** all’oggetto e manda al cloud **solo i risultati**'},
 c.AN('F9.9.1', 'Lontano o vicino?'),
 {'tipo': 'tabella', 'titolo': 'Cloud ed edge', 'righe': [['', 'Cloud', 'Edge'], ['Dove', 'data center lontani', 'vicino all’oggetto'], ['Latenza', 'più alta', 'bassissima'], ['Dati in rete', 'tutti', 'solo i risultati'], ['Potenza', 'enorme', 'limitata'], ['Senza connessione', 'non funziona', 'continua a funzionare']]},
 {'tipo': 'punti', 'titolo': 'Complementari', 'punti': [['zap', 'Decisioni rapide **sul bordo**, analisi pesanti **nel cloud**'], ['car', 'Auto a guida assistita: frena **da sola** in pochi ms (edge)'], ['cloud', 'I dati di migliaia di auto migliorano il software (cloud)']]},
 c.ERR(5),
 c.DOM(9),
]
c.scrivi(OUT, S)
