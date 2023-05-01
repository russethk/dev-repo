// Function with an input prompt 
// Calling the function creates a popup input box for the user.   
// When usewr inputs response, return the value of the input(food) as an argument to the food parameter in the order function,
// and then console.log a string with the user response ${food} included.  

function order(food) {
  food = prompt("Hi there!, What is your order?");
  return `I'll have the ${food}, please.`;
}


//order("salad"); // "I'll have the salad, please."
//order("pizza"); // "I'll have the pizza, please."
//order("tacos"); // "I'll have the tacos, please."
//food is a parameter to our function!

