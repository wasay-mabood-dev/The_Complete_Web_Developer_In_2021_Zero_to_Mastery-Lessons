//Evaluate these:
//#1
console.log([2] === [2]);
console.log({} === {});

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //5
console.log(object1);

const object2 = object1; //5
console.log(object2);

const object3 = object2; //5
console.log(object3);

const object4 = { a: 5 }; //5
console.log(object4);

object1.a = 4; //4
console.log(object1);

//#3 create two classes: an Animal class and a Mammal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
  constructor(name, type, color, noise) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.noise = noise;
  }
}

class Mammal extends Animal {
  constructor(name, type, color, noise) {
    super(name, type, color, noise);
  }

  sound() {
    console.log(
      `${this.name} the ${this.color} ${this.type} goes ${this.noise}`
    );
  }
}

const animal = new Mammal("Toulouse", "orange", "cat", "moooooooo");
animal.sound();
