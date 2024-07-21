// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3

// const number = 12
// const string1 = "harry"
// const id = null
// let weather
// const isLoggedinn = true
// const id2 = Symbol('123')
// const bigInteger = 1234567890123456789n

// const myArray = ["me",'mybrother','mysister']
// const myObject = {
//     name : "hello",
//     age : 21
// }
// const myFunction = function (){}

// console.log(typeof number)
// console.log(typeof string1)
// console.log(typeof id)
// console.log(typeof weather)
// console.log(typeof isLoggedIn)
// console.log(typeof id2)
// console.log(typeof bigInteger)
// console.log(typeof myArray)
// console.log(typeof myObject)
// console.log(typeof myFunction)

// stack and heap 
// stack (primitive data types) heap(non primitive data types)
// let myChannel = "bloodygamer"
// let otherChannel = myChannel
// otherChannel = "gurdeep singh"
// console.log(myChannel,otherChannel)

let data = {
    email : "user@gmail.com",
    isLoggedIn : "true"
}
let newData = data
// console.log(newData)
newData.email = "pardeep@gmail.com"
console.log(newData)
console.log(data)

// Summary :- If we assign any value like i did in otherChannel we give copy of our data to another variable so with this the original cannot be changed
// but in non primitive case ( heap case) it is not same because it will give us the original reference to the data that is stored so if we change
// data using the newvariable we do changes in the original data 
