const User = {
    _email : 'pspsps@gmail.com',
    _password : '1234',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return (`${this._password}encoded`)
    },
    set passord(value){
        return this._password = value
    }

}
console.log(User.email)
console.log(User.password)
console.log(User._email) // we have created a layer over email and password but no one is stopping you to access thesse values to do this you can just use # infront of your key name to give him a unique or unaccessible appraoch
// Learn more about this on mdn pardeep : the end


// Summary :- We have used getter and setter for email and password property using object approach