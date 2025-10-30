//-------------------------------------------------------------
// SCOPE AND HOISTING IN JAVASCRIPT - COMPLETE GUIDE
//-------------------------------------------------------------
// Scope determines the accessibility (visibility) of variables.
// Hoisting defines how JavaScript moves variable and function declarations to the top during compilation.

//-------------------------------------------------------------
// 1. What is Scope?
//-------------------------------------------------------------
// Scope means where a variable or function is accessible in your code.
// There are 3 main types of scope in JavaScript:
// 🔹 Global Scope
// 🔹 Function Scope
// 🔹 Block Scope

//-------------------------------------------------------------
// 2. Global Scope
//-------------------------------------------------------------
// Variables declared outside any function or block have global scope.
// They can be accessed anywhere in the program.

let globalVar = "I'm global!";

function showGlobal() {
  console.log(globalVar); // Accessible inside function
}

showGlobal();
console.log(globalVar); // Accessible outside function too
// Output: I'm global!

//-------------------------------------------------------------
// 3. Function Scope
//-------------------------------------------------------------
// Variables declared with 'var', 'let', or 'const' inside a function
// are accessible only within that function.

function greet() {
  let name = "Utkarsh";
  console.log(`Hello, ${name}!`);
}

greet();
// console.log(name); // ❌ Error: name is not defined
// 'name' is only available inside greet() function.

//-------------------------------------------------------------
// 4. Block Scope
//-------------------------------------------------------------
// Variables declared with 'let' or 'const' inside a block { }
// are only accessible within that block.

{
  let blockVariable = "I'm inside a block!";
  console.log(blockVariable); // ✅ Accessible here
}
// console.log(blockVariable); // ❌ Error: blockVariable is not defined

// 'var' does NOT have block scope — only function scope.

if (true) {
  var city = "Delhi";
  let country = "India";
}

console.log(city);    // ✅ Delhi
// console.log(country); // ❌ Error: country is not defined

//-------------------------------------------------------------
// 5. Lexical (Nested) Scope
//-------------------------------------------------------------
// Inner functions can access variables from their outer (parent) functions.

function outer() {
  let outerVar = "Outer";

  function inner() {
    console.log(outerVar); // ✅ Can access parent's variable
  }

  inner();
}

outer();
// Output: Outer

//-------------------------------------------------------------
// 6. Scope Chain
//-------------------------------------------------------------
// When a variable is used, JS looks for it in the current scope.
// If not found, it moves to the parent scope, and continues up to the global scope.

let a = 10;

function outerFunc() {
  let b = 20;
  function innerFunc() {
    let c = 30;
    console.log(a, b, c); // Finds a, b, c through the scope chain
  }
  innerFunc();
}

outerFunc();
// Output: 10 20 30

//-------------------------------------------------------------
// 7. What is Hoisting?
//-------------------------------------------------------------
// Hoisting is JavaScript’s behavior of moving declarations (not initializations)
// to the top of their scope before code execution.

//-------------------------------------------------------------
// 8. Variable Hoisting with 'var'
//-------------------------------------------------------------
// Variables declared with 'var' are hoisted but initialized as 'undefined'.

console.log(name); // Output: undefined
var name = "Utkarsh";

// Internally, JS does this:
// var name;
// console.log(name);
// name = "Utkarsh";

//-------------------------------------------------------------
// 9. Variable Hoisting with 'let' and 'const'
//-------------------------------------------------------------
// 'let' and 'const' are hoisted too but not initialized.
// Accessing them before declaration gives a "ReferenceError" due to the Temporal Dead Zone (TDZ).

// console.log(age); // ❌ ReferenceError
let age = 20;

//-------------------------------------------------------------
// 10. Function Hoisting
//-------------------------------------------------------------
// Function Declarations are fully hoisted — 
// you can call them before they are defined.

sayHello(); // ✅ Works

function sayHello() {
  console.log("Hello, this function is hoisted!");
}

// But Function Expressions and Arrow Functions are NOT hoisted.

try {
  sayHi(); // ❌ Error
} catch (e) {
  console.log("Error:", e.message);
}

const sayHi = function () {
  console.log("Hi there!");
};

//-------------------------------------------------------------
// 11. Temporal Dead Zone (TDZ)
//-------------------------------------------------------------
// The TDZ is the phase between variable hoisting and declaration.
// Variables in TDZ exist but cannot be accessed.

{
  // console.log(count); // ❌ ReferenceError
  let count = 5;
  console.log(count); // ✅ 5
}

//-------------------------------------------------------------
// 12. Practical Example of Hoisting
//-------------------------------------------------------------
var x = 5;

function testHoisting() {
  console.log(x); // undefined (local 'x' is hoisted)
  var x = 10;
  console.log(x); // 10
}

testHoisting();
// Output:
// undefined
// 10

// Because inside the function, 'var x' is hoisted to the top as undefined.

//-------------------------------------------------------------
// 13. Hoisting Order Summary
//-------------------------------------------------------------
// | Declaration Type | Hoisted? | Initialized? | Accessible Before Declaration |
// |------------------|-----------|---------------|-------------------------------|
// | var              | ✅ Yes     | ✅ As undefined | ⚠️ Yes (but undefined)        |
// | let              | ✅ Yes     | ❌ No           | ❌ No (TDZ Error)             |
// | const            | ✅ Yes     | ❌ No           | ❌ No (TDZ Error)             |
// | function decl.   | ✅ Yes     | ✅ Yes          | ✅ Yes                        |
// | function expr.   | ⚠️ Partial | ❌ No           | ❌ No                         |
// | arrow function   | ⚠️ Partial | ❌ No           | ❌ No                         |

//-------------------------------------------------------------
// 14. Scope vs Hoisting - Key Difference
//-------------------------------------------------------------
// 🔹 Scope defines *where* a variable or function is accessible.
// 🔹 Hoisting defines *when* they become available during execution.

//-------------------------------------------------------------
// 15. Summary
//-------------------------------------------------------------
// ✅ Global scope → Accessible anywhere
// ✅ Function scope → Visible inside function only
// ✅ Block scope → For let/const inside { }
// ✅ Hoisting → Moves declarations to the top
// ✅ var → Hoisted & initialized as undefined
// ✅ let/const → Hoisted but in TDZ (not accessible before declaration)
// ✅ Functions → Declarations hoisted, expressions not
// ✅ Lexical scope → Inner functions can access outer variables

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 Use 'let' and 'const' instead of 'var' to avoid hoisting issues.
// 🔹 Always declare variables at the top of their scope.
// 🔹 Understand the TDZ to prevent ReferenceErrors.
// 🔹 Remember that function declarations are hoisted, not expressions.
// 🔹 Proper understanding of scope prevents bugs and improves code readability.