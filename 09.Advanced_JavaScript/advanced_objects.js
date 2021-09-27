// reference type
let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };

console.log(obj1 === obj2);
console.log(obj1 === obj3);

console.log(obj1.value === obj3.value);

// context vs scope

// a only exists in the function scope
function b() {
  let a = a;
}

// think of 'this' as what is left of the dot operator (.method)

const object4 = {
  a: function () {
    console.log(this);
  },
};

object4.a();

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name}. I am a ${this.type}`);
  }
}

class Wizard extends Player {
  // When you extend another class, you have to use 'super' and pass the values you want to inherit
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`I'm a magical ${this.type}`);
  }
}

wizard1 = new Wizard("Wasay", "Healer");
wizard2 = new Wizard("Toulouse", "Menace");

// You also inherit the functions of the class you are extending
wizard1.introduce();
wizard1.play();
