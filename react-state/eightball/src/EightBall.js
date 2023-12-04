import React, { useState } from 'react';
import './EightBall.css';

import defaultAnswers from './answers.json';
import { choice } from './random';

/** EightBall: shows random answer and, on click, changes answer,
 * 
 * Props:
 * - answers: array of {msg, color} objects
 * 
 * State:
 * - answer: {msg, color} of current answer
 */

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = React.useState({ 
        msg: "Think of a Question.",
        color: "black" 
    });

    function reset() {
        setAnswer({ 
            msg: "Think of a Question.",
            color: "black" 
        });
    }
    
    function handleClick(evt) {
        setAnswer(choice(answers));
      }
    
    return (
     <div className="EightBall-container">
       <div className="EightBall"
          onClick={handleClick}
          style={{ backgroundColor: answer.color }}>
        <b>{answer.msg}</b>
       </div>
       <button onClick={reset}>Try Again</button>
      </div>
    );
};


export default EightBall;