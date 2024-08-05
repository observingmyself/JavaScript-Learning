let myObj = {
    name : 'pardeep',
    greetings : function(){
        console.log(`Welcome to the web ${this.name}`)
    }
}
// console.log(myObj.greetings())

Object.prototype.prince = function(){
    console.log(`prince is present everywhere`)
}

let mystr = 'prince'
let myArr = [1,2,3,4]
let myOb1j = {
    name : "pardeep"
}
let num = 1
mystr.prince();
myArr.prince()
myOb1j.prince()

// WE CAN CRAETE OUR OWN METHOD TO DO ANYTHING IT IS REUSEABLE WE CAN MAKE IT IN STRING NUMBER EVERYDATATYPE
// BUT IF YOU MAKE IT ON OBJECT IT IS ACCESIBLE TO ALL THE DATA TYPES AVAILABEL IN JS
