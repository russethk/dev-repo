import React from 'react';
import { Link } from 'react-router-dom';
import './Color.css';

function Color({ hex, color, history }) {
  if (!hex) {
    history.push('/colors');
  }
  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <h1>This is {color}.</h1>
      <h1>
        <Link to="/colors">Go back</Link>
      </h1>
    </div>
  );
}

export default Color;