# Slide di Presenta in aula · Capitolo 4 · Implicazione e ragionamenti
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Logica e IA simbolica')
c = Capitolo(4)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Gli schemi di ragionamento sempre validi, che si concatenano fino a una conclusione sicura, e quelli che sembrano validi ma non lo sono.'),
 # 4.1
 c.SEZ('4.1', 'Che cosa basta e che cosa serve', 'key-round'),
 {'tipo': 'punti', 'titolo': 'Le implicazioni del regolamento', 'msg': 'Per leggerle bene servono due parole', 'punti': [
   ['scroll-text', '«Se hai almeno 18 anni, puoi giustificarti da solo»'],
   ['scroll-text', '«Se superi il limite di assenze, non puoi essere scrutinato»']]},
 {'tipo': 'tessere', 'titolo': 'Sufficiente e necessaria', 'msg': 'In p → q', 'tessere': [
   ['circle-check', 'p è sufficiente per q', '**basta** che p sia vera perché q sia vera'],
   ['key-round', 'q è necessaria per p', '**senza q non può esserci p**, ma q da sola non basta']],
  'nota': 'Se una condizione è sia necessaria sia sufficiente vale il «se e solo se»: pari ↔ divisibile per 2.'},
 c.SC('F4.1.1', 'Roma e l’Italia'),
 c.DOM(0),
 c.ERR(0),
 # 4.2
 c.SEZ('4.2', 'Tre frasi che somigliano a un’implicazione', 'shuffle'),
 {'tipo': 'tessere', 'titolo': 'Inversa, contraria, contronominale', 'msg': 'Da p → q si costruiscono altre tre frasi', 'tessere': [
   ['shuffle', 'Inversa', 'scambia le due parti: **q → p**'],
   ['circle-slash', 'Contraria', 'le nega: **¬p → ¬q**'],
   ['repeat', 'Contronominale', 'le scambia e le nega: **¬q → ¬p**']],
  'nota': 'Solo la contronominale è equivalente all’implicazione di partenza.'},
 c.SC('F4.2.1', 'Il quadrato delle quattro frasi'),
 c.DOM(1),
 # 4.3
 c.SEZ('4.3', 'Gli stampi sempre validi', 'cog'),
 {'tipo': 'punti', 'titolo': 'Le regole di inferenza', 'msg': 'Schemi di ragionamento sempre validi', 'punti': [
   ['shapes', 'Se le premesse hanno una certa forma, permettono di ricavare una certa conclusione'],
   ['repeat', 'Valgono **qualunque cosa** ci sia al posto delle lettere'],
   ['cog', 'Sono gli strumenti con cui ragiona un **motore inferenziale**']]},
 {'tipo': 'tabella', 'titolo': 'Sette regole', 'msg': 'Il simbolo ∴ si legge «quindi»', 'righe': [
   ['Regola', 'Schema'],
   ['*modus ponens*', 'p → q, p ∴ q'],
   ['*modus tollens*', 'p → q, ¬q ∴ ¬p'],
   ['sillogismo ipotetico', 'p → q, q → r ∴ p → r'],
   ['sillogismo disgiuntivo', 'p ∨ q, ¬p ∴ q'],
   ['introduzione della congiunzione', 'p, q ∴ p ∧ q'],
   ['eliminazione della congiunzione', 'p ∧ q ∴ p'],
   ['introduzione della disgiunzione', 'p ∴ p ∨ q']]},
 c.SC('F4.3.1', 'Le regole come stampi'),
 {'tipo': 'punti', 'titolo': 'Le abbiamo già viste all’opera', 'msg': 'Nella casa smart del capitolo 1', 'punti': [
   ['house', 'Il ***modus ponens*** è ciò che fa la casa quando una regola scatta'],
   ['link', 'Il **sillogismo ipotetico** è il ragionamento a catena: dalla sera alle luci accese']]},
 # 4.4
 c.SEZ('4.4', 'Ragionamenti che sembrano validi', 'triangle-alert'),
 {'tipo': 'punti', 'titolo': 'Le fallacie', 'msg': 'Sembrano valide ma non lo sono', 'punti': [
   ['triangle-alert', 'Alcune hanno la forma di una regola valida, ma «storta»'],
   ['message-circle-warning', 'Altre sbagliano nel contenuto, pur sembrando ragionevoli'],
   ['search', 'Si smontano con un **controesempio**: premesse vere e conclusione falsa']]},
 c.DOM(2),
 {'tipo': 'tessere', 'titolo': 'Regole storte', 'msg': 'Somigliano alle regole valide', 'tessere': [
   ['droplets', 'Affermazione del conseguente', 'p → q, q, quindi p: «la strada è bagnata, quindi piove»'],
   ['circle-slash', 'Negazione dell’antecedente', 'p → q, ¬p, quindi ¬q: «non hai studiato, quindi non passi»'],
   ['split', 'Affermazione di un disgiunto', 'p ∨ q, p, quindi ¬q: l’OR letto come uno XOR']]},
 {'tipo': 'tessere', 'titolo': 'Le fallacie di tutti i giorni', 'msg': 'Nella pubblicità, sui social, nelle discussioni', 'tessere': [
   ['git-fork', 'Falso dilemma', '«O sei con me o sei contro di me»'],
   ['users', 'Generalizzazione affrettata', '«Due ragazzi copiano, quindi copiano tutti»'],
   ['clover', '*Post hoc*', '«Da quando ho il braccialetto prendo voti migliori»'],
   ['user-x', '*Ad hominem*', '«Cosa ne sai tu di matematica, che hai 5?»'],
   ['wheat', 'Uomo di paglia', '«Vuoi meno compiti? Allora vuoi che non si studi più»'],
   ['megaphone', 'Maggioranza e autorità', '«Lo fanno tutti», «l’ha detto un influencer»']]},
 {'tipo': 'punti', 'titolo': 'Correlazione non è causa', 'msg': 'Vale anche per l’IA', 'punti': [
   ['clover', 'Che due cose capitino insieme **non vuol dire** che una causi l’altra'],
   ['brain-circuit', 'Un modello che impara dai dati trova **correlazioni, non cause**']]},
 c.WG('fallacie', 'Valido o fallacia?'),
 c.ERR(1),
 # 4.5
 c.SEZ('4.5', 'Dalle premesse alla conclusione, passo dopo passo', 'footprints'),
 {'tipo': 'punti', 'titolo': 'La conseguenza logica', 'msg': 'Vera in tutti i casi in cui le premesse sono vere', 'punti': [
   ['table', 'Con la **tavola di verità**: sicura, ma le righe sono **2ⁿ** e diventano troppe'],
   ['footprints', 'Con una **derivazione**: una catena di passi, ognuno con una regola di inferenza'],
   ['cog', 'Un motore inferenziale **non prova tutti i casi: applica regole**']]},
 c.AN('F4.5.1', 'L’indagine del detective'),
 # 4.6
 c.SEZ('4.6', 'Ragionamenti certi e ragionamenti probabili', 'scale'),
 {'tipo': 'tessere', 'titolo': 'Tre tipi di ragionamento', 'msg': 'Non tutti i ragionamenti sono deduzioni', 'tessere': [
   ['arrow-down', 'Deduzione', 'dalla regola generale al caso particolare: **certa**'],
   ['arrow-up', 'Induzione', 'da tanti casi a una regola generale: **probabile**'],
   ['search', 'Abduzione', 'la spiegazione più probabile di un fatto: **probabile**']]},
 c.AN('F4.6.1', 'I fagioli di Peirce'),
 {'tipo': 'punti', 'titolo': 'Charles S. Peirce', 'msg': 'Il primo a distinguere i tre ragionamenti (1839–1914)', 'punti': [
   ['scroll-text', 'In un articolo del **1878**'],
   ['bean', 'Con l’esempio del **sacco di fagioli**']],
  'foto': c.FOBOX('4.6', 'Charles S. Peirce')},
 c.AN('F4.6.2', 'Il tacchino induttivista'),
 {'tipo': 'punti', 'titolo': 'Da un pollo a un tacchino', 'msg': 'La storia ha due autori', 'punti': [
   ['history', '**Russell**, 1912: un pollo nutrito ogni giorno, fino al giorno in cui il fattore gli tira il collo'],
   ['book', '**Alan Chalmers**, 1976: il «tacchino induttivista» in *Che cos’è questa scienza?*']],
  'foto': c.FOBOX('4.6', 'Alan Chalmers', i=1)},
 {'tipo': 'tabella', 'titolo': 'Deduzione, induzione, abduzione', 'msg': 'A confronto', 'righe': [
   ['', 'Deduzione', 'Induzione', 'Abduzione'],
   ['Parte da', 'una regola e un caso', 'tanti casi osservati', 'una regola e un fatto osservato'],
   ['Arriva a', 'un risultato', 'una regola generale', 'la spiegazione più probabile'],
   ['La conclusione è', '**certa**', '**probabile**', '**probabile**'],
   ['Esempio', 'Anna è abbonata: entra gratis', 'il tacchino', 'il medico: «probabilmente è influenza»'],
   ['Nell’IA', 'l’IA simbolica, che applica regole', 'l’apprendimento automatico, che ricava regole', 'i sistemi di diagnosi']]},
 {'tipo': 'punti', 'titolo': 'L’abduzione', 'msg': 'Non è valida, ma usata con prudenza è utile', 'punti': [
   ['triangle-alert', 'Ha la forma di un’**affermazione del conseguente**: influenza → febbre; febbre; quindi influenza'],
   ['stethoscope', 'È il modo in cui medici e detective **scelgono l’ipotesi da verificare**']]},
 c.DOM(3),
 c.ERR(2),
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
