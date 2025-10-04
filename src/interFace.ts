interface IPerson {
  name: string;
  age: number;
}

interface IUser {
  role: string;
}

// IPerson + IUser: &
type IEmployee = IPerson & IUser;
const e1: IEmployee = {
  name: "Bùi Văn Thành",
  age: 22,
  role: "user",
};

// c2: extends
interface IEmployee2 extends IPerson, IUser {}

const e2: IEmployee2 = {
  name: "Bùi Văn Thành",
  age: 22,
  role: "user",
};

console.log({ e1, e2 });

function processData(data: string | number) {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else {
    console.log(data.toFixed(2));
  }
}

processData("Hello");
processData(123);

interface Circle {
  kind: "circle";
  radius: number;
}

interface Spuare {
  kind: "spuare";
  side: number;
}

type Shape = Circle | Spuare;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "spuare":
      return shape.side ** 2;
    default:
      throw new Error("Invalid shape");
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Spuare = { kind: "spuare", side: 4 };

console.log(calculateArea(circle));
console.log(calculateArea(square));

// Generics Typescript

function printArray<T>(array: T[]): T[] {
  console.log(array);
  return array;
}
const numberArray: number[] = [1, 2, 3];
printArray(numberArray); // [1, 2, 3]

interface IProduct {
  title: string;
}
interface ICategory {
  name: string;
}

interface ApiResponse<T> {
  message: string;
  code: number;
  success: boolean;
  data: T;
}

const productRes: ApiResponse<IProduct> = {
  message: "Ok",
  code: 200,
  success: true,
  data: {
    title: "San pham 1",
  },
};
