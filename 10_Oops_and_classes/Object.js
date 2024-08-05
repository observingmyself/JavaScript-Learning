function multiplyby5(num){
    return num*5
}
// console.log(multiplyby5(5))
multiplyby5.power = 2;

// console.log(multiplyby5.power)
// console.log(multiplyby5.prototype)

function createUser(username,price){
    this.username = username
    this.price = price
}

const userOne =  new createUser('chai',25)
const usertwo = new createUser('tea',250)
console.log(userOne)
console.log(usertwo)

createUser.prototype.increment = function(){
   this.price++
   return `Now your chai price is ${this.price}`;
}
createUser.prototype.printMe = function(){
    console.log(`your score is ${this.price}`)
}
console.log(userOne.increment())

userOne.printMe()
userOne.increment()


// we can define methods using prototype we can make our own function using .prototype
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/