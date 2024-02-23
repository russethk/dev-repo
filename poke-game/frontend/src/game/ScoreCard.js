// ScoreCard.js
import React from 'react';
import { score } from '../Game';

// Get the score from the Game component and display it
// The score will be incremented by 1 each time the user catches a Pokemon

const ScoreCard = () => {
    return (
        <div>
        <p>Pokemon caught: {score}</p>
        </div>
    );
};

export default ScoreCard;