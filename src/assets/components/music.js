import { Howl } from "howler";
import opening from "../music/101-opening.mp3";
import oakRearchLab from "../music/104-oak_research_lab.mp3";

const musicStart = new Howl({
  src: [opening],
  autoplay: true,
  loop: true,
  rate: 1,
});

let isPlaying = 1;
let music = null;

export function setBGM(index) {
  switch (index) {
    case 0:
      music = musicStart;
      break;
  }
}

export function playBGM() {
  if (isPlaying) {
    music.volume(0.0);
    isPlaying = 0;
  } else {
    music.volume(1.0);
    isPlaying = 1;
  }
}

export function getIsPlaying() {
  return isPlaying;
}

setBGM(0);
