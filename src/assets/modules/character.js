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
import swimmer from "../img/trainer/VSSwimmer_M_VI.png";
import youngster from "../img/trainer/VSYoungster.png";

// Gym Leader
import blaine from "../img/gym_leader/blaine.png";
import brock from "../img/gym_leader/brock.png";
import giovanni from "../img/gym_leader/giovanni.png";
import koga from "../img/gym_leader/koga.png";
import misty from "../img/gym_leader/misty.png";
import sabrina from "../img/gym_leader/sabrina.png";

// Rival
import blue from "../img/gym_leader/blue.png";

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
  { name: "Swimmer", sprite: swimmer },
  { name: "Youngster", sprite: youngster },
];

const gymLeader = [
  { name: "Blaine", sprite: blaine },
  { name: "Brock", sprite: brock },
  { name: "Giovanni", sprite: giovanni },
  { name: "Koga", sprite: koga },
  { name: "Misty", sprite: misty },
  { name: "Sabrina", sprite: sabrina },
];

const rival = [{ name: "Blue", sprite: blue }];

const list = [wildPokemon, trainer, gymLeader, rival];
let currentCharacter = null;

export function setCharacter(index) {
  let character = list[index];
  currentCharacter = character[getRandomInt(character.length)];
}

export function getCharacter() {
  return currentCharacter;
}
