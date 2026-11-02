# Capitolo 1 · Che cos'è l'informatica — contenuti dal PDF «Prezi intro info» (non dal Word): pagina del sito.
# Le immagini vengono da internet (Wikimedia Commons, Pexels, Unsplash); mappa e vignetta dei dati sono copie locali in assets/immagini/info/.
import sys, os, urllib.parse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sitolib import *
from sitolib import _img
QUI = os.path.dirname(os.path.abspath(__file__))
configura(modulo='Introduzione a informatica ed AI')

def CM(nome, w=1000):
    """Miniatura di un file di Wikimedia Commons (gli originali pesano anche parecchi MB), con il link alla sua pagina."""
    q = urllib.parse.quote(nome)
    return f'web:https://commons.wikimedia.org/wiki/Special:FilePath/{q}?width={w}|https://commons.wikimedia.org/wiki/File:{q}'
FOTO = {'dijkstra': CM('Edsger_Wybe_Dijkstra.jpg'), 'meme': 'pexels:6754846',
        'mappa': 'local:assets/immagini/info/mappa.jpg|https://mymodernmet.com/science-infographics-dominic-walliman/',
        'dati': 'local:assets/immagini/info/dati.jpg|https://www.gapingvoid.com/want-to-know-how-to-turn-change-into-a-movement/',
        'es-somma': 'pexels:7054402', 'es-grafico': CM('Normal_distribution_random_sample_vs_theory.svg'), 'es-3d': CM('Utah_teapot_simple.png'),
        'cane': 'unsplash:photo-1589652717406-1c69efaf1ff8',
        # esempi di computer: foto professionali in alta definizione (Unsplash), più il supercomputer Leonardo di Bologna
        'desktop': 'unsplash:photo-1593640495253-23196b27a87f', 'laptop': 'unsplash:photo-1541807084-5c52b6b3adef',
        'tablet': 'unsplash:photo-1544244015-0df4b3ffc6b0', 'console': 'unsplash:photo-1606144042614-b2417e99c4e3',
        'smartphone': 'unsplash:photo-1511707171634-5f897ff02aa9', 'wearable': 'unsplash:photo-1579586337278-3befd40fd17a',
        'smarttv': 'unsplash:photo-1601944177325-f8867652837f', 'server': 'unsplash:photo-1762163516269-3c143e04175c',
        'supercomputer': CM('Leonardo_supercomputer.png'), 'quantistico': 'unsplash:photo-1681908571122-97f349e1ace0',
        # storia
        'abaco': 'unsplash:photo-1773507119465-99a51f58cdd3', 'pascal': CM('Blaise_Pascal_Versailles.JPG', 800), 'pascalina': CM('Arts_et_Metiers_Pascaline_dsc03869.jpg'),
        'babbage': CM('Charles_Babbage_-_1860.jpg', 800), 'macchina-analitica': CM('Babbages_Analytical_Engine,_1834-1871._(9660574685).jpg'),
        'ada': CM('Ada_Lovelace_Chalon_portrait.jpg', 800), 'bernoulli': CM('Diagram_for_the_computation_of_Bernoulli_numbers.jpg', 1200),
        'colossus': CM('Colossus.jpg'), 'turing': CM('Alan_Turing_(1951).jpg', 800),
        'human-computers': CM('Human_computers_-_Dryden.jpg'), 'johnson': CM('Katherine_Johnson_at_NASA,_in_1966.jpg', 800),
        'apple1': CM('Apple_I_Computer.jpg'), 'altair': CM('IBM_PC_5150.jpg'),
        'robot': CM('Spot_by_Boston_Dynamics.jpg'), 'cervello': 'unsplash:photo-1677442135703-1787eea5ce01', 'cloud': CM('Cloud_computing.svg'), 'iot': 'pexels:18721086',
        'alfabeto': 'pexels:7335365', 'dizionario': 'pexels:267669', 'albero': CM('Syntax_tree.svg'), 'semantica': CM('SemanticNetExample.jpg')}
I = lambda n, e=None: FOTO[n]   # e: estensione del vecchio file ritagliato dal PDF, non serve più
# Inquadratura: di regola la foto riempie il riquadro (ritagliata). alto = ritratto, si tiene la testa; destra = si tiene il lato destro;
# intera = schema o documento, intero su fondo chiaro; cornice = intera con la foto sfocata dietro (solo foto molto allungate).
MODO = {'dijkstra': 'alto', 'babbage': 'alto', 'pascal': 'alto', 'turing': 'alto', 'johnson': 'alto', 'ada': 'alto', 'desktop': 'destra',
        'pascalina': 'cornice', 'cloud': 'intera', 'albero': 'intera', 'bernoulli': 'intera', 'semantica': 'intera', 'mappa': 'intera', 'dati': 'intera', 'es-grafico': 'intera'}
