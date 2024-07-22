import { Howl, Howler } from "howler";
import opening from "../music/opening.mp3";
import wildPokemonBattle from "../music/wild_pokemon_battle.mp3";
import wildPokemonVictory from "../music/wild_pokemon_victory.mp3";
import trainerBattle from "../music/trainer_battle.mp3";
import trainerVictory from "../music/trainer_victory.mp3";
import gymLeaderBattle from "../music/gym_leader_battle.mp3";
import gymLeaderVictory from "../music/gym_leader_victory.mp3";
import rivalBattle from "../music/rival_battle.mp3";
import rivalVictory from "../music/ending.mp3";
import guidepost from "../music/guidepost.mp3";

const list = [
  opening,
  wildPokemonBattle,
  wildPokemonVictory,
  trainerBattle,
  trainerVictory,
  gymLeaderBattle,
  gymLeaderVictory,
  rivalBattle,
  rivalVictory,
  guidepost,
];

const bgmList = list.map((bgm) => {
  return new Howl({
    src: [bgm],
    loop: 1,
  });
});

let isPlaying = 1;
let bgm = null;

Howler.volume(0.5);

export function setBGM(index) {
  if (bgm) bgm.stop();
  switch (index) {
    case 0:
      bgm = bgmList[0];
      break;
    case 1:
      bgm = bgmList[1];
      break;
    case 11:
      bgm = bgmList[2];
      break;
    case 2:
      bgm = bgmList[3];
      break;
    case 21:
      bgm = bgmList[4];
      break;
    case 3:
      bgm = bgmList[5];
      break;
    case 31:
      bgm = bgmList[6];
      break;
    case 4:
      bgm = bgmList[7];
      break;
    case 41:
      bgm = bgmList[8];
      break;
    case 5:
      bgm = bgmList[9];
      break;
  }
  bgm.play();
}

export function playBGM() {
  if (isPlaying) {
    Howler.mute(true);
    isPlaying = 0;
  } else {
    Howler.mute(false);
    isPlaying = 1;
  }
}

export function getIsPlaying() {
  return isPlaying;
}

export function skipBGMStart() {
  bgmList[0].seek(11);
}
