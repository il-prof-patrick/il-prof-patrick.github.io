# Capitolo 14 · Trasformazioni, transizioni, animazioni
from lib import *

P.capo('Trasformazioni, transizioni, animazioni', 14)

# ---------------------------------------------------------------- 14.1
P.sez('14.1', 'transform (translate · rotate · scale · skew · transform-origin)',
      R='transform cambia l’aspetto di un elemento senza spostare i vicini; l’ordine delle funzioni conta.')
P.p('La proprietà `transform` **sposta, ruota, ingrandisce o inclina** un elemento dopo che il browser lo ha impaginato. È come prendere la scatola già messa al suo posto e muoverla con le mani: **i vicini non se ne accorgono**, perché per l’impaginazione l’elemento è ancora dov’era. Si scrive una o più funzioni, separate da spazi:')
P.ul(['`translate(40px, 20px)` lo **sposta** di 40px a destra e 20px in basso (`translateX()` e `translateY()` per un asse solo). Le percentuali si riferiscono all’elemento stesso: `translate(-50%, -50%)` lo sposta di metà della sua larghezza e altezza;',
      '`rotate(45deg)` lo **ruota** in senso orario (gradi `deg` o giri `turn`: `0.5turn` è mezzo giro);',
      '`scale(1.5)` lo **ingrandisce** del 50% (`scale(0.5)` lo dimezza; `scale(2, 1)` lo allarga solo in orizzontale);',
      '`skew(20deg)` lo **inclina**, trasformando il rettangolo in un parallelogramma.'])
P.p('Due dettagli contano. Il primo è `transform-origin`, il **punto fisso** attorno a cui avvengono rotazioni e ingrandimenti: il valore iniziale è il centro (`center`), ma con `top left` l’elemento ruota attorno all’angolo in alto a sinistra, come una porta sui cardini. Il secondo è l’**ordine**: le funzioni si applicano una dopo l’altra, e ognuna lavora sul sistema di riferimento lasciato dalla precedente. `translate(60px) rotate(45deg)` sposta e poi ruota sul posto; `rotate(45deg) translate(60px)` prima ruota e poi sposta **lungo la direzione ruotata**, in diagonale.')
P.widget('w14_transform', 'transform')
P.err('«`transform` sposta anche gli elementi vicini.»',
      'Per l’impaginazione l’elemento resta **dov’era**: i vicini non si muovono e, se serve, l’elemento trasformato si sovrappone a loro. Per spostare davvero i vicini servono margini, Flexbox o Grid.')

# ---------------------------------------------------------------- 14.2
P.sez('14.2', 'transition',
      R='transition interpola il passaggio tra due stati; va scritta nello stato base.')
P.p('Quando una proprietà cambia valore, per esempio al passaggio del mouse, il cambiamento è **istantaneo**. Con `transition` il browser lo **interpola**: calcola tutti i valori intermedi e lo fa avvenire in un certo tempo. Servono quattro informazioni:')
P.ul(['**quale proprietà** animare (`background-color`, `transform`… oppure `all`);',
      'la **durata** (`0.3s` o `300ms`);',
      'la **funzione di temporizzazione** (*timing function*), cioè **come** procede nel tempo: `linear` (velocità costante), `ease` (il valore iniziale: parte svelto e rallenta), `ease-in` (parte piano e accelera), `ease-out` (parte svelto e frena), `ease-in-out` (parte piano, accelera e frena);',
      'un eventuale **ritardo** prima di partire (`0.2s`).'])
P.css('.bottone {\n  background-color: #0f8d80;\n  transition: background-color 0.3s ease-out,\n              transform 0.3s ease-out;\n}\n.bottone:hover {\n  background-color: #0a6f66;\n  transform: translateY(-3px);\n}', 'stile.css', aula='Una transizione sul pulsante')
P.p('La `transition` va scritta nello **stato base** (`.bottone`), non nello stato `:hover`: così vale **in tutte e due le direzioni**, quando il mouse entra e quando esce. Scritta solo in `:hover`, l’entrata è morbida ma l’uscita è istantanea. Infine, non tutte le proprietà si possono interpolare: `display` passa da `none` a `block` **di colpo**. Per far comparire un elemento con una dissolvenza si anima `opacity` (insieme a `visibility`).')
P.widget('w14_transition', 'transition')
P.err('«Basta scrivere `transition` in `:hover`.»',
      'Così la transizione vale solo **all’entrata**: all’uscita lo stato base non ha `transition` e il ritorno è istantaneo. Va scritta nello **stato base**.')
