// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Love"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "me@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pardeep",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // spread function 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const company = {
    companyname: "Pardeep info inc.",
    worth : "999999",
    ceo : "Prince"
}

// course.courseInstructor

const {worth : NetWorth} = company

// console.log(worth);
console.log(NetWorth);

[
    {},
    {},
    {}
]