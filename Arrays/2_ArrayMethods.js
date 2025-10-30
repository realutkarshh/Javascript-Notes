//-------------------------------------------------------------
// ARRAY METHODS IN JAVASCRIPT (Part 2)
// push(), pop(), shift(), unshift() - COMPLETE GUIDE
//-------------------------------------------------------------
// These four methods are used to add or remove elements from
// the beginning or end of an array.

//-------------------------------------------------------------
// 1. push() → Add elements to the END
//-------------------------------------------------------------
// Adds one or more elements at the end of the array.
// Returns the new length of the array.

let fruits = ["Apple", "Banana"];

fruits.push("Mango");
console.log(fruits);
// Output: ["Apple", "Banana", "Mango"]

let newLength = fruits.push("Orange", "Papaya");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Papaya"]
console.log(newLength); // 5

//-------------------------------------------------------------
// 2. pop() → Remove elements from the END
//-------------------------------------------------------------
// Removes the last element of the array.
// Returns the removed element.

let lastFruit = fruits.pop();
console.log(lastFruit); // Output: Papaya
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

//-------------------------------------------------------------
// 3. unshift() → Add elements to the BEGINNING
//-------------------------------------------------------------
// Adds one or more elements at the start of the array.
// Returns the new length of the array.

fruits.unshift("Kiwi");
console.log(fruits);
// Output: ["Kiwi", "Apple", "Banana", "Mango", "Orange"]

//-------------------------------------------------------------
// 4. shift() → Remove elements from the BEGINNING
//-------------------------------------------------------------
// Removes the first element of the array.
// Returns the removed element.

let firstFruit = fruits.shift();
console.log(firstFruit); // Output: Kiwi
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

//-------------------------------------------------------------
// 5. Combining push() and shift()
//-------------------------------------------------------------
// You can combine these methods to simulate queue-like behavior (FIFO).

let queue = [];
queue.push("Task1"); // Add at end
queue.push("Task2");
queue.shift(); // Remove from start
console.log(queue); // ["Task2"]

//-------------------------------------------------------------
// 6. Combining unshift() and pop()
//-------------------------------------------------------------
// Used for stack-like behavior (LIFO).

let stack = [];
stack.unshift("Page1"); // Add at start
stack.unshift("Page2");
stack.pop(); // Remove from end
console.log(stack); // ["Page2"]

//-------------------------------------------------------------
// 7. Summary
//-------------------------------------------------------------
// ✅ push() → Add to END
// ✅ pop() → Remove from END
// ✅ unshift() → Add to START
// ✅ shift() → Remove from START

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 push/pop → work on the end of the array (like a stack).
// 🔹 unshift/shift → work on the beginning (like a queue).
// 🔹 All four methods modify the original array.
// 🔹 push() and unshift() return new length,
// while pop() and shift() return the removed element.