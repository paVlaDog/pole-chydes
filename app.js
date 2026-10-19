const STORAGE_KEY = "pole-uzhasov-v1";
const TITLE = "ПОЛЕ УЖАСОВ";
const REVEAL_LABEL = "ОТКРЫТЬ ВСЁ";

const MOTIFS = {
  moon: '<path d="M14.5 3.5a6.8 6.8 0 1 0 6 10.2 5.4 5.4 0 0 1-6-10.2z"/>',
  candle: '<path d="M12 8.4c1.1-1.7.2-3.2 0-4.4-.5 1.3-1.3 2.7 0 4.4z"/><path d="M12 8.6v7"/><path d="M9 15.6h6V20H9z"/>',
  key: '<circle cx="8" cy="12" r="2.4"/><path d="M10.3 12H20"/><path d="M16.8 12v2.3"/><path d="M19.1 12v1.6"/>',
  eye: '<path d="M3.5 12S7 7.2 12 7.2 20.5 12 20.5 12 17 16.8 12 16.8 3.5 12 3.5 12z"/><circle cx="12" cy="12" r="1.7"/>',
  moth: '<path d="M12 8v8"/><path d="M12 11c-4-5-8-2-7 1s5 2 7 0"/><path d="M12 11c4-5 8-2 7 1s-5 2-7 0"/>',
  bat: '<path d="M12 13.2c-.6-1.6-2.4-2.6-5.2-2 1.6.2 2.6 1.6 2.8 2.6-1.7.7-3.4.2-4.4-.8 1.5 2.5 4.2 2.6 6.8.9 2.6 1.7 5.3 1.6 6.8-.9-1 1-2.7 1.5-4.4.8.2-1 1.2-2.4 2.8-2.6-2.8-.6-4.6.4-5.2 2z"/>',
  web: '<path d="M5 5c5 .8 8 3.2 14 14"/><path d="M5 5c.8 5 3.4 8.2 8.5 13"/><path d="M5 9.5c3.2.6 5.6 2.8 8 8"/><path d="M9.5 5c.6 3.2 2.4 5.8 6.5 8"/>',
  branch: '<path d="M5 19c3.2-.6 5.2-3 6.4-6.4C12.6 9.2 13.6 6.6 19 4.5"/><path d="M10.2 14.2 8 15"/><path d="M13.2 9.4 11.8 11.4"/><path d="M15.6 6.8 14.8 8.6"/>',
  hourglass: '<path d="M8 4.5h8"/><path d="M8 19.5h8"/><path d="M9 4.5c0 3.6 3 4.6 3 7.5s-3 3.9-3 7.5"/><path d="M15 4.5c0 3.6-3 4.6-3 7.5s3 3.9 3 7.5"/>',
};

const board = document.querySelector("#board");

let state = loadState() ?? freshState();
let metricsCache = null;

function freshState() {
  return { phrases: ["", "", ""], step: 0, guessed: [], revealed: false };
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

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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

function motifElement(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("motif");
  if (name === "bat") svg.classList.add("filled");
  svg.innerHTML = MOTIFS[name];
  return svg;
}

function decorate(map, cols, rows, wordRows) {
  const blocked = new Set([1, rows - 2, rows - 1, ...wordRows]);
  const freeRows = [];
  for (let row = 0; row < rows; row += 1) {
    if (!blocked.has(row)) freeRows.push(row);
  }
  if (!freeRows.length) return;
  const plan = [
    ["moon", 0.08],
    ["bat", 0.86],
    ["candle", 0.24],
    ["eye", 0.68],
    ["moth", 0.48],
    ["key", 0.9],
    ["branch", 0.14],
    ["web", 0.76],
    ["hourglass", 0.38],
  ];
  plan.forEach(([name, x], index) => {
    const row = freeRows[index % freeRows.length];
    let col = Math.round(x * (cols - 1));
    while (map.has(`${row},${col}`) && col < cols - 1) col += 1;
    if (!map.has(`${row},${col}`)) map.set(`${row},${col}`, { kind: "empty", icon: name });
  });
}

function placePhrase(map, row, phrase, cols) {
  const start = cols >= 20 ? 2 : 1;
  let col = start;
  for (const item of cellsFor(phrase)) {
    if (col >= cols - 1) break;
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
  const { cols, rows, cell, gap } = metrics();
  metricsCache = { cols, rows, cell, gap };
  const words = wordRowsFor(rows);
  const map = new Map();

  const titleStart = Math.max(0, Math.floor((cols - TITLE.length) / 2));
  [...TITLE].forEach((char, index) => {
    if (char === " ") return;
    map.set(`1,${titleStart + index}`, { kind: "title", char });
  });

  for (let index = 0; index < 3; index += 1) {
    if (index > state.step) continue;
    const nextCol = placePhrase(map, words[index], state.phrases[index], cols);
    if (index === state.step && state.step < 3 && nextCol < cols - 1) {
      map.set(`${words[index]},${nextCol}`, { kind: "caret" });
    }
  }

  const usedSlots = [];
  for (let col = 0; col < cols; col += 1) usedSlots.push([rows - 2, col]);
  const revealStart = cols - REVEAL_LABEL.length;
  for (let col = 0; col < revealStart - 1; col += 1) usedSlots.push([rows - 1, col]);
  state.guessed.forEach((letter, index) => {
    const slot = usedSlots[index];
    if (!slot) return;
    map.set(`${slot[0]},${slot[1]}`, {
      kind: letterIsHit(letter) ? "hit" : "miss",
      char: letter,
    });
  });

  let revealCol = revealStart;
  for (const char of REVEAL_LABEL) {
    if (char !== " ") map.set(`${rows - 1},${revealCol}`, { kind: "reveal", char });
    revealCol += 1;
  }

  decorate(map, cols, rows, words);

  board.style.setProperty("--cell", `${cell}px`);
  board.style.gridTemplateColumns = `repeat(${cols}, ${cell}px)`;
  board.style.gridTemplateRows = `repeat(${rows}, ${cell}px)`;
  board.style.gap = `${gap}px`;
  board.replaceChildren();

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
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

  const hit = document.createElement("button");
  hit.type = "button";
  hit.className = "reveal-hit";
  hit.setAttribute("aria-label", "Открыть всё");
  hit.disabled = state.step < 3 || state.revealed;
  hit.style.gridColumn = `${revealStart + 1} / span ${REVEAL_LABEL.length}`;
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
  if (state.step < 3 || state.revealed) return;
  state.revealed = true;
  saveState();
  render();
}

function resetGame() {
  state = freshState();
  saveState();
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
  if (event.target.closest(".reveal-hit")) revealAll();
});

window.addEventListener("resize", () => render());

render();
