function reverseString(string){
    let reverse = ''; 
    for(let i=string.length-1; i>=0; i--){
        reverse += string[i]
    }
    console.log(reverse)
}
reverseString("yelo")
// reversing string without using any inbuilt function of javascript

// calculating the length of an array without using length function of javascript
let mything = ['h','a','r','r','y']
let count = 0
// for (const [value] of mything) {
//     count++
//     console.log(value)
// }
// console.log(count)
mything.forEach(e => {
    count++
    console.log(e)
});
console.log(count)
console.log(mything.length)