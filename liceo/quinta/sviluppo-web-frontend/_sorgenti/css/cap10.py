# Capitolo 10 · Position e float
from lib import *

P.capo('Position e float', 10)

# ---------------------------------------------------------------- 10.1
P.sez('10.1', 'position (static · relative · absolute · fixed · sticky)',
      R='position decide come si colloca un elemento: relative rispetto al suo posto, absolute al più vicino antenato posizionato, fixed alla finestra, sticky fino a una soglia.')
P.p('Il flusso normale (6.4) va bene per quasi tutto, ma a volte un elemento deve stare **in un punto preciso**: un’etichetta «Nuovo» sull’angolo di una card, una barra che resta in alto mentre si scorre, un pulsante «torna su» fisso in un angolo. Per questo c’è la proprietà `position`, con cinque valori.',
    'Il valore iniziale è `static`: l’elemento sta nel flusso normale. Con gli altri quattro l’elemento diventa [[posizionato]] e si possono usare le proprietà di spostamento `top`, `right`, `bottom` e `left` (oppure la scorciatoia `inset`, che le imposta tutte e quattro come `margin`). Su un elemento `static` queste proprietà **non hanno effetto**.')
P.ul(['`relative`: l’elemento si sposta **rispetto alla posizione che avrebbe** nel flusso. `top: 20px` lo abbassa di 20px, `left: 30px` lo sposta di 30px a destra. Il suo **posto originale resta occupato**: i vicini non se ne accorgono;',
      '`absolute`: l’elemento **esce dal flusso** (i vicini si comportano come se non ci fosse e ne prendono il posto) e si colloca rispetto al **più vicino antenato posizionato**, cioè il primo antenato con `position` diverso da `static`. Se non ce n’è nessuno, si colloca rispetto alla **pagina**. La sua larghezza, con `width: auto`, diventa quella del **contenuto**;',
      '`fixed`: come `absolute`, ma il riferimento è la **finestra del browser**: quando la pagina scorre, l’elemento **resta fermo**;',
      '`sticky`: l’elemento scorre con la pagina finché non raggiunge la soglia indicata (per esempio `top: 0`); da lì **resta attaccato** al bordo, ma solo **finché il suo genitore è visibile**: quando il genitore esce, se lo porta via. Senza soglia (`top`, `bottom`…) non fa niente, e non funziona se un antenato ha `overflow` diverso da `visible`.'])
P.p('Lo schema più usato è la coppia **genitore `relative` + figlio `absolute`**: il genitore resta nel flusso e non si sposta (nessun `top` né `left`), ma diventa il riferimento del figlio, che si può mettere in un suo angolo con `top: 0; right: 0`.')
P.css('.card {\n  position: relative;   /* il riferimento */\n}\n.card .etichetta {\n  position: absolute;\n  top: 8px;\n  right: 8px;            /* angolo in alto a destra della card */\n}', 'stile.css', aula='Genitore relative, figlio absolute')
P.dom('Un `div` con `position: absolute` sta dentro un genitore **senza** `position`. Rispetto a che cosa si colloca?',
      'Al **più vicino antenato posizionato** (con `position` diverso da `static`). Se non c’è, alla **pagina**: il genitore, da solo, non basta.', prima=True)
P.widget('w10_position', 'position')
P.p('Il widget non ha `fixed`, perché dentro una pagina che scorre in un riquadro si comporterebbe come `absolute`. L’animazione seguente mostra `static`, `sticky` e `fixed` mentre la pagina scorre.')
P.widget('w10_scroll', 'Tre barre mentre la pagina scorre')
P.approfondimento('Un elemento `fixed` si colloca rispetto alla finestra **solo se nessun suo antenato ha un `transform`** (7.4) o un `filter`: in quel caso il riferimento diventa quell’antenato e l’elemento scorre con lui. Se una barra fissa «non resta ferma», è la prima cosa da controllare.', 'Quando fixed non è fisso')
P.err('«`position: relative` sposta l’elemento e libera il suo posto.»',
      'Con `relative` l’elemento si vede spostato, ma il suo **posto originale resta occupato**: i vicini non si muovono. A liberarlo è `absolute`.')
P.err('«`absolute` si posiziona rispetto al genitore.»',
      'Rispetto al **più vicino antenato posizionato**. Il genitore è il riferimento solo se ha un `position` diverso da `static` (di solito `relative`).')
P.err('«`top` funziona su ogni elemento.»',
      '`top`, `right`, `bottom` e `left` funzionano solo sugli elementi **posizionati**. Su un elemento `static` non hanno effetto.')
