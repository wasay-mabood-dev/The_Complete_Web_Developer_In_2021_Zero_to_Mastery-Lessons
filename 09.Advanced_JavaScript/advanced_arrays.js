let array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});
console.log(`forEach: `, double);

// map
// map needs to return a value. It returns an array
const mapArray = array.map((num) => num * 2);
console.log(`mapArray: `, mapArray);

// filter
// will return an array with values that satisfy the condition
const filterArray = array.filter((num) => num > 5);
console.log(`filterArray: `, filterArray);

//reduce
// has another parameter called an accumulator. this stores the value in the body as it goes through the array items.
// can have a default value
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log(`Accumulator: `, reduceArray);
