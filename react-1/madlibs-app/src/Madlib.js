// App.js
import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

const Madlib = () => {
  const [showForm, setShowForm] = useState(true);
  const [story, setStory] = useState('');

  const handleFormSubmit = (selectedStory, formData) => {
    // Combine selected story template with user inputs
    const formattedStory = formatStory(selectedStory, formData);

    // Update state to show the generated story
    setStory(formattedStory);

    // Toggle to hide the form and show the story
    setShowForm(false);
  };

  const handleRestart = () => {
    // Reset state to show the form again
    setShowForm(true);
    setStory('');
  };

  const formatStory = (selectedStory, formData) => {
    // Implement the logic to replace placeholders in the story with form inputs
    // For example: "Once upon a time, there was a {adjective} {noun}..."
    let formattedStory = selectedStory.template;
    selectedStory.prompts.forEach(prompt => {
      formattedStory = formattedStory.replace(`{${prompt}}`, formData[prompt]);
    });

    return formattedStory;
  };

  return (
    <div>
      {showForm ? (
        <MadlibForm onSubmit={handleFormSubmit} />
      ) : (
        <MadlibStory story={story} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default Madlib;

