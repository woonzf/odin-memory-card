import { useState } from "react";
import { getIsPlaying, playBGM } from "../modules/music";

import musicOn from "../icons/music.png";
import musicOff from "../icons/music-off.png";

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
          <img src={musicOn} alt="Music: On" />
        ) : (
          <img src={musicOff} alt="Music: Off" />
        )}
      </div>
    </button>
  );
}

export default ToggleMusic;
