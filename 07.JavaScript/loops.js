// FOR loop
var todo = ["clean room", "brush teeth", "eat food", "study"];

for (index = 0; index < todo.length; index++) {
  console.log(todo[index]);
}

// WHILE loop
var counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}

counter = 10;

// DO WHILE loop
do {
  console.log("do while", counter);
  counter--;
} while (counter > 10);

// forEACH loop
todo.forEach(function (todoList) {
  console.log(todoList);
});

//Can break out the function part to use that in other places and make it easier to read
function listArray(list, index) {
  console.log(list, index);
}

todo.forEach(listArray);
