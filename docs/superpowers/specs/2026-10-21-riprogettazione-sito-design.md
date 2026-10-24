# Riprogettazione del sito didattico: pagine di studio e Presenta in aula

Data: 21 ottobre 2026. Autore delle decisioni: Prof. Patrick. Primo banco di prova: capitolo 4 di Reti e Internet.

## Perché

Il sito "Informatica con il Prof. Patrick" ha due usi diversi, oggi poco distinti:

- **Pagina di studio** (sito): la leggono gli studenti a casa, da PC e da telefono, per recuperare una lezione persa e per studiare.
- **Presenta in aula** (slide): la proietta il professore sulla LIM durante la lezione.

Problemi che Patrick vede oggi:

1. Il **testo** suona "finto", si perde in dettagli inutili e ripete.
2. Le **animazioni** sono di qualità troppo bassa: devono spiegare un processo, non decorare.
3. **Presenta in aula** è confusa, troppo testuale, poco grafica.
4. Le **immagini** nella pagina non sono sempre usate bene (per esempio la foto del cavo sottomarino è tagliata in un riquadro 4:3).

La grafica generale delle pagine di lezione va invece "abbastanza bene" e **resta** (colori, caratteri, menu, riquadri). Patrick è aperto a miglioramenti, ma i mockup di stile completamente nuovi non lo hanno convinto.

## Obiettivi

- Pagina di studio e Presenta in aula **chiaramente distinte**: la prima si legge e si ripassa, la seconda si guarda.
- Testo riscritto: asciutto, concreto, naturale, senza ripetizioni.
- Animazioni nuove, di qualità alta, che spiegano un processo passo per passo.
- Un sistema che si **applica a tutte le pagine e a tutti i capitoli**, non ritocchi pagina per pagina.
- La **stessa fonte di dati** per pagina e slide, per restare coerenti e lavorare meno.

## Non obiettivi

- Non cambiare l'identità grafica del sito (niente quaderno, pop, scuro-tecnico: scartati).
- Non rifare la home e la pagina del programma.
- Non toccare dispensa Word e Kahoot in questa fase (restano come sono).
- Non rifare tutto in un colpo: si parte da un capitolo pilota.

## Cosa sarebbe un fallimento

- Una pagina bella ma meno leggibile su telefono.
- Slide che tornano piene di frasi.
- Immagini con punti numerati sbagliati o tagliati.
- Un sistema che funziona solo per il capitolo 4.

## Cosa è stato deciso

### Pagina di studio

Si tiene lo stile attuale del sito (vero CSS: `reti-internet/assets/sito.css`). Si aggiungono solo:

1. **«In breve»** all'inizio di una sezione (h2), con fino a tre numeri o dati chiave, nei colori dei riquadri esistenti. Compare **solo dove ci sono numeri o un'idea chiave**, non in tutte le sezioni, per non ripetere il riepilogo finale di capitolo (`ricorda`). Nessun tempo di lettura.
2. **Immagini con punti numerati**, per le immagini che servono a "leggere" un oggetto (cavo, data center, e simili). I numeri compaiono sull'immagine, in una legenda sotto, e come cerchietti nel testo che rimandano a loro. Le immagini **non vengono mai tagliate**: restano nelle proporzioni vere (il contenitore prende il rapporto dell'immagine e i punti sono in percentuale, quindi restano allineati anche su telefono). Se un'immagine è composta da due metà (come il cavo: schema a sinistra e cavo vero a destra) i punti con lo stesso numero indicano lo stesso strato in entrambe.
3. Le altre foto restano come oggi (foto storiche o di contorno con didascalia, mappe a tutta larghezza) ma senza tagli.

Il mockup approvato è `.superpowers/brainstorm/1444-1792581957/content/tuo-sito-miglioramenti.html` (tema chiaro e scuro, PC e telefono).

