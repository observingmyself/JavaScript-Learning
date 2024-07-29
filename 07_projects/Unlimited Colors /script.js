let generatedColor = function(){
    let code = '#'
    let hex = '1234567890ABCDEF'
    for(let i=0; i<6; i++){
        code += hex[Math.floor(Math.random()*16)]
    }
    return code 
}

function girgit(){
    
    document.body.style.backgroundColor = generatedColor()
}
let intervalId; 
document.querySelector('#start').addEventListener('click',function(){
    if(!intervalId){
        intervalId = setInterval(girgit,1000)
    }
     
})

document.querySelector('#stop').addEventListener('click',function(){
     clearInterval(intervalId)
     intervalId = null
})


// code to print value on stop and start button
// let intervalId;
// document.querySelector('#start').addEventListener('click',function(){
//   intervalId = setInterval(function(){
//     console.log('hitesh')
//     },100)
// })


// document.querySelector('#stop').addEventListener('click',function(){
//   clearInterval(intervalId)
// })








