// BigInt
console.log(typeof 44444444444444444444444444444444444444444);

//  JS has a max safe integer (~9 quadrillion). As soon as you get higher than that, you run out of memory.
console.log(Number.MAX_SAFE_INTEGER);

// use n to specify a number as a bigint
console.log(typeof 4n);

let wasay_pokemon = {
  pikachu: {
    species: "Electric mouse",
    height: 0.4,
    weight: 6,
    // type: "electric",
  },
};

let toulouse_pokemon = {
  charmander: {
    species: "fire lizard",
    height: 0.3,
    weight: 4,
    type: undefined,
  },
};

// Nullish coalescing operator ?? - checks for null or undefined
let type = wasay_pokemon?.pikachu?.type || "no type";
console.log(type);

type = toulouse_pokemon?.charmander?.type ?? "no power";
console.log(type);

// Optional chaining operator ?.
let weight = wasay_pokemon.pikachu.weight;
console.log(weight);

// in the past, you would have to use an if statement and have a bunch of checks to see if the properties existed or not
if (
  toulouse_pokemon &&
  toulouse_pokemon.pikachu &&
  toulouse_pokemon.pikachu.weight
) {
  let weight2 = toulouse_pokemon.pikachu.weight;
  console.log(weight2);
} else {
  let weight2 = undefined;
  console.log(weight2);
}

// now you can do this instead
// let weight3 = toulouse_pokemon?.pikachu.weight;
// console.log(weight3);

// these next 2 require their own videos so we will revisit later
// Promise.allsettled
// globalThis
