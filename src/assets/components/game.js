let difficulty = null;

export function setDifficulty(index) {
  difficulty = index;
}

export function getDifficulty() {
  let name = "";
  switch (+difficulty) {
    case 0:
      name = "Wild Pokemon";
      break;
    case 1:
      name = "Trainer";
      break;
    case 2:
      name = "Gym Leader";
      break;
    case 3:
      name = "Rival";
      break;
  }
  return name;
}
