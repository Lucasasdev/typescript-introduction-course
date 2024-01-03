"use strict";
//generics is a form of tiping dinamicly function, varibles, class lists etc...
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const MorningMessage = (message) => {
    return message;
};
const GenericOne = MorningMessage("hey, good morning!");
const GenericTwo = MorningMessage(2000);
// array
function getArray(arr) {
    return arr[0];
}
const getFirstNumberArray = getArray([1, 2, 3]);
const getFirstStringArray = getArray(["Josh", "Mark"]);
// Promises
const getPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return "5";
});
const getPromiseT = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    return promise;
});
function getPromiseNumberType() {
    return __awaiter(this, void 0, void 0, function* () {
        return 2;
    });
}
// class
class GenericNumber {
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const MyGenericNumber = new GenericNumber(0, (a, b) => {
    return a + b;
});
