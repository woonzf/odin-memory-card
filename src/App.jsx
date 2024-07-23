import { useState } from "react";
import { startGame } from "./assets/components/game";
import { delay } from "./assets/components/flip";

import Landing from "./assets/components/Landing";
import ToggleMusic from "./assets/components/ToggleMusic";
import ToggleSkipIntro from "./assets/components/ToggleSkipIntro";
import Intro from "./assets/components/Intro";
import Title from "./assets/components/Title";
import Start from "./assets/components/Start";
import Difficulty from "./assets/components/Difficulty";
import Game from "./assets/components/Game";
import Popup from "./assets/components/Popup";
import Footer from "./assets/components/Footer";

import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [intro, setIntro] = useState(0);
  const [isFirstTime, setIsFirstTime] = useState(1);

  if (state === 1 && intro === 0) {
    setTimeout(() => {
      setIntro(1);
    }, 11000);
  }

  async function handleDifficultyClick(e) {
    let id = null;
    if (typeof e === "number") id = e;
    else id = e.target.id;

    setState(3);
    await Promise.all([startGame(id), delay(5000)]);
    setState(4);
    setIsFirstTime(0);
  }

  return (
    <>
      {state === 0 && (
        <Landing
          onClick={() => {
            setState(1);
          }}
        />
      )}
      {state > 0 && (
        <>
          <div className="h-full w-full max-w-screen-xl flex flex-col relative">
            <ToggleMusic />
            {state > 0 && state < 4 && (
              <div className="h-full flex flex-col items-center text-white relative">
                {intro === 0 && (
                  <ToggleSkipIntro
                    onClick={() => {
                      setIntro(1);
                    }}
                  />
                )}
                {state > 0 && state < 3 && (
                  <div className="h-[43%] flex items-end">
                    {intro === 0 && <Intro />}
                    {intro === 1 && <Title isFirstTime={isFirstTime} />}
                  </div>
                )}
                {intro === 1 && (
                  <div className="h-[31%] w-full mt-[calc(26vh+30px)] flex items-center">
                    {state === 1 && (
                      <Start
                        onClick={() => {
                          setState(2);
                        }}
                      />
                    )}
                    {state === 2 && (
                      <Difficulty onClick={handleDifficultyClick} />
                    )}
                  </div>
                )}
              </div>
            )}
            {state > 3 && (
              <Game
                onWin={() => {
                  setState(5);
                }}
                onLose={() => {
                  setState(6);
                }}
              />
            )}
          </div>
          {(state === 3 || state > 4) && (
            <Popup
              state={state}
              onReplay={handleDifficultyClick}
              onChangeDifficulty={() => {
                setState(2);
              }}
            />
          )}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
