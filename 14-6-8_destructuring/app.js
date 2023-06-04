/*ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
ES2015 Object Destructuring
*/

/* Write an ES2015 Version */

const {a, b} = obj.numbers;


/* ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
ES2015 One-Line Array Swap with Destructuring
*/
/* Write an ES2015 Version */

[arr[0],arr[1]] = [arr[1],arr[0]]


/* raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

