# Slide di Presenta in aula · Capitolo 5 · Come ragiona un computer
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Introduzione a informatica ed AI')
c = Capitolo(5)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
PSEUDO, PYTHON = c.conf.PSEUDO, c.conf.PYTHON

S = [
 c.COP('Un computer non ragiona come una persona: esegue istruzioni, e un algoritmo è il modo di dirgli che cosa fare.'),
 c.DOM(0),
 # 4.1
 c.SEZ('5.1', 'Esegue istruzioni semplicissime, ma molto in fretta', 'cpu'),
 {'tipo': 'punti', 'titolo': 'Il computer tradizionale', 'msg': 'Non ragiona: esegue istruzioni', 'punti': [
   ['file-text', 'Esegue **istruzioni scritte da una persona**'],
   ['list-ordered', 'L’insieme delle istruzioni è il **programma**'],
   ['circle-x', 'Un computer tradizionale **non ragiona**']]},
 {'tipo': 'tessere', 'titolo': 'Che cosa sa fare il processore', 'msg': 'Pochissimi tipi di istruzione, tutte semplicissime', 'tessere': [
   ['calculator', 'Calcoli matematici', 'per esempio una somma'],
   ['scale', 'Operazioni logiche', 'per esempio confrontare due numeri'],
   ['memory-stick', 'Memoria e salti', 'leggere o scrivere un dato e passare a un’altra istruzione, anche solo se un confronto è vero']]},
 {'tipo': 'punti', 'titolo': 'Dai mattoni al videogioco', 'msg': 'Tutto nasce combinando istruzioni semplici', 'punti': [
   ['gamepad-2', 'Dal **videogioco** al **browser**: tutto nasce dalle stesse istruzioni semplicissime'],
   ['gauge', 'Le istruzioni si combinano **a miliardi al secondo**']],
  'foto': c.FO('F5.1.1', 'Un processore (CPU)')},
 {'tipo': 'punti', 'titolo': 'Veloce, non intelligente', 'msg': 'Dove un computer eccelle e dove no', 'punti': [
   ['zap', 'Eccelle nella **velocità**: miliardi di istruzioni al secondo'],
   ['database', 'Eccelle nella **memoria**: non dimentica e non si stanca'],
   ['circle-x', 'Non eccelle in ciò che richiede di **capire**'],
   ['door-closed', 'Come la persona nella stanza cinese, **esegue regole** senza sapere che cosa significhino']]},
 {'tipo': 'punti', 'titolo': 'Una «macchina stupida»', 'msg': 'Umberto Eco sul computer', 'punti': [
   ['quote', 'Lo scrittore **Umberto Eco** lo disse in una prefazione'],
   ['bot', 'Per lui il computer non rende intelligente chi non lo è: è una **«macchina stupida»**'],
   ['users', 'Dà buoni risultati solo **nelle mani di persone intelligenti**']],
  'foto': c.FO('F5.1.2', 'Umberto Eco')},
 c.ERR(0),
 # 4.2
 c.SEZ('5.2', 'Un procedimento che trasforma dati in dati', 'list-ordered'),
 {'tipo': 'punti', 'titolo': 'Che cos’è un algoritmo', 'msg': 'Un procedimento per risolvere un problema', 'punti': [
   ['flag', 'È un **procedimento finito**'],
   ['list-ordered', 'Formato da una **sequenza ordinata di passi elementari**'],
   ['arrow-right-left', '**Trasforma dati in ingresso** (*input*) **in dati in uscita** (*output*)'],
   ['target', 'Serve a **risolvere un problema**']]},
 {'tipo': 'punti', 'titolo': 'Un esempio: il caffè', 'msg': 'Che cosa serve per andare alle macchinette', 'punti': [
   ['coffee', 'L’**output atteso** è il caffè'],
   ['coins', 'Gli **input necessari** sono le monete e la scelta'],
   ['list-ordered', 'I **passi** portano dagli input all’output'],
   ['file-code', 'Il **programma** è la traduzione di un algoritmo in istruzioni che il computer sa eseguire']],
  'foto': c.FO('F5.2.1', 'Una macchinetta del caffè')},
 # 4.3
 c.SEZ('5.3', 'Che cosa rende buono un algoritmo', 'list-checks'),
 c.DOM(1),
 {'tipo': 'tabella', 'titolo': 'Le proprietà di un algoritmo', 'msg': 'Che cosa richiedono e perché servono', 'righe': [
   ['Proprietà', 'Che cosa richiede', 'Perché serve'],
   ['Finitezza', 'l’esecuzione termina in un tempo ragionevole', 'un procedimento infinito non dà mai una risposta'],
   ['Non ambiguità', 'ogni passo si interpreta in un solo modo', 'la macchina non può «indovinare» che cosa si intendeva'],
   ['Efficacia', 'il risultato è una soluzione adeguata al problema', 'un algoritmo che termina ma sbaglia è inutile'],
   ['Efficienza', 'usa poco tempo e poca memoria', 'per uno stesso problema esistono tanti algoritmi, alcuni molto più rapidi'],
   ['Generalità', 'risolve una classe di problemi e non uno solo', 'ordinare qualsiasi elenco, non solo uno'],
   ['Atomicità', 'i passi non sono ulteriormente scomponibili', 'il computer capisce solo istruzioni elementari']]},
 # 4.4
 c.SEZ('5.4', 'Quattro modi di scrivere lo stesso algoritmo', 'file-code'),
 {'tipo': 'tessere', 'titolo': 'Le quattro forme', 'msg': 'Dalla più umana alla più vicina al computer', 'tessere': [
   ['message-square', 'Linguaggio naturale', 'chiaro, ma può essere ambiguo'],
   ['workflow', 'Diagramma di flusso', 'visivo: riquadri, frecce e rombi'],
   ['file-text', 'Pseudocodice', 'preciso, ma non eseguibile'],
   ['file-code', 'Codice', 'eseguibile dal computer']]},
 {'tipo': 'punti', 'titolo': 'Linguaggio naturale', 'msg': 'La macchinetta del caffè, con il prezzo in centesimi', 'punti': [
   ['circle-play', '**Parti** da un credito di zero'],
   ['repeat', '**Finché** il credito è minore del prezzo, chiedi una moneta e aggiungila'],
   ['coffee', '**Quando** il credito basta, prepara il caffè'],
   ['coins', '**Se** il credito supera il prezzo, restituisci la differenza come resto']]},
 c.SC('F5.4.1', 'Diagramma di flusso'),
 dict(c.COD(PSEUDO, 'Pseudocodice'), msg='Preciso, ma non eseguibile: parole italiane usate come istruzioni'),
 dict(c.COD(PYTHON, 'Codice di programmazione'), msg='Eseguibile dal computer, secondo le regole di un linguaggio'),
 {'tipo': 'punti', 'titolo': 'Da una forma all’altra', 'msg': 'L’algoritmo resta lo stesso, cambia il modo di scriverlo', 'punti': [
   ['file-text', 'Dallo **pseudocodice** si arriva a **qualsiasi linguaggio** di programmazione'],
   ['workflow', 'Lo stesso vale per il **diagramma di flusso**'],
   ['equal', 'Cambia solo **il modo di scriverlo**']]},
 c.AN('F5.4.2', 'Quattro forme, un solo algoritmo'),
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
