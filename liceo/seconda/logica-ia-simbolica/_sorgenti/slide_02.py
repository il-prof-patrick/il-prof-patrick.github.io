# Slide di Presenta in aula · Capitolo 2 · La logica proposizionale
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Logica e IA simbolica')
c = Capitolo(2)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Le frasi che sono o vere o false e le parole che le uniscono: il primo linguaggio formale per scrivere fatti e regole.'),
 # 2.1
 c.SEZ('2.1', 'Frasi che sono vere oppure false', 'toggle-left'),
 {'tipo': 'punti', 'titolo': 'La proposizione', 'msg': 'Una frase dichiarativa con uno e un solo valore di verità', 'punti': [
   ['message-square', 'È **dichiarativa**: afferma qualcosa'],
   ['check', 'Ha **uno e un solo** valore di verità: **vero (V)** oppure **falso (F)**'],
   ['house', '«È sera», «fuori è buio», «Marco è in casa»: **i mattoni della logica**']]},
 c.DOM(0),
 {'tipo': 'tessere', 'titolo': 'Non sono proposizioni', 'msg': 'Non hanno un valore di verità uguale per tutti', 'tessere': [
   ['circle-help', 'Domande e ordini', '«Che ore sono?», «Chiudi la porta!»: non affermano niente'],
   ['heart', 'Giudizi personali', '«La pizza è il cibo più buono»: il valore cambia da persona a persona'],
   ['repeat', 'Paradossi', '«Questa frase è falsa»: non può essere né vera né falsa']],
  'nota': 'Una proposizione può benissimo essere falsa: «7 è un numero pari» lo è.'},
 c.WG('proposizione', 'È una proposizione?'),
 c.ERR(0),
 {'tipo': 'tessere', 'titolo': 'La logica classica', 'msg': 'Tre principi dicono che cosa vuol dire «o vera o falsa»', 'tessere': [
   ['toggle-left', 'Bivalenza', 'i valori di verità sono **solo due**: vero e falso'],
   ['ban', 'Non contraddizione', 'una proposizione **non può essere vera e falsa** nello stesso momento'],
   ['split', 'Terzo escluso', 'è vera **oppure** falsa: *tertium non datur*, «un terzo non è dato»']]},
 {'tipo': 'punti', 'titolo': 'Vero e falso nel computer', 'msg': 'I valori booleani', 'punti': [
   ['binary', 'Vero e falso sono i due stati di un **bit**: 1 e 0'],
   ['braces', 'Il tipo **booleano**: in Flowgorithm una variabile *Boolean* vale `true` o `false`'],
   ['git-branch', '**Ogni condizione di un «Se» è una proposizione**: «voto ≥ 6» sceglie il ramo']]},
 {'tipo': 'punti', 'titolo': 'George Boole', 'msg': 'L’algebra del pensiero (1815–1864)', 'punti': [
   ['school', 'Figlio di un calzolaio, studia quasi da solo e insegna matematica a Cork'],
   ['book', '1854, *Le leggi del pensiero*: **il ragionamento diventa un calcolo con 1 e 0**'],
   ['binary', 'È l’**algebra di Boole**: da lui prendono il nome i valori **booleani**']],
  'foto': c.FOBOX('2.1', 'George Boole')},
 {'tipo': 'punti', 'titolo': 'I paradossi', 'msg': 'Frasi che non possono essere né vere né false', 'punti': [
   ['quote', 'Eubulide (IV secolo a.C.): «**Io sto mentendo**»'],
   ['repeat', 'Se è vera è falsa, se è falsa è vera: **non è una proposizione**'],
   ['scissors', 'Russell (1918): il barbiere che rade **tutti e soli** gli uomini che non si radono da soli'],
   ['circle-x', 'Chi rade il barbiere? **Un barbiere così non può esistere**']],
  'foto': c.FOBOX('2.1', 'Bertrand Russell', i=1)},
 # 2.2
 c.SEZ('2.2', 'Dentro una proposizione ce ne possono essere altre', 'puzzle'),
 {'tipo': 'punti', 'titolo': 'Atomiche e composte', 'msg': 'Le composte si smontano in proposizioni più semplici', 'punti': [
   ['atom', '**Atomica**: non si scompone («piove»)'],
   ['puzzle', '**Composta**: proposizioni unite dai **connettivi**, «non», «e», «o», «se… allora»'],
   ['circle-slash', 'Anche «non piove» è composta'],
   ['calculator', 'Il suo valore **dipende solo** dalle atomiche e dai connettivi']]},
 c.SC('F2.2.1', 'Smontare una frase'),
 {'tipo': 'punti', 'titolo': 'Le variabili proposizionali', 'msg': 'Una lettera al posto di una proposizione qualsiasi', 'punti': [
   ['variable', 'p = «piove», q = «ho l’ombrello», r = «mi bagno»'],
   ['x', 'Come la x in algebra sta al posto di un numero qualsiasi'],
   ['arrow-right', 'La frase diventa: «se p e non q, allora r»']]},
 c.ERR(1),
 # 2.3
 c.SEZ('2.3', 'Basta una parola a cambiare una regola', 'toggle-right'),
 {'tipo': 'punti', 'titolo': 'Regole di tutti i giorni', 'msg': 'Sono proposizioni composte', 'punti': [
   ['door-open', 'Puoi uscire prima con l’autorizzazione dei genitori **e** il permesso della presidenza'],
   ['ticket', 'Sconto per chi ha meno di 18 anni **o** è studente'],
   ['utensils', 'Il menù comprende primo **o** secondo']]},
 {'tipo': 'punti', 'titolo': 'La tavola di verità', 'msg': 'Ogni connettivo è definito dalla sua tavola', 'punti': [
   ['table', 'Per ogni combinazione dei valori di partenza dà il valore della composta'],
   ['circle-dot', '**Unario**: agisce su una sola proposizione'],
   ['git-merge', '**Binario**: ne unisce due'],
   ['hash', 'Il numero di proposizioni su cui agisce è l’**arietà**']]},
 c.WG('interruttori', 'Interruttori e lampadina'),
 c.TAV('NOT · la negazione', 'Rovescia il valore di verità: ¬p, «non»', [['p', '¬p'], ['F', 'V'], ['V', 'F']]),
 c.TAV('AND · la congiunzione', 'Vera solo quando sono vere entrambe: p ∧ q, «e»', [['p', 'q', 'p ∧ q'], ['F', 'F', 'F'], ['F', 'V', 'F'], ['V', 'F', 'F'], ['V', 'V', 'V']]),
 {'tipo': 'punti', 'titolo': 'Anche «ma» è un AND', 'msg': '«ma», «però», «anche se», «eppure» sono congiunzioni', 'punti': [
   ['quote', '«È bravo **ma** pigro» afferma che è bravo **e** che è pigro'],
   ['eraser', 'La sfumatura di contrasto, in logica, **si perde**']]},
 c.DOM(1),
 c.TAV('OR · la disgiunzione inclusiva', 'Vera se ne è vera almeno una, anche entrambe: p ∨ q, latino *vel*', [['p', 'q', 'p ∨ q'], ['F', 'F', 'F'], ['F', 'V', 'V'], ['V', 'F', 'V'], ['V', 'V', 'V']]),
 c.TAV('XOR · la disgiunzione esclusiva', 'Vera se ne è vera una sola: p ⊕ q, «o… o…», latino *aut aut*', [['p', 'q', 'p ⊕ q'], ['F', 'F', 'F'], ['F', 'V', 'V'], ['V', 'F', 'V'], ['V', 'V', 'F']]),
 c.ERR(2),
 {'tipo': 'punti', 'titolo': 'I connettivi nel computer', 'msg': 'Ogni connettivo è una porta logica', 'punti': [
   ['cpu', 'Una **porta logica** riceve bit (1 = vero, 0 = falso) e restituisce il valore del connettivo'],
   ['plug', 'Due interruttori **in serie** fanno un **AND**, due **in parallelo** un **OR**'],
   ['microchip', 'Gli interruttori sono **transistor**: un processore ne ha miliardi'],
   ['history', 'Claude Shannon, 1937: l’algebra di Boole descrive proprio questi circuiti'],
   ['memory-stick', 'Con la sola porta **NAND** si costruiscono tutte le altre: da qui la memoria «flash NAND»']]},
 # 2.4
 c.SEZ('2.4', 'Quando una promessa è tradita', 'handshake'),
 {'tipo': 'punti', 'titolo': 'L’implicazione', 'msg': 'p → q è falsa solo quando p è vera e q è falsa', 'punti': [
   ['quote', '«**Se** prendi 8, **allora** ti porto al cinema»'],
   ['arrow-right', 'p è l’**antecedente**, q il **conseguente**'],
   ['circle-x', 'È falsa **solo** se prendi 8 e non vai al cinema']]},
 c.DOM(2),
 c.AN('F2.4.1', 'La promessa è stata mantenuta?'),
 c.TAV('L’implicazione', 'Falsa solo con l’antecedente vero e il conseguente falso', [['p', 'q', 'p → q'], ['F', 'F', 'V'], ['F', 'V', 'V'], ['V', 'F', 'F'], ['V', 'V', 'V']]),
 {'tipo': 'punti', 'titolo': '*Ex falso quodlibet*', 'msg': '«Dal falso segue qualunque cosa»', 'punti': [
   ['message-circle', 'L’implicazione dice che cosa succede **solo quando l’antecedente è vero**'],
   ['shield-check', 'Se prendi 5 la promessa non dice niente: **non può essere tradita**'],
   ['toggle-left', 'Per la bivalenza, «non tradita» vuol dire **vera**']]},
 c.AN('F2.4.2', 'Una regola sui numeri'),
 c.ERR(3),
 c.TAV('La doppia implicazione', 'Vera quando p e q hanno lo stesso valore: p ↔ q, «se e solo se»', [['p', 'q', 'p ↔ q'], ['F', 'F', 'V'], ['F', 'V', 'F'], ['V', 'F', 'F'], ['V', 'V', 'V']]),
 {'tipo': 'punti', 'titolo': 'Se e solo se', 'msg': 'Due implicazioni insieme: se p allora q, e se q allora p', 'punti': [
   ['arrow-right-left', 'Un numero è pari **se e solo se** è divisibile per 2'],
   ['house', 'Puoi uscire **se e solo se** hai finito i compiti'],
   ['circle-x', '«Divisibile per 4 ↔ pari» invece è falsa: **6** è pari ma non divisibile per 4']]},
 # 2.5
 c.SEZ('2.5', 'Tradurre una frase in una formula', 'languages'),
 {'tipo': 'tessere', 'titolo': 'Formalizzare', 'msg': 'Tre mosse', 'tessere': [
   ['atom', '1 · Le atomiche', 'trovarle e dare a ciascuna una lettera'],
   ['link', '2 · I connettivi', 'riconoscerli, anche quando sono nascosti in altre parole'],
   ['parentheses', '3 · Le parentesi', 'metterle dove servono']]},
 c.AN('F2.5.1', 'Traduci la frase'),
 {'tipo': 'tabella', 'titolo': 'Connettivi nascosti', 'msg': 'Molte parole italiane nascondono un connettivo', 'righe': [
   ['Nella lingua', 'In logica', 'Esempio'],
   ['ma, però, anche se, eppure', '∧', '«È bravo ma pigro» → b ∧ p'],
   ['né… né…', '¬p ∧ ¬q', '«Né Marco né Luca sono venuti» → ¬m ∧ ¬l'],
   ['o… o…, oppure ma non entrambi', '⊕', '«O vieni o resti» → v ⊕ r'],
   ['se, quando, ogni volta che', 'p → q', '«Quando piove prendo l’ombrello» → p → o'],
   ['p solo se q', 'p → q', '«Esci solo se hai finito i compiti» → e → c'],
   ['p a meno che q', '¬q → p', '«Esco, a meno che piova» → ¬p → e']]},
 {'tipo': 'punti', 'titolo': 'Precedenza e parentesi', 'msg': 'Prima ¬, poi ∧, poi ∨, poi → e infine ↔', 'punti': [
   ['list-ordered', 'Come in algebra la moltiplicazione si fa prima dell’addizione'],
   ['parentheses', '¬p ∧ q vuol dire (¬p) ∧ q, **non** ¬(p ∧ q)'],
   ['check', 'Nel dubbio, **le parentesi tolgono ogni ambiguità**']]},
 {'tipo': 'punti', 'titolo': 'Formule ben formate', 'msg': 'Scritte secondo le regole', 'punti': [
   ['variable', 'Una variabile da sola è ben formata; se A lo è, lo è anche ¬A'],
   ['plus', 'Se A e B lo sono, lo sono (A ∧ B), (A ∨ B), (A ⊕ B), (A → B), (A ↔ B)'],
   ['bug', '«p ∧ ∨ q» e «(p ∧ q» non vogliono dire niente: come un **errore di sintassi**']]},
 {'tipo': 'formula', 'titolo': 'Le regole della casa smart', 'msg': 'Le due regole del capitolo 1, in formule', 'formula': '(s ∧ b) → l     (l ∧ m) → a', 'righe': [
   ['s', 'è sera'], ['b', 'fuori è buio'], ['l', 'serve la luce'], ['m', 'c’è qualcuno in casa'], ['a', 'le luci sono accese']]},
 c.DOM(3),
 c.ERR(4),
 c.ERR(5),
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
