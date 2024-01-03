//Basic types
const age: number = 5;
const term: string = "typescript";
const isValid: boolean = true;
let idk: any = 2;

idk = "12";
idk = true;

//array example
const ide: number[] = [1, 2, 3, 4, 5];
const listNames: string[] = ["Mark", "Joe"];
const itsTrue: boolean[] = [true, false, true, false];

//Tuples
const typeAnimal: [number, string] = [1, "Donkey"];

//list of tuples
const listOfTuples: [string, boolean][] = [
  ["", true],
  ["", false],
  ["", true],
];

//Intersections
const objetctId: number | string | boolean = 3;

//Enum
enum Direction {
  up = 1,
  down = 2,
  left = "left",
  right = "right",
}

const direction = Direction.up;

//Type Assertions
const productId: any = "Boné";
// let itemId = productId as string;
let itemId = <string>productId;

console.log(direction);
