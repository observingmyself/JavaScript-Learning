console.log(Math.PI)
Math.PI = 5
console.log(Math.PI)
console.log(Object.getOwnPropertyDescriptor(Math,"PI")) // Math.PI is not writable iterable and enumerable because of default hard coded properites of PI   

const user = {
    name : 'pardeep',
    age : 25,
    sayHello: function(){
        console.log(`hello, my name is ${this.name}`);
    }
}
console.log(Object.getOwnPropertyDescriptor(user,"name"))   // we can check the properties of any element that it is iterable , enumerable and writable 

Object.defineProperty(user,"name",{   // we can also set the properties like writable enumerable and iterable using define property
    writable : true,
    enumerable : true,
})

// here we are printing entries that are not function and not printing key value that are function because of privacy concerns

for (const [key,value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key} is not a function`)
        console.log(`${key} : ${value}`)
    }
    else{
        console.log(`${key} is a function`)
    }
}

