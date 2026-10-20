# Capitolo 4 · Come ragiona un computer — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
from capitolo_01 import foto_capitolo
configura(modulo='Introduzione a informatica ed AI')

# il Word non porta i rientri nei blocchi di codice: qui si rimettono (blocco e ciclo si capiscono dai rientri)
PSEUDO = ['credito ← 0', 'leggi prezzo', 'finché credito < prezzo', '    leggi moneta', '    credito ← credito + moneta',
          'scrivi «Caffè pronto»', 'se credito > prezzo', '    scrivi «Resto:», credito − prezzo']
PYTHON = ['prezzo = 120  # in centesimi', 'credito = 0', 'while credito < prezzo:', '    credito = credito + int(input("Moneta: "))',
          'print("Caffè pronto")', 'if credito > prezzo:', '    print("Resto:", credito - prezzo)']
_q = [b for S in CONT['chapters'][3]['sezioni'] for b in S['blocchi'] if b['t'] == 'quote']
assert len(_q) == 2 and _q[0]['righe'][0] == 'credito ← 0' and _q[1]['righe'][0].startswith('prezzo = 120')
_q[0]['righe'], _q[1]['righe'] = PSEUDO, PYTHON


def flusso():
    """Diagramma di flusso della macchinetta del caffè (schema statico)."""
    def riq(x, y, w, t): return f'<rect x="{x - w // 2}" y="{y - 15}" width="{w}" height="30" rx="3" class="nodo"/><text x="{x}" y="{y + 5}" text-anchor="middle" class="t">{t}</text>'
    def ovale(y, t): return f'<rect x="264" y="{y - 12}" width="72" height="24" rx="12" class="nodo evid"/><text x="300" y="{y + 5}" text-anchor="middle" class="t-b">{t}</text>'
    def rombo(y, t): return f'<path d="M300 {y - 32} L400 {y} L300 {y + 32} L200 {y} Z" class="nodo"/><text x="300" y="{y + 5}" text-anchor="middle" class="t">{t}</text>'
    def fr(d, x, y, dr):
        h = {'g': (-5, -7, 0, 0, 5, -7), 'd': (-7, -5, 0, 0, -7, 5), 's': (7, -5, 0, 0, 7, 5)}[dr]
        return f'<path d="{d}" class="lin"/><path d="M{x + h[0]} {y + h[1]} L{x + h[2]} {y + h[3]} L{x + h[4]} {y + h[5]}" class="lin"/>'
    parti = [ovale(26, 'Inizio'), riq(300, 76, 160, 'credito = 0'), rombo(140, 'credito &lt; prezzo?'), riq(540, 140, 140, 'aggiungi moneta'),
             riq(300, 218, 160, 'prepara il caffè'), rombo(292, 'credito &gt; prezzo?'), riq(540, 292, 140, 'dai il resto'), ovale(396, 'Fine'),
             fr('M300 38 V61', 300, 61, 'g'), fr('M300 91 V108', 300, 108, 'g'), fr('M400 140 H470', 470, 140, 'd'),
             '<path d="M540 125 V99 H300" class="lin"/>',
             fr('M300 172 V203', 300, 203, 'g'), fr('M300 233 V260', 300, 260, 'g'), fr('M400 292 H470', 470, 292, 'd'),
             fr('M540 307 V396 H336', 336, 396, 's'), fr('M300 324 V384', 300, 384, 'g'),
             '<text x="412" y="132" class="t-b">sì</text><text x="308" y="192" class="t-m">no</text><text x="412" y="284" class="t-b">sì</text><text x="308" y="344" class="t-m">no</text>']
    return '''      <svg viewBox="0 0 720 420" role="img" aria-label="Diagramma di flusso della macchinetta del caffè: dopo Inizio il credito vale zero; finché il credito è minore del prezzo si aggiunge una moneta; poi si prepara il caffè; se il credito supera il prezzo si dà il resto; poi Fine.">
''' + '\n'.join('        ' + p for p in parti) + '\n      </svg>'


ANIM = {
    'F4.4.2': dict(id='f-quattro', titolo='Quattro forme, un solo algoritmo',
                   inizio='Quattro schede con lo stesso algoritmo, dalla forma più umana a quella più vicina al computer: linguaggio naturale, diagramma di flusso, pseudocodice, codice.',
                   vb='0 0 720 530', aria='Il caffè della macchinetta scritto in quattro forme. A ogni passo si accende lo stesso pezzo in tutte e quattro.',
                   passi=['Si parte da un credito di zero: è il primo passo, e le quattro forme lo scrivono nello stesso punto.',
                          'Si ripete finché il credito è minore del prezzo: si chiede una moneta e la si aggiunge.',
                          'Quando il credito basta, si prepara il caffè.',
                          'Se il credito supera il prezzo, si dà il resto.',
                          'Quattro forme, un solo algoritmo: dalla più umana alla più vicina al computer.']),
}
SCHEMI = {'F4.4.1': dict(id='s-flusso', titolo='Diagramma di flusso della macchinetta del caffè', svg=flusso())}
FOTO = foto_capitolo(4)
FOTO['F4.1.2'].update(tit='Umberto Eco', ancora='Per questo un computer eccelle')   # accanto al paragrafo lungo, senza buchi

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(4, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO), OUT)
