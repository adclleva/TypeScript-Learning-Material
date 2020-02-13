/* compiling and variables */
var bob = "hey i'm bob";
var bob2 = function () { };
console.log(bob);
var a = 5.321;
/* Objects */
// this is how to declare types within an object 
var obj = {
    x: 5,
    y: 7
};
var obj2 = {
    x: 123,
    y: 2
};
var obj3 = {
    x: 144,
    y: 2
};
obj.x = 2;
obj2.z = 123;
/* functions */
var add1 = function (x, y) { return x + y; }; // this will infer the return type
var add2 = function (x, y) { return x + y; }; // here we can declare the types
var add3 = function (x, y) { return x + y; }; // in this case we have a type AddFunc that has a x and y number and returns a number
// this part can be redundant
add3(123, 333);
// add3("123", obj2) will not work
var add4 = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}; // this is the object desctructured
var add5 = function (nums) { return nums.a + nums.b; }; // this is the object desctructured
/**
 * TS supports JS things such as using the spread operator etc.
 */
/* unions - sometimes things have more than two types */
var maybeNum = 5; // you can union types
maybeNum = "hello!";
maybeNum = add3;
var catDog = {
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
var doesAnything = function (x) {
    console.log(x);
};
doesAnything(function () { return 5; });
