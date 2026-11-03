# Tema 6.2 · Testo, link e liste (vecchio capitolo 7 del modulo CSS)
# Filo: quale carattere (famiglie) → un carattere che chi legge non ha (font web) → grandezza, peso, stile
#       → spazi e allineamento → decorazioni e trasformazioni → i link e i loro stati → gli elenchi
from lib import *

P.capo('Testo, link e liste', 7)

# ---------------------------------------------------------------- 7.1
P.sez('7.1', 'Famiglie di caratteri', ic='type',
      R='font-family è una lista in ordine di preferenza che finisce con una famiglia generica.')
P.dom('Scrivo `font-family: "Gill Sans"`. Tutti quelli che aprono la pagina vedranno Gill Sans?',
      'No: solo chi ha quel font **installato**. Gli altri vedranno il carattere predefinito del browser. Serve una lista che finisca con una famiglia generica: `"Gill Sans", "Segoe UI", sans-serif`.', prima=True)
P.p('La prima scelta, per il testo, è il carattere. `font-family` però non indica un solo carattere ma una **lista in ordine di preferenza**, separata da virgole. Il browser usa il **primo font della lista che è installato** sul computer di chi legge; se non ne trova nessuno, usa il suo predefinito. I nomi che contengono spazi vanno tra virgolette: `"Segoe UI"`, `"Times New Roman"`.')
P.es('`font-family: "Gill Sans", "Segoe UI", sans-serif;` · chi ha Gill Sans vede Gill Sans; chi non ce l’ha ma usa Windows vede Segoe UI; tutti gli altri un carattere senza grazie del loro sistema.')
P.p('Per questo la lista finisce sempre con una [[famiglia generica]], una parola chiave che c’è su ogni computer e che il browser traduce nel font adatto di quel sistema. `serif` indica i caratteri **con le grazie**, i piccoli tratti alle estremità delle lettere (Times, Georgia), tipici dei libri. `sans-serif` quelli **senza grazie** (Arial, Helvetica, Segoe UI), i più usati sugli schermi. `monospace` i caratteri a **larghezza fissa**, dove ogni lettera occupa lo stesso spazio (Consolas, Courier), adatti al codice. Ci sono poi `cursive`, `fantasy` e `system-ui`, il carattere dell’interfaccia del sistema operativo.')
P.svg('s7_grazie', 'Con e senza grazie', '0 0 720 280', 'Una I con le grazie evidenziate in ambra e una I senza grazie; sotto, la scritta Club di robotica in Georgia e in Arial')
P.widget('w7_fontstack', 'Quale font userà il browser?')
P.err('«Scrivo `font-family: "Gill Sans"` e tutti vedranno Gill Sans.»',
      'Il browser usa solo i font **installati sul computer di chi legge** (o scaricati con `@font-face`, più avanti). Senza alternative e senza famiglia generica, chi non ce l’ha vede il carattere predefinito.')

# ---------------------------------------------------------------- 7.2
P.sez('7.2', 'Font web', ic='download',
      R='@font-face rende scaricabile un font, ma ogni font e peso è un file in più che rallenta la pagina.')
P.p('E se il carattere che vogliamo non è installato quasi da nessuno? Allora lo si fa **scaricare** insieme alla pagina, con la regola `@font-face`: si sceglie un nome, si indica il file e il peso, e poi quel nome si usa in `font-family` come qualunque altro.')
P.css('@font-face {\n  font-family: "Titoli";                     /* il nome che scegliamo noi */\n  src: url("font/titoli.woff2") format("woff2"); /* il file */\n  font-weight: 700;                         /* il peso contenuto nel file */\n  font-display: swap;                       /* nel frattempo, il font di riserva */\n}\nh1 {\n  font-family: "Titoli", Georgia, serif;\n}')
P.p('Il formato da usare è **WOFF2**, compresso e letto da tutti i browser moderni. Ogni font e **ogni peso** (normale, grassetto, corsivo…) è però un **file in più** da scaricare, e la pagina si appesantisce: meglio pochi pesi, solo quelli usati davvero. I **font variabili** contengono tutti i pesi in un solo file, che conviene quando ne servono molti.',
    'Finché il file del font non è arrivato, che cosa mostra il browser? Senza indicazioni, per qualche istante **nasconde il testo**. Con `font-display: swap` lo mostra **subito con il font di riserva** e lo sostituisce quando il font arriva.')