P.err('«`display: none` si anima con `transition`.»',
      '`display` non si interpola: passa da un valore all’altro di colpo. Per una dissolvenza si animano `opacity` e `visibility`.')

# ---------------------------------------------------------------- 14.3
P.sez('14.3', '@keyframes e animation',
      R='@keyframes definisce i passi di un’animazione e animation li applica.')
P.p('Una transizione va da uno stato all’altro quando qualcosa cambia. Un’**animazione** invece ha **più tappe** e può partire da sola, ripetersi, andare avanti e indietro. Si scrive in due parti. Con la regola `@keyframes` si dà un nome all’animazione e si descrivono i suoi **fotogrammi chiave** (*keyframes*) in percentuale del tempo: `0%` (o `from`) è l’inizio, `100%` (o `to`) la fine, e in mezzo tutte le tappe che servono. Poi, sull’elemento, la proprietà `animation` la applica.')
P.css('@keyframes sali {\n  0%   { transform: translateY(0);     background: #2f6fd6; }\n  50%  { transform: translateY(-60px); background: #2f9e44; }\n  100% { transform: translateY(-90px); background: #e9a313; }\n}\n.box {\n  animation: sali 1.2s ease-in-out;\n}', 'stile.css', aula='@keyframes e animation')
P.p('`animation` è una scorciatoia per otto proprietà:')
P.tab([['Proprietà', 'Che cosa dice', 'Esempio'],
       ['`animation-name`', 'il nome dei `@keyframes`', '`sali`'],
       ['`animation-duration`', 'quanto dura un giro', '`1.2s`'],
       ['`animation-timing-function`', 'come procede nel tempo', '`ease-in-out`'],
       ['`animation-delay`', 'quanto aspetta prima di partire', '`0.5s`'],
       ['`animation-iteration-count`', 'quante volte si ripete', '`3`, `infinite`'],
       ['`animation-direction`', 'il verso di ogni giro', '`alternate` (avanti e indietro)'],
       ['`animation-fill-mode`', 'che cosa resta prima e dopo', '`forwards` (resta all’ultimo fotogramma)'],
       ['`animation-play-state`', 'in corso o in pausa', '`paused`']],
      'Le proprietà di animation')
P.widget('w14_keyframes', '@keyframes passo per passo')
P.err('«Finita l’animazione, l’elemento resta nello stato finale.»',
      'Finita l’animazione, l’elemento **torna allo stato iniziale** (quello del suo CSS). Per farlo restare all’ultimo fotogramma serve `animation-fill-mode: forwards`.')

# ---------------------------------------------------------------- 14.4
P.sez('14.4', 'Quando animare e quando no (prestazioni · accessibilità)',
      R='transform e opacity si animano a basso costo, width, height, top e left ricalcolano l’impaginazione.')
P.p('Per disegnare ogni fotogramma il browser fa, in ordine, tre lavori: calcola l’**impaginazione** (dove sta ogni scatola), **dipinge** i pixel e **compone** gli strati. Animare una proprietà che cambia l’impaginazione lo costringe a rifare tutto, 60 volte al secondo, per l’elemento e per i suoi vicini: su un telefono l’animazione **scatta**. `transform` e `opacity`, invece, si gestiscono quasi sempre nella sola composizione, spesso dalla scheda grafica.')
P.tab([['Conviene animare', 'Perché', 'Meglio evitare', 'Perché'],
       ['`transform`', 'sposta, ruota, ingrandisce senza toccare l’impaginazione', '`width`, `height`', 'ogni fotogramma ricalcola l’impaginazione di tutta la zona'],
       ['`opacity`', 'cambia solo la composizione degli strati', '`top`, `left`, `margin`', 'spostano davvero la scatola: i vicini vanno ricalcolati'],
       ['`background-color`, `color`', 'costano un nuovo disegno, ma non l’impaginazione', '`box-shadow` grandi, `filter: blur()`', 'ogni fotogramma ridipinge molti pixel']],
      'Che cosa animare')
