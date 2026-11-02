# Capitolo 4 · Implicazione e ragionamenti — scelte della pagina (il testo è quello del brainstorming).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Logica e IA simbolica')

ANIM = {
    'F4.5.1': anim_md(4, 'F4.5.1', 'f-detective', '0 0 720 346',
                      'Quattro indizi di un furto, scritti anche in formula. Con il modus tollens dagli indizi 2 e 3 si ricava «non dalla porta»; con il sillogismo disgiuntivo dagli indizi 1 e 5 «dalla finestra»; con il modus ponens dagli indizi 4 e 6 «impronte in giardino».'),
    'F4.6.1': anim_md(4, 'F4.6.1', 'f-fagioli', '0 0 720 340',
                      'Un sacco di fagioli e tre schede: regola, caso, risultato. La deduzione ricava il risultato da regola e caso ed è certa; l’induzione ricava la regola da caso e risultato, l’abduzione il caso da regola e risultato: sono solo probabili.'),
    'F4.6.2': anim_md(4, 'F4.6.2', 'f-tacchino', '0 0 720 340',
                      'Un tacchino in una fattoria riceve il cibo ogni giorno alle 9, con la pioggia e con il sole: dopo 300 giorni è sicurissimo della sua regola. Il 24 dicembre il cibo non arriva e il tacchino finisce sulla tavola di Natale.'),
}
SCHEMI = {
    'F4.1.1': schema_js(4, 'F4.1.1', 's-roma', '0 0 720 320',
                        'Cartina dell’Italia con Roma e Milano. Essere a Roma è sufficiente per essere in Italia; essere in Italia è necessario per essere a Roma, ma non basta: si può essere a Milano. In formula: Roma → Italia.'),
    'F4.2.1': schema_js(4, 'F4.2.1', 's-quadrato', '0 0 720 420',
                        'Le quattro frasi da «se un animale è un gatto, ha quattro zampe»: originale vera, inversa falsa (un cane), contraria falsa (un cane), contronominale vera. Nella tavola p → q e ¬q → ¬p hanno la stessa colonna: sono equivalenti.'),
    'F4.3.1': schema_js(4, 'F4.3.1', 's-stampi', '0 0 960 420',
                        'Sette regole di inferenza scritte come stampi, premesse sopra e conclusione sotto, ciascuna con un esempio: modus ponens, modus tollens, sillogismo ipotetico, sillogismo disgiuntivo, introduzione ed eliminazione della congiunzione, introduzione della disgiunzione.'),
}
WIDGET = {'F4.4.1': 'fallacie'}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(4, dict(ANIM=ANIM, SCHEMI=SCHEMI, WIDGET=WIDGET), OUT)
