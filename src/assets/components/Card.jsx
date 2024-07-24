import { Howl } from "howler";
import { updateImgLoad } from "../modules/flip";
import pokeball from "../img/pokeball.png";
import "../styles/Card.css";

function Card({ pokemon, id, onClick, disabled }) {
  const cry = new Howl({
    src: [pokemon.cry],
  });

  function handleCardClick() {
    onClick(id, cry);
  }

  return (
    <button className="card" onClick={handleCardClick} disabled={disabled}>
      <div className="card-outer">
        <div className="card-inner flip">
          <div className="card-front flex flex-col justify-evenly items-center">
            <img
              className="w-full"
              src={pokemon.sprite}
              onLoad={updateImgLoad}
            />
            <div className="text-xs lg:text-xl capitalize">{pokemon.name}</div>
          </div>
          <div className="card-back flex justify-center items-center">
            <img className="w-[75%]" src={pokeball} />
          </div>
        </div>
      </div>
    </button>
  );
}

export default Card;
