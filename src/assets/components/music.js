import { Howl } from "howler";
import opening from "../music/101-opening.mp3";
import oakRearchLab from "../music/104-oak_research_lab.mp3";

const musicStart = new Howl({
  src: [opening],
  loop: true,
});

let indexNowPlaying = null;
let music = null;

export function playMusic(index) {
  if (indexNowPlaying === index) {
    music.stop();
    indexNowPlaying = null;
    return;
  }

  switch (index) {
    case 0:
      music = musicStart;
      break;
  }

  music.play();
  indexNowPlaying = index;
}
