# Capitolo 11 · Flexbox
from lib import *

P.capo('Flexbox', 11)

# ---------------------------------------------------------------- 11.1
P.sez('11.1', 'L’idea (contenitore ed elementi · asse principale e trasversale)',
      R='display:flex sul contenitore dispone i figli lungo un asse principale, con un asse trasversale perpendicolare.')
P.p('Con il flusso normale affiancare tre card, centrare un riquadro in verticale o spingere una voce di menu a destra richiede trucchi. [[Flexbox]] (*flexible box*) nasce per questo: dispone gli elementi **in una direzione**, distribuendo lo spazio in modo flessibile.',
    'Si scrive `display: flex` sul **contenitore** (*flex container*). I suoi **figli diretti** diventano **elementi flessibili** (*flex item*) e si mettono in fila, uno accanto all’altro. I nipoti no: dentro ogni elemento continua il flusso normale, a meno di fare di quell’elemento un altro contenitore flex.')
P.html('<div class="corsi">          <!-- contenitore: display: flex -->\n  <div class="card">Arduino</div>   <!-- elemento flessibile -->\n  <div class="card">Stampa 3D</div>\n  <div class="card">Robot</div>\n</div>', 'index.html')
P.p('Tutto Flexbox ragiona su **due assi**:')
P.ul(['l’[[asse principale]] (*main axis*) è la direzione in cui gli elementi si mettono in fila: con il valore iniziale `flex-direction: row` è **orizzontale**, da sinistra a destra;',
      'l’[[asse trasversale]] (*cross axis*) è **perpendicolare**: con `row` è verticale.'])
P.p('Con `flex-direction: column` gli elementi si impilano dall’alto in basso: l’asse principale diventa **verticale** e quello trasversale **orizzontale**. Gli assi **si scambiano**, e con loro il significato delle proprietà di allineamento (più avanti). Esiste anche `display: inline-flex`: il contenitore funziona allo stesso modo, ma verso l’esterno sta **in linea**, largo quanto il contenuto, come un `inline-block`.')
P.widget('w11_flex', 'Flexbox')
P.err('«`display: flex` va messo sugli elementi che voglio affiancare.»',
      'Va sul **contenitore**: sono i suoi figli diretti a mettersi in fila. Su un elemento da solo non affianca niente.')
P.err('«`justify-content` lavora sempre in orizzontale.»',
      '`justify-content` lavora sull’**asse principale**: orizzontale con `row`, ma **verticale** con `column`.')

# ---------------------------------------------------------------- 11.2
P.sez('11.2', 'Proprietà del contenitore (flex-direction · flex-wrap · justify-content · align-items · gap)',
      R='flex-direction e flex-wrap impostano flusso e a capo; justify-content distribuisce sull’asse principale, align-items sul trasversale.')
P.p('Le proprietà del contenitore decidono come si dispongono **tutti** gli elementi. Si provano nel widget del paragrafo precedente.')
P.ul(['`flex-direction`: la direzione dell’asse principale. `row` (predefinito, da sinistra a destra), `row-reverse` (da destra a sinistra), `column` (dall’alto in basso), `column-reverse` (dal basso in alto);',
      '`flex-wrap`: se gli elementi non entrano. Con `nowrap` (predefinito) restano **su una riga sola e si restringono**; con `wrap` **vanno a capo** su più righe. `flex-flow` riassume le due: `flex-flow: row wrap`;',
      '`justify-content`: come si distribuisce lo spazio libero **sull’asse principale**. `flex-start` (all’inizio), `flex-end` (in fondo), `center`, `space-between` (primo e ultimo ai bordi, spazi uguali tra gli altri), `space-around` (spazio uguale attorno a ognuno: ai bordi è la metà), `space-evenly` (spazi tutti uguali, anche ai bordi);',
      '`align-items`: come si allineano gli elementi **sull’asse trasversale**. `stretch` (predefinito: si allungano fino a riempire), `flex-start`, `flex-end`, `center`, `baseline` (allineati sulla linea di base del testo);',
      '`align-content`: come si distribuiscono **le righe** quando ce n’è più d’una (con `wrap`), con gli stessi valori di `justify-content`;',
      '`gap`: lo spazio **tra** gli elementi (non ai bordi). `row-gap` e `column-gap` lo danno separatamente tra le righe e tra le colonne.'])
P.dom('Con `flex-direction: column`, `justify-content: center` centra gli elementi in orizzontale o in verticale?',
      'In **verticale**: `justify-content` lavora sull’asse principale, che con `column` è verticale. E serve un’**altezza** sul contenitore, altrimenti non c’è spazio libero da distribuire.', prima=True)
