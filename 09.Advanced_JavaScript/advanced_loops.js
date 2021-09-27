const basket = ["apples", "oranges", "grapes"];

console.log("\nFor Loop:");
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

console.log("\nFor Each Loop:");
basket.forEach((item) => {
  console.log(item);
});

// "for of" loop
console.log("\nFor Of Loop:");
for (item of basket) {
  console.log(item);
}

// "for in" loop used for objects

const betterBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

console.log("\nFor In Loop:");
for (item in betterBasket) {
  console.log(item);
}

// You iterate over an erray
// You enumerate over objects