Elementi **non** adottati, per scelta di Patrick: percorso a tappe del pacchetto, menu con pallini di avanzamento, quiz in fondo alla pagina, testo allineato a sinistra al posto del giustificato, titolo in carattere nuovo. (Il testo giustificato resta com'è.)

### Presenta in aula

- **Una slide, un'idea.** Poche parole, il resto lo dice il professore a voce; le spiegazioni lunghe stanno solo nella pagina di studio.
- **Slide di apertura di un tema (tipo A):** testo a **sinistra**, immagine reale a **destra**. Titolo come affermazione («Internet passa sotto il mare»), un numero o dato forte, al massimo una riga.
- **Foto annotata (tipo B):** l'immagine con i punti numerati, che compaiono a ogni clic, con la stessa numerazione della pagina.
- **Animazione a sé (tipo C):** una slide dedicata, a tutto schermo, subito dopo la slide con la foto. Non si mettono foto e schema nella stessa slide. Animazione di qualità molto più alta di quella del mockup, a passi con un clic per ogni passo.
- Immagine reale ovunque serva a far vedere ciò di cui si parla; mai la foto "di arredo". Non solo animazioni.
- Ritmo tipico di un argomento: slide di apertura (A), animazione (C), eventualmente foto annotata (B).

### Come si generalizza

- Le pagine e le slide nascono da `reti-internet/_sorgenti/contenuto.json` (7 capitoli, 92 figure: 45 foto, 34 animazioni, 13 schemi). Il sistema deve quindi essere fatto di **campi nei dati**, non di modifiche alle singole pagine:
  - un campo per il trattamento di una foto (da osservare con punti / storica / larga);
  - un campo con i punti di un'immagine (numero, posizione in percentuale, testo di legenda);
  - un campo facoltativo `inbreve` per sezione (fino a tre coppie numero + etichetta).
- Pagina e slide leggono gli stessi campi.
- Le animazioni usano **un solo kit grafico comune** (stesso stile, stessi comportamenti).
- Il motore delle slide è già condiviso (`assets/aula/`) e va tenuto allineato con la skill `2-sito-dispensa-quiz`.

## Piano di lavoro (ordine)

1. **Capitolo 4 completo come pilota**: pagina e slide insieme, testo riscritto, animazioni nuove, «In breve» e punti numerati dove servono.
2. Gli altri capitoli di Reti e Internet (1, 2, 3, 5, 6, 7).
3. Gli altri moduli (Sviluppo web front end, Introduzione all'AI), che hanno struttura simile.

## Vincoli

- Il sito è statico, ospitato su GitHub Pages (`il-prof-patrick.github.io`); niente backend.
- Funziona su PC e telefono, tema chiaro e scuro (il tema segue le impostazioni del dispositivo o la scelta dell'utente).
- Presenta in aula è un palco 1280×720 scalato a schermo intero (LIM).
- Le foto sono collegate da URL esterni (con fonte); alcune immagini hanno etichette in inglese: i punti numerati possono sostituirle, oppure si può rifare lo schema in italiano (da decidere).
- Le modifiche ai file non committati presenti oggi in `reti-internet` (capitoli 4, 5, 7 e sorgenti) sono lavoro di Patrick già in corso: vanno preservate.

## Lasciato a chi costruisce

- Struttura esatta dei nuovi campi nei dati e come i generatori (`main.js`, `slidelib.py`, `slide_XX.py`) li leggono.
- Posizione precisa dei punti sulle immagini (si controlla guardando ogni immagine).
- Dettagli di animazione, tempi, colori e tipografia delle slide, nel rispetto dello stile del sito.
- Bozza di «In breve» per ogni sezione, da far approvare a Patrick.
- Riscrittura del testo: bozza proposta, approvazione di Patrick.

## Scelte del progettista (non ancora confermate da Patrick: da controllare)

- **Animazioni, tecnica:** SVG e JavaScript scritti a mano sul kit esistente (`assets/scena.js`), senza librerie esterne e senza passaggi di compilazione, perché il sito è statico. Nel pilota si rifanno le **5 animazioni del capitolo 4** (F4.2.3, F4.2.8, F2.10.2, F5.5.1, F5.8.1); le altre 29 dopo, capitolo per capitolo, e solo quelle che spiegano un processo.
- **Immagini:** restano collegate da URL esterni, come oggi. Larghezza e altezza di ogni immagine si salvano nei dati (si leggono una volta), così il rapporto non dipende dal caricamento. Etichette in inglese sullo schema del cavo: restano, i punti numerati affiancano le etichette; lo schema in italiano è un'idea per dopo.
- **Punti sulle immagini:** li posiziona il costruttore, immagine per immagine, e li verifica con una schermata; Patrick controlla il risultato.
- **Slide:** il motore `assets/aula/` riceve nuovi modelli di slide (A: testo a sinistra e immagine a destra; B: foto annotata; C: animazione a tutto schermo). La generazione resta in Python (`slidelib.py`, `slide_XX.py`).
- **Soglie di accettazione:** al massimo circa 25 parole di testo per slide (titoli esclusi); cerchietti numerati di almeno 24 px; pagina leggibile senza scorrimento orizzontale fino a 360 px di larghezza; punti verificati su PC e telefono, tema chiaro e scuro.
- **Lavoro in corso di Patrick (file modificati non committati):** si costruisce sopra, senza committarlo e senza ripartire da zero; le pagine HTML e i JS generati si rigenerano con la pipeline esistente, non a mano.
- **Mockup di riferimento:** copia in `docs/superpowers/specs/2026-10-21-mockup-pagina-di-studio.html` (stile di «In breve» e dei cerchietti numerati) e schermata della pagina attuale in `2026-10-21-attuale-4-2.png`.
- **Skill `2-sito-dispensa-quiz`:** si aggiorna dopo che il pilota ha validato i nuovi campi.
