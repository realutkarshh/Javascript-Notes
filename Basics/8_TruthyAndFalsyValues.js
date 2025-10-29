//-------------------------------------------------------------
// TRUTHY AND FALSY VALUES IN JAVASCRIPT - COMPLETE GUIDE
//-------------------------------------------------------------
// In JavaScript, every value is either considered *truthy* or *falsy* when evaluated in a Boolean context.
// These are crucial concepts to understand since conditions (like in if statements or loops)
// depend on whether a value is truthy or falsy.

//-------------------------------------------------------------
// 1. What are Falsy Values?
//-------------------------------------------------------------
// Falsy values are values that are considered false when converted to a Boolean.
// There are ONLY 6 falsy values in JavaScript 👇

console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false (empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false (NaN → Not a Number)
// ✅ Any value not in this list is considered truthy.

//-------------------------------------------------------------
// 2. What are Truthy Values?
//-------------------------------------------------------------
// Truthy values are values that become true when converted to a Boolean.

console.log(Boolean(true));        // true
console.log(Boolean(1));           // true
console.log(Boolean("hello"));     // true (non-empty string)
console.log(Boolean([]));          // true (empty array)
console.log(Boolean({}));          // true (empty object)
console.log(Boolean(" "));         // true (string with space)
console.log(Boolean(function(){})); // true (any function is truthy)

//-------------------------------------------------------------
// 3. Automatic Type Conversion in Conditions
//-------------------------------------------------------------
// JavaScript automatically converts values to Boolean when used in conditional statements.

let value = ""; // Empty string → falsy

if (value) {
  console.log("This is truthy!");
} else {
  console.log("This is falsy!");
}

// Output: This is falsy!

value = "Hello"; // Non-empty string → truthy

if (value) {
  console.log("This is truthy!");
} else {
  console.log("This is falsy!");
}

// Output: This is truthy!

//-------------------------------------------------------------
// 4. Checking Truthy and Falsy Manually
//-------------------------------------------------------------
// You can explicitly convert a value to a Boolean using:
// (1) Boolean() function, or (2) Double NOT operator (!!)

let x = "JavaScript";

console.log(Boolean(x)); // true
console.log(!!x);        // true (Double NOT is a shorthand for Boolean conversion)

let y = 0;
console.log(Boolean(y)); // false
console.log(!!y);        // false

//-------------------------------------------------------------
// 5. Falsy Traps (Common Mistakes)
//-------------------------------------------------------------
// Some values may *look* valid but are actually falsy.

let name = "";
if (!name) {
  console.log("⚠️ Name is missing!");
}
// Output: ⚠️ Name is missing!  (empty string is falsy)

let count = 0;
if (!count) {
  console.log("⚠️ Count is zero (falsy)!");
}
// Output: ⚠️ Count is zero (falsy)!
// 🧠 Even though 0 can be a valid number, it’s falsy in JavaScript.

let data = null;
if (!data) {
  console.log("⚠️ Data not found!");
}
// Output: ⚠️ Data not found!

//-------------------------------------------------------------
// 6. Truthy Examples in Real Use
//-------------------------------------------------------------
// Any non-empty or defined value is truthy.

let response = "Success";
if (response) {
  console.log("✅ Response received!");
} else {
  console.log("❌ No response!");
}

// Output: ✅ Response received!

let list = [];
if (list) {
  console.log("✅ Array exists!");
} else {
  console.log("❌ Array is missing!");
}

// Output: ✅ Array exists! (even an empty array [] is truthy)

//-------------------------------------------------------------
// 7. Using Truthy/Falsy in Short-Circuit Evaluation
//-------------------------------------------------------------
// JavaScript uses truthy/falsy logic with logical operators (|| and &&).

let userName = "" || "Guest";
console.log(userName); // Output: Guest  ("" is falsy, so "Guest" is used)

let loggedIn = true && "Welcome!";
console.log(loggedIn); // Output: Welcome! (true → continues to next value)

//-------------------------------------------------------------
// 8. Practical Example
//-------------------------------------------------------------
function getUserStatus(user) {
  return user.isActive ? "🟢 Active User" : "🔴 Inactive User";
}

let user1 = { name: "Utkarsh", isActive: true };
let user2 = { name: "Ria", isActive: false };

console.log(getUserStatus(user1)); // 🟢 Active User
console.log(getUserStatus(user2)); // 🔴 Inactive User

//-------------------------------------------------------------
// 9. Summary
//-------------------------------------------------------------
// ✅ Falsy Values (6 total):
//    false, 0, "", null, undefined, NaN
// ✅ Everything else is truthy!
// ✅ Used automatically in: if, while, &&, ||, and ternary operators.

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 JavaScript automatically converts values to Boolean in conditions.
// 🔹 Be careful with falsy values like 0 or "" which might look valid.
// 🔹 Use Boolean(value) or !!value to explicitly check truthiness.
// 🔹 Understanding truthy and falsy helps avoid common logical bugs.
// 🔹 Everything except false, 0, "", null, undefined, and NaN is truthy.

