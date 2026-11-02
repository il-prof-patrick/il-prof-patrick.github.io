# Capitolo 15 · Tabelle e moduli
from lib import *

P.capo('Tabelle e moduli', 15)

# ---------------------------------------------------------------- 15.1
P.sez('15.1', 'Stile delle tabelle (border-collapse · righe a zebra · tabelle su schermo piccolo)',
      R='border-collapse fonde i bordi vicini; su schermo piccolo la tabella va avvolta in un contenitore che scorre.')
P.p('Una tabella HTML senza CSS non ha bordi. Il primo istinto è dare un bordo alle celle (`th, td { border: 1px solid }`), ma il risultato sorprende: ogni cella ha la **sua** cornice, staccata da quella della vicina, e i bordi appaiono **doppi**. Il motivo è il valore iniziale di `border-collapse`:')
P.ul(['`border-collapse: separate` (iniziale): ogni cella ha i suoi bordi, distanziati da `border-spacing` (2px nel foglio del browser). Anche con `border-spacing: 0` i bordi di due celle vicine restano **due**, uno accanto all’altro;',
      '`border-collapse: collapse`: i bordi delle celle vicine si **fondono in uno solo**. È quasi sempre ciò che si vuole.'])
P.p('Due ritocchi rendono una tabella leggibile. Le **righe a zebra**, cioè uno sfondo leggero una riga sì e una no, aiutano l’occhio a seguire una riga lunga: si fanno con la pseudo-classe `:nth-child(even)` (5.3). E un po’ di `padding` nelle celle stacca il testo dai bordi.')
P.css('table {\n  border-collapse: collapse;\n  width: 100%;\n}\nth, td {\n  border: 1px solid #9aa8b6;\n  padding: 6px 10px;\n  text-align: left;\n}\ntbody tr:nth-child(even) {\n  background: #dcefeb;\n}', 'stile.css', aula='Una tabella leggibile')
P.p('Sul telefono, infine, una tabella con molte colonne **non entra**: si allarga oltre lo schermo e trascina con sé tutta la pagina, che si mette a scorrere di lato. La soluzione è avvolgerla in un contenitore con `overflow-x: auto` (6.3): a scorrere di lato è **solo la tabella**, il resto della pagina resta fermo.',
    'Due proprietà meno usate: `table-layout: fixed` fa decidere la larghezza delle colonne dalla prima riga invece che da tutto il contenuto (la tabella si impagina prima ed è più prevedibile), e `caption-side: bottom` sposta sotto la tabella il suo titolo, l’elemento `<caption>`.')
P.widget('w15_tabella', 'Quattro ritocchi a una tabella')
P.err('«Con il bordo sulle celle ho un bordo solo tra una cella e l’altra.»',
      'Con il valore iniziale `border-collapse: separate` ogni cella ha la sua cornice: i bordi vicini sono **due**. Per fonderli serve `border-collapse: collapse`.')

# ---------------------------------------------------------------- 15.2
P.sez('15.2', 'Stile dei moduli (input · label · :focus · :valid e :invalid · accent-color)',
      R='Un campo obbligatorio vuoto è già non valido all’apertura: per colorare solo dopo l’interazione c’è :user-invalid.')
P.p('I campi di un modulo (*form*) hanno degli **stati**, e per ognuno c’è una pseudo-classe:')
P.ul(['`:focus` quando il campo è attivo, pronto a ricevere il testo (e `:focus-visible` quando ci si è arrivati con la tastiera);',
      '`:disabled` per un campo disattivato, `:checked` per una casella o un pulsante di scelta selezionati, `:required` per un campo obbligatorio;',
      '`:valid` e `:invalid` dicono se il contenuto rispetta le regole dell’HTML (`required`, `type="email"`, `min`, `pattern`…). Valgono **subito**, appena la pagina si apre;',
      '`:user-valid` e `:user-invalid` fanno lo stesso, ma **solo dopo che l’utente ha interagito** con il campo: ha scritto qualcosa e ne è uscito, oppure ha provato a inviare il modulo. Funzionano in tutti i browser principali dal novembre 2023 (sono *Baseline*).'])
