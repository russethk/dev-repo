
/* Merge function accepts two sorted arrays and returns a new array with values from both arrays sorted.
*/

function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
        j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    
    return results;
}

/* MergeSort function accepts an array and returns a new array with sorted values.
* It breaks up the array into halves until it can compare one value with another
* It merges the smaller arrays with other sorted pairs until back at the full length of the array
* It returns the merged array
*/


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

module.exports = { merge, mergeSort};