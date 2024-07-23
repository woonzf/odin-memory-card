import { useState } from "react";
import { getIsPlaying, playBGM } from "../modules/music";

function ToggleMusic() {
  const [playMusic, setPlayMusic] = useState(getIsPlaying);

  function handlePlayMusicChange() {
    setPlayMusic(+!playMusic);
    playBGM();
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
