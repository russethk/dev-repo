import React from "react";
import { useFlip } from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css"


/* Renders a single playing card. */
/* Refactored to include logic from imported custom hook useFlip*/
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flip] = useFlip();
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
