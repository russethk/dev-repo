import React from 'react';

const MadlibStory = ({ story, onRestart }) => {
  return (
    <div>
      <h2>Generated Story:</h2>
      <p>{story}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default MadlibStory;
