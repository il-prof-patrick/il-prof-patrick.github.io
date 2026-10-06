/* Informatica con il Prof. Patrick — motore del sito: icone, tema, menu, animazioni, widget, Presenta in aula */
(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function salva(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function leggi(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* ---------- icone Lucide (ISC) ---------- */
  var ICONE = {
    'building-2': '<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
    'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'map': '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
    'volume-2': '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>',
    'wifi': '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>',
    'router': '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6"/><path d="M10.01 18H10"/><path d="M15 10v4"/><path d="M17.84 7.17a4 4 0 0 0-5.66 0"/><path d="M20.66 4.34a8 8 0 0 0-11.31 0"/>',
    'network': '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
    'server': '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    'cpu': '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
    'zap': '<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',
    'radio': '<path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/>',
    'cable': '<path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"/><path d="M17 21v-2"/><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"/><path d="M21 21v-2"/><path d="M3 5V3"/><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"/><path d="M7 5V3"/>',
    'shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    'smartphone': '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    'gauge': '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    'arrow-left-right': '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
    'waves': '<path d="M2 12q2.5 2 5 0t5 0 5 0 5 0"/><path d="M2 19q2.5 2 5 0t5 0 5 0 5 0"/><path d="M2 5q2.5 2 5 0t5 0 5 0 5 0"/>',
    'binary': '<rect x="14" y="14" width="4" height="6" rx="2"/><rect x="6" y="4" width="4" height="6" rx="2"/><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/>',
    'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    'mail': '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
    'ear': '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>',
    'send': '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    'hard-drive': '<path d="M10 16h.01"/><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M21.946 12.013H2.054"/><path d="M6 16h.01"/>',
    'house': '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    'signal': '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>',
    'timer': '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
    'activity': '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    'satellite-dish': '<path d="M18 12a6 6 0 00-6-6"/><path d="M2.824 10.459a8 8 0 0010.717 10.717c.558-.276.623-1.012.183-1.452l-9.448-9.448c-.44-.44-1.176-.375-1.452.183"/><path d="M22 12A10 10 0 0012 2"/><path d="m9 15 4-4"/>',
    'message-square': '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>',
    'route': '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'monitor': '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    'package': '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',
    'move-right': '<path d="M18 8L22 12L18 16"/><path d="M2 12H22"/>',
    'repeat': '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    'key': '<path d="m2 21 9.6-9.6"/><path d="m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19"/><circle cx="15.5" cy="7.5" r="5.5"/>',
    'file-warning': '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    'video': '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    'gamepad-2': '<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>',
    'download': '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
    'upload': '<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
    'sparkles': '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
    'hand': '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    'target': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    'eye': '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    'layers': '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
    'book-open': '<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',
    'list': '<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',
    'lightbulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    'triangle-alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    'circle-x': '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    'circle-check': '<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',
    'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    'presentation': '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>',
    'message-circle-question': '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    'moon': '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
    'panel-left-close': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',
    'panel-left-open': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>', 'chevron-right': '<path d="m9 18 6-6-6-6"/>', 'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'history': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'satellite': '<path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/><path d="M16.5 7.5 19 5"/><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/><path d="M9 21a6 6 0 0 0-6-6"/><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/>',
    'anchor': '<path d="M12 6v16"/><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"/><path d="M9 11h6"/><circle cx="12" cy="4" r="2"/>',
    'bluetooth': '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
    'headphones': '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    'car': '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    'ship': '<path d="M12 2v2"/><path d="M12 9.189V13"/><path d="M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6"/><path d="M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76"/><path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    'radio-tower': '<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>',
    'shovel': '<path d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z"/><path d="M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z"/><path d="m9 15 7.879-7.878"/>'
  };
  // icone Lucide: quelle del motore più quelle aggiunte per il modulo in assets/icone.js (scripts/icone.py)
  ICONE = Object.assign({}, ICONE, window.ICONE_EXTRA || {}); window.ICONE = ICONE;
  function icona(nome, cls) { return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONE[nome] || '') + '</svg>'; }
  window.icona = icona;
  function iconeInline(root) {
    [].forEach.call((root || document).querySelectorAll('i[data-ic]'), function (i) {
      var w = document.createElement('span'); w.innerHTML = icona(i.getAttribute('data-ic'), i.className); i.replaceWith(w.firstChild);
    });
  }

  /* ---------- tema ---------- */
  function temaAttuale() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  var tSalvato = leggi('ip-tema'); if (tSalvato) document.documentElement.setAttribute('data-theme', tSalvato);
  function iconaTema(b) { b.innerHTML = icona(temaAttuale() === 'dark' ? 'sun' : 'moon', 'ic-16'); }

  /* ---------- pagina ---------- */
  function costruisciPagina() {
    var M = window.MODULO || { anno: '', titolo: '', capitoli: [] };
    var cur = document.body.getAttribute('data-capitolo');
    var barra = document.createElement('header'); barra.className = 'barra';
    barra.innerHTML = '<a class="marchio" href="../index.html">' +
      '<svg class="marchio-logo" viewBox="0 0 32 32" aria-hidden="true">' +
      '<defs><linearGradient id="lg-logo-modulo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2dd4bf"/><stop offset=".5" stop-color="#60a5fa"/><stop offset="1" stop-color="#a78bfa"/></linearGradient></defs>' +
      '<rect width="32" height="32" rx="8" fill="url(#lg-logo-modulo)"/><path d="M9 11l5 5-5 5M16 22h7" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '<span class="marchio-testo"><b>Informatica</b> <span>con il Prof. Patrick</span></span></a>' +
      '<div class="strumenti">' +
      (cur ? '<button class="tasto" id="b-presenta">' + icona('presentation', 'ic-16') + '<span class="testo-tasto">Presenta in aula</span></button>' : '') +
      '<button class="tasto solo" id="b-tema" aria-label="Cambia tema"></button>' +
      '<button class="tasto solo" id="b-menu-mob" aria-label="Apri il menu" aria-expanded="false">' + icona('panel-left-open', 'ic-16') + '</button></div>';
    document.body.insertBefore(barra, document.body.firstChild);
    var piede = document.createElement('footer'); piede.className = 'foot';
    piede.innerHTML = '<div class="foot-wrap foot-cols">' +
      '<div class="foot-col"><strong>Informatica con il Prof. Patrick</strong><span>Realizzato con il supporto dell\'intelligenza artificiale</span></div>' +
      '<div class="foot-col foot-col-center"><span>© ' + new Date().getFullYear() + ' Patrick Militello</span></div>' +
      '<div class="foot-col foot-col-right"><strong>Contatti</strong><a href="mailto:patrick.militello@iisaltierospinelli.it">patrick.militello@iisaltierospinelli.it</a></div>' +
      '</div>';
    document.body.appendChild(piede);
    var menu = document.getElementById('menu');
    if (menu) {
      var h = '<div class="menu-testa"><span class="menu-anno">' + M.anno + '</span><button class="tasto solo" id="b-menu" aria-label="Chiudi il menu" aria-expanded="true">' + icona('panel-left-close', 'ic-16') + '</button></div>';
      h += '<a class="menu-gruppo" href="index.html">' + M.titolo + '</a>';
      M.capitoli.forEach(function (c) {
        var n = (c.n < 10 ? '0' : '') + c.n;
        if (c.file) h += '<a class="voce" href="' + c.file + '"' + (String(c.n) === cur ? ' aria-current="page"' : '') + '><span class="n">' + n + '</span><span class="t">' + c.titolo + '</span></a>';
        else h += '<span class="voce futura"><span class="n">' + n + '</span><span class="t">' + c.titolo + '</span></span>';
      });
      menu.innerHTML = h;
      var bm = document.getElementById('b-menu');
      function statoMenu(chiuso) {
        document.body.classList.toggle('menu-chiuso', chiuso);
        bm.innerHTML = icona(chiuso ? 'panel-left-open' : 'panel-left-close', 'ic-16');
        bm.setAttribute('aria-expanded', String(!chiuso)); bm.setAttribute('aria-label', chiuso ? 'Apri il menu' : 'Chiudi il menu');
      }
      statoMenu(leggi('ip-menu') === 'chiuso');
      bm.onclick = function () {
        if (innerWidth <= 840) { document.body.classList.remove('menu-aperto'); return; }
        var c = !document.body.classList.contains('menu-chiuso'); statoMenu(c); salva('ip-menu', c ? 'chiuso' : 'aperto');
      };
      var att = menu.querySelector('[aria-current]'); if (att) att.scrollIntoView({ block: 'nearest' });
    }
    var bmm = document.getElementById('b-menu-mob');
    bmm.onclick = function () { var a = document.body.classList.toggle('menu-aperto'); bmm.setAttribute('aria-expanded', String(a)); };
    if (innerWidth > 840) bmm.style.display = 'none';
    addEventListener('resize', function () { bmm.style.display = innerWidth > 840 ? 'none' : ''; });
    document.addEventListener('click', function (e) {
      if (document.body.classList.contains('menu-aperto') && !e.target.closest('.menu') && !e.target.closest('#b-menu-mob')) document.body.classList.remove('menu-aperto');
    });
    var bt = document.getElementById('b-tema'); iconaTema(bt);
    bt.onclick = function () { var n = temaAttuale() === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', n); salva('ip-tema', n); iconaTema(bt); };
    // navigazione di fondo
    var fine = document.querySelector('.fine[data-auto]');
    if (fine && cur) {
      var i = M.capitoli.findIndex(function (c) { return String(c.n) === cur; }), pr = M.capitoli[i - 1], su = M.capitoli[i + 1], s = '';
      if (pr) s += salto(pr, 'Capitolo precedente', 'chevron-left', '');
      else s += '<a class="salto" href="index.html"><span class="dir">' + icona('chevron-left', 'ic-16') + ' Indice</span><span class="tit">' + M.titolo + '</span></a>';
      if (su) s += salto(su, 'Capitolo successivo', 'chevron-right', ' destra');
      fine.innerHTML = s;
    }
    function salto(c, dir, ic, cls) {
      var t = c.n + '. ' + c.titolo;
      if (!c.file) return '<span class="salto spento' + cls + '"><span class="dir">' + (cls ? dir + ' ' + icona(ic, 'ic-16') : icona(ic, 'ic-16') + ' ' + dir) + '</span><span class="tit">' + t + ' (in preparazione)</span></span>';
      return '<a class="salto' + cls + '" href="' + c.file + '"><span class="dir">' + (cls ? dir + ' ' + icona(ic, 'ic-16') : icona(ic, 'ic-16') + ' ' + dir) + '</span><span class="tit">' + t + '</span></a>';
    }
  }

  /* ---------- Animazione: ciclo con finestre e scenari ---------- */
  function avviaAnimazione(el) {
    if (el._anim) return el._anim;
    var svg = el.querySelector('svg:not(.ic)'), CICLO = +(el.getAttribute('data-ciclo') || 6000);
    var fermo = +(el.getAttribute('data-fermo') || 0.85);
    var bott = el.querySelectorAll('[data-modo]');
    var modo = el.getAttribute('data-modo') || (bott[0] && bott[0].getAttribute('data-modo')) || '';
    var t0 = performance.now(), raf = 0, vis = false, vivo = true;
    var hook = el.id && window.ANIM_HOOK && window.ANIM_HOOK[el.id] ? window.ANIM_HOOK[el.id](el, svg) : {};
    var voci = [].map.call(svg.querySelectorAll('[data-da]'), function (n) {
      var r = n.getAttribute('data-rotta'), p = r ? svg.querySelector(r) : null;
      return { n: n, da: +n.getAttribute('data-da'), a: +n.getAttribute('data-a'), p: p, len: p ? p.getTotalLength() : 0, inv: n.hasAttribute('data-inverso') };
    });
    function scenario() {
      [].forEach.call(svg.querySelectorAll('[data-solo]'), function (n) { n.style.display = n.getAttribute('data-solo').split(' ').indexOf(modo) >= 0 ? '' : 'none'; });
      [].forEach.call(el.querySelectorAll('[data-non]'), function (n) { n.style.display = n.getAttribute('data-non').split(' ').indexOf(modo) >= 0 ? 'none' : ''; });
      [].forEach.call(bott, function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-modo') === modo)); });
      if (hook.modo) hook.modo(modo);
    }
    function disegna(t) {
      voci.forEach(function (v) {
        var on = t >= v.da && t < v.a;
        if (v.p) {
          if (on) {
            var f = (t - v.da) / (v.a - v.da); if (v.inv) f = 1 - f;
            var q = v.p.getPointAtLength(f * v.len); v.n.setAttribute('transform', 'translate(' + q.x + ',' + q.y + ')'); v.n.style.visibility = 'visible';
          } else v.n.style.visibility = 'hidden';
        } else v.n.classList.toggle('on', on);
      });
      if (hook.frame) hook.frame(t, modo);
    }
    function giro(now) {
      if (!vivo || !document.body.contains(el)) { raf = 0; return; }
      disegna(((now - t0) % CICLO) / CICLO);
      raf = vis && !document.hidden ? requestAnimationFrame(giro) : 0;
    }
    function parti() { if (!reduce && !raf && vis) raf = requestAnimationFrame(giro); }
    function riavvia() { t0 = performance.now(); if (reduce) disegna(fermo); else parti(); }
    [].forEach.call(bott, function (b) { b.addEventListener('click', function () { modo = b.getAttribute('data-modo'); scenario(); riavvia(); }); });
    [].forEach.call(el.querySelectorAll('[data-azione="riavvia"]'), function (b) { b.addEventListener('click', riavvia); });
    scenario(); disegna(fermo);
    var io = new IntersectionObserver(function (e) { vis = e[0].isIntersecting; if (vis) { t0 = performance.now(); parti(); } }, { threshold: 0.25 });
    io.observe(el);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) parti(); });
    el._anim = { riavvia: riavvia, ferma: function () { vivo = false; io.disconnect(); } };
    return el._anim;
  }

  /* ---------- Widget: nucleo ---------- */
  var REG = {};
  var W = {
    registra: function (nome, fn) { REG[nome] = fn; },
    h: function (tag, att, figli) {
      var n = document.createElement(tag); att = att || {};
      Object.keys(att).forEach(function (k) { if (k === 'testo') n.textContent = att[k]; else if (k === 'html') n.innerHTML = att[k]; else n.setAttribute(k, att[k]); });
      (figli || []).forEach(function (f) { n.appendChild(typeof f === 'string' ? document.createTextNode(f) : f); });
      return n;
    },
    s: function (tag, att) {
      var n = document.createElementNS('http://www.w3.org/2000/svg', tag); att = att || {};
      Object.keys(att).forEach(function (k) { if (k === 'testo') n.textContent = att[k]; else n.setAttribute(k, att[k]); });
      return n;
    },
    base: function (el, titolo, badge) {
      el.classList.add('wid');
      var testa = W.h('div', { 'class': 'wid-testa' }, [W.h('span', { 'class': 'wid-titolo', testo: titolo })]);
      if (badge) testa.appendChild(W.h('span', { 'class': 'wid-badge', testo: badge }));
      var ctrl = W.h('div', { 'class': 'wid-comandi' });
      var st = W.h('div', { 'class': 'stato', 'aria-live': 'polite' });
      el.appendChild(testa); el.appendChild(ctrl);
      return { ctrl: ctrl, stato: st, chiudi: function () { el.appendChild(st); },
        dica: function (t, tono) { st.textContent = t; st.className = 'stato' + (tono ? ' ' + tono : ''); } };
    },
    scelta: function (voci, val, fn) {
      var g = W.h('div', { 'class': 'wid-gruppo', role: 'group' });
      voci.forEach(function (v) {
        var b = W.h('button', { 'class': 'tasto', type: 'button', 'aria-pressed': String(v[0] === val), testo: v[1] });
        b.onclick = function () { [].forEach.call(g.children, function (c) { c.setAttribute('aria-pressed', String(c === b)); }); fn(v[0]); };
        g.appendChild(b);
      });
      g.imposta = function (k) { [].forEach.call(g.children, function (c, i) { c.setAttribute('aria-pressed', String(voci[i][0] === k)); }); };
      return g;
    },
    cursore: function (etich, min, max, val, step, fn, formato) {
      var inp = W.h('input', { type: 'range', min: min, max: max, value: val, step: step, 'aria-label': etich });
      var out = W.h('output', { testo: formato ? formato(val) : val });
      var l = W.h('label', { 'class': 'wid-cursore' }, [W.h('span', { testo: etich }), inp, out]);
      inp.oninput = function () { out.textContent = formato ? formato(+inp.value) : inp.value; fn(+inp.value); };
      l.input = inp; l.out = out; return l;
    },
    bottone: function (testo, fn, tipo) { var b = W.h('button', { 'class': 'tasto' + (tipo ? ' ' + tipo : ''), type: 'button', testo: testo }); b.onclick = fn; return b; },
    dato: function (k, v) { var vv = W.h('span', { 'class': 'v', testo: v }); var d = W.h('div', { 'class': 'dato' }, [W.h('span', { 'class': 'k', testo: k }), vv]); d.v = vv; return d; },
    tween: function (el, ms, frame, fine) {
      var stop = false, t0 = performance.now();
      if (reduce) { frame(1); if (fine) fine(); return { stop: function () {} }; }
      function f(now) {
        if (stop || !document.body.contains(el)) return;
        var k = Math.min(1, (now - t0) / ms); frame(k);
        if (k < 1) requestAnimationFrame(f); else if (fine) fine();
      }
      requestAnimationFrame(f);
      return { stop: function () { stop = true; } };
    },
    dopo: function (el, ms, fn) { return setTimeout(function () { if (document.body.contains(el)) fn(); }, reduce ? 0 : ms); },
    punto: function (a, b, f) { return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f }; },
    ridotto: reduce
  };
  window.WIDGET = W;
  function avviaWidget(el) {
    if (el._wid) return; el._wid = true;
    var f = REG[el.getAttribute('data-widget')];
    if (f) f(el); else el.textContent = 'Widget «' + el.getAttribute('data-widget') + '» non trovato';
  }
  /* ---------- Animazione a passi: un clic, un passo ---------- */
  function avviaPassi(el) {
    if (el._passi) return; el._passi = true;
    var svg = el.querySelector('svg:not(.ic)');
    var testi = [].map.call(el.querySelectorAll('ol.passi-testo li'), function (li) { return li.innerHTML; });
    var n = testi.length, i = 0, attivi = [];
    var hook = el.id && window.ANIM_HOOK && window.ANIM_HOOK[el.id] ? window.ANIM_HOOK[el.id](el, svg) : {};
    var com = W.h('div', { 'class': 'passi-com' });
    var bI = W.bottone('', function () { vai(i - 1, false); }), bA = W.bottone('', function () { vai(i + 1, true); }, 'primario'), bR = W.bottone('', function () { vai(0, false); });
    bI.innerHTML = icona('chevron-left', 'ic-16') + ' Indietro'; bA.innerHTML = 'Avanti ' + icona('chevron-right', 'ic-16'); bR.innerHTML = icona('rotate-ccw', 'ic-16') + ' Ricomincia';
    var conta = W.h('span', { 'class': 'passi-conta' });
    com.appendChild(bI); com.appendChild(bA); com.appendChild(bR); com.appendChild(conta);
    var st = W.h('div', { 'class': 'stato passi-desc', 'aria-live': 'polite' });
    var testa = W.h('div', { 'class': 'passi-testa' });
    if (el.getAttribute('data-titolo')) testa.appendChild(W.h('div', { 'class': 'passi-titolo', testo: el.getAttribute('data-titolo') }));
    testa.appendChild(st);
    el.insertBefore(testa, svg); el.appendChild(com);
    var voci = [].map.call(svg.querySelectorAll('[data-passo]'), function (e) {
      var r = e.getAttribute('data-rotta'), p = r ? svg.querySelector(r) : null;
      return { e: e, p: +e.getAttribute('data-passo'), f: e.hasAttribute('data-fino') ? +e.getAttribute('data-fino') : 1e9,
        path: p, len: p ? p.getTotalLength() : 0, inv: e.hasAttribute('data-inverso'), resta: e.hasAttribute('data-resta'),
        rit: +(e.getAttribute('data-ritardo') || 0), dur: +(e.getAttribute('data-durata') || 1400) };
    });
    function metti(v, f) { var q = v.path.getPointAtLength((v.inv ? 1 - f : f) * v.len); v.e.setAttribute('transform', 'translate(' + q.x.toFixed(1) + ',' + q.y.toFixed(1) + ')'); }
    function vai(k, anim) {
      if (k < 0 || k > n) return;
      attivi.forEach(function (a) { a.stop(); }); attivi = []; i = k;
      voci.forEach(function (v) {
        var e = v.e;
        if (v.path) {
          if (v.p === i && anim && !W.ridotto) {
            metti(v, 0); e.style.visibility = 'hidden';
            var t = setTimeout(function () {
              e.style.visibility = 'visible';
              attivi.push(W.tween(el, v.dur, function (q) { metti(v, q); }, function () { if (!v.resta && v.p === i) e.style.visibility = 'hidden'; }));
            }, v.rit);
            attivi.push({ stop: function () { clearTimeout(t); } });
          } else if ((v.p === i && (v.resta || !anim)) || (v.p < i && v.resta && i <= v.f)) { metti(v, 1); e.style.visibility = 'visible'; }
          else e.style.visibility = 'hidden';
        } else {
          var on = v.p <= i && i <= v.f;
          e.style.transitionDelay = (anim && v.p === i && v.rit) ? v.rit + 'ms' : '0ms';
          if (anim && v.p === i) { e.classList.remove('on'); void e.getBBox; requestAnimationFrame(function () { e.classList.toggle('on', on); }); }
          else { e.style.transition = 'none'; e.classList.toggle('on', on); void e.getBoundingClientRect(); e.style.transition = ''; }
        }
      });
      if (hook.passo) hook.passo(i, anim && !W.ridotto, attivi);
      bI.disabled = i === 0; bA.disabled = i === n; conta.textContent = 'passo ' + i + ' di ' + n;
      st.innerHTML = i === 0 ? (el.getAttribute('data-inizio') || 'Premi «Avanti» per far partire l’animazione.') : testi[i - 1];
      st.className = 'stato passi-desc' + (i === n ? ' ok' : '');
    }
    svg.querySelectorAll('[data-passo]').forEach(function (e) { if (!e.hasAttribute('data-rotta')) e.classList.add('fx'); });
    vai(0, false);
    el._vai = function (d) { if ((d > 0 && i < n) || (d < 0 && i > 0)) { vai(i + d, d > 0); return true; } return false; };
  }

  function avviaTutto(root) {
    [].forEach.call(root.querySelectorAll('.anim'), avviaAnimazione);
    [].forEach.call(root.querySelectorAll('.passi-anim'), avviaPassi);
    [].forEach.call(root.querySelectorAll('[data-widget]'), avviaWidget);
  }

  /* ---------- Presenta in aula: slide 16:9 costruite da window.AULA ---------- */
  function md(t) { return String(t || '').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, '$1<i>$2</i>').replace(/`(.+?)`/g, '<code>$1</code>'); }
  function presentazione() {
    var main = document.querySelector('.lezione'); if (!main) return;
    var b = document.getElementById('b-presenta'); if (!b) return;
    var A = window.AULA; if (!A) { b.style.display = 'none'; return; }
    var aula = document.createElement('div'); aula.id = 'aula'; aula.setAttribute('role', 'dialog'); aula.setAttribute('aria-label', 'Presenta in aula');
    aula.innerHTML = '<div class="aula-scena"><div class="aula-tela"></div></div>' +
      '<div class="aula-com"><button class="tasto" id="b-ind" aria-label="Indietro">' + icona('chevron-left', 'ic-16') + '</button>' +
      '<span class="aula-conta"><input id="aula-vai" type="text" inputmode="numeric" aria-label="Vai alla slide"><span class="aula-tot"></span></span><button class="tasto" id="b-ava" aria-label="Avanti">' + icona('chevron-right', 'ic-16') + '</button>' +
      '<button class="tasto" id="b-esci" aria-label="Esci">' + icona('x', 'ic-16') + '<span class="testo-tasto">Esci</span></button></div>';
    document.body.appendChild(aula);
    var scena = aula.querySelector('.aula-scena'), tela = aula.querySelector('.aula-tela'), vaiIn = aula.querySelector('#aula-vai'), tot = aula.querySelector('.aula-tot');
    var S = A.slide, i = 0, aperta = false, cur = null;
    var sezione = ''; S.forEach(function (s) { if (s.tipo === 'sezione') sezione = s.num + ' · ' + s.titolo; s._sez = s.tipo === 'copertina' ? '' : sezione; });

    function ic(n) { return '<span class="sl-ic">' + icona(n || 'arrow-right') + '</span>'; }
    // foto delle slide: copertina e sezione ritagliate; le foto didattiche intere, dentro una cornice (la stessa foto sfocata)
    function fotoHtml(f, cls) {
      var img = '<img src="' + f.src + '" alt="' + (f.alt || f.tit || '') + '" referrerpolicy="no-referrer">';
      var taglia = /sl-cop-foto|sl-sez-foto/.test(cls || '');
      return '<figure class="sl-foto ' + (cls || '') + (taglia ? '' : ' cornice') + '">' +
        (taglia ? img : '<div class="sl-cornice" style="--sf:url(&quot;' + f.src + '&quot;)">' + img + '</div>') +
        (f.tit ? '<figcaption>' + md(f.tit) + '</figcaption>' : '') + '</figure>'; }
    function testa(s) { return '<header class="sl-testa">' + (s._sez ? '<span class="sl-eti">' + s._sez + '</span>' : '') + (s.titolo ? '<h2 class="sl-tit">' + md(s.titolo) + '</h2>' : '') + '</header>'; }
    function clona(sel) {
      var o = main.querySelector(sel); if (!o) return null;
      var c = o.cloneNode(true);
      [].forEach.call(c.querySelectorAll('.passi-testa,.passi-com'), function (x) { x.remove(); });
      [].forEach.call(c.querySelectorAll('[data-widget]'), function (w) { w.innerHTML = ''; w._wid = false; w.className = w.className.replace(/\bwid\b/, ''); });
      if (c.matches('[data-widget]')) { c.innerHTML = ''; c.className = c.className.replace(/\bwid\b/, ''); }
      return c;
    }
    var R = {
      copertina: function (s) {
        return '<div class="sl-cop-sx"><span class="sl-eti">' + A.modulo + ' · Capitolo ' + A.n + '</span><div class="sl-cop-n">' + A.n + '</div><h1>' + md(s.titolo) + '</h1>' +
          (s.sotto ? '<p class="sl-cop-sotto">' + md(s.sotto) + '</p>' : '') +
          '<ol class="sl-indice">' + (s.indice || []).map(function (x) { return '<li><span>' + x[0] + '</span>' + x[1] + '</li>'; }).join('') + '</ol></div>' +
          (s.foto ? fotoHtml(s.foto, 'sl-cop-foto') : '');
      },
      sezione: function (s) {
        return '<div class="sl-sez-n"><span>' + s.num + '</span></div><div class="sl-sez-dx"><h2>' + md(s.titolo) + '</h2>' + (s.sotto ? '<p>' + md(s.sotto) + '</p>' : '') + '</div>' +
          (s.foto ? fotoHtml(s.foto, 'sl-sez-foto') : '<div class="sl-sez-icona">' + icona(s.icona || 'layers') + '</div>');
      },
      punti: function (s) {
        var l = '<ul class="sl-punti">' + s.punti.map(function (p) { return '<li class="pz">' + ic(p[0]) + '<span>' + md(p[1]) + '</span></li>'; }).join('') + '</ul>';
        if (s.nota) l += '<p class="sl-nota pz">' + icona('lightbulb') + '<span>' + md(s.nota) + '</span></p>';
        return testa(s) + '<div class="sl-corpo ' + (s.foto ? 'con-foto' : '') + '"><div>' + l + '</div>' + (s.foto ? fotoHtml(s.foto) : '') + '</div>';
      },
      tessere: function (s) {
        return testa(s) + '<div class="sl-corpo"><div class="sl-tessere n' + s.tessere.length + '">' + s.tessere.map(function (t) {
          return '<div class="sl-tessera pz">' + ic(t[0]) + '<b>' + md(t[1]) + '</b><span>' + md(t[2] || '') + '</span></div>'; }).join('') + '</div>' +
          (s.nota ? '<p class="sl-nota pz">' + icona('lightbulb') + '<span>' + md(s.nota) + '</span></p>' : '') + '</div>';
      },
      confronto: function (s) {
        function col(c, k) { return '<div class="sl-col pz ' + (c.tono || '') + '"><div class="sl-col-t">' + ic(c.icona) + '<b>' + md(c.titolo) + '</b></div><ul>' +
          c.righe.map(function (r) { var g = r[0] === '+' ? 'si' : r[0] === '-' ? 'no' : 'nn'; return '<li class="' + g + '">' + md(r.slice(1).trim()) + '</li>'; }).join('') + '</ul>' + (c.piede ? '<p class="sl-col-p">' + md(c.piede) + '</p>' : '') + '</div>'; }
        return testa(s) + '<div class="sl-corpo"><div class="sl-confronto">' + col(s.a, 0) + col(s.b, 1) + '</div>' + (s.verdetto ? '<p class="sl-verdetto pz">' + md(s.verdetto) + '</p>' : '') + '</div>';
      },
      anim: function (s) { return testa(s) + '<div class="sl-corpo sl-figura" data-clona="#' + s.id + '"></div>'; },
      schema: function (s) { return testa(s) + '<div class="sl-corpo sl-figura" data-clona="' + s.sel + '"></div>'; },
      widget: function (s) { return testa(s) + '<div class="sl-corpo sl-figura" data-clona="[data-widget=&quot;' + s.w + '&quot;]"></div>'; },
      foto: function (s) { return testa(s) + '<div class="sl-corpo"><div class="sl-galleria n' + s.foto.length + '">' + s.foto.map(function (f) { return fotoHtml(f); }).join('') + '</div></div>'; },
      storia: function (s) {
        return testa(s) + '<div class="sl-corpo sl-storia">' + (s.foto ? fotoHtml(s.foto) : '<div class="sl-storia-icona">' + icona(s.icona || 'history') + '</div>') + '<div><div class="sl-anno">' + s.anno + '</div><ul class="sl-punti piccoli">' +
          s.punti.map(function (p) { return '<li class="pz">' + ic(p[0]) + '<span>' + md(p[1]) + '</span></li>'; }).join('') + '</ul></div></div>';
      },
      formula: function (s) {
        return testa(s) + '<div class="sl-corpo sl-formula"><div class="sl-f">' + md(s.formula) + '</div>' + (s.righe ? '<div class="sl-f-righe">' + s.righe.map(function (r) {
          return '<div class="pz"><span>' + md(r[0]) + '</span>' + icona('arrow-right') + '<b>' + md(r[1]) + '</b></div>'; }).join('') + '</div>' : '') + '</div>';
      },
      tabella: function (s) {
        var car = s.righe.reduce(function (a, r) { return a + r.join(' ').length; }, 0), lunga = s.righe.some(function (r) { return String(r[r.length - 1]).length > 26; });
        return testa(s) + '<div class="sl-corpo"><table class="sl-tab' + (car > 620 ? ' fittissima' : (s.righe.length > 8 || car > 420 ? ' fitta' : '')) + (lunga ? ' lunga' : '') + '"><thead><tr>' + s.righe[0].map(function (c) { return '<th>' + md(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          s.righe.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      },
      domanda: function (s) { return '<div class="sl-dom">' + icona('message-circle-question') + '<span class="sl-eti">Domanda alla classe</span><p>' + md(s.testo) + '</p>' +
        (s.risposta ? '<div class="sl-dom-r pz">' + icona('circle-check') + '<span>' + md(s.risposta) + '</span></div>' : '') + '</div>'; },
      errore: function (s) {
        return testa({ _sez: s._sez, titolo: s.titolo || 'Trova l’errore' }) + '<div class="sl-corpo sl-err"><div class="sl-err-no">' + icona('message-circle-question') + icona('circle-x') + '<div><span class="e1">Che cosa c’è di sbagliato?</span><span class="e2">Sbagliato</span><p>' + md(s.no) + '</p></div></div>' +
          '<div class="sl-err-si pz">' + icona('circle-check') + '<div><span>Corretto</span><p>' + md(s.si) + '</p></div></div></div>';
      },
      ricorda: function (s) {
        return testa({ _sez: '', titolo: s.titolo || 'Ricorda' }) + '<div class="sl-corpo"><div class="sl-ricorda">' + s.punti.map(function (p) {
          return '<div class="pz">' + ic(p[0]) + '<span>' + md(p[1]) + '</span></div>'; }).join('') + '</div></div>';
      }
    };
    function adatta() {
      if (!aperta) return;
      var r = scena.getBoundingClientRect(), k = Math.min(r.width / 1280, r.height / 720);
      tela.style.transform = 'translate(-50%,-50%) scale(' + k + ')';
    }
    function mostra(dietro) {
      var s = S[i];
      tela.innerHTML = '<section class="sl tipo-' + s.tipo + '">' + R[s.tipo](s) +
        (s.tipo !== 'copertina' && s.tipo !== 'sezione' ? '<footer class="sl-piede"><span>' + A.modulo + ' · ' + A.n + '. ' + A.titolo + '</span><span>' + (i + 1) + ' / ' + S.length + '</span></footer>' : '') + '</section>';
      cur = { pz: [].slice.call(tela.querySelectorAll('.pz')), k: 0, av: null };
      if (dietro) { cur.pz.forEach(function (p) { p.classList.add('on'); }); cur.k = cur.pz.length; }
      var f = tela.querySelector('[data-clona]');
      if (f) {
        var c = clona(f.getAttribute('data-clona'));
        if (c) { f.appendChild(c); iconeInline(f); avviaTutto(f); cur.av = f.querySelector('.passi-com .tasto.primario'); }
      }
      iconeInline(tela);
      vaiIn.value = i + 1; tot.textContent = '/ ' + S.length;
      adatta();
    }
    function avanti() {
      if (cur && cur.k < cur.pz.length) { cur.pz[cur.k++].classList.add('on'); return; }
      if (cur && cur.av && !cur.av.disabled) { cur.av.click(); return; }
      if (i < S.length - 1) { i++; mostra(false); }
    }
    function indietro() {
      if (cur && cur.k > 0 && !cur.av) { cur.pz[--cur.k].classList.remove('on'); return; }
      if (i > 0) { i--; mostra(true); }
    }
    function salta(k) { k = Math.max(1, Math.min(S.length, parseInt(k, 10) || 0)); if (!k) return; i = k - 1; mostra(false); }
    vaiIn.addEventListener('keydown', function (e) { e.stopPropagation(); if (e.key === 'Enter') { salta(vaiIn.value); vaiIn.blur(); } else if (e.key === 'Escape') { vaiIn.value = i + 1; vaiIn.blur(); } });
    vaiIn.addEventListener('focus', function () { vaiIn.select(); });
    var cifre = '', tCifre;
    function apri() { i = 0; aperta = true; document.body.classList.add('presenta'); mostra(false); }
    function chiudi() { aperta = false; document.body.classList.remove('presenta'); tela.innerHTML = ''; }
    b.onclick = apri;
    aula.querySelector('#b-esci').onclick = chiudi;
    aula.querySelector('#b-ava').onclick = avanti;
    aula.querySelector('#b-ind').onclick = indietro;
    window.addEventListener('resize', adatta);
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (!aperta) { if ((e.key === 'p' || e.key === 'P') && tag !== 'input' && tag !== 'textarea' && tag !== 'select') apri(); return; }
      if (tag === 'input' || tag === 'select') return;
      if (/^[0-9]$/.test(e.key)) { cifre += e.key; vaiIn.value = cifre; clearTimeout(tCifre); tCifre = setTimeout(function () { cifre = ''; vaiIn.value = i + 1; }, 2500); return; }
      if (e.key === 'Enter' && cifre) { salta(cifre); cifre = ''; return; }
      if (e.key === 'Escape') chiudi();
      else if (e.key === 'Home') salta(1); else if (e.key === 'End') salta(S.length);
      else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); avanti(); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); indietro(); }
    });
    scena.addEventListener('click', function (e) {
      if (e.target.closest('.wid,.passi-anim,.tela,button,input,select,a,label')) return;
      avanti();
    });
  }

  /* ---------- foto accanto al testo: larghezza bilanciata con l'altezza del testo ---------- */
  // foto a lato e a margine: tengono le loro proporzioni; l'altezza segue quella del testo accanto (niente buchi, niente cornici)
  function bilanciaFoto() {
    var foto = document.querySelectorAll('.lezione .foto-lato, .lezione .foto-margine');
    if (window.innerWidth < 700) { [].forEach.call(foto, function (f) { f.style.width = ''; [].forEach.call(f.querySelectorAll('img'), function (im) { im.style.height = ''; im.style.width = ''; }); }); return; }
    [].forEach.call(foto, function (f) {
      var inBox = !!f.closest('.box'), mar = f.classList.contains('foto-margine');
      var imgs = [].slice.call(f.querySelectorAll('img')), rr = imgs.map(function (im) { return im.naturalWidth ? im.naturalHeight / im.naturalWidth : 0.75; });
      var multi = imgs.length > 1, minW = inBox ? 130 : 140, maxW = inBox ? 260 : (mar ? 300 : 330), minH = 110, maxH = inBox ? 240 : 340;
      if (f.classList.contains('testa')) {
        var h = f.nextElementSibling; while (h && !/^H[23]$/.test(h.tagName)) h = h.nextElementSibling;
        if (h) { var mt = parseFloat(getComputedStyle(f).marginTop) || 0; f.style.marginTop = Math.max(0, mt + h.getBoundingClientRect().top - f.getBoundingClientRect().top + 4) + 'px'; }
      }
      function imposta(H) {
        if (multi) { var tot = 0; imgs.forEach(function (im, k) { var w = H / rr[k]; im.style.height = Math.round(H) + 'px'; im.style.width = Math.round(w) + 'px'; im.parentNode.parentNode.style.width = Math.round(w) + 'px'; tot += w; });
          f.style.width = Math.round(tot + 8 * (imgs.length - 1)) + 'px'; }
        else { var w = Math.max(minW, Math.min(maxW, H / rr[0])); if (w * rr[0] > maxH) w = Math.max(90, maxH / rr[0]); f.style.width = Math.round(w) + 'px'; }
      }
      var H = 180;
      for (var k = 0; k < 6; k++) {
        imposta(H);
        var top = f.getBoundingClientRect().top, fondo = top, n = f.nextElementSibling;
        while (n) {
          if (n.classList.contains('foto-lato') || n.classList.contains('foto-margine')) break;
          var cs = getComputedStyle(n); if (cs.clear !== 'none' && cs.clear) break;
          fondo = Math.max(fondo, n.getBoundingClientRect().bottom); n = n.nextElementSibling;
        }
        var cap = multi ? 24 : ((f.querySelector('.foto-tit') || { getBoundingClientRect: function () { return { height: 0 }; } }).getBoundingClientRect().height + 6);
        var nH = Math.max(minH, Math.min(maxH, (fondo - top) - cap - 4));
        if (Math.abs(nH - H) < 2) break; H = (H + nH) / 2;
      }
      imposta(H);
    });
  }
  // indice del capitolo accanto al testo: «In questo capitolo», con il paragrafo in corso illuminato
  function indiceCapitolo() {
    var main = document.querySelector('main.lezione'); if (!main) return;
    var titoli = [].slice.call(main.querySelectorAll('h2[id]')); if (titoli.length < 2) return;
    // titoletti dei paragrafi (h3 nel flusso del sottocapitolo, non quelli dei riquadri), raggruppati sotto il loro h2
    var sotto = titoli.map(function () { return []; }), gi = -1;
    [].forEach.call(main.querySelectorAll('h2[id], .sez>h3'), function (h) {
      if (h.tagName === 'H2') { gi = titoli.indexOf(h); return; }
      if (gi < 0) return;
      if (!h.id) h.id = titoli[gi].id + '-' + (sotto[gi].length + 1);
      sotto[gi].push(h);
    });
    function nome(h) { var n = h.querySelector('.num'); return h.textContent.replace(n ? n.textContent : '', '').trim(); }
    var wrap = document.createElement('div'); wrap.className = 'lezione-wrap';
    main.parentNode.insertBefore(wrap, main);
    var aside = document.createElement('aside'); aside.className = 'indice-cap'; aside.setAttribute('aria-label', 'Paragrafi del capitolo');
    aside.innerHTML = '<p>In questo capitolo</p><ol>' + titoli.map(function (h, i) {
      var n = h.querySelector('.num');
      var sub = sotto[i].length ? '<ol class="sotto">' + sotto[i].map(function (s) { return '<li><a href="#' + s.id + '"><span class="n"></span><span class="t">' + nome(s) + '</span></a></li>'; }).join('') + '</ol>' : '';
      return '<li><a href="#' + h.id + '"><span class="n">' + (n ? n.textContent : '') + '</span><span class="t">' + nome(h) + '</span></a>' + sub + '</li>'; }).join('') + '</ol>';
    wrap.appendChild(aside); wrap.appendChild(main);
    var voci = [].slice.call(aside.querySelectorAll(':scope>ol>li'));
    function aggiorna() {
      var cur = -1; titoli.forEach(function (h, i) { if (h.getBoundingClientRect().top < 140) cur = i; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = titoli.length - 1;
      voci.forEach(function (li, i) {
        var a = li.firstElementChild;
        a.classList.toggle('fatto', i < cur); li.classList.toggle('aperto', i === cur);
        if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        var cs = -1; if (i === cur) sotto[i].forEach(function (s, k) { if (s.getBoundingClientRect().top < 140) cs = k; });
        [].forEach.call(li.querySelectorAll('ol.sotto a'), function (b, k) { if (k === cs) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
      });
    }
    var raf = 0; window.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(function () { raf = 0; aggiorna(); }); }, { passive: true });
    window.addEventListener('resize', aggiorna); aggiorna();
  }
  document.addEventListener('DOMContentLoaded', indiceCapitolo);

  // zoom delle foto: dopo 1 secondo fermi sopra, la foto si apre quasi a schermo intero (sempre la stessa grandezza)
  function zoomFoto() {
    var SEL = '.foto-margine img,.foto-lato img,.foto-grande img,.foto-coppia img,.sl-foto:not(.sl-cop-foto):not(.sl-sez-foto) img';
    var ov = document.createElement('div'); ov.id = 'zoom-foto'; ov.setAttribute('aria-hidden', 'true');
    ov.innerHTML = '<img alt=""><p></p>'; document.body.appendChild(ov);
    var zi = ov.querySelector('img'), zc = ov.querySelector('p'), timer = null, aperta = false;
    function apri(im) {
      zi.src = im.currentSrc || im.src; zi.alt = im.alt || '';
      var fig = im.closest('figure,.fl-uno'), cap = fig && fig.querySelector('figcaption,.foto-tit');
      zc.textContent = cap ? cap.textContent : ''; ov.classList.add('on'); aperta = true;
    }
    function chiudi() { ov.classList.remove('on'); aperta = false; }
    document.addEventListener('mouseover', function (e) {
      if (aperta || !e.target.closest) return;
      var im = e.target.closest(SEL); if (!im) return;
      clearTimeout(timer); timer = setTimeout(function () { apri(im); }, 1000);
      im.addEventListener('mouseleave', function via() { clearTimeout(timer); im.removeEventListener('mouseleave', via); });
    });
    ov.addEventListener('mousemove', function (e) {
      var r = zi.getBoundingClientRect(), k = zi.naturalWidth && zi.naturalHeight ? Math.min(r.width / zi.naturalWidth, r.height / zi.naturalHeight) : 1;
      var w = zi.naturalWidth * k, h = zi.naturalHeight * k, x0 = r.left + (r.width - w) / 2, y0 = r.top + (r.height - h) / 2;
      if (e.clientX < x0 - 20 || e.clientX > x0 + w + 20 || e.clientY < y0 - 20 || e.clientY > y0 + h + 20) chiudi();
    });
    ov.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); chiudi(); });
    document.addEventListener('keydown', function (e) { if (aperta && e.key === 'Escape') { e.stopImmediatePropagation(); e.preventDefault(); chiudi(); } }, true);
    window.addEventListener('scroll', function () { if (aperta) chiudi(); }, { passive: true });
  }
  document.addEventListener('DOMContentLoaded', zoomFoto);

  var _bt; window.addEventListener('resize', function () { clearTimeout(_bt); _bt = setTimeout(bilanciaFoto, 150); });
  window.addEventListener('load', bilanciaFoto);
  document.addEventListener('DOMContentLoaded', function () { [].forEach.call(document.querySelectorAll('.lezione .foto-lato img, .lezione .foto-margine img'), function (im) { if (!im.complete) im.addEventListener('load', function () { clearTimeout(_bt); _bt = setTimeout(bilanciaFoto, 100); }); }); });

  document.addEventListener('DOMContentLoaded', function () {
    costruisciPagina(); iconeInline(document); avviaTutto(document); presentazione(); bilanciaFoto(); if (document.fonts) document.fonts.ready.then(bilanciaFoto);
  });
})();

/* Video YouTube: da file locale YouTube rifiuta l'incorporamento (errore 153), quindi
   l'anteprima apre il video su YouTube; da un sito vero lo riproduce nella pagina. */
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a.video[data-yt]');
  if (!a || !/^https?:$/.test(location.protocol)) return;
  e.preventDefault();
  var f = document.createElement('iframe');
  f.src = 'https://www.youtube-nocookie.com/embed/' + a.getAttribute('data-yt') + '?autoplay=1';
  f.allow = 'autoplay; fullscreen'; f.referrerPolicy = 'strict-origin-when-cross-origin'; f.title = 'Video';
  a.innerHTML = ''; a.appendChild(f); a.removeAttribute('href');
});
