import { useState } from "react";
import * as music from "./music";

function ToggleMusic() {
  const [playMusic, setPlayMusic] = useState(music.getIsPlaying());

  function handlePlayMusicChange() {
    setPlayMusic(+!playMusic);
    music.playBGM();
  }

  return (
    <button onClick={handlePlayMusicChange}>
      <div className="hover-scale">
        {playMusic === 1 ? (
          <img src="./src/assets/icons/music.png" alt="Music: On" />
        ) : (
          <img src="./src/assets/icons/music-off.png" alt="Music: Off" />
        )}
      </div>
    </button>
  );
}

export default ToggleMusic;
