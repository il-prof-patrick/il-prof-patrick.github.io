# Capitolo 7 · Testo, link e liste
from lib import *

P.capo('Testo, link e liste', 7)

# ---------------------------------------------------------------- 7.1
P.sez('7.1', 'Famiglie di caratteri',
      R='font-family è una lista in ordine di preferenza che finisce con una famiglia generica.')
P.p('`font-family` non indica un solo carattere ma una **lista in ordine di preferenza**, separata da virgole. Il browser usa il **primo font della lista che è installato** sul computer di chi legge; se non ne trova nessuno, usa il suo predefinito. I nomi che contengono spazi vanno tra virgolette: `"Segoe UI"`, `"Times New Roman"`.',
    'Per questo la lista finisce sempre con una [[famiglia generica]], una parola chiave che c’è su ogni computer e che il browser traduce nel font adatto di quel sistema:')
P.ul(['`serif`: caratteri **con le grazie**, i piccoli tratti alle estremità delle lettere (Times, Georgia), tipici dei libri;',
      '`sans-serif`: caratteri **senza grazie** (Arial, Helvetica, Segoe UI), i più usati sugli schermi;',
      '`monospace`: caratteri a **larghezza fissa**, dove ogni lettera occupa lo stesso spazio (Consolas, Courier): per il codice;',
      'e poi `cursive`, `fantasy` e `system-ui`, il carattere dell’interfaccia del sistema operativo.'])
P.svg('s7_grazie', 'Con e senza grazie', '0 0 720 280', 'Una I con le grazie evidenziate in ambra e una I senza grazie; sotto, la scritta Club di robotica in Georgia e in Arial')
P.dom('Scrivo `font-family: "Gill Sans"`. Tutti quelli che aprono la pagina vedranno Gill Sans?',
      'No: solo chi ha quel font **installato**. Gli altri vedranno il carattere predefinito del browser. Serve una lista che finisca con una famiglia generica: `"Gill Sans", "Segoe UI", sans-serif`.', prima=True)
P.widget('w7_fontstack', 'Quale font userà il browser?')
P.err('«Scrivo `font-family: "Gill Sans"` e tutti vedranno Gill Sans.»',
      'Il browser usa solo i font **installati sul computer di chi legge** (o scaricati con `@font-face`, 7.2). Senza alternative e senza famiglia generica, chi non ce l’ha vede il carattere predefinito.')

# ---------------------------------------------------------------- 7.2
P.sez('7.2', 'Font web',
      R='@font-face rende scaricabile un font, ma ogni font e peso è un file in più che rallenta la pagina.')
P.p('Per usare un carattere che sul computer di chi legge non c’è, lo si fa **scaricare** insieme alla pagina, con la regola `@font-face`: si sceglie un nome, si indica il file e il peso, e poi quel nome si usa in `font-family` come qualunque altro.')
P.css('@font-face {\n  font-family: "Titoli";                     /* il nome che scegliamo noi */\n  src: url("font/titoli.woff2") format("woff2"); /* il file */\n  font-weight: 700;                         /* il peso contenuto nel file */\n  font-display: swap;                       /* nel frattempo, il font di riserva */\n}\nh1 {\n  font-family: "Titoli", Georgia, serif;\n}', aula='La regola @font-face')
P.p('Il formato da usare è **WOFF2**, compresso e letto da tutti i browser moderni. Ogni font e **ogni peso** (normale, grassetto, corsivo…) è però un **file in più** da scaricare, e la pagina si appesantisce: meglio pochi pesi, solo quelli usati davvero. I **font variabili** contengono tutti i pesi in un solo file, che conviene quando ne servono molti.',
    'Finché il file del font non è arrivato, che cosa mostra il browser? Senza indicazioni, per qualche istante **nasconde il testo**. Con `font-display: swap` lo mostra **subito con il font di riserva** e lo sostituisce quando il font arriva.')
