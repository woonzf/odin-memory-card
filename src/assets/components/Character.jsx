function Character({ character, state }) {
  return (
    <div
      className={
        "h-full w-[120%] xl:w-auto flex absolute top-0 left-0 xl:left-auto xl:right-0 animate-slide-left " +
        (state > 4 ? "opacity-80" : "")
      }
    >
      <img
        className="h-full object-cover translate-x-[20%] xl:translate-x-0"
        src={character.sprite}
      />
    </div>
  );
}

export default Character;
