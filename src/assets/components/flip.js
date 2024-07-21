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