P.err('«`sticky` funziona anche senza `top`.»',
      'Senza una **soglia** (`top`, `bottom`…) l’elemento sticky si comporta come `relative` e scorre via con la pagina.')

# ---------------------------------------------------------------- 10.2
P.sez('10.2', 'Differenza tra relative, absolute, fixed e sticky',
      R='I quattro valori differiscono per riferimento, spazio lasciato nel flusso e comportamento allo scroll.')
P.p('I quattro valori si distinguono rispondendo a tre domande: **rispetto a che cosa** si colloca l’elemento? **Lascia il suo spazio** nel flusso? Che cosa fa **quando la pagina scorre**?')
P.tab([['Valore', 'Riferimento', 'Spazio nel flusso', 'Allo scroll', 'Uso tipico'],
       ['`relative`', 'la sua posizione normale', 'resta occupato', 'scorre con la pagina', 'riferimento per i figli `absolute`, piccoli ritocchi'],
       ['`absolute`', 'il più vicino antenato posizionato (o la pagina)', 'liberato', 'scorre con il riferimento', 'icona o etichetta sull’angolo di un’immagine o di una card'],
       ['`fixed`', 'la finestra', 'liberato', '**resta fermo**', 'barra in alto, pulsante «torna su», banner dei cookie'],
       ['`sticky`', 'la finestra, dentro il genitore', 'resta occupato', 'scorre, poi **si ferma** alla soglia', 'intestazione di una tabella o di una sezione']],
      'I quattro valori a confronto')

# ---------------------------------------------------------------- 10.3
P.sez('10.3', 'z-index e sovrapposizione',
      R='z-index ordina gli elementi sovrapposti ma vale solo dentro il proprio contesto di impilamento.')
P.p('Gli elementi posizionati possono **sovrapporsi**. Chi sta sopra? A parità di condizioni, l’elemento che **viene dopo nel codice**. Per cambiare l’ordine c’è `z-index`: un numero intero (anche negativo); più è alto, più l’elemento sta **in primo piano**. Funziona sugli elementi **posizionati** e sui figli di un contenitore Flexbox o Grid.',
    'C’è però una regola che sorprende: `z-index` non vale per tutta la pagina, ma **dentro il proprio** [[contesto di impilamento]] (*stacking context*). Un contesto è come una **pila di fogli chiusa in una cartellina**: i fogli si possono riordinare dentro la cartellina, ma la cartellina intera sta sopra o sotto le altre cartelline. Un contesto nuovo lo crea, tra l’altro:')
P.ul(['un elemento posizionato con un `z-index` diverso da `auto`;',
      'un elemento con `opacity` minore di 1;',
      'un elemento con un `transform` o un `filter`.'])
P.p('I contesti si confrontano **tra loro** come blocchi unici: il `z-index` di un figlio conta solo dentro il suo contenitore. Per questo un elemento con `z-index: 100` può restare **sotto** un altro con `z-index: 5`.')
P.dom('A ha `z-index: 100` dentro un contenitore con `z-index: 1`; B ha `z-index: 5` dentro un contenitore con `z-index: 2`. Chi sta sopra?',
      '**B**. I contenitori creano due contesti: si confrontano prima loro (2 batte 1), e tutto il contenuto del secondo sta sopra tutto il contenuto del primo.', prima=True)
P.widget('w10_zindex', 'Chi sta sopra?')
P.err('«`z-index: 9999` mette un elemento sopra tutto.»',
      'Solo **dentro il suo contesto di impilamento**. Se il suo contenitore crea un contesto più in basso di un altro, l’elemento resta sotto, qualunque numero abbia.')
P.err('«`z-index` funziona su qualsiasi elemento.»',
      'Funziona sugli elementi **posizionati** (non `static`) e sui figli di Flexbox e Grid. Su un paragrafo normale non ha effetto.')

# ---------------------------------------------------------------- 10.4
P.sez('10.4', 'Float e clear (testo attorno a un’immagine · contenitore collassato · clearfix)',
      R='float porta un elemento a lato con il testo attorno, ma il genitore collassa: si risolve con clearfix o flow-root.')
