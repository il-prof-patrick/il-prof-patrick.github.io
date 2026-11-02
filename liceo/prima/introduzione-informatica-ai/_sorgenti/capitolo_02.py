# Capitolo 2 · Il linguaggio del computer — dal PDF «Mega esercitazione di ripasso» (14 tipi di esercizio) + teoria.
# Come il capitolo 1: scritto a mano con sitolib, non passa dal Word. I conti scritti a mano sono verificati con Python (vedi gli assert).
# Gli esercizi svolti sono animazioni a passi: testi qui in ANIM, scene in assets/capitolo-02.js.
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sitolib import *
QUI = os.path.dirname(os.path.abspath(__file__))
configura(modulo='Introduzione a informatica ed AI')

CIFRE = '0123456789ABCDEF'
def conv(n, base):
    s = ''
    while n: s = CIFRE[n % base] + s; n //= base
    return s or '0'
def b2(n): return conv(n, 2)
def sub(x, b): return f'{x}<sub>{b}</sub>'
def n2(x): return f'{x:,}'.replace(',', '.')   # 1.048.576

P = lambda t: f'  <p>{t}</p>\n'
def h3(t): return f'  <h3>{t}</h3>\n'
def elenco(*v): return '  <ul>\n' + ''.join(f'    <li>{x}</li>\n' for x in v) + '  </ul>\n'
def passi(*v): return '  <ol class="passi-num">\n' + ''.join(f'    <li>{x}</li>\n' for x in v) + '  </ol>\n'
def calc(*righe): return codice(list(righe))

