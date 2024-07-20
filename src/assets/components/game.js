import * as music from "./music";

const difficultyList = [
  { id: 0, name: "Wild Pokémon", card: 3 },
  { id: 1, name: "Trainer", card: 6 },
  { id: 2, name: "Gym Leader", card: 9 },
  { id: 3, name: "Rival", card: 12 },
];

export function getDifficultyList() {
  return difficultyList;
}

let difficulty = null;
let highScore = 0;

export function getDifficultyName() {
  return difficulty.name;
}

export function setDifficulty(index) {
  difficulty = difficultyList[index];
  music.setBGM(+index + 1);
}

export function getHighScore() {
  return highScore;
}

export function setHighScore(score) {
  highScore = score;
  localStorage.setItem("pokemonMemoryCard", highScore);
}

if (localStorage.pokemonMemoryCard)
  highScore = localStorage.getItem("pokemonMemoryCard");
