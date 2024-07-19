const difficultyList = [
  { name: "Wild Pokemon", card: 3 },
  { name: "Trainer", card: 6 },
  { name: "Gym Leader", card: 9 },
  { name: "Rival", card: 12 },
];

let difficulty = null;
let highScore = 0;

export function getDifficultyName() {
  return difficulty.name;
}

export function setDifficulty(index) {
  difficulty = difficultyList[index];
}

export function getHighScore() {
  return highScore;
}

export function setHighScore(score) {
  highScore = score;
  localStorage.setItem("pokemonMemoryCard", highScore);
}

if (localStorage.pokemonMemoryCard)
  highScore = JSON.parse(localStorage.getItem("pokemonMemoryCard"));
