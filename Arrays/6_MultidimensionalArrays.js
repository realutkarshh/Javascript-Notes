//-------------------------------------------------------------
// MULTI-DIMENSIONAL ARRAYS + PRACTICAL EXAMPLES & REAL-WORLD USE CASES (Part 6)
//-------------------------------------------------------------
// A multi-dimensional array is simply an array that contains
// other arrays as its elements. Commonly used for representing
// matrices, tables, or grids in programming.

//-------------------------------------------------------------
// 1. CREATING MULTI-DIMENSIONAL ARRAYS
//-------------------------------------------------------------
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8

//-------------------------------------------------------------
// 2. MODIFYING ELEMENTS
//-------------------------------------------------------------
matrix[0][1] = 10; 
console.log(matrix[0]); // [1, 10, 3]

//-------------------------------------------------------------
// 3. ITERATING OVER MULTI-DIMENSIONAL ARRAYS
//-------------------------------------------------------------
// Using nested loops
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

//-------------------------------------------------------------
// 4. USING forEach() LOOP
//-------------------------------------------------------------
matrix.forEach(row => row.forEach(value => console.log(value)));

//-------------------------------------------------------------
// 5. FINDING SUM OF ALL ELEMENTS
//-------------------------------------------------------------
let sum = 0;
matrix.forEach(row => row.forEach(num => sum += num));
console.log("Sum =", sum);

//-------------------------------------------------------------
// 6. FLATTENING A MULTI-DIMENSIONAL ARRAY
//-------------------------------------------------------------
// Converts a 2D array into a single array.

let flatArray = matrix.flat();
console.log(flatArray); // [1, 10, 3, 4, 5, 6, 7, 8, 9]

//-------------------------------------------------------------
// 7. MULTI-DIMENSIONAL ARRAYS WITH VARIABLE LENGTH ROWS
//-------------------------------------------------------------
let jaggedArray = [
  [1, 2],
  [3, 4, 5],
  [6]
];
console.log(jaggedArray[1][2]); // 5

//-------------------------------------------------------------
// 8. PRACTICAL EXAMPLES
//-------------------------------------------------------------

// ✅ Example 1: Representing a Chess Board
let chessBoard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];
console.log(chessBoard[0][0]); // R → White Rook

// ✅ Example 2: Student Marks Table
let marks = [
  ["John", 85, 90, 78],
  ["Emma", 92, 88, 95],
  ["Alex", 75, 80, 70]
];

// Calculate average marks for each student
marks.forEach(student => {
  let [name, ...scores] = student;
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  console.log(`${name}'s Average: ${avg}`);
});

// ✅ Example 3: Tic-Tac-Toe Game Board
let gameBoard = [
  ["X", "O", "X"],
  ["O", "X", ""],
  ["", "O", "X"]
];
console.log(gameBoard[1][1]); // X

//-------------------------------------------------------------
// 9. REAL-WORLD USE CASES
//-------------------------------------------------------------
// 🔹 Storing tabular data (like Excel sheets or databases)
// 🔹 Game boards (chess, tic-tac-toe, sudoku)
// 🔹 Image processing (2D pixel data)
// 🔹 Pathfinding algorithms (grids or maps)
// 🔹 Machine learning (tensors / matrices)
// 🔹 Seating arrangements or classroom layouts

//-------------------------------------------------------------
// ✅ SUMMARY
//-------------------------------------------------------------
// 🔸 Multi-dimensional arrays = Arrays within arrays
// 🔸 Access using multiple indices → arr[row][col]
// 🔸 Ideal for representing grid-like or matrix-based data
// 🔸 Commonly used in games, tables, and real-world simulations
