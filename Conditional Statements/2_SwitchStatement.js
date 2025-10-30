//-------------------------------------------------------------
// SWITCH STATEMENT IN JAVASCRIPT - COMPLETE GUIDE
//-------------------------------------------------------------
// The "switch" statement is used to perform different actions based on different conditions.
// It provides a cleaner alternative to multiple "if...else if..." statements 
// when comparing the same expression against multiple values.

//-------------------------------------------------------------
// 1. Basic Syntax of switch
//-------------------------------------------------------------
// Syntax:
// switch(expression) {
//   case value1:
//     // code to execute
//     break;
//   case value2:
//     // code to execute
//     break;
//   default:
//     // code to execute if no case matches
// }

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("📅 Start of the week!");
    break;
  case "Friday":
    console.log("🎉 Weekend is coming!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("😎 It's the weekend!");
    break;
  default:
    console.log("📆 Midweek days.");
}

// Output: 📅 Start of the week!

//-------------------------------------------------------------
// 2. The "break" Keyword
//-------------------------------------------------------------
// The "break" statement stops the switch block once a case is matched.
// Without "break", JavaScript will continue executing the next cases (called "fall-through").

let color = "green";

switch (color) {
  case "red":
    console.log("STOP");
  case "yellow":
    console.log("READY");
  case "green":
    console.log("GO");
}

// Output:
// GO
// ⚠️ Notice that "STOP" and "READY" are skipped, but execution continues after "green"
// because there are no "break" statements. 

//-------------------------------------------------------------
// 3. The "default" Case
//-------------------------------------------------------------
// The "default" case runs when no case matches the expression.
// It is similar to the "else" in an if...else statement.

let fruit = "Apple";

switch (fruit) {
  case "Banana":
    console.log("🍌 Bananas are yellow.");
    break;
  case "Mango":
    console.log("🥭 Mangoes are sweet.");
    break;
  default:
    console.log("🍎 Unknown fruit.");
}

// Output: 🍎 Unknown fruit.

//-------------------------------------------------------------
// 4. Grouping Multiple Cases
//-------------------------------------------------------------
// You can combine multiple case labels that share the same output.

let grade = "B";

switch (grade) {
  case "A":
  case "B":
    console.log("✅ Excellent performance!");
    break;
  case "C":
  case "D":
    console.log("⚠️ Needs improvement.");
    break;
  default:
    console.log("❌ Invalid grade.");
}

// Output: ✅ Excellent performance!

//-------------------------------------------------------------
// 5. Using Expressions in switch
//-------------------------------------------------------------
// You can use variables or even expressions in the switch condition.

let num = 10;

switch (true) {
  case num < 0:
    console.log("🔴 Negative number");
    break;
  case num === 0:
    console.log("🟡 Zero");
    break;
  case num > 0:
    console.log("🟢 Positive number");
    break;
  default:
    console.log("❌ Not a number");
}

// Output: 🟢 Positive number
// ✅ Here, we switched on `true` and compared each condition directly.

//-------------------------------------------------------------
// 6. Strict Comparison in switch
//-------------------------------------------------------------
// The switch statement uses "strict comparison" (===).
// That means both value and type must match.

let value = "10";

switch (value) {
  case 10:
    console.log("Matched number 10");
    break;
  case "10":
    console.log("Matched string '10'");
    break;
  default:
    console.log("No match found");
}

// Output: Matched string '10'

//-------------------------------------------------------------
// 7. switch vs if...else
//-------------------------------------------------------------
// ✅ Use switch when you are comparing a single variable against multiple fixed values.
// ✅ Use if...else when conditions are complex or involve logical operators.

// Example using if...else:
let trafficLight = "red";

if (trafficLight === "red") {
  console.log("🛑 Stop!");
} else if (trafficLight === "yellow") {
  console.log("⚠️ Get ready!");
} else if (trafficLight === "green") {
  console.log("✅ Go!");
} else {
  console.log("🚦 Invalid signal.");
}

// Example using switch:
switch (trafficLight) {
  case "red":
    console.log("🛑 Stop!");
    break;
  case "yellow":
    console.log("⚠️ Get ready!");
    break;
  case "green":
    console.log("✅ Go!");
    break;
  default:
    console.log("🚦 Invalid signal.");
}

// Both give the same output, but switch is more readable here.

//-------------------------------------------------------------
// 8. Practical Example
//-------------------------------------------------------------
// Let's build a simple program that gives messages based on the current month.

let month = "December";

switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("❄️ It's Winter!");
    break;
  case "March":
  case "April":
  case "May":
    console.log("🌸 It's Spring!");
    break;
  case "June":
  case "July":
  case "August":
    console.log("☀️ It's Summer!");
    break;
  case "September":
  case "October":
  case "November":
    console.log("🍂 It's Autumn!");
    break;
  default:
    console.log("❌ Invalid month.");
}

// Output: ❄️ It's Winter!

//-------------------------------------------------------------
// 9. Summary
//-------------------------------------------------------------
// ✅ switch → Used to execute one case among many based on a single expression
// ✅ case → Represents a potential match
// ✅ break → Prevents fall-through to the next case
// ✅ default → Executes if no case matches
// ✅ Uses strict comparison (===)

//-------------------------------------------------------------
// Key Takeaways
//-------------------------------------------------------------
// 🔹 switch is cleaner and more readable than long if...else chains.
// 🔹 Always use break to avoid unintentional fall-through.
// 🔹 You can group multiple cases for the same output.
// 🔹 switch uses strict equality — type must match too.
// 🔹 Useful for comparing one variable against multiple fixed values.
