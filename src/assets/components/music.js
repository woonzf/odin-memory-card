import { Howl, Howler } from "howler";
import opening from "../music/opening.mp3";
import wildPokemonBattle from "../music/wild_pokemon_battle.mp3";
import trainerBattle from "../music/trainer_battle.mp3";
import gymLeaderBattle from "../music/gym_leader_battle.mp3";
import rivalBattle from "../music/rival_battle.mp3";

const bgmStart = new Howl({
  src: [opening],
  loop: 1,
});

const bgmBattle0 = new Howl({
  src: [wildPokemonBattle],
  loop: 1,
});

const bgmBattle1 = new Howl({
  src: [trainerBattle],
  loop: 1,
});

const bgmBattle2 = new Howl({
  src: [gymLeaderBattle],
  loop: 1,
});

const bgmBattle3 = new Howl({
  src: [rivalBattle],
  loop: 1,
});

let isPlaying = 1;
let bgm = null;

export function setBGM(index) {
  if (bgm) bgm.stop();
  switch (index) {
    case 0:
      bgm = bgmStart;
      break;
    case 1:
      bgm = bgmBattle0;
      break;
    case 2:
      bgm = bgmBattle1;
      break;
    case 3:
      bgm = bgmBattle2;
      break;
    case 4:
      bgm = bgmBattle3;
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
  bgmStart.seek(11);
}

setBGM(0);