P.schema('s11_justify', 'I sei valori di justify-content sullo stesso contenitore', '''      <div class="s11j">''' + ''.join(f'''
        <div class="s11j-r"><code>{v}</code><div class="s11j-c" style="justify-content:{v}"><i>1</i><i>2</i><i>3</i></div></div>''' for v in ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']) + '''
      </div>''', titolo_aula='I sei valori di justify-content')
P.err('«`flex-wrap` è attivo di default: se gli elementi non entrano vanno a capo.»',
      'Il valore predefinito è `nowrap`: gli elementi restano **su una riga** e si restringono, fino a uscire dal contenitore. Per andare a capo serve `flex-wrap: wrap`.')

# ---------------------------------------------------------------- 11.3
P.sez('11.3', 'Proprietà degli elementi (flex-grow · flex-shrink · flex-basis · flex · order · align-self)',
      R='flex-grow, flex-shrink e flex-basis dicono come un elemento si allarga, si restringe e da quale misura parte.')
P.p('Ogni elemento flessibile ha tre proprietà che decidono la sua larghezza (con `row`) sull’asse principale:')
P.ul(['`flex-basis`: la **misura di partenza**. `auto` (predefinito) vuol dire la `width` dell’elemento o, se non c’è, quella del **contenuto**; `0` vuol dire partire da zero;',
      '`flex-grow`: come l’elemento si spartisce lo **spazio avanzato**, quello che resta nel contenitore dopo aver messo tutti alla misura di partenza. Con `0` (predefinito) non cresce; con `1` su tutti, lo spazio avanzato si divide in parti uguali; un elemento con `2` ne prende il doppio;',
      '`flex-shrink`: come l’elemento rinuncia allo **spazio mancante** quando le misure di partenza non entrano. Con `1` (predefinito) si restringe; con `0` mai.'])
P.p('La scorciatoia `flex` le scrive tutte e tre, in quest’ordine. I valori da ricordare:')
P.tab([['Scrittura', 'Equivale a', 'Effetto'],
       ['valore iniziale', '`flex: 0 1 auto`', 'non cresce, si restringe, parte dal contenuto'],
       ['`flex: 1`', '`flex: 1 1 0%`', 'parte da zero e cresce: elementi **larghi uguali**'],
       ['`flex: auto`', '`flex: 1 1 auto`', 'parte dal contenuto e cresce: larghi diversi'],
       ['`flex: none`', '`flex: 0 0 auto`', 'rigido: né cresce né si restringe']],
      'La scorciatoia flex')
P.dom('Tre box con testi di lunghezza diversa e `flex-grow: 1` su tutti. Diventano larghi uguali?',
      '**No**: `flex-grow` divide in parti uguali solo lo spazio **avanzato oltre il contenuto**, quindi il box con il testo più lungo resta più largo. Con `flex: 1` (base 0) sì, diventano uguali.', prima=True)
P.widget('w11_elementi', 'flex sugli elementi')
P.p('Altre proprietà degli elementi:')
P.ul(['`order` cambia **l’ordine in cui compaiono**, senza toccare l’HTML (predefinito 0; i numeri più bassi vengono prima). Va usato con cautela: chi naviga con la tastiera o con un lettore di schermo segue l’ordine dell’HTML;',
      '`align-self` cambia l’allineamento trasversale **di un solo elemento**, sovrascrivendo l’`align-items` del contenitore;',
      '`margin-left: auto` (con `row`) **spinge l’elemento in fondo**: il margine automatico prende tutto lo spazio libero. È il modo di mandare a destra l’ultima voce di un menu;',
      'un elemento flessibile **non si restringe sotto la larghezza del suo contenuto** (la parola o l’URL più lungo): un testo lungo può uscire dal suo riquadro. La soluzione è `min-width: 0` sull’elemento.'])
P.err('«`flex: 1` e `flex-grow: 1` sono la stessa cosa.»',
      '`flex: 1` mette anche la **base a 0**: gli elementi diventano larghi uguali. `flex-grow: 1` lascia la base `auto`: divide solo lo spazio avanzato e gli elementi restano diversi.')
P.err('«Un testo lungo sta sempre nel suo riquadro.»',
      'Un elemento flessibile non scende sotto la larghezza del suo contenuto più lungo: una parola o un URL lunghissimi lo fanno sporgere. Serve `min-width: 0` (e magari `overflow-wrap: anywhere`).')

# ---------------------------------------------------------------- 11.4
P.sez('11.4', 'Schemi ricorrenti (centrare · barra di navigazione · card affiancate · footer in fondo)',
      R='Quattro schemi coprono quasi tutti i casi: centrare, barra di navigazione, card affiancate, footer in fondo.')
P.p('Nei siti veri Flexbox si usa soprattutto in quattro modi, che conviene conoscere a memoria:')
P.schema('s11_schemi', 'Quattro schemi ricorrenti', '''      <div class="s11s">
        <div class="kit-cella"><b>Centrare in orizzontale e in verticale</b><div class="s11s-r cen"><div>Iscriviti</div></div><pre class="codice"><code>''' + evidenzia_css('.box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}') + '''</code></pre></div>
        <div class="kit-cella"><b>Barra di navigazione</b><div class="s11s-r nav"><span>Club</span><span>Corsi</span><span>Orari</span><span class="dx">Accedi</span></div><pre class="codice"><code>''' + evidenzia_css('nav { display: flex; gap: 16px; }\n.accedi { margin-left: auto; }') + '''</code></pre></div>
        <div class="kit-cella"><b>Card che vanno a capo</b><div class="s11s-r card"><div>Arduino</div><div>Stampa 3D</div><div>Robot</div><div>Droni</div><div>Sensori</div></div><pre class="codice"><code>''' + evidenzia_css('.corsi {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.card { flex: 1 1 120px; }') + '''</code></pre></div>
        <div class="kit-cella"><b>Footer sempre in fondo</b><div class="s11s-r foot"><div class="h">header</div><div class="m">main · flex: 1</div><div class="f">footer</div></div><pre class="codice"><code>''' + evidenzia_css('body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain { flex: 1; }') + '''</code></pre></div>
      </div>''', titolo_aula='Quattro schemi ricorrenti')
P.p('Il quarto merita una parola: in una pagina con poco contenuto il footer resterebbe a metà schermo. Con il `body` in colonna alto almeno quanto la finestra e `flex: 1` sul `main`, il `main` si prende tutto lo spazio avanzato e **spinge il footer in fondo**.')
P.err('«`align-items: center` centra in orizzontale.»',
      '`align-items` lavora sull’**asse trasversale**: con `row` centra in **verticale**. In orizzontale (asse principale) centra `justify-content: center`.')


# ---------------------------------------------------------------- slide
SP = {
 '11.1': [
  punti('Contenitore ed elementi', 'display: flex va sul contenitore', [
    ['box', '`display: flex` sul **contenitore**: i figli diretti si mettono in fila'],
    ['git-fork', 'Solo i **figli diretti** diventano elementi flessibili, non i nipoti'],
    ['arrow-right', '**Asse principale**: la direzione della fila (con `row`, orizzontale)'],
    ['arrow-down', '**Asse trasversale**: perpendicolare (con `row`, verticale)'],
    ['repeat', 'Con `column` gli assi **si scambiano**']]),
 ],
 '11.2': [
  tessere('Le proprietà del contenitore', 'Due assi, due famiglie di proprietà', [
    ['arrow-right-left', '`flex-direction`', 'row, row-reverse, column, column-reverse'],
    ['wrap-text', '`flex-wrap`', 'nowrap (predefinito) o wrap'],
    ['align-horizontal-space-between', '`justify-content`', 'sull’asse principale'],
    ['align-vertical-justify-center', '`align-items`', 'sull’asse trasversale'],
    ['space', '`gap`', 'spazio tra gli elementi, non ai bordi']],
    nota='`align-content` distribuisce le righe quando sono più d’una'),
 ],
 '11.3': [
  punti('grow, shrink, basis', 'Da quale misura parte e come si spartisce lo spazio', [
    ['ruler', '`flex-basis`: la misura di partenza (`auto` = il contenuto)'],
    ['expand', '`flex-grow`: quota dello **spazio avanzato** che l’elemento prende'],
    ['shrink', '`flex-shrink`: quota dello **spazio mancante** a cui rinuncia'],
    ['equal', '`flex: 1` = `1 1 0%`: tutti larghi **uguali**'],
    ['arrow-right-to-line', '`margin-left: auto` spinge in fondo; `min-width: 0` per i testi lunghi']]),
 ],
 '11.4': [],
}
P.aula('Mettere in fila, distribuire lo spazio, allineare: Flexbox.', SP,
       apertura=('Tre card affiancate, larghe uguali, centrate in verticale in una fascia. Con quello che sapete finora, come le fareste?',
                 'Con `inline-block`, float e margini calcolati a mano, con molti trucchi. Con **Flexbox** bastano tre righe sul contenitore.'))
