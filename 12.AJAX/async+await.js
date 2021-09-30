// await is a promise under the hood but easier to read (syntactic sugar)

// The old way
movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(100, "Right"))
  .then(() => movePlayer(350, "Left"));

// Using async+await
async function playerStart() {
  const firstMove = await movePlayer(100, "Left"); //pause
  await movePlayer(400, "Left"); //pause
  await movePlayer(100, "Right"); //pause
  await movePlayer(350, "Left"); //pause
}

// Old way to fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then(console.log);

//  Using async+await
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// Old Way
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

// Async+await

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((response) => response.json());
      })
    );
    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (error) {
    console.log("Oops: ", error);
  }
};