MODO_F = {FOTO[k]: m for k, m in MODO.items()}
def modo(f): return MODO_F.get(f, '')
P = lambda t: f'  <p>{t}</p>\n'
def elenco(*v): return '  <ul>\n' + ''.join(f'    <li>{x}</li>\n' for x in v) + '  </ul>\n'
def h3(t): return f'  <h3>{t}</h3>\n'
def galleria(*v):
    """Schede grandi, due per riga: foto in un riquadro 4:3 inquadrata secondo MODO, nome sotto e, se c'è, una riga di spiegazione.
    Ogni voce: (foto, nome, alt) oppure (foto, nome, alt, spiegazione)."""
    def fig(f, t, alt, d=''):
        m = modo(f); cl = f' class="m-{m}"' if m else ''
        return f'    <figure{cl}>{_img(f, alt, lazy=False, cornice=m == "cornice")}<figcaption><b>{t}</b>{" " + d if d else ""}</figcaption></figure>\n'
    return '  <div class="galleria">\n' + ''.join(fig(*x) for x in v) + '  </div>\n'

COMPUTER = [(I('desktop'), 'Desktop computer', 'Postazione con monitor curvo, tastiera, mouse e case del computer', 'Il classico computer da scrivania, con monitor, tastiera e mouse.'),
            (I('laptop'), 'Laptop', 'Computer portatile aperto su una scrivania di legno', 'Il portatile: tutto in un solo pezzo, con la batteria.'),
            (I('tablet'), 'Tablet', 'Tablet con la penna appoggiata accanto', 'Uno schermo touch, da usare con le dita o con una penna.'),
            (I('console'), 'Console', 'Console PlayStation 5 bianca con il controller', 'Un computer pensato per i videogiochi.'),
            (I('smartphone'), 'Smartphone', 'Smartphone con lo schermo pieno di app', 'Un computer completo che sta in tasca.'),
            (I('wearable'), 'Wearable', 'Orologio intelligente con le icone delle app sullo schermo', 'Dispositivi «da indossare», come lo smartwatch.'),
            (I('smarttv'), 'Smart TV', 'Televisore in un soggiorno con la schermata di un servizio di streaming', 'Un televisore che si collega a internet ed esegue app.'),
            (I('server'), 'Server', 'Armadio di server con le spie verdi accese', 'Computer che lavorano per altri computer: siti, posta, archivi.'),
            (I('supercomputer'), 'Supercomputer', 'Sala del supercomputer Leonardo, a Bologna', 'Migliaia di processori insieme: qui Leonardo, a Bologna, che simula il clima e studia nuovi farmaci.'),
            (I('quantistico'), 'Computer quantistici', 'Il cuore dorato di un computer quantistico, pieno di cavi', 'Funzionano con le leggi della fisica quantistica e sono ancora sperimentali.')]

c = ''
# ------------------------------------------------------------------ 1.1
c += h2('1.1', 'p1', 'Che cos’è l’informatica')
c += dom('Che cosa vi viene in mente se vi dico «informatica»? E che cosa studia, secondo voi, chi studia informatica?')
c += mg(I('dijkstra'), 'Edsger Dijkstra', 'Ritratto di Edsger Dijkstra, informatico (1930–2002)')
c += P('Il nome dice già molto: <b>informatica</b> viene da <i>informazione automatica</i>. È la disciplina che si occupa della <b>rappresentazione</b>, dell’<b>organizzazione</b> e dell’<b>elaborazione automatica delle informazioni</b> per la <b>risoluzione dei problemi</b>, attraverso la creazione e l’uso di <b>algoritmi</b>.')
c += P('Edsger Dijkstra, uno dei padri dell’informatica, lo diceva così: «<b>L’informatica non riguarda i computer più di quanto l’astronomia riguardi i telescopi</b>». Il computer è lo <b>strumento</b>; l’informatica è la <b>scienza</b> che studia come trattare le informazioni.')
c += P('È un campo vastissimo, che va dalla matematica più astratta alle applicazioni che usiamo tutti i giorni:')
c += grande(I('mappa'), 'Una mappa dei campi dell’informatica: dalla teoria della computazione all’hardware e all’architettura dei computer, dal software ai sistemi operativi, fino alle applicazioni come l’intelligenza artificiale, la robotica e la realtà virtuale.', '«Map of Computer Science»: mappa illustrata di tutti i campi dell’informatica')
c += h3('Che cosa non è')
c += mg(I('meme'), 'Riparare computer? Non è informatica', 'Un tecnico ripara un computer aperto con il saldatore')
c += P('Studiare informatica <b>non</b> è semplicemente:')
c += elenco('montare o smontare computer;', '«smanettare» con la tecnologia o con i dispositivi;', 'installare o usare pacchetti software;', 'navigare su internet;', 'conoscere tanti linguaggi di programmazione;', 'configurare reti Wi-Fi o router;', 'essere esperti di social media o di piattaforme digitali.')
c += P('Sono tutte cose che si <b>possono</b> fare con l’informatica, ma l’informatica è <b>altro</b>: capire come si rappresentano, si organizzano e si elaborano le informazioni.')
c += h3('Una scienza')
c += P('L’informatica è considerata una <b>scienza</b>, come la biologia o la fisica, per tre ragioni:')
c += elenco('si basa su <b>teorie, modelli e principi matematici</b>, che permettono di trovare soluzioni generali, utili anche alle altre scienze;',
            'segue il <b>metodo scientifico</b>: si osserva un problema, si formula un’ipotesi, la si mette alla prova con degli esperimenti e si traggono le conclusioni, in modo che chiunque possa <b>ripetere</b> il procedimento e <b>verificare</b> i risultati;',
            'ha un <b>progresso cumulativo</b>: ogni scoperta parte da quelle precedenti e le migliora.')

