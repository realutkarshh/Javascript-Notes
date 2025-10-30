//-------------------------------------------------------------
// ITERATING THROUGH ARRAYS IN JAVASCRIPT (Part 3)
//-------------------------------------------------------------
// Iteration means going through each element of an array to
// read, modify, or perform operations on it.
// JavaScript provides multiple ways to loop through arrays.

//-------------------------------------------------------------
// 1. Using the "for" Loop (Traditional Way)
//-------------------------------------------------------------
// Best when you need access to both index and value.

let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
console.log(`${i}: ${fruits[i]}`);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Mango

//-------------------------------------------------------------
// 2. Using "for...of" Loop (Modern & Cleaner)
//-------------------------------------------------------------
// Best when you only need values, not indexes.

for (let fruit of fruits) {
console.log(fruit);
}
// Output:
// Apple
// Banana
// Mango

//-------------------------------------------------------------
// 3. Using "forEach()" Method
//-------------------------------------------------------------
// Executes a function for each array element.
// Cleaner and more readable than for loops.

fruits.forEach(function(fruit, index) {
console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Mango

//-------------------------------------------------------------
// 4. Using Arrow Function with forEach()
//-------------------------------------------------------------
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));
// Same output, shorter syntax

//-------------------------------------------------------------
// 5. Comparing Loops
//-------------------------------------------------------------
// for → When you need full control (break/continue).
// for...of → Cleaner for values only.
// forEach() → Functional, cannot use break or continue.

//-------------------------------------------------------------
// 6. Looping Over Indices with "for...in"
//-------------------------------------------------------------
// Generally used for objects, but works for array indexes too.
// ⚠️ Avoid if possible, as it can include unexpected properties.

for (let index in fruits) {
console.log(index, fruits[index]);
}
// Output:
// 0 Apple
// 1 Banana
// 2 Mango

//-------------------------------------------------------------
// 7. Practical Example
//-------------------------------------------------------------
// Find total length of all fruit names.

let totalLength = 0;
fruits.forEach(fruit => totalLength += fruit.length);
console.log(`Total characters: ${totalLength}`);
// Output: Total characters: 16

//-------------------------------------------------------------
// 8. Summary
//-------------------------------------------------------------
// ✅ for → Traditional, index-based loop
// ✅ for...of → Modern loop for values
// ✅ forEach() → Functional approach for cleaner iteration

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 Use forEach() for readability.
// 🔹 Use for...of when you just need values.
// 🔹 Use for when you need control or want to break early.