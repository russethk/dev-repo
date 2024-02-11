/*  Insertion Sort function to sort an array of numbers in ascending order
    Input: Array of numbers
    Output: Array of numbers in ascending order
    Example: insertionSort([3, 1, 2]) => [1, 2, 3]

    Plan:
    1. Loop through the array starting at the second element
    2. Store the current value in a variable
    3. Loop backwards through the array and compare the current value to the previous value
    4. If the current value is less than the previous value, move the previous value up one index
    5. Continue to loop backwards through the array until the current value is greater than the previous value
    6. Insert the current value at the index after the previous value
    7. Return the sorted array
*/


function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
    
        for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j];
        }
    
        arr[j + 1] = currentValue;
    }
    
    return arr;
}

module.exports = insertionSort;