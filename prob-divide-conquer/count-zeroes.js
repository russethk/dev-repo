/* The function counts the number of zeroes 
in an array of numbers given a sorted array of 1s and 0s which has all 1s first followed by all 0s.

using an O(log n) time complexity. 
*/

function countZeroes(arr) {
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;

    return arr.length - firstZero
}

function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;
        } else if (arr[mid] === 1) {
            return findFirst(arr, mid + 1, high)
        }
        return findFirst(arr, low, mid - 1)
    }
    return -1;
}
   

module.exports = countZeroes