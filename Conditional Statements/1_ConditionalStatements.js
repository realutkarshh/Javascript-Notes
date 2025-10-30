//-------------------------------------------------------------
// CONDITIONAL BRANCHING IN JAVASCRIPT (if, else, and '?') - COMPLETE GUIDE
//-------------------------------------------------------------
// In JavaScript, conditional statements allow you to execute different blocks of code
// depending on whether a condition is true or false.

//-------------------------------------------------------------
// 1. The "if" Statement
//-------------------------------------------------------------
// The "if" statement checks a condition and executes a block of code if that condition is true.

let age = 20;

if (age >= 18) {
  console.log("✅ You are an adult.");
}

// Output: ✅ You are an adult.

//-------------------------------------------------------------
// 2. The "if...else" Statement
//-------------------------------------------------------------
// When the condition is false, the "else" block runs instead.

let temperature = 15;

if (temperature > 25) {
  console.log("☀️ It's hot outside!");
} else {
  console.log("❄️ It's cold outside!");
}

// Output: ❄️ It's cold outside!

//-------------------------------------------------------------
// 3. The "if...else if...else" Ladder
//-------------------------------------------------------------
// You can chain multiple conditions together using "else if".

let marks = 85;

if (marks >= 90) {
  console.log("🏆 Grade: A+");
} else if (marks >= 75) {
  console.log("🎖️ Grade: A");
} else if (marks >= 60) {
  console.log("👍 Grade: B");
} else {
  console.log("❌ Grade: Fail");
}

// Output: 🎖️ Grade: A

//-------------------------------------------------------------
// 4. The Ternary Operator ( ? : )
//-------------------------------------------------------------
// The ternary operator is a shorthand for simple if...else conditions.
// Syntax: condition ? valueIfTrue : valueIfFalse;

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Welcome back!

// ✅ Useful for inline decisions or returning values based on conditions.

let age2 = 16;
let canVote = age2 >= 18 ? "Yes" : "No";
console.log(`Can you vote? ${canVote}`); // Output: Can you vote? No

//-------------------------------------------------------------
// 5. Nested Ternary Operators (Use with Caution!)
//-------------------------------------------------------------
// You can nest ternary operators, but it can reduce readability.

let score = 92;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(`Your grade is ${grade}`); // Output: Your grade is A

// Best to use only for short, simple decisions.

//-------------------------------------------------------------
// 6. Truthy and Falsy Values
//-------------------------------------------------------------
// JavaScript automatically converts values to boolean in conditions.
// Falsy values (treated as false): false, 0, '', null, undefined, NaN
// All other values are truthy.

if (0) console.log("This won't run");
if ("hello") console.log("This will run"); // "hello" is truthy

//-------------------------------------------------------------
// 7. Using Logical Operators in Conditions
//-------------------------------------------------------------
// Logical AND (&&), OR (||), and NOT (!) are often used with if statements.

let hasPermission = true;
let isVerified = false;

if (hasPermission && isVerified) {
  console.log("✅ Access granted.");
} else {
  console.log("🚫 Access denied.");
}

// Output: 🚫 Access denied.

if (!isVerified) {
  console.log("⚠️ Please verify your account.");
}

// Output: ⚠️ Please verify your account.

//-------------------------------------------------------------
// 8. Short-circuit Evaluation
//-------------------------------------------------------------
// In logical OR (||), if the first value is truthy, the second is ignored.
// In logical AND (&&), if the first value is falsy, the second is ignored.

console.log(false || "Default value"); // Output: Default value
console.log(true && "Next value");     // Output: Next value

//-------------------------------------------------------------
// 9. Practical Example
//-------------------------------------------------------------
let userAge = 22;
let userType = userAge >= 18 ? "Adult" : "Minor";

if (userType === "Adult" && userAge < 60) {
  console.log("👨 You are an adult below 60.");
} else if (userType === "Adult" && userAge >= 60) {
  console.log("👴 You are a senior citizen.");
} else {
  console.log("🧒 You are a minor.");
}

// Output: 👨 You are an adult below 60.

//-------------------------------------------------------------
// 10. Summary
//-------------------------------------------------------------
// ✅ if → Executes code when a condition is true
// ✅ if...else → Runs one block if true, another if false
// ✅ else if → Tests multiple conditions in sequence
// ✅ ? (Ternary) → Shorthand for simple conditions
// ✅ Use logical operators (&&, ||, !) to combine or negate conditions
// ✅ Beware of truthy and falsy values during checks

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 Prefer if-else for clarity and ternary only for short conditions.
// 🔹 Remember falsy values: false, 0, '', null, undefined, NaN
// 🔹 Always write readable, maintainable conditionals.
// 🔹 Test your conditions carefully — JavaScript auto-converts types!

