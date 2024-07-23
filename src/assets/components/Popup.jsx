import { getDifficulty } from "../modules/game";
import { getCharacter } from "../modules/character";
import Character from "./Character";

function Popup({ state, onReplay, onChangeDifficulty, help, onClose }) {
  const difficulty = getDifficulty();
  const character = getCharacter();

  return (
    <div className="h-full w-full shadow-pokedarkblue flex items-center absolute">
      <div className="h-[33%] w-full bg-pokeblue bg-opacity-90 border-y-[0.5vh] border-pokedarkblue text-white text-2xl lg:text-5xl flex justify-center items-center animate-end">
        <div className="h-full w-full max-w-screen-lg portrait:max-w-screen-md">
          {state === 3 && (
            <div className="h-full p-5 flex flex-col justify-between relative">
              <Character difficulty={difficulty} character={character} />
              <div className="h-full pt-3 flex flex-col justify-between animate-slide-right z-[99]">
                <div>
                  <div>Difficulty: {difficulty.name}</div>
                  <small>Cards: {difficulty.card}</small>
                </div>
                {typeof character === "object" && (
                  <small>{character.name}</small>
                )}
              </div>
              <big className="self-end flex">
                <div className="animate-bounce">Now&nbsp;</div>
                <div className="animate-bounce-200">Loading&nbsp;</div>
                <div className="animate-bounce-400">...</div>
              </big>
            </div>
          )}
          {state > 4 && (
            <div className="h-full p-5 flex flex-col justify-evenly items-center relative">
              <Character difficulty={difficulty} character={character} />
              <div className="z-[99]">
                {state === 5 && `You defeated ${difficulty.name}!`}
                {state === 6 && "You lost!"}
              </div>
              <div className="w-full flex justify-evenly z-[99]">
                <button
                  className="hover-scale shadow-pokedarkblue"
                  onClick={() => {
                    onReplay(difficulty.id);
                  }}
                >
                  {state === 5 && <small>Replay</small>}
                  {state === 6 && <small>Retry</small>}
                </button>
                <button
                  className="hover-scale shadow-pokedarkblue"
                  onClick={onChangeDifficulty}
                >
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
