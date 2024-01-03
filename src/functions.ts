//function wiht number return, the same return of the params
const sum = (x: number, y: number) => {
  return x + y;
};
const result = sum(1, 3);

//function with return difernt of the params
const sum2 = (x: number, y: number): string => {
  return (x + y).toString();
};
const result2 = sum2(1, 3);

//function without any return. This type of function must return nothing.
const log = (message: string): void => {
  console.log(message);
};

const logMessage = log("function without return!");

//function with intersectin of return
const sum3 = (x: number, y: number): number | string => {
  return x + y;
};

const result3 = sum3(1, 3);

//funtion which can receive any value type and void type
const arrList = (arr1: number[], arr2: number[]): number[] => {
  return arr1.concat(arr2);
};

const listArray = arrList([1, 3, 4], [5, 6, 7]);
console.log(listArray);

//funtion using type or intefaces as way.
type MathSum = {
  (a: number, b: number): number;
};

interface MathSum2 {
  (a: number, b: number): string;
}

const sum4: MathSum = (a: number, b: number): number => {
  return a - b;
};

const sum5: MathSum2 = (a: number, b: number): string => {
  return (a + b).toString();
};
