function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "You encounter a monster";
      break;
    case "back":
      whatHappens = "You're back home";
      break;
    case "left":
      whatHappens = "You run into trolls";
      break;
    case "right":
      whatHappens = "You fall into a river";
      break;
    default:
      whatHappens = "Please enter a valid direction";
  }
  return whatHappens;
}

console.log(
  "Enter one of the following directions: forward, back, left, right"
);

console.log(moveCommand("right"));
