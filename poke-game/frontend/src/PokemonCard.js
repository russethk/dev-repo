import React from "react";
import { useFlip } from "./hooks";
import "./PokemonCard.css";

/* Renders a single pokemon card. */
/* Part 2 - Refactored to include logic from imported custom hook useFlip*/
function PokemonCard({ front, back, name, stats }) {
  const [isFacingUp, flip] = useFlip();
  return (
    <div onClick={flip} className="PokemonCard Card">
      {isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">Name: {name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
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






