// class and contructor in javascript 

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new User("Pardeep","pardeep@gmail.com",123)

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

// using js prototype doing same thing as above class

function User(username,email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    console.log(`${this.password}abc`)
}
User.prototype.changeUsername = function(){
    console.log(`${this.username.toUpperCase()}`)
}

const newOne = new User("pardeep","pardeep@gmail.com",123)
newOne.encryptPassword()
newOne.changeUsername()
console.log(newOne)