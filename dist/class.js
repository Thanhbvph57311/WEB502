"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        return "Hello";
    }
}
const p1 = new Person("Bùi Văn Thành", 22);
const result = p1.say();
console.log(result);
