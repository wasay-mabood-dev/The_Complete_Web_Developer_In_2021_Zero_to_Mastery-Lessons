// String Padding
console.log("Wasay".padStart(10));
console.log("Wasay".padEnd(10));

// trailing commas
const fun = (a, b, c, d) => {
  console.log(a);
};

fun(1, 2, 3, 4);

// Object.values and Object.entries

let obj = {
  username0: "Santa",
  username1: "Rudolph",
  username2: "Grinch",
};

// Before you had to use Object.keys to iterate over an object
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

// Gives you just the values
Object.values(obj).forEach((value) => {
  console.log(value);
});

// Gives you the Object as an array so you can use it with array methods like map, filter, etc
Object.entries(obj).forEach((value) => {
  console.log(value);
});

let example = Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", "");
});

console.log(example);
