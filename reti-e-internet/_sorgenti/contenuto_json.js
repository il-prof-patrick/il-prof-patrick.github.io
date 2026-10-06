// Converte i file di contenuto del brainstorming (formato di 1-brainstorming/scripts/brainstorm-build.js) in JSON.
// Uso: node contenuto_json.js main.js > contenuto.json
const path = require('path');
const helpers = {
  P: (x) => ({ t: 'p', x }), H: (x) => ({ t: 'h3', x }), L: (items) => ({ t: 'list', items }), N: (items) => ({ t: 'num', items }),
  F: (x) => ({ t: 'formula', x }), C: (lines) => ({ t: 'code', lines }), T: (rows, widths) => ({ t: 'table', rows, widths }),
  S: (x) => ({ t: 'box', k: 'storia', x }), E: (x) => ({ t: 'box', k: 'esempio', x }), LAB: (x) => ({ t: 'box', k: 'lab', x }),
  ERR: (errata, corretta) => ({ t: 'errore', errata, corretta }), D: (q, scopo, risposta) => ({ t: 'domanda', q, scopo, risposta }),
  FIG: (tipo, x, passi, foto) => ({ t: 'figura', tipo, x, passi, foto }), R: (items) => ({ t: 'ricorda', items }),
};
const src = require(path.resolve(process.argv[2]));
const cfg = typeof src === 'function' ? src(helpers) : src;
process.stdout.write(JSON.stringify(cfg, null, 1));
