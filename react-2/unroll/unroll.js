function unroll(square) {
    
    const result = [];

    // loop until the square is empty
    
    while (square.length > 0) {
      // Move from left to right
      result.push(...square.shift());  // shift() removes the first element from an array and returns that removed element.
  
      // Move down all rows and remove the last element from each row
      for (let i = 0; i < square.length; i++) {
        result.push(square[i].pop()); // pop() removes the last element from an array and returns that element.
        if (square[i].length === 0) {
          square.splice(i, 1); 
          i--;
        }
      }
  
      // Move from right to left
      if (square.length > 0) {
        result.push(...square.pop().reverse()); // reverse() reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
      }
  
      // Move up all rows and remove the first element from each row
      for (let i = square.length - 1; i >= 0; i--) {
        result.push(square[i].shift()); // shift() removes the first element from an array and returns that removed element.
        if (square[i].length === 0) {
          square.splice(i, 1);
        }
      }
    }

    return result;
  };

  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  const result = unroll(square);
  console.log(result);

  module.exports = unroll;



