import { useState } from 'react';

function useFlip(initialFlipState = true) {
    const [isFlipped, setFlipped] = useState(initialFlipState);
  
    const flip = () => {
      setFlipped(isUp => !isUp);
    };
  
    return [isFlipped, flip];
  }


  export default useFlip;