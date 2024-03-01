// This component will display a random pokemon and a math problem. The user will have to solve the math problem to catch the pokemon.
//  The pokemon will be added to the Pokedex if the user answers the math problem correctly.

import React, { useState } from 'react';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import axios from 'axios'; 
import './Game.css';
import TypeButtons from '../common/TypeButtons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Game = () => {

    const [pokemon, setPokemon] = useState(null);
    const [answer, setAnswer] = useState('');
    const [message, setMessage] = useState('');


    // Draw a random Pokemon from the pokeapi
    // Get all the data from the pokeapi and select a random Pokemon
    // include the name and type of the Pokemon
    // Set the Pokemon to state

    const drawPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
            const randomPokemon = Math.floor(Math.random() * response.data.results.length);
            const pokemonData = await axios.get(response.data.results[randomPokemon].url);
            const { name, types } = pokemonData.data;
            setPokemon({ name, type: types[0].type.name });
            setMessage('');
        } catch (error) {
            console.error('Error drawing Pokemon:', error);
        }
    }

    // Compare the value of the TypeButton against the drawn Pokemon type
    // If the value of the TypeButtons matches the drawn Pokemon type
    // Set the message to 'You caught the Pokemon!'
    // Call the addPokemonToPokedex function

    const [score, setScore] = useState(0);

    const catchPokemon = () => {
        if (answer === pokemon.type) {
            setMessage('You caught the Pokemon!');
            addPokemonToPokedex();
            setScore(score + 1);
        } else {
            setMessage('You missed the Pokemon!');
        }
    }

    /* function catchPokemon adds the username and the pokemon id to the pokedex table in the database
    * Props: username, id  
    */


   const handleCatchPokemon = async (username, id) => {
    try {
        const response = await axios.post('/api/pokedex/', { username, id });
        console.log(response);
        } catch (error) {
        console.error('Error catching Pokemon:', error);
        }

    }

    // Add the Pokemon to the Pokedex
    // Call the handleCatchPokemon function
    // Pass the username and the pokemon id to the function

    const addPokemonToPokedex = () => {
        const username = localStorage.getItem('username');
        const id = pokemon.name;
        handleCatchPokemon(username, id);
    }

    return (
        <div className='game-container'>
          <div className='column-left'>
            <h1>Catch 'Em All!</h1>
            <Button onClick={drawPokemon}>Draw a Pokemon</Button>
            {pokemon && (
                <Card className="Card">
                    <CardBody>
                        <p>What type of pokemon is {pokemon.name}?</p>
                        <img className="game-img" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`} alt={pokemon.name} />
                        <CardText>
                            <TypeButtons add={setAnswer} />
                            <br />
                            <p>Choose the Pokemon type and then click Catch Pokemon!</p>
                            <input type='text' value={answer} onChange={e => setAnswer(e.target.value)} />
                            <Button onClick={catchPokemon}>Catch Pokemon</Button>
                        </CardText>
                    </CardBody>
                </Card>
            )}
          </div>
          <div className="column-right">
            <div className="scorecard">
                <h4>ScoreCard</h4>
                {message && <p className="message">{message}</p>}
                <p>Pokemon caught: {score}</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/pokeball-icon.png`} alt="pokeball" className="homepage-image" />
         </div>
        </div> 
    );
}

export default Game;