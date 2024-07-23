function Title({ isFirstTime }) {
  return (
    <div className="h-fit overflow-hidden">
      <div
        className={
          "flex flex-col justify-center items-center gap-[1vh] select-none " +
          (isFirstTime ? "animate-logo" : "")
        }
        id="title"
      >
        <img
          className="w-[75%] lg:w-full"
          src="./src/assets/img/pokemon-logo.png"
          alt="Pokémon"
        />
        <div
          className="text-3xl lg:text-5xl text-[#ffcb05]"
          id="logo-memory-card"
        >
          Mémory Card
        </div>
      </div>
    </div>
  );
}

export default Title;
