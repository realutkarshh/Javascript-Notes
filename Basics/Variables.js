// ===============================
// JAVASCRIPT VARIABLES - COMPLETE GUIDE
// ===============================

// In JavaScript, variables are used to store data values.
// You can think of a variable as a container that holds information
// which can be used and modified later in the program.

// ===============================
//  1. Declaring Variables
// ===============================

// Using 'let' - allows reassignment but not redeclaration within the same scope
let message;
message = "Hello World";

console.log(message); // Output: Hello World

// Declare multiple variables in a single line
let userName = 'Utkarsh', age = 20, rollNo = 64;
console.log(userName, age, rollNo);

// ===============================
//  2. Variable Keywords: var, let, const
// ===============================

// --- var ---
// 👉 Function-scoped or globally-scoped
// 👉 Can be redeclared and reassigned
// 👉 Avoid using 'var' in Modern JS (can cause bugs due to hoisting behavior)

var name = 'John Doe';
var name = 'Jane Doe'; // ✅ Redeclaration allowed
console.log(name); // Output: Jane Doe

// --- let ---
// 👉 Block-scoped (works only within {})
// 👉 Cannot be redeclared in the same scope
// 👉 Can be reassigned

let city = 'Delhi';
// let city = 'Mumbai'; ❌ Error: Identifier 'city' has already been declared
city = 'Bangalore'; // ✅ Reassignment allowed
console.log(city);

// --- const ---
// 👉 Block-scoped
// 👉 Cannot be redeclared or reassigned
// 👉 Must be initialized at the time of declaration

const country = 'India';
// country = 'USA'; ❌ Error: Assignment to constant variable
console.log(country);

// Note: For objects or arrays declared with const,
// you cannot reassign the variable, but you CAN modify its content.

const student = {
  name: 'Utkarsh',
  age: 21
};

student.age = 22; // ✅ Allowed (modifying property)
console.log(student);

// ===============================
//  3. Scope in JavaScript
// ===============================

// Global Scope: Accessible everywhere
let globalVar = 'I am global';

function printGlobal() {
  console.log(globalVar);
}
printGlobal();

// Function Scope: Accessible only inside a function
function testScope() {
  var functionScoped = "I'm inside function";
  console.log(functionScoped);
}
// console.log(functionScoped); ❌ Error: functionScoped is not defined
testScope();

// Block Scope: Works with let and const
{
  let blockVar = "I'm inside block";
  const blockConst = "I’m also block-scoped";
  console.log(blockVar);
  console.log(blockConst);
}
// console.log(blockVar); ❌ Error

// ===============================
//  4. Hoisting in JavaScript
// ===============================

// Hoisting means variable declarations are moved to the top of their scope
// But only the DECLARATION is hoisted, not the initialization

console.log(hoistedVar); // Output: undefined (due to hoisting)
var hoistedVar = "I’m hoisted";

// console.log(hoistedLet); ❌ Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I’m not hoisted like var";

// ===============================
//  5. Variable Naming Rules
// ===============================
// ✅ Must begin with a letter, $, or _
// ✅ Cannot start with a number
// ✅ Case-sensitive (myVar and myvar are different)
// ✅ Avoid using reserved words like 'for', 'class', etc.

let _privateVar = "valid";
let $price = 100;
let user1 = "Utkarsh";
console.log(_privateVar, $price, user1);

// ===============================
//  6. Good Practices for Variables
// ===============================

// ✅ Use 'const' by default, and 'let' when reassignment is needed
// ✅ Use meaningful variable names
// ✅ Avoid using 'var' in modern code
// ✅ Follow camelCase convention (e.g., userName, totalAmount)

// Example:
const maxScore = 100;
let currentScore = 78;

console.log(`You scored ${currentScore} out of ${maxScore}`);

// ===============================
//  7. Dynamic Typing in JavaScript
// ===============================
// JavaScript is dynamically typed — variable types can change at runtime

let dynamicVar = 10;        // number
dynamicVar = "Now a string"; // string
dynamicVar = true;          // boolean

console.log(typeof dynamicVar); // Output: boolean

// ===============================
// 🧾 8. Summary
// ===============================
// var   → function/global scope, redeclarable, hoisted (avoid using)
// let   → block scope, not redeclarable, reassignment allowed
// const → block scope, immutable reference, best for constants

// ✅ Modern best practice: Use 'const' and 'let' instead of 'var'

// ===============================
// END OF FILE
// ===============================