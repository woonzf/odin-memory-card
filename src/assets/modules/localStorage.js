// Initialize data
const dataDefault = { music: 1, highScore: 0 };
let data = dataDefault;
if (!localStorage.pokemonMemoryCard) setLocalStorage(dataDefault);
else data = JSON.parse(localStorage.getItem("pokemonMemoryCard"));

function setLocalStorage(data) {
  localStorage.setItem("pokemonMemoryCard", JSON.stringify(data));
}

export function getIsPlayingLS() {
  return data.music;
}

export function setIsPlayingLS(bool) {
  if (bool !== data.music) {
    data = { ...data, music: bool };
    setLocalStorage(data);
  }
}

export function getHighScoreLS() {
  return data.highScore;
}

export function setHighScoreLS(score) {
  if (score > data.highScore) {
    data = { ...data, highScore: score };
    setLocalStorage(data);
  }
}
