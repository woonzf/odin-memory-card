import { useState, useEffect } from "react";
import ToggleMusic from "./ToggleMusic";

function StartScreen({ onStartClick, playMusic, onPlayMusicClick }) {
  const [presents, setPresents] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPresents(1);
    }, 11000);
  }, [presents]);

  return (
    <div className="h-full flex flex-col items-center text-white relative">
      <div className="absolute top-5 left-5">
        <ToggleMusic playMusic={playMusic} onClick={onPlayMusicClick} />
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
        <div className="h-[31%] mt-[26vh] flex items-center animate-start">
          <button
            className="text-3xl lg:text-5xl hover:scale-110 transition-transform duration-200"
            onClick={onStartClick}
          >
            <div className="animate-bounce">Start</div>
          </button>
        </div>
      )}
    </div>
  );
}

export default StartScreen;
