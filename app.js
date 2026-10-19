const STORAGE_KEY = "pole-uzhasov-v1";
const THEME_KEY = "pole-uzhasov-theme";
const TITLE = "ПОЛЕ УЖАСОВ";
const REVEAL_LABEL = "ОТКРЫТЬ ВСЁ";
const NEW_GAME_LABEL = "НОВАЯ ИГРА";

const THEMES = [
  {
    id: "blood",
    moon: '<circle cx="42" cy="50" r="30" fill="#e1062c"/><circle cx="60" cy="44" r="26" fill="#12060a"/><circle cx="26" cy="42" r="4" fill="#8d1020"/><circle cx="24" cy="41" r="1.4" fill="#d7dee6"/><circle cx="32" cy="58" r="3" fill="#8d1020"/><circle cx="22" cy="64" r="2.2" fill="#8d1020"/><circle cx="14" cy="16" r="1.3" fill="#d7dee6"/><circle cx="84" cy="22" r="1.2" fill="#d7dee6"/><circle cx="88" cy="74" r="1.4" fill="#d7dee6"/>',
    icons: [
      '<circle cx="42" cy="50" r="30" fill="#e1062c"/><circle cx="60" cy="44" r="26" fill="#12060a"/><circle cx="26" cy="42" r="4" fill="#8d1020"/><circle cx="24" cy="41" r="1.4" fill="#d7dee6"/><circle cx="32" cy="58" r="3" fill="#8d1020"/><circle cx="22" cy="64" r="2.2" fill="#8d1020"/><circle cx="14" cy="16" r="1.3" fill="#d7dee6"/><circle cx="84" cy="22" r="1.2" fill="#d7dee6"/><circle cx="88" cy="74" r="1.4" fill="#d7dee6"/>',
      '<rect x="28" y="82" width="44" height="6" rx="2" fill="#d7dee6"/><rect x="47" y="62" width="6" height="20" fill="#d7dee6"/><rect x="16" y="58" width="68" height="6" rx="2" fill="#d7dee6"/><rect x="22" y="36" width="8" height="22" rx="1" fill="#e8eef2"/><rect x="46" y="24" width="8" height="34" rx="1" fill="#e8eef2"/><rect x="70" y="36" width="8" height="22" rx="1" fill="#e8eef2"/><path fill="#e1062c" d="M26 36c3-8 1-12 0-16-2 4-3 8 0 16zM50 24c3-8 1-12 0-16-2 4-4 8 0 16zM74 36c3-8 1-12 0-16-2 4-3 8 0 16z"/>',
      '<path fill="#241018" d="M50 62C46 54 44 48 44 44 30 34 14 30 6 42 16 40 22 50 18 56 10 62 12 74 24 68 20 78 34 74 42 80 40 70 46 64 50 66Z"/><path fill="#241018" transform="translate(100 0) scale(-1 1)" d="M50 62C46 54 44 48 44 44 30 34 14 30 6 42 16 40 22 50 18 56 10 62 12 74 24 68 20 78 34 74 42 80 40 70 46 64 50 66Z"/><circle cx="50" cy="46" r="8" fill="#241018"/><polygon fill="#241018" points="42,44 48,26 52,44"/><polygon fill="#241018" points="58,44 52,26 48,44"/><circle cx="47" cy="46" r="1.5" fill="#e1062c"/><circle cx="53" cy="46" r="1.5" fill="#e1062c"/>',
      '<path fill="#d7dee6" d="M28 20h44l-6 26c-2 12-8 18-16 18s-14-6-16-18z"/><path fill="#e1062c" d="M36 32h28l-4 14c-1 8-6 12-10 12s-9-4-10-12z"/><ellipse cx="50" cy="32" rx="14" ry="4" fill="#ff4d62"/><ellipse cx="50" cy="20" rx="22" ry="5" fill="#d7dee6"/><ellipse cx="50" cy="20" rx="15" ry="3" fill="#e1062c"/><rect x="46" y="64" width="8" height="14" fill="#d7dee6"/><ellipse cx="50" cy="80" rx="16" ry="5" fill="#d7dee6"/><path d="M28 28c-12 0-14 16-2 18" fill="none" stroke="#d7dee6" stroke-width="3"/><path d="M72 28c12 0 14 16 2 18" fill="none" stroke="#d7dee6" stroke-width="3"/>',
      '<polygon fill="#d7dee6" points="50,8 59,46 50,52 41,46"/><path fill="#e1062c" d="M50 28l5 16-5 4z"/><path fill="#e1062c" d="M57 44c1 7 4 12 3 16-3-2-4-8-3-16z"/><circle cx="62" cy="66" r="2.5" fill="#e1062c"/><circle cx="66" cy="76" r="1.6" fill="#e1062c"/><rect x="30" y="48" width="40" height="7" rx="2" fill="#d7dee6"/><rect x="46" y="55" width="8" height="16" rx="1" fill="#4a0e18"/><circle cx="50" cy="76" r="5" fill="#d7dee6"/>',
      '<ellipse cx="32" cy="16" rx="7" ry="4" fill="none" stroke="#d7dee6" stroke-width="2"/><ellipse cx="50" cy="13" rx="7" ry="4" fill="none" stroke="#d7dee6" stroke-width="2"/><ellipse cx="68" cy="16" rx="7" ry="4" fill="none" stroke="#d7dee6" stroke-width="2"/><rect x="46" y="18" width="8" height="10" rx="1" fill="#d7dee6"/><ellipse cx="50" cy="58" rx="18" ry="24" fill="#d7dee6"/><ellipse cx="50" cy="58" rx="12" ry="17" fill="#2a0a10"/><circle cx="50" cy="56" r="6" fill="#e1062c"/><circle cx="48" cy="54" r="1.6" fill="#ffd0d6"/>',
      '<polygon fill="#2a0a10" stroke="#d7dee6" stroke-width="2" points="34,14 66,14 78,32 78,88 22,88 22,32"/><path stroke="#d7dee6" stroke-width="1.6" fill="none" d="M50 28v36M40 46h20"/><circle cx="50" cy="74" r="4" fill="none" stroke="#e1062c" stroke-width="2"/>',
      '<polygon fill="#d7dee6" points="30,16 44,16 39,78"/><polygon fill="#d7dee6" points="56,16 70,16 63,78"/><circle cx="39" cy="80" r="2.4" fill="#e1062c"/><circle cx="63" cy="74" r="1.6" fill="#e1062c"/>',
      '<path fill="#4a0e18" stroke="#d7dee6" stroke-width="2" d="M28 88V42C28 24 38 12 50 12s22 12 22 30v46z"/><path fill="#e1062c" d="M38 84V48c0-12 5-20 12-20s12 8 12 20v36z"/><path stroke="#d7dee6" stroke-width="1.5" fill="none" d="M50 32v52M38 58h24M50 20c-8 8-10 16-10 28M50 20c8 8 10 16 10 28"/><rect x="22" y="86" width="56" height="5" fill="#d7dee6"/>',
    ],
  },
  {
    id: "swamp",
    moon: '<circle cx="42" cy="52" r="28" fill="#d6ff3c"/><circle cx="58" cy="46" r="24" fill="#04110d"/><circle cx="16" cy="20" r="1.6" fill="#d6ff3c"/><circle cx="82" cy="28" r="1.3" fill="#00b86b"/><circle cx="86" cy="70" r="1.5" fill="#d6ff3c"/><circle cx="20" cy="78" r="1.2" fill="#00b86b"/><path d="M70 18l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill="#d6ff3c"/>',
    icons: [
      '<polygon fill="#067a48" points="24,30 12,64 30,40"/><polygon fill="#d6ff3c" points="20,24 6,46 28,34"/><polygon fill="#067a48" points="76,30 88,64 70,40"/><polygon fill="#d6ff3c" points="80,24 94,46 72,34"/><path fill="#8a6232" d="M30 24h40c2 0 6 10 6 18v16c0 22-10 34-26 34S24 80 24 58V42c0-8 2-18 6-18z"/><path fill="#00b86b" d="M26 46h48v8H26z"/><rect x="32" y="44" width="14" height="7" rx="1" fill="#04110d"/><rect x="54" y="44" width="14" height="7" rx="1" fill="#04110d"/><path fill="#5c3b16" d="M46 52h8l-2 10h-4z"/><rect x="38" y="70" width="24" height="8" rx="1" fill="#04110d"/><rect x="41" y="70" width="3" height="5" fill="#e7fff3"/><rect x="48.5" y="70" width="3" height="5" fill="#e7fff3"/><rect x="56" y="70" width="3" height="5" fill="#e7fff3"/><polygon fill="#d6ff3c" points="50,28 54,34 50,40 46,34"/>',
      '<g transform="rotate(-36 50 58)"><circle cx="50" cy="64" r="24" fill="#d8f56a"/><ellipse cx="50" cy="74" rx="20" ry="12" fill="#00b86b"/><circle cx="44" cy="72" r="2.2" fill="#d6ff3c"/><circle cx="56" cy="78" r="2.6" fill="#d6ff3c"/><rect x="43" y="30" width="14" height="16" rx="2" fill="#d8f56a"/><rect x="45" y="18" width="10" height="14" rx="2" fill="#5c3b16"/></g>',
      '<path fill="#143628" d="M18 42h64c0 24-12 36-32 36S18 66 18 42z"/><ellipse cx="50" cy="42" rx="32" ry="9" fill="#00b86b"/><ellipse cx="50" cy="42" rx="20" ry="5" fill="#04110d"/><circle cx="40" cy="30" r="3" fill="#d6ff3c"/><circle cx="52" cy="24" r="3.4" fill="#d6ff3c"/><circle cx="62" cy="32" r="2.4" fill="#d6ff3c"/><path d="M16 48c-10 2-12 12-4 14" fill="none" stroke="#d6ff3c" stroke-width="3"/><path d="M84 48c10 2 12 12 4 14" fill="none" stroke="#d6ff3c" stroke-width="3"/><rect x="30" y="76" width="5" height="10" fill="#5c3b16"/><rect x="65" y="76" width="5" height="10" fill="#5c3b16"/>',
      '<path d="M34 28 22 8M28 22 14 16M30 16 20 4" fill="none" stroke="#0c2414" stroke-width="3" stroke-linecap="round"/><path d="M66 28 78 8M72 22 86 16M70 16 80 4" fill="none" stroke="#0c2414" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="52" r="20" fill="#3d5c34"/><path fill="#1a3a22" d="M34 58c6 14 26 14 32 0-8 8-24 8-32 0z"/><circle cx="42" cy="50" r="3" fill="#d6ff3c"/><circle cx="58" cy="50" r="3" fill="#d6ff3c"/><path fill="#0c2414" d="M46 58h8l-2 5h-4z"/><path fill="#00b86b" d="M32 34c6-6 10-4 12 0-6 2-10 2-12 0zM68 34c-6-6-10-4-12 0 6 2 10 2 12 0z"/>',
      '<rect x="66" y="56" width="6" height="22" rx="2" fill="#e7fff3"/><ellipse cx="69" cy="54" rx="12" ry="7" fill="#067a48"/><path stroke="#04110d" stroke-width="1.2" d="M60 55v4M65 56v5M70 56v5M75 55v4"/><rect x="34" y="44" width="8" height="36" rx="2" fill="#e7fff3"/><ellipse cx="38" cy="42" rx="20" ry="11" fill="#d6ff3c"/><circle cx="24" cy="42" r="2" fill="#04110d"/><circle cx="38" cy="34" r="2.2" fill="#04110d"/><circle cx="52" cy="40" r="1.7" fill="#04110d"/><path stroke="#067a48" stroke-width="1.3" d="M22 46v5M28 48v6M34 49v6M40 49v6M46 48v6M52 46v5"/>',
      '<path stroke="#143628" stroke-width="2" d="M8 78c12-6 20-6 28 0s16 6 28 0 16 6 28 0"/><path stroke="#00b86b" stroke-width="2.4" d="M28 76V34M50 76V16M72 76V38"/><ellipse cx="28" cy="26" rx="6" ry="12" fill="#3d5c34"/><ellipse cx="50" cy="10" rx="6" ry="12" fill="#d6ff3c"/><ellipse cx="72" cy="30" rx="6" ry="12" fill="#067a48"/>',
      '<path d="M58 92V34C58 16 34 18 36 8" fill="none" stroke="#5c3b16" stroke-width="6" stroke-linecap="round"/><path d="M36 8C24 2 20 18 32 22" fill="none" stroke="#5c3b16" stroke-width="6" stroke-linecap="round"/><circle cx="28" cy="14" r="7" fill="#d6ff3c"/><circle cx="26" cy="12" r="2" fill="#e7fff3"/><path stroke="#00b86b" stroke-width="2.4" stroke-linecap="round" d="M52 50h12M52 58h12M52 66h12"/>',
      '<ellipse cx="28" cy="70" rx="16" ry="7" fill="#067a48" transform="rotate(-24 28 70)"/><ellipse cx="72" cy="70" rx="16" ry="7" fill="#067a48" transform="rotate(24 72 70)"/><ellipse cx="50" cy="58" rx="10" ry="22" fill="#d6ff3c"/><ellipse cx="34" cy="62" rx="10" ry="20" fill="#8ee05a" transform="rotate(-28 34 62)"/><ellipse cx="66" cy="62" rx="10" ry="20" fill="#8ee05a" transform="rotate(28 66 62)"/><ellipse cx="40" cy="66" rx="8" ry="16" fill="#00b86b" transform="rotate(-14 40 66)"/><ellipse cx="60" cy="66" rx="8" ry="16" fill="#00b86b" transform="rotate(14 60 66)"/><circle cx="50" cy="70" r="6" fill="#e7fff3"/>',
      '<path fill="#3d5c34" d="M12 20h34c6 6 6 48 0 58H12z"/><path fill="#067a48" d="M88 20H54c-6 6-6 48 0 58h34z"/><rect x="46" y="22" width="8" height="54" fill="#d6ff3c"/><path stroke="#d6ff3c" stroke-width="1.5" d="M22 34h18M22 42h14M60 34h18M64 42h14"/><circle cx="50" cy="48" r="4" fill="#04110d"/><rect x="44" y="70" width="12" height="6" rx="1" fill="#5c3b16"/>',
      '<circle cx="42" cy="52" r="28" fill="#d6ff3c"/><circle cx="58" cy="46" r="24" fill="#04110d"/><circle cx="16" cy="20" r="1.6" fill="#d6ff3c"/><circle cx="82" cy="28" r="1.3" fill="#00b86b"/><circle cx="86" cy="70" r="1.5" fill="#d6ff3c"/><circle cx="20" cy="78" r="1.2" fill="#00b86b"/><path d="M70 18l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill="#d6ff3c"/>',
    ],
  },
  {
    id: "mystic",
    moon: '<circle cx="42" cy="52" r="28" fill="#b026e0"/><circle cx="58" cy="46" r="24" fill="#100616"/><circle cx="18" cy="22" r="1.5" fill="#ffb020"/><circle cx="84" cy="26" r="1.2" fill="#f6e6ff"/><circle cx="86" cy="72" r="1.6" fill="#ffb020"/><circle cx="16" cy="74" r="1.1" fill="#b026e0"/><circle cx="30" cy="40" r="3" fill="#4e0d7a"/><circle cx="28" cy="39" r="1" fill="#f6e6ff"/>',
    icons: [
      '<path fill="#f6e6ff" d="M8 50C24 28 40 20 50 20s26 8 42 30c-16 22-32 30-42 30S24 72 8 50z"/><path fill="none" stroke="#b026e0" stroke-width="2" d="M8 50C24 28 40 20 50 20s26 8 42 30c-16 22-32 30-42 30S24 72 8 50z"/><circle cx="50" cy="50" r="14" fill="#b026e0"/><circle cx="50" cy="50" r="8" fill="#ffb020"/><circle cx="50" cy="50" r="4" fill="#100616"/><circle cx="54" cy="46" r="2" fill="#fff6e8"/>',
      '<circle cx="34" cy="46" r="18" fill="#ffb020"/><circle cx="34" cy="46" r="9" fill="#100616"/><circle cx="34" cy="46" r="4" fill="#b026e0"/><rect x="50" y="41" width="36" height="10" rx="2" fill="#ffb020"/><rect x="70" y="51" width="7" height="14" fill="#ffb020"/><rect x="82" y="51" width="7" height="9" fill="#ffb020"/>',
      '<ellipse cx="50" cy="40" rx="24" ry="22" fill="#f6e6ff"/><ellipse cx="40" cy="40" rx="7" ry="8" fill="#100616"/><ellipse cx="60" cy="40" rx="7" ry="8" fill="#100616"/><polygon fill="#100616" points="50,46 45,58 55,58"/><path fill="#f6e6ff" d="M32 60h36v12H32z"/><path stroke="#100616" stroke-width="1.4" d="M38 60v12M44 60v12M50 60v12M56 60v12M62 60v12"/><path d="M40 24c4 5 16 5 20 0" fill="none" stroke="#4e0d7a" stroke-width="1.4"/>',
      '<circle cx="50" cy="42" r="22" fill="#4e0d7a" stroke="#b026e0" stroke-width="2"/><polygon fill="#ffb020" points="50,28 53,38 64,38 55,44 58,54 50,48 42,54 45,44 36,38 47,38"/><circle cx="44" cy="34" r="3" fill="#f6e6ff"/><rect x="42" y="64" width="16" height="6" fill="#ffb020"/><polygon fill="#ffb020" points="34,70 66,70 58,82 42,82"/>',
      '<circle cx="50" cy="50" r="36" fill="none" stroke="#b026e0" stroke-width="3"/><circle cx="50" cy="50" r="28" fill="none" stroke="#ffb020" stroke-width="1.4"/><polygon fill="none" stroke="#b026e0" stroke-width="2" points="50,26 66,58 34,58"/><polygon fill="none" stroke="#ffb020" stroke-width="2" points="50,74 34,42 66,42"/><circle cx="50" cy="50" r="3" fill="#f6e6ff"/><path stroke="#ffb020" stroke-width="2" stroke-linecap="round" d="M50 8v8M50 84v8M8 50h8M84 50h8M20 20l6 6M80 20l-6 6M20 80l6-6M80 80l-6-6"/>',
      '<rect x="34" y="48" width="32" height="28" rx="8" fill="#f6e6ff"/><rect x="36" y="22" width="7" height="32" rx="3" fill="#f6e6ff"/><rect x="45" y="14" width="7" height="40" rx="3" fill="#f6e6ff"/><rect x="54" y="20" width="7" height="34" rx="3" fill="#f6e6ff"/><rect x="63" y="28" width="7" height="26" rx="3" fill="#f6e6ff"/><rect x="24" y="40" width="8" height="22" rx="3" transform="rotate(-30 28 50)" fill="#f6e6ff"/><circle cx="39" cy="24" r="3" fill="#100616"/><circle cx="48" cy="16" r="3" fill="#100616"/><circle cx="57" cy="22" r="3" fill="#100616"/><circle cx="66" cy="30" r="3" fill="#100616"/>',
      '<rect x="30" y="12" width="40" height="6" rx="1" fill="#ffb020"/><rect x="30" y="82" width="40" height="6" rx="1" fill="#ffb020"/><path fill="none" stroke="#ffb020" stroke-width="2" d="M34 18 66 18 52 48 66 82 34 82 48 48Z"/><polygon fill="#ffb020" points="42,82 58,82 51,64"/><circle cx="50" cy="52" r="1.3" fill="#ffb020"/><circle cx="50" cy="58" r="1.1" fill="#ffb020"/>',
      '<rect x="24" y="16" width="54" height="68" rx="3" fill="#3a1860"/><rect x="24" y="16" width="10" height="68" fill="#ffb020"/><rect x="70" y="20" width="6" height="60" fill="#f6e6ff"/><circle cx="50" cy="46" r="14" fill="none" stroke="#ffb020" stroke-width="1.6"/><circle cx="50" cy="46" r="7" fill="#f6e6ff"/><circle cx="53" cy="44" r="6" fill="#3a1860"/><rect x="44" y="66" width="16" height="6" rx="1" fill="#ffb020"/>',
      '<path fill="#2a1a32" stroke="#b026e0" stroke-width="2" d="M30 86V48c0-16 8-28 20-28s20 12 20 28v38z"/><path stroke="#ffb020" stroke-width="2" d="M50 36v22M42 47h16"/><path fill="#067a48" d="M16 86c10-12 16-8 22 0 6-12 16-12 24 0 6-8 14-8 22 0v8H16z"/><circle cx="78" cy="20" r="6" fill="#f6e6ff"/><circle cx="84" cy="16" r="5" fill="#100616"/>',
      '<circle cx="42" cy="52" r="28" fill="#b026e0"/><circle cx="58" cy="46" r="24" fill="#100616"/><circle cx="18" cy="22" r="1.5" fill="#ffb020"/><circle cx="84" cy="26" r="1.2" fill="#f6e6ff"/><circle cx="86" cy="72" r="1.6" fill="#ffb020"/><circle cx="16" cy="74" r="1.1" fill="#b026e0"/><circle cx="30" cy="40" r="3" fill="#4e0d7a"/><circle cx="28" cy="39" r="1" fill="#f6e6ff"/>',
    ],
  },
];

