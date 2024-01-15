import React from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. 
 * Refactored to use functional components with hooks instead of class components
*/

function Joke({ id, text, votes, vote, lock }) {
  function upVote(evt) { vote(id, +1); }
  function downVote(evt) { vote(id, -1); }
  function lockVote(evt) { lock(id); }
  
    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}

        </div>

        <div className="Joke-text">{text}</div>

       
      </div>
    );
}

export default Joke;
