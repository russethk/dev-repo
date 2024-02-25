import React from "react";
import useFlip from '../hooks/useFlip'
import "./PokemonCard.css";

/* Renders a single pokemon card. */
/* Part 2 - Refactored to include logic from imported custom hook useFlip*/
function PokemonCard({ name, type, image_url }) {
  const [isFacingUp, flip] = useFlip();
  return (
    <div onClick={flip} className="PokemonCard Card">
      {isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={image_url} alt={`{name} front`} />
            <div>
            <p className="PokemonCard-name">Name: {name}</p>
            <p className="PokemonCard-type">Type: {type}</p>
            </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={image_url} alt={`{name} back`} />
          <div>
            <p className="PokemonCard-name">Name: {name}</p>
            <p className="PokemonCard-type">Type: {type}</p>
            </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;






