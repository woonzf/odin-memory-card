import { getDifficulty } from "./game";

let imgLoad = 0;

export function updateImgLoad() {
  const card = getDifficulty().card;
  imgLoad += 1;
  if (imgLoad === card) {
    flipCards();
    imgLoad = 0;
  }
}

export function flipCards() {
  const cards = document.querySelectorAll(".card-inner");
  cards.forEach((card) => {
    card.classList.toggle("flip");
  });
}

export function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
