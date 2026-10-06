# Capitolo 5 · Fare ricerche nel web — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Reti e Internet')

ANIM = {
    'F6.1.1': dict(id='f-motore', titolo='Il motore di ricerca lavora prima che tu cerchi',
                   inizio='A sinistra alcune pagine web collegate da link; al centro un ragnetto, il crawler; a destra uno schedario ancora vuoto, l’indice; in basso un utente con la barra di ricerca vuota.',
                   vb='0 0 720 320', aria='Il crawler visita le pagine seguendo i link, le parole finiscono nell’indice, alla ricerca il motore apre solo le schede delle parole cercate e mostra i risultati in ordine in pochi decimi di secondo'),
    'F8.3.1': dict(id='f-feed', titolo='Come il feed impara da te',
                   inizio='Un telefono con un feed di video di argomenti diversi: sport, musica, cucina, animali, videogiochi. A lato il profilo dell’utente, con gli interessi tutti bassi e uguali.',
                   vb='0 0 720 320', aria='Basta fermarsi venti secondi su un video di cucina perché l’interesse salga e il feed proponga sempre più video di cucina; un video di una lite guardato fino alla fine porta subito altri video di liti'),
    'F6.7.1': dict(id='f-rag', titolo='Rispondere a memoria o cercare prima?',
                   inizio='Uno studente chiede: «Quando è stata posata la prima fibra sottomarina tra Europa e America?». Al centro il chatbot, a destra tre pagine web.',
                   vb='0 0 720 320', aria='Senza ricerca il chatbot risponde con sicurezza una data da verificare; con la RAG cerca sul web, legge le pagine, ne estrae le frasi utili e scrive la risposta citando le fonti, che lo studente può controllare'),
}
FOTO = {'X5.2.1': dict(modo='grande', did='Una pagina dei risultati di ricerca: in cima gli annunci, segnalati solo da una piccola etichetta «Sponsorizzato».', alt='Pagina dei risultati di un motore di ricerca con risultati sponsorizzati in alto')}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(5, dict(ANIM=ANIM, FOTO=FOTO), OUT)
