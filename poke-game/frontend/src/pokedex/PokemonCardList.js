import React from "react";
import PokemonCard from "./PokemonCard";

/** Show list of pokemon cards.
 * 
 * Receives an array of pokemon objects and renders a PokemonCard for each.
 * 
 *PokemonList -> PokemonCardList -> PokemonCard
 */

function PokemonCardList({ pokemon }) {
    console.debug("PokemonCardList", "pokemon=", pokemon);

    return (
        <div className="PokemonCardList">
            {pokemon.map(pokemon => (
                <PokemonCard
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                    image_url={pokemon.image_url}
                />
            ))}
        </div>
    );
}

export default PokemonCardList;