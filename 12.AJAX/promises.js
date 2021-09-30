const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "HIII");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Broski");
});

Promise.all([promise, promise2, promise3]).then((values) => {
  console.log(values);
});

promise
  .then((result) => result + "!")
  .then((result2) => result2 + "?")
  .catch(console.log("ERROR!"))
  .then((result3) => {
    console.log(result3 + "!");
  });

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((response) => response.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error. check for typos in urls"));
