import React from "react";
import Pokegame from "./Pokegame";
import "./Pokedex.css";

/** Main App component. */

function App() {
  return (
      <div className="App">
         <h2 className="Pokedex-title">Pokédex</h2> 
        <Pokegame />
      </div>
  );
}

export default App;
