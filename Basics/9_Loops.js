//-------------------------------------------------------------
// LOOPS IN JAVASCRIPT - COMPLETE GUIDE
//-------------------------------------------------------------
// Loops are used in JavaScript to repeatedly execute a block of code 
// as long as a certain condition is true.
// They help in automating repetitive tasks, making programs more efficient and shorter.

//-------------------------------------------------------------
// 1. The "for" Loop
//-------------------------------------------------------------
// The most commonly used loop in JavaScript.
// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code to execute
// }

for (let i = 1; i <= 5; i++) {
  console.log(`Iteration: ${i}`);
}

// Output:
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4
// Iteration: 5

// How it works:
// 1. Initialization → Runs once at the beginning (let i = 1)
// 2. Condition → Checked before each iteration (i <= 5)
// 3. Increment → Executed after each iteration (i++)
// 4. Loop ends when the condition becomes false.

//-------------------------------------------------------------
// 2. The "while" Loop
//-------------------------------------------------------------
// The while loop runs as long as the condition is true.

let count = 1;

while (count <= 3) {
  console.log(`Count is: ${count}`);
  count++;
}

// Output:
// Count is: 1
// Count is: 2
// Count is: 3

// ⚠️ Be careful! If the condition never becomes false, it will create an infinite loop.

//-------------------------------------------------------------
// 3. The "do...while" Loop
//-------------------------------------------------------------
// The do...while loop is similar to while, 
// but it guarantees that the loop body executes at least once.

let num = 1;

do {
  console.log(`Number: ${num}`);
  num++;
} while (num <= 3);

// Output:
// Number: 1
// Number: 2
// Number: 3

// Even if the condition is false initially, the loop executes once.

let x = 10;
do {
  console.log(`Value of x: ${x}`);
  x++;
} while (x < 5);

// Output: Value of x: 10

//-------------------------------------------------------------
// 4. The "for...of" Loop (ES6)
//-------------------------------------------------------------
// The for...of loop is used to iterate over *iterable objects*
// like arrays, strings, maps, and sets.

let fruits = ["Apple", "Banana", "Grapes"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Output:
// Apple
// Banana
// Grapes

// Also works with strings:
for (let char of "JS") {
  console.log(char);
}
// Output: J S

//-------------------------------------------------------------
// 5. The "for...in" Loop
//-------------------------------------------------------------
// The for...in loop is used to iterate over the *keys (property names)* of an object.

let person = {
  name: "Utkarsh",
  age: 20,
  course: "B.Tech"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output:
// name: Utkarsh
// age: 20
// course: B.Tech

// ⚠️ Note: for...in is for objects, not arrays.
// Using it with arrays may lead to unexpected results.

//-------------------------------------------------------------
// 6. Nested Loops
//-------------------------------------------------------------
// You can place one loop inside another to handle multi-dimensional data.

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Output:
// i = 1, j = 1
// i = 1, j = 2
// i = 2, j = 1
// i = 2, j = 2
// i = 3, j = 1
// i = 3, j = 2

//-------------------------------------------------------------
// 7. The "break" Statement
//-------------------------------------------------------------
// The break statement is used to stop a loop before it finishes all iterations.

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// Output: 1, 2

// The loop stops immediately when i === 3.

//-------------------------------------------------------------
// 8. The "continue" Statement
//-------------------------------------------------------------
// The continue statement skips the current iteration and jumps to the next one.

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Output: 1, 2, 4, 5
// When i = 3, that iteration is skipped.

//-------------------------------------------------------------
// 9. Infinite Loops (⚠️ Be Careful!)
//-------------------------------------------------------------
// A loop without a proper exit condition runs forever and can crash your program.

let n = 1;
while (true) {
  console.log(n);
  if (n === 3) break; // Exit condition
  n++;
}

// Output: 1, 2, 3

//-------------------------------------------------------------
// 10. Practical Example
//-------------------------------------------------------------
// Example: Sum of first 5 numbers using different loops

// Using for loop
let sum1 = 0;
for (let i = 1; i <= 5; i++) {
  sum1 += i;
}
console.log(`Sum using for: ${sum1}`);

// Using while loop
let sum2 = 0, i2 = 1;
while (i2 <= 5) {
  sum2 += i2;
  i2++;
}
console.log(`Sum using while: ${sum2}`);

// Output:
// Sum using for: 15
// Sum using while: 15

//-------------------------------------------------------------
// 11. Summary
//-------------------------------------------------------------
// ✅ for → Best for known number of iterations
// ✅ while → Runs as long as the condition is true
// ✅ do...while → Runs at least once, even if the condition is false
// ✅ for...of → Iterates over values (arrays, strings, etc.)
// ✅ for...in → Iterates over keys (objects)
// ✅ break → Exits the loop immediately
// ✅ continue → Skips current iteration

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 Choose the right loop based on your use case.
// 🔹 Avoid infinite loops — always have an exit condition.
// 🔹 for...of is great for arrays, for...in for objects.
// 🔹 Use break and continue wisely to control flow inside loops.
// 🔹 Loops are the foundation of iteration and automation in JavaScript.