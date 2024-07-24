import { getDifficulty } from "../modules/game";
import { getCharacter } from "../modules/character";

import Character from "./Character";
import Loading from "./Loading";
import Result from "./Result";
import Help from "./Help";

function Popup({ state, onReplay, onChangeDifficulty, help, onClose }) {
  const difficulty = getDifficulty();
  const character = getCharacter();

  return (
    <div className="h-full w-full shadow-pokedarkblue flex items-center absolute">
      <div className="h-[33%] w-full bg-pokeblue bg-opacity-90 border-y-[0.5vh] border-pokedarkblue text-white text-2xl lg:text-5xl flex justify-center items-center animate-end">
        <div className="h-full w-full max-w-screen-lg portrait:max-w-screen-md">
          {state === 3 && (
            <div className="h-full p-5 flex flex-col justify-between relative overflow-hidden">
              <Character character={character} />
              <Loading difficulty={difficulty} character={character} />
            </div>
          )}
          {state > 4 && (
            <div className="h-full p-5 flex flex-col justify-evenly items-center relative overflow-hidden">
              <Character character={character} />
              <Result
                state={state}
                difficulty={difficulty}
                onReplay={onReplay}
                onChangeDifficulty={onChangeDifficulty}
              />
            </div>
          )}
          {help === 1 && <Help onClick={onClose} />}
        </div>
      </div>
    </div>
  );
}

export default Popup;
