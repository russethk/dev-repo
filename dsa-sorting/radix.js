/* radixSort accepts an array of numbers and sorts them in ascending order
based on the number of digits they contain.

It distributes the numbers into 10 different buckets based on the kth digit
of each number. It then concatenates all the numbers into a new array and
repeats the process for the next digit.

The function uses the getDigit, digitCount, and mostDigits helper functions

Plan:
- Find the number with the most digits
- Create 10 empty arrays to represent the 10 possible digits (0-9)
- Place each number in the corresponding bucket based on its kth digit
- Concatenate all the numbers into a new array
- Use the getDigit, digitCount, and mostDigits helper functions to sort the array

*/

function getDigit(num, i) {
    // returns the digit in num at the i-th place
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    // returns the number of digits in num
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        // returns the number with the most digits
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };

