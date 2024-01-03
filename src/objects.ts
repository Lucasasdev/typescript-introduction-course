//  Types
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstname: string;
  age: number;
  email: string;
  password?: string; //Object with property optional
  orders: Order[];
  register(): string;
};

type Author = {
  books: string[];
};

const user: User = {
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
const printLog = (message?: string) => {};

printLog(user.password);

//  Unions
const author: User & Author = {
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

//  Interfaces
interface UserInterface {
  readonly firstname: string;
  age: number;
}

interface UserAuthor {
  books: string[];
}

const userInterface: UserInterface & UserAuthor = {
  firstname: "Mark",
  age: 33,
  books: ["title 1", "title 2"],
};

//userInterface.firstname = 'new name';

// [ if I try to acess this property at the object userInterface, the console will be return an erro  'read-only' ]

type Grade = string | number;
// interface Grade2 = string | number;  # Intersection not to get with interfaces

const grade: Grade = "good evening";