const board = document.querySelector("#board");

let state = loadState() ?? freshState();
let theme = loadTheme();
let motifSeed = randomSeed();
let metricsCache = null;

function freshState() {
  return { phrases: ["", "", ""], step: 0, guessed: [], revealed: false };
}

function randomSeed() {
  return Math.floor(Math.random() * 0x100000000);
}

function currentTheme() {
  return THEMES.find((item) => item.id === theme) ?? THEMES[0];
}

function normalizeLetter(char) {
  return char.toLocaleUpperCase("ru-RU");
}

function isLetter(char) {
  return /^\p{L}$/u.test(char);
}

function cellsFor(phrase) {
  const items = [];
  for (const char of phrase) {
    if (/\s/u.test(char)) {
      if (items.length && items[items.length - 1].type !== "gap") items.push({ type: "gap" });
      continue;
    }
    if (isLetter(char)) items.push({ type: "letter", value: normalizeLetter(char) });
    else items.push({ type: "symbol", value: char });
  }
  return items;
}

function letterIsHit(letter) {
  return state.phrases.some((phrase) =>
    cellsFor(phrase).some((item) => item.type === "letter" && item.value === letter)
  );
}

function allLettersOpen() {
  if (state.step < 3 || state.revealed) return state.step === 3 && state.revealed;
  const letters = new Set();
  for (const phrase of state.phrases) {
    for (const item of cellsFor(phrase)) {
      if (item.type === "letter") letters.add(item.value);
    }
  }
  if (!letters.size) return false;
  return [...letters].every((letter) => state.guessed.includes(letter));
}

