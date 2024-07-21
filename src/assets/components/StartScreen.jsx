import { useState } from "react";
import { getDifficultyList } from "./game";
import { skipBGMStart } from "./music";
import "../styles/Screen.css";

function StartScreen({ onDifficultyClick }) {
  const [presents, setPresents] = useState(0);
  const difficultyList = getDifficultyList();

  if (presents === 0) {
    setTimeout(() => {
      setPresents(1);
    }, 10000);
  }

  function StartSection({ onDifficultyClick }) {
    const [start, setStart] = useState(0);

    return (
      <div className="h-[31%] w-full mt-[calc(26vh+30px)] flex items-center">
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
            <div className="grid grid-cols-2 gap-[1vh]">
              {difficultyList.map((item) => {
                return (
                  <button
                    key={item.id}
                    className="btn-difficulty hover-scale"
                    onClick={onDifficultyClick}
                    id={item.id}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center text-white relative">
      {presents === 0 && (
        <button
          className="text-2xl lg:text-4xl hover-scale absolute top-5 right-5"
          onClick={() => {
            setPresents(1);
            skipBGMStart();
          }}
        >
          Skip
        </button>
      )}
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
      {presents === 1 && <StartSection onDifficultyClick={onDifficultyClick} />}
    </div>
  );
}

export default StartScreen;
