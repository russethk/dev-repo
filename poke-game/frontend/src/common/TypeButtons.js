// Generates a list of button for each type of Pokemon
// Pokemon types are: Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dark, Dragon, Steel, Fairy
// Get the pokemon types from the pokeapi: https://pokeapi.co/api/v2/type/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TypeButtons.css';


// This component will display a list of buttons for each type of Pokemon
// Pokemon types are: Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dark, Dragon, Steel, Fairy
// and set the value of the button to the type of Pokemon

const TypeButtons = ({ add }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const getTypes = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/type/');
                setTypes(response.data.results);
            } catch (error) {
                console.error('Error getting types:', error);
            }
        }
        getTypes();
    }, []);

    return (
        <div className="wrapper">
            {types.map((type, idx) => (
                <button key={idx} class={type.name} onClick={() => add(type.name)}>{type.name}</button>
            ))}
        </div>
    );
}

export default TypeButtons;



