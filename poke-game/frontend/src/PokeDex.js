import React from "react";
import { useAxios } from "./hooks";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards. 
    This component uses the useAxios hook to get the list of pokemon from the postgreSQL database.
    Refactored to use the useAxios hook to get the list of pokemon from the postgreSQL database.
*/

const PokeDex = () => {
  // Get the list of pokemon from the postgreSQL database using the useAxios hook
  const [pokemon, addPokemon] = useAxios("pokemon", "https://pokeapi.co/api/v2/pokemon/");

  return (
   <div className="PokeDex">
    <div className="PokeDex-card-area">
      {pokemon.map(card => (
        <PokemonCard key={card.id} {...card}/>
      ))}
    </div>
  </div>
);
}

export default PokeDex;