P.widget('w7_swap', 'Mentre il font sta arrivando')
P.p('Il servizio più usato è **Google Fonts**, che offre centinaia di caratteri gratuiti. Si possono caricare dai server di Google con un `<link>`, oppure scaricare i file e **ospitarli sul proprio sito**.')
P.approfondimento('Il 20 gennaio 2022 il tribunale di Monaco di Baviera ha condannato il gestore di un sito a pagare 100 euro a un visitatore: caricando un carattere dai server di Google Fonts, il sito aveva trasmesso a Google l’indirizzo IP del visitatore senza il suo consenso (causa 3 O 17493/20). È un fatto di cronaca, non una regola generale: mostra però perché molti siti europei hanno scelto di **ospitare i font in locale**, sul proprio server, cosa che le licenze di Google Fonts permettono.', 'Un caso di cronaca')
P.err('«Più font e più pesi carico, più la pagina è bella.»',
      'Ogni font e ogni peso è un **file da scaricare**: la pagina diventa più lenta, soprattutto sul telefono. Due famiglie e pochi pesi bastano quasi sempre.')
P.err('«Incorporare Google Fonts è solo un link, non cambia nulla per la privacy.»',
      'Il browser di chi visita il sito si collega ai server di Google e gli **trasmette l’indirizzo IP**. Per questo molti siti ospitano i font in locale.')

# ---------------------------------------------------------------- 7.3
P.sez('7.3', 'Dimensione, peso e stile',
      R='Il peso del font esiste solo se il font lo contiene; italic è un corsivo disegnato, oblique un testo inclinato.')
P.p('`font-size` fissa la dimensione del testo, con le unità del 5.5 (di solito `rem`). `font-weight` fissa il **peso**, cioè lo spessore dei tratti, con un numero da 100 (sottilissimo) a 900 (nerissimo): `normal` vale 400, `bold` vale 700, mentre `lighter` e `bolder` sono relativi al genitore.',
    'Ma un peso esiste solo se **il font lo contiene**: molti font hanno soltanto il normale e il grassetto. Se si chiede un peso che manca, il browser usa il **più vicino** disponibile, oppure **simula** il grassetto ispessendo le lettere, con un risultato peggiore.',
    '`font-style` sceglie tra `normal`, `italic` e `oblique`. `italic` usa il **corsivo vero**, disegnato apposta, con forme diverse (guarda la «a» in molti font); `oblique` **inclina** semplicemente il carattere normale.')
P.schema('s7_pesi', 'La scala dei pesi (se il font li contiene)', '''      <div class="s7p">''' + ''.join(f'<div style="font-weight:{w}">Aa<span>{w}</span></div>' for w in range(100, 1000, 100)) + '''</div>''', titolo_aula='La scala dei pesi')
P.widget('w7_testo', 'Dimensione, peso e stile')
P.err('«`font-weight: 900` rende più nero qualunque font.»',
      'Funziona solo se il font **ha quel peso**. Altrimenti il browser usa il peso più vicino (spesso il 700) o lo simula.')

# ---------------------------------------------------------------- 7.4
P.sez('7.4', 'Spaziatura e allineamento',
      R='line-height senza unità scala col testo; text-align allinea il contenuto, non la scatola.')
P.ul(['`line-height` è l’**interlinea**, la distanza tra le righe. Si scrive **senza unità** (5.5), così scala con il testo di ogni elemento; per il testo continuo si usa di solito un valore tra **1,4 e 1,6**;',
      '`letter-spacing` è lo spazio **tra le lettere**, `word-spacing` quello **tra le parole**: poco, e soprattutto per i titoli in maiuscolo;',
      '`text-indent` è il **rientro della prima riga** di un paragrafo, come nei libri;',
      '`text-align` allinea le righe di testo: `left`, `right`, `center`, `justify` (giustificato, con le righe che arrivano tutte ai due margini). Esistono anche `start` ed `end`, che si adattano alle lingue scritte da destra a sinistra.'])
