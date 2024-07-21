import { useState } from "react";
import { setBGM } from "./assets/components/music";
import { startGame } from "./assets/components/game";
import StartScreen from "./assets/components/StartScreen";
import GameScreen from "./assets/components/GameScreen";
import ToggleMusic from "./assets/components/ToggleMusic";
import "./App.css";

function App() {
  const [play, setPlay] = useState(0);
  const [start, setStart] = useState(0);

  function handlePlayChange() {
    setBGM(0);
    setPlay(1);
  }

  async function handleStartChange(e) {
    await startGame(e.target.id);
    setStart(+!start);
  }

  return (
    <>
      {play === 0 && (
        <button
          className="h-full w-full text-2xl lg:text-5xl text-white flex justify-center"
          onClick={handlePlayChange}
        >
          <div className="h-full w-full max-w-screen-xl flex flex-col">
            <div className="h-[43%] flex justify-center items-end">
              <div className="h-[50%] px-4 flex items-center">
                A memory card game inspired by Pokémon...
              </div>
            </div>
            <div className="h-[31%] w-full mt-[26vh] flex flex-col justify-center">
              <div>Press Anywhere</div>
              <div>To Continue...</div>
            </div>
          </div>
        </button>
      )}
      {play === 1 && (
        <>
          <div className="h-full w-full max-w-screen-xl flex flex-col relative">
            <div className="absolute top-5 left-5 z-[99]">
              <ToggleMusic />
            </div>
            {start === 0 ? (
              <StartScreen onDifficultyClick={handleStartChange} />
            ) : (
              <GameScreen />
            )}
          </div>
          <footer className="h-[30px] text-md lg:text-xl text-white flex justify-center items-center">
            <a
              className="underline"
              href="https://github.com/woonzf"
              target="_blank"
              rel="noreferrer"
            >
              WZF
            </a>
            &nbsp;&copy; 2024
          </footer>
        </>
      )}
    </>
  );
}

export default App;