# ------------------------------------------------------------------ animazioni degli esercizi svolti (le scene sono in assets/capitolo-02.js)
def passi_d2b(n):
    r, v = [], n
    while v: r.append((v, v // 2, v % 2)); v //= 2
    t = [f'Divido {n} per 2: fa {r[0][1]} con resto <b>{r[0][2]}</b>. Il resto è sempre 0 o 1.']
    t += [f'Divido il quoziente: {a} : 2 = {q}, resto <b>{s}</b>.' for a, q, s in r[1:-1]]
    t += [f'{r[-1][0]} : 2 = 0, resto <b>{r[-1][2]}</b>. Il quoziente è 0: <b>mi fermo</b>.',
          f'Leggo i resti <b>dal basso verso l’alto</b>: {n} = <b>{b2(n)}</b><sub>2</sub>.']
    return t
ANIM = {
    'f-config': dict(titolo='Ogni bit in più raddoppia', vb='0 0 720 344', inizio='Quante configurazioni si possono fare con 3 bit? Premi «Avanti» e aggiungi un bit alla volta.',
                     aria='Albero delle configurazioni: con 1 bit 0 e 1, con 2 bit quattro configurazioni, con 3 bit otto configurazioni.',
                     passi=['Con <b>1 bit</b> le configurazioni sono due: <b>0</b> e <b>1</b>.',
                            'Aggiungo un secondo bit: a ciascuna configurazione di prima posso attaccare uno <b>0</b> o un <b>1</b> (in verde). Le configurazioni <b>raddoppiano</b>: 2 × 2 = <b>4</b>.',
                            'Con il terzo bit raddoppiano ancora: 4 × 2 = <b>8</b>, cioè 2 × 2 × 2 = 2<sup>3</sup>.',
                            'Ogni bit in più raddoppia le configurazioni: con <b>n bit</b> sono <b>2<sup>n</sup></b>. Con un byte, 8 bit, sono 2<sup>8</sup> = <b>256</b>.']),
    'f-bitper': dict(titolo='Quanti bit per 40 canali?', vb='0 0 720 300', inizio='Bisogna dare un codice diverso a 40 canali. Premi «Avanti» e prova le potenze di 2 in ordine.',
                     aria='Colonne per 2, 4, 8, 16, 32 e 64 configurazioni a confronto con la linea dei 40 canali: solo 64 la supera.',
                     passi=['Con 1, 2, 3 e 4 bit si hanno 2, 4, 8 e 16 configurazioni: <b>troppo poche</b>, sono tutte sotto la linea dei 40 canali.',
                            'Con <b>5 bit</b> si arriva a 2<sup>5</sup> = 32: <b>non basta</b>. Otto canali resterebbero senza codice.',
                            'Con <b>6 bit</b> si arriva a 2<sup>6</sup> = 64, che è maggiore o uguale a 40: è la <b>prima potenza che basta</b>. Servono <b>6 bit</b>.',
                            'Avanzano 64 − 40 = <b>24 configurazioni</b> non usate, e va bene così: non esiste un «mezzo bit», quindi si arrotonda sempre <b>per eccesso</b>.']),
    'f-conta': dict(titolo='Contare in binario dall’11 al 16', vb='0 0 720 334', inizio='Partiamo da 1011, cioè 11. Ogni volta aggiungiamo 1, partendo dalla cifra più a destra.',
                    aria='I numeri binari da 1011 a 10000 uno sotto l’altro, con le cifre che cambiano evidenziate e i riporti.',
                    passi=['La cifra di destra è <b>1</b>: diventa <b>0</b> e <b>riporto 1</b> alla cifra a sinistra.',
                           'Anche la seconda cifra è <b>1</b>: diventa <b>0</b> e riporto ancora.',
                           'La terza cifra è <b>0</b>: diventa <b>1</b> e ho finito. La cifra a sinistra resta com’è: 1011 + 1 = <b>1100</b>, cioè 12.',
                           'Ora l’ultima cifra è <b>0</b>: basta farla diventare <b>1</b>. <b>1101</b>, cioè 13.',
                           'L’ultima cifra è 1: diventa 0 e riporto; la cifra a sinistra è 0 e diventa 1. <b>1110</b>, cioè 14.',
                           'L’ultima cifra è 0 e diventa 1: <b>1111</b>, cioè 15. Ora le cifre sono tutte 1.',
                           'Tutte le cifre sono 1: diventano <b>tutte 0</b> e, finite le cifre, si aggiunge un <b>1 davanti</b>. <b>10000</b>, cioè 16.']),
    'f-si': dict(titolo='3 GB in kB', vb='0 0 720 300', inizio='Mettiamo le unità in fila, come i gradini di una scala: ogni gradino vale 1.000. Premi «Avanti».',
                 aria='Scala con i gradini B, kB, MB, GB, TB: da 3 GB si scende di due gradini moltiplicando per 1.000 e si arriva a 3.000.000 kB.',
                 passi=['Si parte dai <b>GB</b> (in verde) e si arriva ai <b>kB</b> (in ambra): tra le due unità ci sono <b>2 gradini</b>.',
                        'Primo gradino, da GB a MB: si scende verso un’unità più piccola, quindi si <b>moltiplica</b> per 1.000. 3 GB = <b>3.000 MB</b>.',
                        'Secondo gradino, da MB a kB: di nuovo × 1.000. 3.000 MB = <b>3.000.000 kB</b>.',
                        'Verso l’unità più piccola si <b>moltiplica</b>, verso quella più grande si <b>divide</b>: ogni gradino è una moltiplicazione o una divisione per 1.000.']),
    'f-iec': dict(titolo='5 MiB in byte', vb='0 0 720 300', inizio='La stessa scala, con le unità binarie: ogni gradino vale 1.024. Premi «Avanti».',
                  aria='Scala con i gradini B, KiB, MiB, GiB, TiB: da 5 MiB si scende di due gradini moltiplicando per 1.024 e si arriva a 5.242.880 byte.',
                  passi=['Si parte dai <b>MiB</b> (in verde) e si arriva ai <b>byte</b> (in ambra): ci sono <b>2 gradini</b>.',
                         'Da MiB a KiB si scende: × 1.024. 5 MiB = <b>5.120 KiB</b>.',
                         'Da KiB a byte, ancora × 1.024. 5.120 KiB = <b>5.242.880 byte</b>.',
                         'Il metodo è lo stesso del sistema internazionale; cambia solo il numero: <b>1.024</b> invece di 1.000.']),
    'f-b2d': dict(titolo='100110 in decimale', vb='0 0 720 300', inizio='Convertiamo 100110 da binario a decimale. Premi «Avanti».',
                  aria='Il numero 100110 con sotto i pesi 32, 16, 8, 4, 2, 1; i pesi sotto gli zeri sono cancellati e la somma dei rimanenti fa 38.',
                  passi=['Sotto ogni cifra scrivo il suo <b>peso</b>: si parte da destra con <b>1</b> e si <b>raddoppia</b> verso sinistra: 1, 2, 4, 8, 16, 32.',
                         'I pesi sotto gli <b>0</b> non contano: li <b>cancello</b>. Restano quelli sotto gli 1.',
                         'Sommo i pesi rimasti: 32 + 4 + 2 = <b>38</b>.',
                         '100110<sub>2</sub> = <b>38</b><sub>10</sub>. Controllo: rifacendo il conto al contrario, 38 diventa di nuovo 100110.']),
    'f-d2b': dict(titolo='37 in binario', vb='0 0 720 290', inizio='Convertiamo 37 da decimale a binario: lo dividiamo per 2, poi dividiamo il quoziente, e così via.',
                  aria='Le divisioni per 2 di 37, una sotto l’altra, con i resti in un quadretto; i resti letti dal basso danno 100101.',
                  passi=passi_d2b(37)),
    'f-b2h': dict(titolo='101101 in esadecimale', vb='0 0 720 320', inizio='Convertiamo 101101 da binario a esadecimale con il trucchetto dei gruppi di 4 bit.',
                  aria='101101 diviso in gruppi da destra: 10 e 1101; il primo gruppo diventa 0010; i gruppi diventano 2 e D.',
                  passi=['Divido i bit in gruppi di <b>4</b>, partendo da <b>destra</b>: 1101 e, avanzati, 10.',
                         'Il gruppo di sinistra ha solo 2 bit: aggiungo <b>due zeri a sinistra</b> (in ambra). Il valore non cambia.',
                         'Ogni gruppo diventa una cifra esadecimale: 0010 = <b>2</b>; 1101 = 8 + 4 + 1 = 13 = <b>D</b>.',
                         '101101<sub>2</sub> = <b>2D</b><sub>16</sub>.']),
    'f-h2b': dict(titolo='3C in binario', vb='0 0 720 272', inizio='Convertiamo 3C da esadecimale a binario: ogni cifra diventa un gruppo di 4 bit.',
                  aria='Le cifre 3 e C diventano i gruppi 0011 e 1100; uniti e senza gli zeri iniziali danno 111100.',
                  passi=['La cifra <b>3</b> diventa <b>0011</b>: 3 = 2 + 1, con i pesi 8, 4, 2, 1.',
                         'La cifra <b>C</b> vale 12 e diventa <b>1100</b>: 12 = 8 + 4.',
                         'Scrivo i due gruppi uno dopo l’altro: 0011 1100.',
                         'Gli zeri a sinistra non servono e li tolgo: 3C<sub>16</sub> = <b>111100</b><sub>2</sub>.']),
    'f-nm': dict(titolo='213 dalla base 4 alla base 6', vb='0 0 720 304', inizio='Nessuna delle due basi è 10: passiamo dal decimale. Premi «Avanti».',
                 aria='A sinistra 213 in base 4 con i pesi 16, 4, 1 diventa 39; a destra le divisioni per 6 di 39 danno 103 in base 6.',
                 passi=['Prima tappa, dalla base 4 alla base 10. I pesi sono le potenze di 4, da destra: <b>1, 4, 16</b>.',
                        'Moltiplico ogni cifra per il suo peso e sommo: 2·16 + 1·4 + 3·1 = 32 + 4 + 3 = <b>39</b>.',
                        'Seconda tappa, dalla base 10 alla base 6: divido per <b>6</b>. 39 : 6 = 6, resto <b>3</b>.',
                        '6 : 6 = 1, resto <b>0</b>.',
                        '1 : 6 = 0, resto <b>1</b>. Il quoziente è 0: mi fermo.',
                        'Leggo i resti dal basso: 213<sub>4</sub> = <b>103</b><sub>6</sub>. Controllo: 1·36 + 0·6 + 3 = 39 ✓']),
    'f-somma': dict(titolo='1011 + 110', vb='0 0 720 246', inizio='Sommiamo 1011 (11) e 110 (6) in colonna, partendo da destra.',
                    aria='Somma in colonna di 1011 e 110 con i riporti: il risultato è 10001.',
                    passi=['Prima colonna: 1 + 0 = <b>1</b>.',
                           'Seconda colonna: 1 + 1 = 2, che in binario è <b>10</b>: scrivo <b>0</b> e <b>riporto 1</b>.',
                           'Terza colonna: 0 + 1 + 1 di riporto = 10: scrivo <b>0</b> e riporto 1.',
                           'Quarta colonna: 1 + 1 di riporto = 10: scrivo <b>0</b> e riporto 1.',
                           'Il riporto finale si scrive davanti: <b>10001</b>, cioè 17. Controllo: 11 + 6 = 17 ✓']),
    'f-sottr': dict(titolo='1000 − 11', vb='0 0 720 246', inizio='Sottraiamo 11 (3) da 1000 (8) in colonna, partendo da destra.',
                    aria='Sottrazione in colonna di 1000 meno 11 con il prestito: il risultato è 0101.',
                    passi=['Prima colonna: 0 − 1 <b>non si può</b>. Serve un <b>prestito</b>.',
                           'Il prestito si prende dal primo <b>1</b> a sinistra, che diventa <b>0</b>; gli 0 in mezzo diventano <b>1</b>, e la prima colonna riceve <b>10</b>, cioè 2.',
                           'Ora la prima colonna: 10 − 1 = <b>1</b>.',
                           'Seconda colonna: 1 − 1 = <b>0</b>.',
                           'Terza colonna: 1 − 0 = <b>1</b>.',
                           'Quarta colonna: 0 − 0 = 0. Risultato <b>0101</b>, cioè 5. Controllo: 101 + 11 = 1000 (5 + 3 = 8) ✓']),
}
def AN(id):
    a = ANIM[id]
    return anim(id, a['titolo'], a['inizio'], a['vb'], a['aria'], a['passi'])

# controlli sui numeri scritti a mano nel testo
assert [b2(25), b2(88), b2(150)] == ['11001', '1011000', '10010110'] and conv(int('10101', 8), 3) == '12201010'
assert b2(37) == '100101' and int('100110', 2) == 38 and conv(int('101101', 2), 16) == '2D' and b2(int('3C', 16)) == '111100'
assert conv(int('213', 4), 6) == '103' and b2(11 + 6) == '10001' and b2(13 - 5) == '1000' and b2(8 - 3) == '101'
assert 2 ** 20 - 10 ** 6 == 48576 and round(10 ** 12 / 2 ** 30) == 931

MULTIPLI = [('kilo', 'k', 'kibi', 'Ki', 'un breve messaggio; una pagina di solo testo occupa qualche kB'),
            ('mega', 'M', 'mebi', 'Mi', 'una foto dello smartphone (qualche MB), una canzone in mp3 (circa 4 MB)'),
            ('giga', 'G', 'gibi', 'Gi', 'un film in alta definizione (qualche GB), la memoria di un telefono (128 GB)'),
            ('tera', 'T', 'tebi', 'Ti', 'il disco di un computer (1 o 2 TB)'),
            ('peta', 'P', 'pebi', 'Pi', 'un grande data center: decine o centinaia di PB'),
            ('exa', 'E', 'exbi', 'Ei', 'tutto il traffico di internet nel mondo in un giorno: circa una decina di EB'),
            ('zetta', 'Z', 'zebi', 'Zi', 'tutti i dati creati nel mondo in un anno: più di 100 ZB (stime recenti)'),
            ('yotta', 'Y', 'yobi', 'Yi', 'nessun archivio arriva ancora a tanto: 1 YB è mille ZB')]
def tabella_multipli():
    """Sistema internazionale e binario affiancati, fino allo yottabyte, con quanto è più grande l'unità binaria e un esempio."""
    def val(b, e, esatto):
        return f'{b}{"".join("⁰¹²³⁴⁵⁶⁷⁸⁹"[int(c)] for c in str(e))}' + (f' = {n2(b ** e)}' if esatto else '')
    r = [['Sistema internazionale', 'Sistema binario', 'Il binario è più grande del', 'Un esempio di questa grandezza'],
         ['<b>byte</b> (B)<br>1 byte', '<b>byte</b> (B)<br>1 byte', '—', 'una lettera o una cifra di un testo']]
    for k, (si, s1, bi, b1, esempio) in enumerate(MULTIPLI, 1):
        diff = f'{(1.024 ** k - 1) * 100:.1f}'.replace('.', ',') + '%'
        r.append([f'<b>{si}byte</b> ({s1}B)<br>{val(10, 3 * k, k <= 2)}', f'<b>{bi}byte</b> ({b1}B)<br>{val(2, 10 * k, k <= 3)}', diff, esempio])
    return r
assert f'{(1.024 ** 2 - 1) * 100:.1f}' == '4.9' and f'{(1.024 ** 8 - 1) * 100:.1f}' == '20.9' and round(10 ** 12 / 2 ** 30) == 931 and round(128e9 / 2 ** 30) == 119

def tabella_basi():
    r = [['Decimale', 'Binario', 'Esadecimale']]
    for n in range(17): r.append([str(n), b2(n).zfill(4) if n < 16 else '10000', conv(n, 16) if n < 16 else '10'])
    return r

# ------------------------------------------------------------------ schema: segnale analogico e campioni
def schema_segnale():
    def v(t): return .5 + .30 * math.sin(2 * math.pi * 1.1 * t) + .11 * math.sin(2 * math.pi * 3.3 * t + 1)
    X0, X1, Y0, Y1 = 40, 300, 30, 160
    def px(t): return X0 + t * (X1 - X0)
    def py(u): return Y1 - u * (Y1 - Y0)
    curva = ' '.join(f'{"M" if i == 0 else "L"}{px(i / 120):.1f} {py(v(i / 120)):.1f}' for i in range(121))
    N, L = 16, 8
    camp = [i / (N - 1) for i in range(N)]
    q = [round(v(t) * (L - 1)) / (L - 1) for t in camp]
    gradini = ''
    for i in range(N):
        a = px(camp[i] - (0.5 / (N - 1) if i else 0)); b = px(camp[i] + (0.5 / (N - 1) if i < N - 1 else 0))
        gradini += f'{"M" if i == 0 else "L"}{a:.1f} {py(q[i]):.1f} L{b:.1f} {py(q[i]):.1f} '
    punti = ''.join(f'<circle cx="{px(t):.1f}" cy="{py(u):.1f}" r="3" fill="var(--brand-600)"/>' for t, u in zip(camp, q))
    def pannello(dx, titolo, contenuto, nota):
        return (f'<g transform="translate({dx} 0)"><text x="170" y="18" text-anchor="middle" class="t-b">{titolo}</text>'
                f'<path d="M{X0} {Y1} H{X1 + 6} M{X0} {Y1} V{Y0 - 6}" class="lin"/>'
                f'<text x="{X1 + 6}" y="{Y1 + 16}" text-anchor="end" class="t-m">tempo</text>{contenuto}'
                f'<text x="170" y="196" text-anchor="middle" class="t-m">{nota}</text></g>')
    ana = f'<path d="{curva}" fill="none" stroke="var(--brand-600)" stroke-width="2.4" stroke-linecap="round"/>'
    dig = f'<path d="{curva}" fill="none" stroke="var(--border-strong)" stroke-width="1.4" stroke-dasharray="4 4"/><path d="{gradini}" fill="none" stroke="var(--brand-600)" stroke-width="2"/>{punti}'
    return ('      <svg viewBox="0 0 700 210" role="img" aria-label="A sinistra un segnale analogico: una curva continua. A destra lo stesso segnale digitale: pochi punti misurati a intervalli regolari e arrotondati a otto livelli.">\n        '
            + pannello(0, 'Analogico', ana, 'continuo: infiniti valori in ogni istante')
            + pannello(360, 'Digitale', dig, '16 campioni, 8 livelli: solo valori ammessi')
            + '\n      </svg>')

c = ''
# ================================================================== 7.1
c += h2('2.1', 'p1', 'Segnali analogici e digitali')
c += dom('Un orologio con le lancette e uno con i numeri: quale dei due «si accorge» del passare dei secondi in modo continuo?')
c += P('Un <b>segnale</b> è una grandezza fisica che varia nel tempo e che porta con sé un’<b>informazione</b>: la pressione dell’aria in un suono, la tensione in un filo, la luce in una fibra ottica.')
c += P('Un segnale può avere due nature molto diverse: <b>analogica</b> o <b>digitale</b>.')
c += tab([['', 'Segnale <b>analogico</b>', 'Segnale <b>digitale</b>'],
          ['<b>Valori</b>', '<b>continui</b>: può assumere qualsiasi valore in un intervallo, infiniti valori', '<b>discreti</b>: può assumere solo un numero finito di valori ammessi (per esempio 8 livelli)'],
          ['<b>Nel tempo</b>', 'è definito in ogni istante', 'è definito solo a istanti precisi (i campioni)'],
          ['<b>Esempi</b>', 'voce, termometro a mercurio, lancette, disco in vinile, vecchia cassetta', 'orologio con i numeri, CD, file mp3, foto sul telefono, tutto ciò che sta in un computer'],
          ['<b>Pregi</b>', 'molto fedele alla realtà', 'si copia senza perdere qualità e si ripulisce dal disturbo (rumore)'],
          ['<b>Difetti</b>', 'ogni copia lo peggiora, il disturbo si accumula', 'è sempre un’approssimazione di quello vero']])
c += schema('Lo stesso segnale, analogico e digitale', schema_segnale(), 's-segnale')
c += h3('Perché il computer è digitale')
c += P('Digitale non vuol dire per forza «fatto di 0 e 1». Un segnale digitale può avere 3, 8 o 256 valori diversi: basta che siano un numero <b>finito</b>. Il <b>binario</b> è il caso particolare di digitale con <b>due soli valori</b>, 0 e 1, ed è quello che usano i computer.')
c += P('Il motivo è semplice: un circuito elettronico distingue facilmente <b>due soli stati</b>: tensione alta e tensione bassa, acceso e spento, interruttore chiuso e aperto. Chiamiamo i due stati <b>0</b> e <b>1</b>: una cifra che può valere 0 o 1 si chiama <b>bit</b> (<i>binary digit</i>).')
c += P('Distinguere due stati è così facile che il disturbo non li confonde: per questo i computer elaborano, copiano e trasmettono dati senza errori.')
c += h3('Dall’analogico al digitale: tre passaggi')
c += passi('<b>Campionamento</b>: si misura il segnale a intervalli di tempo regolari. Ogni misura è un <b>campione</b>.',
           '<b>Quantizzazione</b>: ogni misura si arrotonda al più vicino tra i livelli ammessi (per esempio 8 livelli).',
           '<b>Codifica</b>: ogni livello si scrive in binario. Con 8 livelli bastano 3 bit per campione.')
c += P('Più campioni e più livelli danno un segnale digitale più <b>fedele</b>, ma servono più bit: la qualità si paga in memoria.')
c += P('Provate voi.')
c += widget('campiona')
c += es('<b>Il CD.</b> Un CD audio misura il suono <b>44.100 volte al secondo</b> (campionamento) e dà a ogni misura uno tra <b>65.536 livelli</b> (16 bit). Un secondo di musica stereo (due canali) è quindi fatto di 44.100 × 16 × 2 = <b>1.411.200 bit</b>.')

# ================================================================== 7.2
c += h2('2.2', 'p2', 'I sistemi di numerazione')
c += P('Un <b>sistema di numerazione</b> è un insieme di <b>simboli</b> e di <b>regole</b> per scrivere i numeri. Ne sono stati inventati moltissimi, ma si dividono in due grandi famiglie.')
c += h3('Sistemi additivi')
c += P('Nei sistemi <b>additivi</b> ogni simbolo ha un <b>valore fisso</b>, che non dipende dal posto in cui si trova. Il numero si ottiene <b>sommando</b> i valori dei simboli. L’esempio più noto è quello dei <b>numeri romani</b>: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.')
c += calc('XXVII = X + X + V + I + I = 10 + 10 + 5 + 1 + 1 = 27', 'MDCLXVI = 1000 + 500 + 100 + 50 + 10 + 5 + 1 = 1666')
c += P('Per i numeri come 4 o 9 i romani usano anche una <b>regola sottrattiva</b> (IV = 5 − 1, IX = 10 − 1), ma il valore di ogni simbolo resta sempre lo stesso.')
c += P('I sistemi additivi hanno però dei limiti: servono sempre più simboli per i numeri grandi, <b>non c’è lo zero</b> e fare i calcoli in colonna è quasi impossibile (provate a moltiplicare XXIV per XVII).')
c += h3('Sistemi posizionali')
c += P('Nei sistemi <b>posizionali</b> il valore di una cifra dipende dalla <b>posizione</b> che occupa. Il numero di simboli diversi, le <b>cifre</b>, si chiama <b>base</b>. In <b>212</b> la cifra 2 compare due volte, ma la prima vale 200 e la seconda vale 2.')
c += P('Così si può scrivere qualsiasi numero con pochissimi simboli e i calcoli in colonna funzionano. È il sistema che usiamo noi, e serve lo <b>zero</b> come segnaposto: senza, 205 e 25 si confonderebbero.')
c += tab([['', '<b>Additivo</b>', '<b>Posizionale</b>'],
          ['<b>Valore di un simbolo</b>', 'fisso, sempre lo stesso', 'dipende dalla posizione'],
          ['<b>Come si legge</b>', 'si sommano i simboli', 'si moltiplica ogni cifra per il peso della sua posizione e si somma'],
          ['<b>Zero</b>', 'non serve', 'indispensabile (segnaposto)'],
          ['<b>Calcoli in colonna</b>', 'difficili', 'facili'],
          ['<b>Esempi</b>', 'numeri romani, egizi', 'decimale, binario, esadecimale']])
c += h3('Come si legge un numero posizionale')
c += P('In base <b>b</b> ogni posizione ha un <b>peso</b>: la prima a destra pesa b<sup>0</sup> = 1, poi b<sup>1</sup>, b<sup>2</sup>, b<sup>3</sup>… Il valore del numero è la <b>somma di ogni cifra per il suo peso</b>.')
c += calc('347 (base 10) = 3·10² + 4·10¹ + 7·10⁰ = 300 + 40 + 7', '1011 (base 2)  = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = 11')
c += dom('Nel numero 1010 in base 2 ci sono due cifre 1: valgono lo stesso? Quanto vale ciascuna?')
c += err('«Il numero 15 vale 1 + 5 = 6, come i numeri romani: si sommano i simboli.»',
         'Quella è la regola dei sistemi <b>additivi</b>. In un sistema <b>posizionale</b> ogni cifra si moltiplica per il peso della sua posizione: nel 15 la cifra 1 sta tra le decine e vale 10, quindi 15 = 1·10 + 5.')

# ================================================================== 7.3
c += h2('2.3', 'p3', 'Decimale, binario ed esadecimale')
c += P('Tre sistemi posizionali sono particolarmente importanti. Tutti funzionano nello stesso modo; cambiano la <b>base</b> e le <b>cifre</b>.')
c += tab([['Sistema', 'Base', 'Cifre', 'Pesi (da destra)', 'Dove si usa'],
          ['<b>Decimale</b>', '10', '0 1 2 3 4 5 6 7 8 9', '1, 10, 100, 1000…', 'la vita di tutti i giorni (forse perché abbiamo 10 dita)'],
          ['<b>Binario</b>', '2', '0 1', '1, 2, 4, 8, 16, 32, 64, 128…', 'dentro il computer: due stati, due cifre'],
          ['<b>Esadecimale</b>', '16', '0–9 e A B C D E F (A = 10 … F = 15)', '1, 16, 256, 4096…', 'colori (#FF8800), indirizzi MAC, memoria: è una scrittura corta del binario']])
c += P('Per non confondersi si scrive la base come <b>pedice</b>: 1010<sub>2</sub> è un numero binario, 1010<sub>10</sub> è mille e dieci, 2A<sub>16</sub> è esadecimale. Nei programmi si usano i prefissi <code>0b</code> per il binario (<code>0b1010</code>) e <code>0x</code> per l’esadecimale (<code>0x2A</code>).')
c += h3('I primi numeri nelle tre basi')
c += tab(tabella_basi())
c += P('Osservate le righe: ogni numero da 0 a 15 si scrive con <b>4 bit</b> e con <b>una sola cifra esadecimale</b>. Per questo, come vedremo, passare tra binario ed esadecimale è molto facile.')
c += h3('Gli interruttori')
c += P('Un numero binario di 8 bit (un <b>byte</b>) è una fila di otto interruttori, ognuno con il suo peso: <b>128, 64, 32, 16, 8, 4, 2, 1</b>. Il numero è la somma dei pesi degli interruttori accesi.')
c += P('Accendeteli e guardate il valore.')
c += widget('bit')

# ================================================================== 7.4
c += h2('2.4', 'p4', 'Bit, byte e configurazioni')
c += P('Un <b>bit</b> è una cifra binaria; un <b>byte</b> sono <b>8 bit</b>. Con i bit si rappresenta qualsiasi informazione: ogni diversa sequenza di bit, cioè ogni <b>configurazione</b>, può indicare un numero, una lettera, un colore, un personaggio di un videogioco.')
c += h3('Dati n bit, quante configurazioni?')
c += P('Con <b>1</b> bit ci sono 2 configurazioni (0, 1). Ogni bit in più <b>raddoppia</b> le possibilità, perché si può aggiungere uno 0 o un 1 a tutte le configurazioni di prima: con 2 bit ci sono 00, 01, 10, 11. Quindi con <b>n bit</b> le configurazioni sono <b>2<sup>n</sup></b>.')
c += AN('f-config')
c += tab([['Bit', '1', '2', '3', '4', '5', '6', '7', '8', '10', '16'], ['Configurazioni'] + [n2(2 ** k) for k in (1, 2, 3, 4, 5, 6, 7, 8, 10, 16)]])
c += P('<b>Come si fa</b>:')
c += passi('Leggi quanti bit ci sono: è <b>n</b>.', 'Calcola 2 elevato a n, moltiplicando 2 per se stesso n volte (o partendo dalla tabella: 2<sup>10</sup> = 1.024 e raddoppiando).', 'Scrivi la risposta: «con n bit si possono rappresentare 2<sup>n</sup> configurazioni».')
c += es('<b>Con 5 bit?</b> 2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = <b>32</b> configurazioni. <b>Con 10 bit?</b> 2<sup>10</sup> = <b>1.024</b>. <b>Con 11 bit?</b> il doppio di 1.024, cioè <b>2.048</b>.')
c += h3('Date m configurazioni, quanti bit?')
c += P('È il problema inverso: devo identificare m cose diverse e voglio sapere <b>quanti bit servono almeno</b>. Si cerca il più piccolo n tale che <b>2<sup>n</sup> ≥ m</b>.')
c += passi('Scrivi le potenze di 2 in ordine: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1.024…', 'Trova la <b>prima potenza maggiore o uguale a m</b>.', 'L’esponente di quella potenza è il numero di bit. Non si può usare una frazione di bit: si arrotonda sempre <b>per eccesso</b>.')
c += AN('f-bitper')
c += err('«Per 40 canali servono 40 / 2 = 20 bit», oppure «servono 5 bit perché 2<sup>5</sup> = 32 è quasi 40».',
         'Non si divide per 2. Si cerca la <b>prima potenza di 2 che arriva almeno a m</b>, e <b>32 non basta</b>: con 5 bit si distinguono solo 32 canali, il canale 33 non ha un codice. Servono 6 bit.')
c += h3('Contare in binario')
c += P('Contare in binario funziona come un <b>contachilometri</b> che ha solo le cifre 0 e 1: quando una cifra arriva a 1 e deve aumentare, torna a 0 e <b>«riporta» 1 alla cifra a sinistra</b>. Per scrivere il numero successivo si aggiunge 1:')
c += passi('Parti dalla cifra più a destra.', 'Se è <b>0</b>, diventa <b>1</b> e hai finito.', 'Se è <b>1</b>, diventa <b>0</b> e passi alla cifra a sinistra, e ripeti. Se finiscono le cifre, aggiungi un 1 davanti.')
c += P('Per scrivere i prossimi 15 numeri, si applica la regola 15 volte, ogni volta partendo dal numero appena scritto.')
c += AN('f-conta')
c += P('Un modo di <b>controllare</b>: le cifre di destra si alternano 0, 1, 0, 1; la penultima a coppie 0, 0, 1, 1; la terzultima a quattro a quattro…')
c += h3('I multipli del byte')
c += P('Come per i metri e i grammi, anche per i byte si usano i <b>multipli</b>. Ce ne sono di due tipi. Il <b>sistema internazionale</b> (SI) usa i prefissi di sempre: <b>chilo = 1.000</b>, mega = un milione…, e ogni gradino è <b>1.000 volte</b> il precedente. Il <b>sistema binario</b> (IEC) segue invece le potenze di 2, come il computer: ogni gradino è <b>1.024 volte</b> il precedente (2<sup>10</sup> = 1.024, quasi mille), e i nomi hanno una <b>«i»</b> in più: <b>kibi</b>, <b>mebi</b>, <b>gibi</b>…')
c += tab(tabella_multipli())
c += h3('MB o MiB? Che differenza c’è')
c += P('I due sistemi usano numeri vicini, ma non uguali. <b>1 MB = 1.000.000 byte</b>, mentre <b>1 MiB = 1.048.576 byte</b>: il mebibyte è più grande di 48.576 byte, cioè di circa il <b>4,9%</b>.')
c += P('A ogni gradino la differenza <b>cresce</b>, perché il 1.024 si moltiplica per se stesso: per i kilo è il 2,4%, per i giga il 7,4%, per i tera già il 10%, e per gli yotta arriva quasi al 21% (l’ultima colonna della tabella).')
c += h3('Perché ci interessa')
c += P('Chi vende dischi, chiavette e telefoni usa il <b>sistema internazionale</b>: un disco «da 1 TB» contiene 10<sup>12</sup> = 1.000.000.000.000 byte. Windows, invece, conta in <b>potenze di 2</b>, anche se scrive «GB» al posto di «GiB»: divide per 1.024 a ogni gradino e mostra circa <b>931 GB</b>.')
c += P('Nessuno ci ha rubato spazio: è la stessa quantità di byte, misurata con due unità diverse. Allo stesso modo un telefono «da 128 GB» ne mostra circa 119, più lo spazio occupato dal sistema operativo. (I Mac, dal 2009, contano in base 10 e mostrano 1.000 GB.)')
c += err('«1 MB e 1 MiB sono la stessa cosa: sono tutti megabyte.»',
         'Sono diversi: <b>1 MB = 1.000.000 byte</b>, <b>1 MiB = 1.048.576 byte</b>. Per questo un disco da «1 TB» (10<sup>12</sup> byte) per il computer ne contiene circa <b>931 GiB</b>: non manca spazio, sono unità diverse.')
c += h3('Come si fa un’equivalenza')
c += passi('Metti i multipli in fila: B, kB, MB, GB, TB… Ogni gradino vale ×1.000 nel sistema internazionale, ×1.024 in quello binario.',
           'Conta quanti <b>gradini</b> ci sono tra l’unità di partenza e quella di arrivo.',
           'Se vai <b>verso l’unità più piccola</b> (per esempio da MB a B) <b>moltiplichi</b> a ogni gradino; se vai verso la più grande <b>dividi</b>.',
           'Se ti chiedono «quanti file», dividi la capacità totale per la dimensione di un file, <b>dopo averle portate alla stessa unità</b>.')
c += AN('f-si')
c += es('<b>Quanti brani da 5 MB in 1 GB?</b> Prima si portano le due misure alla stessa unità: 1 GB = 1.000 MB. Poi si divide: 1.000 : 5 = <b>200 brani</b>.')
c += P('Nel sistema binario il metodo è lo stesso, ma a ogni gradino si moltiplica o si divide per <b>1.024</b> invece che per 1.000.')
c += AN('f-iec')
c += es('<b>2 MiB in GiB?</b> Un gradino verso l’unità più grande, quindi si divide: 2 : 1.024 = <b>0,00195 GiB</b> (circa).')

# ================================================================== 7.5
c += h2('2.5', 'p5', 'Le conversioni, passo passo')
c += h3('Da binario a decimale')
c += P('Si usa la regola della lettura posizionale: <b>somma dei pesi delle cifre uguali a 1</b>.')
c += passi('Scrivi il numero e, sotto ogni cifra, il suo peso, partendo da destra con 1 e <b>raddoppiando</b> verso sinistra: 1, 2, 4, 8, 16, 32…',
           'Cancella i pesi sotto le cifre <b>0</b>.', 'Somma i pesi rimasti.')
c += AN('f-b2d')
c += h3('Da decimale a binario')
c += P('Si divide ripetutamente per 2 e si scrivono i <b>resti</b>.')
c += passi('Dividi il numero per 2: scrivi il <b>quoziente</b> e il <b>resto</b> (che sarà 0 o 1).', 'Dividi il quoziente per 2, e così via, finché il quoziente diventa <b>0</b>.',
           'Leggi i resti <b>dal basso verso l’alto</b>: l’ultimo resto è la cifra più a sinistra.')
c += AN('f-d2b')
c += P('Ora provate con un numero a vostra scelta, un passo alla volta.')
c += widget('divisioni')
c += P('<b>Controllo</b>: riconvertite il risultato in decimale con il metodo di prima. 100101 = 32 + 4 + 1 = 37. ✓')
c += err('«Leggo i resti dall’alto: 37 diventa 101001.»',
         'I resti si leggono <b>dal basso verso l’alto</b>: il primo resto è la cifra di <b>peso 1</b> (la più a destra), l’ultimo è la più a sinistra. Controllo: 101001 vale 41, non 37.')
c += h3('Da binario a esadecimale (con il trucchetto)')
c += P('Una cifra esadecimale equivale a 4 bit: basta raggruppare i bit a quattro a quattro.')
c += passi('Dividi il numero binario in gruppi di <b>4 bit partendo da destra</b>.', 'Se il gruppo più a sinistra ha meno di 4 bit, <b>aggiungi zeri a sinistra</b>.',
           'Sostituisci ogni gruppo con la sua cifra esadecimale, usando la tabella della 2.3.')
c += AN('f-b2h')
c += err('«101101 si divide da sinistra: 1011 01 → B1.»', 'I gruppi si formano partendo da <b>destra</b>, dove stanno le cifre di peso più piccolo. Dividendo da sinistra il valore cambia: B1<sub>16</sub> = 177, mentre 101101<sub>2</sub> = 45.')
c += h3('Da esadecimale a binario (con il trucchetto)')
c += passi('Sostituisci ogni cifra esadecimale con il suo gruppo di <b>4 bit</b> (anche gli zeri a sinistra del gruppo).', 'Scrivi i gruppi uno dopo l’altro.', 'Togli gli zeri inutili a sinistra del numero intero.')
c += AN('f-h2b')
c += h3('Da una base n a una base m')
c += P('Quando nessuna delle due basi è 10 si passa dalla <b>base 10</b> come tappa intermedia: prima si converte il numero a decimale (con i pesi della base di partenza), poi dal decimale alla base di arrivo (con le divisioni per m).')
c += passi('<b>Da base n a base 10</b>: scrivi i pesi come potenze di n (1, n, n², …), moltiplica ogni cifra per il suo peso e somma.', '<b>Da base 10 a base m</b>: dividi per m, annota i resti e leggili dal basso verso l’alto. Se un resto supera 9 (in base 16) usa le lettere.')
c += AN('f-nm')

# ================================================================== 7.6
c += h2('2.6', 'p6', 'Somma e sottrazione binaria')
c += h3('La somma')
c += P('Si fa in colonna, come in decimale, partendo da destra. Cambiano solo le regole, perché c’è soltanto 0 e 1:')
c += tab([['Somma di due cifre', 'Risultato', 'Si scrive', 'Riporto'], ['0 + 0', '0', '0', '—'], ['0 + 1 oppure 1 + 0', '1', '1', '—'], ['1 + 1', '2, cioè 10 in binario', '0', '1'], ['1 + 1 + 1 (con riporto)', '3, cioè 11', '1', '1']])
c += passi('Incolonna i numeri a destra (aggiungi zeri a sinistra a quello più corto, se ti aiuta).', 'Somma ogni colonna da destra, aggiungendo l’eventuale <b>riporto</b> della colonna prima.', 'Scrivi la cifra e riporta 1 a sinistra se la colonna fa 2 o 3. Se alla fine resta un riporto, scrivilo davanti.',
           '<b>Controlla</b> convertendo in decimale.')
c += AN('f-somma')
c += h3('La sottrazione')
c += P('Anche la sottrazione si fa in colonna da destra. Le regole sono: <b>0 − 0 = 0</b>, <b>1 − 0 = 1</b>, <b>1 − 1 = 0</b>.')
c += P('Il caso difficile è <b>0 − 1</b>: non si può, quindi si chiede un <b>prestito</b> alla cifra a sinistra. Il prestito di un 1 vale <b>2</b> nella colonna dopo (10 in binario), quindi 0 − 1 diventa 10 − 1 = <b>1</b>.')
c += passi('Incolonna i numeri a destra, il più grande sopra.', 'Sottrai ogni colonna da destra. Se serve 0 − 1, <b>prendi in prestito</b> dalla prima cifra 1 a sinistra: quella diventa 0, e le cifre 0 in mezzo diventano 1.', 'Controlla <b>sommando</b> il risultato al sottraendo: devi ritrovare il numero di partenza.')
c += AN('f-sottr')
c += err('«100 − 1: nella colonna di destra 0 − 1 fa 1, il resto lo ricopio: 101.»', '<b>0 − 1 fa 1 solo con un prestito</b>, e il prestito va tolto alla colonna a sinistra. Qui 100 − 1 è 4 − 1 = 3, cioè <b>011</b>, e non 5 (101). Si controlla sempre in decimale.')

# ------------------------------------------------------------------ riepilogo del capitolo
c += ricorda(['Un segnale <b>analogico</b> è continuo; uno <b>digitale</b> assume solo valori discreti. Il <b>binario</b> è il digitale con due soli valori, 0 e 1 (<b>bit</b>): è quello del computer.',
              'Si passa dall’analogico al digitale con <b>campionamento</b>, <b>quantizzazione</b> e <b>codifica</b>; più campioni e più livelli = più fedeltà e più bit.',
              '<b>Additivo</b>: ogni simbolo ha un valore fisso e il numero è la somma (numeri romani). <b>Posizionale</b>: il valore della cifra dipende dalla posizione; il numero di cifre diverse è la <b>base</b>.',
              '<b>Decimale</b>: base 10, cifre 0–9. <b>Binario</b>: base 2, cifre 0 e 1, pesi 1, 2, 4, 8, 16… <b>Esadecimale</b>: base 16, cifre 0–9 e A–F; una cifra esadecimale = 4 bit.',
              'Con <b>n bit</b> si hanno <b>2<sup>n</sup></b> configurazioni; per <b>m configurazioni</b> servono i bit n minimi con 2<sup>n</sup> ≥ m.',
              'SI (kB, MB, GB…): ogni gradino è ×1.000. Binario (KiB, MiB, GiB…): ogni gradino è ×1.024.',
              '<b>2 → 10</b>: somma dei pesi sotto gli 1. <b>10 → 2</b>: divisioni per 2, resti letti dal basso. <b>2 ↔ 16</b>: gruppi di 4 bit da destra. <b>n → m</b>: si passa dal decimale.',
              'Somma: 1 + 1 = 10 (scrivo 0, riporto 1). Sottrazione: 0 − 1 chiede un <b>prestito</b>. Si controlla sempre <b>in decimale</b>.'])

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    scrivi(os.path.join(OUT, 'capitolo-02.html'), pagina(2, 'Il linguaggio del computer', c, 'capitolo-02.js'))
