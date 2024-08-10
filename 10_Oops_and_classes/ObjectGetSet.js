function User (email,password){
    this._email = email
    this._password = password
    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
    get : function(){
        return (`${this._password}prince`)
    },    
    set : function (value){
        this._password = value
    }
    })
}
const pardeep = new User('pspsps@gmail.com','1244')
console.log(pardeep.email)
console.log(pardeep.password)