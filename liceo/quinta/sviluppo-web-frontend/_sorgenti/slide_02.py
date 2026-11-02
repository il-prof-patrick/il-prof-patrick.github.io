# Slide di Presenta in aula · Capitolo 2 · HTML: introduzione (dal capitolo 2 del Word)
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Sviluppo Web - Front end')
c = Capitolo(2, da=2)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Il linguaggio che dice che cosa c’è in una pagina.'),
 # 2.1 (Word 2.1)
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
   ['`style`', 'stile CSS sull’elemento (da evitare, 5.1)', '`<p style="color:red">`'], ['`data-*`', 'dati personalizzati per JavaScript', '`<button data-taglia="M">`']]},
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
 # 2.2 (Word 2.2)
 c.SEZ('2.2', 'Ogni pagina ha lo stesso scheletro'),
 c.COD(['<!DOCTYPE html>', '<html lang="it">', '<head>', '  <meta charset="UTF-8">', '  <meta name="viewport" content="width=device-width, initial-scale=1.0">', '  <title>Le mie ricette</title>', '  <link rel="stylesheet" href="style.css">', '</head>', '<body>', '  <h1>Le mie ricette</h1>', '  <p>Benvenuti nel mio ricettario.</p>', '  <script src="script.js" defer></script>', '</body>', '</html>'], 'Lo scheletro di una pagina'),
 {'tipo': 'punti', 'titolo': 'DOCTYPE e lang', 'punti': [
   ['file-code', '`<!DOCTYPE html>` dichiara **HTML moderno** (HTML5). Non è un tag, è un’istruzione per il browser'], ['triangle-alert', 'Senza, il browser va in ***quirks mode*** e imita i browser degli anni Novanta'], ['globe', '`<html lang="it">` è l’**elemento radice**; `lang` serve a screen reader, traduttori e motori di ricerca']]},
 {'tipo': 'punti', 'titolo': 'head: la codifica', 'punti': [
   ['file', '`<head>`: informazioni sulla pagina **che non si vedono** nella pagina'], ['languages', '`<meta charset="UTF-8">`: la **codifica**, comprende tutti i caratteri del mondo'], ['triangle-alert', 'Senza, le lettere accentate possono diventare «Ã¨»'], ['arrow-right', 'Va messo come **prima riga** di `head`']]},
 {'tipo': 'punti', 'titolo': 'head: il viewport', 'punti': [
   ['smartphone', '`<meta name="viewport" …>` dice al telefono di usare la sua **vera larghezza**'], ['monitor', 'Senza, il telefono finge di essere uno schermo largo **980 pixel** e rimpicciolisce tutto'], ['layout-template', 'Indispensabile per il **responsive design** (7.3)']]},
 {'tipo': 'tessere', 'titolo': 'title, link, script, body', 'tessere': [['file', '`<title>`', 'scheda del browser, preferiti, titolo blu di Google · **non** è l’`h1`'], ['palette', '`<link rel="stylesheet">`', 'collega un foglio di stile (cap. 5–7)'], ['code', '`<script>`', 'collega un file JavaScript (cap. 8)'], ['monitor', '`<body>`', '**tutto ciò che si vede** nella pagina']]},
 {'tipo': 'punti', 'titolo': 'head e body', 'punti': [
   ['layers', '`head` e `body` sono **figli di `html`** e **fratelli** tra loro'], ['file', 'In `head` va solo ciò che riguarda la pagina **nel suo insieme**'], ['monitor', 'In `body` va **ciò che l’utente vede**']]},
 c.ERR(3), c.ERR(4), c.ERR(5),
 c.COD(['mio-sito/', '├── index.html', '├── chi-siamo.html', '├── contatti.html', '├── css/', '│   └── style.css', '├── js/', '│   └── script.js', '└── img/', '    ├── logo.svg', '    └── foto-classe.jpg'], 'File, cartelle e nomi', [
   ['house', 'La home si chiama sempre `index.html`'], ['file', 'Nomi **minuscoli**, senza spazi né accenti, parole separate da **trattini**'], ['server', 'I server **Linux** distinguono maiuscole e minuscole; gli spazi negli URL diventano `%20`'], ['triangle-alert', 'Su Windows funziona, **online può rompersi**']]),
 c.ERR(6), c.DOM(1),
 # 2.3 (Word 2.4)
 c.SEZ('2.4', 'Blocchi e righe'),
 {'tipo': 'confronto', 'titolo': 'Blocco o in linea?', 'a': {'icona': 'layers', 'titolo': 'Elementi di blocco', 'tono': 'buono', 'righe': ['• **nuova riga**, tutta la larghezza disponibile', '• `h1`–`h6`, `p`, `ul`, `ol`, `li`, `table`, `form`, `blockquote`, `div`', '• i tag semantici: `header`, `section`, `footer`…']},
  'b': {'icona': 'text-cursor', 'titolo': 'Elementi in linea', 'righe': ['• **restano nella riga**, solo lo spazio del contenuto', '• `a`, `strong`, `em`, `span`, `code`, `abbr`', '• `img`, `input`, `button`']}},
 c.SC('F2.4.1', 'Blocchi e in linea in una pagina'),
 {'tipo': 'punti', 'titolo': 'Regola di annidamento', 'punti': [
   ['circle-check', 'Un elemento **in linea** può stare dentro un blocco'], ['circle-x', 'Un **blocco** non dovrebbe stare dentro un elemento **in linea**'], ['file-warning', 'Un `p` **non può contenere altri blocchi**, nemmeno un altro `p`: il browser chiude il paragrafo prima'], ['link', 'Eccezione: `a` può avvolgere un blocco (una card cliccabile)']]},
 c.COD(['<div class="card">', '  <h3>Tiramisù</h3>', '  <p>Difficoltà: <span class="facile">facile</span></p>', '</div>'], 'div e span: contenitori generici', [
   ['package', '**Nessun significato**: servono a raggruppare, per lo stile o per JavaScript'], ['layers', '`div` è **di blocco**: raggruppa parti di pagina'], ['text-cursor', '`span` è **in linea**: marca un pezzo di testo'], ['lightbulb', 'Prima di un `div` chiediti se c’è un **tag semantico** (4.3)']]),
 {'tipo': 'punti', 'titolo': 'Il CSS può cambiare tutto', 'punti': [
   ['paintbrush', 'Il modo di disporsi **si può cambiare con il CSS** (`display`, 6.4)'], ['link', 'Un link può diventare un blocco, una voce di elenco può mettersi in linea'], ['circle-check', 'Blocco o in linea è solo il **comportamento predefinito**']]},
 c.ERR(10),
]
c.scrivi(OUT, S)
