import { useState } from "react";
import {
  getHighScore,
  getDifficulty,
  setHighScore,
  getPokemonList,
  checkMemory,
} from "./game";
import Card from "./Card";

function GameScreen() {
  const [score, setScore] = useState(0);

  const highScore = getHighScore();
  const difficulty = getDifficulty();
  const pokemonList = getPokemonList();

  function handleScoreChange() {
    let scoreNew = score + 1;
    if (scoreNew > highScore) setHighScore(scoreNew);
    setScore(scoreNew);
  }

  function handleCheckMemory(id) {
    if (checkMemory(id)) handleScoreChange();
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
                  onClick={handleCheckMemory}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default GameScreen;
