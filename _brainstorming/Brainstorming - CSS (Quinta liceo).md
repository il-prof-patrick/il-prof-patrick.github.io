# CSS · Quinta liceo · brainstorming (percorso A)
Fonte per il sito (fase 2). Una pagina per capitolo, una sezione per sottocapitolo. Classi indicate a parole ("Quinta liceo"). Capitoli 1–16 approvati (stato finale del brainstorming CSS).

## Legenda
R ricorda (1 frase ≤25 parole, finisce nel riquadro «Ricorda» a elenco puntato a fine pagina) · K contenuti da scrivere (ognuno una volta sola, termini tecnici corretti, grassetto solo sulle idee chiave, inglesismi in corsivo) · W animazione/widget · S schema · T tabella · F foto/screenshot reale (da cercare dopo; titolino sotto, nessuna fonte in didascalia) · E errore tipico «frase dello studente» → correzione (anche distrattore quiz) · Q domanda alla classe (scopo) → risposta (in «Presenta in aula» la risposta compare al clic dopo) · ADD aggiunta all'indice.

## Regole di realizzazione
- Design system del sito «Informatica con il Prof. Patrick» (teal/ambra, angoli netti, Inter + JetBrains Mono, tema chiaro/scuro, icone Lucide). Niente riquadri apribili/richiudibili. Niente obiettivi/prerequisiti in testa.
- Animazioni: avanzano a clic (mai da sole), stato iniziale già visibile e sensato, titoletto che dice cosa mostra, descrizione del passo in alto senza numero di clic, nessuna didascalia sotto. I «Prova tu» sono widget con controlli e risultato in tempo reale.
- Widget: HTML+JS autonomi, nessuna libreria. Il codice delle bozze fatte in chat NON è incluso: qui solo la specifica. Le anteprime di «pagina web» finta hanno sfondo bianco proprio.
- Pagina campione «Club di robotica» (usata da widget e esempi): `<main><h1>Club di robotica</h1><nav><a href="/chi-siamo">Chi siamo</a><a href="https://www.arduino.cc">Arduino</a><a href="programma.pdf">Programma</a></nav><h2>I corsi</h2><div class="card"><h3>Arduino</h3><p class="nota">Giovedì</p></div><div class="card big"><h3>Stampa 3D</h3><p>Venerdì</p></div><div class="card"><h3 id="robot">Robot</h3><p>Lunedì</p></div><form><input type="text" placeholder="Nome"><input type="email" placeholder="Email"></form></main>`
- Decisioni: niente laboratori (né sottocapitoli né riquadri), niente linea del tempo, tolta la storia del CSS; tolti il cap. 16 originale (CSS moderno: variabili, nesting, :is/:where/:has, container queries, @layer, novità, compatibilità, prefissi), il cap. 17 originale ridotto ai soli framework e il progetto finale (cap. 19). Tolti 13.6 (preferenze utente), 13.7 (stampa), 14.5 (filtri e ritagli). Rinumerato: 16 Framework CSS (ultimo capitolo). CSS e JavaScript (ex 18) va nel modulo JavaScript, non qui. Domande alla classe solo dove c'è un errore vero (1–2 per capitolo). Foto solo se servono a vedere qualcosa; schermate DevTools e scheda Arduino da cercare.