P.forma('pagina aperta|il font non c’è ancora', 'swap', 'font di riserva|il testo si legge subito', 'arriva il file', 'font scelto')
P.widget('w7_swap', 'Mentre il font sta arrivando')
P.p('Il servizio più usato è **Google Fonts**, che offre centinaia di caratteri gratuiti. Si possono caricare dai server di Google con un `<link>`, oppure scaricare i file e **ospitarli sul proprio sito**. La differenza non è solo tecnica.')
P.approfondimento('Il 20 gennaio 2022 il tribunale di Monaco di Baviera ha condannato il gestore di un sito a pagare 100 euro a un visitatore: caricando un carattere dai server di Google Fonts, il sito aveva trasmesso a Google l’indirizzo IP del visitatore senza il suo consenso (causa 3 O 17493/20). È un fatto di cronaca, non una regola generale: mostra però perché molti siti europei hanno scelto di **ospitare i font in locale**, sul proprio server, cosa che le licenze di Google Fonts permettono.', 'Un caso di cronaca')
P.err('«Più font e più pesi carico, più la pagina è bella.»',
      'Ogni font e ogni peso è un **file da scaricare**: la pagina diventa più lenta, soprattutto sul telefono. Due famiglie e pochi pesi bastano quasi sempre.')
P.err('«Incorporare Google Fonts è solo un link, non cambia nulla per la privacy.»',
      'Il browser di chi visita il sito si collega ai server di Google e gli **trasmette l’indirizzo IP**. Per questo molti siti ospitano i font in locale.')

# ---------------------------------------------------------------- 7.3
P.sez('7.3', 'Dimensione, peso e stile', ic='bold',
      R='Il peso del font esiste solo se il font lo contiene; italic è un corsivo disegnato, oblique un testo inclinato.')
P.p('Scelto il carattere, se ne decide l’aspetto. `font-size` fissa la dimensione del testo, con le unità del 5.5 (di solito `rem`). `font-weight` fissa il **peso**, cioè lo spessore dei tratti, con un numero **da 100** (sottilissimo) **a 900** (nerissimo): `normal` vale 400, `bold` vale 700, mentre `lighter` e `bolder` sono relativi al genitore.',
    'Ma un peso esiste solo se **il font lo contiene**: molti font hanno soltanto il normale e il grassetto. Se si chiede un peso che manca, il browser usa il **più vicino** disponibile, oppure **simula** il grassetto ispessendo le lettere, con un risultato peggiore.')
P.schema('s7_pesi', 'La scala dei pesi (se il font li contiene)', '''      <div class="s7p">''' + ''.join(f'<div style="font-weight:{w}">Aa<span>{w}</span></div>' for w in range(100, 1000, 100)) + '''</div>''', titolo_aula='La scala dei pesi')
P.p('`font-style`, infine, sceglie tra `normal`, `italic` e `oblique`, che sembrano uguali ma non lo sono.')
P.casi(('', '`italic`', 'Usa il **corsivo vero**, disegnato apposta, con forme diverse: guarda la «a» in molti font.'),
       ('', '`oblique`', 'Prende il carattere normale e lo **inclina**, senza cambiare le forme delle lettere.'))
P.widget('w7_testo', 'Dimensione, peso e stile')
P.err('«`font-weight: 900` rende più nero qualunque font.»',
      'Funziona solo se il font **ha quel peso**. Altrimenti il browser usa il peso più vicino (spesso il 700) o lo simula.')

# ---------------------------------------------------------------- 7.4
P.sez('7.4', 'Spaziatura e allineamento', ic='align-left',
      R='line-height senza unità scala col testo; text-align allinea il contenuto, non la scatola.')
