import { getRandomInt } from "./helper";

// Trainer
import beauty from "../img/VSBeauty.png";
import blackBelt from "../img/VSBlack_Belt.png";
import bugCatcher from "../img/VSBug_Catcher.png";
import psychic from "../img/VSPsychic.png";
import sailor from "../img/VSSailor.png";
import swimmer from "../img/VSSwimmer_M_VI.png";

const trainer = [
  { id: 0, name: "Beauty", sprite: beauty },
  { id: 1, name: "Black Belt", sprite: blackBelt },
  { id: 2, name: "Bug Catcher", sprite: bugCatcher },
  { id: 3, name: "Psychic", sprite: psychic },
  { id: 4, name: "Sailor", sprite: sailor },
  { id: 5, name: "Swimmer", sprite: swimmer },
];

const list = [trainer];
let currentCharacter = null;

export function setCharacter(id) {
  let index = id - 1;
  let character = list[index];
  if (!Array.isArray(character)) currentCharacter = character;
  else currentCharacter = character[getRandomInt(character.length)];
  console.log(currentCharacter);
}

export function getCharacter() {
  return currentCharacter;
}
