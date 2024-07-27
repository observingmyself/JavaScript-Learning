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
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((e)=>{
//     return e>5
// })
// console.log(newNums)

// const newNums = []
// myNums.forEach((e)=>{
//     if(e>4){
//         newNums.push(e)
//     }
// })
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  // filtered books as per the genre of the books should be history
//   const filteredBooks = books.filter((data)=> data.genre === 'History')
//   console.log(filteredBooks)

// filtered the books as per the publish year of the books should be greater than 2000
// const filteredBooks = books.filter((data)=>{
//     return data.publish > 2000
// })
// console.log(filteredBooks)

// filtering the books as per the genre should be history and be published after 1995

const filteredBooks = books.filter((books)=>{
    return books.genre === 'History' && books.publish >= 1995
})

console.log(filteredBooks)
