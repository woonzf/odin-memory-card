import { useState } from "react";
import { Howl } from "howler";
import pokeball from "../img/pokeball.png";
import "../styles/Card.css";

function Card({ pokemon }) {
  const [isFlipped, setIsFlipped] = useState(0);

  const cry = new Howl({
    src: [pokemon.cry],
  });

  function handleIsFlippedChange() {
    cry.play();
    setIsFlipped(+!isFlipped);
  }

  return (
    <button className="card" onClick={handleIsFlippedChange}>
      <div className={"card-inner " + (isFlipped ? "flip" : "")}>
        <div className="card-front flex flex-col justify-evenly items-center">
          <img className="w-full" src={pokemon.sprite} />
          <div className="text-xs lg:text-xl capitalize">{pokemon.name}</div>
        </div>
        <div className="card-back flex justify-center items-center">
          <img className="w-[75%]" src={pokeball} />
        </div>
      </div>
    </button>
  );
}

export default Card;
