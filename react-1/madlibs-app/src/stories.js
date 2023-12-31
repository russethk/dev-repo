const stories = [
    { id: 'story1', 
    name: 'History', 
    prompts: ['place', 'noun', 'adjective', 'verbPastTense', 'color', 'pluralNoun'],
    template: 'Once upon a time in a long-ago {place}, there lived a large {adjective} {noun} that {verbPastTense} {color} {pluralNoun}.', 
    },
    { id: 'story2', 
    name: 'Scary', 
    prompts: ['place', 'noun', 'adjective', 'verbPastTense', 'color', 'pluralNoun'],
    template: 'One dark night in {place}, a {adjective} {noun} crept up along side some {color} {pluralNoun} and {verbPastTense} them.',
    },
    { id: 'story3',
    name: 'Romance',
    prompts: ['place', 'noun', 'adjective', 'verbPastTense', 'color', 'pluralNoun'],
    template: 'A long time ago in {place}, a {adjective} man gave a young girl two {color} {pluralNoun} and {verbPastTense} her under a {noun}.'
    },
    { id: 'story4',
    name: 'Comedy',
    prompts: ['place', 'noun', 'adjective', 'verbPastTense', 'color', 'pluralNoun'],
    template: 'There once was a {adjective} {noun} that {verbPastTense} three {pluralNoun} in {place}.',
    },
    // Add more story templates as needed
  ];

export default stories;