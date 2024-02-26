import React, { useState, useEffect } from 'react';
import PokedexApi from '../api/api';
import PokemonCardList from './PokemonCardList';
import LoadingSpinner from '../common/LoadingSpinner';
import './PokemonList.css';
import '../common/TypeSelect.css'
import TypeSelect from '../common/TypeSelect';

/** Show page with list of pokemon.
 * 
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 * 
 * PokemonList -> PokemonCardList -> PokemonCard
 */

function PokemonList() {
    console.debug("PokemonList");

    const [pokemon, setPokemon] = useState(null);

    useEffect(function getAllPokemonOnMount() {
        console.debug("PokemonList useEffect getAllPokemonOnMount");
        search();
    }, []);

    /** Triggered by search form submit; reloads pokemon. */
    async function search() {
        let pokemon = await PokedexApi.getPokemon();
        setPokemon(pokemon);
    }

    if (!pokemon) return <LoadingSpinner />;

    /* Render list of pokemon from the database */
    return (
        <div className="PokemonList col-md">
          <div className="PokemonList-container">
            <div className="PokemonCardList-title"><h1>Pokedex</h1></div>
            {pokemon.length
                ? <PokemonCardList pokemon={pokemon}/>
                : <p className="lead">Sorry, no results were found!</p>}
        </div>
      </div>
    );
}

export default PokemonList;