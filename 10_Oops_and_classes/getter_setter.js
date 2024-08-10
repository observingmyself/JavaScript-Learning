class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
    get password(){
        return (`${this._password}prince`)
    }
    set password(value){
        this._password = value
    }
}
const pardeep = new User('pssss@gmail.com','1234')
console.log(pardeep.email)
console.log(pardeep.password)


// Summary :- We have used getter and setter for email and password property.
// In this syntax we are using class and contructor methods to this thing but in other file we will use simple object for getting and setting