# ------------------------------------------------------------------ 1.2
c += h2('1.2', 'p2', 'Dati, informazioni e conoscenza')
c += dom('Un voto, «6», è un dato, un’informazione o una conoscenza? Che cosa manca per decidere?')
c += P('Se l’informatica elabora <b>informazioni</b>, bisogna prima capire che cosa sono. Conviene distinguere tre livelli:')
c += tab([['Livello', 'Che cos’è'],
          ['<b>Dati</b>', 'Valori alfanumerici <b>oggettivi</b>, in forma grezza e non organizzata, ottenuti attraverso diversi metodi di acquisizione.'],
          ['<b>Informazioni</b>', 'Si creano quando i dati vengono <b>elaborati, organizzati o strutturati</b> per fornire un contesto e un significato.'],
          ['<b>Conoscenza</b>', 'Il <b>significato</b> che attribuiamo alle informazioni, influenzato dalle nostre esperienze passate e dalle intuizioni personali.']])
c += grande(I('dati'), 'Dati: punti sparsi. Informazione: punti distinti per colore, cioè organizzati. Conoscenza: punti collegati tra loro, con un significato.', 'Tre riquadri: «data» con punti sparsi, «information» con punti colorati di diverse sfumature, «knowledge» con punti collegati da linee')
c += box('esempio', 'Esempio: i voti', 'book-open',
         '<p>Uno studente ha ricevuto questi voti durante il quadrimestre: 4, 6, 7, 8, 5. Sono <b>dati</b>: da soli non dicono molto, perché manca un contesto.</p>\n'
         '    <p>Se li mettiamo insieme e facciamo un calcolo, la media, otteniamo un’<b>informazione</b>: «il voto medio del quadrimestre è 6».</p>\n'
         '    <p>Con questa informazione lo studente può capire meglio la situazione e decidere che cosa fare: «con questa media mi conviene farmi interrogare, per alzarla». Questa è <b>conoscenza</b>, ed è <b>soggettiva</b>: un altro studente potrebbe trovare 6 una buona media e accontentarsi. Ma questo non cambia l’informazione, che resta oggettiva: la media è 6 per tutti.</p>')
