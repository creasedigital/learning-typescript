"use strict";
// console.log('ID:', id)
// Basic Types
let id = 5;
let company = 'Ojore';
let isPublished = true;
let x = 'Hello';
//setting the value to any will make it reassignable
x = true;
// variables can be initialized with TS
let age;
age = 305;
// Arrays can have types value declared 
let ids = [1, 2, 3, 4];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'James', false];
// Tuple Array
let employee;
employee = [
    [19, 'Jones'],
    [25, 'Jon'],
    [38, 'Simeone'],
];
//Union -want a variable to hold more than a type
let pid;
pid = '56';
// Enum -named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 99] = "Up";
    Direction1[Direction1["Down"] = 100] = "Down";
    Direction1[Direction1["Left"] = 101] = "Left";
    Direction1[Direction1["Right"] = 102] = "Right";
})(Direction1 || (Direction1 = {}));
// Enum -named constants
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Left);
console.log(Direction2.Right);
// Objects
//-----------------
const user = {
    id: 56,
    name: 'Travolta'
};
const userDetails = {
    id: 56,
    name: 'Travolta'
};
const userInfo = {
    id: 96,
    name: 'Travis'
};
const add = (x, y) => x + y;
const minus = (x, y) => x - y;
// Type Assertion
let cid = 19;
// let customerId = <number>cid
// OR
let customerId = cid;
// Functions
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(9, 13));
function logMessage(message) {
    console.log(message);
}
logMessage('Hello TS!');
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const lorem = new Person(1, 'Lorem Ipsum');
const dolor = new Person(2, 'Dolor Sit');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'Lana', 'Developer');
// Generics -are used to build reusable component
// function getArray(items: any[]): any[]{
//   return new Array ().concat(items)
// }
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 18.9, 45]);
let strArray = getArray(['Alphabet', 'Echo', 'Letter']);
strArray.push('yeah');
