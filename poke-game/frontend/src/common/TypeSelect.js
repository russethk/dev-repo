
import React from 'react';
import './TypeSelect.css';

const Normal = process.env.PUBLIC_URL + '/icons/normal.svg';
const Fire = process.env.PUBLIC_URL + '/icons/fire.svg';
const Water = process.env.PUBLIC_URL + '/icons/water.svg';
const Electric = process.env.PUBLIC_URL + '/icons/electric.svg';
const Grass = process.env.PUBLIC_URL + '/icons/grass.svg';
const Ice = process.env.PUBLIC_URL + '/icons/ice.svg';
const Fighting = process.env.PUBLIC_URL + '/icons/fighting.svg';
const Poison = process.env.PUBLIC_URL + '/icons/poison.svg';
const Ground = process.env.PUBLIC_URL + '/icons/ground.svg';
const Flying = process.env.PUBLIC_URL + '/icons/flying.svg';
const Psychic = process.env.PUBLIC_URL + '/icons/psychic.svg';
const Bug = process.env.PUBLIC_URL + '/icons/bug.svg';
const Rock = process.env.PUBLIC_URL + '/icons/rock.svg';
const Ghost = process.env.PUBLIC_URL + '/icons/ghost.svg';
const Dark = process.env.PUBLIC_URL + '/icons/dark.svg';
const Dragon = process.env.PUBLIC_URL + '/icons/dragon.svg';
const Steel = process.env.PUBLIC_URL + '/icons/steel.svg';
const Fairy = process.env.PUBLIC_URL + '/icons/fairy.svg';



// This component returns a list of icons for each type of Pokemon
// Get the icons for each type of Pokemon from the icons folder in public and set the value of the button to the type of Pokemon
// on click, the stype property is passed to get all the Pokemon of that type from the database
// and display the list of Pokemon of that type


function PokemonTypeSelect({ add }) {
    return (
      <div className="wrapper">
        <button className="icon normal" onClick={() => add('normal')}><img src={Normal} alt="Normal" /></button>
        <button className="icon fire" onClick={() => add('fire')}><img src={Fire} alt="Fire" /></button>
        <button className="icon water" onClick={() => add('water')}><img src={Water} alt="Water" /></button>
        <button className="icon electric" onClick={() => add('electric')}><img src={Electric} alt="Electric" /></button>
        <button className="icon grass" onClick={() => add('grass')}><img src={Grass} alt="Grass" /></button>
        <button className="icon ice" onClick={() => add('ice')}><img src={Ice} alt="Ice" /></button>
        <button className="icon fighting" onClick={() => add('fighting')}><img src={Fighting} alt="Fighting" /></button>
        <button className="icon poison" onClick={() => add('poison')}><img src={Poison} alt="Poison" /></button>
        <button className="icon ground" onClick={() => add('ground')}><img src={Ground} alt="Ground" /></button>
        <button className="icon flying" onClick={() => add('flying')}><img src={Flying} alt="Flying" /></button>
        <button className="icon psychic" onClick={() => add('psychic')}><img src={Psychic} alt="Psychic" /></button>
        <button className="icon bug" onClick={() => add('bug')}><img src={Bug} alt="Bug" /></button>
        <button className="icon rock" onClick={() => add('rock')}><img src={Rock} alt="Rock" /></button>
        <button className="icon ghost" onClick={() => add('ghost')}><img src={Ghost} alt="Ghost" /></button>
        <button className="icon dark" onClick={() => add('dark')}><img src={Dark} alt="Dark" /></button>
        <button className="icon dragon" onClick={() => add('dragon')}><img src={Dragon} alt="Dragon" /></button>
        <button className="icon steel" onClick={() => add('steel')}><img src={Steel} alt="Steel" /></button>
        <button className="icon fairy" onClick={() => add('fairy')}><img src={Fairy} alt="Fairy" /></button>
    </div>
    );
  }

export default PokemonTypeSelect;