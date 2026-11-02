# Slide di Presenta in aula · Capitolo 3 · HTML: base (dal capitolo 2 del Word)
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Sviluppo Web - Front end')
c = Capitolo(3, da=2)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Testo, elenchi, collegamenti, immagini e tabelle: i mattoni di ogni pagina.'),
 # 3.1 (Word 2.3)
 c.SEZ('2.3', 'Titoli, paragrafi, enfasi'),
 c.COD(['<h1>Le mie ricette</h1>', '  <h2>Primi piatti</h2>', '    <h3>Pasta alla carbonara</h3>', '    <h3>Risotto ai funghi</h3>', '  <h2>Dolci</h2>', '    <h3>Tiramisù</h3>'], 'I titoli: da h1 a h6', [
   ['list', '`h1` titolo principale, `h2` sezioni, `h3` sottosezioni…'], ['book-open', 'Descrivono la **struttura**, come l’indice di un libro: non la grandezza'], ['circle-check', '**Un solo `h1`** per pagina, **nessun livello saltato**'], ['ear', 'Gli screen reader **saltano da un titolo all’altro**; anche Google li usa']]),
 c.ERR(7),
 {'tipo': 'tessere', 'titolo': 'Paragrafi, a capo e linee', 'tessere': [['file-text', '`<p>`', 'il **paragrafo**'], ['corner-down-left', '`<br>`', '**a capo** nello stesso paragrafo: indirizzi, poesie'], ['minus', '`<hr>`', '**cambio di argomento**: linea orizzontale']]},
 c.COD(['<p>Questa frase', 'è scritta', 'su tre righe.</p>', '<!-- nel browser: "Questa frase è scritta su tre righe." -->'], 'Gli spazi bianchi si riducono a uno', [
   ['minus', 'Spazi, tabulazioni e a capo diventano **un solo spazio**'], ['code', 'Così si può **indentare** senza cambiare l’aspetto']]),
 c.ERR(8),
 {'tipo': 'punti', 'titolo': 'Enfasi: significato o aspetto?', 'punti': [
   ['triangle-alert', '`<strong>` = **importanza** · `<em>` = **enfasi** (l’accento a voce alta): gli screen reader possono pronunciarli diversamente'], ['paintbrush', '`<b>` e `<i>` = solo grassetto e corsivo, **senza significato**'], ['languages', '`<i>` per termini stranieri, nomi scientifici, titoli di opere']]},
 {'tipo': 'tabella', 'titolo': 'I tag del testo (1)', 'righe': [['Tag', 'Significato', 'Esempio'], ['`<strong>`', 'importanza, serietà, urgenza', 'Non toccare: **alta tensione**'], ['`<em>`', 'enfasi che cambia il senso', 'Io *non* ho detto questo'], ['`<b>`', 'evidenziato, senza importanza', 'nome del prodotto in una recensione'], ['`<i>`', 'voce o tono diverso', '*Homo sapiens*, il *download*'], ['`<mark>`', 'rilevante in quel contesto', 'parole cercate nei risultati'], ['`<small>`', 'note a margine, avvertenze', '© 2026, tutti i diritti riservati']]},
 {'tipo': 'tabella', 'titolo': 'I tag del testo (2)', 'righe': [['Tag', 'Significato', 'Esempio'], ['`<sub>` `<sup>`', 'pedice e apice', 'H₂O, x²'], ['`<code>`', 'codice in una frase', 'Il tag `<p>`'], ['`<pre>`', 'testo preformattato', 'blocchi di codice'], ['`<blockquote>`', 'citazione lunga a blocco (con `cite`)', 'una citazione di un autore'], ['`<q>`', 'citazione breve (aggiunge le virgolette)', 'Disse «Eureka»'],
   ['`<abbr>`', 'abbreviazione (con `title`)', '`<abbr title="Uniform Resource Locator">URL</abbr>`'], ['`<time>`', 'data leggibile anche dalle macchine', '`<time datetime="2026-10-07">`'], ['`<del>` `<ins>`', 'testo cancellato e inserito', 'Prezzo: 30 € → 20 €']]},
 c.DOM(2),
 {'tipo': 'tabella', 'titolo': 'Entità: i caratteri speciali', 'righe': [['Entità', 'Carattere', 'Quando serve'], ['`&lt;` e `&gt;`', '< e >', 'mostrare un tag come testo'], ['`&amp;`', '&', 'la «e commerciale» stessa'], ['`&quot;`', '"', 'virgolette in un valore di attributo'], ['`&nbsp;`', 'spazio indivisibile', 'tiene unite «10 kg», «pag. 5»'], ['`&copy;` `&reg;` `&trade;`', '© ® ™', 'diritti e marchi'], ['`&euro;`', '€', 'con UTF-8 si può anche scrivere direttamente']]},
 {'tipo': 'punti', 'titolo': 'Quando servono davvero', 'punti': [
   ['code', 'Se scrivi `<` il browser crede che inizi un tag: serve l’**entità**'], ['languages', 'Con **UTF-8** lettere accentate e quasi tutti i simboli si scrivono direttamente'], ['hash', 'Le entità servono soprattutto per `<`, `>`, `&` e lo spazio indivisibile']]},
 c.ERR(9),
 # 3.2 (Word 2.5)
 c.SEZ('2.5', 'Tre tipi di elenco'),
 {'tipo': 'tabella', 'titolo': 'Scegli in base all’ordine', 'righe': [['Tipo', 'Tag', 'Quando'], ['Puntato', '`<ul>` + `<li>`', 'l’ordine **non conta**: ingredienti, menu'], ['Numerato', '`<ol>` + `<li>`', 'l’ordine **conta**: passaggi, classifica'], ['Definizioni', '`<dl>` + `<dt>` + `<dd>`', 'glossari, scheda tecnica']]},
 c.COD(['<ol>', '  <li>Cuocere la pasta.</li>', '  <li>Rosolare il guanciale.</li>', '  <li>Mescolare uova e pecorino.</li>', '</ol>', '<dl>', '  <dt>HTML</dt>', '  <dd>Linguaggio di markup per la struttura.</dd>', '  <dt>CSS</dt>', '  <dd>Linguaggio per l’aspetto.</dd>', '</dl>'], 'Elenco numerato e di definizioni', [
   ['list-ordered', '`start="5"` parte da 5, `reversed` scende, `type` cambia lo stile'], ['paintbrush', 'Puntini e numeri si cambiano di solito con il CSS (`list-style`)']]),
 c.COD(['<ul>', '  <li>Frontend', '    <ul>', '      <li>HTML</li>', '      <li>CSS</li>', '    </ul>', '  </li>', '  <li>Backend</li>', '</ul>'], 'Elenchi annidati', [
   ['layers', 'Il sottoelenco va **dentro un `<li>`**'], ['circle-x', '`ul` e `ol` possono avere come figli **solo `li`**']]),
 c.ERR(11),
 {'tipo': 'punti', 'titolo': 'I menu sono elenchi', 'punti': [
   ['list', 'Una serie di link è un **elenco** di voci senza ordine'], ['link', 'Quasi tutti i menu sono un `ul` con un `li` per ogni link'], ['paintbrush', 'Il CSS li trasforma poi in barre orizzontali (7.1)']]},
 {'tipo': 'punti', 'titolo': 'In laboratorio: il curriculum', 'punti': [
   ['list', 'Le **competenze** con un `ul` annidato: Informatica › HTML, CSS, JavaScript; Lingue › Inglese, Francese'], ['trophy', 'La **top 5** dei film preferiti con un `ol` `reversed`'], ['book-open', 'Un piccolo **glossario** con `dl`'], ['zap', 'Con Emmet: `ul>li*3>a` genera tre voci con un link ciascuna']]},
 # 3.3 (Word 2.6)
 c.SEZ('2.6', 'Saltare da un documento all’altro'),
 c.COD(['<a href="https://it.wikipedia.org/wiki/World_Wide_Web">La voce di Wikipedia sul Web</a>'], 'I collegamenti', [
   ['link', '**Ipertesto**: l’idea che ha dato il nome all’HTML'], ['tag', '`<a>` (*anchor*) con l’attributo `href` (*hypertext reference*)'], ['mouse-pointer-click', 'Il contenuto di `a` è la parte **cliccabile**']]),
 {'tipo': 'punti', 'titolo': 'Il testo del link', 'punti': [
   ['circle-x', '«Clicca qui» non dice niente fuori dal contesto'], ['ear', 'Con lo screen reader spesso si ascolta **solo l’elenco dei link**'], ['search', 'Anche Google usa quel testo per capire la pagina di destinazione'], ['circle-check', '**Il testo del link deve dire dove porta**']]},
 {'tipo': 'confronto', 'titolo': 'Percorso assoluto o relativo?', 'a': {'icona': 'globe', 'titolo': 'Assoluto', 'righe': ['• **indirizzo completo**, dal protocollo', '• `https://www.scuola.it/corsi/index.html`', '• per i link **verso altri siti**']},
  'b': {'icona': 'folder', 'titolo': 'Relativo', 'tono': 'buono', 'righe': ['• **dove sta il file** a partire dalla pagina con il link', '• per i link **tra pagine dello stesso sito**', '• funziona sul tuo computer e online; la cartella si può spostare']}},
 {'tipo': 'tabella', 'titolo': 'Leggere un percorso relativo', 'righe': [['Percorso', 'Significato'], ['`contatti.html`', 'il file nella **stessa cartella**'], ['`img/logo.png`', 'il file dentro la sottocartella `img`'], ['`../index.html`', 'la **cartella superiore** (`..` = sali di un livello)'], ['`../../css/style.css`', 'sali di due livelli, poi entra in `css`'], ['`/img/logo.png`', 'dalla **radice del sito** (solo su un server)']]},
 c.AN('F2.6.1', 'Come si legge un percorso'),
 c.ERR(12), c.ERR(13),
 c.COD(['<a href="#ingredienti">Vai agli ingredienti</a>', '…', '<h2 id="ingredienti">Ingredienti</h2>', '…', '<a href="#">Torna su</a>'], 'Ancore: link a un punto della pagina', [
   ['anchor', '`#` + un **id**: porta al punto con quell’id'], ['list', 'Indici in cima alle pagine lunghe, pulsanti «torna su»'], ['link', 'Anche in un’altra pagina: `regolamento.html#orari`']]),
 {'tipo': 'tabella', 'titolo': 'Altri attributi e link speciali', 'righe': [['Codice', 'Che cosa fa'], ['`target="_blank"`', '**nuova scheda** · usalo con misura; i browser aggiungono `rel="noopener"`'], ['`href="mailto:…"`', 'apre la **posta** con il destinatario già scritto'], ['`href="tel:+39…"`', 'sul telefono avvia la **chiamata**'], ['`download`', '**scarica** il file invece di aprirlo']]},
 {'tipo': 'confronto', 'titolo': 'Link o pulsante?', 'a': {'icona': 'link', 'titolo': 'Un link porta da qualche parte', 'righe': ['• `<a href="…">`', '• cambia pagina o punto della pagina']},
  'b': {'icona': 'mouse-pointer-click', 'titolo': 'Un pulsante fa qualcosa', 'tono': 'buono', 'righe': ['• `<button>`', '• apre un menu, invia un modulo, cambia tema', '• meglio di `<a href="#">` con tastiera e screen reader']}},
 c.DOM(3),
 # 3.4 (Word 2.7)
 c.SEZ('2.7', 'Un file separato, con una descrizione'),
 c.COD(['<img src="img/tiramisu.jpg"', '     alt="Fetta di tiramisù con cacao in polvere su un piattino bianco"', '     width="800" height="600">'], 'Immagini', [
   ['image', '`<img>` è un elemento **vuoto**'], ['download', 'L’immagine **non sta nell’HTML**: è un file che il browser chiede al server (1.2)']]),
 {'tipo': 'tabella', 'titolo': 'Gli attributi di img', 'righe': [['Attributo', 'A che cosa serve'], ['`src`', 'il **percorso** del file (vale quanto detto sui percorsi relativi)'], ['`alt`', 'il **testo alternativo**: descrive l’immagine a chi non la vede'], ['`width` `height`', 'dimensioni originali **senza unità**: il browser riserva lo spazio e il testo non «salta»'], ['`loading="lazy"`', 'carica l’immagine **solo quando ci si sta per arrivare**']]},
 {'tipo': 'punti', 'titolo': 'Il testo alternativo', 'punti': [
   ['ear', '`alt` è **obbligatorio**: lo leggono gli screen reader'], ['image', 'Compare **al posto dell’immagine** se non si carica'], ['search', 'Lo usano i **motori di ricerca**'], ['pen-line', 'Descrive **ciò che l’immagine comunica**, in poche parole, senza «immagine di»']]},
 {'tipo': 'tabella', 'titolo': 'alt sbagliato, alt corretto', 'righe': [['Situazione', 'Sbagliato', 'Corretto'], ['Foto in un articolo', '`alt="foto1.jpg"`', '`alt="Studenti in laboratorio davanti ai computer"`'], ['Logo che porta alla home', '`alt="logo"`', '`alt="Liceo Spinelli, home page"`'], ['Icona di un pulsante', 'nessun `alt`', '`alt="Cerca"` (la funzione, non «lente»)'], ['Solo decorativa', '`alt="decorazione con fiori"`', '`alt=""` (la salta)']]},
 c.ERR(14),
 {'tipo': 'punti', 'titolo': 'Come si comprime un’immagine', 'punti': [
   ['gauge', '**Con perdita** (*lossy*): butta i dettagli che l’occhio nota poco → file piccoli'], ['image', '**Senza perdita** (*lossless*): conserva ogni pixel'], ['layout-template', '**Raster**: griglie di pixel · **vettoriali**: forme geometriche, si ingrandiscono all’infinito']]},
 {'tipo': 'tabella', 'titolo': 'I formati delle immagini', 'righe': [['Formato', 'Tipo', 'Trasp.', 'Quando'], ['**JPEG**', 'raster, con perdita', 'no', 'fotografie'], ['**PNG**', 'raster, senza perdita', 'sì', 'grafiche con testo, schermate, loghi raster'], ['**GIF**', 'raster, 256 colori', 'on/off', 'piccole animazioni'], ['**SVG**', 'vettoriale (testo XML)', 'sì', 'loghi, icone, grafici'], ['**WebP**', 'raster, entrambe', 'sì', 'come JPEG e PNG, 25–35% più leggero'], ['**AVIF**', 'raster, entrambe', 'sì', 'il più efficiente, browser recenti']]},
 {'tipo': 'foto', 'titolo': 'JPEG o PNG?', 'foto': [c.FO('F2.7.1', 'Aloni e quadratini nel JPEG, bordi netti nel PNG')]},
 {'tipo': 'punti', 'titolo': 'Peso e ottimizzazione', 'punti': [
   ['image', 'Le immagini sono **la parte più pesante** della maggior parte delle pagine'], ['smartphone', 'Una foto del telefono: **4000 px, 3–5 MB**; in pagina ne servono 1000–1500'], ['gauge', 'Ridimensionando e comprimendo: **150–300 KB**, venti volte meno, senza differenze visibili']]},
 {'tipo': 'formula', 'titolo': 'Esempio svolto: una galleria di 20 foto', 'formula': '20 × 4 MB = **80 MB**', 'righe': [['A 20 Mbps (≈ 2,5 MB/s)', '**più di 30 secondi**'], ['Ridimensionate a 1200 px, in WebP (≈ 200 KB)', '**4 MB in tutto**'], ['Con le immagini ottimizzate', '**meno di 2 secondi**']]},
 c.COD(['<figure>', '  <img src="img/server-cern.jpg" alt="Computer NeXT con un’etichetta scritta a mano sul case">', '  <figcaption>Il primo web server della storia, al CERN (1990).</figcaption>', '</figure>'], 'figure e figcaption', [
   ['image', '**Immagine e didascalia** insieme: browser e screen reader sanno a chi si riferisce'], ['ear', '`alt` **sostituisce** l’immagine per chi non la vede; la didascalia **la commenta** per tutti'], ['code', '`figure` vale anche per grafici, schemi, codice']]),
 {'tipo': 'punti', 'titolo': 'La favicon', 'punti': [
   ['star', 'L’**iconcina** nella scheda del browser e nei preferiti'], ['link', 'Si collega in `head`: `<link rel="icon" href="img/favicon.svg">`'], ['image', 'Può essere `.ico`, `.png` (32×32) o `.svg`']]},
 # 3.5 (Word 2.8)
 c.SEZ('2.8', 'Dati in righe e colonne'),
 {'tipo': 'punti', 'titolo': 'Le tabelle', 'punti': [
   ['layout-template', '**Dati in righe e colonne**: un orario, una classifica, i risultati di un esperimento'], ['list', 'Si costruisce **riga per riga**: `<table>` contiene le righe `<tr>`'], ['tag', 'Ogni riga contiene celle `<td>` (dato) o `<th>` (intestazione)']]},
 c.COD(['<table>', '  <caption>Orario del lunedì</caption>', '  <thead>', '    <tr><th scope="col">Ora</th><th scope="col">Materia</th><th scope="col">Aula</th></tr>', '  </thead>', '  <tbody>', '    <tr><th scope="row">8:00</th><td>Informatica</td><td>Lab 2</td></tr>', '    <tr><th scope="row">9:00</th><td>Matematica</td><td>4B</td></tr>', '  </tbody>', '</table>'], 'Una tabella'),
 {'tipo': 'tabella', 'titolo': 'Gli elementi di una tabella', 'righe': [['Elemento', 'Ruolo'], ['`<caption>`', 'il **titolo** della tabella: subito dopo `<table>`; lo screen reader lo legge per primo'], ['`<thead>` `<tbody>` `<tfoot>`', 'raggruppano intestazione, corpo e piede (totali); nelle tabelle lunghe stampate l’intestazione si ripete'], ['`<th>`', 'cella di **intestazione** di una colonna o di una riga'], ['senza CSS', 'la tabella **non ha bordi**: le linee si aggiungono nel foglio di stile (7.5)']]},
 c.COD(['<table>', '  <tr><th>Giorno</th><th>Mattina</th><th>Pomeriggio</th></tr>', '  <tr><td>Lunedì</td><td colspan="2">Gita a Firenze (tutto il giorno)</td></tr>', '  <tr><td rowspan="2">Martedì e mercoledì</td><td>Lezione</td><td>Laboratorio</td></tr>', '  <tr><td>Lezione</td><td>Libero</td></tr>', '</table>'], 'Celle unite: colspan e rowspan', [
   ['arrow-left-right', '`colspan="2"`: una cella su **due colonne**'], ['arrow-down', '`rowspan="2"`: una cella su **due righe**'], ['circle-x', 'Le celle «coperte» **non si scrivono**: una cella in meno nel codice']]),
 c.SC('F2.9.1', 'La griglia sotto la tabella'),
 c.ERR(15),
 {'tipo': 'punti', 'titolo': 'Le tabelle non servono per impaginare', 'punti': [
   ['history', 'Negli anni Novanta, **prima del CSS**, l’impaginazione si faceva con le tabelle'], ['circle-x', 'Oggi è un **errore**: codice enorme e difficile da modificare'], ['ear', 'Lo screen reader legge la pagina come **una griglia di dati**'], ['smartphone', 'Una tabella **non si adatta** allo schermo del telefono']],
  'nota': 'L’impaginazione si fa con Flexbox e Grid (7.1–7.2)'},
 {'tipo': 'storia', 'titolo': 'Space Jam, il sito che non è mai cambiato', 'anno': '1996', 'icona': 'history', 'punti': [
   ['film', 'Il sito del film *Space Jam*, rimasto online **quasi identico per oltre vent’anni**'], ['layout-template', 'Impaginazione fatta con **tabelle**, immagini GIF e sfondo stellato'], ['search', 'Aprilo con **F12**: vedi quanto era diverso il modo di costruire le pagine']]},
]
c.scrivi(OUT, S)
