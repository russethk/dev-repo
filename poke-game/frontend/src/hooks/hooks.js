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

// Part 3 - Custom hook for API calls
/* useAxios takes in a URL, and returns an array with two elements. 
The first element is an array of data obtained from previous AJAX requests
The second element is a function that will add a new object of data to the array.
The responses array is stored in localStorage under the provided key.
*
* The function addResponseData takes in two optional parameters:
* formatter: a function that will be applied to the response data before it is added to the array
* restOfUrl: a string that will be appended to the baseUrl when making the AJAX request
*
* The function clearResponses will empty the array of data.
*/

function useAxios(keyInLS, baseUrl) {
  const [responses, setResponses] = useLocalStorage(keyInLS);

  const addResponseData = async (formatter = data => data, restOfUrl = '') => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses(data => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
  
}

// Further Study - Custom hook for local storage
/* useLocalStorage takes in a key and an initial value, and returns an array with two elements.
The first element is the current value stored in localStorage under the provided key.
The second element is a function to update that value in localStorage.
*/
function useLocalStorage(key, initialValue = []) {
  if (localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key));
  }
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage };