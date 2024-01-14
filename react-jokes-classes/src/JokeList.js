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
  const [isLoading, setIsLoading] = useState(false);

  /* retrieve jokes from API */

  useEffect(function getJokes() {
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
      } catch (e) {
        console.log(e);
      }
    }

    if (jokes.length === 0) getJokes();
  }
  , [jokes, numJokesToGet, setJokes]);

/* empty joke list, set to loading state, and then call getJokes */

  function generateNewJokes() {
    setIsLoading(true);
    setJokes([]);
  }

  /* change vote for this id by delta (+1 or -1) */

  function vote(id, delta) {
    setJokes(allJokes =>
      allJokes.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  }

  /* render: either loading spinner or list of sorted jokes. */

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
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
        />
      ))}
    </div>
  );
}

export default JokeList;
