# Slide di Presenta in aula · Capitolo 5 · Fare ricerche nel web
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Reti e Internet')
c = Capitolo(5)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Come funziona un motore di ricerca, come cercare bene e come valutare ciò che si trova.'),
 c.DOM(0),
 # 5.1
 c.SEZ('5.1', 'Il lavoro si fa prima della domanda'),
 {'tipo': 'punti', 'titolo': 'Il motore di ricerca', 'punti': [['search', 'Raccoglie e cataloga **in anticipo** miliardi di pagine'], ['zap', 'Alla richiesta: le pagine **più pertinenti**, in ordine, in una frazione di secondo'], ['globe', '**Google** (di gran lunga), **Bing**, DuckDuckGo · Yandex e Baidu in alcuni paesi']]},
 {'tipo': 'tessere', 'titolo': 'Tre fasi', 'tessere': [['bug', '1 · Scansione (*crawling*)', 'i **crawler** visitano le pagine, le copiano, seguono i link'], ['library', '2 · Indicizzazione', 'un enorme **indice**: per ogni parola, le pagine che la contengono'], ['list-ordered', '3 · Posizionamento (*ranking*)', 'trova le pagine candidate e le ordina nella **SERP**']],
  'nota': 'Solo la terza fase avviene **mentre aspetti** il risultato'},
 c.AN('F6.1.1', 'Il motore lavora prima'),
 {'tipo': 'punti', 'titolo': 'Come si decide l’ordine', 'punti': [['mouse-pointer-click', 'Quasi nessuno guarda **oltre la prima pagina**'], ['lock', 'Criteri **segreti** e mutevoli · algoritmo **PageRank** di Google'],
   ['list', 'Corrispondenza alle parole · **autorevolezza** · data · velocità sul telefono'], ['user', '**Chi** cerca: lingua, posizione, ricerche precedenti']]},
 c.ERR(0),
 c.DOM(1),
 # 5.2
 c.SEZ('5.2', 'Chi paga per stare in alto'),
 {'tipo': 'confronto', 'titolo': 'Organici e sponsorizzati', 'a': {'icona': 'search', 'titolo': 'Risultati organici', 'tono': 'buono', 'righe': ['• scelti dall’**algoritmo**', '• in base alla pertinenza']},
  'b': {'icona': 'badge-euro', 'titolo': 'Risultati sponsorizzati', 'righe': ['• **annunci**: le aziende pagano per stare in alto', '• di solito **a clic**', '- etichetta “Sponsorizzato” **facile da non notare**']}},
 {'tipo': 'foto', 'titolo': 'Una pagina dei risultati', 'foto': [c.FO('X5.2.1', 'In cima gli annunci sponsorizzati')]},
 {'tipo': 'punti', 'titolo': 'Il modello di business', 'punti': [['coins', 'La ricerca è **gratis** perché le aziende pagano per raggiungerti'], ['target', 'Ti raggiungono **nel momento esatto** in cui cerchi'], ['eye', 'Più il motore ti conosce, più gli annunci **valgono**']]},
 # 5.3
 c.SEZ('5.3', 'Le parole giuste'),
 {'tipo': 'punti', 'titolo': 'Le regole di base', 'punti': [['key', '**Parole chiave** specifiche: “velocità FTTC distanza armadio”'], ['refresh-cw', '**Aggiungere o togliere parole** in base ai primi risultati'],
   ['languages', 'Argomenti tecnici: cercare **anche in inglese**'], ['filter', 'Usare i **filtri**: immagini, notizie, ultimo anno, data']]},
 {'tipo': 'confronto', 'titolo': 'Cercare con le immagini', 'a': {'icona': 'image', 'titolo': 'Ricerca per immagini', 'righe': ['• dalle **parole** alle immagini']},
  'b': {'icona': 'scan-search', 'titolo': 'Ricerca inversa', 'tono': 'buono', 'righe': ['• da un’**immagine** a dove compare, da quando, in quali versioni', '• Google Lens', '+ scopri se una foto “di attualità” è **vecchia** o fuori contesto']}},
 # 5.4
 c.SEZ('5.4', 'Falso, fuorviante, manipolato'),
 c.DOM(2),
 {'tipo': 'confronto', 'titolo': 'Misinformazione e disinformazione', 'a': {'icona': 'user', 'titolo': 'Misinformazione', 'righe': ['• falsa, ma condivisa **in buona fede**']},
  'b': {'icona': 'triangle-alert', 'titolo': 'Disinformazione', 'tono': 'vecchio', 'righe': ['• falsa, **creata apposta**', '• per ingannare, guadagnare, influenzare']}},
 {'tipo': 'tessere', 'titolo': 'Che cosa circola', 'tessere': [['newspaper', 'Fake news', 'notizie inventate o distorte'], ['mouse-pointer-click', 'Clickbait', '«Non crederai a che cosa è successo…»'], ['image', 'Fuori contesto', 'foto vera, ma di un altro anno o paese'], ['bot', 'Generati dall’IA', 'immagini, audio, video falsi ma realistici']],
  'nota': 'Le false corrono **più veloci**: sorprendono e suscitano **emozioni forti** (MIT, *Science*, 2018: le diffondono soprattutto persone, non bot)'},
 {'tipo': 'tabella', 'titolo': 'Prima di usare una fonte', 'righe': [['Domanda', 'Che cosa guardare'], ['**Chi** l’ha scritta?', 'autore, ente, testata, “chi siamo”, competenze'], ['**Quando**?', 'data di pubblicazione e aggiornamento'], ['**Perché**?', 'informare, vendere, convincere, fare clic? Tono emotivo?'], ['**Su che cosa si basa**?', 'fonti verificabili, dati, studi, link veri'], ['**Chi altro lo dice**?', 'altre fonti **indipendenti**']]},
 {'tipo': 'punti', 'titolo': 'La lettura laterale', 'punti': [['panels-top-left', 'Invece di giudicare la pagina dal suo aspetto…'], ['search', '…si aprono **altre schede** per cercare **chi c’è dietro**'], ['triangle-alert', 'Un sito serissimo può appartenere a chi **vende** il prodotto di cui parla bene']]},
 {'tipo': 'punti', 'titolo': 'Wikipedia', 'punti': [['users', 'Scritta da volontari, **chiunque può modificarla**'], ['circle-check', '**Ottimo punto di partenza**: voci controllate, ogni affermazione con una **fonte**'], ['circle-x', '**Non da citare da sola**: errori nelle voci meno seguite, cambia ogni giorno'], ['history', 'Guarda le schede **Cronologia** e **Discussione**']], 'nota': 'Leggi la voce, poi vai **alle fonti in fondo**'},
 c.ERR(1),
 {'tipo': 'punti', 'titolo': 'L’algoritmo di raccomandazione', 'punti': [['list', 'Il **feed** e la pagina “Per te”: nessuno può vedere tutto'], ['bot', 'Un programma di **IA** sceglie ciò che guarderai a lungo, commenterai, condividerai'],
   ['timer', 'Pesano i segnali **che non controlli**: i secondi su un video, se lo riguardi'], ['magnet', 'Criterio principale: l’**engagement**, ciò che ti trattiene']]},
 c.AN('F8.3.1', 'Come il feed impara'),
 {'tipo': 'punti', 'titolo': 'Bolle e camere dell’eco', 'punti': [['circle-dot', '**Bolla dei filtri**: sempre più contenuti simili a quelli già apprezzati'], ['users', '**Camere dell’eco**: gruppi in cui tutti la pensano allo stesso modo e si rafforzano'], ['volume-x', 'Le idee diverse non arrivano, o arrivano come **caricatura**']]},
 c.ERR(2),
 c.DOM(3),
 {'tipo': 'tessere', 'titolo': 'Verificare: il *fact-checking*', 'tessere': [['hand', '1 · Fermati', 'un’emozione forte è un campanello d’allarme'], ['search', '2 · Guarda la fonte', 'chi lo dice?'], ['newspaper', '3 · Cerca altrove', 'lo riportano testate serie?'], ['scan-search', '4 · Controlla le immagini', 'ricerca inversa'], ['calendar', '5 · Guarda la data', 'oggi o anni fa?']],
  'nota': 'Testate dedicate: **Pagella Politica, Facta, Open Fact-checking**'},
 # 5.5
 c.SEZ('5.5', 'Quando a rispondere è un’IA'),
 c.DOM(4),
 {'tipo': 'confronto', 'titolo': 'Motore di ricerca e chatbot', 'a': {'icona': 'search', 'titolo': 'Motore di ricerca', 'righe': ['• indica **dove** trovare l’informazione', '• un elenco di link']},
  'b': {'icona': 'bot', 'titolo': 'Chatbot', 'tono': 'buono', 'righe': ['• **scrive la risposta** al posto nostro', '• anche in cima ai risultati dei motori']}},
 {'tipo': 'punti', 'titolo': 'Come “sa” le cose un chatbot', 'punti': [['brain', '**Modello linguistico** (*Large Language Model*, LLM) addestrato su enormi quantità di testi'], ['text-cursor', 'Ha imparato a **prevedere la parola successiva**'], ['triangle-alert', '**Non sa se è vero**: scrive la risposta **più plausibile**']]},
 {'tipo': 'punti', 'titolo': 'La RAG (*Retrieval-Augmented Generation*)', 'punti': [['search', 'Prima **cerca sul web**, poi scrive usando le pagine trovate'], ['link', 'Cita le fonti con dei link'], ['circle-check', 'Riduce le **allucinazioni**…'], ['circle-x', '…**ma non le elimina**: pagine sbagliate o riassunte male']]},
 c.AN('F6.7.1', 'A memoria o cercando prima?'),
 {'tipo': 'tessere', 'titolo': 'Usare bene l’IA per cercare', 'tessere': [['link', 'Chiedi le fonti', 'e aprile davvero'], ['hash', 'Verifica i dettagli', 'numeri, date, nomi, citazioni'], ['compass', 'Per orientarti', 'capire e trovare parole chiave; per verificare, il motore e le fonti'], ['user-lock', 'Niente dati personali', 'né tuoi né altrui']]},
 c.ERR(3),
]
c.scrivi(OUT, S)
