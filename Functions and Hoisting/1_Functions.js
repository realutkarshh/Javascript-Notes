//-------------------------------------------------------------
// FUNCTIONS IN JAVASCRIPT - COMPLETE GUIDE
//-------------------------------------------------------------
// Functions are the heart of JavaScript programming.
// They allow you to group code into reusable blocks and execute them when needed.

//-------------------------------------------------------------
// 1. What is a Function?
//-------------------------------------------------------------
// A function is a set of statements that performs a task or calculates a value.
// Functions make code modular, readable, and reusable.

//-------------------------------------------------------------
// 2. Declaring a Function
//-------------------------------------------------------------
// Syntax:
// function functionName(parameters) {
//     // function body
//     // code to execute
// }

function greet() {
  console.log("Hello, JavaScript Learner!");
}

greet(); // Calling or invoking the function
// Output: Hello, JavaScript Learner!

//-------------------------------------------------------------
// 3. Function Parameters and Arguments
//-------------------------------------------------------------
// Parameters → Variables listed inside parentheses in the function definition.
// Arguments → Values passed when the function is called.

function greetUser(name) {
  console.log(`Hello, ${name}! Welcome to JavaScript.`);
}

greetUser("Utkarsh");
// Output: Hello, Utkarsh! Welcome to JavaScript.

//-------------------------------------------------------------
// 4. Return Statement
//-------------------------------------------------------------
// The 'return' keyword sends a value back from the function to the caller.

function add(a, b) {
  return a + b;
}

let result = add(10, 5);
console.log(result); // Output: 15

// Note: Once a return statement is executed, 
// the function stops executing further code.

function testReturn() {
  return "Returned value";
  console.log("This will never execute");
}

//-------------------------------------------------------------
// 5. Function Expressions
//-------------------------------------------------------------
// Functions can also be stored in variables.

const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // Output: 20

// ✅ Function expressions are not hoisted (unlike function declarations).

//-------------------------------------------------------------
// 6. Anonymous Functions
//-------------------------------------------------------------
// Anonymous functions are functions without a name.
// They are often used in callbacks and function expressions.

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

//-------------------------------------------------------------
// 7. Arrow Functions (ES6)
//-------------------------------------------------------------
// Arrow functions provide a shorter syntax for writing functions.

const divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2)); // Output: 5

// If there is only one statement, you can skip braces and 'return'
const square = n => n * n;
console.log(square(6)); // Output: 36

// ✅ Arrow functions do not have their own 'this' binding
// which makes them perfect for callbacks.

//-------------------------------------------------------------
// 8. Default Parameters (ES6)
//-------------------------------------------------------------
// Default values can be assigned to parameters 
// if no argument is passed during the function call.

function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

sayHello("Utkarsh"); // Output: Hello, Utkarsh!
sayHello();          // Output: Hello, Guest!

//-------------------------------------------------------------
// 9. Rest Parameters (...)
//-------------------------------------------------------------
// Rest parameters allow functions to accept any number of arguments as an array.

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) total += num;
  return total;
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//-------------------------------------------------------------
// 10. Function Scope and Hoisting
//-------------------------------------------------------------
// 🔹 Function Declarations are hoisted (can be called before they are defined).
// 🔹 Function Expressions and Arrow Functions are NOT hoisted.

hoistedFunction(); // Works fine

function hoistedFunction() {
  console.log("This function is hoisted!");
}

// notHoisted(); ❌ Error
const notHoisted = function () {
  console.log("This will not be hoisted.");
};

//-------------------------------------------------------------
// 11. Callback Functions
//-------------------------------------------------------------
// A callback is a function passed as an argument to another function,
// and executed after some operation is completed.

function processUserInput(callback) {
  let name = "Utkarsh";
  callback(name);
}

processUserInput(function (user) {
  console.log(`Hello, ${user}!`);
});
// Output: Hello, Utkarsh!

//-------------------------------------------------------------
// 12. Arrow Function + Callback Example
//-------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6, 8, 10

//-------------------------------------------------------------
// 13. Function Inside Function (Nested Functions)
//-------------------------------------------------------------
function outerFunction() {
  console.log("Outer function called");

  function innerFunction() {
    console.log("Inner function called");
  }

  innerFunction();
}

outerFunction();
// Output:
// Outer function called
// Inner function called

//-------------------------------------------------------------
// 14. Immediately Invoked Function Expression (IIFE)
//-------------------------------------------------------------
// An IIFE runs immediately after it is defined.

(function () {
  console.log("IIFE Executed Immediately!");
})();

// Output: IIFE Executed Immediately!

// ✅ Useful for avoiding variable pollution and creating private scopes.

//-------------------------------------------------------------
// 15. Arrow Function vs Regular Function
//-------------------------------------------------------------
// | Feature              | Regular Function | Arrow Function |
// |----------------------|------------------|----------------|
// | 'this' binding       | Has own 'this'   | Does NOT bind  |
// | Hoisting             | Yes              | No             |
// | Syntax               | Longer           | Shorter        |
// | Suitable for         | Methods, Objects | Callbacks, short logic |

//-------------------------------------------------------------
// 16. Summary
//-------------------------------------------------------------
// ✅ Functions help in organizing and reusing code.
// ✅ Can be declared, assigned to variables, or invoked immediately.
// ✅ Arrow functions offer concise syntax but lack their own 'this'.
// ✅ Default & rest parameters make functions flexible.
// ✅ Callbacks and nested functions enhance modularity.
// ✅ Always prefer meaningful function names for readability.

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 Use functions to make code modular and maintainable.
// 🔹 Use arrow functions for callbacks and short operations.
// 🔹 Use default & rest parameters for dynamic behavior.
// 🔹 Learn when to use return vs console.log.
// 🔹 Functions are the foundation of JS logic & reusability.