/* compiling and variables */
  const bob = "hey i'm bob";
  const bob2 = () => {}
  console.log(bob)

  const a: number = 5.321;

  /* Objects */

  // this is how to declare types within an object 
  const obj: {x: number, y: number} = { // ts can infer the types if types are not given
    x: 5,
    y: 7
  };

  /**
   * another way of setting an object
   */
interface MyObj {
  x: number, 
  y: number,
  // the ? can make the property optional
  z? : number // we have z be optional
  
}

  const obj2: MyObj = {
    x: 123,
    y: 2
  }

  if (obj2.z) {
    obj2.z + 45
  }

  const obj3: MyObj = {
    x: 144,
    y: 2
  }

  obj.x = 2

  obj2.z = 123

/* functions */

const add1 = (x: number, y: number) => x + y; // this will infer the return type

const add2: (x: number, y: number) => number = (x: number, y: number) => x + y; // here we can declare the types

type AddFunc = (x: number, y: number) => number // here we can declare a type and have it passed into the function below it
const add3: AddFunc = (x: number, y: number) => x + y; // in this case we have a type AddFunc that has a x and y number and returns a number
                      // this part can be redundant
add3(123,333)
// add3("123", obj2) will not work


const add4 = ({ a, b }: { a: number, b: number }) => a + b // this is the object desctructured

const add5 = (nums: { a: number, b: number }) => nums.a + nums.b // this is the object desctructured

/**
 * TS supports JS things such as using the spread operator etc.
 */


/* unions - sometimes things have more than two types */
let maybeNum: number | string | boolean | AddFunc = 5; // you can union types

maybeNum = "hello!";
maybeNum = add3

// unions are good for objects as well

interface Dog {
  bark: string
}

interface Cat {
  purr: string
}

type CatDog = Cat & Dog | number | string;

let catDog: CatDog = { // this is a catDog object with the type CatDog and must have the properties
  bark: "woof",
  purr: "meow"
}

catDog = 2 // you can also set it

/**
 * here is a case of using unions
 */

 if (typeof catDog === "string") {
   console.log('catDog is a string')
 } else if (typeof catDog === "number") {
  console.log('catDog this is a number')
 }
 console.log(catDog)

/* casting */

// if catDog was not a number
catDog = "cat"
add1(catDog as any, catDog as any) // this forces typscript to accept the parameters with any

// any

const doesAnything =(x: any) => {
  console.log(x)
}

doesAnything(() => 5)

/* for showing the ts config example */
export interface RandomType {
  x: number; 
  name: string;
}