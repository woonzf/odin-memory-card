import { useState } from "react";
import ToggleMusic from "./ToggleMusic";
import Card from "./Card";
import * as game from "./game";

function GameScreen() {
  const [score, setScore] = useState(0);

  const highScore = game.getHighScore();
  const difficulty = game.getDifficultyName();

  function handleScoreChange() {
    let scoreNew = score + 1;
    if (scoreNew > highScore) game.setHighScore(scoreNew);
    setScore(scoreNew);
  }

  return (
    <div className="h-full flex flex-col text-white relative">
      <div className="absolute top-5 left-5">
        <ToggleMusic />
      </div>
      <header className="p-5 text-lg md:text-2xl flex justify-end">
        <div className="text-end">
          <div>High Score: {highScore}</div>
          <div>Score: {score}</div>
        </div>
      </header>
      <main className="h-full w-full flex flex-col items-center">
        <div className="text-center text-lg md:text-2xl">
          <div>- Difficulty -</div>
          <div>{difficulty}</div>
        </div>
        <div className="h-full flex items-center">
          <div className="px-4 py-10 flex justify-center gap-5 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}

export default GameScreen;