c += h3('Proviamo: le temperature')
c += P('Proviamo con un caso un po’ più ricco. Durante una settimana sono state rilevate queste temperature in tre città: sono i nostri <b>dati</b>.')
c += tab([['Città', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'],
          ['Milano', '15 °C', '17 °C', '16 °C', '14 °C', '18 °C'],
          ['Torino', '20 °C', '22 °C', '21 °C', '19 °C', '23 °C'],
          ['Roma', '18 °C', '19 °C', '20 °C', '17 °C', '21 °C']])
c += P('Così come sono, sono solo quindici numeri. Per trasformarli in <b>informazioni</b> dobbiamo elaborarli, per esempio calcolando la temperatura media di ogni città: si sommano le cinque temperature e si divide per cinque. Milano ha una media di <b>16 °C</b> (80 : 5), Torino di <b>21 °C</b> (105 : 5), Roma di <b>19 °C</b> (95 : 5). Guardando meglio la tabella scopriamo anche che il giorno più caldo è stato il <b>venerdì</b> in tutte e tre le città, e che la temperatura più alta della settimana è quella di Torino (23 °C, venerdì), la più bassa quella di Milano (14 °C, giovedì).')
c += P('Con queste informazioni possiamo farci un’idea e prendere delle decisioni: è la <b>conoscenza</b>. Se dovessimo visitare una di queste città la settimana prossima, quale sceglieremmo? Chi ama il caldo andrebbe a Torino, che ha la media più alta e anche il picco massimo; chi preferisce il fresco sceglierebbe Milano. E che cosa metteremmo in valigia? Una felpa per Milano, qualcosa di più leggero per Torino. Due persone con le stesse informazioni possono arrivare a conclusioni diverse, perché la conoscenza dipende dai gusti e dalle esperienze di ciascuno.')
c += dom('Se doveste partire la settimana prossima, in quale di queste città andreste? Perché?')
c += h3('Oggettività e soggettività')
c += P('Le informazioni, però, si possono anche presentare in modo scorretto. Immaginiamo un’agenzia turistica che vuole vendere viaggi a Torino e far sembrare la città più attraente di Milano e di Roma. Partendo dalle stesse informazioni che abbiamo ricavato noi, scrive questa pubblicità:')
c += box('esempio', 'La pubblicità', 'megaphone', '<p><b>«Torino è la meta ideale per chi cerca il miglior clima della settimana!</b> A differenza di Milano, che ha registrato temperature bassissime (14 °C), e di Roma, dove il clima è incerto e mutevole, Torino offre temperature costantemente piacevoli e più calde (fino a 23 °C). Se non vuoi rischiare di congelare a Milano o di trovarti con brutte sorprese a Roma, <b>Torino è la scelta perfetta!</b>»</p>')
c += P('Nessun numero è inventato, eppure il messaggio inganna. Le tecniche di <b>manipolazione</b> usate sono tre:')
c += elenco('<b>esagerazione</b>: chiama «bassissime» le temperature di Milano citando la minima di un solo giorno (14 °C), come se fosse la regola e non un caso isolato;',
            '<b>omissione</b>: tace quello che non le conviene, cioè che Milano è fresca ma con temperature comunque moderate, e che anche Torino ha avuto la sua giornata più fresca (19 °C, giovedì);',
            '<b>confronto distorto</b>: usa la massima di Torino (23 °C) per far credere che lì faccia sempre caldo, e chiama «incerto» il clima di Roma, che in realtà è stato molto stabile.')
c += P('Ecco allora la differenza tra i tre livelli: i <b>dati</b> sono <b>oggettivi</b>, perché sono semplici rilevazioni; le <b>informazioni</b> dovrebbero esserlo, ma si possono presentare in modo da <b>manipolare</b> chi le legge; la <b>conoscenza</b> è <b>soggettiva</b>, perché dipende da come ciascuno interpreta le informazioni.')

# ------------------------------------------------------------------ 1.3
c += h2('1.3', 'p3', 'Che cosa significa elaborare')
c += P('In informatica <b>elaborare</b> (o <i>computare</i>, cioè calcolare) significa prendere dei dati grezzi in <b>input</b>, trasformarli seguendo una serie precisa di istruzioni, cioè un <b>algoritmo</b>, e restituire in <b>output</b> delle informazioni utili. È quello che fa ogni computer, dalla calcolatrice al supercomputer.')
def ipo():
    def riq(x, t, cl='nodo'): return f'<rect x="{x}" y="70" width="140" height="60" rx="10" class="{cl}"/><text x="{x + 70}" y="106" text-anchor="middle" class="t-b">{t}</text>'
    def fr(x): return f'<path d="M{x} 100 H{x + 40}" class="lin"/><path d="M{x + 33} 93 L{x + 40} 100 L{x + 33} 107" class="lin"/>'
    return ('      <svg viewBox="0 0 640 200" role="img" aria-label="Schema: l’input (dati grezzi) entra nel processo (algoritmo) ed esce l’output (informazioni).">\n'
            + ''.join('        ' + p + '\n' for p in [riq(40, 'Input'), fr(180), riq(250, 'Process', 'nodo evid'), fr(390), riq(460, 'Output'),
                                                   '<text x="110" y="160" text-anchor="middle" class="t-m">dati grezzi</text>',
                                                   '<text x="320" y="160" text-anchor="middle" class="t-m">algoritmo</text>',
                                                   '<text x="530" y="160" text-anchor="middle" class="t-m">informazioni</text>'])
            + '      </svg>')
c += schema('Elaborare: input, processo, output', ipo(), 's-ipo')
c += P('L’elaborazione può essere <b>aritmetica</b>, quando si fanno calcoli con i numeri, o <b>logica</b>, quando si confrontano dei valori per scegliere che cosa fare («questo numero è più grande di quello?»). Può essere semplicissima, come sommare due numeri, o molto complessa, come il <i>rendering</i> 3D, in cui il computer calcola la luce e il colore di milioni di punti per disegnare un oggetto che sembra vero.')
c += coppia((I('es-somma'), 'Una calcolatrice: due numeri in input, la somma in output', 'Una mano preme i tasti di una calcolatrice'),
            (I('es-grafico'), 'Un grafico statistico calcolato dai dati', 'Istogramma di un campione con la curva della distribuzione normale'),
            (I('es-3d'), 'Il rendering 3D della teiera di Utah, un classico della grafica al computer', 'Teiera grigia disegnata in 3D'))
c += dom('Quando scrivete un messaggio sul telefono e premete «invia», qual è l’input, qual è il processo e qual è l’output?')

# ------------------------------------------------------------------ 1.4
c += h2('1.4', 'p4', 'Che cos’è un computer')
c += mg(I('cane'), 'Usare un calcolatore', 'Un cane con gli occhiali e il maglione davanti a un tablet con la tastiera')
c += P('Il computer prende il nome proprio da questo processo: in inglese <i>computer</i> significa letteralmente «colui che computa», cioè che fa i calcoli. In italiano si dice anche <b>elaboratore</b> o <b>calcolatore</b>. Un computer, quindi, è semplicemente una <b>macchina in grado di elaborare informazioni in modo automatico</b>.')
c += P('Sa fare pochi tipi di operazioni, e molto semplici, ma le fa in un modo che nessun essere umano può eguagliare. Le sue caratteristiche principali sono:')
c += elenco('<b>velocità</b>: esegue miliardi di operazioni al secondo;',
            '<b>precisione</b>: non si distrae e non si stanca, quindi può ripetere lo stesso compito migliaia di volte senza sbagliare;',
            '<b>affidabilità</b>: con gli stessi dati e le stesse istruzioni dà sempre lo stesso risultato;',
            '<b>versatilità</b>: cambiando il programma, la stessa macchina può fare cose diversissime, dal videogioco al foglio di calcolo;',
            '<b>automazione</b>: una volta avviato, lavora da solo, senza bisogno che qualcuno intervenga.')
c += h3('Esempi di computer')
c += P('Non sono solo i computer che teniamo sulla scrivania. Un computer è <b>qualsiasi macchina che elabora informazioni</b>: ce ne sono di tanti tipi, e molti non li chiamiamo nemmeno «computer».')
c += galleria(*COMPUTER)
c += dom('Quanti computer avete addosso o nello zaino in questo momento? E in casa?')

# ------------------------------------------------------------------ 1.5
c += h2('1.5', 'p5', 'Breve storia dei computer')
c += h3('Antichità')
c += P('Il bisogno di contare e di fare calcoli è antichissimo. Uno dei primi strumenti inventati per aiutarsi è l’<b>abaco</b>, usato da Babilonesi, Greci, Romani e Cinesi. È fatto di palline che scorrono su delle aste: ogni asta rappresenta una cifra del numero (le unità, le decine, le centinaia…) e, spostando le palline, si rappresentano i numeri e si fanno addizioni e sottrazioni. Il calcolo lo fa ancora la persona, ma l’abaco la aiuta a non perdere il conto.')
c += grande(I('abaco'), 'Un abaco di legno: ogni asta è una cifra del numero.', 'Abaco di legno con le palline scure infilate su aste di metallo')
c += h3('XVII – XIX secolo')
c += P('Nel <b>1642</b> il filosofo e matematico francese <b>Blaise Pascal</b>, a soli 19 anni, costruì una macchina per aiutare il padre, che passava le giornate a fare i conti delle tasse: la <b>Pascalina</b>. Dentro una scatola di ottone c’erano delle <b>ruote dentate</b>, una per ogni cifra: si impostava un numero girando le ruote, e la macchina lo sommava a quello che c’era già. Il trucco geniale era il <b>riporto automatico</b>: quando una ruota passava dal 9 allo 0, faceva avanzare di uno scatto la ruota accanto, proprio come facciamo noi quando scriviamo «riporto 1». Per la prima volta una macchina faceva da sola una parte del calcolo.')
c += galleria((I('pascal'), 'Blaise Pascal', 'Ritratto di Blaise Pascal'), (I('pascalina'), 'La Pascalina', 'La Pascalina, calcolatrice meccanica di ottone con le ruote sul coperchio'))
c += P('Nell’Ottocento scienziati, ingegneri e navigatori usavano grandi tabelle di numeri già calcolati, compilate a mano e piene di errori. L’inglese <b>Charles Babbage</b> progettò allora una <b>macchina differenziale</b> che le calcolasse e le stampasse da sola. Poi ebbe un’idea ancora più ambiziosa: la <b>macchina analitica</b>, che non avrebbe fatto un solo tipo di calcolo, ma qualunque calcolo le venisse descritto con una serie di istruzioni, lette da <b>schede perforate</b>. Aveva una parte che conservava i numeri, il «magazzino», e una che faceva i calcoli, il «mulino»: le stesse due parti, <b>memoria</b> e <b>processore</b>, che troviamo nei computer di oggi. Per questo Babbage è considerato il <b>padre dell’informatica</b>, anche se la sua macchina, troppo complessa per la meccanica dell’epoca, non fu mai completata.')
c += galleria((I('babbage'), 'Charles Babbage', 'Fotografia di Charles Babbage'), (I('macchina-analitica'), 'La macchina analitica', 'Un pezzo della macchina analitica costruito da Babbage: colonne di ingranaggi', 'Il pezzo che Babbage riuscì a costruire.'))
c += P('Della macchina analitica si appassionò <b>Ada Lovelace</b>, matematica e figlia del poeta Lord Byron. Traducendo un articolo sulla macchina, vi aggiunse delle note più lunghe dell’articolo stesso; in una di queste descrisse passo per passo come far calcolare alla macchina una complicata serie di numeri, i numeri di Bernoulli. È considerato il <b>primo programma</b> della storia, e Ada la <b>prima programmatrice</b>. Intuì anche che una macchina così avrebbe potuto lavorare non solo con i numeri, ma con qualunque simbolo, perfino con le note musicali.')
c += galleria((I('ada'), 'Ada Lovelace', 'Ritratto di Ada Lovelace'), (I('bernoulli'), 'Il programma di Ada', 'Tabella con i passi del calcolo dei numeri di Bernoulli, dalle note di Ada Lovelace', 'La tabella dei passi per calcolare i numeri di Bernoulli.'))
c += h3('Seconda guerra mondiale')
c += P('Nel <b>1936</b>, prima ancora che esistessero i computer, il matematico inglese <b>Alan Turing</b> immaginò una macchina ideale, la <b>macchina di Turing</b>: un nastro diviso in caselle e una testina che legge e scrive simboli seguendo poche regole. Turing dimostrò che una macchina così semplice può eseguire qualunque calcolo si possa descrivere con un algoritmo: è il modello teorico alla base di tutti i computer moderni.')
c += P('Durante la Seconda guerra mondiale i tedeschi comunicavano con messaggi cifrati. In Inghilterra, a Bletchley Park, una squadra di matematici, tra cui lo stesso Turing, lavorò per decifrarli: Turing progettò la <b>Bomba</b>, una macchina elettromeccanica che aiutava a trovare le chiavi di <b>Enigma</b>, la macchina cifrante tedesca. Per i messaggi più segreti dell’alto comando l’ingegnere <b>Tommy Flowers</b> costruì tra il 1943 e il 1944 il <b>Colossus</b>, uno dei primi computer <b>elettronici</b> della storia: al posto degli ingranaggi usava migliaia di valvole e leggeva i messaggi da un nastro di carta perforata, a grande velocità.')
c += galleria((I('turing'), 'Alan Turing', 'Ritratto di Alan Turing'), (I('colossus'), 'Il Colossus', 'Il computer Colossus con due operatrici'))
c += h3('Anni ’50 – ’60')
c += P('Dopo la guerra nascono i primi computer commerciali. Sono enormi, occupano intere stanze e costano moltissimo: se li possono permettere solo università, governi e grandi aziende. Per molti calcoli, però, si usano ancora le persone. Prima di diventare il nome di una macchina, infatti, «<i>computer</i>» era il nome di un lavoro: i <i>human computers</i>, «calcolatori umani», erano gruppi di persone, spesso donne, che svolgevano a mano lunghissimi calcoli per progetti scientifici e ingegneristici. Alla NASA, per esempio, la matematica <b>Katherine Johnson</b> calcolò le traiettorie dei primi voli spaziali americani: la sua storia è raccontata nel film «Il diritto di contare».')
c += galleria((I('human-computers'), 'Human computers', 'Donne alla scrivania che eseguono calcoli in un ufficio della NACA, nel 1949'), (I('johnson'), 'Katherine Johnson', 'Katherine Johnson alla scrivania, alla NASA, nel 1966'))
c += h3('Anni ’70 – ’80')
c += P('Il <b>transistor</b>, inventato nel 1947, aveva preso il posto delle valvole: era più piccolo, più veloce, consumava meno e non si bruciava. Poi i transistor vennero rimpiccioliti e stampati a migliaia su una piccola piastrina di silicio, il <b>chip</b>, e nel 1971 un intero processore entrò in un solo chip: il <b>microprocessore</b>. I computer diventarono abbastanza piccoli ed economici da entrare nelle case e negli uffici: nascono i <b>personal computer</b>, come l’Apple I (1976) e l’IBM PC (1981), con il suo sistema operativo, l’MS-DOS. Intanto si diffondono i <b>linguaggi di programmazione ad alto livello</b>, più vicini al modo di ragionare delle persone, come <i>Fortran</i>, <i>COBOL</i> e <i>C</i>.')
c += galleria((I('apple1'), 'Apple I (1976)', 'Il computer Apple I in una cassa di legno, con la tastiera'), (I('altair'), 'IBM PC (1981)', 'Il personal computer IBM 5150 con monitor e tastiera'))
c += h3('Oggi (e domani)')
c += P('Con il nuovo millennio i computer sono diventati <b>onnipresenti</b>: stanno in tasca, al polso, in macchina, negli elettrodomestici. <b>Internet</b> li ha collegati tutti tra loro; con il <i>cloud computing</i> i nostri dati e i nostri programmi stanno su server lontani, raggiungibili da qualunque dispositivo; con l’<i>Internet of Things</i> anche gli oggetti di casa, come lampadine e telecamere, si collegano alla rete. La <b>robotica</b> e l’<b>intelligenza artificiale</b>, infine, stanno cambiando il modo in cui lavoriamo, studiamo e comunichiamo.')
c += galleria((I('robot'), 'Robotica', 'Il robot quadrupede Spot su un sentiero nel bosco'), (I('cervello'), 'Intelligenza artificiale', 'Cervello disegnato come un circuito elettronico'),
              (I('cloud'), 'Cloud computing', 'Schema del cloud: una nuvola di servizi collegata a computer, tablet e telefoni'), (I('iot'), 'Internet of Things', 'Lampadine, prese, telecamera e sensori intelligenti intorno a un tablet'))
c += dom('Che cosa è cambiato di più in questa storia: la dimensione dei computer, la loro potenza o chi li può usare?')

# ------------------------------------------------------------------ 1.6
c += h2('1.6', 'p6', 'Come parlare con un computer')
def due_lingue():
    """Una persona dice una frase, il computer «risponde» in 0 e 1: nessuno dei due capisce l'altro."""
    e = ['<path d="M58 252 Q60 188 120 184 Q180 188 182 252 Z" class="nodo evid"/>',
         '<circle cx="120" cy="132" r="44" class="nodo"/>',
         '<path d="M77 124 Q82 86 120 85 Q158 86 163 122 Q148 102 120 104 Q94 102 77 124 Z" fill="var(--ink-muted)"/>',
         '<circle cx="104" cy="136" r="4.5" fill="var(--ink)"/><circle cx="136" cy="136" r="4.5" fill="var(--ink)"/>',
         '<path d="M96 124 Q104 119 111 123 M129 123 Q136 119 144 124" class="lin"/>',
         '<path d="M108 156 Q120 165 132 156" class="lin"/>',
         '<path d="M192 20 H428 Q440 20 440 32 V80 Q440 92 428 92 H214 L172 118 L196 92 H192 Q180 92 180 80 V32 Q180 20 192 20 Z" class="nodo"/>',
         '<text x="310" y="50" text-anchor="middle" class="t" style="font-size:18px">«Se piove,</text>',
         '<text x="310" y="76" text-anchor="middle" class="t" style="font-size:18px">prendi l’ombrello!»</text>',
         '<rect x="520" y="96" width="140" height="96" rx="8" class="nodo"/>',
         '<rect x="531" y="107" width="118" height="72" rx="3" class="nodo evid"/>',
         '<text x="590" y="138" text-anchor="middle" class="t-mono">01101</text><text x="590" y="162" text-anchor="middle" class="t-mono">10010</text>',
         '<path d="M576 192 L569 214 M604 192 L611 214 M552 216 H628" class="lin"/>',
         '<path d="M262 160 H466 L522 140 L490 160 H486 Q498 160 498 172 V214 Q498 226 486 226 H262 Q250 226 250 214 V172 Q250 160 262 160 Z" class="nodo"/>',
         '<text x="374" y="189" text-anchor="middle" class="t-mono" style="font-size:17px">10100001 10111100</text>',
         '<text x="374" y="213" text-anchor="middle" class="t-mono" style="font-size:17px">10010011 00000100</text>',
         '<text x="46" y="104" class="t-a" style="font-size:32px">?</text><text x="672" y="94" class="t-a" style="font-size:32px">?</text>']
    return ('      <svg viewBox="0 0 700 260" role="img" aria-label="Una persona dice «Se piove, prendi l’ombrello!»; il computer risponde con una fila di 0 e 1. Entrambi hanno un punto interrogativo: non si capiscono.">\n'
            + ''.join('        ' + x + '\n' for x in e) + '      </svg>')
c += dom('Se un computer sa fare solo operazioni semplicissime, in che lingua gli date le istruzioni?')
c += P('Il computer, come abbiamo visto, sa fare solo operazioni semplicissime e capisce soltanto sequenze di 0 e 1; noi invece parliamo con frasi piene di sfumature. Per farci capire serve una lingua che stia a metà strada. Si distinguono tre tipi di linguaggio:')
c += tab([['Linguaggio', 'Che cos’è', 'Caratteristiche'],
          ['<b>Naturale</b>', 'Qualsiasi linguaggio che si sia evoluto naturalmente tra gli esseri umani (italiano, inglese, spagnolo…).', 'Ricchezza espressiva; ambiguità e ridondanza; figure retoriche e ironia.'],
          ['<b>Macchina</b>', 'Il linguaggio rigido e complicato in cui sono scritti i programmi eseguibili dal computer.', 'Codifica tramite soli 0 e 1; accesso diretto alle celle di memoria; comandi molto semplici; legato allo specifico calcolatore.'],
          ['<b>Di programmazione</b>', 'Linguaggio artificiale formale, usato per scrivere algoritmi e controllare il comportamento della macchina con istruzioni comprensibili dal calcolatore e più semplici per l’uomo.', 'Trasparenza rispetto alla necessità del linguaggio macchina; portabilità e leggibilità; linguaggio formale privo dei problemi del linguaggio naturale.']])
c += schema('Due modi di comunicare molto diversi', due_lingue(), 's-lingue')
c += P('Un esempio di linguaggio naturale: «se piove prendi l’ombrello», «prendi l’ombrello se piove», «ricordati l’ombrello se piove»: tre frasi diverse per dire la stessa cosa. Un esempio di linguaggio macchina: <code>10100001 10111100 10010011 00000100 …</code>, che significa <code>z = x + y</code>. Un esempio di linguaggio di programmazione (Python):')
c += codice(['def add_two_numbers(num1, num2):', '    return num1 + num2', '', "print('The sum is', add_two_numbers(3, 5))", '# The sum is 8'])
c += P('Il programma in Python si legge quasi come una frase in inglese, ma ogni istruzione ha un solo significato possibile; prima di eseguirlo, il computer lo traduce in linguaggio macchina.')
c += h3('Elementi del linguaggio')
c += P('Ogni linguaggio, naturale o artificiale, è fatto di quattro elementi. Il computer li controlla tutti e quattro, e se uno solo non va, non capisce.')
c += tab([['Elemento', 'Che cos’è', 'Esempi corretti', 'Esempi errati'],
          ['<b>Alfabeto</b>', 'Insieme finito di elementi (chiamati simboli o caratteri) ammessi.', 'a, M, p, !, 2', 'ç, ñ, ∞, #, µ'],
          ['<b>Lessico</b>', 'Insieme di regole formali per la combinazione degli elementi dell’alfabeto per la scrittura di vocaboli ammessi.', 'cane, quadro, twittare, sottone', 'hello, melpo, streaming, déjà-vu'],
          ['<b>Sintassi</b>', 'Insieme di regole formali per la combinazione degli elementi del lessico per la scrittura di frasi ammesse.', 'studio informatica; sono andato al mare; zitto!; la mamma mangia un quadro', 'andata mamma mare al; !sono andato al mare!; casa libro mare casa'],
          ['<b>Semantica</b>', 'Insieme dei significati da attribuire ai vocaboli lessicalmente corretti e alle frasi sintatticamente corrette: stabiliscono dunque come interpretare vocaboli e frasi, attribuendo loro un senso.', 'questa è una mela (indicando una mela); la mamma mangia una mela; adoro la pesca!', 'questa è una mela (indicando una pera); la mamma mangia un quadro; il mio cane pesca']])
c += galleria((I('alfabeto'), 'Alfabeto', 'Lettere dell’alfabeto di legno colorato'), (I('dizionario'), 'Lessico', 'Pagina di un dizionario inglese con la voce «dictionary»'),
              (I('albero'), 'Sintassi', 'Albero sintattico della frase inglese «Colorless green ideas sleep furiously»'), (I('semantica'), 'Semantica', 'Rete semantica: i nomi Max e Sparky collegati con frecce a «dog», «cat», «kibble» e «mice»'))
c += P('Nota: «la mamma mangia un quadro» è corretta per sintassi ma <b>sbagliata</b> per semantica, come la famosa frase di Chomsky dell’albero qui sopra, «Colorless green ideas sleep furiously» («idee verdi incolori dormono furiosamente»); «il mio cane pesca» invece è ambigua. Per questo ai computer non si parla in linguaggio naturale: servono <b>linguaggi formali</b>, senza ambiguità, dove ogni frase ha un solo significato.')
c += dom('«La mamma mangia un quadro»: che cosa funziona in questa frase e che cosa no? Alfabeto, lessico, sintassi o semantica?')

# ------------------------------------------------------------------ riepilogo del capitolo
c += ricorda(['L’informatica è la <b>scienza</b> che si occupa della <b>rappresentazione, organizzazione ed elaborazione automatica delle informazioni</b> per risolvere problemi con gli <b>algoritmi</b>. Il computer è il suo strumento, come il telescopio per l’astronomia.',
              '<b>Dati</b> grezzi e oggettivi → <b>informazioni</b> organizzate, con un contesto → <b>conoscenza</b>, cioè il significato che ci diamo, soggettivo. Le informazioni si possono presentare in modo manipolativo.',
              '<b>Elaborare</b> = prendere <b>dati</b> in input, applicare un <b>algoritmo</b>, produrre <b>informazioni</b> in output.',
              'Un <b>computer</b> è una macchina che elabora informazioni in modo automatico: veloce, preciso, affidabile, versatile, automatico. Sono computer anche smartphone, console, smart TV, server e supercomputer.',
              'Storia: abaco, Pascalina, macchina analitica di Babbage e Ada Lovelace, Turing e il Colossus, human computers, personal computer, e oggi Internet, cloud, IoT, robot e IA.',
              'Il computer capisce solo il <b>linguaggio macchina</b> (0 e 1). Per scrivere algoritmi usiamo i <b>linguaggi di programmazione</b>, formali e senza ambiguità. Ogni linguaggio ha <b>alfabeto, lessico, sintassi, semantica</b>.'])

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    scrivi(os.path.join(OUT, 'capitolo-01.html'), pagina(1, 'Che cos’è l’informatica', c, 'capitolo-01.js'))
