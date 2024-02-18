// This component will display a random pokemon and a math problem. The user will have to solve the math problem to catch the pokemon.
//  The pokemon will be added to the Pokedex if the user answers the math problem correctly.

import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import './Game.css';



const Game = () => {

    const [pokemon, setPokemon] = useState(null);
    const [answer, setAnswer] = useState('');
    const [message, setMessage] = useState('');

    const drawPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            const randomPokemon = response.data.results[Math.floor(Math.random() * response.data.results.length)];
            setPokemon(randomPokemon);
            setMessage('');
        } catch (error) {
            console.error('Error drawing pokemon:', error);
        }
    };

   
    // function to render a two digit random math problems and answers
   
   const a = Math.floor(Math.random() * 100);
   const b = Math.floor(Math.random() * 100);

    const mathProblem = {
        a: a,
        b: b,
        question: `What is ${a} + ${b}?`,
        answer: a + b
    }; 

    const handleChange = (evt) => {
      evt.preventDefault();
      setAnswer(evt.target.value);
    }
    
    const checkAnswer = () => {
        if (parseInt(answer) === mathProblem.answer) {
            setMessage('You caught the pokemon!');
        } else {
            setMessage('You failed to catch the pokemon!');
        }
        setAnswer('');
    };
    
    return (
        <div className='game-container'>
            <h1>Pokemon Game</h1>
            <Button onClick={drawPokemon}>Draw a Pokemon</Button>
            {pokemon && (
                <Card>
                    <CardBody>
                        <CardTitle>{pokemon.name}</CardTitle>
                        <p>{mathProblem.question} </p>
                        <p>{mathProblem.answer}</p>
                        <CardText>
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                       <Button onClick={checkAnswer}>Submit</Button>
                        </CardText>
                    </CardBody>
                </Card>
            )}
            {message && <p>{message}</p>}
        </div>
    );
}

export default Game;