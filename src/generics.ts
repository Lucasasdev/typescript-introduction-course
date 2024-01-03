//generics is a form of tiping dinamicly function, varibles, class lists etc...

const MorningMessage = <T>(message: T): T => {
  return message;
};

const GenericOne = MorningMessage<string>("hey, good morning!");
const GenericTwo = MorningMessage<number>(2000);

// array
function getArray<type>(arr: type[]): type {
  return arr[0];
}

const getFirstNumberArray = getArray<number>([1, 2, 3]);
const getFirstStringArray = getArray<string>(["Josh", "Mark"]);

// Promises
const getPromise = async (): Promise<string> => {
  return "5";
};

const getPromiseT = async <T>(promise: T): Promise<T> => {
  return promise;
};

async function getPromiseNumberType(): Promise<number> {
  return 2;
}

// class
class GenericNumber<T> {
  zeroValue: T;
  sum: (a: T, b: T) => T;

  constructor(zeroValue: T, sum: (a: T, b: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const MyGenericNumber = new GenericNumber(0, (a: number, b: number) => {
  return a + b;
});
