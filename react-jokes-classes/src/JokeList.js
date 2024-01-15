import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from './hooks';
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. 
 * Refactored to use functional components with hooks instead of class components
 * saves jokes to local storage from custom hook useLocalStorage 
 * and retrieves them on page load
*/

function JokeList({ numJokesToGet = 5 }) {
  const [jokes, setJokes] = useLocalStorage("jokes", []);
  const [isLoading, setIsLoading] = useState(true);
 

  /* at mount, get jokes 
  * if local storage is empty, get jokes from API
  * if a joke is locked, it will stay in place when new jokes are generated
  */
  
  useEffect(function() {
    async function getJokes() {
      try {
        let j = [...jokes];
        let seenJokes = new Set();
        
      while (j.length < numJokesToGet) {
          let res = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" }
          });

          let { status, ...jokeObj } = res.data;

          if (!seenJokes.has(jokeObj.id)) {
            seenJokes.add(jokeObj.id);
            j.push({ ...jokeObj, votes: 0 });
          } else {
            console.error("duplicate found!");
          }
        }

        setJokes(j);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    if (jokes.length === 0) getJokes();
    else setIsLoading(false);
  }, [jokes, numJokesToGet, setJokes]);
  
  /* Get new jokes keeping lock jokes included with the new jokes */

 function generateNewJokes() {
    setIsLoading(true);
    let newJokes = [...jokes].filter(j => j.locked);
    setJokes(newJokes); 
  }

  /* change vote for this id by delta (+1 or -1) */

  function vote(id, delta) {
    setJokes(jokes =>
      jokes.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  }

  /* toggle whether this joke is locked */

  function lock(id) {
    setJokes(jokes =>
      jokes.map(j => (j.id === id ? { ...j, locked: !j.locked } : j))
    );
  }

  /* render: either loading spinner or list of sorted jokes. */

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
        <h1 className="JokeList-title">Loading...</h1>
      </div>
      )
  }

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map(j => (
        <Joke
          text={j.joke}
          key={j.id}
          id={j.id}
          votes={j.votes}
          vote={vote}
          lock={lock}
        />
      ))}
    </div>
  );
}

export default JokeList;
