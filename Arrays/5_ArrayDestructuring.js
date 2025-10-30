//-------------------------------------------------------------
// ARRAY DESTRUCTURING + SPREAD & REST OPERATORS IN JAVASCRIPT
//-------------------------------------------------------------
// These modern ES6 features make working with arrays easier and cleaner.
// ➤ Destructuring → Extract values easily
// ➤ Spread → Expand arrays
// ➤ Rest → Collect remaining elements

//-------------------------------------------------------------
// 1. ARRAY DESTRUCTURING
//-------------------------------------------------------------
// Allows unpacking array values into individual variables.

let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;
console.log(first); // Apple
console.log(second); // Banana
console.log(third); // Mango

//-------------------------------------------------------------
// 2. Skipping Elements
//-------------------------------------------------------------
// You can skip unwanted elements using commas.

let colors = ["Red", "Green", "Blue", "Yellow"];
let [primary, , tertiary] = colors;
console.log(primary, tertiary);
// Output: Red Blue

//-------------------------------------------------------------
// 3. Default Values
//-------------------------------------------------------------
// If the array doesn’t have enough elements,
// default values can be assigned.

let numbers = [10];
let [x = 1, y = 2] = numbers;
console.log(x, y);
// Output: 10 2

//-------------------------------------------------------------
// 4. Swapping Variables Using Destructuring
//-------------------------------------------------------------
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);
// Output: 10 5

//-------------------------------------------------------------
// 5. Nested Array Destructuring
//-------------------------------------------------------------
let nested = [1, [2, 3]];
let [one, [two, three]] = nested;
console.log(one, two, three);
// Output: 1 2 3

//-------------------------------------------------------------
// 6. SPREAD OPERATOR (...)
//-------------------------------------------------------------
// Expands elements of an array into individual items.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined);
// Output: [1, 2, 3, 4, 5, 6]

//-------------------------------------------------------------
// 7. Copying Arrays
//-------------------------------------------------------------
// Spread creates a shallow copy of an array.

let original = ["A", "B", "C"];
let copy = [...original];
copy.push("D");

console.log(original); // ["A", "B", "C"]
console.log(copy); // ["A", "B", "C", "D"]

// ✅ Both arrays are independent

//-------------------------------------------------------------
// 8. Using Spread in Functions
//-------------------------------------------------------------
function sum(a, b, c) {
return a + b + c;
}

let nums = [2, 4, 6];
console.log(sum(...nums));
// Output: 12

//-------------------------------------------------------------
// 9. REST OPERATOR (...)
//-------------------------------------------------------------
// Collects multiple elements into a single array variable.
// Opposite of the spread operator.

let [firstFruit, ...remainingFruits] = ["Apple", "Banana", "Mango", "Orange"];
console.log(firstFruit); // Apple
console.log(remainingFruits); // ["Banana", "Mango", "Orange"]

//-------------------------------------------------------------
// 10. Using Rest in Functions
//-------------------------------------------------------------
function showScores(name, ...scores) {
console.log(`${name}'s Scores:, ${scores}`);
}

showScores("Utkarsh", 85, 90, 78);
// Output: Utkarsh's Scores: [85, 90, 78]

//-------------------------------------------------------------
// 11. Summary
//-------------------------------------------------------------
// ✅ Destructuring → Extract array elements into variables
// ✅ Spread → Expand elements
// ✅ Rest → Collect remaining elements
// ✅ Spread = Expansion, Rest = Collection

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 Destructuring makes array extraction simpler.
// 🔹 Spread is used for copying or merging arrays.
// 🔹 Rest is used to gather leftover values.
// 🔹 Both use the same (...) syntax but serve opposite purposes.