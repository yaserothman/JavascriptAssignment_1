//1
console.log("مرحبا بالعالم //Arabic");
console.log("Selam Dünya // turkish");
console.log("Halló heimur // icelandic");
//2
console.log('I\'m awesome');
//3.1
let x;
//3.2
console.log("I think x is undefined");
//3.3
console.log(typeof x);
//3.4
x = 5;
//3.5
console.log("I think X now is number");
//3.6
console.log(typeof x);
//4
let y = "hello world";
//4.1
console.log("I think the Y is string becuase any thing in side quotation it will string accept numbers");
//4.2
console.log(typeof y);
//4.3 
let y = "hi guys";
//4.4
console.log("I think the new value of y is string");
//4.5
console.log(typeof y);
//5.1
let z = 7.25;
//5.2
console.log(typeof z);
//5.3
let a = Math.round(z);
//5.4
console.log(typeof a);
let d;
//5.5
if (a > z) {
    d = a;
} else {
    d = z;
}
// other step
console.log(d);
//5.6
console.log("q 5.6", d == Math.max(a, z));
//6.1
let pens = [];
//6.2
console.log("The value of this array is nothing");
//6.3
console.log(typeof pens);
//6.4
let animals = ["cat", "horse", "dragon"];
//6.5
console.log(animals);
//6.6
animals.push("baby pig");
//6.7
console.log(animals);
//7.1
let myString = "this is a test"
//7.2
console.log(myString);
//7.3
myString.length;
//7.4
console.log(myString.length);
//8.1
let car = {};
let house = 20;
let door = "hello";
let yaser = true;
//8.2
console.log(car);
console.log(house);
console.log(door);
console.log(yaser);
//8.3 
console.log("I think frist value is number ");
//8.4
console.log(typeof car, typeof house, typeof door, typeof yaser);

//8.5
if (car !== house) {
    console.log("DIFFERENT TYPE or diff value");
} else {
    console.log("SAME TYPE and same value");
}

if (door !== yaser) {
    console.log("DIFFERENT TYPE");
} else {
    console.log("SAME TYPE");
}

if (yaser !== car) {
    console.log("DIFFERENT TYPE");
} else {
    console.log("SAME TYPE");
}

if (house !== door) {
    console.log("DIFFERENT TYPE");
} else {
    console.log("SAME TYPE");
}

//9
x = 7;
x = x % 3;
console.log(x);
//9.1
console.log("In computing, the modulo operation finds the remainder after division of one number by another (sometimes called modulus)");
console.log("5 % 2 would evaluate to 1 because 5 divided by 2 leaves a quotient of 2 and a remainder of 1");
console.log("9 % 3 would evaluate to 0 because the division of 9 by 3 has a quotient of 3 and leaves a remainder of 0");

//10
console.log("yes I can store multiple types of array");

//10.1
let max = [];
max[0] = {};
max[1] = 27;
max[2] = true
max[3] = "ginx"
//10.2
if (+Infinity !== -Infinity) {
    console.log("true");
} else {
    console.log("false");
}
6 / 0 === 10 / 0;

let first = 6 / 0;
let second = 10 / 0;

if (first === second) {
    console.log(true);
} else {
    console.log(false);
}
// 10.3

console.log("The triple equals sign (===) is used to compare both the Type and the actual Value of a variable");
