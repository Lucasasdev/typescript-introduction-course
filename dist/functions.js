"use strict";
//function wiht number return, the same return of the params
const sum = (x, y) => {
    return x + y;
};
const result = sum(1, 3);
//function with return difernt of the params
const sum2 = (x, y) => {
    return (x + y).toString();
};
const result2 = sum2(1, 3);
//function without any return. This type of function must return nothing.
const log = (message) => {
    console.log(message);
};
const logMessage = log("function without return!");
//function with intersectin of return
const sum3 = (x, y) => {
    return x + y;
};
const result3 = sum3(1, 3);
//funtion which can receive any value type and void type
const arrList = (arr1, arr2) => {
    return arr1.concat(arr2);
};
const listArray = arrList([1, 3, 4], [5, 6, 7]);
console.log(listArray);
const sum4 = (a, b) => {
    return a - b;
};
const sum5 = (a, b) => {
    return (a + b).toString();
};