P.p('`text-align` allinea il **contenuto** dentro la scatola dell’elemento, non la scatola nella pagina: un paragrafo con `text-align: center` ha le righe centrate, ma resta largo quanto prima. Per centrare un blocco si usano i margini (6.3) o Flexbox (7.1).',
    'Il testo giustificato lascia spesso dei **buchi** tra le parole. Si attenuano con la sillabazione, `hyphens: auto`, che però funziona solo se la lingua della pagina è dichiarata (`<html lang="it">`).',
    'Le linee guida per l’accessibilità (WCAG, criterio 1.4.12) chiedono che il testo resti leggibile, senza tagli né sovrapposizioni, anche quando l’utente porta l’interlinea a **1,5**: niente altezze fisse sui contenitori di testo.')
P.widget('w7_spazio', 'Spaziatura e allineamento')
P.err('«`text-align: center` centra il paragrafo nella pagina.»',
      'Centra le **righe di testo** dentro il paragrafo; la scatola del paragrafo non si sposta. Per centrare un blocco servono `margin: 0 auto` con una larghezza, o Flexbox.')
P.err('«`line-height: 20px` è come `line-height: 1.5`.»',
      'Con l’unità il valore è **fisso** e viene ereditato già calcolato: un titolo grande ha le righe sovrapposte. Senza unità si moltiplica per il testo di ogni elemento.')

# ---------------------------------------------------------------- 7.5
P.sez('7.5', 'Decorazioni e trasformazioni',
      R='I puntini di text-overflow compaiono solo con overflow hidden e white-space nowrap.')
P.ul(['`text-decoration` disegna una linea sul testo: tipo (`underline`, `line-through`, `none`), stile (`wavy`, `dotted`…), colore e spessore. `text-underline-offset` sposta la sottolineatura più in basso, lontano dalle lettere;',
      '`text-transform` (`uppercase`, `lowercase`, `capitalize`) cambia **l’aspetto**, non il testo: chi copia il testo o usa uno screen reader trova le lettere come sono scritte nell’HTML;',
      '`white-space` decide che cosa fare di spazi e a capo (tabella sotto);',
      '`overflow-wrap: anywhere` permette di spezzare le **parole lunghissime**, come un indirizzo web, che altrimenti uscirebbero dal riquadro.'])
P.tab([['`white-space`', 'Spazi multipli', 'A capo dell’HTML', 'Va a capo da solo'],
       ['`normal`', 'uniti in uno', 'ignorati', 'sì'],
       ['`nowrap`', 'uniti in uno', 'ignorati', '**no**'],
       ['`pre`', 'conservati', 'conservati', 'no'],
       ['`pre-wrap`', 'conservati', 'conservati', 'sì'],
       ['`pre-line`', 'uniti in uno', 'conservati', 'sì']],
      'I valori di white-space')
P.p('Per tagliare un titolo troppo lungo con i **puntini di sospensione** serve `text-overflow: ellipsis`, che però da solo non fa niente: il testo deve stare **su una riga** (`white-space: nowrap`) e la parte che avanza deve essere **nascosta** (`overflow: hidden`).')
P.widget('w7_ellipsis', 'Tre dichiarazioni per i puntini')
P.err('«`text-overflow: ellipsis` basta per avere i puntini.»',
      'Servono anche `white-space: nowrap`, perché il testo non vada a capo, e `overflow: hidden`, perché la parte in eccesso sia tagliata.')

# ---------------------------------------------------------------- 7.6
P.sez('7.6', 'Stile dei link',
      R='Gli stati dei link hanno la stessa specificità: decide l’ordine, LVHA.')
P.p('I link hanno pseudo-classi tutte loro: `:link` (link non ancora visitato), `:visited` (già visitato), a cui si aggiungono `:hover`, `:focus` e `:active` (5.3). `:any-link` prende tutti i link, visitati o no.',
    'Le pseudo-classi hanno **tutte la stessa specificità**, e un link può essere in più stati insieme (visitato e con il mouse sopra). Quindi decide l’**ordine di scrittura**, e l’ordine giusto è **LVHA**: `:link`, `:visited`, `:hover`, `:active` (in inglese si ricorda con *LoVe HAte*). Se `:hover` venisse prima di `:visited`, un link visitato non cambierebbe mai colore al passaggio del mouse.')
