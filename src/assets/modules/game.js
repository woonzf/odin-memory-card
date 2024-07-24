import { setBGM } from "./music";
import { generatePokemonList } from "./pokedex";
import { setCharacter } from "./character";
import { getHighScoreLS, setHighScoreLS } from "./localStorage";

const difficultyList = [
  { id: 0, name: "Wild Pokémon", card: 3 },
  { id: 1, name: "Trainer", card: 6 },
  { id: 2, name: "Gym Leader", card: 9 },
  { id: 3, name: "Rival", card: 12 },
];

let difficulty = null;
let highScore = getHighScoreLS();
let pokemonList = null;
let memory = [];

export function checkMemory(id) {
  if (!memory.includes(id)) memory.push(id);
  else return false;
  return true;
}

export function shufflePokemonList() {
  pokemonList = shuffle(pokemonList);
}

function shuffle(array) {
  // Fisher–Yates shuffle
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export async function startGame(index) {
  setBGM(+index + 1);
  memory = [];
  setDifficulty(index);
  setCharacter(index);
  pokemonList = await generatePokemonList(difficulty.card);
}

export function getPokemonList() {
  return pokemonList;
}

export function getDifficultyList() {
  return difficultyList;
}

export function getDifficulty() {
  return difficulty;
}

function setDifficulty(index) {
  difficulty = difficultyList[index];
}

export function getHighScore() {
  return highScore;
}

export function setHighScore(score) {
  highScore = score;
  setHighScoreLS(highScore);
}
