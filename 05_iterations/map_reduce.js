// const myNums = ["one","two","three","four"]
// foreach loop have a disadvantage that he doesn't give back any value

// const results = myNums.forEach((item)=>{
//     // console.log(item)
//     return item
// })
// console.log(results)

// filter method filters the array and give situations that are true to the condition and store them in a new array 
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((e)=>(e>5))
// console.log(newNums)
// if you use curly brackets then u have to return some value using return keyword 
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((e)=>{
    return e>5
})
console.log(newNums)