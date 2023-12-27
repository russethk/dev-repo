import { useState, useEffect } from 'react';
import axios from 'axios';

// Part 2 - Custom hook for state and flip functions for cards
function useFlip(initialFlipState = true) {
  const [isFlipped, setFlipped] = useState(initialFlipState);

  const flip = () => {
    setFlipped(isUp => !isUp);
  };

  return [isFlipped, flip];
}


export { useFlip };