function loadState() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!data || !Array.isArray(data.phrases) || data.phrases.length !== 3) return null;
    if (![0, 1, 2, 3].includes(data.step)) return null;
    return {
      phrases: data.phrases.map((phrase) => String(phrase)),
      step: data.step,
      guessed: Array.isArray(data.guessed)
        ? data.guessed.map((letter) => normalizeLetter(String(letter))).filter(isLetter)
        : [],
      revealed: Boolean(data.revealed),
    };
  } catch {
    return null;
  }
}

function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  return THEMES.some((item) => item.id === saved) ? saved : "blood";
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}

function saveTheme() {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    return;
  }
}

function metrics() {
  const gap = 8;
  const pad = 18;
  const availW = window.innerWidth - pad * 2;
  const availH = window.innerHeight - pad * 2;
  const minCols = 18;
  const cellFromW = Math.floor((availW - gap * (minCols - 1)) / minCols);
  const rowsGuess = Math.max(11, Math.floor((availH + gap) / (cellFromW + gap)));
  const cellFromH = Math.floor((availH - gap * (rowsGuess - 1)) / rowsGuess);
  const cell = Math.max(28, Math.min(cellFromW, cellFromH));
  const cols = Math.floor((availW + gap) / (cell + gap));
  const rows = Math.floor((availH + gap) / (cell + gap));
  return { cols, rows, cell, gap };
}

