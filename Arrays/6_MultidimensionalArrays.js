//-------------------------------------------------------------
// ARRAY DESTRUCTURING & MULTI-DIMENSIONAL ARRAYS (Part 5)
//-------------------------------------------------------------
// These concepts help extract data easily and work with arrays
// inside arrays (nested structures).

//-------------------------------------------------------------
// 1. ARRAY DESTRUCTURING
//-------------------------------------------------------------
// Destructuring allows you to unpack array elements into
// separate variables in a single line.

let colors = ["Red", "Green", "Blue"];

// Traditional way:
let first = colors[0];
let second = colors[1];
console.log(first, second); // Red Green

// ✅ Using Destructuring:
let [color1, color2, color3] = colors;
console.log(color1, color2, color3); // Red Green Blue

//-------------------------------------------------------------
// 2. SKIPPING ELEMENTS
//-------------------------------------------------------------
// You can skip elements using commas.

let [primary, , tertiary] = colors;
console.log(primary, tertiary); // Red Blue

//-------------------------------------------------------------
// 3. DEFAULT VALUES
//-------------------------------------------------------------
// Assign default values if an array has fewer elements.

let [a = 1, b = 2, c = 3] = [10, 20];
console.log(a, b, c); // 10 20 3

//-------------------------------------------------------------
// 4. SWAPPING VARIABLES USING DESTRUCTURING
//-------------------------------------------------------------
let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y); // 10 5

//-------------------------------------------------------------
// 5. NESTED DESTRUCTURING
//-------------------------------------------------------------
// Works with nested arrays too.

let numbers = [1, [2, 3]];
let [one, [two, three]] = numbers;
console.log(one, two, three); // 1 2 3

//-------------------------------------------------------------
// 6. USING REST OPERATOR (...) IN DESTRUCTURING
//-------------------------------------------------------------
// Captures remaining elements into a separate array.

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let [f1, ...restFruits] = fruits;
console.log(f1);         // Apple
console.log(restFruits); // ["Banana", "Mango", "Orange"]

//-------------------------------------------------------------
// 7. MULTI-DIMENSIONAL ARRAYS
//-------------------------------------------------------------
// Arrays inside arrays (used for matrices or grids).

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements
console.log(matrix[0][1]); // 2  → Row 0, Column 1
console.log(matrix[2][2]); // 9  → Row 2, Column 2

//-------------------------------------------------------------
// 8. ITERATING OVER MULTI-DIMENSIONAL ARRAYS
//-------------------------------------------------------------
// Using nested loops.

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

//-------------------------------------------------------------
// 9. USING forEach() FOR MULTI-DIMENSIONAL ARRAYS
//-------------------------------------------------------------
matrix.forEach(row => row.forEach(num => console.log(num)));

//-------------------------------------------------------------
// 10. PRACTICAL EXAMPLE
//-------------------------------------------------------------
// Sum of all numbers in the matrix.

let sum = 0;
matrix.forEach(row => row.forEach(num => sum += num));
console.log("Sum =", sum); // Sum = 45

//-------------------------------------------------------------
// ✅ SUMMARY
//-------------------------------------------------------------
// 🔹 Array Destructuring → Unpack elements quickly
// 🔹 Rest Operator (...) → Collect remaining items
// 🔹 Nested Destructuring → Handle inner arrays
// 🔹 Multi-Dimensional Arrays → Arrays within arrays
// 🔹 Ideal for matrices, tables, or grids
