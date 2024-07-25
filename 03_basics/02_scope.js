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


function one(){
    const username = "Pardeep"

    function two(){
        const website = "Linkedin"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Pardeep"
    if (username === "Pardeep") {
        const website = " Link.in"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
addTwo(5)