## Indice completo
1 Che cos'è il CSS e come si collega: 1.1 A cosa serve il CSS · 1.2 I quattro modi di collegare il CSS · 1.3 Gli strumenti di lavoro
2 La sintassi: 2.1 Anatomia di una regola · 2.2 Commenti e formattazione · 2.3 Proprietà abbreviate · 2.4 Errori comuni e validatore
3 I selettori: 3.1 Tipo, classe, id, universale · 3.2 Raggruppare e combinare · 3.3 Selettori di attributo · 3.4 Pseudo-classi · 3.5 Pseudo-elementi · 3.6 Differenza tra classe e id, tra pseudo-classe e pseudo-elemento · 3.7 Dare i nomi alle classi
4 Cascata, ereditarietà, specificità: 4.1 Ereditarietà · 4.2 Valori speciali · 4.3 La cascata · 4.4 Calcolo della specificità · 4.5 !important e perché evitarlo · 4.6 Perché la mia regola non funziona?
5 Valori e unità: 5.1 I tipi di valore · 5.2 Unità di misura · 5.3 Differenza tra px, em e rem · 5.4 Funzioni di calcolo
6 Colori, sfondi, bordi e ombre: 6.1 Formati dei colori · 6.2 Trasparenza: opacity contro canale alfa · 6.3 Immagini di sfondo · 6.4 Gradienti · 6.5 Bordi e angoli · 6.6 Ombre · 6.7 Immagini nella pagina
7 Testo, link e liste: 7.1 Famiglie di caratteri · 7.2 Font web · 7.3 Dimensione, peso e stile · 7.4 Spaziatura e allineamento · 7.5 Decorazioni e trasformazioni · 7.6 Stile dei link · 7.7 Liste
8 Il box model: 8.1 Content, padding, border, margin · 8.2 Larghezza e altezza · 8.3 box-sizing: content-box contro border-box · 8.4 Margini · 8.5 Differenza tra margin e padding · 8.6 overflow
9 Flusso normale e display: 9.1 Il flusso normale (blocco e in linea) · 9.2 display (block · inline · inline-block · none) · 9.3 Differenza tra display: none e visibility: hidden
10 Position e float: 10.1 position (static · relative · absolute · fixed · sticky) · 10.2 Differenza tra relative, absolute, fixed e sticky · 10.3 z-index e sovrapposizione · 10.4 Float e clear (testo attorno a un'immagine · contenitore collassato · clearfix)
11 Flexbox: 11.1 L'idea (contenitore ed elementi · asse principale e trasversale) · 11.2 Proprietà del contenitore (flex-direction · flex-wrap · justify-content · align-items · gap) · 11.3 Proprietà degli elementi (flex-grow · flex-shrink · flex-basis · flex · order · align-self) · 11.4 Schemi ricorrenti (centrare · barra di navigazione · card affiancate · footer in fondo)
12 Grid: 12.1 L'idea (righe e colonne) · 12.2 Definire la griglia (grid-template-columns · fr · repeat() · minmax() · auto-fit · gap) · 12.3 Posizionare gli elementi (grid-column · grid-row · span · grid-template-areas) · 12.4 Allineamento (justify-items · align-items · place-items) · 12.5 Differenza tra Flexbox e Grid
13 Responsive design: 13.1 Perché serve (schermi diversi · meta viewport) · 13.2 Mobile first contro desktop first · 13.3 Media queries (larghezza · orientamento · breakpoint) · 13.4 Layout fluidi (percentuali · Flexbox e Grid · clamp()) · 13.5 Immagini responsive (srcset · sizes · picture)
14 Trasformazioni, transizioni, animazioni: 14.1 transform (translate · rotate · scale · skew · transform-origin) · 14.2 transition · 14.3 @keyframes e animation · 14.4 Quando animare e quando no (prestazioni · accessibilità)
15 Tabelle e moduli: 15.1 Stile delle tabelle (border-collapse · righe a zebra · tabelle su schermo piccolo) · 15.2 Stile dei moduli (input · label · :focus · :valid e :invalid · accent-color)
16 Framework CSS: Bootstrap e Tailwind: 16.1 Che cos'è un framework CSS e come si collega · 16.2 Bootstrap · 16.3 Tailwind · 16.4 Differenza tra Bootstrap e Tailwind

---
# 1 · Che cos'è il CSS e come si collega

## 1.1 A cosa serve il CSS
R: L'HTML dice cos'è ogni parte della pagina, il CSS come appare; separarli permette di cambiare l'aspetto senza toccare il contenuto.
K: senza CSS il browser applica il suo foglio di stile predefinito (*user agent stylesheet*): titoli grandi e in grassetto, link blu sottolineati; HTML = significato, CSS = presentazione; vantaggi: manutenzione, coerenza, riuso.
W «stesso HTML, tre fogli di stile»: due file affiancati + anteprima. index.html fisso (`<link rel="stylesheet" href="stile.css">` + h1 «Club di robotica», p «Ci troviamo il giovedì alle 14:30.», ul Arduino/Stampa 3D, a «Iscriviti al club»); stile.css mostra le regole applicate. Scena iniziale: stile.css vuoto, anteprima con stile del browser. Clic: 1 chiaro/serif (body #faf6ee Georgia; h1 #1f3a5f con bordo sotto; a #b5441f senza sottolineatura) · 2 scuro/mono (body #14181f, #e6edf3, Consolas; h1 #4fd1c5; a #f6ad55) · 3 colorato/sans (body #ffe66d Arial; h1 sfondo #ff6b6b bianco padding 8px; li square; a sfondo #1a1a2e bianco padding 6px 12px) · poi da capo. Fa capire: stesso HTML, aspetto diverso.
F (riconoscimento): CSS Zen Garden, screenshot piccolo.
Q (errore): «Pagina senza una riga di CSS: perché il titolo è grande e il link blu sottolineato?» → lo decide il foglio di stile predefinito del browser; l'HTML dice solo «titolo di primo livello».

## 1.2 I quattro modi di collegare il CSS
R: Per un sito si usa un file CSS esterno con link, perché una modifica vale per tutte le pagine; @import si evita.
K: attributo `style`; elemento `<style>` nell'head; file esterno `<link rel="stylesheet" href>` nell'head; `@import` (il browser scopre il secondo file solo dopo aver scaricato il primo: più lento).
S: stessa regola (titolo rosso) nei quattro modi affiancati. W con/senza: 5 pagine collegate a un solo stile.css → cambio un colore in un punto e cambiano tutte; con `style` negli attributi devo ritoccare ogni tag.
E: «Nel file stile.css devo scrivere anche il tag `<style>`» → nel file esterno solo regole; `<style>` serve solo dentro l'HTML.

## 1.3 Gli strumenti di lavoro
R: VS Code per scrivere, Live Server per vedere gli aggiornamenti, DevTools per ispezionare: ciò che cambi nei DevTools resta solo nel browser.
K: VS Code + Live Server (Prettier e CSS Peek facoltativi, una riga); DevTools: Elementi, Stili, Computed; modifiche in diretta non salvate, spariscono al ricaricamento: le prove buone si ricopiano nel file.
F (dettagli): VS Code con Live Server (editor e browser affiancati); DevTools con pannelli Elementi e Stili etichettati.
W: provo un colore nei DevTools, ricarico, torna com'era. Fa capire: dove vive una modifica.
E: «Ho cambiato il colore nei DevTools del sito della scuola: ora lo vedono tutti» → solo la copia nel tuo browser.
Q (applicazione): «Cambiate il colore del titolo del sito della scuola nei DevTools e premete F5: che succede? Lo vede il compagno di banco?» → cambia solo nel tuo browser; il ricaricamento lo azzera.

---
# 2 · La sintassi

## 2.1 Anatomia di una regola
R: Una regola ha un selettore, che dice a chi si applica, e un blocco di dichiarazioni `proprietà: valore;` che dice come.
K: selettore, blocco `{}`, dichiarazione, proprietà, valore; proprietà minuscole con trattino (`font-size`).
S: regola annotata con le 5 parti. W «Prova tu»: tre menu (selettore h1/p/li · proprietà · valore) → la regola si compone e la pagina cambia.
E: «Le proprietà si scrivono come in Java: fontSize» → in CSS `font-size`; camelCase solo da JavaScript (modulo JavaScript, non qui).

## 2.2 Commenti e formattazione
R: L'unico commento valido è `/* */`; la formattazione non cambia nulla per il browser ma serve a chi legge.
K: `/* */` anche su più righe, non annidabile; una dichiarazione per riga, indentazione; commentare una riga = disattivarla nelle prove.
S: stesso CSS in tre modi (tutto su una riga · ordinato · compresso).
Q (errore): «Scrivo `// ricordati di cambiare il colore` sopra la regola dei titoli: funziona ancora?» → no: il `//` finisce nel selettore e la regola è scartata; si usa `/* */`.

## 2.3 Proprietà abbreviate
R: Una proprietà abbreviata ne imposta più insieme e ciò che non scrivi torna al valore iniziale.
K: margin/padding con 1–4 valori in senso orario dall'alto (1 tutti · 2 verticale/orizzontale · 3 alto/orizzontale/basso · 4 alto/destra/basso/sinistra); `border` richiede lo stile; `font` richiede dimensione e famiglia; `background` azzera anche l'immagine.
W a clic 1/2/3/4 valori: scatola con i 4 lati che si colorano col valore ricevuto. T: forma estesa/abbreviata di border, font, background. (margin a 3 valori: esempio e distrattore quiz, non domanda.)
E: «`border: 2px red` disegna un bordo rosso» → manca lo stile · «`font: 18px` cambia la dimensione» → manca la famiglia, scartata · «`background: red` cambia solo il colore» → azzera anche l'immagine.

## 2.4 Errori comuni e validatore
R: Il browser non segnala gli errori: scarta ciò che non capisce e va avanti; si trovano con editor, DevTools e validatore.
K: validatore W3C (jigsaw.w3.org/css-validator, profilo predefinito CSS3+SVG; provarlo: può non riconoscere le novità più recenti); DevTools: dichiarazione barrata con avviso.
W 5 errori, clic Avanti 0→5 (scena 0 = foglio giusto), titolo del caso + codice con riga errata evidenziata + due anteprime «come lo volevi»/«come lo vede il browser» (h1 «Titolo», p «Un paragrafo di testo.»). Foglio giusto: `h1{color:red;font-size:48px}` `p{color:blue}`. Casi: 1 manca `;` dopo `color: red` → h1 perde colore e dimensione (righe fuse, scartate), p blu · 2 `colour: red` → h1 48px nero, nessun avviso · 3 `// titolo` sopra h1 → regola h1 scartata, p blu · 4 `font-size: 48;` → h1 rosso, dimensione predefinita (manca l'unità, eccezione 0) · 5 graffa non chiusa → h1 rosso 48px ma p letto dentro il blocco e non funziona (nero). Una frase per caso.
F (dettagli): DevTools con proprietà non valida segnalata; validatore W3C con un errore.
Q (anticipa): «Dimentico il `;` dopo `color: red`, sotto c'è `font-size: 48px;`: titolo rosso, grande, tutti e due o nessuno?» → nessuno dei due: le righe diventano una dichiarazione sola non valida.

---
# 3 · I selettori
Widget comune «Selettore-cacciatore» (3.1–3.4): pagina campione sopra mostrata come elenco indentato (una riga per elemento: tag con attributi, testo se foglia); campo selettore + 12 esempi pronti: `p` · `.card` · `#robot` · `.card.big` · `.card .big` · `main p` · `main > p` · `h3 + p` · `h2 ~ div` · `a[href^="https"]` · `p:nth-child(2)` · `.card:not(.big)`. Evidenzia gli elementi presi, conteggio «N elementi selezionati»; selettore non valido → «in un foglio di stile il browser scarterebbe l'intera regola». Scena iniziale: `p` (3). Implementabile con querySelectorAll su DOM non attaccato.

## 3.1 Tipo, classe, id, universale
R: Tipo, classe, id e universale scelgono per tag, per class, per id unico o tutti; punto e cancelletto fanno parte del selettore.
K: `p`, `.nota`, `#robot`, `*`; più classi per elemento; id unico. W: widget comune.
E: «`.titolo` e `titolo` sono lo stesso selettore» → senza punto cerca un tag `<titolo>` · «L'id si può dare a più elementi con lo stesso stile» → id unico, per più elementi la classe.

## 3.2 Raggruppare e combinare (ADD selettori composti)
R: Virgola raggruppa, spazio prende i discendenti, `>` i figli diretti, `+` e `~` i fratelli; senza spazio le condizioni valgono sullo stesso elemento.
K: virgola = lista (se uno è non valido la regola intera è scartata); spazio = discendente a qualsiasi profondità; `>` figli diretti; `+` fratello subito dopo; `~` tutti i fratelli seguenti; senza spazio = stesso elemento (`p.nota`, `.card.big`); il CSS non sceglie in base a ciò che viene dopo.
T: combinatori (simbolo · come si legge · cosa prende). W: widget comune, un clic per combinatore.
E: «`.card .big` e `.card.big` sono lo stesso selettore» · «Se un selettore della lista è sbagliato, funzionano gli altri» → la regola intera è scartata.
Q (errore): «`.card .big` e `.card.big`: stesso selettore?» → no: con spazio `.big` è dentro `.card`; senza spazio l'elemento ha entrambe le classi.

## 3.3 Selettori di attributo
R: I selettori di attributo scelgono in base ai dati dell'elemento, senza aggiungere classi a mano.
K: `[attr]` presenza · `=` valore esatto · `^=` inizia · `$=` finisce · `*=` contiene (+ `~=` parola in elenco, flag `i`).
T: operatore · significato · esempio. W: widget comune con `a[href^="https"]`, `a[href$=".pdf"]`, `input[type="email"]`.
E: «`[href=".pdf"]` prende i link ai PDF» → `=` vuole il valore esatto, serve `$=`.

## 3.4 Pseudo-classi
R: La pseudo-classe sceglie un elemento esistente in un certo stato, posizione o che non soddisfa una condizione.
K: stati `:hover :focus :active :checked :disabled`; posizione `:first-child :last-child :nth-child() :nth-of-type() :only-child :empty`; negazione `:not()`; `nth-child` conta tutti i fratelli, `nth-of-type` solo quelli dello stesso tag; su touch non c'è vero hover; rimandi: `:link/:visited` cap. 7, `:valid/:invalid` cap. 15; `:is()`, `:where()`, `:has()` e `:focus-visible` non sono trattati.
W «Prova tu»: pulsante vero; passa il mouse, Tab, tieni premuto → etichetta con la pseudo-classe attiva; + widget comune per `:nth-child(2)`, `:not(.big)`, `odd`. T: espressione → posizioni (odd, even, 2n, n+3).
E: «`p:nth-child(2)` colora il secondo paragrafo» → colora un p solo se è il secondo figlio.
Q (applicazione): «In un div c'è un h2 seguito da tre p: cosa colora `p:nth-child(2)`?» → il primo paragrafo, perché è il secondo figlio del div.

## 3.5 Pseudo-elementi
R: I pseudo-elementi sono parti di un elemento o contenuti generati che nell'HTML non ci sono; servono a decorare.
K: `::first-line ::first-letter ::selection ::placeholder`; `::before ::after` visibili solo con `content`; doppio due punti; niente informazioni importanti nel contenuto generato.
W a clic, un pseudo-elemento alla volta su un paragrafo (capolettera · prima riga · icona prima · freccia dopo · selezione · segnaposto) con la riga CSS accanto. Fa capire: quali parti esistono senza essere nell'HTML.
E: «`::before` mette l'icona anche senza `content`» → senza content non appare nulla.

## 3.6 Differenza tra classe e id, tra pseudo-classe e pseudo-elemento
R: La classe si riusa, l'id è unico; la pseudo-classe sceglie uno stato, il pseudo-elemento una parte o un contenuto generato.
K: classe riusabile e multipla; id unico, serve anche per ancore, `label for`, JavaScript; `:` stato/posizione di elemento esistente, `::` parte o contenuto generato; si combinano (`a:hover::after`).
T: due confronti; tenere solo ciò che aggiunge (usi dell'id, combinazione).

## 3.7 Dare i nomi alle classi
R: Il nome dice a che cosa serve l'elemento, non com'è fatto; BEM lo struttura come blocco__elemento--modificatore.
K: `.avviso` non `.rosso`; minuscolo con trattini; non troppo generici; niente id per lo stile (convenzione, cap. 4); BEM in forma breve (nessun confronto tra metodologie).
S: prima/dopo (`.rosso .box1 .sinistra-grande` → `.avviso .card__titolo .card--evidenziata`) + BEM etichettato su una card.
E: «`.rosso` è un buon nome» → quando il colore cambia il nome mente.

---
# 4 · Cascata, ereditarietà, specificità

## 4.1 Ereditarietà
R: Molte proprietà del testo passano ai discendenti, quelle della scatola no; `inherit` forza l'ereditarietà.
K: ereditate: proprietà del testo (color, font-*, line-height, text-align); non ereditate: della scatola (margin, padding, border, background); caso: il color del body non cambia i link (il foglio del browser dà un colore agli `a`).
W «Prova tu»: albero body > article > h2, p > a; scegli proprietà e valore da dare al body e vedi chi lo riceve. T: ereditate/non ereditate.
E: «Se do un bordo al genitore ce l'hanno anche i figli» · «Il color del body vale per tutto il testo, link compresi».
Q (errore): «Metto `color: green` sul body: titoli e link diventano verdi?» → titoli sì, link no (colore proprio del browser).

## 4.2 Valori speciali (ADD `all`)
R: `inherit` prende dal genitore, `initial` il valore iniziale della specifica, `unset` uno dei due, `revert` quello del browser.
K: `initial` non è il valore del browser per l'elemento (`display: initial` su un div → inline); `unset` = inherit se la proprietà si eredita, altrimenti initial; `revert` → foglio del browser (display → block); `all`; `revert-layer` non trattato.
S: stesso esempio (div con display e color) nei 4 valori con il risultato.
E: «`display: initial` rimette il block dei div» → diventa inline; serve `revert`.

## 4.3 La cascata
R: Il browser ordina le dichiarazioni in conflitto per origine e importanza, specificità, ordine di scrittura.
K: criteri in ordine: origine e importanza → layer (`@layer`, non trattato) → specificità → ordine di apparizione; origini normali: browser < utente < autore; l'ordine conta solo a parità del resto.
W a 3 clic su 5 dichiarazioni di color in gara (browser · utente · due dell'autore · attributo style): 1 scarta le origini inferiori · 2 scarta le specificità minori · 3 tra pari vince l'ultima. Fa capire: l'ordine dei criteri.
E: «Vince sempre la regola scritta per ultima».
Q (errore): «`.nota{color:red}` prima, `p{color:blue}` dopo, paragrafo con class="nota": colore?» → rosso: la specificità conta prima dell'ordine.

## 4.4 Calcolo della specificità (ADD `*`, `:not`, `:is`, `:where`)
R: La specificità è una terna (id, classi, tipi) confrontata da sinistra; non si somma e l'ordine conta solo a parità.
K: terna (id · classi/attributi/pseudo-classi · tipi/pseudo-elementi), colonna per colonna, nessun riporto (11 tipi non battono una classe); `style` batte i selettori; `*` zero; `:where()` zero; `:not()` e `:is()` prendono quella dell'argomento.
W «Chi vince?»: elemento `<div class="box"><p id="avviso" class="nota">` (shadow DOM); 3 regole in colonna con colore fisso (p rosso, .nota blu, div p verde); selettore modificabile, casella !important, frecce su/giù per l'ordine; per ogni regola «specificità a,b,c · si applica/non si applica/non valido · VINCE»; il vincitore lo decide il browser (getComputedStyle); frase «Perché»: unica regola / !important / specificità più alta / a parità vince l'ultima. Scena iniziale: vince .nota (blu). T: otto selettori con la loro terna.
E: «Più selettori scrivo, più la regola è forte» → `div div div p` perde contro `.nota`.

## 4.5 !important e perché evitarlo
R: !important batte le regole normali prima di ogni calcolo, ma nel lavoro normale segnala un conflitto di specificità non risolto.
K: con !important l'ordine delle origini si inverte (esiste per l'accessibilità: l'utente può imporre i suoi stili); usi legittimi: classi di utilità (`.nascosto`), stili inline di terzi; altrimenti guerra degli !important.
W: stesso «Chi vince?» con la casella. S: scala di precedenza semplificata (browser, utente, autore; inversione con !important).
E: «!important risolve sempre» → fino al prossimo !important più specifico.

## 4.6 Perché la mia regola non funziona?
R: Le cause sono poche e si controllano in ordine con i DevTools.
K: il selettore prende l'elemento? · dichiarazione valida? · regola più specifica o più tarda la batte? · valore per ereditarietà o dal browser? · file caricato?
S: flusso a 5 domande sì/no → causa. F (dettagli): DevTools pannello Stili con dichiarazioni barrate e «Inherited from»; scheda Computed con la regola vincente.

---
# 5 · Valori e unità

## 5.1 I tipi di valore (ADD)
R: Ogni proprietà accetta solo certi tipi di valore; uno sbagliato rende la dichiarazione non valida.
K: parole chiave (`auto`, `none`); numeri senza unità (`line-height: 1.5`, `opacity`, `z-index`); lunghezze (solo `0` senza unità); percentuali; colori (cap. 6); stringhe e `url()`; funzioni (`calc()`, `rgb()`); `line-height` senza unità si moltiplica per ogni elemento, con unità si eredita già calcolato.
T: tipo · esempi · proprietà tipiche.

## 5.2 Unità di misura (ADD assolute, vmin/vmax, svh/lvh/dvh; unità del container non trattate)
R: Le unità sono assolute o relative a un'altra grandezza; la percentuale dipende dalla proprietà.
K: assolute px cm mm in pt (1in = 96px = 2,54cm; il pixel CSS non è un pixel dello schermo); relative % em rem ch vw vh vmin vmax; % dipende dalla proprietà (width: larghezza contenitore · font-size: genitore · margin e padding, anche alto/basso: larghezza contenitore); su mobile 100vh è più alto dello schermo (ignora la barra) → svh lvh dvh (Baseline Widely Available da giugno 2025); 100vw include la scrollbar verticale → scroll orizzontale; `ch` = larghezza dello zero (`max-width: 65ch`).
W «Prova tu» unità: cursori finestra 300–640 (480) e testo del browser 12–20 px (16); 6 barre: `width: 200px` · `40%` · `30vw` (simulati rispetto al riquadro «finestra» con una variabile) · `12rem` · `12em` (dentro un elemento con font-size 1.25rem) · `40ch`; ogni barra mostra il valore calcolato in px e, in rosso, «(esce dalla finestra)». T: unità → rispetto a che cosa.
E: «`padding-top: 50%` è metà dell'altezza» → larghezza del contenitore · «`width: 100vw` riempie esattamente la pagina» → con la scrollbar esce.

## 5.3 Differenza tra px, em e rem
R: px non cambia mai, rem segue il testo della radice, em quello dell'elemento e si accumula nei livelli annidati.
K: rem × dimensione del testo della radice (16px, modificabile dall'utente); em × dimensione del testo dell'elemento (per font-size: del genitore); rem per testi e spaziature; em per componenti che scalano col proprio testo (padding di un bottone); px per bordi sottili; mai `html{font-size:10px}` (ignora la preferenza dell'utente).
W: lo stesso di 5.2 + animazione a clic su liste annidate: `font-size: 1.2em` a ogni livello cresce (1,2 · 1,44 · 1,73), `1.2rem` resta uguale.
E: «1em è sempre 16px» · «Con `html{font-size:10px}` i conti sono più facili e non cambia nulla».
Q (anticipa): «Lista dentro lista dentro lista, ciascuna `font-size: 1.2em`: il terzo livello è grande quanto il primo?» → no: 1,2×1,2×1,2 = 1,73.

## 5.4 Funzioni di calcolo
R: calc() combina unità, min() e max() fissano limiti, clamp() tiene un valore tra minimo e massimo.
K: `calc(100% - 2rem)` (spazi obbligatori attorno a + e -); `min()` dà il più piccolo = limite massimo; `max()` il più grande = limite minimo; `clamp(min, preferito, max)` = `max(min, min(preferito, max))`; solo `vw` nel testo non risponde bene allo zoom: `1rem + 1vw`.
W «clamp»: cursore finestra 320–1280 (720); numeri: minimo rem (1), preferito `a rem + b vw` (0,5 + 2), massimo rem (2); riga CSS generata; grafico SVG dimensione del testo (px) contro larghezza (linea piena = clamp, tratteggio = valore preferito, marcatore, assi 0–48px); anteprima del testo alla dimensione calcolata; frase di zona (minimo/crescita/massimo). T: calc/min/max/clamp con esempio.
E: «`calc(100%-2rem)` funziona» → mancano gli spazi, scartata · «`min()` mette un minimo» → è un limite massimo.
Q (errore): «`width: min(100%, 600px)`: minima o massima?» → massima: sceglie il più piccolo.

---
# 6 · Colori, sfondi, bordi e ombre

## 6.1 Formati dei colori (ADD transparent, #rrggbbaa, sintassi moderna, cenno hwb/oklch)
R: Lo stesso colore si scrive in più formati; HSL è comodo per costruire palette, RGB per i canali.
K: nomi (`rebeccapurple` aggiunto in Color 4); hex `#rrggbb`, breve `#fc0` = `#ffcc00`, con alfa `#rrggbbaa`; `rgb()` 0–255; `hsl()` tinta° saturazione% luminosità%; `currentColor`, `transparent`; sintassi moderna `rgb(r g b / a)` (rgba() non serve più; forme con virgole ancora valide); `hwb()` e `oklch()` solo cenno (verificare il supporto).
W «Un colore, due scritture»: swatch + cursori HSL (H 0–360, S, L) + cursori RGB (R/G/B 0–255, accent rosso/verde/blu) sincronizzati nei due sensi + righe `hsl()`, `rgb()`, esadecimale (con «forma breve» se possibile). Scena iniziale hsl(210 60% 40%). T: formato → quando conviene.
E: «`#fc0` è `#fc0000`» → ogni cifra si raddoppia: `#ffcc00`.

## 6.2 Trasparenza: opacity contro canale alfa
R: opacity rende trasparente tutto l'elemento, l'alfa di un colore solo quel colore.
K: opacity: sfondo, testo, bordi, figli; alfa nel colore: solo quel colore; `opacity: 0` nasconde ma lascia l'elemento nell'impaginazione e cliccabile.
W confronto affiancato su sfondo a scacchiera: stessa card (sfondo blu, testo bianco) con opacity e con alfa sul solo sfondo, cursore da 1 a 0.
E: «`opacity: 0.5` rende trasparente solo lo sfondo».
Q (errore): «Sfondo blu, testo bianco, `opacity: 0.5`: cosa diventa trasparente?» → tutto; per il solo sfondo serve l'alfa nel colore.

## 6.3 Immagini di sfondo
R: Le immagini di sfondo si controllano con size, position, repeat e si sovrappongono; le immagini di contenuto vanno nell'HTML.
K: `background-image`; `background-size`: `cover` riempie e ritaglia, `contain` mostra tutto e può lasciare vuoti, `auto`; `position`; `repeat`; sfondi multipli separati da virgola (il primo sta sopra); immagini che portano contenuto → `<img>` con `alt`.
W a clic sulla stessa foto: auto → cover → contain → posizione → ripetizione → due sfondi sovrapposti. F (riconoscimento): scheda Arduino (foto campione 6.3 e 6.7).
E: «L'immagine importante la metto come sfondo CSS» → niente testo alternativo · «`cover` mostra tutta l'immagine» → la ritaglia.

## 6.4 Gradienti
R: Un gradiente è un'immagine generata: va in background-image, mai in background-color.
K: `linear-gradient()` (direzione o angolo, `90deg` = verso destra); `radial-gradient()` (forma, posizione); `conic-gradient()` (torte, ruote di colore); stop con la stessa posizione = taglio netto.
W «Prova tu»: tipo, angolo, 2–3 colori + riga CSS.
E: «`background-color: linear-gradient(...)` funziona» → scartata.

## 6.5 Bordi e angoli (ADD stili di bordo, currentColor)
R: border imposta spessore, stile e colore; outline è un contorno che non occupa spazio.
K: `border: spessore stile colore` (senza stile non si vede; solid dashed dotted double…); se manca il colore vale `currentColor`; `border-radius` 1–4 valori in senso orario da alto-sinistra; `50%` quadrato → cerchio; valore enorme → pillola; `outline` non occupa spazio, non per lato, serve soprattutto per il focus.
W con/senza su una riga di elementi: con `border` i vicini si spostano, con `outline` no. S: border-radius con 1, 2, 3, 4 valori.
E: «`outline` è un bordo come gli altri».

## 6.6 Ombre
R: box-shadow ha offset, sfocatura, diffusione e colore; non cambia l'impaginazione.
K: `box-shadow: x y sfocatura(facoltativa) diffusione(facoltativa) colore`; `inset`; più ombre separate da virgola; segue border-radius; `text-shadow` senza diffusione né inset; l'ombra non rimedia a poco contrasto; `filter: drop-shadow` → cap. 14.
W «Costruisci l'ombra»: card bianca (#fff) su fondo #eceae2; cursori x e y (−40..40), sfocatura 0–60, diffusione −20..20, opacità del nero 0–100; casella inset; preset Netta (6px 6px 0 0 30%) · Morbida (0 8px 24px 0 25%) · Interna (inset 0 4px 12px 0 30%); riga CSS. Scena iniziale: Morbida.
E: «Il terzo valore di box-shadow è la distanza» → è la sfocatura; con 0 l'ombra è netta.

## 6.7 Immagini nella pagina (ADD attributi width/height)
R: max-width:100% adatta l'immagine al contenitore, object-fit decide come entra in un riquadro dato.
K: `img{max-width:100%;height:auto}`; `object-fit`: `fill` (predefinito, deforma) · `cover` ritaglia · `contain` mostra tutto; `aspect-ratio`; `width` e `height` negli attributi dell'`<img>` riservano lo spazio prima del caricamento.
W: stessa foto in tre riquadri uguali (fill, cover, contain) + riquadro ridimensionabile con max-width:100%. T: object-fit contro background-size. F: scheda Arduino.
E: «`width` e `height` fissi non danneggiano la foto».
Q (applicazione): «Foto 4:3 con `width:200px; height:200px`: com'è?» → deformata (object-fit: fill); servono `height:auto` o `object-fit: cover`.

---
# 7 · Testo, link e liste

## 7.1 Famiglie di caratteri (ADD famiglie generiche, system-ui)
R: font-family è una lista in ordine di preferenza che finisce con una famiglia generica.
K: si usa il primo font installato sul computer di chi legge; generiche: serif, sans-serif, monospace, poi cursive, fantasy, system-ui; nomi con spazi tra virgolette; serif = con grazie, sans = senza, monospace = larghezza fissa (codice).
W «Font stack»: campo font-family + 4 esempi (`Georgia, serif` · `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` · `"Fira Code", Consolas, monospace` · `"Font Inesistente", cursive`); anteprima del testo; elenco dei nomi con stato «famiglia generica / installato / non trovato» e il primo usato evidenziato (rilevamento dei font installati con canvas measureText contro monospace/serif/sans-serif); dipende dal computer. S: stessa lettera in serif e sans con le grazie evidenziate.
E: «`font-family: "Gill Sans"` e tutti vedranno Gill Sans».
Q (anticipa): «`font-family: "Gill Sans"`: tutti vedranno Gill Sans?» → no, solo chi lo ha installato; per gli altri il font predefinito: serve una lista con generica finale.

## 7.2 Font web (ADD font-display, font variabili cenno)
R: @font-face rende scaricabile un font, ma ogni font e peso è un file in più che rallenta la pagina.
K: `@font-face`: nome scelto, `src: url() format("woff2")`, peso; `font-display: swap`; woff2 è il formato da usare; font variabili cenno; Google Fonts da server Google o ospitato in locale.
W con/senza `font-display: swap` su due righe temporali (senza: testo invisibile per qualche istante; con swap: testo subito col font di riserva, poi «salta»). S: @font-face annotato.
Approfondimento (fatto di cronaca, non consulenza legale): il 20 gennaio 2022 il tribunale di Monaco ha riconosciuto 100 euro a un visitatore il cui IP era stato trasmesso a Google caricando un font (causa 3 O 17493/20); i font si possono usare in locale.
E: «Più font e più pesi carico, più la pagina è bella» → ogni file rallenta · «Incorporare Google Fonts è solo un link, non cambia nulla per la privacy».

## 7.3 Dimensione, peso e stile
R: Il peso del font esiste solo se il font lo contiene; italic è un corsivo disegnato, oblique un testo inclinato.
K: `font-size` (unità cap. 5); `font-weight` 100–900 (normal = 400, bold = 700, lighter/bolder); `font-style` italic/oblique; peso mancante → il più vicino o simulato.
W «Prova tu»: dimensione, peso, stile su un campione + riga CSS. S: scala dei pesi.
E: «`font-weight: 900` rende più nero qualunque font».

## 7.4 Spaziatura e allineamento
R: line-height senza unità scala col testo; text-align allinea il contenuto, non la scatola.
K: `line-height` senza unità (indicativo 1,4–1,6); `letter-spacing`, `word-spacing`; `text-align` left/right/center/justify (start/end); `text-indent`; justify con `hyphens: auto` e `lang`; WCAG 1.4.12: l'utente deve poter portare l'interlinea a 1,5 senza che il testo si rompa.
W: cursori line-height, letter-spacing, text-indent + 4 allineamenti.
E: «`text-align: center` centra il paragrafo nella pagina» · «`line-height: 20px` è come `1.5`» → con l'unità non scala.

## 7.5 Decorazioni e trasformazioni (ADD overflow-wrap, hyphens)
R: I puntini di text-overflow compaiono solo con overflow hidden e white-space nowrap.
K: `text-decoration` (linea, stile, colore, spessore; `text-underline-offset`); `text-transform` cambia l'aspetto non il testo; `white-space` normal/nowrap/pre/pre-wrap/pre-line; `overflow-wrap` per parole lunghe.
W a 3 clic su ellipsis: senza nowrap (va a capo) · senza overflow:hidden (esce dal riquadro) · completo (puntini). T: valori di white-space.
E: «`text-overflow: ellipsis` basta per i puntini».

## 7.6 Stile dei link (ADD :any-link)
R: Gli stati dei link hanno la stessa specificità: decide l'ordine, LVHA.
K: `:link :visited :hover :focus :active`; ordine LVHA; `:visited` solo proprietà di colore (privacy); `:any-link`; non togliere l'outline del focus senza sostituirlo; il solo colore non basta a riconoscere i link.
W «LVHA»: link su fondo bianco; 4 regole in colonna (link blu · visited viola · hover rosso · active arancione) riordinabili con frecce + «Ripristina LVHA»; caselle Visitato (spuntata), Mouse sopra, Premuto; stati simulati con classi (stessa specificità); per ogni regola «si applica ora/no · VINCE»; frase «Perché» e «Ordine attuale: L V H A (corretto)».
E: «L'ordine delle regole sui link non conta» · «`a:visited{display:none}` nasconde i link visitati» → solo colori · «`outline:none` toglie solo un contorno fastidioso» → rompe la tastiera.
Q (errore): «Link visitato con mouse sopra: prima `a:hover{color:red}`, poi `a:visited{color:purple}`: colore?» → viola: stessa specificità, vince l'ultima; per questo LVHA.

## 7.7 Liste
R: list-style none toglie il simbolo ma non il rientro; i contatori CSS numerano anche ciò che non è una lista.
K: `list-style` (tipo, posizione, immagine): disc circle square decimal lower-alpha lower-roman none; `::marker` colore e dimensione; il rientro viene dal `padding-left` del browser; `counter-reset`, `counter-increment`, `counter()` in `content`; attributi HTML `start`, `reversed`.
W a clic sui contatori: reset sul contenitore · incremento a ogni titolo · `counter()` in `::before` → compaiono i numeri. S: ul con rientro evidenziato.
E: «`list-style: none` toglie anche il rientro».

---
# 8 · Il box model

## 8.1 Content, padding, border, margin
R: Ogni elemento è una scatola a strati: contenuto, padding, bordo, margine.
K: dal centro: contenuto, padding (dentro il bordo), bordo, margine (fuori); lo sfondo si estende sotto padding e bordo, non sotto il margine.
W «La scatola»: strati annidati colorati (margin, border, padding, content) con etichetta se lo strato è ≥14px + cursori width 60–220 (140), height 30–100 (60), padding 0–30 (16), border 0–16 (6), margin 0–30 (20) + scelta box-sizing; mostra «Contenuto a×b · box del bordo · con i margini» e la riga CSS.
F (dettagli): DevTools scheda Computed con il diagramma del box model.
E: «Il margine fa parte dello sfondo dell'elemento».

## 8.2 Larghezza e altezza (ADD max-width, min-height, height:100%)
R: width auto riempie il contenitore, height auto segue il contenuto; min e max fissano i limiti.
K: `max-width` per contenuti che si adattano; `height: 100%` solo se il genitore ha altezza definita, altrimenti `min-height`.
W «Prova tu»: contenitore a larghezza regolabile e 4 blocchi: `width:auto` · `width:100%` con padding · `max-width:300px` · `min-width:200px`.
E: «`width:100%` con padding sta sempre nel contenitore» → con content-box esce · «`height:100%` riempie la pagina».

## 8.3 box-sizing: content-box contro border-box
R: Con content-box padding e bordo si aggiungono alla width, con border-box ne fanno parte.
K: content-box (predefinito): width = contenuto; border-box: width comprende padding e bordo; reset `*, *::before, *::after{box-sizing:border-box}`.
W: lo stesso di 8.1.
E: «`width:200px` con padding e bordo occupa sempre 200px».
Q (applicazione): «Div `width:200px; padding:20px; border:5px solid`: quanto occupa in orizzontale?» → 250px (content-box).

## 8.4 Margini (ADD proprietà logiche, cenno)
R: I margini verticali tra blocchi si fondono (vale il più grande); margin auto centra solo in orizzontale.
K: margini verticali di blocchi vicini → distanza = il più grande, non la somma; orizzontali mai; nessun collasso tra elementi flex/grid; `margin: 0 auto` centra in orizzontale un blocco con larghezza definita; `auto` in verticale = 0 nel flusso normale; margini negativi avvicinano o sovrappongono; `margin-inline`, `padding-block` cenno.
W «Margini che si fondono»: blocchi A (blu, margin-bottom) e B (verde, margin-top), cursori 0–60 (20 e 30), scelta layout normale/flex in colonna; banda tratteggiata tra i due con la distanza misurata; frase: normale «vale il più grande max(a,b)», flex «si sommano». S: margini negativi.
E: «`margin:auto` centra anche in verticale» · «Due blocchi affiancati con margini orizzontali: il margine si fonde».
Q (errore): «p con `margin-bottom:20px` sopra p con `margin-top:30px`: quanti px li separano?» → 30px.

## 8.5 Differenza tra margin e padding
R: Il padding è spazio dentro l'elemento e prende lo sfondo, il margine è spazio fuori e trasparente.
K: padding per «respirare» dentro, margin per separare dai vicini.
T: confronto (sfondo · area cliccabile · collasso · valori negativi). S: stesso elemento con solo padding e solo margin.
E: «Per staccare un elemento dal vicino uso il padding».

## 8.6 overflow (ADD overflow-x/y, clip)
R: overflow decide che cosa succede al contenuto che non entra: esce, è tagliato o scorre.
K: `visible` (esce) · `hidden` (tagliato) · `scroll` (barre sempre) · `auto` (barre se servono); `overflow-x`, `overflow-y`; `clip` cenno.
W a clic, un valore alla volta su un riquadro con testo lungo. Fa capire: che cosa succede al contenuto che esce.
E: «`overflow:hidden` fa scorrere il contenuto» → lo taglia · «`scroll` e `auto` sono uguali» → scroll mostra sempre le barre.

---
# 9 · Flusso normale e display

## 9.1 Il flusso normale (ADD elementi sostituiti)
R: Il flusso normale dispone gli elementi nell'ordine dell'HTML: i blocchi vanno a capo, quelli in linea scorrono nella riga.
K: blocchi con `width:auto` occupano tutta la larghezza del contenitore; in linea scorrono come parole e vanno a capo a riga piena; l'assegnazione viene dal foglio di stile del browser: blocchi div p h1–h6 ul section header form; in linea span a em strong br; img, input, button sono in linea ma *sostituiti* (dimensioni proprie).
S: due colonne (blocchi impilati / parole in riga che vanno a capo) con le «righe» disegnate. F (dettagli): DevTools con `user agent stylesheet: div { display: block }`.
W animazione «il browser mette in fila»: a sinistra il codice `<h1>Club</h1> <p>Corsi</p> <span>il</span> <span>giovedì</span> <a>Iscriviti</a> <div>Arduino</div>`, a destra una finestra vuota. Clic: 1 h1 occupa la prima riga intera · 2 p sotto, riga intera · 3 span «il» apre una riga in linea (largo quanto il testo) · 4 span «giovedì» si accoda · 5 a «Iscriviti» si accoda e riempie la riga · 6 div va a capo a tutta larghezza. Fa capire: ordine del codice, blocchi contro elementi in linea.
E: «Gli elementi vanno dove li metto io, senza un ordine» → seguono l'ordine del codice · «Un div è largo quanto il suo testo» → occupa tutta la larghezza.

## 9.2 display (ADD list-item, flow-root, contents cenno; inline-flex/inline-grid → cap. 11–12)
R: display decide se un elemento si comporta da blocco o in linea e come dispone i figli; gli elementi in linea ignorano width e height.
K: valore «di fuori» (blocco/in linea) e «di dentro» (flusso, flex, grid); `block` va a capo, accetta tutto; `inline` ignora width/height, margini verticali non spostano le righe; `inline-block` in riga ma accetta width/height/margini; `none` non esiste nell'impaginazione; `list-item` (li); `flow-root` contiene i float e impedisce il collasso dei margini; `contents` cenno.
W «display: Prova tu»: 6 elementi A–F (stessi width:130px, height:40px, margin:6px 4px, padding:4px 8px), menu display per elemento (block/inline/inline-block/none), cursore larghezza contenitore 260–640 (460), caselle «Togli gli spazi tra i tag» e «width:auto ai blocchi»; spazi reali tra gli elementi; per ogni elemento dimensioni misurate («width e height ignorati» se inline, «non esiste» se none). Scena iniziale: A,B block · C,D inline · E,F inline-block.
E: «Un span con `width:200px` diventa largo 200px» · «inline-block e block sono uguali» · «Tra due inline-block c'è uno spazio che non ho messo» → spazi dell'HTML · «Sotto la mia immagine c'è uno spazio» → img in linea sulla linea di base: `display:block`.
Q (errore): «`width:200px` su uno `<span>`: com'è largo?» → quanto il contenuto: gli elementi in linea ignorano width/height; serve inline-block o block.

## 9.3 Differenza tra display: none e visibility: hidden (ADD hidden, opacity)
R: display none toglie l'elemento dall'impaginazione, visibility hidden lo rende invisibile lasciando lo spazio.
K: `display:none` → vicini prendono il posto, non cliccabile, non letto dai lettori di schermo; `visibility:hidden` → spazio occupato, un figlio può riattivarsi con `visible`; `opacity:0` → invisibile, spazio occupato, ancora cliccabile e letto; attributo `hidden` = display:none ma una regola con `display` lo sovrascrive.
W «Nascondere B»: riga flex con A (blu), B (bottone verde «cliccami»), C (ambra); scelta: B visibile / display:none / visibility:hidden / opacity:0; mostra se C si sposta, contatore «clic ricevuti da B» (azzerato a ogni cambio) e una frase per metodo (clic, tastiera, lettore di schermo). T: confronto (spazio · clic · lettore · figli).
E: «display:none e visibility:hidden sono la stessa cosa» · «opacity:0 nasconde come display:none».
Q (anticipa): «Nascondo il secondo di tre paragrafi: con display:none il terzo sale? E con visibility:hidden?» → con none sale; con hidden resta il vuoto.

---
# 10 · Position e float

## 10.1 position (ADD inset; transform su antenato come riferimento di fixed, cenno cap. 14)
R: position decide come si colloca un elemento: relative rispetto al suo posto, absolute al più vicino antenato posizionato, fixed alla finestra, sticky fino a una soglia.
K: `top/right/bottom/left` (o `inset`) funzionano solo se non è `static`; `relative` sposta ma il suo spazio resta occupato; `absolute` esce dal flusso (i vicini ne prendono il posto), si riferisce al più vicino antenato posizionato, altrimenti alla pagina, larghezza `auto` = contenuto; `fixed` rispetto alla finestra, non scorre; `sticky` scorre finché raggiunge `top`, poi resta fermo ma solo dentro il genitore (serve la soglia; non funziona con antenati con overflow ≠ visible).
W «position: Prova tu» (static/relative/absolute/sticky; fixed nell'animazione): area «pagina» scorrevole (altezza 250, position relative) con intestazione, un genitore (bordo tratteggiato) con tre blocchi A, B, C (alti 52px) e altri blocchi sotto; B è il soggetto; menu position di B, cursori top 0–60 (20) e left 0–60 (30), casella «il genitore ha position: relative» (spenta); riquadro tratteggiato = posto originale di B (solo relative e sticky); per absolute si evidenzia il riferimento (genitore o pagina); riga CSS e frase di spiegazione per modo. Scena iniziale: relative con top 20, left 30.
W animazione a 3 clic su una pagina che scorre, con tre barre disegnate: static, sticky (top:0), fixed (in alto a destra) dentro un genitore alto. Scena: scroll 0, tutte in posizione. Clic: 1 scroll di 150px: static sale con la pagina, sticky si blocca in alto, fixed resta · 2 scroll di 300px: idem · 3 scroll di 450px: sticky si ferma al bordo basso del genitore e sale con lui; fixed resta. Fa capire: rispetto a che cosa si muove ciascuno.
E: «position:relative sposta l'elemento e libera il suo posto» · «absolute si posiziona rispetto al genitore» · «top funziona su ogni elemento» · «sticky funziona anche senza top».
Q (errore): «`div` con `position:absolute` dentro un genitore senza `position`: rispetto a che cosa si colloca?» → al più vicino antenato posizionato; se non c'è, alla pagina.

## 10.2 Differenza tra relative, absolute, fixed e sticky
R: I quattro valori differiscono per riferimento, spazio lasciato nel flusso e comportamento allo scroll.
T: valore · riferimento · spazio nel flusso · allo scroll · uso tipico (etichetta sul genitore, barra in alto, icona su immagine, intestazione di tabella). L'animazione a 3 clic di 10.1 fa da riepilogo.

## 10.3 z-index e sovrapposizione (ADD cosa crea un contesto di impilamento)
R: z-index ordina gli elementi sovrapposti ma vale solo dentro il proprio contesto di impilamento.
K: vale per elementi posizionati e figli di flex/grid; contesto creato da elemento posizionato con z-index ≠ auto, da opacity < 1, transform, filter; i contesti si confrontano tra loro, il z-index di un figlio conta solo dentro il suo contenitore; a parità sta sopra l'elemento che viene dopo nel codice.
W «Chi sta sopra?»: due contenitori absolute sovrapposti (1 a sinistra, 2 a destra, bordi tratteggiati) con un figlio ciascuno (A blu, B verde) che si sovrappongono; menu z-index dei contenitori (auto/1/2/3) e campi numerici per A (100) e B (5); mostra chi sta sopra (misurato nel punto di sovrapposizione) e una frase (due contesti: si confrontano i contenitori; contenitore auto: si confronta il figlio col contenitore dell'altro). Scena iniziale: c1=1, A=100, c2=2, B=5 → sopra B.
E: «z-index:9999 mette sopra tutto» → conta il contesto · «z-index funziona su qualsiasi elemento».
Q (applicazione): «A z-index 100 in un contenitore z-index 1; B z-index 5 in un contenitore z-index 2: chi sta sopra?» → B: si confrontano prima i contenitori.

## 10.4 Float e clear (ADD flow-root)
R: float porta un elemento a lato con il testo attorno, ma il genitore collassa: si risolve con clearfix o flow-root.
K: `float:left|right`, `clear:left|right|both`; il float non conta nell'altezza del genitore (collassa); clearfix `::after{content:"";display:block;clear:both}` oppure `display:flow-root`; i layout a colonne con i float sono storia: oggi Flexbox e Grid.
S: testo che scorre attorno a un'immagine. W animazione con/senza: riquadro con bordo contenente un'immagine (riquadro colorato) in float e del testo. Scena: senza flow-root il bordo avvolge solo il testo e l'immagine esce. Clic: 1 si aggiunge `display:flow-root` al riquadro → il bordo contiene anche l'immagine · 2 si toglie e si aggiunge il clearfix → stesso risultato. Fa capire: perché il genitore collassa.
E: «Il float serve a fare i layout a colonne» · «Il genitore si allarga attorno a un figlio in float».

---
# 11 · Flexbox

## 11.1 L'idea
R: display:flex sul contenitore dispone i figli lungo un asse principale, con un asse trasversale perpendicolare.
K: figli diretti = elementi flessibili; `row` → asse principale orizzontale, `column` → verticale: gli assi si scambiano; ADD `inline-flex`.
W «Flexbox: Prova tu» (comune a 11.1–11.2): select flex-direction (4 valori), flex-wrap (nowrap/wrap), justify-content (6), align-items (stretch/flex-start/flex-end/center/baseline), cursori gap 0–30 (8) e elementi 2–8 (4); contenitore flex alto 210 (max 460) con elementi larghi 64px e padding verticale diverso [8,24,14,30,10,20,26,16] (altezze diverse: si vedono stretch e baseline), colori ciclici blu/verde/ambra; testo «Asse principale …/trasversale …» (con frecce) e riga CSS. Scena iniziale: row, nowrap, flex-start, stretch, gap 8, 4 elementi.
E: «display:flex va messo sugli elementi» → sul contenitore · «justify-content è sempre orizzontale».

## 11.2 Proprietà del contenitore (ADD flex-flow, align-content, row-gap/column-gap)
R: flex-direction e flex-wrap impostano flusso e a capo; justify-content distribuisce sull'asse principale, align-items sul trasversale.
K: `flex-direction` row/row-reverse/column/column-reverse; `flex-wrap` nowrap (predefinito: gli elementi si restringono)/wrap; `justify-content` flex-start/flex-end/center/space-between/space-around/space-evenly; `align-items` stretch/flex-start/flex-end/center/baseline; `align-content` con più righe; `gap`.
W: lo stesso. S: i sei valori di justify-content affiancati sullo stesso esempio.
E: «flex-wrap è attivo di default».
Q (errore): «Con `flex-direction:column`, `justify-content:center` centra in orizzontale o verticale?» → verticale (asse principale; serve altezza).

## 11.3 Proprietà degli elementi (ADD margin auto, min-width)
R: flex-grow, flex-shrink e flex-basis dicono come un elemento si allarga, si restringe e da quale misura parte.
K: grow distribuisce lo spazio avanzato, shrink lo spazio mancante, basis la misura di partenza; `flex:1` = `1 1 0%`, `flex:auto` = `1 1 auto`, `flex:none` = `0 0 auto`; `order`; `align-self`; `margin-left:auto` spinge in fondo; un elemento flex non scende sotto il suo contenuto (testo lungo → `min-width:0`).
W «flex sugli elementi»: contenitore larghezza 240–560 (480); tre elementi A «corto», B «un testo medio», C «un testo molto più lungo degli altri»; per ciascuno menu flex-grow 0–3, flex-shrink 0–3, flex-basis auto/0/100px/200px; larghezza risultante in px; preset: default (0 1 auto) · flex-grow:1 su tutti · flex:1 su tutti · flex 1, 1, 2. Scena iniziale: flex-grow:1 su tutti.
E: «flex:1 e flex-grow:1 sono uguali» · «Un testo lungo sta sempre nel suo riquadro».
Q (errore): «Tre box con testi di lunghezza diversa e `flex-grow:1` su tutti: larghi uguali?» → no: grow divide lo spazio avanzato oltre il contenuto; con `flex:1` (base 0) sì.

## 11.4 Schemi ricorrenti
R: Quattro schemi coprono quasi tutti i casi: centrare, barra di navigazione, card affiancate, footer in fondo.
S: quattro mini-render con il codice: centrare (`justify-content` + `align-items: center`) · navbar (voci a sinistra, una a destra con `margin-left:auto`) · card che vanno a capo (`flex-wrap`, `flex:1 1 200px`) · footer in fondo (`body` flex in colonna, `main{flex:1}`).
E: «align-items:center centra in orizzontale».

---
# 12 · Grid

## 12.1 L'idea
R: Grid dispone gli elementi in due direzioni insieme, su righe e colonne.
K: linee numerate delimitano le tracce (righe e colonne); celle all'incrocio; un elemento può occupare più celle (area).
S: griglia 3×2 annotata (linee, tracce, celle, area).
E: «display:grid va messo sugli elementi» → sul contenitore.

## 12.2 Definire la griglia (ADD auto-fill, grid-auto-rows/flow, min-content/max-content cenno)
R: Le colonne si definiscono con grid-template-columns; fr è una frazione dello spazio libero e auto-fit adatta il numero di colonne.
K: `fr` ≠ percentuale: frazione dello spazio libero; `repeat()`, `minmax()`; `repeat(auto-fit, minmax(200px,1fr))`: auto-fit espande gli elementi, auto-fill lascia colonne vuote; elementi in più → righe implicite (`grid-auto-rows`, `grid-auto-flow`); `gap`.
W «Grid: Prova tu»: campo grid-template-columns con 5 preset (`1fr 1fr 1fr` · `1fr 2fr` · `150px 1fr` · `repeat(auto-fit, minmax(120px, 1fr))` · `repeat(auto-fill, minmax(120px, 1fr))`), cursori gap 0–24 (8), elementi 1–9 (4), larghezza 260–600 (460); elementi numerati alti 44px; mostra le tracce calcolate e la riga CSS; valore non valido → messaggio. Scena iniziale: `1fr 1fr 1fr` con 4 elementi.
E: «fr è una percentuale» · «auto-fit e auto-fill sono uguali».
Q (errore): «In una griglia a 3 colonne metto 4 elementi: che fine fa il quarto?» → va a capo in una nuova riga (griglia implicita).

## 12.3 Posizionare gli elementi (ADD grid-area, linee numerate e negative)
R: grid-column e grid-row indicano da quale linea a quale; grid-template-areas disegna il layout con i nomi.
K: `grid-column: 1 / 3`, `span 2`, `-1` = ultima linea; `grid-area`; `grid-template-areas`.
W animazione a 4 clic: contenitore con codice `grid-template-areas: "h h" "s m" "f f"`. Scena: contenitore vuoto con 3 righe. Clic: 1 header (h) occupa la riga 1 intera · 2 aside (s) in riga 2 a sinistra · 3 main (m) a destra · 4 footer (f) riga 3 intera; a ogni passo si evidenzia la parte di codice. Fa capire: come il disegno testuale diventa layout.

## 12.4 Allineamento (ADD justify-content, align-content, place-content)
R: justify-items e align-items allineano gli elementi dentro le celle, justify-content e align-content la griglia nel contenitore.
S: le quattro posizioni (start, end, center, stretch) in una cella; `place-items` come scorciatoia.

## 12.5 Differenza tra Flexbox e Grid
R: Flexbox lavora in una direzione partendo dal contenuto, Grid in due partendo dalla struttura; si combinano.
T: confronto (dimensioni · punto di partenza · quando usarlo) + esempio: Grid per la pagina, Flexbox dentro i componenti.
W animazione a 3 clic: due contenitori affiancati con 6 elementi numerati: Flexbox (`flex-wrap:wrap`, elementi `flex:1 1 110px`) e Grid (`repeat(auto-fit, minmax(110px,1fr))`). Scena: finestra 600px. Clic: 1 finestra 450px · 2 finestra 300px. In Flexbox l'ultima riga si allarga irregolarmente, in Grid le colonne restano allineate. Fa capire: riga per riga contro colonne.

---
# 13 · Responsive design

## 13.1 Perché serve (ADD i breakpoint seguono il contenuto, non i dispositivi)
R: Il sito deve adattarsi a schermi diversi; senza meta viewport il telefono rimpicciolisce una pagina disegnata per un computer.
K: `<meta name="viewport" content="width=device-width, initial-scale=1">`; senza, i telefoni usano una finestra virtuale più larga (~980px) e rimpiccioliscono.
W animazione con/senza a 2 clic: telefono disegnato con la pagina del Club di robotica. Scena: telefono vuoto. Clic: 1 senza meta viewport: pagina disegnata su finestra larga e rimpicciolita, testo minuscolo · 2 con meta viewport: usa la larghezza vera, layout a una colonna.
E: «Il meta viewport non serve se c'è il CSS responsive».
Q (errore): «Il sito su telefono è minuscolo, come una pagina da computer rimpicciolita: manca una riga nell'`<head>`. Quale?» → il meta viewport.

## 13.2 Mobile first contro desktop first
R: Mobile first parte dallo schermo piccolo e con min-width aggiunge regole; desktop first fa l'inverso con max-width.
W animazione a 3 clic con due colonne di regole: mobile first (base · `@media (min-width:768px)` · `@media (min-width:1024px)`) e desktop first (base · `@media (max-width:1023px)` · `@media (max-width:767px)`); sopra, una pagina a 1/2/3 colonne. Scena: finestra 360. Clic: finestra 800 · finestra 1100. A ogni larghezza si evidenziano le regole attive in entrambi gli approcci: stesso risultato, regole diverse.
Q (errore): «In mobile first scrivo `@media (min-width:768px)`: da quando si applica?» → da 768px in su.

## 13.3 Media queries
R: Una media query applica le sue regole solo quando la condizione è vera; i breakpoint si scelgono dove il contenuto si rompe.
K: `@media (min-width:768px){…}`, `and`, `orientation`; breakpoint indicativi 576/768/992/1200 (Bootstrap) ma seguono il contenuto.
W: cursore larghezza finestra 320–1200: la pagina passa da una a due a tre colonne e mostra quali `@media` sono attive.
E: «@media (min-width:768px) vale sotto i 768».

## 13.4 Layout fluidi
R: Il responsive non è solo media queries: percentuali, Flexbox, Grid con auto-fit e clamp() adattano il layout senza breakpoint.
T: tre approcci (fluido · flessibile · a punti di rottura) con un esempio ciascuno.
E: «Il responsive si fa solo con le media queries».

## 13.5 Immagini responsive
R: srcset e sizes fanno scegliere al browser il file in base alla larghezza, picture cambia immagine o formato a certe condizioni.
K: `srcset="s.jpg 480w, m.jpg 800w, l.jpg 1600w"`, `sizes="(min-width:800px) 50vw, 100vw"`, `<picture>` con `<source media>`; scelta indicativa: decide il browser.
W animazione a 4 clic: scena finestra 360px, tre file (480w, 800w, 1600w). Clic: 1 slot = 100vw = 360px → file 480w · 2 finestra 800px: slot 50vw = 400px → 480w · 3 finestra 1200px: slot 600px → 800w · 4 schermo ad alta densità (2x) a 360px: servono 720px → 800w.

---
# 14 · Trasformazioni, transizioni, animazioni

## 14.1 transform
R: transform cambia l'aspetto di un elemento senza spostare i vicini; l'ordine delle funzioni conta.
K: `translate`, `rotate`, `scale`, `skew`; `transform-origin`; `translate() rotate()` ≠ `rotate() translate()`.
W «Prova tu»: cursori translate X/Y (−60..60), rotate (−180..180), scale (0,5..2), skew (−30..30) e select transform-origin (center, top left, bottom right); due scatole affiancate con gli stessi valori nei due ordini; riga CSS.
E: «transform sposta anche gli elementi vicini».

## 14.2 transition
R: transition interpola il passaggio tra due stati; va scritta nello stato base.
K: proprietà, durata, funzione di temporizzazione (ease, linear, ease-in, ease-out, ease-in-out), ritardo; scritta solo in `:hover` l'uscita è istantanea; `display` non si anima.
W «Prova tu»: cursori durata 0,1–2s e ritardo 0–1s, select funzione, pulsante «Attiva» che sposta/ruota/cambia colore una scatola; accanto il grafico della curva scelta.
E: «Basta scrivere transition in :hover» · «display:none si anima».

## 14.3 @keyframes e animation (ADD elenco animation-*)
R: @keyframes definisce i passi di un'animazione e animation li applica.
K: `@keyframes` con `0% 50% 100%` (`from`/`to`); `animation-name, -duration, -timing-function, -delay, -iteration-count, -direction, -fill-mode, -play-state`.
W animazione a 4 clic: codice @keyframes (riquadro che sale e cambia colore) + riquadro. Scena: stato 0%. Clic: 1 stato al 50% · 2 stato al 100% · 3 senza `forwards` torna allo stato iniziale · 4 con `animation-fill-mode:forwards` resta al 100%.
E: «L'animazione resta nello stato finale» → serve fill-mode forwards.

## 14.4 Quando animare e quando no
R: transform e opacity si animano a basso costo, width, height, top e left ricalcolano l'impaginazione.
K: animare transform e opacity; evitare width/height/top/left; accessibilità (WCAG): contenuti in movimento oltre 5 secondi devono potersi fermare, non più di 3 lampeggi al secondo.
T: cosa conviene animare/cosa no, con la ragione.
Q (errore): «Per muovere un riquadro a destra: left o transform:translateX?» → transform, non ricalcola l'impaginazione.

---
# 15 · Tabelle e moduli

## 15.1 Stile delle tabelle (ADD table-layout:fixed, caption-side cenno)
R: border-collapse fonde i bordi vicini; su schermo piccolo la tabella va avvolta in un contenitore che scorre.
K: `border-collapse: collapse|separate`, `border-spacing`; zebra con `tr:nth-child(even)`; `overflow-x:auto` sul contenitore.
W animazione a 4 clic su una tabella 3×3 con bordi sulle celle. Scena: `separate` (bordi doppi). Clic: 1 `border-spacing:0` (bordi ancora doppi vicini) · 2 `border-collapse:collapse` (bordo unico) · 3 righe a zebra · 4 finestra stretta: la tabella esce, il contenitore `overflow-x:auto` scorre.
E: «Con il bordo sulle celle ho un bordo solo».

## 15.2 Stile dei moduli (ADD :user-invalid, font:inherit)
R: Un campo obbligatorio vuoto è già non valido all'apertura: per colorare solo dopo l'interazione c'è :user-invalid.
K: stati `:focus :disabled :checked :required`; `:valid/:invalid` subito; `:user-invalid/:user-valid` dopo l'interazione (Baseline da novembre 2023); `accent-color` per checkbox/radio/range; i controlli non ereditano il font → `font:inherit`; non togliere l'outline del focus senza sostituirlo; `label for`.
W: campo email `required` con due pannelli affiancati: `:invalid` (rosso subito) e `:user-invalid` (neutro finché non scrivi ed esci dal campo); casella con `accent-color`.
E: «:invalid colora di rosso solo dopo che ho scritto» · «I campi usano automaticamente il font della pagina».
Q (errore): «Bordo rosso con `:invalid` sui campi `required`: com'è il modulo appena si apre?» → già tutto rosso; per colorare solo dopo l'interazione `:user-invalid`.

---
# 16 · Framework CSS: Bootstrap e Tailwind

## 16.1 Che cos'è un framework CSS e come si collega
R: Un framework è CSS già scritto che si usa con le sue classi, collegato con un link o con una build.
K: velocità e coerenza contro dipendenza; CDN `<link>` o build.
S: lo stesso bottone in CSS scritto a mano, con Bootstrap e con Tailwind.
E: «Con un framework non serve conoscere il CSS».

## 16.2 Bootstrap
R: Bootstrap offre componenti pronti e una griglia a 12 colonne.
K: `btn btn-primary`, `card`, `navbar`; griglia `container`, `row`, `col-md-6`; ultima versione stabile 5.3.8; Bootstrap 6 in alpha dall'8 ottobre 2026, richiede browser recenti (Chrome/Edge 130, Firefox 132, Safari 18).
F (dettagli): schermata reale della documentazione con un componente e il codice.

## 16.3 Tailwind
R: Tailwind è utility-first: classi piccole e componibili direttamente nell'HTML.
K: `p-4`, `text-center`, `bg-blue-500`; versione 4, configurazione in CSS con `@theme`; la versione da browser (script da CDN jsDelivr) è solo per prove, in produzione serve una build (Vite/PostCSS); vecchio cdn.tailwindcss.com deprecato; browser moderni (Safari 16.4, Chrome 111, Firefox 128).
F (dettagli): schermata reale del Play CDN con un esempio.

## 16.4 Differenza tra Bootstrap e Tailwind
R: Bootstrap dà componenti pronti da personalizzare, Tailwind mattoni per costruirli.
T: approccio · componenti pronti · personalizzazione · peso · curva di apprendimento · vantaggi e limiti (aspetto riconoscibile, HTML pieno di classi, dipendenza da una versione).
