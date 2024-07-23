import { useState } from "react";
import {
  getHighScore,
  getPokemonList,
  checkMemory,
  shufflePokemonList,
  setHighScore,
  getDifficulty,
} from "../modules/game";
import { delay, flipCards } from "../modules/flip";
import { setBGM } from "../modules/music";

import Card from "./Card";

function Game({ onWin, onLose }) {
  const [score, setScore] = useState(0);
  const [pokemonList, setPokemonList] = useState(getPokemonList);
  const [isDisabled, setIsDisabled] = useState(0);

  const highScore = getHighScore();
  const difficulty = getDifficulty();

  async function handleResult(id) {
    if (checkMemory(id)) {
      // Update score
      let scoreNew = score + 1;
      if (scoreNew > highScore) setHighScore(scoreNew);
      setScore(scoreNew);

      if (scoreNew === difficulty.card) {
        setBGM(+(`${difficulty.id + 1}` + "1"));
        onWin();
        return;
      }

      // Disable, flip, shuffle, flip, enable cards
      setIsDisabled(1);
      flipCards();
      await delay(500);
      shufflePokemonList();
      setPokemonList([...getPokemonList()]);
      await delay(200);
      flipCards();
      await delay(500);
      setIsDisabled(0);
    } else {
      setBGM(5);
      onLose();
    }
  }

  return (
    <div className="h-full flex flex-col text-white">
      <header className="p-5 text-lg md:text-2xl flex justify-end">
        <div className="text-end">
          <div>High Score: {highScore}</div>
          <div>Score: {score}</div>
        </div>
      </header>
      <main className="h-full w-full flex flex-col items-center">
        <div className="text-center text-lg md:text-2xl">
          <div>- Difficulty -</div>
          <div>{difficulty.name}</div>
          <div>
            {score} / {difficulty.card}
          </div>
        </div>
        <div className="flex">
          <div className="px-4 py-10 flex justify-center gap-5 flex-wrap">
            {pokemonList.map((pokemon) => {
              return (
                <Card
                  key={pokemon.id}
                  pokemon={pokemon}
                  id={pokemon.id}
                  onClick={handleResult}
                  disabled={isDisabled}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Game;
