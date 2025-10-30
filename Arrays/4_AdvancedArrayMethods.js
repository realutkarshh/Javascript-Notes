//-------------------------------------------------------------
// ADVANCED ARRAY METHODS IN JAVASCRIPT (Part 4)
//-------------------------------------------------------------
// These methods provide modern, cleaner ways to process arrays
// without writing manual loops.
// ➤ They do not modify the original array (except reduce if used that way).

//-------------------------------------------------------------
// 1. map() → Transform Each Element
//-------------------------------------------------------------
// Creates a new array by applying a function to each element.

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (original array unchanged)

//-------------------------------------------------------------
// 2. filter() → Filter Elements Based on Condition
//-------------------------------------------------------------
// Returns a new array with elements that satisfy the condition.

let ages = [12, 18, 25, 30, 10];
let adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25, 30]

//-------------------------------------------------------------
// 3. reduce() → Reduce Array to a Single Value
//-------------------------------------------------------------
// Executes a reducer function on each element, returning one final value.

let nums = [10, 20, 30, 40];
let total = nums.reduce((acc, curr) => acc + curr, 0);

console.log(total); // 100

// ✅ Syntax: array.reduce((accumulator, currentValue) => ..., initialValue)

//-------------------------------------------------------------
// 4. find() → Find First Matching Element
//-------------------------------------------------------------
// Returns the first element that matches the condition.

let students = ["Aman", "Riya", "Utkarsh", "Rohan"];
let found = students.find(name => name.startsWith("U"));

console.log(found); // "Utkarsh"

// If not found, returns undefined

//-------------------------------------------------------------
// 5. some() → Check If ANY Element Matches Condition
//-------------------------------------------------------------
// Returns true if at least one element passes the test.

let marks = [45, 60, 33, 80];
let hasPassed = marks.some(mark => mark >= 50);

console.log(hasPassed); // true

//-------------------------------------------------------------
// 6. every() → Check If ALL Elements Match Condition
//-------------------------------------------------------------
// Returns true if all elements satisfy the condition.

let scores = [85, 90, 78, 92];
let allGood = scores.every(score => score >= 70);

console.log(allGood); // true

//-------------------------------------------------------------
// 7. Combining map(), filter(), reduce()
//-------------------------------------------------------------
// Example: Find total of even numbers doubled.

let arr = [1, 2, 3, 4, 5, 6];

let result = arr
.filter(num => num % 2 === 0) // [2, 4, 6]
.map(num => num * 2) // [4, 8, 12]
.reduce((sum, val) => sum + val, 0); // 24

console.log(result); // 24

//-------------------------------------------------------------
// 8. Summary
//-------------------------------------------------------------
// ✅ map() → Transform elements → returns new array
// ✅ filter() → Keep elements that pass condition → new array
// ✅ reduce() → Combine into single value → number/string/etc
// ✅ find() → Returns first match
// ✅ some() → Checks if any element passes
// ✅ every() → Checks if all elements pass

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 All methods use callbacks.
// 🔹 Most return new arrays (don’t mutate original).
// 🔹 Chaining map/filter/reduce gives powerful one-liners.
// 🔹 Essential for React, Node.js, and data manipulation.