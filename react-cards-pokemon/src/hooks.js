import React { useState, useEffect } from 'react';
import axios from 'axios';

function useFlip(initialFlipState = true) {
  const [isFlipped, setFlipped] = useState(initialFlipState);

  const flip = () => {
    setFlipped(isUp => !isUp);
  };

  return [isFlipped, flip];
}


export default useFlip;
