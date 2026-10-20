"""Conversione del contenuto del Word (contenuto.json) in HTML del sito, per il modulo Introduzione all'AI.

Il testo del Word ha solo grassetti (**…**), corsivi (*…*) e link ([testo](url)): niente tag, attributi o codice da riconoscere.
"""
import html as H
import re


def T(s, nudi=True):
    """Testo del Word → HTML in linea (grassetto, corsivo, link)."""
    s = H.escape(s, quote=False)
    s = re.sub(r'\[([^\]]+)\]\((\S+?)\)', r'<a href="\2">\1</a>', s)
    s = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s, flags=re.S)
    s = re.sub(r'(?<![\w*])\*([^*\s][^*]*?)\*(?![\w*])', r'<i>\1</i>', s)
    s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
    return s


def Tmd(s):
    """Testo del Word → testo per le slide (markdown: **grassetto**, *corsivo*): resta com'è."""
    return s
