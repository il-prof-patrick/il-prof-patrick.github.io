# Capitolo 1 · La comunicazione digitale — scelte della pagina (il testo è quello del Word).
# Uso: python3 capitolo_01.py <cartella del sito>
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Reti e Internet')

ANIM = {
    'F1.2.2': dict(id='f-tubi', titolo='Banda e latenza: due tubi diversi',
                   inizio='Un rubinetto e due tubi: il tubo A è largo ma lunghissimo, il tubo B è stretto ma cortissimo. Sotto ogni bicchiere, un cronometro.',
                   vb='0 0 720 310', aria='Nel tubo corto la prima goccia arriva subito ma il bicchiere si riempie lentamente; nel tubo largo e lungo la prima goccia arriva tardi ma poi il bicchiere si riempie in fretta'),
    'F1.2.3': dict(id='f-jitter', titolo='Il jitter: una latenza irregolare',
                   inizio='A sinistra chi parla in videochiamata invia i fotogrammi numerati da 1 a 8; a destra lo schermo di chi riceve; sotto, la linea del tempo.',
                   vb='0 0 720 300', aria='Con una rete stabile i pacchetti arrivano a intervalli regolari; con il jitter arrivano ammucchiati e con buchi; un piccolo buffer li rimette in fila'),
    'F1.3.3': dict(id='f-intreccio', titolo='Perché i fili sono intrecciati',
                   inizio='Due fili di una coppia, rosso e blu, portano lo stesso segnale con versi opposti; a destra il ricevitore fa la differenza tra i due.',
                   vb='0 0 720 290', aria='Il disturbo colpisce allo stesso modo i due fili intrecciati e nella differenza si annulla; con fili paralleli invece ne resta una parte'),
    'F1.3.7': dict(id='f-fibra', titolo='La luce intrappolata nella fibra',
                   inizio='Una fibra leggermente curva vista di lato: il nucleo chiaro, il mantello intorno, a sinistra un laser.',
                   vb='0 0 720 315', aria='Un impulso di luce rimbalza sulle pareti del nucleo e arriva in fondo; in una fibra piegata a gomito esce e si perde'),
    'F4.3.3': dict(id='f-ftth', titolo='FTTC e FTTH: dove finisce la fibra',
                   inizio='La centrale dell’operatore, l’armadio in strada collegato in fibra e due case, una vicina e una lontana dall’armadio.',
                   vb='0 0 720 305', aria='In FTTC l’ultimo tratto in rame rallenta la casa lontana più di quella vicina; in FTTH la fibra arriva in entrambe le case con la stessa velocità'),
    'F4.3.5': dict(id='f-satelliti', titolo='Geostazionari e orbita bassa',
                   inizio='La Terra con una casa e una stazione a terra; lontanissimo un satellite geostazionario, vicino alla Terra i satelliti in orbita bassa. Il cronometro segna 0 ms.',
                   vb='0 0 720 320', aria='La richiesta via satellite geostazionario impiega circa 600 millisecondi, via orbita bassa circa 30; i satelliti in orbita bassa passano e ne servono migliaia'),
    'F1.2.1': dict(id='f-gara', titolo='Quanto conta la banda: la gara dei download',
                   inizio='Quattro corsie, una per tecnologia, scaricano lo stesso film da 4 GB: le barre sono vuote e i cronometri a zero.',
                   vb='0 0 720 290', aria='Lo stesso film da 4 GB si scarica in 32 secondi con la fibra FTTH, in circa 11 minuti con il 4G, in circa 27 minuti con l’ADSL e in quasi 7 giorni con il modem a 56k'),
    'F1.4.1': dict(id='f-modi', titolo='Simplex, half-duplex e full-duplex',
                   inizio='Tre strade tra le città A e B: un senso unico, una strada stretta con il semaforo, una strada a doppia corsia.',
                   vb='0 0 720 330', aria='Nel simplex le auto vanno solo da A a B; nell’half-duplex passano a turno e se partono insieme si scontrano; nel full-duplex viaggiano nei due sensi contemporaneamente'),
    'F1.5.2': dict(id='f-commutazione', titolo='Circuito o pacchetti?',
                   inizio='La stessa rete di cinque nodi, due volte: sopra tra i telefoni di Anna e Bruno, sotto tra i computer di Carla e Dario.',
                   vb='0 0 720 352', aria='Con la commutazione di circuito il percorso resta riservato anche nel silenzio; con la commutazione di pacchetto i pacchetti prendono strade diverse, aggirano i guasti e vengono rimessi in ordine all’arrivo'),
}

