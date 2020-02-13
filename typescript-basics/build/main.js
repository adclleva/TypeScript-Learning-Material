"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* compiling and variables */
const bob = "hey i'm bob";
const bob2 = () => { };
console.log(bob);
const a = 5.321;
/* Objects */
// this is how to declare types within an object 
const obj = {
    x: 5,
    y: 7
};
const obj2 = {
    x: 123,
    y: 2
};
const obj3 = {
    x: 144,
    y: 2
};
obj.x = 2;
obj2.z = 123;
/* functions */
const add1 = (x, y) => x + y; // this will infer the return type
const add2 = (x, y) => x + y; // here we can declare the types
const add3 = (x, y) => x + y; // in this case we have a type AddFunc that has a x and y number and returns a number
// this part can be redundant
add3(123, 333);
// add3("123", obj2) will not work
const add4 = ({ a, b }) => a + b; // this is the object desctructured
const add5 = (nums) => nums.a + nums.b; // this is the object desctructured
/**
 * TS supports JS things such as using the spread operator etc.
 */
/* unions - sometimes things have more than two types */
let maybeNum = 5; // you can union types
maybeNum = "hello!";
maybeNum = add3;
let catDog = {
    bark: "woof",
    purr: "meow"
};
catDog = 2; // you can also set it
/**
 * here is a case of using unions
 */
if (typeof catDog === "string") {
    console.log('catDog is a string');
}
else if (typeof catDog === "number") {
    console.log('catDog this is a number');
}
console.log(catDog);
/* casting */
// if catDog was not a number
catDog = "cat";
add1(catDog, catDog); // this forces typscript to accept the parameters with any
// any
const doesAnything = (x) => {
    console.log(x);
};
doesAnything(() => 5);
