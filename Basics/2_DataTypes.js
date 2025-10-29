// ===============================
// JAVASCRIPT DATA TYPES - COMPLETE GUIDE
// ===============================

// In JavaScript, data types define the kind of values that can be stored and manipulated.
// JavaScript is a dynamically typed language — meaning you don’t need to specify a type
// when declaring a variable; the type is determined automatically at runtime.

// ===============================
// 1. Types of Data in JavaScript
// ===============================
// JavaScript has 8 main data types, divided into two categories:

// 👉 Primitive Data Types
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

// 👉 Non-Primitive (Reference) Type
// 8. Object (includes arrays, functions, dates, etc.)

// ===============================
// 2. STRING
// ===============================
// Strings are used to represent text. You can use single quotes, double quotes, or backticks (template literals).

let firstName = 'Utkarsh';
let greeting = "Hello, World!";
let message = `Welcome ${firstName}!`; // Template literal allows embedding variables

console.log(firstName);
console.log(greeting);
console.log(message);
console.log(typeof message); // string

// ===============================
// 3. NUMBER
// ===============================
// Represents both integer and floating-point numbers

let age = 21;
let price = 99.99;
let negative = -45;

console.log(age, price, negative);
console.log(typeof age); // number

// Special numeric values
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("Hello" / 2); // NaN (Not a Number)

// ===============================
// 4. BIGINT
// ===============================
// BigInt is used to store very large integers beyond the safe limit of Number

let bigNumber = 1234567890123456789012345678901234567890n; // note the 'n' at the end
console.log(bigNumber);
console.log(typeof bigNumber); // bigint

// ===============================
// 5. BOOLEAN
// ===============================
// Boolean values represent true or false

let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn, hasPermission);
console.log(typeof isLoggedIn); // boolean

// ===============================
// 6. UNDEFINED
// ===============================
// A variable that is declared but not assigned any value holds 'undefined'

let city;
console.log(city); // undefined
console.log(typeof city); // undefined

// ===============================
// 7. NULL
// ===============================
// 'null' represents an empty or non-existent value
// It's often used to explicitly indicate "no value"

let result = null;
console.log(result); // null
console.log(typeof result); // ❗ 'object' (this is a historical bug in JavaScript)

// ===============================
// 8. SYMBOL
// ===============================
// Symbol is a unique and immutable primitive value
// Often used as unique property keys in objects

let id = Symbol("id");
let anotherId = Symbol("id");
console.log(id === anotherId); // false (each symbol is unique)
console.log(typeof id); // symbol

// ===============================
// 9. OBJECT
// ===============================
// Objects are used to store collections of data as key-value pairs

let student = {
  name: "Utkarsh",
  age: 21,
  isGraduated: false
};

console.log(student);
console.log(student.name);
console.log(typeof student); // object

// ===============================
// 10. Special Object Types
// ===============================

// --- Arrays ---
let numbers = [10, 20, 30, 40];
console.log(numbers);
console.log(typeof numbers); // object (arrays are objects in JS)

// --- Functions ---
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Utkarsh"));
console.log(typeof greet); // function (special object type)

// --- Dates ---
let today = new Date();
console.log(today);
console.log(typeof today); // object

// ===============================
// 11. DYNAMIC TYPING
// ===============================
// JavaScript allows variables to change type during execution

let dynamicVar = 10;       // number
dynamicVar = "Now a string"; // string
dynamicVar = false;         // boolean
console.log(dynamicVar);
console.log(typeof dynamicVar);

// ===============================
// 12. TYPE CONVERSION
// ===============================
// JavaScript can convert values from one type to another automatically or manually

// --- String Conversion ---
let num = 100;
let strNum = String(num);
console.log(strNum, typeof strNum); // "100" string

// --- Number Conversion ---
let str = "123";
let convertedNum = Number(str);
console.log(convertedNum, typeof convertedNum); // 123 number

// --- Boolean Conversion ---
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true

// ===============================
// 13. typeof Operator
// ===============================
// The typeof operator returns the data type of a value

console.log(typeof 123);           // number
console.log(typeof "Hello");       // string
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object (known bug)
console.log(typeof {});            // object
console.log(typeof []);            // object
console.log(typeof function(){});  // function

// ===============================
// 14. Best Practices
// ===============================
// ✅ Use 'const' and 'let' with clear variable names
// ✅ Initialize variables with the right data type
// ✅ Avoid using 'var'
// ✅ Understand 'null' vs 'undefined'
// ✅ Use typeof to debug unexpected data

// ===============================
// 15. Summary
// ===============================
// 🔹 Primitive Types: String, Number, BigInt, Boolean, Undefined, Null, Symbol
// 🔹 Non-Primitive: Object (Arrays, Functions, Dates, etc.)
// 🔹 JavaScript is dynamically typed
// 🔹 typeof helps identify types (with a few exceptions)
// 🔹 Always choose meaningful and consistent data types

// ===============================
// END OF FILE
// ===============================