P.p('`float: left` (o `right`) porta un elemento sul lato sinistro (o destro) del contenitore e fa **scorrere il testo attorno**, come in un giornale. È nato proprio per questo: un’immagine dentro un articolo.')
P.schema('s10_float', 'Il testo scorre attorno all’immagine in float', '''      <div class="s10f">
        <div class="kit-cella"><div class="s10f-art"><i class="img"></i>Il club di robotica si riunisce il giovedì in laboratorio. Si costruiscono robot con Arduino, si programmano sensori e motori e a fine anno si partecipa alla gara regionale con le altre scuole. Le righe scorrono accanto all’immagine finché c’è, poi tornano a occupare tutta la larghezza.</div><span><code>img { float: left; margin: 0 12px 6px 0; }</code></span></div>
      </div>''', titolo_aula='Float: il testo attorno')
P.p('Il float ha due effetti collaterali. Il primo: un elemento in float **non conta nell’altezza del genitore**. Se un riquadro con un bordo contiene un’immagine in float e poco testo, il bordo avvolge solo il testo e l’immagine **esce sotto**: il genitore è [[collassato]]. I rimedi:')
P.ul(['`display: flow-root` sul genitore: crea un blocco che **contiene i propri float**. È il modo moderno;',
      'il **clearfix**: uno pseudo-elemento vuoto in fondo al genitore che «scende sotto» i float con `clear: both`, trascinando giù il bordo.'])
P.css('.riquadro::after {\n  content: "";\n  display: block;\n  clear: both;\n}', 'clearfix', aula='Il clearfix')
P.p('Il secondo: gli elementi che seguono il float gli scorrono accanto. Per farli ripartire **sotto** il float si usa `clear: left`, `clear: right` o `clear: both`.')
P.widget('w10_flowroot', 'Il genitore che collassa')
P.p('Per anni i float sono stati usati anche per affiancare le colonne di una pagina, con molti trucchi. Oggi quel lavoro lo fanno **Flexbox e Grid** (7.1 e 7.2): il float resta per ciò per cui è nato, il testo attorno a un’immagine.')
P.err('«Il float serve a fare i layout a colonne.»',
      'Si faceva così prima di Flexbox e Grid, con molti trucchi. Oggi il float serve solo a far **scorrere il testo attorno** a un elemento.')
P.err('«Il genitore si allarga attorno a un figlio in float.»',
      'Il float **non conta nell’altezza** del genitore, che collassa. Serve `display: flow-root` o il clearfix.')


# ---------------------------------------------------------------- slide
SP = {
 '10.1': [
  tessere('I cinque valori di position', 'Rispetto a che cosa si colloca l’elemento', [
    ['minus', '`static`', 'nel flusso; top e left ignorati'],
    ['move', '`relative`', 'spostato dal suo posto, che resta occupato'],
    ['crosshair', '`absolute`', 'fuori dal flusso, dal più vicino antenato posizionato'],
    ['pin', '`fixed`', 'fermo nella finestra'],
    ['sticky-note', '`sticky`', 'scorre, poi si ferma alla soglia']],
    nota='`top`, `right`, `bottom`, `left` (o `inset`) solo sugli elementi posizionati'),
 ],
 '10.2': [],
 '10.3': [
  punti('Il contesto di impilamento', 'z-index vale solo dentro la sua cartellina', [
    ['layers', 'Numero più alto = **più in primo piano**; a parità, vince chi viene dopo'],
    ['folder', 'Un **contesto** è una cartellina: i fogli si riordinano solo al suo interno'],
    ['square-stack', 'Lo crea un posizionato con `z-index` ≠ auto, `opacity` < 1, `transform`, `filter`'],
    ['scale', 'Si confrontano **prima i contesti**, poi i figli dentro ciascuno']]),
 ],
 '10.4': [
  punti('Float e clear', 'Nato per il testo attorno a un’immagine', [
    ['image', '`float: left | right`: l’elemento va a lato, il testo gli scorre attorno'],
    ['arrow-down-to-line', '`clear: both`: l’elemento successivo riparte **sotto** il float'],
    ['triangle-alert', 'Il float non conta nell’altezza: il genitore **collassa**'],
    ['wrench', 'Rimedi: `display: flow-root` sul genitore o il **clearfix**'],
    ['columns-3', 'Le colonne della pagina oggi si fanno con **Flexbox e Grid**']]),
 ],
}
P.aula('Togliere un elemento dal flusso: relative, absolute, fixed, sticky e i float.', SP,
       apertura=('Su un sito di notizie scorrete la pagina: il menu in alto resta lì, il banner dei cookie anche. Come fanno a non scorrere via?',
                 'Hanno `position: fixed` (o `sticky`): si collocano rispetto alla **finestra**, non alla pagina.'))
