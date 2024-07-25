function Title({ isFirstTime }) {
  return (
    <div className="h-fit overflow-hidden">
      <div
        className={
          "flex flex-col justify-center items-center gap-[1vh] select-none " +
          (isFirstTime ? "animate-logo translate-y-full" : "")
        }
        id="title"
      >
        <img
          className="w-[75%] lg:w-full"
          src="./src/assets/img/pokemon-logo.png"
          alt="Pokémon"
        />
        <div id="logo-memory-card">
          <big>Mémory Card</big>
        </div>
      </div>
    </div>
  );
}

export default Title;
