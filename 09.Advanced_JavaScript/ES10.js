//  Flat method removes all the nested arrays

const array1 = [1, 2, 3, 4, 5];
console.log(array1.flat());

const array2 = [1, [2, 3], [4, 5]];
console.log(array2.flat());

const array3 = [1, 2, [3, 4, [5]]];
console.log(array3.flat());

// You can tell flat how many layers to flatten
console.log(array3.flat(2));

// Flat can also remove empty items in an array
const entries = ["Wasay", "Toulouse", , , , , , , "Bob"];
console.log(entries);
console.log(entries.flat());

// FlatMap method
console.log(entries.flatMap((values) => values + ":)"));

//trimStart and trimEnd methods
let userEmail = "       test@example.com";
let userEmail2 = "toulouse@example.com     ";

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

// fromEntries transforms a list of key:value pairs like an array into an object. Designed for 2-dimesional arrays so it truncates everything after the first 2 items
userProfiles = [
  ["Wasay", 23, "Mabood"],
  ["Toulouse", 1, "Mabood"],
  ["Bob", 40, "Brown"],
];

console.log(Object.fromEntries(userProfiles));

// Try Catch block is used to Try a block of code and catch the error (if there is one) to do something with it
try {
  console.log(username + "hello");
} catch (error) {
  console.log("\n\nWhoops!", error);
}
