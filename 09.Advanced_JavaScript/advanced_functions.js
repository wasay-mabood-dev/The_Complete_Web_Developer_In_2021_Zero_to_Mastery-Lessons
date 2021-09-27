// CLOSURES
// The child scope always has access to the parent scope. Parent scope do not have access to child scope

const first = () => {
  const greet = "hi";

  const second = () => {
    console.log(greet);
  };
  return second;
};

const newFunction = first();

newFunction();

// Currying
// The process of taking a function that takes multiple arguments and making it take them one at a time
const multiply = (a, b) => a * b;
console.log("multiply: ", multiply(5, 6));

const curriedMultiply = (a) => (b) => a * b;

console.log(`Curried Multiply (One parameter): `, curriedMultiply(3));
console.log(`Curried Multiply (Both parameters): `, curriedMultiply(3)(4));

const multiplyByFive = curriedMultiply(5);
console.log(multiplyByFive(8));

//COMPOSE
// Put two functions together where the output of the first function is the inout of the second function
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

let output = compose(sum, sum)(5);
console.log(output); //5 + 1 + 1
