import { useState } from "react";
import StartScreen from "./assets/components/StartScreen";
import * as music from "./assets/components/music";
import "./App.css";

function App() {
  const [play, setPlay] = useState(0);
  const [start, setStart] = useState(0);
  const [playMusic, setPlayMusic] = useState(1);

  function handleStartChange() {
    setStart(+!start);
  }

  function handlePlayMusicChange() {
    setPlayMusic(+!playMusic);
    music.playBGM();
  }

  return (
    <>
      {play === 0 && (
        <div className="h-full w-full relative" id="click-anywhere">
          <button
            className="text-white text-2xl lg:text-5xl absolute top-[82%] left-1/2 -translate-x-1/2"
            onClick={() => {
              setPlay(1);
            }}
          >
            <div className="animate-bounce">Play</div>
          </button>
        </div>
      )}
      {play === 1 && start === 0 && (
        <StartScreen
          onStartClick={handleStartChange}
          playMusic={playMusic}
          onPlayMusicClick={handlePlayMusicChange}
        />
      )}
    </>
  );
}

export default App;
