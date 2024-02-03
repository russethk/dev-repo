/*  A function that accepts an array and a value of x and returns the floor of x in the array.
The floor of x in an array is the largest element in the array which is smaller than or equal to x.
If the floor does not exist, the function returns -1.
The time complexity of the function is O(log n)

*/

function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];

    let mid = Math.floor((low + high) / 2)

    if (arr[mid] === num) return arr[mid];

    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
        return arr[mid - 1];
    }

    if (num < arr[mid]) {
        return findFloor(arr, num, low, mid - 1);
    }

    return findFloor(arr, num, mid + 1, high)
  
}

module.exports = findFloor