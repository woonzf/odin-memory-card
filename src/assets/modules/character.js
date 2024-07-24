import { getRandomInt } from "./helper";

// Wild Pokemon
import bulbasaur from "../img/wild_pokemon/bulbasaur-256w.png";
import charmander from "../img/wild_pokemon/charmander-256w.png";
import squirtle from "../img/wild_pokemon/squirtle-256w.png";
import pikachu from "../img/wild_pokemon/pikachu-256w.png";

// Trainer
import beauty from "../img/trainer/VSBeauty.png";
import blackBelt from "../img/trainer/VSBlack_Belt.png";
import bugCatcher from "../img/trainer/VSBug_Catcher.png";
import psychic from "../img/trainer/VSPsychic.png";
import sailor from "../img/trainer/VSSailor.png";
import swimmer from "../img/trainer/VSSwimmer_M_VI.png";

const wildPokemon = [
  { name: "Bulbasaur", sprite: bulbasaur },
  { name: "Charmander", sprite: charmander },
  { name: "Squirtle", sprite: squirtle },
  { name: "Pikachu", sprite: pikachu },
];

const trainer = [
  { name: "Beauty", sprite: beauty },
  { name: "Black Belt", sprite: blackBelt },
  { name: "Bug Catcher", sprite: bugCatcher },
  { name: "Psychic", sprite: psychic },
  { name: "Sailor", sprite: sailor },
  { name: "Swimmer", sprite: swimmer },
];

const list = [wildPokemon, trainer];
let currentCharacter = null;

export function setCharacter(index) {
  let character = list[index];
  currentCharacter = character[getRandomInt(character.length)];
}

export function getCharacter() {
  return currentCharacter;
}
