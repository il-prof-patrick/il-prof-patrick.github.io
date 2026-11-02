# Capitolo 6 · Colori, sfondi, bordi e ombre
from lib import *

P.capo('Sfondi, bordi e ombre', 6)
ARD = 'local:assets/immagini/arduino.jpg|https://commons.wikimedia.org/wiki/File:Arduino_Uno_R3_development_board_(1).jpg'

# ---------------------------------------------------------------- 6.3
P.sez('6.3', 'Immagini di sfondo',
      R='Le immagini di sfondo si controllano con size, position, repeat e si sovrappongono; le immagini di contenuto vanno nell’HTML.')
P.p('`background-image: url("foto.jpg")` mette un’immagine **dietro** al contenuto dell’elemento. Altre proprietà decidono come:')
P.mg(ARD, 'Scheda Arduino', 'Una scheda Arduino Uno su fondo chiaro')
P.ul(['`background-size`: `auto` (la grandezza vera dell’immagine), una misura, oppure `cover`, che **riempie** tutto l’elemento e **taglia** ciò che avanza, o `contain`, che mostra **tutta** l’immagine e può lasciare dei **vuoti**;',
      '`background-position`: dove sta l’immagine (`center`, `right bottom`, `20% 50%`);',
      '`background-repeat`: se si ripete come una piastrella (`repeat`, il valore iniziale), solo in orizzontale (`repeat-x`), in verticale (`repeat-y`) o no (`no-repeat`).'])
P.p('Si possono mettere **più sfondi**, separati da virgole: **il primo sta sopra**. È il modo classico per scurire una foto e renderci leggibile sopra un titolo bianco, con un gradiente trasparente sopra l’immagine.')
P.widget('w6_sfondo', 'La stessa foto di sfondo, sei impostazioni')
P.p('Un’immagine di sfondo è **decorazione**: non ha testo alternativo, gli screen reader non la annunciano e chi stampa la pagina spesso non la vede. Se l’immagine porta un contenuto (la foto di un prodotto, un grafico, il ritratto di una persona), va nell’HTML con `<img>` e il suo `alt`.')
P.err('«L’immagine importante la metto come sfondo con il CSS.»',
      'Uno sfondo **non ha testo alternativo**: chi usa uno screen reader non sa che c’è. Le immagini che portano contenuto vanno nell’HTML con `<img alt="…">`.')
P.err('«`background-size: cover` mostra tutta l’immagine.»',
      '`cover` riempie l’elemento e **taglia** ciò che non entra. Per vedere tutta l’immagine serve `contain`, che però può lasciare dei vuoti.')

# ---------------------------------------------------------------- 6.4
P.sez('6.4', 'Gradienti',
      R='Un gradiente è un’immagine generata: va in background-image, mai in background-color.')
P.p('Un [[gradiente]] è una sfumatura tra due o più colori. Per il CSS è un’**immagine generata dal browser**, non un colore: per questo si scrive in `background-image` (o nella forma abbreviata `background`), mai in `background-color`. Ce ne sono tre tipi:')
P.ul(['`linear-gradient()` sfuma lungo una retta: si indica una direzione (`to right`) o un angolo, con `0deg` verso l’alto e `90deg` verso destra;',
      '`radial-gradient()` sfuma dal centro verso l’esterno, a cerchi o ellissi, con forma e posizione;',
      '`conic-gradient()` gira intorno a un centro come le lancette: serve per grafici a torta e ruote di colore.'])
P.p('Ogni colore può avere una **posizione** (`red 30%`). Se due colori hanno la **stessa posizione** non c’è sfumatura: si ottiene un **taglio netto**, utile per strisce e bandiere: `linear-gradient(90deg, green 33%, white 33% 66%, red 66%)`.')
P.widget('w6_gradiente', 'Costruisci un gradiente')
P.err('«`background-color: linear-gradient(…)` funziona.»',
      'Un gradiente è un’**immagine**, non un colore: in `background-color` la dichiarazione non è valida e viene scartata. Si scrive in `background-image` o in `background`.')

# ---------------------------------------------------------------- 6.5
P.sez('6.5', 'Bordi e angoli',
      R='border imposta spessore, stile e colore; outline è un contorno che non occupa spazio.')
