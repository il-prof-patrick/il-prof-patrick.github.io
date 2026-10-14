# Slide di Presenta in aula · Capitolo 2 · HTML: la struttura
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Sviluppo Web - Front end')
c = Capitolo(2)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Il linguaggio che dice che cosa c’è in una pagina.'),
 # 2.1
 c.SEZ('2.1', 'Etichette che dicono che cosa è ogni parte'),
 {'tipo': 'punti', 'titolo': 'Un documento HTML', 'punti': [
   ['file-code', 'Un **file di testo** (estensione `.html`) con il contenuto «marcato» da **tag**'], ['tag', 'Un **tag** è un’etichetta racchiusa tra parentesi angolari `< >`'], ['arrow-right', '**Apertura** `<p>`, **chiusura** `</p>` (con la barra)'], ['layers', 'Apertura + contenuto + chiusura = un **elemento**']],
  'nota': 'Si dice «il tag p» per dire l’elemento: va bene a voce, ma sono due cose diverse'},
 c.SC('F2.1.1', 'Anatomia di un elemento'),
 {'tipo': 'punti', 'titolo': 'Elementi vuoti', 'punti': [
   ['circle-x', 'Senza contenuto → **senza tag di chiusura** (*void elements*)'], ['image', '`<img>` · `<br>` · `<hr>` · `<input>` · `<meta>` · `<link>`'], ['file-code', '`<br />` con la barra finale: accettato, eredità del vecchio **XHTML**']]},
 c.COD(['<img src="gatto.jpg" alt="Gatto rosso che dorme sul divano" width="400">', '<a href="contatti.html" title="Scrivici">Contatti</a>'], 'Gli attributi', [
   ['tag', 'Aggiungono **informazioni** a un elemento'], ['file-code', 'Solo nel **tag di apertura**: `nome="valore"`'], ['list', 'Più attributi, separati da spazi, in qualsiasi ordine'], ['circle-check', '**Booleani**: basta scriverli (`required`, `controls`); `required="false"` **non** lo disattiva']]),
 {'tipo': 'tabella', 'titolo': 'Gli attributi globali', 'righe': [['Attributo', 'A che cosa serve', 'Esempio'], ['`id`', 'un nome **unico nella pagina**: link, CSS, JavaScript', '`<section id="contatti">`'], ['`class`', 'uno o più **gruppi** con lo stesso stile', '`<p class="nota importante">`'], ['`title`', 'testo al passaggio del mouse (non su telefono)', '`<abbr title="World Wide Web">`'],
   ['`style`', 'stile CSS sull’elemento (da evitare, 3.1)', '`<p style="color:red">`'], ['`data-*`', 'dati personalizzati per JavaScript', '`<button data-taglia="M">`']]},
 c.COD(['<!-- corretto -->', '<p>Questo è <strong>molto <em>importante</em></strong>.</p>', '<!-- sbagliato: strong si chiude prima di em -->', '<p>Questo è <strong>molto <em>importante</strong></em>.</p>'], 'Annidare gli elementi', [
   ['layers', 'Un elemento dentro un altro: **annidamento**'], ['repeat', '**L’ultimo aperto è il primo che si chiude**, come le scatole cinesi'], ['circle-x', 'Gli elementi non si possono **accavallare**']]),
 {'tipo': 'tessere', 'titolo': 'La famiglia degli elementi', 'tessere': [['layers', 'Genitore', '*parent* · l’elemento che ne contiene un altro'], ['layers', 'Figlio', '*child* · l’elemento contenuto'], ['layers', 'Fratelli', '*siblings* · stesso genitore']],
  'nota': 'Servirà di continuo in CSS e JavaScript · Per vedere l’annidamento si **indenta**: 2 o 4 spazi per livello'},
 c.AN('F2.1.2', 'Chiudere nell’ordine giusto'),
 {'tipo': 'punti', 'titolo': 'Il browser è tollerante', 'punti': [
   ['eye', 'Una pagina con errori **viene comunque disegnata**'], ['circle-x', 'Il browser deve **indovinare** che cosa intendeva l’autore: browser diversi, risultati diversi'], ['search', 'Il **validatore** confronta il codice con lo standard e segnala ogni errore **con il numero di riga**']]},
 {'tipo': 'tabella', 'titolo': 'Gli errori più frequenti', 'righe': [['Errore', 'Sbagliato', 'Corretto'], ['Tag non chiuso', '`<p>Testo <strong>importante</p>`', '`…</strong></p>`'], ['Annidamento incrociato', '`<em><strong>x</em></strong>`', '`<em><strong>x</strong></em>`'], ['Virgolette dimenticate', '`<a href="pagina.html>`', '`<a href="pagina.html">`'], ['`id` ripetuto', 'due elementi con `id="foto"`', '`class="foto"`'],
   ['Blocco dentro un paragrafo', '`<p><ul>…</ul></p>`', 'chiudere il `p` prima'], ['Attributo nel tag di chiusura', '`</img src="…">`', '`<img src="…" alt="…">`'], ['Barra rovesciata nei percorsi', '`src="img\\foto.jpg"`', '`src="img/foto.jpg"`'], ['Tag inventato', '`<pargraph>`', '`<p>`']]},
 {'tipo': 'punti', 'titolo': 'Ispezionare con F12', 'punti': [
   ['search', '**F12** (o tasto destro › *Ispeziona*): gli strumenti per sviluppatori, *DevTools*'], ['monitor', 'Scheda *Elements*: **come il browser ha interpretato** il codice'], ['eye', 'Passi sopra un elemento e lo vedi evidenziato; a destra gli **stili applicati**']]},
 {'tipo': 'punti', 'titolo': 'Abitudini che evitano gli errori', 'punti': [
   ['list', '**Indenta** sempre: in VS Code Alt+Maiusc+F'], ['tag', 'Scrivi **apertura e chiusura insieme**, poi riempi in mezzo (Emmet)'], ['clock', '**Salva e controlla spesso**, non dopo cento righe'], ['palette', 'Leggi i **colori dell’editor**: colore strano → di solito manca una virgoletta'], ['shield-check', 'Estensione **HTMLHint**: sottolinea gli errori mentre scrivi']]},
 c.ERR(0),
 {'tipo': 'punti', 'titolo': 'Commenti, maiuscole e virgolette', 'punti': [
   ['message-square', 'Un **commento** va tra `<!--` e `-->`: il browser lo ignora… ma **chiunque lo legge nel sorgente**'], ['languages', 'Tag e attributi non distinguono maiuscole e minuscole, ma si scrivono **sempre minuscoli**'], ['file-code', 'Valori degli attributi **tra virgolette doppie**'], ['hash', '`id` e `class` **distinguono** maiuscole e minuscole: `Menu` ≠ `menu`']]},
 c.ERR(1), c.ERR(2), c.DOM(0),
 # 2.2
 c.SEZ('2.2', 'Ogni pagina ha lo stesso scheletro'),
 c.COD(['<!DOCTYPE html>', '<html lang="it">', '<head>', '  <meta charset="UTF-8">', '  <meta name="viewport" content="width=device-width, initial-scale=1.0">', '  <title>Le mie ricette</title>', '  <link rel="stylesheet" href="style.css">', '</head>', '<body>', '  <h1>Le mie ricette</h1>', '  <p>Benvenuti nel mio ricettario.</p>', '  <script src="script.js" defer></script>', '</body>', '</html>'], 'Lo scheletro di una pagina'),
 {'tipo': 'punti', 'titolo': 'DOCTYPE e lang', 'punti': [
   ['file-code', '`<!DOCTYPE html>` dichiara **HTML moderno** (HTML5). Non è un tag, è un’istruzione per il browser'], ['triangle-alert', 'Senza, il browser va in ***quirks mode*** e imita i browser degli anni Novanta'], ['globe', '`<html lang="it">` è l’**elemento radice**; `lang` serve a screen reader, traduttori e motori di ricerca']]},
 {'tipo': 'punti', 'titolo': 'head: la codifica', 'punti': [
   ['file', '`<head>`: informazioni sulla pagina **che non si vedono** nella pagina'], ['languages', '`<meta charset="UTF-8">`: la **codifica**, comprende tutti i caratteri del mondo'], ['triangle-alert', 'Senza, le lettere accentate possono diventare «Ã¨»'], ['arrow-right', 'Va messo come **prima riga** di `head`']]},
 {'tipo': 'punti', 'titolo': 'head: il viewport', 'punti': [
   ['smartphone', '`<meta name="viewport" …>` dice al telefono di usare la sua **vera larghezza**'], ['monitor', 'Senza, il telefono finge di essere uno schermo largo **980 pixel** e rimpicciolisce tutto'], ['layout-template', 'Indispensabile per il **responsive design** (3.15)']]},
 {'tipo': 'tessere', 'titolo': 'title, link, script, body', 'tessere': [['file', '`<title>`', 'scheda del browser, preferiti, titolo blu di Google · **non** è l’`h1`'], ['palette', '`<link rel="stylesheet">`', 'collega un foglio di stile (cap. 3)'], ['code', '`<script>`', 'collega un file JavaScript (cap. 4)'], ['monitor', '`<body>`', '**tutto ciò che si vede** nella pagina']]},
 {'tipo': 'punti', 'titolo': 'head e body', 'punti': [
   ['layers', '`head` e `body` sono **figli di `html`** e **fratelli** tra loro'], ['file', 'In `head` va solo ciò che riguarda la pagina **nel suo insieme**'], ['monitor', 'In `body` va **ciò che l’utente vede**']]},
 c.ERR(3), c.ERR(4), c.ERR(5),
 c.COD(['mio-sito/', '├── index.html', '├── chi-siamo.html', '├── contatti.html', '├── css/', '│   └── style.css', '├── js/', '│   └── script.js', '└── img/', '    ├── logo.svg', '    └── foto-classe.jpg'], 'File, cartelle e nomi', [
   ['house', 'La home si chiama sempre `index.html`'], ['file', 'Nomi **minuscoli**, senza spazi né accenti, parole separate da **trattini**'], ['server', 'I server **Linux** distinguono maiuscole e minuscole; gli spazi negli URL diventano `%20`'], ['triangle-alert', 'Su Windows funziona, **online può rompersi**']]),
 c.ERR(6), c.DOM(1),
 # 2.3
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
 # 2.4
 c.SEZ('2.4', 'Blocchi e righe'),
 {'tipo': 'confronto', 'titolo': 'Blocco o in linea?', 'a': {'icona': 'layers', 'titolo': 'Elementi di blocco', 'tono': 'buono', 'righe': ['• **nuova riga**, tutta la larghezza disponibile', '• `h1`–`h6`, `p`, `ul`, `ol`, `li`, `table`, `form`, `blockquote`, `div`', '• i tag semantici: `header`, `section`, `footer`…']},
  'b': {'icona': 'text-cursor', 'titolo': 'Elementi in linea', 'righe': ['• **restano nella riga**, solo lo spazio del contenuto', '• `a`, `strong`, `em`, `span`, `code`, `abbr`', '• `img`, `input`, `button`']}},
 c.SC('F2.4.1', 'Blocchi e in linea in una pagina'),
 {'tipo': 'punti', 'titolo': 'Regola di annidamento', 'punti': [
   ['circle-check', 'Un elemento **in linea** può stare dentro un blocco'], ['circle-x', 'Un **blocco** non dovrebbe stare dentro un elemento **in linea**'], ['file-warning', 'Un `p` **non può contenere altri blocchi**, nemmeno un altro `p`: il browser chiude il paragrafo prima'], ['link', 'Eccezione: `a` può avvolgere un blocco (una card cliccabile)']]},
 c.COD(['<div class="card">', '  <h3>Tiramisù</h3>', '  <p>Difficoltà: <span class="facile">facile</span></p>', '</div>'], 'div e span: contenitori generici', [
   ['package', '**Nessun significato**: servono a raggruppare, per lo stile o per JavaScript'], ['layers', '`div` è **di blocco**: raggruppa parti di pagina'], ['text-cursor', '`span` è **in linea**: marca un pezzo di testo'], ['lightbulb', 'Prima di un `div` chiediti se c’è un **tag semantico** (2.11)']]),
 {'tipo': 'punti', 'titolo': 'Il CSS può cambiare tutto', 'punti': [
   ['paintbrush', 'Il modo di disporsi **si può cambiare con il CSS** (`display`, 3.10)'], ['link', 'Un link può diventare un blocco, una voce di elenco può mettersi in linea'], ['circle-check', 'Blocco o in linea è solo il **comportamento predefinito**']]},
 c.ERR(10),
 # 2.5
 c.SEZ('2.5', 'Tre tipi di elenco'),
 {'tipo': 'tabella', 'titolo': 'Scegli in base all’ordine', 'righe': [['Tipo', 'Tag', 'Quando'], ['Puntato', '`<ul>` + `<li>`', 'l’ordine **non conta**: ingredienti, menu'], ['Numerato', '`<ol>` + `<li>`', 'l’ordine **conta**: passaggi, classifica'], ['Definizioni', '`<dl>` + `<dt>` + `<dd>`', 'glossari, scheda tecnica']]},
 c.COD(['<ol>', '  <li>Cuocere la pasta.</li>', '  <li>Rosolare il guanciale.</li>', '  <li>Mescolare uova e pecorino.</li>', '</ol>', '<dl>', '  <dt>HTML</dt>', '  <dd>Linguaggio di markup per la struttura.</dd>', '  <dt>CSS</dt>', '  <dd>Linguaggio per l’aspetto.</dd>', '</dl>'], 'Elenco numerato e di definizioni', [
   ['list-ordered', '`start="5"` parte da 5, `reversed` scende, `type` cambia lo stile'], ['paintbrush', 'Puntini e numeri si cambiano di solito con il CSS (`list-style`)']]),
 c.COD(['<ul>', '  <li>Frontend', '    <ul>', '      <li>HTML</li>', '      <li>CSS</li>', '    </ul>', '  </li>', '  <li>Backend</li>', '</ul>'], 'Elenchi annidati', [
   ['layers', 'Il sottoelenco va **dentro un `<li>`**'], ['circle-x', '`ul` e `ol` possono avere come figli **solo `li`**']]),
 c.ERR(11),
 {'tipo': 'punti', 'titolo': 'I menu sono elenchi', 'punti': [
   ['list', 'Una serie di link è un **elenco** di voci senza ordine'], ['link', 'Quasi tutti i menu sono un `ul` con un `li` per ogni link'], ['paintbrush', 'Il CSS li trasforma poi in barre orizzontali (3.12)']]},
 {'tipo': 'punti', 'titolo': 'In laboratorio: il curriculum', 'punti': [
   ['list', 'Le **competenze** con un `ul` annidato: Informatica › HTML, CSS, JavaScript; Lingue › Inglese, Francese'], ['trophy', 'La **top 5** dei film preferiti con un `ol` `reversed`'], ['book-open', 'Un piccolo **glossario** con `dl`'], ['zap', 'Con Emmet: `ul>li*3>a` genera tre voci con un link ciascuna']]},
 # 2.6
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
 # 2.7
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
 # 2.8
 c.SEZ('2.8', 'Dati in righe e colonne'),
 {'tipo': 'punti', 'titolo': 'Le tabelle', 'punti': [
   ['layout-template', '**Dati in righe e colonne**: un orario, una classifica, i risultati di un esperimento'], ['list', 'Si costruisce **riga per riga**: `<table>` contiene le righe `<tr>`'], ['tag', 'Ogni riga contiene celle `<td>` (dato) o `<th>` (intestazione)']]},
 c.COD(['<table>', '  <caption>Orario del lunedì</caption>', '  <thead>', '    <tr><th scope="col">Ora</th><th scope="col">Materia</th><th scope="col">Aula</th></tr>', '  </thead>', '  <tbody>', '    <tr><th scope="row">8:00</th><td>Informatica</td><td>Lab 2</td></tr>', '    <tr><th scope="row">9:00</th><td>Matematica</td><td>4B</td></tr>', '  </tbody>', '</table>'], 'Una tabella'),
 {'tipo': 'tabella', 'titolo': 'Gli elementi di una tabella', 'righe': [['Elemento', 'Ruolo'], ['`<caption>`', 'il **titolo** della tabella: subito dopo `<table>`; lo screen reader lo legge per primo'], ['`<thead>` `<tbody>` `<tfoot>`', 'raggruppano intestazione, corpo e piede (totali); nelle tabelle lunghe stampate l’intestazione si ripete'], ['`<th>`', 'cella di **intestazione** di una colonna o di una riga'], ['senza CSS', 'la tabella **non ha bordi**: le linee si aggiungono nel foglio di stile (3.9)']]},
 c.COD(['<table>', '  <tr><th>Giorno</th><th>Mattina</th><th>Pomeriggio</th></tr>', '  <tr><td>Lunedì</td><td colspan="2">Gita a Firenze (tutto il giorno)</td></tr>', '  <tr><td rowspan="2">Martedì e mercoledì</td><td>Lezione</td><td>Laboratorio</td></tr>', '  <tr><td>Lezione</td><td>Libero</td></tr>', '</table>'], 'Celle unite: colspan e rowspan', [
   ['arrow-left-right', '`colspan="2"`: una cella su **due colonne**'], ['arrow-down', '`rowspan="2"`: una cella su **due righe**'], ['circle-x', 'Le celle «coperte» **non si scrivono**: una cella in meno nel codice']]),
 c.SC('F2.9.1', 'La griglia sotto la tabella'),
 c.ERR(15),
 {'tipo': 'punti', 'titolo': 'Le tabelle non servono per impaginare', 'punti': [
   ['history', 'Negli anni Novanta, **prima del CSS**, l’impaginazione si faceva con le tabelle'], ['circle-x', 'Oggi è un **errore**: codice enorme e difficile da modificare'], ['ear', 'Lo screen reader legge la pagina come **una griglia di dati**'], ['smartphone', 'Una tabella **non si adatta** allo schermo del telefono']],
  'nota': 'L’impaginazione si fa con Flexbox e Grid (3.12–3.13)'},
 {'tipo': 'storia', 'titolo': 'Space Jam, il sito che non è mai cambiato', 'anno': '1996', 'icona': 'history', 'punti': [
   ['film', 'Il sito del film *Space Jam*, rimasto online **quasi identico per oltre vent’anni**'], ['layout-template', 'Impaginazione fatta con **tabelle**, immagini GIF e sfondo stellato'], ['search', 'Aprilo con **F12**: vedi quanto era diverso il modo di costruire le pagine']]},
 # 2.9
 c.SEZ('2.9', 'Raccogliere dati dall’utente'),
 c.COD(['<form action="https://httpbin.org/get" method="get">', '  <label for="nome">Nome</label>', '  <input type="text" id="nome" name="nome" required>', '  <label for="email">E-mail</label>', '  <input type="email" id="email" name="email" placeholder="nome@esempio.it" required>', '  <button type="submit">Iscriviti</button>', '</form>'], 'I moduli (form)'),
 {'tipo': 'tabella', 'titolo': 'Le parti di un modulo', 'righe': [['Parte', 'A che cosa serve'], ['`action`', '**l’indirizzo** a cui vanno i dati (un programma sul server); se manca, alla pagina stessa'], ['`method`', '**come** vengono inviati: `get` o `post`'], ['`name`', 'il nome con cui il dato **arriva al server**: senza `name` il campo **non viene inviato**'], ['`id` + `<label for>`', 'collegano l’etichetta al campo']]},
 {'tipo': 'punti', 'titolo': 'Che cosa succede ai dati?', 'punti': [
   ['file-code', 'HTML fornisce i campi, **controlla la forma** dei dati e **li invia**'], ['server', 'Che cosa succede dopo lo decide il **programma sul server** (o JavaScript, 4.11)'], ['file', 'In un sito statico un modulo da solo **non salva niente**'], ['search', 'Per le prove: `https://httpbin.org/get` (o `/post`) **mostra i dati ricevuti**']]},
 {'tipo': 'confronto', 'titolo': 'GET o POST?', 'a': {'icona': 'search', 'titolo': 'GET', 'righe': ['• i dati vanno **nell’URL**, dopo il `?`', '• visibili nella barra, **restano nella cronologia**', '• la pagina si può salvare con i dati dentro', '• per richieste che **leggono** e non modificano: una ricerca']},
  'b': {'icona': 'send', 'titolo': 'POST', 'tono': 'buono', 'righe': ['• i dati nel **corpo della richiesta**', '• per dati che **modificano** qualcosa: iscrizioni, ordini, messaggi, file', '• **non li cifra**: senza HTTPS si leggono comunque', '• li nasconde solo da barra e cronologia']}},
 c.AN('F2.10.1', 'GET e POST'),
 c.ERR(16),
 c.COD(['<label for="citta">Città</label>', '<input type="text" id="citta" name="citta">', '<label><input type="checkbox" name="privacy" required> Accetto l’informativa sulla privacy</label>'], 'Le etichette', [
   ['link', '`<label for="…">` uguale all’`id` del campo, oppure **avvolge** il campo'], ['mouse-pointer-click', 'Cliccando l’etichetta **si attiva il campo** (comodo per i checkbox)'], ['ear', 'Lo screen reader **legge l’etichetta** quando arriva sul campo']]),
 c.ERR(17),
 {'tipo': 'tabella', 'titolo': 'I tipi di campo (1)', 'righe': [['`type`', 'Che cosa fa', 'Sul telefono'], ['`text`', 'testo libero su una riga (predefinito)', 'tastiera normale'], ['`password`', 'nasconde i caratteri', 'niente correttore'], ['`email`', 'controlla `@` e dominio', 'tastiera con @'], ['`number`', 'solo numeri, con `min` `max` `step`', 'tastierino numerico'], ['`tel`', 'numero di telefono (non controlla)', 'tastierino telefonico'], ['`url`', 'controlla che sia un indirizzo web', 'tastiera con / e .com'], ['`search`', 'ricerca, con la X per cancellare', 'tasto «Cerca»']]},
 {'tipo': 'tabella', 'titolo': 'I tipi di campo (2)', 'righe': [['`type`', 'Che cosa fa', 'Sul telefono'], ['`date` `time` `datetime-local` `month` `week`', 'data e ora con calendario', 'selettore nativo'], ['`color`', 'tavolozza dei colori', 'selettore nativo'], ['`range`', 'cursore tra `min` e `max`', 'cursore'], ['`checkbox`', 'casella: **scelte indipendenti**, anche più di una', ''], ['`radio`', 'pallino: **una sola scelta** tra quelle con lo stesso `name`', ''], ['`file`', 'scelta di un file (`accept="image/*"`)', 'galleria o fotocamera'], ['`hidden`', 'campo invisibile inviato con il modulo', '']]},
 {'tipo': 'punti', 'titolo': 'Scegliere il tipo giusto', 'punti': [
   ['circle-check', 'Il browser **controlla il formato**'], ['smartphone', 'Sul telefono compare la **tastiera adatta**'], ['palette', 'Spesso c’è un **selettore già pronto**: calendario, tavolozza dei colori']]},
 c.COD(['<fieldset>', '  <legend>Taglia della felpa</legend>', '  <label><input type="radio" name="taglia" value="S"> S</label>', '  <label><input type="radio" name="taglia" value="M" checked> M</label>', '  <label><input type="radio" name="taglia" value="L"> L</label>', '</fieldset>', '<fieldset>', '  <legend>Interessi</legend>', '  <label><input type="checkbox" name="interessi" value="musica"> Musica</label>', '  <label><input type="checkbox" name="interessi" value="sport"> Sport</label>', '</fieldset>'], 'Radio e checkbox', [
   ['circle-dot', 'I **radio** funzionano in gruppo **solo con lo stesso `name`**'], ['send', '`value` è ciò che arriva al server (senza, arriva «on»)'], ['circle-check', '`checked` preseleziona una scelta']]),
 c.ERR(18),
 c.COD(['<select id="classe" name="classe">', '  <optgroup label="Triennio">', '    <option value="3">Terza</option>', '    <option value="5" selected>Quinta</option>', '  </optgroup>', '</select>', '<textarea id="msg" name="messaggio" rows="5" maxlength="500"></textarea>', '<input list="browser-list" id="browser" name="browser">', '<datalist id="browser-list">', '  <option value="Chrome"><option value="Firefox">', '</datalist>'], 'Altri controlli', [
   ['list', '`select`: **menu a tendina**; `option` le voci; `optgroup` le raggruppa; `multiple` per più scelte'], ['text-cursor', '`textarea`: testo su **più righe**; il testo iniziale va **tra i tag**'], ['search', '`datalist`: **suggerimenti** a un campo di testo'], ['layers', '`fieldset` raggruppa i campi, `legend` è il titolo del gruppo']]),
 {'tipo': 'tabella', 'titolo': 'I pulsanti', 'righe': [['Pulsante', 'Che cosa fa'], ['`<button type="submit">`', '**invia** il modulo (è il tipo **predefinito** in un form)'], ['`<button type="reset">`', 'riporta i campi ai valori iniziali (raramente: si cancella tutto per sbaglio)'], ['`<button type="button">`', 'non fa niente da solo: per le azioni con **JavaScript**']]},
 c.ERR(19),
 {'tipo': 'tabella', 'titolo': 'La validazione del browser', 'righe': [['Attributo', 'Controllo', 'Esempio'], ['`required`', 'campo obbligatorio', '`<input name="nome" required>`'], ['`minlength` `maxlength`', 'lunghezza del testo', '`<input type="password" minlength="8">`'], ['`min` `max` `step`', 'intervallo e passo', '`<input type="number" min="1" max="10" step="0.5">`'], ['`type`', 'il formato del tipo', '`<input type="email">`']]},
 c.COD(['<label for="cap">CAP</label>', '<input id="cap" name="cap" inputmode="numeric" pattern="[0-9]{5}"', '       title="5 cifre, per esempio 00184" required>'], 'Altri attributi utili', [
   ['search', '`pattern`: controllo con **espressione regolare**'], ['smartphone', '`inputmode`: sceglie la tastiera sul telefono'], ['zap', '`autocomplete`: **compilazione automatica**'], ['lock', '`disabled` disattiva (e non invia); `readonly` non modificabile (ma invia); `autofocus` mette il cursore nel campo']]),
 c.ERR(20),
 c.COD(['<form action="https://httpbin.org/post" method="post">', '  <fieldset>', '    <legend>Dati della squadra</legend>', '    <label for="squadra">Nome della squadra</label>', '    <input id="squadra" name="squadra" required minlength="3" maxlength="30">', '    <label for="capitano">E-mail del capitano</label>', '    <input type="email" id="capitano" name="email" autocomplete="email" required>', '    <label for="giocatori">Numero di giocatori</label>', '    <input type="number" id="giocatori" name="giocatori" min="5" max="8" value="5">', '    <label for="classe">Classe</label>', '    <select id="classe" name="classe" required>…</select>', '  </fieldset>', '  <fieldset>…turno preferito (radio) e note (textarea)…</fieldset>', '  <label><input type="checkbox" name="regolamento" required> Ho letto il regolamento</label>', '  <button type="submit">Iscrivi la squadra</button>', '</form>'], 'Esempio svolto: iscrizione al torneo di calcetto'),
 {'tipo': 'punti', 'titolo': 'Provalo così com’è', 'punti': [
   ['send', 'Inviando a `httpbin.org` la pagina di risposta mostra i dati in **JSON**, ognuno con il suo `name`'], ['circle-x', 'Lascia vuoti i campi obbligatori, scrivi **9 giocatori**, un’e-mail **senza @**'], ['eye', 'Osserva i **messaggi del browser**']]},
 c.DOM(4),
 # 2.10
 c.SEZ('2.10', 'Audio, video e pagine incorporate'),
 c.COD(['<video src="video/presentazione.mp4" controls width="640" poster="img/copertina.jpg">', '  Il tuo browser non supporta i video HTML5.', '</video>', '<audio controls>', '  <source src="audio/intervista.ogg" type="audio/ogg">', '  <source src="audio/intervista.mp3" type="audio/mpeg">', '</audio>'], 'Video e audio'),
 {'tipo': 'tabella', 'titolo': 'Gli attributi di video e audio', 'righe': [['Attributo', 'Che cosa fa'], ['`controls`', 'mostra i comandi: **senza, l’utente non controlla** il video'], ['`autoplay`', 'parte da solo · **bloccato se c’è audio**: funziona solo con `muted`'], ['`muted`', 'parte senza audio'], ['`loop`', 'ricomincia alla fine'], ['`poster`', 'l’immagine prima della riproduzione'], ['`preload="none"`', 'non scarica niente finché non premi play (risparmia dati)'], ['`playsinline`', 'su iPhone riproduce nella pagina']]},
 {'tipo': 'punti', 'titolo': 'Più sorgenti, più formati', 'punti': [
   ['file', 'Con più `<source>` il browser usa **il primo formato che sa leggere**'], ['message-square', 'Il testo tra i tag compare solo nei browser che **non supportano** l’elemento'], ['circle-check', 'Sicuri: **MP4** (H.264) e **MP3** ovunque; **WebM** è più leggero']]},
 c.ERR(21),
 c.COD(['<iframe width="560" height="315"', '        src="https://www.youtube-nocookie.com/embed/ID_DEL_VIDEO"', '        title="Come funziona Internet – video"', '        loading="lazy" allowfullscreen></iframe>'], 'Contenuti incorporati: iframe', [
   ['globe', '**Un’intera pagina di un altro sito** dentro la tua, come una finestra'], ['video', 'Video di YouTube, mappe, moduli di Google: **“Condividi › Incorpora”**'], ['ear', '`title` descrive il contenuto agli screen reader; `loading="lazy"` lo carica quando serve'], ['shield', '`youtube-nocookie.com`: niente cookie di profilazione finché non parte il video']]),
 c.ERR(22), c.DOM(5),
 # 2.11
 c.SEZ('2.11', 'Dare un ruolo a ogni parte'),
 c.DOM(6),
 {'tipo': 'punti', 'titolo': 'Una pagina di soli div non dice niente', 'punti': [
   ['layers', 'Per browser, Google e screen reader sono **scatole tutte uguali**'], ['tag', 'Gli **elementi semantici** (HTML5) **dicono il ruolo** di ogni parte']]},
 {'tipo': 'tabella', 'titolo': 'Gli elementi semantici', 'righe': [['Elemento', 'Ruolo', 'Quante'], ['`<header>`', 'intestazione della pagina o di una sezione', 'anche più di una'], ['`<nav>`', 'link di navigazione principali', 'una o poche'], ['`<main>`', 'il **contenuto principale**', '**una sola**'], ['`<section>`', 'sezione tematica, di solito con un titolo', 'molte'], ['`<article>`', 'contenuto **autonomo**: articolo, post, scheda prodotto', 'molte'], ['`<aside>`', 'contenuto collegato ma secondario', 'molte'], ['`<footer>`', 'piè di pagina (autore, contatti, copyright)', 'anche più di uno'], ['`<address>`', 'informazioni di contatto', '']]},
 c.COD(['<body>', '  <header>', '    <img src="img/logo.svg" alt="Il Blog della 5CL">', '    <nav><ul>…Home · Articoli · Chi siamo…</ul></nav>', '  </header>', '  <main>', '    <article>', '      <header><h1>La nostra gita a Ginevra</h1></header>', '      <section><h2>La visita al CERN</h2><p>…</p></section>', '      <section><h2>Il lago</h2><p>…</p></section>', '    </article>', '    <aside><h2>Lo sapevi?</h2><p>Il Web è nato al CERN.</p></aside>', '  </main>', '  <footer><address>blog5cl@scuola.it</address></footer>', '</body>'], 'Una pagina semantica'),
 c.SC('F2.12.1', 'La struttura di una pagina'),
 {'tipo': 'punti', 'titolo': 'Perché usarli', 'punti': [
   ['ear', '**Accessibilità**: lo screen reader annuncia «navigazione», «principale», «piè di pagina» e **salta al contenuto**'], ['search', '**Motori di ricerca**: capiscono contenuto e contorno'], ['code', '**Leggibilità**: `</nav>` dice più di `</div>`'], ['book-open', '**Modalità lettura** e altri strumenti estraggono il testo giusto']]},
 {'tipo': 'tessere', 'titolo': 'section, article o div?', 'tessere': [['newspaper', '`article`', 'Avrebbe senso **pubblicato da solo**, magari condiviso su un social?'], ['layers', '`section`', 'È **una parte di un discorso più ampio**, con un suo titolo?'], ['package', '`div`', 'Serve **solo per lo stile** o per raggruppare?']]},
 c.ERR(23), c.ERR(24), c.DOM(7),
 # 2.12
 c.SEZ('2.12', 'Come ti trova Google'),
 {'tipo': 'punti', 'titolo': 'Metadati e SEO', 'punti': [
   ['file', 'I **metadati** sono dati **sulla pagina**, scritti in `head` con `<meta>`'], ['eye', 'Non si vedono nella pagina: li leggono **browser, motori di ricerca, social**'], ['trending-up', 'La **SEO** (*Search Engine Optimization*): far comparire la pagina **tra i primi risultati**, in modo corretto']]},
 c.COD(['<head>', '  <meta charset="UTF-8">', '  <meta name="viewport" content="width=device-width, initial-scale=1.0">', '  <title>Torneo di calcetto 2026 – Liceo Spinelli</title>', '  <meta name="description"', '        content="Regolamento, calendario delle partite e iscrizioni al torneo', '                 di calcetto delle classi del triennio. Iscrizioni entro il 30 novembre.">', '  <meta name="author" content="Classe 5CL">', '</head>'], 'Titolo e descrizione'),
 c.SC('F2.15.1', 'Come si appare su Google'),
 {'tipo': 'tessere', 'titolo': 'title e description', 'tessere': [['file', '`<title>`', 'il **titolo blu**: unico per pagina, parole importanti all’inizio, **50–60 caratteri**'], ['pen-line', '`meta description`', 'il **testo grigio**: **150–160 caratteri**, un riassunto che invogli a cliccare']],
  'nota': 'Google può scegliere un testo diverso, se lo ritiene più adatto alla ricerca'},
 {'tipo': 'punti', 'titolo': 'Come Google trova e valuta le pagine', 'punti': [
   ['route', '**Scansione** (*crawling*): il **crawler** (Googlebot) **segue i link** e scarica le pagine'], ['book-open', '**Indicizzazione**: legge testi, titoli, alt, struttura e li registra nell’**indice**'], ['trending-up', '**Posizionamento** (*ranking*): ordina le pagine con **centinaia di fattori**: pertinenza, qualità, link da siti affidabili, velocità, compatibilità con il telefono, HTTPS']]},
 {'tipo': 'punti', 'titolo': 'L’HTML fatto bene è già buona SEO', 'punti': [
   ['list', 'Titoli `h1`–`h6` **ordinati** e tag **semantici**'], ['image', '`alt` descrittivi, link con **testo chiaro**'], ['gauge', 'Pagine **veloci** e adatte al telefono'], ['sparkles', '**Il fattore più importante: un contenuto utile e originale**']]},
 c.ERR(25),
]
c.scrivi(OUT, S)
