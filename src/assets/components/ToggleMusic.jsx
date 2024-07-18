function ToggleMusic({ playMusic, onClick }) {
  return (
    <button onClick={onClick}>
      {playMusic === 1 ? (
        <img src="./src/assets/icons/music.png" alt="Music: On" />
      ) : (
        <img src="./src/assets/icons/music-off.png" alt="Music: Off" />
      )}
    </button>
  );
}

export default ToggleMusic;
