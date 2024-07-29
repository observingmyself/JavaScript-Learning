// promise in variable
const promiseOne = new Promise(function(resolve,reject){
    let run = null
    if(run){
        console.log('promise fullfilled')
        resolve("i'm the prince") // value given in this resolve is assigned to the parameter in then block like 
        // i passed a string hitesh in then resolve it get printed
    }
    else{
        console.log('promise rejected')
    }
})

promiseOne.then((response)=>{
    console.log(response)
})

// promise without storing in variable
new Promise((resolve,reject)=>{
    let run = true
    if(run){
        console.log('promise fullfilled')
        resolve({name : 'pardeep' , password : '123'})
    }
    else{
        console.log('promise rejected')
        reject('something went wrong')
    }
}).then(function(user){
    if(user){
        console.log(user)
    }
}).catch(function(error){
    if(error){
        console.log(error)
    }
})

// using all three then , catch and finally block
let promise = new Promise(function(resolve,reject){
    let run =  true 
    if(run){
        console.log('promise fullfilled')
        resolve("I'm resolved")
    }
    else{
        console.log('promise rejected')
        reject("I'm rejected")
    }
})

promise.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})
.finally(function(thisruns){
    console.log("I'll Run Always")
})

// catching my error and response of promises using async function

let promiseFive = new Promise(function(resolve,reject){
    let run = false
    if(run){
        console.log("i'm fullfilled")
        resolve('true')
    }
    else{
        console.error("i'm rejected")
        reject('false')
    }
})

async function consumePromiseFive (response) {
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()


// in this function we are fetching url that is basically data of multiple users using fetch method and using await
async function fetchUsers () {
    try{
        let url = await fetch('https://jsonplaceholder.typicode.com/users')
        let data =  await url.json()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}

fetchUsers()


// fetching directly using fetch method with promises 
fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
        return response.json()
}).then(function(data){
    console.log(data)
})
.catch(function(error = "something went wrong"){
    console.error(error)
})