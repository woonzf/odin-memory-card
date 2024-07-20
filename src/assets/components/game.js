import { setBGM } from "./music";
import { generatePokemonList } from "./pokedex";

const difficultyList = [
  { id: 0, name: "Wild Pokémon", card: 3 },
  { id: 1, name: "Trainer", card: 6 },
  { id: 2, name: "Gym Leader", card: 9 },
  { id: 3, name: "Rival", card: 12 },
];

let difficulty = null;
let highScore = 0;
let pokemonList = null;

// Retrieve high score from localStorage if present
if (localStorage.pokemonMemoryCard)
  highScore = localStorage.getItem("pokemonMemoryCard");

export async function startGame(index) {
  setDifficulty(index);
  pokemonList = await generatePokemonList(difficulty.card);
  setBGM(+index + 1);
}

export function getPokemonList() {
  return pokemonList;
}

export function getDifficultyList() {
  return difficultyList;
}

export function getDifficultyName() {
  return difficulty.name;
}

function setDifficulty(index) {
  difficulty = difficultyList[index];
}

export function getHighScore() {
  return highScore;
}

export function setHighScore(score) {
  highScore = score;
  localStorage.setItem("pokemonMemoryCard", highScore);
}
