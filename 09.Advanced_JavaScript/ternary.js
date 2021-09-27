// condition ? expression1 : expression2
function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(false) ? "Access Granted" : "Access Denied";

console.log(answer);

var automatedAnswer =
  "Your account # is " + (isUserValid(true) ? "1234" : "Not available");

console.log(automatedAnswer);
