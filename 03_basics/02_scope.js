var a = 10 
let b = 20
const c = 30
if(true){
var a = 100
let b = 200
const c = 300
    console.log(a)
    console.log(b)
    console.log(c)
    function addTwoNumber (num1,num2){
        return num1 + num2
    }
    const result =     addTwoNumber(a,b)
    console.log(`sum of ${a} and ${b} is ${result}`)
}
console.log(a)
console.log(b)
console.log(c)