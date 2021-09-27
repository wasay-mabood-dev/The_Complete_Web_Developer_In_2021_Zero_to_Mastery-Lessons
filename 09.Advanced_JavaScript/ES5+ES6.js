// const cannot be changed. It is a static value. If you try to change it, you will get an error
// let respects scoping

const player = "wasabi";
let xp = 100;
let wizardLevel = false;

if (xp > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}
console.log("outside", wizardLevel);

const obj1 = {
  player1: "bobby",
  experience1: 100,
  wizardLevel1: false,
};

// You can assign variables like this
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

//DESTRUCTURING
const { player1, experience1 } = obj1;
let { wizardLevel1 } = obj1;

// OBJECT PROPERTIES
const name = "Toulouse the Cat";
const obj2 = {
  [name]: "hello",
  ["ray" + "smith"]: "hihi",
  [4 + 4]: "quickmafs",
};

console.log(obj2);

const a = "wasay";
const b = true;
const c = {};

// Can put the variables into an object like this now
const obj3 = { a, b, c };
console.log(obj3);

// TEMPLATE STRINGS
const mood = "good";

// Old way
const greeting = "Hello " + name + ", you seem to be doing " + mood + "!";
console.log("Old Way:", greeting);

// New Way
const greetingBetter = `Hello ${name}, you seem to be doing ${mood}!`;
console.log("New Way:", greetingBetter);

// DEFAULT ARGUMENTS
function greet(name = "", age = 20) {
  return `Your name is ${name}. You are ${age}"}`;
}

console.log(greet());
console.log(greet("Wasay", 25));

// SYMBOLS
let symbol1 = Symbol();
let symbol2 = Symbol("foo");
let symbol3 = Symbol("foo");
// Symbols are 100% unique even though symbol2 and symbol3 appear to be the same
console.log(symbol2 === symbol3);

// ARROW FUNCTIONS

// The old way
function add(a, b) {
  return a + b;
}
console.log("Old Way: ", add(2, 2));

// The new way
const add2 = (a, b) => a + b;
console.log("New Way: ", add2(3, 3));
