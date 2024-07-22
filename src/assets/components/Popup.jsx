import "../styles/Screen.css";

function Popup({ difficulty, style }) {
  return (
    <div className="h-full w-full flex items-center absolute">
      <div
        className={
          "h-[33%] w-full bg-pokeblue bg-opacity-90 border-y-[0.5vh] border-pokedarkblue text-white text-2xl lg:text-5xl flex justify-center items-center " +
          (style !== 0 ? "animate-end" : "")
        }
      >
        <div className="h-full w-full max-w-screen-lg portrait:max-w-screen-md p-5">
          {style === 0 && (
            <div className="h-full pt-3 flex flex-col justify-between">
              <div className="flex flex-col gap-2 animate-slide-right">
                <div>Difficulty: {difficulty.name}</div>
                <small>Cards: {difficulty.card}</small>
              </div>
              <big className="self-end animate-bounce">Now Loading...</big>
            </div>
          )}
          {style !== 0 && (
            <div className="h-full flex flex-col justify-evenly items-center">
              {style === 1 && <div>You defeated {difficulty.name}!</div>}
              {style === 2 && <div>You lost!</div>}
              <div className="w-full flex justify-evenly">
                <button className="hover-scale">
                  {style === 1 && <small>Replay</small>}
                  {style === 2 && <small>Retry</small>}
                </button>
                <button className="hover-scale">
                  <small>Change Difficulty</small>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
