//-------------------------------------------------------------
// ARRAYS IN JAVASCRIPT - COMPLETE GUIDE (Part 1)
//-------------------------------------------------------------
// Arrays are special variables that can hold multiple values in a single variable.
// Each value is stored at an index starting from 0.
// Arrays help in storing lists of data like names, numbers, or objects.

//-------------------------------------------------------------
// 1. Creating an Array
//-------------------------------------------------------------
// You can create arrays using:
// ✅ Array literal (recommended)
// ✅ new Array() constructor

// Using array literal
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
// Output: ["Apple", "Banana", "Mango"]

// Using new Array()
let numbers = new Array(10, 20, 30, 40);
console.log(numbers);
// Output: [10, 20, 30, 40]

// ✅ Best Practice: Always use array literals for simplicity.

//-------------------------------------------------------------
// 2. Accessing Array Elements (Indexing)
//-------------------------------------------------------------
// Array elements are accessed using their index (starting from 0).

let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Output: Red
console.log(colors[1]); // Output: Green
console.log(colors[2]); // Output: Blue

// Accessing an out-of-range index returns undefined
console.log(colors[5]); // Output: undefined

//-------------------------------------------------------------
// 3. Changing Array Elements
//-------------------------------------------------------------
// You can update any element using its index.

colors[1] = "Yellow";
console.log(colors);
// Output: ["Red", "Yellow", "Blue"]

//-------------------------------------------------------------
// 4. Array Length Property
//-------------------------------------------------------------
// The length property returns the total number of elements in the array.

console.log(colors.length); // Output: 3

//-------------------------------------------------------------
// 5. Accessing the Last Element
//-------------------------------------------------------------
// Use length - 1 to access the last element.

let lastColor = colors[colors.length - 1];
console.log(lastColor); // Output: Blue

//-------------------------------------------------------------
// 6. Arrays Can Store Different Data Types
//-------------------------------------------------------------
let mixed = ["Text", 42, true, null, { name: "Utkarsh" }];
console.log(mixed);
// Output: ["Text", 42, true, null, { name: "Utkarsh" }]

//-------------------------------------------------------------
// 7. Arrays are Mutable
//-------------------------------------------------------------
// Even if you declare an array with const, you can still modify its elements.

const days = ["Mon", "Tue", "Wed"];
days[2] = "Sunday";
console.log(days);
// Output: ["Mon", "Tue", "Sunday"]

// ⚠️ But you cannot reassign the whole array:
// days = ["Thu", "Fri"]; ❌ Error

//-------------------------------------------------------------
// 8. Checking if a Variable is an Array
//-------------------------------------------------------------
console.log(Array.isArray(fruits)); // Output: true
console.log(typeof fruits); // Output: object
// ✅ typeof gives "object", so use Array.isArray() to confirm it's an array.

//-------------------------------------------------------------
// 9. Summary
//-------------------------------------------------------------
// ✅ Arrays store multiple values in one variable.
// ✅ Index starts from 0.
// ✅ Use [index] to access or modify elements.
// ✅ length gives total elements.
// ✅ Arrays can hold any data type.
// ✅ Use Array.isArray() to check if a variable is an array.

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 Arrays are ordered collections of values.
// 🔹 Access elements using indexes.
// 🔹 Use length - 1 for the last element.
// 🔹 Arrays are mutable, even when declared with const.