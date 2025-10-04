class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public say(): string {
    return "Hello";
  }

  public getAge(): number {
    return this.age;
  }
}

const p1 = new Person("Bùi Văn Thành", 22);
const result = p1.say();
console.log(result);
console.log(p1);
console.log("Age:", p1.getAge());

class User extends Person {
  public role: string;

  constructor(name: string, age: number, role: string) {
    super(name, age);
    this.role = role;
  }
  public say(): string {
    return `Hello, I am ${this.name} and my role is ${this.role}`;
  }
}

// Tạo instance User với đủ 3 tham số
const u1 = new User("Bùi Văn Thành", 22, "admin");
console.log(u1.say());
console.log(u1);
console.log("Age:", u1.getAge());
