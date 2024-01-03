"use strict";
//Basic types
const age = 5;
const term = "typescript";
const isValid = true;
let idk = 2;
idk = "12";
idk = true;
//array example
const ide = [1, 2, 3, 4, 5];
const listNames = ["Mark", "Joe"];
const itsTrue = [true, false, true, false];
//Tuples
const typeAnimal = [1, "Donkey"];
//list of tuples
const listOfTuples = [
    ["", true],
    ["", false],
    ["", true],
];
//Intersections
const objetctId = 3;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
const direction = Direction.up;
//Type Assertions
const productId = "Boné";
// let itemId = productId as string;
let itemId = productId;
console.log(direction);
