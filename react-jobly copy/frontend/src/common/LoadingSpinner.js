import React from 'react';
import './LoadingSpinner.css';

/* Renders a spinning loading icon.
 *
 * Is rendered by App when loading API data.
 *
 * App -> LoadingSpinner
 */

function LoadingSpinner() {
  return (
      <div className="LoadingSpinner">
        Loading ...
      </div>
  );
}

export default LoadingSpinner;