P.p('La differenza conta: un campo `required` vuoto è **già non valido** all’apertura della pagina. Con `:invalid` il modulo si presenta tutto rosso prima ancora che l’utente abbia scritto una lettera, come se avesse già sbagliato. Con `:user-invalid` il rosso compare solo **dopo**, quando c’è davvero un errore da correggere.')
P.dom('Metto un bordo rosso con `:invalid` ai campi `required` di un modulo di iscrizione. Com’è il modulo appena si apre la pagina?',
      '**Già tutto rosso**: i campi obbligatori vuoti sono subito non validi. Per colorarli solo dopo che l’utente ha interagito serve `:user-invalid`.', prima=True)
P.widget('w15_moduli', ':invalid e :user-invalid')
P.p('Qualche regola pratica in più:')
P.ul(['`accent-color` cambia in un colpo il colore di **caselle, pulsanti di scelta, cursori e barre di avanzamento**, che altrimenti è quello del sistema: `accent-color: #0f8d80`;',
      'i controlli dei moduli **non ereditano il carattere** della pagina: `input`, `button`, `select` e `textarea` usano un font loro, spesso più piccolo. Si sistema con `font: inherit`;',
      '**mai togliere il contorno del focus** (`outline: none`) senza metterne un altro ben visibile: chi naviga con la tastiera non saprebbe più dove si trova;',
      'ogni campo ha la sua etichetta, collegata con `<label for="id-del-campo">`: cliccando l’etichetta si attiva il campo, e i lettori di schermo leggono l’etichetta quando il campo riceve il focus.'])
P.css('input, button, select, textarea {\n  font: inherit;\n}\ninput:focus-visible {\n  outline: 3px solid #e9a313;\n  outline-offset: 2px;\n}\ninput:user-invalid {\n  border-color: #c0392b;\n}\nform {\n  accent-color: #0f8d80;\n}', 'stile.css', aula='Un modulo curato')
P.err('«`:invalid` colora di rosso il campo solo dopo che ho scritto.»',
      '`:invalid` vale **subito**: un campo obbligatorio vuoto è già non valido all’apertura. Solo dopo l’interazione colora `:user-invalid`.')
P.err('«I campi del modulo usano automaticamente il font della pagina.»',
      '`input`, `button`, `select` e `textarea` **non ereditano** il carattere: hanno quello del sistema. Serve `font: inherit`.')


# ---------------------------------------------------------------- slide
SP = {
 '15.1': [
  punti('Stile delle tabelle', 'Bordi fusi, righe a zebra, uno scorrimento solo per lei', [
    ['table', '`separate` (iniziale): ogni cella la sua cornice, bordi **doppi**'],
    ['merge', '`border-collapse: collapse`: i bordi vicini diventano **uno**'],
    ['rows-3', '`tbody tr:nth-child(even)`: righe a zebra'],
    ['smartphone', 'Sul telefono: contenitore con `overflow-x: auto`'],
    ['ruler', '`table-layout: fixed`, `caption-side: bottom`: casi particolari']]),
 ],
 '15.2': [
  punti('Gli stati dei campi', 'Una pseudo-classe per ogni stato', [
    ['text-cursor-input', '`:focus`, `:focus-visible`: il campo attivo'],
    ['ban', '`:disabled`, `:checked`, `:required`'],
    ['circle-x', '`:valid`, `:invalid`: **subito**, anche prima di scrivere'],
    ['user-check', '`:user-valid`, `:user-invalid`: **dopo** l’interazione'],
    ['palette', '`accent-color` per caselle e cursori; `font: inherit` per i campi']]),
 ],
}
P.aula('Tabelle leggibili e moduli che aiutano chi li compila.', SP,
       apertura=('Aprite un modulo di iscrizione: i campi sono rossi prima ancora di aver scritto? Che effetto vi fa?',
                 'Sembra di aver già sbagliato. Il rosso dovrebbe comparire **dopo** l’interazione: è la differenza tra `:invalid` e `:user-invalid`.'))
