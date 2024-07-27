const buttons = document.querySelectorAll(".button")
const body = document.body;

const arr = Array.from(buttons)
console.log(arr)
arr.map((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})
