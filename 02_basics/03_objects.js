// singleton
// objects.create
let myObj = Object.create({
    name : "pardeep",
    age : 16, 
    role : 1,
    isLoggedIn : false
})
// console.log(myObj.name)

// objects.literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Pardeep",
    "full name": "Pardeep Singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Patiala",
    email: "admin@admin.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Pardeep@chatgpt.com"
// Object.freeze(JsUser) // used to freeze our object so that noone can do further changes in the object
JsUser.email = "Pardeep@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());