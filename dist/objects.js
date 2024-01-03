"use strict";
const user = {
    firstname: "Joe",
    age: 20,
    email: "Joe@example.com",
    password: "12345678",
    orders: [
        { productId: "Monitor", price: 1.2 },
        { productId: "Car", price: 1 },
    ],
    register() {
        return "2";
    },
};
//function which get a parameter of the type string or undefined
const printLog = (message) => { };
printLog(user.password);
//  Unions
const author = {
    firstname: "Joe",
    age: 22,
    email: "joe@test.com",
    password: "",
    books: ["3"],
    orders: [{ productId: "product", price: 100 }],
    register() {
        return "2";
    },
};
const userInterface = {
    firstname: "Mark",
    age: 33,
    books: ["title 1", "title 2"],
};
// interface Grade2 = string | number;  # Intersection not to get with interfaces
const grade = "good evening";
