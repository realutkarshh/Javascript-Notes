// ===============================
// INTERACTION IN JAVASCRIPT - ALERT, PROMPT & CONFIRM
// ===============================

// In this file, we’ll learn how JavaScript interacts with users using
// three simple but powerful functions: alert(), prompt(), and confirm().
// These functions are part of the browser's Window object and are used
// to display dialogs and capture user input.

// ===============================
// 1. alert()
// ===============================

// The alert() function displays a message to the user in a dialog box.
// It only shows text and an “OK” button. Execution of code pauses until
// the user closes the alert box.

alert("Welcome to JavaScript Learning!"); // Displays a simple message

// Example:
let greeting = "Hello, Utkarsh!";
alert(greeting); // A pop-up with "Hello, Utkarsh!" appears

// Note: alert() doesn’t return any value. It’s used only for displaying information.

// ===============================
// 2. prompt()
// ===============================

// The prompt() function asks the user to input some text.
// It displays a message, an input box, and two buttons: “OK” and “Cancel”.

// Syntax:
// prompt(message, defaultValue)

let userName = prompt("What is your name?", "Guest");
alert(`Welcome, ${userName}!`);

// Explanation:
// - The first argument is the message displayed to the user.
// - The second (optional) argument sets a default text in the input field.
// - The value entered by the user is returned as a string.
// - If the user clicks “Cancel”, the function returns null.

console.log(typeof userName); // Always returns string or null

// Example:
let age = prompt("Enter your age:");
alert(`You are ${age} years old.`);

// Be cautious: prompt() always returns a string, even if you type a number.
console.log(typeof age); // "string"

// You can convert it to a number using Number():
age = Number(age);
console.log(typeof age); // "number"

// ===============================
// 3. confirm()
// ===============================

// The confirm() function displays a dialog box with a message and two buttons:
// “OK” and “Cancel”. It returns a boolean value based on the user’s choice.

// Syntax:
// confirm(message)

let isStudent = confirm("Are you a student?");
if (isStudent) {
  alert("That's great! Keep learning!");
} else {
  alert("No worries, learning never stops!");
}

console.log(isStudent); // true if OK clicked, false if Cancel clicked

// ===============================
// 4. Combining alert, prompt & confirm
// ===============================

// These three functions are often used together to create simple user interactions.

// Example:
alert("Welcome to our website!");
let user = prompt("Please enter your name:");
let wantsToContinue = confirm(`Hey ${user}, do you want to continue?`);

if (wantsToContinue) {
  alert("Awesome! Let's get started!");
} else {
  alert("Maybe next time!");
}

// This example demonstrates how we can:
// 1. Greet the user (alert)
// 2. Ask for input (prompt)
// 3. Confirm an action (confirm)

// ===============================
// 5. Important Notes
// ===============================
// 🔹 These dialogs are modal, meaning they pause code execution
//     until the user responds.
// 🔹 They are blocking, so no other code or interaction can happen
//     while the dialog is open.
// 🔹 They should be used only for **simple interactions**, not for UI design.
// 🔹 For modern apps, use custom HTML/CSS modals instead for better user experience.

// ===============================
// 6. Best Practices
// ===============================
// ✔ Use alert() for simple, quick notifications or debugging.
// ✔ Use prompt() only when minimal user input is needed.
// ✔ Use confirm() for yes/no decisions or confirmations.
// ✔ Always handle cases where prompt() returns null (user clicked Cancel).
// ✔ Avoid overusing alerts in production websites.

// Example (handling null value safely):
let city = prompt("Enter your city name:");
if (city === null || city.trim() === "") {
  alert("You didn’t enter any city.");
} else {
  alert(`You live in ${city}!`);
}

// ===============================
// 7. Summary
// ===============================
// 🔹 alert(message) → shows a message with OK button
// 🔹 prompt(message, default) → asks for user input (returns string or null)
// 🔹 confirm(message) → asks for confirmation (returns true/false)
// 🔹 These functions are synchronous and block further execution
// 🔹 Best used for quick demos, debugging, or simple user interaction

// ===============================
// END OF FILE
// ===============================
