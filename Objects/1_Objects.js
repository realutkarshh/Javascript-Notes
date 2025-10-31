//-------------------------------------------------------------
// OBJECTS IN JAVASCRIPT - COMPLETE GUIDE (Part 1)
//-------------------------------------------------------------
// Objects are one of the most important data types in JavaScript.
// They allow you to store data in key-value pairs and represent real-world entities.

//-------------------------------------------------------------
// 1. INTRODUCTION TO OBJECTS
//-------------------------------------------------------------
// ✅ Objects store data in the form of "key: value" pairs.
// ✅ Keys are called *properties* and values can be any data type (string, number, array, function, etc.)

let person = {
  name: "Utkarsh",
  age: 21,
  isStudent: true
};

console.log(person); // { name: 'Utkarsh', age: 21, isStudent: true }

//-------------------------------------------------------------
// 2. CREATING AND ACCESSING OBJECT PROPERTIES
//-------------------------------------------------------------

// ✅ 1. Object Literal Syntax (Most Common)
let car = {
  brand: "Tesla",
  model: "Model 3",
  color: "White"
};

// ✅ 2. Using new Object()
let user = new Object();
user.name = "Ria";
user.age = 22;

//-------------------------------------------------------------
// ACCESSING PROPERTIES
//-------------------------------------------------------------
// Two ways to access values:

console.log(car.brand);     // Dot notation → Tesla
console.log(car["model"]);  // Bracket notation → Model 3

// Bracket notation is useful when property names have spaces or are dynamic:
let property = "color";
console.log(car[property]); // White

//-------------------------------------------------------------
// 3. ADDING, UPDATING, AND DELETING PROPERTIES
//-------------------------------------------------------------

let student = {
  name: "Arjun",
  branch: "CSE"
};

// ✅ Adding a new property
student.year = "3rd Year";
console.log(student.year); // 3rd Year

// ✅ Updating existing property
student.branch = "ECE";
console.log(student.branch); // ECE

// ✅ Deleting a property
delete student.branch;
console.log(student); // { name: 'Arjun', year: '3rd Year' }

//-------------------------------------------------------------
// 4. OBJECT METHODS & 'this' KEYWORD BASICS
//-------------------------------------------------------------
// A method is simply a function defined inside an object.

let dog = {
  name: "Bruno",
  breed: "Labrador",
  bark: function() {
    console.log("Woof! Woof!");
  }
};

dog.bark(); // Woof! Woof!

//-------------------------------------------------------------
// USING 'this' KEYWORD
//-------------------------------------------------------------
// 'this' refers to the current object that owns the method.

let student2 = {
  name: "Utkarsh",
  course: "B.Tech",
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm studying ${this.course}.`);
  }
};

student2.greet();
// Output: Hello, my name is Priya and I'm studying B.Tech.

//-------------------------------------------------------------
// 5. NESTED OBJECTS
//-------------------------------------------------------------
// Objects can contain other objects — useful for structured data.

let employee = {
  name: "Rahul",
  department: {
    name: "IT",
    manager: "Sonia"
  },
  address: {
    city: "Delhi",
    zip: 110001
  }
};

// Accessing nested data
console.log(employee.department.name); // IT
console.log(employee.address.city);    // Delhi

// Modifying nested data
employee.department.manager = "Karan";
console.log(employee.department.manager); // Karan

//-------------------------------------------------------------
// ✅ PRACTICAL EXAMPLE
//-------------------------------------------------------------
let smartphone = {
  brand: "Apple",
  model: "iPhone 15",
  specs: {
    ram: "8GB",
    storage: "256GB"
  },
  showDetails: function() {
    console.log(`${this.brand} ${this.model} with ${this.specs.ram} RAM and ${this.specs.storage} storage.`);
  }
};

smartphone.showDetails();
// Output: Apple iPhone 15 with 8GB RAM and 256GB storage.

//-------------------------------------------------------------
// ✅ SUMMARY
//-------------------------------------------------------------
// 🔹 Objects store data as key-value pairs.
// 🔹 Access using dot or bracket notation.
// 🔹 Add/update/delete properties dynamically.
// 🔹 Methods = functions inside objects.
// 🔹 'this' refers to the current object.
// 🔹 Objects can be nested for complex data structures.
