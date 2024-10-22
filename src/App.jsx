import { useState } from "react";
import { setBGM } from "./assets/modules/music";
import { startGame } from "./assets/modules/game";
import { delay } from "./assets/modules/flip";

import Landing from "./assets/components/Landing";
import ToggleMusic from "./assets/components/ToggleMusic";
import ToggleHelp from "./assets/components/ToggleHelp";
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
  const [help, setHelp] = useState(0);

  if (state === 1 && intro === 0) {
    setTimeout(() => {
      setIntro(1);
    }, 11000);
  }

  function handleLandingClick() {
    setBGM(0, 0);
    setState(1);
  }

  function handleToDifficulty() {
    if (!isFirstTime) setBGM(0, 1);
    setState(2);
  }

  async function handleDifficultyClick(id) {
    setState(3);
    await Promise.all([startGame(id), delay(5000)]);
    setState(4);
    setIsFirstTime(0);
  }

  function handleHelpChange() {
    setHelp(+!help);
  }

  return (
    <>
      {state === 0 && <Landing onClick={handleLandingClick} />}
      {state > 0 && (
        <>
          <div className="h-full w-full max-w-screen-xl flex flex-col relative">
            <div className="flex items-center gap-[1vh] absolute top-5 left-5 z-[99]">
              <ToggleMusic />
              <ToggleHelp onClick={handleHelpChange} />
            </div>
            {state > 0 && state < 4 && (
              <div className="h-full flex flex-col items-center relative">
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
                    {state === 1 && <Start onClick={handleToDifficulty} />}
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
                onBack={handleToDifficulty}
              />
            )}
          </div>
          {(state === 3 || state > 4) && help === 0 && (
            <Popup
              state={state}
              onReplay={handleDifficultyClick}
              onChangeDifficulty={handleToDifficulty}
            />
          )}
          {help === 1 && <Popup help={help} onClose={handleHelpChange} />}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

// state
// 0 = landing
// 1 = intro
// 2 = difficulty
// 3 = loading
// 4 = game
// 5 = win
// 6 = lose
