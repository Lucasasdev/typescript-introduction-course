"use strict";
class Person {
    constructor(id, name, age) {
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
    constructor(id, name, age) {
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
// this class is implements to a interface model.
class Human {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(this.name);
    }
}
class HumanChild extends Human {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
const humanChild = new HumanChild(1, "Josh", 27);
humanChild.sayName();
//shorthand the same thing that above
class HumanRefect {
    constructor(id, name, age) { }
}
