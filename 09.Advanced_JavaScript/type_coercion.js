// when the operands are different types, one will be converted into an equivalent type by the JavaScript engine

console.log(1 == "1");

// use 3 = signs instead
console.log(1 === "1");

// 1 gets coerced into true
if (1) {
  console.log(100);
}

// 0 gets coerced into false
if (0) {
  console.log("yolo");
}

// -0 and +0 are a thing in JS
console.log(-0 === +0); //true

// Object.is is very similar to 3 equals except for a few cases
console.log(Object.is(-0, +0)); //false