function wordRowsFor(rows) {
  const first = 3;
  const last = Math.max(first + 2, rows - 4);
  const middle = Math.round((first + last) / 2);
  return [first, middle, last];
}

function motifElement(markup) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("motif");
  svg.innerHTML = markup;
  return svg;
}

function randomUnit(seed) {
  let value = seed + 0x6d2b79f5;
  value = Math.imul(value ^ (value >>> 15), value | 1);
  value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
  return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
}

function decorate(map, cols, rows, wordRows) {
  const blockedRows = new Set([1, rows - 2, rows - 1, ...wordRows]);
  const free = [];
  for (let row = 0; row < rows; row += 1) {
    if (blockedRows.has(row)) continue;
    for (let col = 0; col < cols; col += 1) {
      if (row === 0 && col === 0) continue;
      if (!map.has(`${row},${col}`)) free.push([row, col]);
    }
  }
  let seed = motifSeed >>> 0;
  for (let index = free.length - 1; index > 0; index -= 1) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const swap = Math.floor(randomUnit(seed) * (index + 1));
    [free[index], free[swap]] = [free[swap], free[index]];
  }
  currentTheme().icons.forEach((markup, index) => {
    const slot = free[index];
    if (!slot) return;
    map.set(`${slot[0]},${slot[1]}`, { kind: "empty", icon: markup });
  });
}

