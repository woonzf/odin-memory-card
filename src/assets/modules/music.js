import { Howl, Howler } from "howler";
import { getIsPlayingLS, setIsPlayingLS } from "./localStorage";

import opening from "../music/opening.mp3";
import oakResearchLab from "../music/oak_research_lab.mp3";
import guidepost from "../music/guidepost.mp3";

import wildPokemonBattle from "../music/wild_pokemon_battle.mp3";
import trainerBattle from "../music/trainer_battle.mp3";
import gymLeaderBattle from "../music/gym_leader_battle.mp3";
import rivalBattle from "../music/rival_battle.mp3";

import wildPokemonVictory from "../music/wild_pokemon_victory.mp3";
import trainerVictory from "../music/trainer_victory.mp3";
import gymLeaderVictory from "../music/gym_leader_victory.mp3";
import rivalVictory from "../music/ending.mp3";

const themeState = [opening, oakResearchLab, guidepost];

const themeBattle = [
  wildPokemonBattle,
  trainerBattle,
  gymLeaderBattle,
  rivalBattle,
];

const themeVictory = [
  wildPokemonVictory,
  trainerVictory,
  gymLeaderVictory,
  rivalVictory,
];

const bgmStateList = themeState.map((bgm) => setupBGM(bgm));
const bgmBattleList = themeBattle.map((bgm) => setupBGM(bgm));
const bgmVictoryList = themeVictory.map((bgm) => setupBGM(bgm));

let isPlaying = getIsPlayingLS();
let bgm = null;

if (!isPlaying) Howler.mute(true);
Howler.volume(0.5);

function setupBGM(music) {
  return new Howl({
    src: [music],
    loop: 1,
  });
}

export function setBGM(type, index) {
  if (bgm) bgm.stop();
  switch (type) {
    case 0:
      bgm = bgmStateList[index];
      break;
    case 1:
      bgm = bgmBattleList[index];
      break;
    case 2:
      bgm = bgmVictoryList[index];
      break;
  }
  bgm.play();
}

export function playBGM() {
  if (isPlaying) {
    Howler.mute(true);
    isPlaying = 0;
    setIsPlayingLS(isPlaying);
  } else {
    Howler.mute(false);
    isPlaying = 1;
    setIsPlayingLS(isPlaying);
  }
}

export function getIsPlaying() {
  return isPlaying;
}

export function skipBGMStart() {
  bgmStateList[0].seek(11);
}
