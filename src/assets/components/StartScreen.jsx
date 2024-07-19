import { useState } from "react";
import ToggleMusic from "./ToggleMusic";
import * as game from "./game";
import "../styles/Screen.css";

function StartScreen({ onDifficultyClick }) {
  const [presents, setPresents] = useState(0);
  const [start, setStart] = useState(0);

  if (presents === 0) {
    setTimeout(() => {
      setPresents(1);
    }, 11000);
  }

  function handleDifficultyClick(e) {
    game.setDifficulty(e.target.id);
    onDifficultyClick();
  }

  return (
    <div className="h-full flex flex-col items-center text-white relative">
      <div className="absolute top-5 left-5">
        <ToggleMusic />
      </div>
      <div className="h-[43%] flex items-end">
        {presents === 0 && (
          <div className="h-fit flex flex-col items-center animate-presents opacity-0">
            <div className="text-3xl lg:text-5xl">woonzf</div>
            <div className="text-1xl lg:text-3xl">presents</div>
          </div>
        )}
        {presents === 1 && (
          <div className="h-fit overflow-hidden">
            <div className="flex flex-col justify-center items-center gap-[1vh] select-none animate-logo">
              <img
                className="w-[75%] lg:w-full"
                src="./src/assets/img/pokemon-logo.png"
                alt="Pokémon"
              />
              <div
                className="text-3xl lg:text-5xl text-[#ffcb05]"
                id="logo-memory-card"
              >
                Mémory Card
              </div>
            </div>
          </div>
        )}
      </div>
      {presents === 1 && (
        <div className="h-[31%] w-full mt-[26vh] flex items-center">
          {start === 0 && (
            <div className="w-full flex justify-center">
              <div className="animate-start">
                <button
                  className="text-3xl lg:text-5xl hover-scale"
                  onClick={() => {
                    setStart(1);
                  }}
                >
                  <div className="animate-bounce">Start</div>
                </button>
              </div>
            </div>
          )}
          {start === 1 && (
            <div className="h-full w-full p-4 text-3xl lg:text-5xl flex flex-col justify-evenly items-center">
              <div>- Select Difficulty -</div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="btn-difficulty hover-scale"
                  onClick={handleDifficultyClick}
                  id={0}
                >
                  Wild Pokemon
                </button>
                <button
                  className="btn-difficulty hover-scale"
                  onClick={handleDifficultyClick}
                  id={1}
                >
                  Trainer
                </button>
                <button
                  className="btn-difficulty hover-scale"
                  onClick={handleDifficultyClick}
                  id={2}
                >
                  Gym Leader
                </button>
                <button
                  className="btn-difficulty hover-scale"
                  onClick={handleDifficultyClick}
                  id={3}
                >
                  Rival
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StartScreen;
