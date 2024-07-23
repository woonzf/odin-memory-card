import { getDifficulty } from "../modules/game";

function Popup({ state, onReplay, onChangeDifficulty, help, onClose }) {
  const difficulty = getDifficulty();

  return (
    <div className="h-full w-full flex items-center absolute">
      <div className="h-[33%] w-full bg-pokeblue bg-opacity-90 border-y-[0.5vh] border-pokedarkblue text-white text-2xl lg:text-5xl flex justify-center items-center animate-end">
        <div className="h-full w-full max-w-screen-lg portrait:max-w-screen-md p-5">
          {state === 3 && (
            <div className="h-full pt-3 flex flex-col justify-between">
              <div className="flex flex-col gap-2 animate-slide-right">
                <div>Difficulty: {difficulty.name}</div>
                <small>Cards: {difficulty.card}</small>
              </div>
              <big className="self-end flex">
                <div className="animate-bounce">Now&nbsp;</div>
                <div className="animate-bounce-200">Loading&nbsp;</div>
                <div className="animate-bounce-400">...</div>
              </big>
            </div>
          )}
          {state > 4 && (
            <div className="h-full flex flex-col justify-evenly items-center">
              {state === 5 && <div>You defeated {difficulty.name}!</div>}
              {state === 6 && <div>You lost!</div>}
              <div className="w-full flex justify-evenly">
                <button
                  className="hover-scale"
                  onClick={() => {
                    onReplay(difficulty.id);
                  }}
                >
                  {state === 5 && <small>Replay</small>}
                  {state === 6 && <small>Retry</small>}
                </button>
                <button className="hover-scale" onClick={onChangeDifficulty}>
                  <small>Change Difficulty</small>
                </button>
              </div>
            </div>
          )}
          {help === 1 && (
            <div className="h-full flex flex-col justify-center items-center gap-[1vh] relative">
              <button
                className="absolute top-3 right-3 hover-scale"
                onClick={onClose}
              >
                X
              </button>
              <big>How to play?</big>
              <small className="text-center">
                Do not pick the same card twice!
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
