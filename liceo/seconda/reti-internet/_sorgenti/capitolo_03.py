# Capitolo 3 · Come comunicano i computer: indirizzi e protocolli — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Reti e Internet')

ANIM = {
    'F3.2.1': dict(id='f-incapsulamento', titolo='L’incapsulamento: buste dentro buste',
                   inizio='Il telefono di Luca e quello di Sara, ciascuno con quattro ripiani: Applicazione, Trasporto, Internet e Accesso. In mezzo un router. In cima al telefono di Luca il messaggio «Ci vediamo alle 5?».',
                   vb='0 0 720 330', aria='Scendendo i livelli il messaggio riceve un’intestazione dopo l’altra (porte, indirizzi IP, indirizzi MAC); il router apre solo la busta del MAC e legge l’IP; risalendo i livelli sul telefono di Sara le buste vengono tolte una alla volta'),
    'F3.5.1': dict(id='f-dhcp', titolo='Il DHCP in quattro messaggi',
                   inizio='Un telefono appena entrato in casa, ancora senza indirizzo, e il router con l’elenco degli indirizzi liberi: .2, .3, .4, .5…',
                   vb='0 0 720 270', aria='Il telefono chiede a tutti se c’è un server DHCP, il router propone un indirizzo, il telefono lo accetta e il router conferma, segnando l’indirizzo come occupato per un certo tempo'),
    'F3.6.1': dict(id='f-dns', titolo='Dal nome al numero: la risoluzione DNS',
                   inizio='Il portatile vuole aprire www.wikipedia.org; accanto il server DNS dell’operatore con il suo quaderno, la cache, ancora vuoto; in alto, su tre gradini, il server radice, quello di .org e quello di wikipedia.org.',
                   vb='0 0 720 330', aria='Il DNS dell’operatore chiede al server radice, poi a quello di .org, poi a quello di wikipedia.org e ottiene l’indirizzo IP; lo annota nella cache e la seconda volta risponde subito'),
    'X3.6.3': dict(id='f-porte', titolo='Le porte: a quale app va il pacchetto?',
                   inizio='A sinistra il telefono con l’indirizzo IP 192.168.1.4, disegnato come un palazzo con tre porte numerate: WhatsApp (50211), Spotify (50488) e il browser (51032). A destra i server di WhatsApp, Spotify e Wikipedia, tutti sulla porta 443.',
                   vb='0 0 720 330', aria='Il pacchetto del browser va all’IP di Wikipedia sulla porta 443 e la risposta torna alla porta 51032 del telefono; pacchetti per porte diverse arrivano ad app diverse; un pacchetto per una porta senza app viene scartato'),
    'F3.7.1': dict(id='f-tcpudp', titolo='TCP e UDP: che cosa succede se un pacchetto si perde',
                   inizio='Sopra un mittente e un destinatario che usano il TCP, sotto la stessa scena con l’UDP. Il file è diviso nei pacchetti 1, 2, 3 e 4.',
                   vb='0 0 720 330', aria='Il TCP apre la connessione, si accorge che il pacchetto 3 manca e lo fa rimandare; l’UDP non apre connessioni e il pacchetto perso resta perso'),
}
FORMULE = ['3C:22:FB : 7A:10:9E', '192.168.1.4 = 11000000.10101000.00000001.00000100', '2001:0db8:85a3:0000:0000:8a2e:0370:7334']
DOPO = {('3.4', 4): widget('ipv4')}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(3, dict(ANIM=ANIM, FORMULE=FORMULE, DOPO=DOPO), OUT)
