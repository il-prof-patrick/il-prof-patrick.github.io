# Tema 6.1 · Sfondi, bordi e ombre (vecchio capitolo 6 del modulo CSS, senza 6.1–6.2 passate in cap05.py)
# Filo: dietro il contenuto (immagini di sfondo) → sfondi generati (gradienti) → il contorno (bordi e angoli)
#       → il rilievo (ombre) → le immagini che sono contenuto (img)
from lib import *

P.capo('Sfondi, bordi e ombre', 6)
ARD = 'local:assets/immagini/arduino.jpg|https://commons.wikimedia.org/wiki/File:Arduino_Uno_R3_development_board_(1).jpg'

# ---------------------------------------------------------------- 6.3
P.sez('6.3', 'Immagini di sfondo', ic='image',
      R='Le immagini di sfondo si controllano con size, position, repeat e si sovrappongono; le immagini di contenuto vanno nell’HTML.')
P.p('Nel capitolo precedente abbiamo visto i colori. Dietro il contenuto di un elemento, però, oltre a un colore può esserci un’immagine: la proprietà `background-image` la mette **dietro** al testo e ai figli dell’elemento, per esempio con `url("foto.jpg")`.')
P.mg(ARD, 'Scheda Arduino', 'Una scheda Arduino Uno su fondo chiaro')
P.p('Tre proprietà decidono come l’immagine riempie l’elemento. `background-size` ne fissa la grandezza: `auto` (la grandezza vera dell’immagine), una misura, oppure due parole chiave. `cover` **riempie** tutto l’elemento e **taglia** ciò che avanza; `contain` mostra **tutta** l’immagine e può lasciare dei **vuoti**. `background-position` dice dove sta l’immagine (`center`, `right bottom`, `20% 50%`). `background-repeat` decide se si ripete come una piastrella: `repeat`, il valore iniziale, solo in orizzontale (`repeat-x`), in verticale (`repeat-y`) o per niente (`no-repeat`).')
P.casi(('', '`background-size: cover`', 'Riempie tutto l’elemento, senza vuoti, e **taglia** le parti dell’immagine che non entrano.'),
       ('', '`background-size: contain`', 'Mostra **tutta** l’immagine, senza tagli, e può lasciare dei **vuoti** ai lati.'))
P.p('Si possono anche mettere **più sfondi**, separati da virgole: **il primo sta sopra**. È il modo classico per rendere leggibile un titolo bianco sopra una foto: sopra l’immagine si mette un gradiente trasparente che la scurisce.')
P.widget('w6_sfondo', 'La stessa foto di sfondo, sei impostazioni')
P.p('Un’immagine di sfondo, però, è **decorazione**: non ha testo alternativo, gli screen reader non la annunciano e chi stampa la pagina spesso non la vede. Se l’immagine porta un contenuto (la foto di un prodotto, un grafico, il ritratto di una persona), va nell’HTML con `<img>` e il suo `alt`: ne parliamo in fondo al tema.')
P.err('«L’immagine importante la metto come sfondo con il CSS.»',
      'Uno sfondo **non ha testo alternativo**: chi usa uno screen reader non sa che c’è. Le immagini che portano contenuto vanno nell’HTML con `<img alt="…">`.')
P.err('«`background-size: cover` mostra tutta l’immagine.»',
      '`cover` riempie l’elemento e **taglia** ciò che non entra. Per vedere tutta l’immagine serve `contain`, che però può lasciare dei vuoti.')

# ---------------------------------------------------------------- 6.4
P.sez('6.4', 'Gradienti', ic='blend',
      R='Un gradiente è un’immagine generata: va in background-image, mai in background-color.')
P.p('Il gradiente che scurisce la foto è un tipo speciale di sfondo. Un [[gradiente]] è una sfumatura tra due o più colori, e per il CSS è un’**immagine generata dal browser**, non un colore: per questo si scrive in `background-image` (o nella forma abbreviata `background`), **mai in `background-color`**.',
    'Ce ne sono tre tipi. `linear-gradient()` sfuma **lungo una retta**: si indica una direzione (`to right`) o un angolo, con `0deg` verso l’alto e `90deg` verso destra. `radial-gradient()` sfuma **dal centro verso l’esterno**, a cerchi o ellissi, con forma e posizione. `conic-gradient()` **gira intorno a un centro** come le lancette: serve per grafici a torta e ruote di colore.')
P.p('Ogni colore può avere una **posizione** (`red 30%`). Se due colori hanno **la stessa posizione** non c’è sfumatura: si ottiene un **taglio netto**, utile per strisce e bandiere.')
P.es('`linear-gradient(90deg, green 33%, white 33% 66%, red 66%)` disegna la bandiera italiana: il verde finisce al 33% e il bianco comincia proprio lì, quindi tra i due non c’è sfumatura.')
P.widget('w6_gradiente', 'Costruisci un gradiente')
P.err('«`background-color: linear-gradient(…)` funziona.»',
      'Un gradiente è un’**immagine**, non un colore: in `background-color` la dichiarazione non è valida e viene scartata. Si scrive in `background-image` o in `background`.')