P.p('Un testo si legge bene non solo per il carattere, ma anche per lo **spazio intorno alle lettere e alle righe**. `line-height` è l’**interlinea**, la distanza tra le righe. Si scrive **senza unità** (5.5), così scala con il testo di ogni elemento; per il testo continuo si usa di solito un valore **tra 1,4 e 1,6**. `letter-spacing` è lo spazio **tra le lettere** e `word-spacing` quello **tra le parole**: si usano con misura, soprattutto per i titoli in maiuscolo. `text-indent` è il **rientro della prima riga** di un paragrafo, come nei libri.',
    '`text-align` allinea le righe di testo: `left`, `right`, `center`, `justify` (giustificato, con le righe che arrivano tutte ai due margini). Esistono anche `start` ed `end`, che si adattano alle lingue scritte da destra a sinistra. Attenzione: `text-align` allinea il **contenuto** dentro la scatola dell’elemento, **non la scatola nella pagina**.')
P.es('Un paragrafo con `text-align: center` ha le righe centrate, ma resta largo quanto prima. Per centrare un blocco nella pagina si usano i margini (6.3) o Flexbox (7.1).')
P.p('Il testo giustificato lascia spesso dei **buchi** tra le parole. Si attenuano con la sillabazione, `hyphens: auto`, che però funziona solo se la lingua della pagina è dichiarata (`<html lang="it">`).',
    'Le linee guida per l’accessibilità (WCAG, criterio 1.4.12) chiedono poi che il testo resti leggibile, senza tagli né sovrapposizioni, anche quando l’utente porta l’interlinea a **1,5**: quindi **niente altezze fisse** sui contenitori di testo.')
P.widget('w7_spazio', 'Spaziatura e allineamento')
P.err('«`text-align: center` centra il paragrafo nella pagina.»',
      'Centra le **righe di testo** dentro il paragrafo; la scatola del paragrafo non si sposta. Per centrare un blocco servono `margin: 0 auto` con una larghezza, o Flexbox.')
P.err('«`line-height: 20px` è come `line-height: 1.5`.»',
      'Con l’unità il valore è **fisso** e viene ereditato già calcolato: un titolo grande ha le righe sovrapposte. Senza unità si moltiplica per il testo di ogni elemento.')

# ---------------------------------------------------------------- 7.5
P.sez('7.5', 'Decorazioni e trasformazioni', ic='underline',
      R='I puntini di text-overflow compaiono solo con overflow hidden e white-space nowrap.')
P.p('Altre proprietà cambiano il testo in modi più particolari. `text-decoration` disegna una **linea sul testo**: tipo (`underline`, `line-through`, `none`), stile (`wavy`, `dotted`…), colore e spessore; `text-underline-offset` sposta la sottolineatura più in basso, lontano dalle lettere. `text-transform` (`uppercase`, `lowercase`, `capitalize`) cambia **l’aspetto, non il testo**: chi copia il testo o usa uno screen reader trova le lettere come sono scritte nell’HTML.',
    '`white-space` decide che cosa fare di **spazi e a capo** scritti nell’HTML (tabella sotto), e `overflow-wrap: anywhere` permette di spezzare le **parole lunghissime**, come un indirizzo web, che altrimenti uscirebbero dal riquadro.')
P.tab([['`white-space`', 'Spazi multipli', 'A capo dell’HTML', 'Va a capo da solo'],
       ['`normal`', 'uniti in uno', 'ignorati', 'sì'],
       ['`nowrap`', 'uniti in uno', 'ignorati', '**no**'],
       ['`pre`', 'conservati', 'conservati', 'no'],
       ['`pre-wrap`', 'conservati', 'conservati', 'sì'],
       ['`pre-line`', 'uniti in uno', 'conservati', 'sì']],
      'I valori di white-space')
P.p('`white-space` serve anche in un caso frequente: tagliare un titolo troppo lungo con i **puntini di sospensione**. Lo fa `text-overflow: ellipsis`, che però **da solo non fa niente**: il testo deve stare **su una riga** (`white-space: nowrap`) e la parte che avanza deve essere **nascosta** (`overflow: hidden`).')
P.css('.titolo-card {\n  white-space: nowrap;      /* su una riga */\n  overflow: hidden;         /* ciò che avanza è nascosto */\n  text-overflow: ellipsis;  /* … al posto del taglio */\n}')
P.widget('w7_ellipsis', 'Tre dichiarazioni per i puntini')
P.err('«`text-overflow: ellipsis` basta per avere i puntini.»',
      'Servono anche `white-space: nowrap`, perché il testo non vada a capo, e `overflow: hidden`, perché la parte in eccesso sia tagliata.')

