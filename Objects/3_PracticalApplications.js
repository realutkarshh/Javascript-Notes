//-------------------------------------------------------------
// PRACTICAL APPLICATIONS OF OBJECTS + COMPLETE SUMMARY (Part 4)
//-------------------------------------------------------------
// Objects are the backbone of JavaScript — almost everything
// (arrays, functions, dates, etc.) is an object or derived from one.

//-------------------------------------------------------------
// 1. PRACTICAL USE CASES OF OBJECTS
//-------------------------------------------------------------

// Example 1: Representing a Real-World Entity
let user = {
  name: "Utkarsh",
  email: "utkarsh@gmail.com",
  isVerified: true,
  login: function() {
    console.log(`${this.name} logged in successfully`);
  }
};
user.login(); // Utkarsh logged in successfully

//-------------------------------------------------------------
// Example 2: Managing Product Data in E-commerce
//-------------------------------------------------------------
let product = {
  id: 101,
  name: "Wireless Earbuds",
  price: 2499,
  discount: 10,
  getFinalPrice: function() {
    return this.price - (this.price * this.discount) / 100;
  }
};

console.log(`Final Price: ₹${product.getFinalPrice()}`); // ₹2249.1

//-------------------------------------------------------------
// Example 3: Using Objects for Configuration Settings
//-------------------------------------------------------------
let appConfig = {
  theme: "dark",
  language: "en",
  notifications: true
};

function updateConfig(option, value) {
  appConfig[option] = value;
}

updateConfig("theme", "light");
console.log(appConfig); // { theme: 'light', language: 'en', notifications: true }

//-------------------------------------------------------------
// Example 4: Using Objects in Arrays (Common in APIs)
//-------------------------------------------------------------
let students = [
  { name: "Ria", marks: 85 },
  { name: "Karan", marks: 92 },
  { name: "Aisha", marks: 78 }
];

// Find top scorer
let topper = students.reduce((prev, curr) => (curr.marks > prev.marks ? curr : prev));
console.log(`Topper: ${topper.name} (${topper.marks})`); // Karan (92)

//-------------------------------------------------------------
// Example 5: Storing and Accessing Nested Data
//-------------------------------------------------------------
let company = {
  name: "TechNova",
  employees: {
    total: 120,
    departments: {
      development: { head: "Rahul", members: 60 },
      marketing: { head: "Sneha", members: 30 },
      hr: { head: "Vikram", members: 10 }
    }
  }
};

console.log(company.employees.departments.marketing.head); // Sneha

//-------------------------------------------------------------
// Example 6: API Response (Realistic Scenario)
//-------------------------------------------------------------
let apiResponse = {
  status: 200,
  success: true,
  data: {
    user: {
      id: 1,
      username: "utkarsh_singh",
      posts: [
        { id: 11, title: "Learning JS Objects" },
        { id: 12, title: "Mastering React" }
      ]
    }
  }
};

console.log(apiResponse.data.user.posts[0].title); // Learning JS Objects

//-------------------------------------------------------------
// Example 7: Object as a Lookup Table
//-------------------------------------------------------------
// Using objects instead of multiple if/else conditions

let gradeMessages = {
  A: "Excellent",
  B: "Good",
  C: "Average",
  D: "Needs Improvement",
  F: "Failed"
};

let grade = "B";
console.log(gradeMessages[grade]); // Good

//-------------------------------------------------------------
// Example 8: Combining Objects with Functions
//-------------------------------------------------------------
function createUser(name, age, city) {
  return {
    name,
    age,
    city,
    greet() {
      console.log(`Hello, I'm ${this.name} from ${this.city}.`);
    }
  };
}

let newUser = createUser("Arjun", 23, "Pune");
newUser.greet(); // Hello, I'm Arjun from Pune.

//-------------------------------------------------------------
// 2. SUMMARY OF ALL OBJECT CONCEPTS
//-------------------------------------------------------------
// 🔹 Objects = Collection of key-value pairs (properties & methods).
// 🔹 Created using {} or new Object().
// 🔹 Access data using dot or bracket notation.
// 🔹 Add, update, and delete properties dynamically.
// 🔹 Functions inside objects are called *methods*.
// 🔹 "this" refers to the current object.
// 🔹 Objects can be nested (objects within objects).
// 🔹 Iterate using for...in, Object.keys(), Object.values(), Object.entries().
// 🔹 Copying methods: Object.assign(), spread (...), structuredClone().
// 🔹 Destructuring extracts properties easily.
// 🔹 Objects are used in real-world apps, APIs, and configurations.
// 🔹 Everything in JS (arrays, functions, DOM elements) is built on objects.

//-------------------------------------------------------------
// FINAL TAKEAWAY
//-------------------------------------------------------------
// Mastering objects means mastering the core of JavaScript!
// They form the foundation for JSON, APIs, classes, prototypes, and OOP concepts.