// Named Function or Function Declaration
function sayHello() {
  console.log("Hello Wasabi");
}

sayHello();

// Anonymous Function or Function Expression
var sayBye = function () {
  console.log("Bye");
};

sayBye();

//Function with a parameter
function sing(song) {
  console.log(song);
}

sing("Lalalalalalalala");
sing("Memememememememe");

// Function with multiple parameters, if/else, and a return statement
function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "Number too big";
  } else {
    return a * b;
  }
}

console.log(multiply(5, 11));
