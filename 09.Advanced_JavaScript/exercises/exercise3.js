// change everything below to the newer Javascript!

// let + const
// var a = "test";
// var b = true;
// var c = 789;
// a = "test2";
let a = "test";
let b = "true";
const c = 789;
a = "test2";

// Destructuring
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

let { firstName, lastName, age, eyeColor } = person;
console.log("Destructuring: ", person);

// Object properties
// var a = "test";
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c,
// };

let okObj = { a, b, c };
console.log("Object Properties: ", okObj);

// Template strings
// var message =
//   "Hello " +
//   firstName +
//   " have I met you before? I think we met in " +
//   city +
//   " last summer no???";

let message = `Hello ${firstName}. Have i met you before? I think we met in ${(city =
  "Reston!")} last summer`;
console.log("Template Strings: ", message);

// default arguments
// default age to 10;
// function isValidAge(age = 10) {
//   return age;
// }

let isValidAge = (age = 10) => {
  return age;
};

console.log("Default Arguments: ", isValidAge());

// Symbol
// Create a symbol: "This is my first Symbol"
let mySymbol = Symbol("Symbolic");
console.log("Symbol: ", mySymbol);

// Arrow functions
// function whereAmI(username, location) {
//   if (username && location) {
//     return "I am not lost";
//   } else {
//     return "I am totally lost!";
//   }
// }

let whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};

console.log("Arrow Functions: ", whereAmI("test"));