V = lambda id_, vb: f'      <svg viewBox="{vb}" role="img" aria-label="{{}}"></svg>'
SCHEMI = {
    'F1.1.1': dict(id='s-comunicazione', titolo='Gli elementi della comunicazione',
                   svg='      <svg viewBox="0 0 720 270" role="img" aria-label="Lo schema della comunicazione: il mittente codifica il messaggio, il canale lo trasporta disturbato dal rumore, il destinatario lo decodifica; sotto, lo stesso schema per un messaggio WhatsApp"></svg>'),
    'F1.3.1': dict(id='s-mezzi', titolo='Le due famiglie di mezzi trasmissivi',
                   svg='      <svg viewBox="0 0 720 300" role="img" aria-label="Mezzi guidati: doppino, coassiale e fibra ottica; mezzi non guidati: Wi-Fi, Bluetooth, rete cellulare e satellite, ognuno con il suo uso tipico"></svg>'),
    'F1.3.11': dict(id='s-spettro', titolo='Lo spettro elettromagnetico',
                    svg='      <svg viewBox="0 0 720 252" role="img" aria-label="Lo spettro dalle frequenze basse alle alte: radio FM, TV, cellulare, Wi-Fi, microonde, infrarossi, luce visibile; a sinistra le onde arrivano più lontano, a destra trasportano più dati"></svg>'),
    'F2.8.1': dict(id='s-bande', titolo='Wi-Fi a 2,4 GHz e a 5 GHz nella stessa casa',
                   svg='      <svg viewBox="0 0 720 270" role="img" aria-label="La stessa casa con il router in un angolo: a 2,4 GHz il segnale arriva in tutte le stanze attraversando i muri, a 5 GHz si ferma prima ma è più veloce"></svg>'),
}

FOTO = {
    'F1.2.4': dict(modo='box', tit='Uno speed test sul telefono'),
    'F1.3.2': dict(tit='Cavo di rete sguainato'),
    'F1.3.4': dict(tit='Presa per telefono e Internet'),
    'F1.3.5': dict(modo='grande'),
    'F1.3.6': dict(tit='Fibre ottiche illuminate'),
    'F4.3.2': dict(tit='Armadio di strada FTTC'),
    'F2.8.3': dict(tit='Auricolari Bluetooth'),
    'box1.3': dict(tit='Il logo: le rune H e B', alt='Il logo del Bluetooth formato dalle rune delle iniziali di Harald Bluetooth'),
    'F2.8.4': dict(tit='Un tag RFID'),
    'F2.8.5': dict(tit='Pagamento contactless'),
    'F4.3.6': dict(tit='Antenna Starlink su un tetto', ancora='**satelliti geostazionari**'),
    'F1.5.1': dict(tit='Centraliniste al lavoro'),
}

FORMULE = ['MB al secondo = Mbps ÷ 8']

DOPO = {}


def widget_dopo(sezione, testo_inizio, nome):
    """inserisce un widget dopo il blocco della sezione che comincia con testo_inizio"""
    S = next(s for s in CONT['chapters'][0]['sezioni'] if s['num'] == sezione)
    k = next(i for i, b in enumerate(S['blocchi']) if (b.get('x') or '').startswith(testo_inizio))
    DOPO[(sezione, k)] = widget(nome)


widget_dopo('1.2', 'Quanto tempo serve per scaricare', 'download')
DOPO[('1.3', 'F4.3.3')] = widget('distanza')

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(1, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, FORMULE=FORMULE, DOPO=DOPO), OUT)
