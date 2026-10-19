const STORAGE_KEY = "pole-chydes-v1";

const setup = document.querySelector("#setup");
const play = document.querySelector("#play");
const setupForm = document.querySelector("#setup-form");
const setupError = document.querySelector("#setup-error");
const phraseInputs = [...setupForm.querySelectorAll('input[name="phrase"]')];
const phrasesRoot = document.querySelector("#phrases");
const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess");
const statusLine = document.querySelector("#status");
const guessedRoot = document.querySelector("#guessed");
const resetButton = document.querySelector("#reset");

let state = loadState() ?? { phrases: ["", "", ""], guessed: [], playing: false };
let statusText = "";
let guessFromKey = false;

function normalizeLetter(char) {
  return char.toLocaleUpperCase("ru-RU");
}

function isLetter(char) {
  return /^\p{L}$/u.test(char);
}

function wordsOf(phrase) {
  const words = [[]];
  for (const char of phrase.trim()) {
    if (/\s/u.test(char)) {
      if (words[words.length - 1].length) words.push([]);
      continue;
    }
    const word = words[words.length - 1];
    if (isLetter(char)) word.push({ type: "letter", value: normalizeLetter(char) });
    else word.push({ type: "symbol", value: char });
  }
  return words.filter((word) => word.length);
}

function letterIsHit(letter) {
  return state.phrases.some((phrase) =>
    wordsOf(phrase).some((word) => word.some((token) => token.type === "letter" && token.value === letter))
  );
}

function allLettersOpen() {
  return state.phrases.every((phrase) =>
    wordsOf(phrase).every((word) =>
      word.every((token) => token.type !== "letter" || state.guessed.includes(token.value))
    )
  );
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.phrases) || data.phrases.length !== 3) return null;
    if (!Array.isArray(data.guessed)) return null;
    return {
      phrases: data.phrases.map((phrase) => String(phrase)),
      guessed: data.guessed.map((letter) => normalizeLetter(String(letter))).filter(isLetter),
      playing: Boolean(data.playing),
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

function setStatus(text) {
  statusText = text;
  statusLine.textContent = text;
}

function showSetup() {
  phraseInputs.forEach((input, index) => {
    input.value = state.phrases[index] ?? "";
  });
  setup.hidden = false;
  play.hidden = true;
  phraseInputs[0].focus();
}

function showPlay() {
  setup.hidden = true;
  play.hidden = false;
  renderBoard();
  guessInput.focus();
}

function renderBoard() {
  phrasesRoot.replaceChildren();
  for (const phrase of state.phrases) {
    const row = document.createElement("div");
    row.className = "phrase";
    for (const word of wordsOf(phrase)) {
      const wordEl = document.createElement("div");
      wordEl.className = "word";
      for (const token of word) {
        const cell = document.createElement("div");
        if (token.type === "letter") {
          const open = state.guessed.includes(token.value);
          cell.className = open ? "cell open" : "cell closed";
          cell.textContent = open ? token.value : "";
          cell.setAttribute("aria-label", open ? token.value : "закрытая буква");
        } else {
          cell.className = "cell symbol";
          cell.textContent = token.value;
        }
        wordEl.append(cell);
      }
      row.append(wordEl);
    }
    phrasesRoot.append(row);
  }

  guessedRoot.replaceChildren();
  if (!state.guessed.length) {
    const empty = document.createElement("span");
    empty.className = "muted";
    empty.textContent = "Пока никто не называл буквы";
    guessedRoot.append(empty);
  } else {
    for (const letter of state.guessed) {
      const chip = document.createElement("span");
      chip.className = letterIsHit(letter) ? "chip hit" : "chip miss";
      chip.textContent = letter;
      guessedRoot.append(chip);
    }
  }

  if (!statusText && allLettersOpen()) setStatus("Все буквы открыты");
  else statusLine.textContent = statusText || "Нажмите букву на клавиатуре";
}

function startGame(phrases) {
  state = { phrases, guessed: [], playing: true };
  statusText = "";
  saveState();
  showPlay();
}

function guess(raw) {
  const chars = [...String(raw)].map(normalizeLetter).filter(isLetter);
  if (!chars.length) return;
  const letter = chars[0];
  if (state.guessed.includes(letter)) {
    setStatus("Эту букву уже называли");
    return;
  }
  state.guessed.push(letter);
  saveState();
  if (allLettersOpen()) setStatus("Все буквы открыты");
  else setStatus(letterIsHit(letter) ? "Есть такая буква" : "Нет такой буквы");
  renderBoard();
}

setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const phrases = phraseInputs.map((input) => input.value.trim());
  if (phrases.some((phrase) => !phrase)) {
    setupError.hidden = false;
    return;
  }
  setupError.hidden = true;
  startGame(phrases);
});

guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

document.addEventListener("keydown", (event) => {
  if (!state.playing || event.ctrlKey || event.metaKey || event.altKey) return;
  if ([...event.key].length !== 1 || !isLetter(event.key)) return;
  event.preventDefault();
  guessFromKey = true;
  queueMicrotask(() => {
    guessFromKey = false;
  });
  guessInput.value = "";
  guess(event.key);
});

guessInput.addEventListener("input", () => {
  const value = guessInput.value;
  guessInput.value = "";
  if (guessFromKey || !value) return;
  guess(value);
});

resetButton.addEventListener("click", () => {
  if (!window.confirm("Начать заново? Названные буквы сбросятся.")) return;
  state.playing = false;
  state.guessed = [];
  statusText = "";
  saveState();
  showSetup();
});

if (state.playing) showPlay();
else showSetup();
