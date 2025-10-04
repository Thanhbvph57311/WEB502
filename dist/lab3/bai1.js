"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dùng function
function sum1To10() {
    let total = 0;
    for (let i = 1; i <= 10; i++) {
        total += i;
    }
    return total;
}
// Dùng arrow function
const sum1To10Arrow = () => {
    let total = 0;
    for (let i = 1; i <= 10; i++) {
        total += i;
    }
    return total;
};
console.log(sum1To10());
console.log(sum1To10Arrow());
// Arrow function tính tổng 2 số với default value
const sumTwo = (a = 5, b = 10) => a + b;
console.log(sumTwo());
console.log(sumTwo(7));
console.log(sumTwo(7, 3));
// Optional parameter (tham số b có thể có hoặc không)
const sumOptional = (a, b) => {
    return a + (b ?? 0);
};
console.log(sumOptional(7));
console.log(sumOptional(7, 5));
// Rest parameter (nhiều tham số)
const sumRest = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumRest(1, 2, 3, 4, 5));
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]
// Có thể thêm phần tử tùy ý
const mergedWithExtra = [0, ...arr1, 99, ...arr2];
console.log(mergedWithExtra);