P.css('a:link    { color: #0a6f66; }\na:visited { color: #6b4fa0; }\na:hover   { color: #c2410c; }\na:active  { color: #e9a313; }')
P.widget('w7_lvha', 'L’ordine delle regole dei link')
P.p('Due limiti e due attenzioni. Per motivi di **privacy** `:visited` accetta solo proprietà di **colore**: altrimenti un sito potrebbe scoprire, misurando la pagina, quali altri siti hai visitato. Non si toglie l’`outline` del fuoco senza metterci un altro segno ben visibile, perché chi naviga con la tastiera non saprebbe più dove si trova. E il colore da solo non basta a riconoscere un link (chi non distingue i colori non lo vede): di solito si tiene la sottolineatura.')
P.err('«L’ordine delle regole sui link non conta.»',
      'Le pseudo-classi dei link hanno la **stessa specificità**: a parità vince l’ultima. Con un ordine diverso da LVHA alcuni stati non si vedono mai.')
P.err('«`a:visited { display: none; }` nasconde i link già visitati.»',
      'Per privacy `:visited` accetta **solo proprietà di colore**: la dichiarazione viene ignorata.')
P.err('«`outline: none` toglie solo un contorno fastidioso.»',
      'Toglie l’unico segno che mostra **dove si trova chi usa la tastiera**. Se proprio si toglie, va sostituito con un altro segno ben visibile.')
P.dom('Un link già visitato, con il mouse sopra. Prima c’è `a:hover { color: red; }`, poi `a:visited { color: purple; }`. Di che colore è?',
      '**Viola**: le due regole hanno la stessa specificità e vince l’ultima. Per questo si scrive nell’ordine LVHA.')

# ---------------------------------------------------------------- 7.7
P.sez('7.7', 'Liste',
      R='list-style none toglie il simbolo ma non il rientro; i contatori CSS numerano anche ciò che non è una lista.')
P.p('`list-style` imposta il **simbolo** delle voci (`list-style-type`: `disc`, `circle`, `square`, `decimal`, `lower-alpha`, `lower-roman`, `none`), la sua **posizione** (fuori o dentro il testo) ed eventualmente un’**immagine**. Lo pseudo-elemento `::marker` permette di colorare e ingrandire il simbolo: `li::marker { color: #0a6f66; }`. Gli attributi HTML `start` e `reversed` di `<ol>` fanno partire la numerazione da un altro numero o la fanno contare all’indietro.',
    'Il **rientro** a sinistra degli elenchi non viene dal simbolo ma dal `padding-left` che il foglio di stile del browser dà a `ul` e `ol` (circa 40px). Per questo, nelle barre di navigazione fatte con un elenco, si scrivono sia `list-style: none` sia `padding-left: 0`.')
P.schema('s7_rientro', 'Da dove viene il rientro degli elenchi', '''      <div class="s7r">
        <div class="kit-cella"><ul><li>Arduino</li><li>Stampa 3D</li><li>Robot</li></ul><span>in ambra il <code>padding-left</code> del foglio del browser</span></div>
        <div class="kit-cella"><ul class="senza"><li>Arduino</li><li>Stampa 3D</li><li>Robot</li></ul><span>con <code>list-style: none</code> i pallini spariscono, il rientro resta</span></div>
      </div>''', titolo_aula='Il rientro degli elenchi')
P.p('Con i **contatori** del CSS si può numerare anche ciò che non è un elenco, come i titoli di un documento: `counter-reset` crea il contatore, `counter-increment` lo fa avanzare, `counter()` dentro il `content` di uno pseudo-elemento lo mostra.')
P.widget('w7_contatori', 'Numerare i titoli con un contatore')
P.err('«`list-style: none` toglie anche il rientro dell’elenco.»',
      'Toglie solo il simbolo. Il rientro viene dal `padding-left` del browser: serve anche `padding-left: 0`.')