function placePhrase(map, row, phrase, cols, centered) {
  const items = cellsFor(phrase);
  let col = centered ? Math.max(0, Math.floor((cols - items.length) / 2)) : cols >= 20 ? 2 : 1;
  for (const item of items) {
    if (col >= cols) break;
    if (item.type === "gap") {
      col += 1;
      continue;
    }
    if (item.type === "letter") {
      const open = state.step === 3 && (state.revealed || state.guessed.includes(item.value));
      map.set(`${row},${col}`, open ? { kind: "open", char: item.value } : { kind: "secret" });
    } else {
      map.set(`${row},${col}`, { kind: "symbol", char: item.value });
    }
    col += 1;
  }
  return col;
}

function render() {
  document.body.dataset.theme = theme;
  const { cols, rows, cell, gap } = metrics();
  metricsCache = { cols, rows, cell, gap };
  const words = wordRowsFor(rows);
  const map = new Map();
  const finished = allLettersOpen();
  const actionLabel = finished ? NEW_GAME_LABEL : REVEAL_LABEL;
  const actionStart = Math.max(0, Math.floor((cols - actionLabel.length) / 2));

  const titleStart = Math.max(0, Math.floor((cols - TITLE.length) / 2));
  [...TITLE].forEach((char, index) => {
    if (char === " ") return;
    map.set(`1,${titleStart + index}`, { kind: "title", char });
  });

  for (let index = 0; index < 3; index += 1) {
    if (index > state.step) continue;
    const nextCol = placePhrase(map, words[index], state.phrases[index], cols, state.step === 3);
    if (index === state.step && state.step < 3 && nextCol < cols) {
      map.set(`${words[index]},${nextCol}`, { kind: "caret" });
    }
  }

  const usedSlots = [];
  for (let col = 0; col < cols; col += 1) usedSlots.push([rows - 2, col]);
  const reservedFrom = Math.max(0, actionStart - 1);
  const reservedTo = Math.min(cols, actionStart + actionLabel.length + 1);
  for (let col = 0; col < cols; col += 1) {
    if (col >= reservedFrom && col < reservedTo) continue;
    usedSlots.push([rows - 1, col]);
  }
  state.guessed.forEach((letter, index) => {
    const slot = usedSlots[index];
    if (!slot) return;
    map.set(`${slot[0]},${slot[1]}`, {
      kind: letterIsHit(letter) ? "hit" : "miss",
      char: letter,
    });
  });

  let actionCol = actionStart;
  for (const char of actionLabel) {
    if (char !== " ") map.set(`${rows - 1},${actionCol}`, { kind: "reveal", char });
    actionCol += 1;
  }

  decorate(map, cols, rows, words);

  board.style.setProperty("--cell", `${cell}px`);
  board.style.gridTemplateColumns = `repeat(${cols}, ${cell}px)`;
  board.style.gridTemplateRows = `repeat(${rows}, ${cell}px)`;
  board.style.gap = `${gap}px`;
  board.replaceChildren();

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (row === 0 && col === 0) continue;
      const spec = map.get(`${row},${col}`) ?? { kind: "empty" };
      const element = document.createElement("div");
      element.className = `cell ${spec.kind}`;
      element.style.gridColumn = String(col + 1);
      element.style.gridRow = String(row + 1);
      if (spec.char) element.textContent = spec.char;
      if (spec.icon) element.append(motifElement(spec.icon));
      board.append(element);
    }
  }

  const styleHit = document.createElement("button");
  styleHit.type = "button";
  styleHit.className = "style-hit";
  styleHit.setAttribute("aria-label", "Сменить стиль");
  styleHit.style.gridColumn = "1";
  styleHit.style.gridRow = "1";
  styleHit.append(motifElement(currentTheme().moon));
  board.append(styleHit);

  const hit = document.createElement("button");
  hit.type = "button";
  hit.className = "reveal-hit";
  hit.setAttribute("aria-label", finished ? "Новая игра" : "Открыть всё");
  hit.disabled = state.step < 3;
  hit.style.gridColumn = `${actionStart + 1} / span ${actionLabel.length}`;
  hit.style.gridRow = String(rows);
  board.append(hit);
}

