let a = 32 // is a number
let b = '32' // that's a string
// console.log(typeof b)
 // to convert this we use Number method 
//  let conversion = Number(b)
//  console.log(typeof conversion)

 // but if a string including alphabets is conversed to number
 // it will return not a number NaN 
 let c = "33abc"
//  console.log(Number(typeof c))

 // "33" = 33
 // "33abc" = NaN whose type is also a number but it is not a Number
 // if we pass bool value true = 1; false = 0 ; 

 isLoggedIn = 1; 
 BoolLoggedIn = Boolean(isLoggedIn)
//  console.log(typeof isLoggedIn,typeof BoolLoggedIn)
//  console.log(isLoggedIn,BoolLoggedIn)

 // 1 = true
 // 0 = false
 // "" = false
 // "value" = true 

 let number = 33 
 let StringConversion = String(number)
 console.log(typeof number, typeof StringConversion)