P.p('`border: spessore stile colore` disegna un bordo intorno all’elemento. Lo **stile** è obbligatorio, perché il suo valore iniziale è `none`: i più usati sono `solid`, `dashed` (tratteggiato), `dotted` (a puntini) e `double`. Se manca il colore, il bordo prende `currentColor`, cioè lo stesso colore del testo. Si può dare un bordo a un solo lato con `border-top`, `border-right`, `border-bottom`, `border-left`.',
    '`border-radius` arrotonda gli angoli. Con uno, due, tre o quattro valori si comporta come `margin`, ma parte dall’angolo **in alto a sinistra** e gira in senso orario. Con `50%` un quadrato diventa un **cerchio**; con un valore molto grande (`999px`) un rettangolo diventa una **pillola**.')
P.schema('s6_radius', 'border-radius con uno, due, tre o quattro valori', '''      <div class="s6r">
        <div><i style="border-radius:16px"></i><code>16px</code></div>
        <div><i style="border-radius:28px 0"></i><code>28px 0</code></div>
        <div><i style="border-radius:0 28px 8px"></i><code>0 28px 8px</code></div>
        <div><i style="border-radius:0 12px 24px 36px"></i><code>0 12px 24px 36px</code></div>
        <div><i class="q" style="border-radius:50%"></i><code>50%</code> (quadrato)</div>
        <div><i style="height:44px;border-radius:999px"></i><code>999px</code></div>
      </div>''', titolo_aula='Gli angoli arrotondati')
P.p('`outline` sembra un bordo, ma è diverso: è disegnato **fuori** dall’elemento, **sopra** a ciò che c’è intorno, e **non occupa spazio**, quindi non sposta nulla. Non si può dare a un solo lato. Il browser lo usa per mostrare quale elemento ha il **fuoco** quando si naviga con la tastiera: per questo non va tolto senza metterci qualcosa al suo posto.')
P.widget('w6_bordo', 'border o outline?')
P.err('«`outline` è un bordo come gli altri.»',
      '`outline` **non occupa spazio** e non sposta i vicini, sta sopra e fuori dall’elemento e non si può dare a un lato solo. Serve soprattutto a segnalare il fuoco.')

# ---------------------------------------------------------------- 6.6
P.sez('6.6', 'Ombre',
      R='box-shadow ha offset, sfocatura, diffusione e colore; non cambia l’impaginazione.')
P.p('`box-shadow` aggiunge un’ombra alla scatola dell’elemento. I valori, in ordine:')
P.css('box-shadow: 0 8px 24px 0 rgb(0 0 0 / 25%);\n/*         x  y   sfocatura  diffusione  colore */')
P.ul(['**spostamento orizzontale e verticale** (`x` e `y`): valori positivi a destra e in basso, negativi a sinistra e in alto;',
      '**sfocatura** (facoltativa): 0 dà un’ombra netta, valori più alti un’ombra morbida;',
      '**diffusione** (facoltativa): allarga (positiva) o restringe (negativa) l’ombra;',
      '**colore**: di solito un nero trasparente; con la parola `inset` l’ombra va **dentro** l’elemento.'])
P.p('Si possono sovrapporre **più ombre** separate da virgole; l’ombra segue la forma data da `border-radius` e **non cambia l’impaginazione**. `text-shadow` fa la stessa cosa per il testo, ma senza diffusione e senza `inset`. Un’ombra non rimedia a un contrasto troppo basso tra testo e sfondo; l’ombra della forma vera di un’immagine trasparente si fa con `filter: drop-shadow()` (7.4).')
P.widget('w6_ombra', 'Costruisci l’ombra')
P.err('«Il terzo valore di `box-shadow` è la distanza dell’ombra.»',
      'Il terzo valore è la **sfocatura**: con 0 l’ombra ha i bordi netti. La distanza la danno i primi due valori, gli spostamenti x e y.')

# ---------------------------------------------------------------- 6.7
P.sez('6.7', 'Immagini nella pagina',
      R='max-width:100% adatta l’immagine al contenitore, object-fit decide come entra in un riquadro dato.')
P.p('Un’immagine nell’HTML (`<img>`) ha la sua grandezza naturale e, se è più larga del contenitore, ne esce. La regola che si scrive quasi sempre è questa:')
P.css('img {\n  max-width: 100%;  /* mai più larga del contenitore */\n  height: auto;     /* l’altezza segue, senza deformare */\n}')
P.p('Quando invece l’immagine deve riempire un riquadro di misura data (una miniatura quadrata, la foto di una card), si usa `object-fit`, che funziona come `background-size` ma per le immagini di contenuto:')
P.ul(['`fill` (il valore iniziale) riempie il riquadro **deformando** l’immagine;',
      '`cover` lo riempie mantenendo le proporzioni e **taglia** ciò che avanza;',
      '`contain` mostra **tutta** l’immagine e può lasciare dei vuoti.'])
