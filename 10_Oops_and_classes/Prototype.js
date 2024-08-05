// let myName = "Pardeep     "
// let mychannel = "BloodyGamer     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Pardeep is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Pardeep says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance
// in js we inherit the properties of other objects using __proto__ in other object and pass the name of other object in it then it starts acesssing the properties of other object

const User = {
    name: "Pardeep",
    email: "Pardeep@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,  
    __proto__: TeachingSupport // WE CAN ACCESS THE PROPERTIES OF OTHER OBJECTS USING __proto__ property
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "I'M THE MAN     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Pardeep".trueLength()
"TeaTea".trueLength()



