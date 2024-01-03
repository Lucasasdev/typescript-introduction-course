class Person {
  private id: number; //this property can only be accessed within of the class and by the class parent
  readonly name: string; //this is available to access out and inside of the class, no restrictions.
  protected age: number; //this property can only be accessed within of the class and by the class parent and clidren

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  changeId() {
    this.id = 2;
  }

  sayName() {
    return this.name;
  }
}

const person = new Person(1, "jow", 22);

//example of access in the proprety protected, notice that property private not appear to method "tellAmI".
class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  //Property "age" is protected, hence it appear in children's classes of "Person".
  tellAmI() {
    this.age;
  }

  // Property "id" no appear 'cause it was declared as private.
  modifyId() {
    //this.id;
  }
}

//   type model
type IHumanType = {
  id: number;
  name: string;
  age: number;
  sayName(): void;
};

//  interface model
interface IHumanInterface {
  readonly id: number; //this property not can be modified.
  name: string;
  age: number;
}

// this class is implements to a interface model.
class Human implements IHumanType {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayName(): void {
    console.log(this.name);
  }
}

class HumanChild extends Human {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }
}

const humanChild = new HumanChild(1, "Josh", 27);

humanChild.sayName();

//shorthand the same thing that above
class HumanRefect {
  constructor(id: number, name: string, age: number) {}
}
