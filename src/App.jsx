import { useState } from "react";
import StartScreen from "./assets/components/StartScreen";
import * as music from "./assets/components/music";
import "./App.css";

let difficulty = null;

function setDifficulty(index) {
  difficulty = index;
}

function App() {
  const [play, setPlay] = useState(0);
  const [start, setStart] = useState(0);
  const [playMusic, setPlayMusic] = useState(1);

  function handleStartGame(index) {
    setDifficulty(index);
    setStart(+!start);
  }

  function handlePlayMusicChange() {
    setPlayMusic(+!playMusic);
    music.playBGM();
  }

  return (
    <>
      {play === 0 && (
        <button
          className="h-full w-full relative"
          onClick={() => {
            setPlay(1);
          }}
        >
          <div className="text-white text-2xl lg:text-5xl flex justify-center absolute top-[82%] left-1/2 -translate-x-1/2">
            <div className="animate-bounce">Press Anywhere</div>
          </div>
        </button>
      )}
      {play === 1 && (
        <div className="h-full w-full max-w-screen-xl">
          {start === 0 && (
            <StartScreen
              playMusic={playMusic}
              onPlayMusicClick={handlePlayMusicChange}
              onDifficultyClick={handleStartGame}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
