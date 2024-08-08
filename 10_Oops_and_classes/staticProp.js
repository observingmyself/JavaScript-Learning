class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
   static createId(){
        return "123"
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email =   email
        this.password = password
    }
    consoleFunction(){
        console.log(`A teacher just created a course with ${this.username}`)
    }
}

const newOne = new Teacher("Pardeep","Pardeep@gmail.com","1234")
console.log(`This is a id for our new Teacher named ${newOne.username} and id is ${newOne.createId()}`)

// if u add static in the starting of any function then it will not be accessible to any of the other function and the function himself