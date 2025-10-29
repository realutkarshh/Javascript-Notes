//-------------------------------------------------------------
// Basic Comparison Operators - Complete Guide
//-------------------------------------------------------------
// In JavaScript, comparisons are used to compare two values and return a boolean value (true or false).
// They are essential in decision-making (like if statements, loops, etc.).

//-------------------------------------------------------------
// 1️. Basic Comparison Operators
//-------------------------------------------------------------
let a = 10;
let b = 5;

console.log(a > b);   // true  → greater than
console.log(a < b);   // false → less than
console.log(a >= 10); // true  → greater than or equal to
console.log(a <= b);  // false → less than or equal to

//-------------------------------------------------------------
// 2️. Equality Operators
//-------------------------------------------------------------
// JavaScript has two types of equality operators:
// (1) Loose equality (==)  → compares only values (type conversion allowed)
// (2) Strict equality (===) → compares both value and type (no type conversion)

console.log(5 == '5');   // true  → only values are compared
console.log(5 === '5');  // false → types are different (number !== string)

console.log(10 != '10');  // false → same value (loose comparison)
console.log(10 !== '10'); // true  → type is different (strict comparison)

//-------------------------------------------------------------
// 3. Comparing Different Types
//-------------------------------------------------------------
// When comparing different types, JavaScript converts them into numbers or strings internally.

console.log('2' > 1);   // true  → '2' becomes 2
console.log('01' == 1); // true  → '01' becomes 1

// ⚠️ Special case: null and undefined behave differently
console.log(null == undefined); // true  → special rule
console.log(null === undefined); // false → strict check (different types)

// However, comparisons like < or > with null/undefined can be tricky:
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true  → null is converted to 0 in numeric comparison

//-------------------------------------------------------------
// 4. Boolean Comparison Logic
//-------------------------------------------------------------
console.log(true == 1);  // true  → true becomes 1
console.log(false == 0); // true  → false becomes 0
console.log(true === 1); // false → type difference

//-------------------------------------------------------------
// Summary Table
//-------------------------------------------------------------
// ==   → Equality with type conversion
// ===  → Equality without type conversion
// !=   → Inequality with type conversion
// !==  → Inequality without type conversion
// >,<,>=,<= → Used for numeric and string comparisons

//-------------------------------------------------------------
// Practical Example
//-------------------------------------------------------------
let userAge = 18;

if (userAge >= 18) {
  console.log("✅ You are eligible to vote!");
} else {
  console.log("❌ You are not eligible yet.");
}

// Output: ✅ You are eligible to vote!

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// ✅ Use === and !== instead of == and != to avoid unexpected type coercion.
// ✅ Always be cautious when comparing null and undefined.
// ✅ Strings are compared character by character using Unicode order.
// ✅ Comparisons return boolean values: true or false.
