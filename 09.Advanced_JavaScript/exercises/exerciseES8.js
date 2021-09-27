// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢".padStart(9);
let rabbit = "🐇".padStart(9);

// it should look like this:
("     ||<- Start line");
("       🐢");
("       🐇");

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padStart(9, "=");
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// #3) Get the below object to go from:
let obj = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};
// to this:
("my name is Rudolf the reindeer");

let example = Object.entries(obj);
console.log(example);

example = Object.entries(obj).map((value) => value.join(" "));
console.log(example);

example = Object.entries(obj)
  .map((value) => value.join(" "))
  .join(" ");

console.log(example);
