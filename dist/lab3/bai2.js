"use strict";
// 1.Function & void
Object.defineProperty(exports, "__esModule", { value: true });
let sum = (x = 5, y) => { return x + y; };
let speech = (output) => {
    console.log("Result:" + output);
};
speech(sum(5, 12));
speech(sum(8, 5));
// 2.Never & void
let something = undefined;
let nothing;
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