# ---------------------------------------------------------------- 7.6
P.sez('7.6', 'Stile dei link', ic='link',
      R='Gli stati dei link hanno la stessa specificità: decide l’ordine, LVHA.')
P.p('Tra i pezzi di testo, i link sono speciali, perché cambiano **stato**. Hanno pseudo-classi tutte loro: `:link` (link non ancora visitato) e `:visited` (già visitato), a cui si aggiungono `:hover`, `:focus` e `:active` (5.3). `:any-link` prende tutti i link, visitati o no.',
    'Queste pseudo-classi hanno **tutte la stessa specificità**, e un link può essere in più stati insieme (visitato e con il mouse sopra). Quindi decide l’**ordine di scrittura** (5.4), e l’ordine giusto è **LVHA**: `:link`, `:visited`, `:hover`, `:active` (in inglese si ricorda con *LoVe HAte*). Se `:hover` venisse prima di `:visited`, un link visitato non cambierebbe mai colore al passaggio del mouse.')
P.css('a:link    { color: #0a6f66; }\na:visited { color: #6b4fa0; }\na:hover   { color: #c2410c; }\na:active  { color: #e9a313; }')
P.widget('w7_lvha', 'L’ordine delle regole dei link')
P.p('Ci sono poi un limite e due attenzioni. Il limite: per motivi di **privacy** `:visited` accetta **solo proprietà di colore**, altrimenti un sito potrebbe scoprire, misurando la pagina, quali altri siti hai visitato. La prima attenzione: non si toglie l’`outline` del fuoco senza metterci un altro segno ben visibile, perché chi naviga con la tastiera non saprebbe più dove si trova. La seconda: il colore da solo non basta a riconoscere un link, perché chi non distingue i colori non lo vede; di solito si tiene la **sottolineatura**.')
P.err('«L’ordine delle regole sui link non conta.»',
      'Le pseudo-classi dei link hanno la **stessa specificità**: a parità vince l’ultima. Con un ordine diverso da LVHA alcuni stati non si vedono mai.')
P.err('«`a:visited { display: none; }` nasconde i link già visitati.»',
      'Per privacy `:visited` accetta **solo proprietà di colore**: la dichiarazione viene ignorata.')
P.err('«`outline: none` toglie solo un contorno fastidioso.»',
      'Toglie l’unico segno che mostra **dove si trova chi usa la tastiera**. Se proprio si toglie, va sostituito con un altro segno ben visibile.')
P.dom('Un link già visitato, con il mouse sopra. Prima c’è `a:hover { color: red; }`, poi `a:visited { color: purple; }`. Di che colore è?',
      '**Viola**: le due regole hanno la stessa specificità e vince l’ultima. Per questo si scrive nell’ordine LVHA.')

# ---------------------------------------------------------------- 7.7
P.sez('7.7', 'Liste', ic='list',
      R='list-style none toglie il simbolo ma non il rientro; i contatori CSS numerano anche ciò che non è una lista.')
P.p('L’ultimo tipo di testo con regole proprie sono gli elenchi. `list-style` imposta il **simbolo** delle voci (`list-style-type`: `disc`, `circle`, `square`, `decimal`, `lower-alpha`, `lower-roman`, `none`), la sua **posizione** (fuori o dentro il testo) ed eventualmente un’**immagine**. Lo pseudo-elemento `::marker` permette di colorare e ingrandire il simbolo: `li::marker { color: #0a6f66; }`. Gli attributi HTML `start` e `reversed` di `<ol>` fanno partire la numerazione da un altro numero o la fanno contare all’indietro.',
    'Il **rientro** a sinistra degli elenchi non viene dal simbolo ma dal **`padding-left`** che il foglio di stile del browser dà a `ul` e `ol` (circa 40px). Per questo, nelle barre di navigazione fatte con un elenco, si scrivono sia `list-style: none` sia `padding-left: 0`.')
P.schema('s7_rientro', 'Da dove viene il rientro degli elenchi', '''      <div class="s7r">
        <div class="kit-cella"><ul><li>Arduino</li><li>Stampa 3D</li><li>Robot</li></ul><span>in ambra il <code>padding-left</code> del foglio del browser</span></div>
        <div class="kit-cella"><ul class="senza"><li>Arduino</li><li>Stampa 3D</li><li>Robot</li></ul><span>con <code>list-style: none</code> i pallini spariscono, il rientro resta</span></div>
      </div>''', titolo_aula='Il rientro degli elenchi')
