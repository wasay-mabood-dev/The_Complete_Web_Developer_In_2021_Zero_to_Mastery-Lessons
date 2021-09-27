// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
console.log(array[0].username);
//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const excited = [];
const forEachArray = array.forEach((object) => {
  excited.push(object.username + `!`);
});

console.log(`forEach: `, excited);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map((object) => object.username + `?`);
console.log(`map: `, mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter((object) => object.team === "red");
console.log(`filter: `, filterArray);

//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulator, object) => {
  return accumulator + object.score;
}, 0);

console.log(`reduceArray`, reduceArray);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});
console.log(`newArray: `, newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});

console.log("Answer: ", answer);
