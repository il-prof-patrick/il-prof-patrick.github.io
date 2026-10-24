# Slide di Presenta in aula · Capitolo 6 · Un computer può essere intelligente?
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Introduzione a informatica ed AI')
c = Capitolo(6)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Il test di Turing e la stanza cinese danno risposte opposte alla stessa domanda.'),
 c.DOM(0),
 # 3.1
 c.SEZ('6.1', 'Un gioco per sostituire una domanda troppo vaga', 'messages-square'),
 {'tipo': 'punti', 'titolo': 'Alan Turing, 1950', 'msg': 'Dalla domanda «le macchine possono pensare?» a un gioco', 'punti': [
   ['calendar', 'Nel **1950** il matematico britannico **Alan Turing** si chiede se le macchine possano pensare'],
   ['circle-help', 'La domanda è **troppo vaga**: non si sa che cosa voglia dire «pensare»'],
   ['gamepad-2', 'La sostituisce con un gioco: il **gioco dell’imitazione**, oggi detto **test di Turing**']],
  'foto': c.FO('F6.1.1', 'Alan Turing')},
 {'tipo': 'punti', 'titolo': 'Le regole del gioco', 'msg': 'Un interrogatore, una persona e una macchina', 'punti': [
   ['message-square', 'L’**interrogatore** conversa **per iscritto** con due interlocutori, senza vederli'],
   ['users', 'Uno è una **persona**, l’altro è una **macchina**'],
   ['circle-help', 'Può fare **tutte le domande** che vuole'],
   ['trophy', 'Se alla fine **non capisce quale sia la macchina**, la macchina **supera il test**']]},
 c.WG('turing', 'Prova: sei tu l’interrogatore'),
 {'tipo': 'punti', 'titolo': 'Che cosa misura il test', 'msg': 'Quanto bene una macchina imita una persona', 'punti': [
   ['drama', 'Misura **l’imitazione** in una conversazione, non quanto la macchina sia intelligente'],
   ['check', 'Nel primo giro la macchina **passa fingendo di sbagliare** e inventando ricordi'],
   ['x', 'Nel secondo **fallisce perché è troppo brava**, pur facendo cose molto intelligenti'],
   ['paw-print', 'Superarlo **non prova che pensi**: come Hans, può sembrare intelligente senza esserlo'],
   ['brain', 'Non superarlo **non prova che non sia intelligente**']]},
 c.DOM(1),
 c.ERR(0),
 # 3.2
 c.SEZ('6.2', 'Rispondere bene non basta per capire', 'door-closed'),
 c.DOM(2),
 {'tipo': 'punti', 'titolo': 'John Searle, 1980', 'msg': 'Un esperimento mentale contro il test di Turing', 'punti': [
   ['eye', 'Il test di Turing **guarda solo le risposte**'],
   ['calendar', 'Nel **1980** il filosofo statunitense **John Searle** propone un **esperimento mentale**'],
   ['lightbulb', 'È uno scenario **immaginato e non realizzato**'],
   ['door-closed', 'Vuole mostrare che **rispondere bene non basta per capire**: la **stanza cinese**']],
  'foto': c.FO('F6.2.1', 'John Searle')},
 {'tipo': 'punti', 'titolo': 'La stanza cinese', 'msg': 'Dentro non capisce nessuno', 'punti': [
   ['user', 'Una persona che **non conosce il cinese** è chiusa in una stanza con un **libro di regole**'],
   ['file-text', 'Da una fessura riceve **fogli con ideogrammi**; per ogni sequenza il libro dice quali segni **copiare e restituire**'],
   ['circle-check', 'Fuori le risposte sembrano **perfette**: si pensa che dentro qualcuno capisca il cinese'],
   ['circle-x', 'Invece la persona ha solo seguito regole su **simboli di cui non conosce il significato**']]},
 c.AN('F6.2.2', 'La stanza cinese'),
 {'tipo': 'punti', 'titolo': 'Il computer è nella stanza', 'msg': 'Manipolare simboli non è capire', 'punti': [
   ['cpu', 'Per Searle un computer **esegue regole su simboli**, come la persona nella stanza'],
   ['message-circle', 'Anche se **supera il test di Turing**, non è detto che **capisca ciò che dice**'],
   ['book-x', '**Manipolare simboli non è capire**']]},
 # 3.3
 c.SEZ('6.3', 'Tre risposte, e nessuna è chiusa', 'scale'),
 {'tipo': 'tabella', 'titolo': 'Un computer può essere intelligente?', 'msg': 'Tre posizioni a confronto', 'righe': [
   ['Posizione', 'Idea', 'Chi la sostiene', 'Limite'],
   ['Sì', 'se si comporta in modo intelligente, è intelligente', 'Turing, con il suo test', 'il comportamento può ingannare, come con Hans'],
   ['No', 'senza comprensione non c’è intelligenza', 'Searle, con la stanza cinese', 'che cos’è esattamente la comprensione?'],
   ['Dipende', 'da che cosa intendiamo per intelligenza: svolgere compiti o capire', 'chi parte dalla definizione (capitolo 4)', 'rimanda la domanda alla definizione, ma non la risolve']]},
 {'tipo': 'punti', 'titolo': 'Una domanda aperta', 'msg': 'La risposta dipende da che cosa chiamiamo intelligenza', 'punti': [
   ['scale', 'Se conta **ciò che il sistema fa**, vince la posizione di Turing: la definizione operativa del **capitolo 4**'],
   ['brain', 'Se conta **capire**, vince Searle: ma nessuno sa dire con precisione che cosa sia la comprensione'],
   ['book-open', 'Per questo **nessuna delle tre risposte è chiusa**']]},
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
