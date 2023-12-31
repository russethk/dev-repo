// MadlibForm.js
import React, { useState } from 'react';

const MadlibForm = ({ onSubmit }) => {
  const [selectedStory, setSelectedStory] = useState('');
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const stories = [
    { id: 'story1', 
    name: 'History', 
    prompts: ['place', 'noun', 'adjective', 'verb', 'pluralNoun'],
    template: 'Once upon a time in a long-ago {place}, there lived a large {adjective} {noun} that loved to {verb} {pluralNoun}.', 
    },
    { id: 'story2', 
    name: 'Scary', 
    prompts: ['place', 'noun', 'adjective', 'verb', 'pluralNoun'],
    template: 'One dark night in {place}, a {adjective} {noun} crept up along side some {pluralNoun} to {verb} them.',
    },
    // Add more story templates as needed
  ];

  const handleInputChange = (prompt, value) => {
    setFormData({ ...formData, [prompt]: value });
  };

  const validateForm = () => {
    const errors = {};
    stories.find((story) => {
      story.prompts.forEach((prompt) => {
        if (!formData[prompt]) {
          errors[prompt] = 'Please fill out this field';
        }
      });
      return Object.keys(errors).length > 0;
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(stories.find((story) => story.id === selectedStory), formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a Story:
        <select value={selectedStory} onChange={(e) => setSelectedStory(e.target.value)}>
          <option value="" disabled>Select a story</option>
          {stories.map((story) => (
            <option key={story.id} value={story.id}>
              {story.name}
            </option>
          ))}
        </select>
      </label>

      {selectedStory && (
        <div>
          <h2>Fill in the Blanks:</h2>
          {stories.find((story) => story.id === selectedStory).prompts.map((prompt) => (
            <div key={prompt}>
              <label>
                {prompt.charAt(0).toUpperCase() + prompt.slice(1)}:
                <input
                  type="text"
                  value={formData[prompt] || ''}
                  onChange={(e) => handleInputChange(prompt, e.target.value)}
                />
                {formErrors[prompt] && <span>{formErrors[prompt]}</span>}
              </label>
            </div>
          ))}
          <button type="submit">Generate Story</button>
        </div>
      )}
    </form>
  );
};

export default MadlibForm;
