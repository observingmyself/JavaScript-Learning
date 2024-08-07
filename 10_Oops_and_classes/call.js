function usernameCreation(username){
    this.username = username;
}

// if we call this call then the fucntion called below use this and call to create a context that usernamecreation function will use 
function createUser (username , email , password){
    usernameCreation.call(this,username)
    this.email = email 
    this.password = password
}

const userOne = new createUser("pardeep","pardeep@gmail.com",1234)
console.log(userOne)