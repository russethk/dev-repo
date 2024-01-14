import { useState, useEffect } from 'react';


// Custom hook for useLocalStorage

function useLocalStorage(key, defaultValue) {
    // if the key is not in local storage, set it to the default value
    // if it is, use the value from local storage
    const [state, setState] = useState(() => {
        let val;
        try {
        val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        }
        catch (e) {
        val = defaultValue;
        }
        return val;
    });
    
    // use useEffect to update local storage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    
    return [state, setState];
}


export default useLocalStorage;