P.p('Poi c’è chi guarda. Il movimento attira l’attenzione e, per alcune persone, causa nausea o vertigini. Le linee guida per l’accessibilità del web (**WCAG**) chiedono che ciò che si muove da solo **per più di 5 secondi** si possa **fermare**, e che niente **lampeggi più di 3 volte al secondo**, perché può scatenare crisi in chi soffre di epilessia fotosensibile. E i sistemi operativi hanno un’opzione per **ridurre il movimento**, che il CSS può rispettare:')
P.css('@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; transition: none !important; }\n}', 'stile.css', aula='Rispettare «riduci movimento»')
P.p('Il buon senso dice di animare **poco e con uno scopo**: far capire da dove arriva un elemento, confermare un clic, guidare lo sguardo. Le animazioni di questo sito si fermano da sole se il sistema chiede di ridurre il movimento.')
P.dom('Per far scorrere un riquadro verso destra, conviene animare `left` o `transform: translateX()`?',
      '`transform: translateX()`: non ricalcola l’impaginazione a ogni fotogramma e resta fluido anche sui telefoni. `left` sposta davvero la scatola e costringe a rifare l’impaginazione.', prima=True)


# ---------------------------------------------------------------- slide
SP = {
 '14.1': [
  tessere('Le funzioni di transform', 'Muovere la scatola senza disturbare i vicini', [
    ['move', '`translate()`', 'sposta; in % rispetto all’elemento'],
    ['rotate-cw', '`rotate()`', 'ruota, in `deg` o `turn`'],
    ['maximize', '`scale()`', 'ingrandisce o rimpicciolisce'],
    ['italic', '`skew()`', 'inclina in un parallelogramma']],
    nota='`transform-origin` è il punto fisso; l’ordine delle funzioni conta'),
 ],
 '14.2': [
  punti('transition', 'Dal valore vecchio al nuovo, con i passaggi in mezzo', [
    ['list', 'Quattro parti: **proprietà**, **durata**, **funzione**, **ritardo**'],
    ['activity', '`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`: come procede'],
    ['home', 'Va nello **stato base**: vale all’entrata e all’uscita'],
    ['ban', '`display` non si interpola: per le dissolvenze `opacity`']]),
 ],
 '14.3': [
  punti('@keyframes e animation', 'Più tappe, anche da sola e ripetuta', [
    ['film', '`@keyframes nome { 0% {…} 50% {…} 100% {…} }`: le tappe'],
    ['play', '`animation: nome 1.2s ease-in-out`: la applica a un elemento'],
    ['repeat', '`iteration-count`, `direction: alternate`: ripetere e tornare'],
    ['pin', '`fill-mode: forwards`: resta all’ultimo fotogramma'],
    ['pause', '`play-state: paused`: in pausa']]),
 ],
 '14.4': [
  punti('Animare con giudizio', 'Leggere per il browser, sopportabili per chi guarda', [
    ['zap', '`transform` e `opacity`: solo composizione, fluide'],
    ['snail', '`width`, `height`, `top`, `left`: impaginazione a ogni fotogramma'],
    ['hand', 'WCAG: ciò che si muove **oltre 5 secondi** si deve poter fermare'],
    ['triangle-alert', 'Mai più di **3 lampeggi al secondo**'],
    ['accessibility', '`prefers-reduced-motion`: rispettare chi chiede meno movimento']]),
 ],
}
P.aula('Muovere le cose con il CSS: transform, transition, animation.', SP,
       apertura=('Passate il mouse su un pulsante di un sito ben fatto: cambia colore di colpo o con un passaggio morbido? Chi fa quel passaggio?',
                 'Una **transition**: il browser calcola i colori intermedi e il cambiamento dura una frazione di secondo.'))
