/*  Selection Sort function to sort an array of numbers in ascending order
    Input: Array of numbers
    Output: Array of numbers in ascending order
    Example: selectionSort([3, 1, 2]) => [1, 2, 3]

    Plan:
    1. Loop through the array starting at the first element
    2. Assign the current index to a variable called lowest
    3. Loop through the array starting at the next index
    4. If the current value is less than the value at the lowest index, assign the current index to lowest
    5. If the current index is not equal to lowest, swap the values at the current index and lowest index
    6. Return the sorted array
*/

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }

        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

module.exports = selectionSort;