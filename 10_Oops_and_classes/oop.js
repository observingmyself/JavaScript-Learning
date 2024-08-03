const user = {
    name : 'Pardeep Singh',
    loginCount : 7 ,
    isLoggedIn : true,
    greetings : function (){
        console.log(`Welcome to Website ${this.name}`)
    }
}
// console.log(user.greetings())
// console.log(user.name)

// if we console.log this keyword in java engine environment so we get an empty object
// console.log(this)


let isLoggedIn = false
function greetings (hello){
    console.log(isLoggedIn == true ? "you are logged in " : "you are logged out")
    // using ternary operator to determine either user logged in or not
}
// greetings(isLoggedIn)


// function to get username , is logged in , logincount
function userDetails (username,isLoggedin,logincount){
    this.username = username
    this.isLoggedIn = isLoggedin
    this.loginCount = logincount
    this.greetings = function(){
        console.log(`Welcome to the page ${this.username} . You logged in ${logincount} times . and Now you are ${isLoggedin == true ? "You are logged in " : "you are logged out"}`)
    }
}

const userOne = new userDetails('Pardeep',true,6)
const userTwo = new userDetails('Gourav',true,8)

// console.log(userOne)
// console.log(userTwo)
// console.log(userTwo.greetings())

console.log(userTwo.constructor)


// IN SIMPLE WORDS CONSTRUCTOR GIVES US THE INSTANCE I MEAN THE COPY OF ANY THING SO THAT WE DONT RUIN THE ORIGINAL CONTEXT IT GIVES US THE COPIES 
// CONTEXT
