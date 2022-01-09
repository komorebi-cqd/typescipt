
function sum(a: number, b: number): number {
    return a + b;
}





// const n = sum(1,3);

let nums: number[] = [1, 2, 3];
let nums2: Array<number | string> = [3, 4, 5, '2222'];

let s: [number, string, null]; //元祖类型 tuple
s = [1,'2',null]

function takeThrow(msg:string){
    throw new Error(msg);
}

function print():void{
    console.log('hello');
    console.log('world');
}

let b:boolean;

