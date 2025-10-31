//-------------------------------------------------------------
// FUNCTIONS IN JAVASCRIPT - PART 1
//-------------------------------------------------------------
// Functions are one of the most important building blocks in JavaScript.
// They allow you to group reusable blocks of code to perform specific tasks.

//-------------------------------------------------------------
// 1. INTRODUCTION TO FUNCTIONS
//-------------------------------------------------------------
// A function is a block of code designed to perform a particular task.
// It is executed when "called" or "invoked".
// Functions help in:
//    Code reusability
//    Modularity
//    Reducing redundancy
//    Easy debugging

//-------------------------------------------------------------
// BASIC SYNTAX
//-------------------------------------------------------------
function functionName(parameters) {
  // code to be executed
}

//-------------------------------------------------------------
// Example:
function greet() {
  console.log("Hello, Welcome to JavaScript Functions! 👋");
}

greet(); // Function call
// Output → Hello, Welcome to JavaScript Functions! 👋

//-------------------------------------------------------------
// Example with Parameters
//-------------------------------------------------------------
function greetUser(name) {
  console.log(`Hello ${name}, Welcome back! 👋`);
}

greetUser("Utkarsh"); // Hello Utkarsh, Welcome back! 👋

//-------------------------------------------------------------
// Example with Return Value
//-------------------------------------------------------------
function add(a, b) {
  return a + b; // returns the result to the caller
}

let sum = add(10, 20);
console.log(sum); // 30

//-------------------------------------------------------------
// KEY POINTS
//-------------------------------------------------------------
// 🔹 "return" ends the function execution and sends a value back.
// 🔹 Functions can accept multiple parameters (separated by commas).
// 🔹 If no value is returned, function returns "undefined" by default.
// 🔹 Function names should be meaningful and follow camelCase convention.

//-------------------------------------------------------------
// 2. FUNCTION DECLARATION vs FUNCTION EXPRESSION
//-------------------------------------------------------------
// There are multiple ways to create a function in JavaScript.

//-------------------------------------------------------------
// (A) FUNCTION DECLARATION (Traditional way)
//-------------------------------------------------------------
// Syntax:
function sayHello() {
  console.log("Hello World!");
}

sayHello(); // can be called even before the declaration (due to Hoisting)

//-------------------------------------------------------------
// Example with Parameters
//-------------------------------------------------------------
function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 6)); // 30

//-------------------------------------------------------------
// (B) FUNCTION EXPRESSION
//-------------------------------------------------------------
// ➤ Function is stored inside a variable like any other value.
// ➤ Not hoisted (cannot be called before declaration).

// Syntax:
const sayHi = function() {
  console.log("Hi there!");
};

sayHi(); // Hi there!

//-------------------------------------------------------------
// Example with Return
//-------------------------------------------------------------
const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(10, 3)); // 7

//-------------------------------------------------------------
// Differences Between Declaration & Expression
//-------------------------------------------------------------
// | Aspect                | Function Declaration         | Function Expression            |
// |------------------------|-----------------------------|--------------------------------|
// | Hoisting              | Yes (can be called earlier)  | No (must be defined first)     |
// | Syntax Style          | Named function               | Anonymous (often)              |
// | Use Case              | General reusable functions   | When assigning to variables or passing as arguments |
// | Example               | function greet() {...}       | const greet = function() {...} |

//-------------------------------------------------------------
// PRACTICAL USE CASE
//-------------------------------------------------------------
// Function expressions are often used in event handlers or callbacks:
document.addEventListener("click", function() {
  console.log("Screen clicked!");
});

//-------------------------------------------------------------
// SUMMARY
//-------------------------------------------------------------
// 🔹 Functions = Reusable blocks of code.
// 🔹 Can have parameters and return values.
// 🔹 Two main types → Declarations and Expressions.
// 🔹 Declarations are hoisted; Expressions are not.
// 🔹 Both are widely used depending on context.
