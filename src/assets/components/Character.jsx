function Character({ character, state }) {
  return (
    <div
      className={
        "h-full flex absolute top-0 right-0 animate-slide-left " +
        (state > 4 ? "opacity-80" : "")
      }
    >
      <img
        className="h-full self-end object-cover translate-x-[20%] xl:translate-x-0"
        src={character.sprite}
      />
    </div>
  );
}

export default Character;
