import { useState } from "react";
import "../styles/Card.css";

function Card() {
  const [isFlipped, setIsFlipped] = useState(0);

  function handleIsFlippedChange() {
    setIsFlipped(+!isFlipped);
  }

  return (
    <button className="card" onClick={handleIsFlippedChange}>
      <div className={"card-inner " + (isFlipped ? "flip" : "")}>
        <div className="card-front">Front</div>
        <div className="card-back">Back</div>
      </div>
    </button>
  );
}

export default Card;