P.p('Con i **contatori** del CSS si può numerare anche ciò che non è un elenco, come i titoli di un documento: `counter-reset` crea il contatore, `counter-increment` lo fa avanzare, `counter()` dentro il `content` di uno pseudo-elemento lo mostra.')
P.widget('w7_contatori', 'Numerare i titoli con un contatore')
P.err('«`list-style: none` toglie anche il rientro dell’elenco.»',
      'Toglie solo il simbolo. Il rientro viene dal `padding-left` del browser: serve anche `padding-left: 0`.')
P.p('Il rientro degli elenchi ci ha già portato dentro la scatola di un elemento: un padding. È il momento di guardare com’è fatta questa scatola.')


# ---------------------------------------------------------------- slide
SP = {
 '7.1': [
  flusso('Una lista in ordine di preferenza', [
    nd('`"Gill Sans"`', 'installato? lo usa', 'type'),
    nd('`"Segoe UI"`', 'altrimenti il successivo', 'type'),
    nd('`sans-serif`', 'la **famiglia generica**: c’è su ogni computer', 'shield-check', tono='fine')],
    frecce=['non c’è', 'non c’è'],
    riga='Il browser usa il **primo font installato** sul computer di chi legge; nomi con spazi tra virgolette.'),
  's7_grazie',
  casi('Le famiglie generiche', [
    nd('`serif`', 'con le grazie: Times, Georgia', 'book-open', nota='i libri'),
    nd('`sans-serif`', 'senza grazie: Arial, Helvetica, Segoe UI', 'monitor', nota='gli schermi'),
    nd('`monospace`', 'larghezza fissa: Consolas, Courier', 'code', nota='il codice')],
    msg='E poi `cursive`, `fantasy`, `system-ui`'),
  'w7_fontstack',
 ],
 '7.2': [
  anatomia('La regola @font-face', '@font-face {\n  font-family: "Titoli";\n  src: url("font/titoli.woff2");\n  font-weight: 700;\n  font-display: swap;\n}', [
    ['"Titoli"', 'il nome', 'lo scegliamo noi'],
    ['url("font/titoli.woff2")', 'il file', 'formato WOFF2'],
    ['700', 'il peso', 'ogni peso è un file in più'],
    ['swap', 'nel frattempo', 'subito il font di riserva']],
    msg='Un font che chi legge non ha, scaricato con la pagina'),
  flusso('Mentre il font arriva', [
    nd('Pagina aperta', 'il file del font non c’è ancora', 'clock'),
    nd('Font di riserva', 'con `swap` il testo si legge subito', 'type', tono='si'),
    nd('Font scelto', 'arriva il file e il browser lo sostituisce', 'circle-check')],
    riga='Senza indicazioni, per qualche istante il testo resta **nascosto**.'),
  'w7_swap',
  {'tipo': 'storia', 'titolo': 'Un caso di cronaca', 'anno': '2022', 'icona': 'scale', 'punti': [
    ['scale', '20 gennaio, tribunale di Monaco di Baviera: **100 euro** a un visitatore di un sito'],
    ['globe', 'Il sito caricava un font da Google Fonts e trasmetteva il suo **indirizzo IP** senza consenso'],
    ['server', 'Per questo molti siti europei **ospitano i font in locale**, come le licenze permettono']]},
 ],
 '7.3': [
  's7_pesi',
  casi('Il peso che manca', [
    nd('Il font ce l’ha', '`font-weight: 900` → il nero più nero', 'circle-check', tono='si'),
    nd('Il font non ce l’ha', 'il browser usa il peso **più vicino**, o lo **simula** ispessendo le lettere', 'circle-alert', tono='forse')],
    msg='Da 100 a 900: `normal` = 400, `bold` = 700'),
  casi('italic e oblique', [
    nd('`italic`', 'il **corsivo vero**, disegnato apposta: forme diverse (la «a»)', 'italic'),
    nd('`oblique`', 'il carattere normale **inclinato**', 'slash')]),
  'w7_testo',
 ],
 '7.4': [
  gettoni('Spazi nel testo', [], [
    ['between-horizontal-start', '`line-height`', 'l’interlinea, **senza unità**: tra 1,4 e 1,6 per il testo continuo'],
    ['letter-text', '`letter-spacing` · `word-spacing`', 'tra le lettere e tra le parole, con misura'],
    ['indent-increase', '`text-indent`', 'il rientro della prima riga, come nei libri'],
    ['accessibility', 'WCAG 1.4.12', 'con l’interlinea a 1,5 il testo non deve rompersi: niente altezze fisse']]),
  casi('text-align allinea il contenuto', [
    caso('no', 'non fa questo', titolo='Centrare il paragrafo nella pagina', testo='la scatola resta larga e ferma dov’era'),
    caso('si', 'fa questo', titolo='Centrare le righe nel paragrafo', testo='per il blocco: `margin: 0 auto` o Flexbox')],
    msg='`left`, `right`, `center`, `justify` · con `justify` aiuta `hyphens: auto`'),
  'w7_spazio',
 ],
 '7.5': [
  gettoni('Decorazioni e trasformazioni', [], [
    ['underline', '`text-decoration`', 'una linea sul testo; `text-underline-offset` la allontana dalle lettere'],
    ['case-upper', '`text-transform`', 'cambia l’**aspetto**, non il testo: chi copia trova le lettere dell’HTML'],
    ['wrap-text', '`white-space`', 'che cosa fare di spazi e a capo dell’HTML'],
    ['scissors', '`overflow-wrap: anywhere`', 'spezza le parole lunghissime, come un indirizzo web']]),
  flusso('Tre dichiarazioni per i puntini', [
    nd('Su una riga', css='white-space: nowrap;', icona='move-horizontal'),
    nd('Nascondi ciò che avanza', css='overflow: hidden;', icona='eye-off'),
    nd('I puntini', css='text-overflow: ellipsis;', icona='ellipsis', tono='si')],
    riga='`text-overflow` **da solo non fa niente**.'),
  'w7_ellipsis',
 ],
 '7.6': [
  flusso('L’ordine LVHA', [
    nd('`:link`', 'non visitato', 'link'),
    nd('`:visited`', 'già visitato', 'history'),
    nd('`:hover`', 'il mouse sopra', 'mouse-pointer'),
    nd('`:active`', 'mentre lo si preme', 'pointer')],
    riga='Stessa specificità: vince l’ultima. In inglese si ricorda con *LoVe HAte*.'),
  'w7_lvha',
  gettoni('Un limite e due attenzioni', [], [
    ['eye-off', '`:visited` accetta solo colori', 'privacy: un sito non deve scoprire, misurando la pagina, dove sei stato'],
    ['keyboard', 'L’`outline` del fuoco', 'non toglierlo senza un altro segno ben visibile'],
    ['underline', 'Non solo il colore', 'chi non distingue i colori non vede il link: si tiene la sottolineatura']]),
 ],
 '7.7': [
  anatomia('Simbolo e rientro', 'ul {\n  list-style: none;\n  padding-left: 0;\n}', [
    ['list-style: none;', 'toglie il simbolo', '`disc`, `square`, `decimal`… o `none`'],
    ['padding-left: 0;', 'toglie il rientro', 'il browser dà circa 40px a `ul` e `ol`']],
    msg='Per una barra di navigazione servono tutte e due'),
  's7_rientro',
  flusso('Numerare con un contatore', [
    nd('Crea', css='counter-reset', icona='rotate-ccw'),
    nd('Fai avanzare', css='counter-increment', icona='plus'),
    nd('Mostra', css='content: counter(…)', icona='hash', tono='si')],
    riga='Si numera anche ciò che non è un elenco, come i titoli; `::marker` colora il simbolo delle voci.'),
  'w7_contatori',
 ],
}
P.aula('Caratteri, spazi, link ed elenchi.', SP,
       apertura=('Due computer aprono la stessa pagina: su uno il titolo è in Gill Sans, sull’altro in Arial. Com’è possibile?',
                 'Il browser usa i font **installati** sul computer di chi legge: dove Gill Sans manca, passa al font successivo della lista.'))
