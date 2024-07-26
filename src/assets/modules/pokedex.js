import { getRandomInt } from "./helper";

// Gen 1 pokemon only
const pokedexCount = 152;
const map = new Map();

export async function generatePokemonList(card) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const indexList = generateIndexList(card);
  const list = await Promise.all(
    indexList.map((index) => {
      const string = index.toString();
      let pokemon = null;
      if (map.has(string)) pokemon = map.get(string);
      else {
        pokemon = fetchPokemon(url, index);
        map.set(string, pokemon);
      }
      return pokemon;
    }),
  );
  return list;
}

async function fetchPokemon(url, index) {
  const response = await fetch(url + index);
  const json = await response.json();
  return {
    id: index,
    name: json.name,
    sprite: json.sprites.front_default,
    cry: json.cries.legacy,
  };
}

function generateIndexList(card) {
  let list = [];

  for (let i = 0; i < card; i++) {
    // PokeAPI pokemon id starts from 1;
    let randomInt = 0;
    while (list.includes(randomInt) || randomInt === 0)
      randomInt = getRandomInt(pokedexCount);
    list.push(randomInt);
  }

  return list;
}