# ---------------------------------------------------------------- 6.5
P.sez('6.5', 'Bordi e angoli', ic='square',
      R='border imposta spessore, stile e colore; outline è un contorno che non occupa spazio.')
P.p('Dopo lo sfondo, il contorno. `border: spessore stile colore` disegna un bordo intorno all’elemento. Lo **stile è obbligatorio**, perché il suo valore iniziale è `none` (5.2): i più usati sono `solid`, `dashed` (tratteggiato), `dotted` (a puntini) e `double`. Se manca il colore, il bordo prende `currentColor`, cioè **lo stesso colore del testo**. Si può dare un bordo a un solo lato con `border-top`, `border-right`, `border-bottom`, `border-left`.',
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
P.casi(('', '`border`', 'Fa parte della scatola: **occupa spazio** e allontana i vicini. Si può dare a un solo lato.'),
       ('', '`outline`', 'Sta fuori e sopra: **non occupa spazio** e non sposta nulla. Tutto intorno, mai su un lato solo; segnala il fuoco.'))
P.widget('w6_bordo', 'border o outline?')
P.err('«`outline` è un bordo come gli altri.»',
      '`outline` **non occupa spazio** e non sposta i vicini, sta sopra e fuori dall’elemento e non si può dare a un lato solo. Serve soprattutto a segnalare il fuoco.')

# ---------------------------------------------------------------- 6.6
P.sez('6.6', 'Ombre', ic='cloud',
      R='box-shadow ha offset, sfocatura, diffusione e colore; non cambia l’impaginazione.')
P.p('Un’ombra fa sembrare un elemento **sollevato** dalla pagina. `box-shadow` la aggiunge alla scatola dell’elemento, con i valori in quest’ordine:')
P.css('box-shadow: 0 8px 24px 0 rgb(0 0 0 / 25%);\n/*         x  y   sfocatura  diffusione  colore */')
P.p('I primi due sono lo **spostamento orizzontale e verticale** (`x` e `y`): valori positivi spostano l’ombra a destra e in basso, negativi a sinistra e in alto. Il terzo, facoltativo, è la **sfocatura**: 0 dà un’ombra netta, valori più alti un’ombra morbida. Il quarto, anche lui facoltativo, è la **diffusione**, che allarga (positiva) o restringe (negativa) l’ombra. Infine il **colore**, di solito un nero trasparente. Con la parola `inset` l’ombra va **dentro** l’elemento.',
    'Si possono sovrapporre **più ombre** separate da virgole; l’ombra segue la forma data da `border-radius` e **non cambia l’impaginazione**. `text-shadow` fa la stessa cosa per il testo, ma senza diffusione e senza `inset`. Un’ombra non rimedia a un contrasto troppo basso tra testo e sfondo; l’ombra della forma vera di un’immagine trasparente si fa con `filter: drop-shadow()` (7.4).')
P.widget('w6_ombra', 'Costruisci l’ombra')
P.err('«Il terzo valore di `box-shadow` è la distanza dell’ombra.»',
      'Il terzo valore è la **sfocatura**: con 0 l’ombra ha i bordi netti. La distanza la danno i primi due valori, gli spostamenti x e y.')

# ---------------------------------------------------------------- 6.7
P.sez('6.7', 'Immagini nella pagina', ic='frame',
      R='max-width:100% adatta l’immagine al contenitore, object-fit decide come entra in un riquadro dato.')
P.p('Resta l’immagine che non è decorazione ma **contenuto**, scritta nell’HTML con `<img>`. Ha la sua grandezza naturale e, se è più larga del contenitore, **ne esce**. La regola che si scrive quasi sempre è questa:')
P.css('img {\n  max-width: 100%;  /* mai più larga del contenitore */\n  height: auto;     /* l’altezza segue, senza deformare */\n}')
P.p('Quando invece l’immagine deve riempire un riquadro di misura data (una miniatura quadrata, la foto di una card), si usa `object-fit`, che funziona **come `background-size` ma per le immagini di contenuto**. Il valore iniziale, `fill`, riempie il riquadro **deformando** l’immagine; `cover` lo riempie mantenendo le proporzioni e **taglia** ciò che avanza; `contain` mostra **tutta** l’immagine e può lasciare dei vuoti.',
    '`aspect-ratio: 16 / 9` dà a un elemento delle **proporzioni fisse**. E gli attributi `width` e `height` scritti nell’`<img>` servono anche con il CSS: dicono al browser le proporzioni **prima** che l’immagine sia scaricata, così riserva lo spazio giusto e il testo non salta in basso quando la foto arriva.')
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
P.p('Sfondi, bordi, ombre e immagini decorano la scatola di un elemento. Prima di guardare la scatola da vicino, però, c’è il contenuto che quasi tutte le scatole contengono: il testo.')


# ---------------------------------------------------------------- slide
SP = {
 '6.3': [
  gettoni('Le immagini di sfondo', [['maximize', '`background-size`'], ['move', '`background-position`'], ['repeat', '`background-repeat`']], [
    ['maximize', 'Dimensione', '`auto` grandezza vera · `cover` riempie e taglia · `contain` tutta, con i vuoti'],
    ['move', 'Posizione', '`center`, `right bottom`, `20% 50%`'],
    ['repeat', 'Ripetizione', '`repeat` (iniziale), `repeat-x`, `repeat-y`, `no-repeat`'],
    ['layers', 'Più sfondi', 'separati da virgole: **il primo sta sopra**']],
    foto=F(ARD.split('|')[0], 'Scheda Arduino', 'Una scheda Arduino Uno')),
  'w6_sfondo',
  casi('Sfondo o immagine nell’HTML?', [
    caso('no', 'decorazione', titolo='`background-image`', testo='niente testo alternativo: gli screen reader non la annunciano, in stampa spesso sparisce'),
    caso('si', 'contenuto', titolo='`<img alt="…">`', testo='la foto di un prodotto, un grafico, un ritratto: vanno nell’HTML')]),
 ],
 '6.4': [
  definizione('I gradienti', 'Un **gradiente** è una sfumatura tra due o più colori: per il CSS è un’**immagine generata dal browser**, non un colore.',
              [['move-right', '`linear-gradient()`: lungo una retta'], ['circle-dot', '`radial-gradient()`: dal centro verso l’esterno'], ['chart-pie', '`conic-gradient()`: intorno al centro']],
              nota='Si scrive in `background-image`, mai in `background-color`.'),
  anatomia('Un taglio netto', 'linear-gradient(90deg, green 33%, white 33% 66%, red 66%)', [
    ['90deg', 'direzione', 'verso destra'],
    ['green 33%', 'verde', 'fino al 33%'],
    ['white 33% 66%', 'bianco', 'comincia dove finisce il verde'],
    ['red 66%', 'rosso', 'dal 66% in fondo']],
    effetto='Stessa posizione per due colori = nessuna sfumatura'),
  'w6_gradiente',
 ],
 '6.5': [
  anatomia('Il bordo', 'border: 2px solid red;', [
    ['2px', 'spessore', ''], ['solid', 'stile', 'obbligatorio: l’iniziale è `none`'], ['red', 'colore', 'se manca: `currentColor`']],
    effetto='Un lato solo: `border-top`, `border-right`, `border-bottom`, `border-left`'),
  's6_radius',
  casi('border e outline', [
    nd('`border`', 'fa parte della scatola: **occupa spazio** e allontana i vicini', 'square', nota='anche su un lato solo'),
    nd('`outline`', 'fuori e sopra: **non occupa spazio**, non sposta nulla', 'scan', nota='segnala il fuoco: non toglierlo senza sostituirlo')]),
  'w6_bordo',
 ],
 '6.6': [
  anatomia('L’ombra', 'box-shadow: 0 8px 24px 0 rgb(0 0 0 / 25%);', [
    ['0 8px', 'x e y', 'lo spostamento'],
    ['24px', 'sfocatura', '0 = netta'],
    [' 0 ', 'diffusione', 'la allarga o la restringe', 1],
    ['rgb(0 0 0 / 25%)', 'colore', 'di solito un nero trasparente']],
    effetto='`inset`: dentro · più ombre con le virgole · non sposta nulla'),
  'w6_ombra',
 ],
 '6.7': [
  flusso('Un’immagine nel contenitore', [
    nd('Grandezza naturale', 'se è più larga del contenitore, **ne esce**', 'image', tono='no'),
    nd('La regola di sempre', css='img {\n  max-width: 100%;\n  height: auto;\n}', icona='minimize'),
    nd('Mai più larga del contenitore', 'l’altezza segue, senza deformare', 'circle-check', tono='si')],
    riga='`width` e `height` nell’`<img>`: il browser riserva lo spazio **prima** che la foto arrivi.'),
  casi('object-fit in un riquadro', [
    nd('`fill`', 'il valore iniziale: riempie **deformando**', 'stretch-horizontal', tono='no'),
    nd('`cover`', 'riempie, mantiene le proporzioni e **taglia**', 'crop'),
    nd('`contain`', 'mostra **tutta** l’immagine, con i vuoti', 'frame')],
    msg='Come `background-size`, ma per le immagini di contenuto'),
  'w6_objectfit',
 ],
}
P.aula('Sfondi, gradienti, bordi e ombre.', SP,
       apertura=('Su una foto di sfondo molto chiara un titolo bianco non si legge. Come si può rimediare senza cambiare la foto?',
                 'Mettendo **sopra la foto un gradiente scuro e trasparente**: con più sfondi separati da virgole, il primo sta sopra.'))
