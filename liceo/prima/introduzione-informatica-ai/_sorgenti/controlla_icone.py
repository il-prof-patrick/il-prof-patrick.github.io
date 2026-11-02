# Elenca le icone usate nelle slide (assets/capitolo-NN-aula.js) che non sono né nel motore né in icone.js.
import json, re, sys, os
QUI = os.path.dirname(os.path.abspath(__file__)); A = os.path.join(QUI, '..', 'assets')
sj = open(os.path.join(A, 'sito.js'), encoding='utf8').read()
a = sj.find('var ICONE'); b = sj.find('};', a)
note = set(re.findall(r"\n    '([a-z0-9-]+)':", sj[a:b]))
extra = set(json.loads(re.search(r'window\.ICONE_EXTRA = (\{.*\});', open(os.path.join(A, 'icone.js'), encoding='utf8').read(), re.S).group(1)))
ok = note | extra | {'arrow-right', 'lightbulb', 'message-circle-question', 'circle-check', 'circle-x', 'history', 'layers'}
usate = set()
for n in sys.argv[1:]:
    t = open(os.path.join(A, f'capitolo-{n}-aula.js'), encoding='utf8').read()
    d = json.loads(t[t.index('{'):t.rindex('}') + 1])
    def vai(o):
        if isinstance(o, dict):
            for k, v in o.items():
                if k == 'icona' and isinstance(v, str): usate.add(v)
                vai(v)
        elif isinstance(o, list):
            if len(o) >= 2 and isinstance(o[0], str) and re.fullmatch(r'[a-z0-9-]+', o[0]) and isinstance(o[1], str): usate.add(o[0])
            for x in o: vai(x)
    vai(d['slide'])
print(' '.join(sorted(u for u in usate if u not in ok)))
