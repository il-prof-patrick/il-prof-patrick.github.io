# Capitolo 1 · Macchine che ragionano: che cos’è la logica — scelte della pagina (il testo è quello del brainstorming).
# Filo (rifatto il 04/11/2026): sistemi a regole e IA simbolica → in che lingua scrivere le regole: linguaggio formale e logica
# → com'è fatto un ragionamento → quando un ragionamento è valido.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Logica e IA simbolica')

ANIM = {
    'F1.1.2': anim_md(1, 'F1.1.2', 'f-casa', '0 0 720 360',
                      'A sinistra i fatti che la casa conosce, al centro due regole SE… ALLORA…, a destra la casa. La regola 1 scatta e aggiunge il fatto «serve la luce»; la regola 2 aspetta finché Marco entra, poi scatta e accende la luce.'),
    'F1.4.1': anim_md(1, 'F1.4.1', 'f-stampo', '0 0 720 300',
                      'A sinistra lo stampo di un ragionamento con le lettere A, B e x, a destra le frasi che lo riempiono. Con lo stampo «Tutti gli A sono B, x è un A, quindi x è un B» il ragionamento è valido anche quando una premessa è falsa; scambiando A e B lo stampo non è più valido: premesse vere e conclusione falsa.'),
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


S_ARG = ('      <svg viewBox="-24 0 784 262" role="img" aria-label="Tre argomenti scritti nello stesso modo: premesse sopra, una riga, conclusione sotto. '
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

SCHEMI = {
    'F1.2.1': schema_js(1, 'F1.2.1', 's-binocolo', '0 0 720 360',
                        'La regola «Se vedi un uomo con il binocolo, uccidilo» ha due significati. A sinistra la guardia guarda nel binocolo un uomo lontano, sull’altra sponda di un fiume: se, guardando nel binocolo, vedi un uomo. A destra la guardia, a occhio nudo, vede da vicino un uomo che tiene in mano un binocolo: se vedi un uomo che ha in mano un binocolo.'),
    'F1.2.2': dict(html=forma('linguaggio naturale|ambiguo', 'formalizzare', 'linguaggio formale|un solo significato')),
    'F1.2.3': dict(html=forma('base di conoscenza|fatti + regole', 'inferenza', 'fatti nuovi')),
    'F1.3.1': dict(id='s-argomenti', titolo='Tre argomenti, una stessa forma di scrittura', svg=S_ARG),
}

# icone dei sotto-titoli (una per idea)
IC = {
    'Fatti e regole': 'scroll-text',
    'Regole semplici, comportamento intelligente': 'gamepad-2',
    'Il problema: le nostre frasi sono ambigue': 'split',
    'La soluzione: un linguaggio formale': 'code',
    'La logica': 'scale',
    'Due modi di sbagliare': 'circle-x',
    'La validità': 'circle-check',
}

FOTO = {}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(1, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, IC=IC, ESE=True), OUT)
