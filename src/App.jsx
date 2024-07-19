import { useState } from "react";
import StartScreen from "./assets/components/StartScreen";
import "./App.css";

function App() {
  const [play, setPlay] = useState(0);
  const [start, setStart] = useState(0);

  function handleStartChange() {
    setStart(+!start);
  }

  return (
    <>
      {play === 0 && (
        <button
          className="h-full w-full text-2xl lg:text-5xl text-white flex justify-center"
          onClick={() => {
            setPlay(1);
          }}
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
          <div className="h-full w-full max-w-screen-xl flex flex-col">
            {start === 0 && (
              <StartScreen onDifficultyClick={handleStartChange} />
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
