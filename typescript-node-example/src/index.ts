import { writeFile } from 'fs'
import { generate } from'shortid' // there will be times where there are no types for a module
import express from 'express'

const app = express()




interface Params { // typically we create interfaces for objects
  a: number,
  b: number
}

type Add = (x: Params) => number// we use types for everything else, like a type of a function

const newerAdd: Add = x => {
  return x.a + x.b
}

const newAdd = (x: Params): number => { // we can use them like this
  return x.a = x.b 
}



/**
 * this is for cases when you see undefined
 */
const add = (a: number, b?: number): number => {  // we can declare the types of our inputs and what it'll return as well
  /**
   * Alternativeleny you can do return a + b! for typscript to ignore the errors 
   * but its not a good practice at times
   *  */  
  if (b) { // this is a case where you can return with the types not returning the correctly
    return a + b
  } else {
    return a
  }
}



app.get('/', (req: any) => { // we can declare it up here as well
  /**
   * req.name = 'bob' 
   * you will get an error here because when you look at the type definition
   * but you can escape the error by casting it
   * */
   (req as any).name = 'bob'
   console.log(req.name)
   add(1)
   newAdd({a: 1, b: 2})
   newerAdd({a: 1, b: 2})
  
})

app.listen(3001, () => {
  console.log('started')
})