# ---------------------------------------------------------------- slide
SP = {
 '7.1': [
  punti('font-family', 'Una lista in ordine di preferenza', [
    ['list-ordered', 'Il browser usa il **primo font installato** sul computer di chi legge'],
    ['quote', 'Nomi con spazi tra virgolette: `"Segoe UI"`'],
    ['shield-check', 'In fondo sempre una **famiglia generica**: c’è su ogni computer'],
    ['type', '`serif` con grazie · `sans-serif` senza · `monospace` larghezza fissa']]),
  's7_grazie',
 ],
 '7.2': [
  punti('I font web', 'Un font scaricato insieme alla pagina', [
    ['download', '`@font-face`: nome scelto, `src: url()` del file, peso'],
    ['file-archive', 'Formato **WOFF2**; ogni peso è un **file in più**'],
    ['timer', '`font-display: swap`: subito il font di riserva, poi il cambio'],
    ['server', 'Google Fonts dai loro server **o ospitato in locale**']]),
  {'tipo': 'storia', 'titolo': 'Un caso di cronaca', 'anno': '20 gennaio 2022', 'icona': 'scale', 'punti': [
    ['scale', 'Tribunale di Monaco: **100 euro** a un visitatore di un sito'],
    ['globe', 'Il sito caricava un font da Google Fonts e trasmetteva il suo **indirizzo IP**'],
    ['server', 'Da allora molti siti europei **ospitano i font in locale**']]},
 ],
 '7.3': [
  punti('Dimensione, peso, stile', 'Il peso esiste solo se il font lo contiene', [
    ['type', '`font-size`: in `rem`, di solito'],
    ['bold', '`font-weight` da 100 a 900 · `normal` = 400 · `bold` = 700'],
    ['circle-alert', 'Peso mancante → il più vicino o **simulato**'],
    ['italic', '`italic`: corsivo disegnato · `oblique`: carattere inclinato']]),
  's7_pesi',
 ],
 '7.4': [
  punti('Spaziatura e allineamento', 'Righe leggibili, testo allineato', [
    ['between-horizontal-start', '`line-height` **senza unità**, tra 1,4 e 1,6'],
    ['letter-text', '`letter-spacing`, `word-spacing`: con misura'],
    ['indent-increase', '`text-indent`: rientro della prima riga'],
    ['align-center', '`text-align` allinea il **contenuto**, non la scatola'],
    ['accessibility', 'WCAG 1.4.12: con interlinea 1,5 il testo non deve rompersi']]),
 ],
 '7.5': [
  punti('Decorazioni e trasformazioni', 'Linee, maiuscole, spazi, parole lunghe', [
    ['underline', '`text-decoration` + `text-underline-offset`'],
    ['case-upper', '`text-transform`: cambia l’aspetto, **non** il testo'],
    ['wrap-text', '`white-space`: spazi e a capo · `overflow-wrap` per le parole lunghe'],
    ['ellipsis', 'Puntini: `text-overflow` + `nowrap` + `overflow: hidden`']]),
 ],
 '7.6': [
  punti('Gli stati dei link', 'Stessa specificità: decide l’ordine', [
    ['link', '`:link` · `:visited` · `:hover` · `:active` (+ `:focus`)'],
    ['heart', 'Ordine **LVHA**: *LoVe HAte*'],
    ['eye-off', '`:visited` accetta solo colori (privacy)'],
    ['keyboard', 'Mai togliere l’`outline` del fuoco senza sostituirlo'],
    ['underline', 'Il solo colore non basta: tieni la sottolineatura']]),
 ],
 '7.7': [
  punti('Le liste', 'Simbolo, rientro, contatori', [
    ['list', '`list-style`: `disc` `square` `decimal` `lower-roman` `none`'],
    ['palette', '`::marker` per colore e dimensione del simbolo'],
    ['indent-increase', 'Il rientro è il `padding-left` del browser'],
    ['hash', 'Contatori: `counter-reset` · `counter-increment` · `counter()`']]),
  's7_rientro',
 ],
}
P.aula('Caratteri, spazi, link ed elenchi.', SP,
       apertura=('Due computer aprono la stessa pagina: su uno il titolo è in Gill Sans, sull’altro in Arial. Com’è possibile?',
                 'Il browser usa i font **installati** sul computer di chi legge: dove Gill Sans manca, passa al font successivo della lista.'))
