// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Game from './game/Game';
import PokemonList from './pokedex/PokemonList';
import NavBar from './NavBar';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/pokedex" element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

