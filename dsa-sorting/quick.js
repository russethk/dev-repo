/*
pivot accepts an array, starting index, and ending index

pivot function takes the array sets the pivot value to the first element of the array
It mutates the array and places all values less than the pivot to the left of the pivot
and all values greater than the pivot to the right of the pivot. The pivot index is returned.

Plan:
- Create a swap function that accepts an array and two indexes
- Set the pivot to the value of the first element in the array
- Set the swap index to the start index
- Loop through the array starting at the start index
- If the pivot is greater than the current element, increment the swap index and swap the current element with the element at the swap index
- Swap the pivot with the element at the swap index
- Return the swap index
*/

function pivot(arr, start = 0, end = arr.length - 1 ){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

/*
quickSort accepts an array, left index, and right index

The function uses the pivot helper function to sort the array in place
The function recursively calls itself on the left and right sides of the pivot

Plan:
- If the left index is less than the right index
    - Set the pivot index to the result of calling the pivot function on the array
    - Recursively call quickSort on the left and right sides of the pivot
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = { pivot, quickSort };