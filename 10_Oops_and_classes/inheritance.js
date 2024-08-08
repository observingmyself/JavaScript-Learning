// INHERITANCE IN JAVASCRIPT USING CLASS AND CONTRUCTOR FUNCTION
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Welcome User : ${this.username}`)
    }
}
class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    creation(){
        console.log(`A course has been created by ${this.username}`)
    }
}
    const NewOne = new Teacher("Maninder","manider@gmail.com","1234")
    const NewTwo = new User("Pardeep")

NewTwo.logMe()