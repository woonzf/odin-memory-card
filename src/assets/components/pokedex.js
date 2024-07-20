let pokedexCount = 0;

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then((response) => response.json())
  .then((json) => (pokedexCount = json.count - 1));

export async function generatePokemonList(card) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const indexList = generateIndexList(card);
  const list = await Promise.all(
    indexList.map((index) => getPokemon(url, index)),
  );
  return list;
}

async function getPokemon(url, index) {
  const response = await fetch(url + index);
  const json = await response.json();
  return {
    name: json.name,
    sprite: json.sprites.front_default,
    cry: json.cries.latest,
  };
}

function generateIndexList(card) {
  let list = [];

  for (let i = 0; i < card; i++) {
    let randomInt = -1;
    while (list.includes(randomInt) || randomInt === -1)
      randomInt = getRandomInt(pokedexCount);
    if (randomInt > 1025) randomInt += 8976;
    list.push(randomInt);
  }

  return list;
}

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
