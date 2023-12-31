import React, { useState } from 'react';
import stories from './stories';
import './madlibform.css';

const MadlibForm = ({ onSubmit }) => {
  const [selectedStory, setSelectedStory] = useState('');
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

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
    <form className='selectform' onSubmit={handleSubmit}>
      <label>
        Select a Story:
        <select value={selectedStory} onChange={(e) => setSelectedStory(e.target.value)}>
          <option value="" disabled>Story type</option>
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
