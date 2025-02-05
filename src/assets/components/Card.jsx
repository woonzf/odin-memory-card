import { Howl } from "howler";
import { SmartTicker } from "react-smart-ticker";
import { updateImgLoad } from "../modules/flip";
import pokeball from "../img/pokeball.png";
import "../styles/Card.css";

function Card({ pokemon, id, onClick, disabled, windowWidth }) {
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
            <div className="w-full px-1 text-small md:text-normal">
              <SmartTicker speed={windowWidth < 768 ? 10 : 20}>
                <small className="pt-1 flex">
                  <span>&nbsp;&nbsp;</span>
                  <div className="capitalize">{pokemon.name}</div>
                  <span>&nbsp;&nbsp;</span>
                </small>
              </SmartTicker>
            </div>
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
