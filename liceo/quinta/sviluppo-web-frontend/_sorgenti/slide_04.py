# Slide di Presenta in aula · Capitolo 4 · HTML: avanzato (dal capitolo 2 del Word)
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Sviluppo Web - Front end')
c = Capitolo(4, da=2)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Moduli, audio e video, struttura semantica e metadati.'),
 # 4.1 (Word 2.9)
 c.SEZ('2.9', 'Raccogliere dati dall’utente'),
 c.COD(['<form action="https://httpbin.org/get" method="get">', '  <label for="nome">Nome</label>', '  <input type="text" id="nome" name="nome" required>', '  <label for="email">E-mail</label>', '  <input type="email" id="email" name="email" placeholder="nome@esempio.it" required>', '  <button type="submit">Iscriviti</button>', '</form>'], 'I moduli (form)'),
 {'tipo': 'tabella', 'titolo': 'Le parti di un modulo', 'righe': [['Parte', 'A che cosa serve'], ['`action`', '**l’indirizzo** a cui vanno i dati (un programma sul server); se manca, alla pagina stessa'], ['`method`', '**come** vengono inviati: `get` o `post`'], ['`name`', 'il nome con cui il dato **arriva al server**: senza `name` il campo **non viene inviato**'], ['`id` + `<label for>`', 'collegano l’etichetta al campo']]},
 {'tipo': 'punti', 'titolo': 'Che cosa succede ai dati?', 'punti': [
   ['file-code', 'HTML fornisce i campi, **controlla la forma** dei dati e **li invia**'], ['server', 'Che cosa succede dopo lo decide il **programma sul server** (o JavaScript, cap. 8)'], ['file', 'In un sito statico un modulo da solo **non salva niente**'], ['search', 'Per le prove: `https://httpbin.org/get` (o `/post`) **mostra i dati ricevuti**']]},
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
 # 4.2 (Word 2.10)
 c.SEZ('2.10', 'Audio, video e pagine incorporate'),
 c.COD(['<video src="video/presentazione.mp4" controls width="640" poster="img/copertina.jpg">', '  Il tuo browser non supporta i video HTML5.', '</video>', '<audio controls>', '  <source src="audio/intervista.ogg" type="audio/ogg">', '  <source src="audio/intervista.mp3" type="audio/mpeg">', '</audio>'], 'Video e audio'),
 {'tipo': 'tabella', 'titolo': 'Gli attributi di video e audio', 'righe': [['Attributo', 'Che cosa fa'], ['`controls`', 'mostra i comandi: **senza, l’utente non controlla** il video'], ['`autoplay`', 'parte da solo · **bloccato se c’è audio**: funziona solo con `muted`'], ['`muted`', 'parte senza audio'], ['`loop`', 'ricomincia alla fine'], ['`poster`', 'l’immagine prima della riproduzione'], ['`preload="none"`', 'non scarica niente finché non premi play (risparmia dati)'], ['`playsinline`', 'su iPhone riproduce nella pagina']]},
 {'tipo': 'punti', 'titolo': 'Più sorgenti, più formati', 'punti': [
   ['file', 'Con più `<source>` il browser usa **il primo formato che sa leggere**'], ['message-square', 'Il testo tra i tag compare solo nei browser che **non supportano** l’elemento'], ['circle-check', 'Sicuri: **MP4** (H.264) e **MP3** ovunque; **WebM** è più leggero']]},
 c.ERR(21),
 c.COD(['<iframe width="560" height="315"', '        src="https://www.youtube-nocookie.com/embed/ID_DEL_VIDEO"', '        title="Come funziona Internet – video"', '        loading="lazy" allowfullscreen></iframe>'], 'Contenuti incorporati: iframe', [
   ['globe', '**Un’intera pagina di un altro sito** dentro la tua, come una finestra'], ['video', 'Video di YouTube, mappe, moduli di Google: **“Condividi › Incorpora”**'], ['ear', '`title` descrive il contenuto agli screen reader; `loading="lazy"` lo carica quando serve'], ['shield', '`youtube-nocookie.com`: niente cookie di profilazione finché non parte il video']]),
 c.ERR(22), c.DOM(5),
 # 4.3 (Word 2.11)
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
 # 4.4 (Word 2.12)
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
