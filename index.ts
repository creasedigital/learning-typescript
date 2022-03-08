
// console.log('ID:', id)
// Basic Types
let id:number = 5
let company:string = 'Ojore'
let isPublished: boolean = true
let x:any = 'Hello'
//setting the value to any will make it reassignable
x = true

// variables can be initialized with TS
let age: number

age=305

// Arrays can have types value declared 
let ids: number[] = [1,2,3,4]
let arr:any[] = [1, true, 'hello']

// Tuple
let person: [number, string, boolean] = [1, 'James', false]
// Tuple Array
let employee: [number, string][]

employee = [
  [19, 'Jones'],
  [25, 'Jon'],
  [38, 'Simeone'],
]

//Union -want a variable to hold more than a type
let pid: string | number
pid='56'

// Enum -named constants
enum Direction1 {
  Up=99,
  Down,
  Left,
  Right
}
// Enum -named constants
enum Direction2 {
  Up= 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction1.Left)
console.log(Direction2.Right)

// Objects
//-----------------
const user: {
  id: number,
  name: string
} = {
  id: 56,
  name: 'Travolta'
}
//-----------------
// OR to ensure a cleaner code use type syntax
//-----------------
type UserDetails = {
  id: number,
  name: string
}

const userDetails: UserDetails = {
  id: 56,
  name: 'Travolta'
}
//-----------------
// Interfaces - are used with Objects an are very similar to type
//-----------------

// object values set to read-only via type or interface cannot be reassigned
interface UserInfoInterface {
  id: number
  name: string
  age?: number //would make age optional
}

const userInfo: UserInfoInterface = {
  id: 96,
  name: 'Travis'
}

// Interfaces - can be used with functions
interface MathFunc {
  (x: number, y: number): number
}

const add : MathFunc = (x: number, y: number): number => x + y
const minus : MathFunc = (x: number, y: number): number => x - y


// Type Assertion
let cid: any = 19
// let customerId = <number>cid
// OR
let customerId = cid as number

// Functions
function addNumber (x:number, y:number): number {
  return x + y
}

console.log(addNumber(9,13))

function logMessage (message :string | number):void {
  console.log(message)
}

logMessage('Hello TS!')
