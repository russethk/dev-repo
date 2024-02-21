import React from "react";
import { useFlip } from "./hooks";
import "./PokemonCard.css";

/* Renders a single pokemon card. */
/* Part 2 - Refactored to include logic from imported custom hook useFlip*/
function PokemonCard({ front, back, name, type, stats}) {
  const [isFacingUp, flip] = useFlip();
  return (
    <div onClick={flip} className="PokemonCard Card">
      {isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">Name: {name}</p>
            <p className="PokemonCard-type">Type: {type}</p>
            <p className="PokemonCard-stat">EXP: {stats.base_experience}</p>
            <p className="PokemonCard-stat">Attack: {stats.attack}</p>
            <p className="PokemonCard-stat">Defense: {stats.defense}</p>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;






