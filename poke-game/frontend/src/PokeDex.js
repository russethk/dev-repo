// components/Pokedex.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // Fetch the pokemon in the postgresql database from backend
    async function fetchPokemon() {
      const res = await axios.get('http://localhost:3001/pokemon');
      setPokemon(res.data.pokemon);
    }
    fetchPokemon();
  }
  , []);

  const flipCard = (pokemon) => {
    // logic to flip the card and display details

    


  };

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemon.map((pokemon) => (
        <div key={pokemon.id} onClick={() => flipCard(pokemon)}>
          {/* Display Pokemon card here */}
        </div>
      ))}
    </div>
  );
};

export default Pokedex;
