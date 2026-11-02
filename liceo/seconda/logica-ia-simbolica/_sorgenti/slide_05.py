# Slide di Presenta in aula · Capitolo 5 · La logica dei predicati
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Logica e IA simbolica')
c = Capitolo(5)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Aprire le proposizioni per vedere gli oggetti di cui parlano, le loro proprietà e le loro relazioni.'),
 # 5.1
 c.SEZ('5.1', 'Quando le proposizioni non bastano', 'box'),
 {'tipo': 'punti', 'titolo': 'Un ragionamento ovviamente giusto', 'msg': 'Eppure la logica proposizionale non lo dimostra', 'punti': [
   ['ticket', '«Tutti gli abbonati entrano gratis. Anna è abbonata. Quindi Anna entra gratis.»'],
   ['box', 'Tre proposizioni atomiche diverse: **p, q, quindi r**'],
   ['circle-x', 'C’è una riga in cui p e q sono vere e r è falsa: **non è valido**']]},
 {'tipo': 'tessere', 'titolo': 'Frasi come blocchi chiusi', 'msg': 'La logica proposizionale non vede', 'tessere': [
   ['user', 'Gli oggetti', 'di cui si parla: Anna'],
   ['tag', 'Proprietà e relazioni', 'essere abbonata, entrare gratis'],
   ['users', '«Tutti» e «qualcuno»', 'parole che parlano di molti oggetti in una volta']]},
 c.AN('F5.1.1', 'Aprire i blocchi'),
 {'tipo': 'punti', 'titolo': 'Una regola per tutti', 'msg': 'Per questo le basi di conoscenza si scrivono con i predicati', 'punti': [
   ['house', 'Con le proposizioni servirebbe una frase per ogni persona: «Marco è in casa», «Anna è in casa»…'],
   ['user-check', 'Con i predicati basta **InCasa(x)**'],
   ['scroll-text', 'E **una sola regola** vale per tutti']]},
 # 5.2
 c.SEZ('5.2', 'Dominio, costanti, variabili e predicati', 'shapes'),
 {'tipo': 'tessere', 'titolo': 'Gli elementi nuovi', 'msg': 'Per parlare di oggetti', 'tessere': [
   ['circle-dashed', 'Dominio', 'l’insieme degli oggetti di cui si parla: la classe, le città, i numeri'],
   ['user', 'Costanti', 'nomi di un oggetto preciso, in minuscolo: anna, roma, 7'],
   ['variable', 'Variabili', 'x, y, z: un oggetto qualsiasi del dominio'],
   ['tag', 'Predicati', 'proprietà o relazioni, in maiuscolo: Abbonato(anna)']]},
 c.SC('F5.2.1', 'Anatomia di una formula atomica'),
 {'tipo': 'tabella', 'titolo': 'L’arità', 'msg': 'Il numero di argomenti di un predicato', 'righe': [
   ['Arità', 'Esempio', 'Che cosa dice'],
   ['1 (proprietà)', 'Abbonato(anna)', 'Anna è abbonata'],
   ['2 (relazione)', 'Genitore(anna, marco)', 'Anna è genitore di Marco'],
   ['3 (relazione)', 'Tra(firenze, bologna, roma)', 'Firenze sta tra Bologna e Roma']]},
 c.DOM(0),
 c.ERR(0),
 {'tipo': 'punti', 'titolo': 'Frege e Peano', 'msg': 'La nascita della logica moderna', 'punti': [
   ['book', '**Frege**, *Ideografia* (1879): inventa i predicati e i quantificatori'],
   ['sigma', '**Peano**, Torino: scrive la matematica con simboli, come ∈ ed ∃'],
   ['history', 'Russell parte dai loro lavori']],
  'foto': c.FOBOX('5.2', 'Gottlob Frege')},
 # 5.3
 c.SEZ('5.3', 'Ricavare fatti nuovi senza scriverli', 'share-2'),
 {'tipo': 'tessere', 'titolo': 'Le proprietà delle relazioni', 'msg': 'Una relazione R può essere', 'tessere': [
   ['rotate-ccw', 'Riflessiva', 'ogni oggetto è in relazione con sé stesso: «è nella stessa classe di»'],
   ['arrow-right-left', 'Simmetrica', 'se R(x, y) allora R(y, x): «stessa classe» sì, «segue su Instagram» no'],
   ['git-commit-horizontal', 'Transitiva', 'da R(x, y) e R(y, z) segue R(x, z): «più alto di» sì, l’amicizia no']]},
 c.WG('relazioni', 'Che proprietà ha?'),
 c.DOM(1),
 # 5.4
 c.SEZ('5.4', 'Formule che aspettano un oggetto', 'circle-dashed'),
 {'tipo': 'punti', 'titolo': 'Le formule aperte', 'msg': 'Diventano proposizioni quando la variabile prende un valore', 'punti': [
   ['variable', '«x è maggiore di 3» **non è né vera né falsa**'],
   ['check', '«7 è maggiore di 3» è vera, «2 è maggiore di 3» è falsa'],
   ['circle-dashed', 'L’**insieme di verità**: gli oggetti che la rendono vera, {4, 5, …, 10} tra 1 e 10']]},
 {'tipo': 'tabella', 'titolo': 'I connettivi come operazioni tra insiemi', 'msg': 'Si vedono con i diagrammi di Venn', 'righe': [
   ['Connettivo', 'Operazione tra insiemi', 'Nel diagramma'],
   ['P(x) ∧ Q(x)', 'intersezione P ∩ Q', 'la parte comune ai due cerchi'],
   ['P(x) ∨ Q(x)', 'unione P ∪ Q', 'tutto ciò che sta in almeno un cerchio'],
   ['¬P(x)', 'complementare', 'tutto ciò che sta fuori dal cerchio P'],
   ['P(x) ⊕ Q(x)', 'differenza simmetrica', 'i due cerchi senza la parte comune'],
   ['P(x) → Q(x) per ogni x', 'inclusione P ⊆ Q', 'il cerchio P sta dentro il cerchio Q']]},
 c.AN('F5.4.1', 'La classe e gli insiemi'),
 c.ERR(1),
 # 5.5
 c.SEZ('5.5', 'La stessa formula in mondi diversi', 'globe'),
 {'tipo': 'punti', 'titolo': 'Interpretazioni e mondi', 'msg': 'Il valore di una formula dipende dal mondo di cui si parla', 'punti': [
   ['globe', 'L’**interpretazione**: il dominio e il significato di costanti e predicati'],
   ['moon', 'InCasa(marco) è vera stasera e falsa domattina'],
   ['database', 'Una base di conoscenza è la **descrizione di un mondo**'],
   ['triangle-alert', 'Se la descrizione è sbagliata o incompleta, **lo saranno anche le conclusioni**']]},
 {'tipo': 'punti', 'titolo': 'Il mondo dei blocchi', 'msg': 'Un piccolo mondo per allenarsi a leggere le formule', 'punti': [
   ['box', 'Forme geometriche su una scacchiera: Cubo(a), ASinistraDi(a, b)'],
   ['monitor', '*Tarski’s World*: il programma dice se ogni formula è vera o falsa in quel mondo']],
  'foto': dict(c.FO('F5.5.1', 'Tarski’s World'), src=c.FO('F5.5.1')['src'] + '#intera')},
 c.WG('blocchi', 'Il mondo dei blocchi'),
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
