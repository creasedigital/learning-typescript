
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