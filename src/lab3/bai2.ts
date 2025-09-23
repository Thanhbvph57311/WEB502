// 1.Function & void

let sum = (x:number=5, y?:number) => { return x + <number>y; }
let speech = (output: any): void => {
    console.log("Result:" + output);
}
speech(sum(5,12));
speech(sum(8,5));

// 2.Never & void

let something: void = undefined;
let nothing: never ;
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// 3.Function & callback
function AddandHandle(x: number, y: number, cb: (num:number)=>void){
    const result = x + y;
    cb(result);
}
AddandHandle(10, 20, (result) => { console.log(result);
})