function StartScreen({ onClick }) {
  return (
    <div className="h-full flex flex-col items-center text-white relative">
      <div className="h-[43%] flex flex-col justify-end items-center gap-[1vh]">
        <img
          className="w-[75%] lg:w-full"
          src="pokemon-logo.png"
          alt="Pokémon"
        />
        <div
          className="text-3xl lg:text-5xl text-yellow-300"
          id="logo-memory-card"
        >
          Mémory Card
        </div>
      </div>
      <div className="h-[31%] mt-[26vh] flex items-center">
        <button
          className="text-3xl lg:text-5xl hover:scale-110 transition-transform duration-200"
          onClick={onClick}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
