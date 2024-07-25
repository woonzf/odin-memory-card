import { useState } from "react";
import pokeAPI from "../img/pokeapi.png";

function Intro() {
  const [state, setState] = useState(0);

  if (state === 0) {
    setTimeout(() => {
      setState(1);
    }, 5500);
  }

  return (
    <div className="h-fit flex flex-col items-center animate-presents opacity-0">
      {state === 0 && (
        <>
          <big>woonzf</big>
          <small>presents</small>
        </>
      )}
      {state === 1 && (
        <>
          <small>Powered by</small>
          <img className="w-[75%] lg:w-full" src={pokeAPI} alt="PokéAPI" />
        </>
      )}
    </div>
  );
}

export default Intro;
