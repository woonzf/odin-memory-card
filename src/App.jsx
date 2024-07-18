import { useState } from "react";
import StartScreen from "./assets/components/StartScreen";
import * as music from "./assets/components/music";
import "./App.css";

function App() {
  const [start, setStart] = useState(0);
  const [playMusic, setPlayMusic] = useState(0);

  function handleStartChange() {
    setStart(+!start);
  }

  function handlePlayMusicChange() {
    setPlayMusic(+!playMusic);
    music.playMusic(0);
  }

  return (
    <>
      {start === 0 && (
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
