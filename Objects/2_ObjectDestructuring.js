//-------------------------------------------------------------
// OBJECT DESTRUCTURING + OBJECT REFERENCES & COPYING (Part 3)
//-------------------------------------------------------------
// Objects can be easily unpacked or copied using destructuring
// and spread/rest syntax in JavaScript.

//-------------------------------------------------------------
// 1. OBJECT DESTRUCTURING
//-------------------------------------------------------------
// Destructuring allows extracting multiple properties from an object
// and assigning them to variables in a single statement.

let person = {
  name: "Utkarsh",
  age: 21,
  city: "Delhi"
};

// ✅ Basic Destructuring
let { personName, age, city } = person;
console.log(personName); // Utkarsh
console.log(age);  // 21
console.log(city); // Delhi

//-------------------------------------------------------------
// 2. DESTRUCTURING WITH DIFFERENT VARIABLE NAMES
//-------------------------------------------------------------
// You can rename the variables while destructuring.

let { name: fullName, age: years } = person;
console.log(fullName); // Utkarsh
console.log(years);    // 21

//-------------------------------------------------------------
// 3. SETTING DEFAULT VALUES
//-------------------------------------------------------------
// If a property doesn’t exist, a default value can be assigned.

let { country = "India" } = person;
console.log(country); // India

//-------------------------------------------------------------
// 4. NESTED OBJECT DESTRUCTURING
//-------------------------------------------------------------
let student = {
  id: 101,
  info: {
    name: "Utkarsh",
    branch: "CSE",
    address: {
      city: "Noida",
      zip: 201301
    }
  }
};

// Extract nested properties
let {
  info: {
    name: studentName,
    address: { city: studentCity }
  }
} = student;

console.log(studentName); // Ria
console.log(studentCity); // Noida

//-------------------------------------------------------------
// 5. DESTRUCTURING IN FUNCTION PARAMETERS
//-------------------------------------------------------------
function showDetails({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

showDetails(person); // Utkarsh is 21 years old.

//-------------------------------------------------------------
// 6. REST OPERATOR IN OBJECTS
//-------------------------------------------------------------
// Collect remaining properties using "..."

let { age: a, ...rest } = person;
console.log(a);     // 21
console.log(rest);  // { name: 'Utkarsh', city: 'Delhi' }

//-------------------------------------------------------------
// 7. OBJECT REFERENCES & COPYING
//-------------------------------------------------------------
// In JavaScript, objects are *reference types*.
// Copying an object variable does NOT create a new copy — it copies the reference.

let obj1 = { name: "John" };
let obj2 = obj1;  // obj2 points to the same memory location

obj2.name = "Emma";
console.log(obj1.name); // Emma (❗ changes reflect in both)

//-------------------------------------------------------------
// 8. SHALLOW COPY USING SPREAD OPERATOR
//-------------------------------------------------------------
// Creates a new object with copied properties (not linked by reference)

let user = { name: "Ria", age: 22 };
let copyUser = { ...user };

copyUser.name = "Priya";
console.log(user.name);     // Ria
console.log(copyUser.name); // Priya

//-------------------------------------------------------------
// 9. SHALLOW COPY USING Object.assign()
 //-------------------------------------------------------------
let target = {};
Object.assign(target, user);
console.log(target); // { name: 'Ria', age: 22 }

//-------------------------------------------------------------
// 10. DEEP COPY (NESTED OBJECTS)
//-------------------------------------------------------------
// Shallow copy does not work for nested objects.
// Deep copy creates a completely independent clone.

let original = {
  name: "Alex",
  address: { city: "Mumbai", zip: 400001 }
};

// ❌ Shallow copy example
let shallowCopy = { ...original };
shallowCopy.address.city = "Pune";
console.log(original.address.city); // Pune (still changed!)

// ✅ Deep copy using structuredClone()
let deepCopy = structuredClone(original);
deepCopy.address.city = "Chennai";
console.log(original.address.city); // Mumbai (unchanged)

//-------------------------------------------------------------
// 11. PRACTICAL EXAMPLE
//-------------------------------------------------------------
let employee = {
  id: 202,
  name: "Karan",
  role: "Developer",
  skills: { primary: "JavaScript", secondary: "React" }
};

// Destructure and copy safely
let { name: empName, skills: { primary } } = employee;
let safeCopy = structuredClone(employee);

console.log(`${empName}'s primary skill: ${primary}`); // Karan's primary skill: JavaScript
safeCopy.skills.primary = "Node.js";
console.log(employee.skills.primary); // JavaScript (unchanged)

//-------------------------------------------------------------
// ✅ SUMMARY
//-------------------------------------------------------------
// 🔹 Destructuring = Extract properties from objects easily
// 🔹 Can rename variables, set defaults, and unpack nested data
// 🔹 Rest (...) collects remaining properties
// 🔹 Objects are reference types — copies share memory
// 🔹 Spread or Object.assign() = shallow copy
// 🔹 structuredClone() = deep copy for nested objects
