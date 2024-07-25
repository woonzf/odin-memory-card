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
        <div className="px-2 py-7" id="logo-memory-card">
          <div className="text-[calc(1rem+2vh+2vw)] flex flex-col items-center">
            <big>PokéCard</big>
            <small className="self-end">Memory</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
