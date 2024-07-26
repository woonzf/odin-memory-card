function Character({ character, state }) {
  return (
    <div
      className={
        "h-full aspect-[2] flex absolute top-0 right-0 animate-slide-left " +
        (state > 4 ? "opacity-80" : "")
      }
    >
      <img
        className="h-full object-cover portrait:translate-x-1/3 portrait:sm:translate-x-[20%]"
        src={character.sprite}
      />
    </div>
  );
}

export default Character;
