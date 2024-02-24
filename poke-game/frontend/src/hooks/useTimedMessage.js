import { useRef, useState, useEffect } from "react";

function useTimedMessage (timeInMSecs = 3000) {
   const [active, setActive] = useState(false);
   
   const messageShownRef = useRef(false);

   useEffect(function showSaveMessage () {
    console.debug("hooks useTimedMessage useEffect", "active=", active);

    if (active && !messageShownRef.current) {
        messageShownRef.current = true;
        setTimeout(function removeMessage () {
            setActive(false);
            messageShownRef.current = false;
        }, timeInMSecs);
    }
}
, [active, timeInMSecs]);

   return [active, setActive];
}

export default useTimedMessage;