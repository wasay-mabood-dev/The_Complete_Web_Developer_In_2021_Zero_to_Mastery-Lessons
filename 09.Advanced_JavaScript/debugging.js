let numbers = [];
debugger; //Use VS Code Debugger on the side panel
for (let i = 0; i <= 5; i++) {
  numbers.push(i);
}

console.log(numbers);

// Overflow the call stack | Stack Overflow
function recursion() {
  recursion();
}

recursion();
