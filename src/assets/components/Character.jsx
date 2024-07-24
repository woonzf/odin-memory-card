function Character({ character, difficulty, state }) {
  return (
    <div
      className={
        "h-full flex absolute top-0 right-0 animate-slide-left " +
        (state > 4 ? "opacity-80" : "")
      }
    >
      <img
        className={
          "h-full self-end object-cover " + (difficulty.id === 0 ? "p-5" : "")
        }
        src={character.sprite}
      />
    </div>
  );
}

export default Character;
