// ===============================
// 🌟 OPERATORS IN JAVASCRIPT - COMPLETE GUIDE
// ===============================

// In JavaScript, operators are special symbols used to perform operations
// on values and variables. They help us manipulate data and make decisions.

// Example:
let a = 10, b = 5;
console.log(a + b); // 15

// ===============================
// 1. ARITHMETIC OPERATORS
// ===============================
// Used to perform basic mathematical operations.

let x = 10;
let y = 3;

console.log(x + y); // Addition → 13
console.log(x - y); // Subtraction → 7
console.log(x * y); // Multiplication → 30
console.log(x / y); // Division → 3.333...
console.log(x % y); // Modulus (Remainder) → 1
console.log(x ** y); // Exponentiation (x^y) → 1000 

// Increment and Decrement
let count = 5;
console.log(++count); // Pre-increment → 6
console.log(count++); // Post-increment → prints 6, then becomes 7
console.log(--count); // Pre-decrement → 6
console.log(count--); // Post-decrement → prints 6, then becomes 5

// ===============================
// 2. COMPARISON OPERATORS
// ===============================

let num1 = 10;
// Used to compare two values. They return true or false. 
let num2 = '10';

console.log(num1 == num2);  // true  → checks only value
console.log(num1 === num2); // false → checks value AND type (strict equality)
console.log(num1 != num2);  // false → value is same
console.log(num1 !== num2); // true  → different types
console.log(num1 > 5);      // true
console.log(num1 < 5);      // false
console.log(num1 >= 10);    // true
console.log(num1 <= 9);     // false

// ===============================
// 3. LOGICAL OPERATORS
// ===============================
// Used to combine or invert conditions. Return boolean values (true/false).

let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // AND → false (both must be true)
console.log(isAdult || hasID); // OR → true (any one is true)
console.log(!isAdult);         // NOT → false (inverts the value)

// ===============================
// 4. ASSIGNMENT OPERATORS
// ===============================
// Used to assign values to variables. Can also perform shorthand arithmetic.

let n = 10;

n += 5;  // same as n = n + 5 → 15
n -= 3;  // same as n = n - 3 → 12
n *= 2;  // same as n = n * 2 → 24
n /= 4;  // same as n = n / 4 → 6
n %= 5;  // same as n = n % 5 → 1

console.log(n);

// ===============================
// 5. STRING OPERATORS
// ===============================
// The + operator can also be used to concatenate strings.

let firstName = "Utkarsh";
let lastName = "Singh";
let fullName = firstName + " " + lastName;

console.log(fullName); // "Utkarsh Singh"

// If one operand is a string, JavaScript converts the other to a string automatically
console.log("5" + 5); // "55" (string concatenation)
console.log("10" - 2); // 8 (string converted to number)

// ===============================
// 6. TERNARY OPERATOR (?:)
// ===============================
// Acts as a shorthand for if...else statements.

let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"

// Syntax: condition ? valueIfTrue : valueIfFalse

// Example:
let isLoggedIn = true;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(statusMessage);

// ===============================
// 7. TYPE OPERATORS
// ===============================

// typeof → returns the data type of a value
console.log(typeof 42);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (known bug)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"

// instanceof → checks if an object is an instance of a specific class
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// ===============================
// 8. BITWISE OPERATORS (Advanced)
// ===============================
// Work on binary representations of numbers. Used less frequently in basic JS.

let p = 5;  // 0101 in binary
let q = 3;  // 0011 in binary

console.log(p & q);  // AND → 1 (0001)
console.log(p | q);  // OR  → 7 (0111)
console.log(p ^ q);  // XOR → 6 (0110)
console.log(~p);     // NOT → -6 (inverts bits)
console.log(p << 1); // Left shift → 10
console.log(p >> 1); // Right shift → 2

// ===============================
// 9. NULLISH COALESCING OPERATOR (??)
// ===============================
// Returns the right-hand value only if the left-hand side is null or undefined.

let user;
let defaultUser = "Guest";
let activeUser = user ?? defaultUser;

console.log(activeUser); // "Guest"

// Example:
let nameInput = "";
let userName = nameInput ?? "Anonymous"; // Only checks for null/undefined
console.log(userName); // "" (empty string is not null)

// ===============================
// 10. OPTIONAL CHAINING (?.)
// ===============================
// Helps access nested object properties safely without causing errors.

let student = {
  name: "Utkarsh",
  address: {
    city: "Delhi"
  }
};

console.log(student?.address?.city); // "Delhi"
console.log(student?.contact?.phone); // undefined (no error!)

// ===============================
// 11. BEST PRACTICES
// ===============================
// ✔ Use strict equality (===) instead of loose equality (==)
// ✔ Avoid implicit type conversions where possible
// ✔ Use meaningful variable names to make operator usage clear
// ✔ Group complex expressions using parentheses for readability
// ✔ Understand short-circuiting behavior in logical operators

// Example of short-circuiting:
let loggedInUser = "" || "Guest"; // if first value is falsy, return second
console.log(loggedInUser); // "Guest"

// ===============================
// 12. SUMMARY
// ===============================
// 🔹 Arithmetic Operators → +, -, *, /, %, **, ++, --
// 🔹 Comparison Operators → ==, ===, !=, !==, >, <, >=, <=
// 🔹 Logical Operators → &&, ||, !
// 🔹 Assignment Operators → =, +=, -=, *=, /=, %=
// 🔹 String Operator → + (concatenation)
// 🔹 Ternary Operator → condition ? value1 : value2
// 🔹 Type Operators → typeof, instanceof
// 🔹 Bitwise Operators → &, |, ^, ~, <<, >>
// 🔹 Nullish Coalescing → ??
// 🔹 Optional Chaining → ?.

// Tip: Operators form the backbone of all logic in JavaScript.
//      Understanding their behavior is key to writing clean and efficient code.

// ===============================
// END OF FILE
// ===============================