import React from 'react';
import './madlibstory.css';

const MadlibStory = ({ story, onRestart }) => {
  return (
    <div className='storycontainer'>
      <h2>Your Story:</h2>
      <p>{story}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default MadlibStory;
