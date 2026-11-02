# Capitolo 1 · Macchine che ragionano: che cos’è la logica — scelte della pagina (il testo è quello del brainstorming).
import sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Logica e IA simbolica')


def virgolette(s):
    """Le virgolette dritte del brainstorming diventano caporali (servono anche dentro gli attributi HTML)."""
    return re.sub(r'"([^"]+)"', r'“\1”', s)


def passi(fid):
    b = next(b for S in cap_json(1)['sezioni'] for b in S['blocchi'] if b.get('id') == fid)
    return [html(virgolette(p)) for p in b['passi']], html(virgolette(b['inizio']))


p_casa, i_casa = passi('F1.1.2')
p_stampo, i_stampo = passi('F1.3.1')
ANIM = {
    'F1.1.2': dict(id='f-casa', titolo='La casa che ragiona', inizio=i_casa, passi=p_casa, vb='0 0 720 360',
                   aria='A sinistra i fatti che la casa conosce, al centro due regole SE… ALLORA…, a destra la casa. La regola 1 scatta e aggiunge il fatto «serve la luce»; la regola 2 aspetta finché Marco entra, poi scatta e accende la luce.'),
    'F1.3.1': dict(id='f-stampo', titolo='Lo stampo del ragionamento', inizio=i_stampo, passi=p_stampo, vb='0 0 720 300',
                   aria='A sinistra lo stampo di un ragionamento con le lettere A, B e x, a destra le frasi che lo riempiono. Con lo stampo «Tutti gli A sono B, x è un A, quindi x è un B» il ragionamento è valido anche quando una premessa è falsa; scambiando A e B lo stampo non è più valido: premesse vere e conclusione falsa.'),
}


# ---------------------------------------------------------------- schemi
def colonna(x, titolo, premesse, conclusione):
    """Un argomento in un riquadro: premesse sopra, riga, conclusione sotto (ogni frase è una lista di righe)."""
    s = f'        <rect x="{x}" y="34" width="214" height="214" rx="4" class="nodo"/>\n'
    s += f'        <text x="{x + 107}" y="58" text-anchor="middle" class="t-eti">{titolo}</text>\n'
    y = 90
    for p in premesse:
        for r in p:
            s += f'        <text x="{x + 107}" y="{y}" text-anchor="middle" class="t-n">{r}</text>\n'; y += 19
        y += 9
    s += f'        <path d="M{x + 18} 182 H{x + 196}" class="lin" style="stroke:var(--ink);stroke-width:2"/>\n'
    y = 208
    for r in conclusione:
        s += f'        <text x="{x + 107}" y="{y}" text-anchor="middle" class="t-b">{r}</text>\n'; y += 19
    return s


S_ARG = ('      <svg viewBox="0 0 760 262" role="img" aria-label="Tre argomenti scritti nello stesso modo: premesse sopra, una riga, conclusione sotto. '
         'Pioggia: se piove la strada è bagnata; piove; quindi la strada è bagnata. Socrate: tutti gli uomini sono mortali; Socrate è un uomo; quindi Socrate è mortale. '
         'Detective: il ladro è entrato dalla porta o dalla finestra; la porta era chiusa a chiave e intatta; quindi il ladro è entrato dalla finestra.">\n'
         '        <text x="64" y="118" text-anchor="end" class="t-a">premesse</text>\n'
         '        <path d="M72 76 V160" class="lin att"/>\n'
         '        <text x="64" y="218" text-anchor="end" class="t-b">conclusione</text>\n'
         '        <path d="M72 194 V230" class="lin ok"/>\n'
         + colonna(80, 'PIOGGIA', [['Se piove, la strada', 'è bagnata'], ['Piove']], ['La strada è bagnata'])
         + colonna(310, 'SOCRATE', [['Tutti gli uomini', 'sono mortali'], ['Socrate è un uomo']], ['Socrate è mortale'])
         + colonna(540, 'DETECTIVE', [['Il ladro è entrato dalla', 'porta o dalla finestra'], ['La porta era chiusa', 'a chiave e intatta']], ['Il ladro è entrato', 'dalla finestra'])
         + '      </svg>')

S_BIN = '''      <svg viewBox="0 0 720 340" role="img" aria-label="La frase «Ho visto un uomo col binocolo» ha due significati. A sinistra una ragazza guarda con il binocolo un uomo lontano, sull’altra sponda di un fiume: con il binocolo, ho visto un uomo. A destra la ragazza, a occhio nudo, vede da vicino un uomo che tiene in mano un binocolo: ho visto un uomo che aveva un binocolo."></svg>'''

SCHEMI = {
    'F1.2.1': dict(id='s-argomenti', titolo='Tre argomenti, una stessa forma di scrittura', svg=S_ARG),
    'F1.4.1': dict(id='s-binocolo', titolo='Una frase, due significati', svg=S_BIN),   # disegnato in assets/capitolo-01.js
}

# la didascalia della foto dell’app: quella del brainstorming, che comincia con «osserva»
FOTO = {}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(1, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO), OUT)
