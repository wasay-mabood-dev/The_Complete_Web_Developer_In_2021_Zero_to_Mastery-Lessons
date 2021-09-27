function checkDriverAge() {
  return age = Number(prompt("How old are you?"));
} 
checkDriverAge()

var checkDriverAge2 = function() {
  return age = Number(prompt("How old are you?"));
} 
checkDriverAge2()

// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"
if (age < 18) {
  alert('Sorry, you are too young to drive this car. Powering off')
} else if (age === 18) {
  alert('Congratulations on your first year of driving. Enjoy the ride!')
} else {
  alert('Powering On. Enjoy the ride!')
}

// //1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// // Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

// //2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

// //BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"