function typeChar(char) {
  const current = state.phrases[state.step];
  if (/\s/u.test(char)) {
    if (!current.trim() || /\s$/u.test(current)) return;
  }
  const next = current + char;
  const room = metricsCache.cols - (metricsCache.cols >= 20 ? 3 : 2);
  if (cellsFor(next).length > room) return;
  state.phrases[state.step] = next;
  saveState();
  render();
}

function backspace() {
  const current = state.phrases[state.step];
  if (current) {
    state.phrases[state.step] = [...current].slice(0, -1).join("");
  } else if (state.step > 0) {
    state.step -= 1;
  } else {
    return;
  }
  saveState();
  render();
}

function commit() {
  const cleaned = state.phrases[state.step].trim().replace(/\s+/gu, " ");
  if (!cellsFor(cleaned).some((item) => item.type === "letter")) return;
  state.phrases[state.step] = cleaned;
  state.step += 1;
  saveState();
  render();
}

function guess(raw) {
  const letter = normalizeLetter(raw);
  if (!isLetter(letter) || state.guessed.includes(letter)) return;
  state.guessed.push(letter);
  saveState();
  render();
}

function revealAll() {
  if (state.step < 3 || allLettersOpen()) return;
  state.revealed = true;
  saveState();
  render();
}

function resetGame() {
  state = freshState();
  motifSeed = randomSeed();
  saveState();
  render();
}

function cycleTheme() {
  const index = THEMES.findIndex((item) => item.id === theme);
  theme = THEMES[(index + 1) % THEMES.length].id;
  saveTheme();
  render();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace" && event.ctrlKey && event.shiftKey) {
    event.preventDefault();
    resetGame();
    return;
  }
  if (event.altKey || event.metaKey || event.ctrlKey) return;
  if (event.key === " ") event.preventDefault();

  if (state.step < 3) {
    if (event.key === "Enter") {
      event.preventDefault();
      commit();
      return;
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      backspace();
      return;
    }
    if ([...event.key].length !== 1) return;
    event.preventDefault();
    typeChar(event.key);
    return;
  }

  if ([...event.key].length === 1 && isLetter(event.key)) {
    event.preventDefault();
    guess(event.key);
  }
});

board.addEventListener("click", (event) => {
  if (event.target.closest(".style-hit")) {
    cycleTheme();
    return;
  }
  if (!event.target.closest(".reveal-hit")) return;
  if (allLettersOpen()) resetGame();
  else revealAll();
});

window.addEventListener("resize", () => render());

render();
