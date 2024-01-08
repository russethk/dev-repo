import React from 'react';
import { Link } from 'react-router-dom';
import './ColorsList.css';

function ColorsList({ colors }) {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorsList">
      <header className="ColorsList-header">
        <h1 className="ColorsList-title">Welcome to the color factory.</h1>
        <h1>
          <Link to="/colors/new">Add a color</Link>
        </h1>
      </header>
      <div className="ColorsList-intro">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorsList;