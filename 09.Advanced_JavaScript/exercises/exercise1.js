// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  //alert(a);
  console.log("1. a = ", a);
}
q1();

//#2
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  // alert(a);
  console.log("2. a = ", a);
}
q2();
q22();

//#3
function q3() {
  window.a = "hello";
}

function q32() {
  // alert(a);
  console.log("3. a = ", a);
}
// needs to be run in a browser
// q3();
q32();

//#4
var a = 1;
function q4() {
  var a = "test";
  // alert(a);
  console.log("4. a = ", a);
}
q4();

//#5
var a = 2;
if (true) {
  var a = 5;
  // alert(a);
  console.log("5. a = ", a);
}

// alert(a);
// console.log(a);