P.p('`aspect-ratio: 16 / 9` dà a un elemento delle proporzioni fisse. E gli attributi `width` e `height` scritti nell’`<img>` servono anche con il CSS: dicono al browser le proporzioni **prima** che l’immagine sia scaricata, così riserva lo spazio giusto e il testo non salta in basso quando la foto arriva.')
P.widget('w6_objectfit', 'Una foto in un riquadro')
P.tab([['', '`object-fit`', '`background-size`'],
       ['si usa per', 'immagini di contenuto (`<img>`, `<video>`)', 'immagini di sfondo (CSS)'],
       ['riempire e tagliare', '`cover`', '`cover`'],
       ['tutta, con i vuoti', '`contain`', '`contain`'],
       ['valore iniziale', '`fill`: deforma', '`auto`: grandezza vera'],
       ['testo alternativo', 'sì, con `alt`', 'no']],
      'object-fit e background-size')
P.err('«`width` e `height` fissi in CSS non danneggiano la foto.»',
      'Se le proporzioni non sono quelle della foto, `object-fit: fill` la **deforma**. Si fissa una sola misura con `height: auto`, oppure si aggiunge `object-fit: cover`.')
P.dom('Una foto 4:3 con `width: 200px; height: 200px`. Come appare?',
      '**Deformata**, schiacciata in un quadrato, perché il valore iniziale di `object-fit` è `fill`. Servono `height: auto` oppure `object-fit: cover`.')


# ---------------------------------------------------------------- slide
SP = {
 '6.3': [
  punti('Le immagini di sfondo', 'Dimensione, posizione, ripetizione', [
    ['maximize', '`background-size`: `cover` riempie e taglia, `contain` tutta con i vuoti'],
    ['move', '`background-position`: `center`, `right bottom`'],
    ['repeat', '`background-repeat`: `repeat`, `repeat-x`, `no-repeat`'],
    ['layers', 'Più sfondi separati da virgole: **il primo sta sopra**'],
    ['image', 'Immagine che porta contenuto? `<img alt="…">` nell’HTML']], foto=F(ARD, '', 'Scheda Arduino')),
 ],
 '6.4': [
  tessere('I gradienti', 'Immagini generate dal browser', [
    ['move-right', '`linear-gradient()`', 'lungo una retta · `90deg` = verso destra'],
    ['circle-dot', '`radial-gradient()`', 'dal centro verso l’esterno'],
    ['pie-chart', '`conic-gradient()`', 'intorno al centro: torte, ruote']],
    nota='Vanno in `background-image`, mai in `background-color` · stessa posizione = taglio netto'),
 ],
 '6.5': [
  punti('Bordi e angoli', 'Spessore, stile, colore', [
    ['square', '`border: 2px solid red`: lo **stile** è obbligatorio'],
    ['palette', 'Senza colore → `currentColor`, il colore del testo'],
    ['square-round-corner', '`border-radius`: da alto-sinistra, in senso orario'],
    ['circle', '`50%` su un quadrato → cerchio · `999px` → pillola']]),
  's6_radius',
 ],
 '6.6': [
  punti('Le ombre', 'x, y, sfocatura, diffusione, colore', [
    ['move', '**x** e **y**: lo spostamento dell’ombra'],
    ['cloud', '**sfocatura**: 0 = netta'],
    ['expand', '**diffusione**: la allarga o la restringe'],
    ['square-dashed', '`inset`: dentro · più ombre con le virgole'],
    ['circle-check', 'Non sposta nulla nell’impaginazione']]),
 ],
 '6.7': [
  punti('Immagini nella pagina', 'Adattarle al contenitore senza deformarle', [
    ['minimize', '`max-width: 100%; height: auto;`: mai fuori dal contenitore'],
    ['crop', '`object-fit: cover`: riempie il riquadro e taglia'],
    ['frame', '`object-fit: contain`: tutta, con i vuoti · `fill` deforma'],
    ['ratio', '`width` e `height` nell’`<img>`: spazio riservato prima del caricamento']]),
 ],
}
P.aula('Sfondi, gradienti, bordi e ombre.', SP)
