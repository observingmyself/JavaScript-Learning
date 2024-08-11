// In JS we have two types of array 
// 1. Continious array 2. Holey array

const continousArr = [1,2,3,4,5] // example of continous array
const holeyArr = [1,2,3,,4,5] // example of holey array


// continous is also called packed array
// which is also called as the best optimized array for performance 
// holey is very bad for performance because if you are going to access the value of array that is holey and not defined then the javascript has a prototypical behaviour it checks the array again and again firstly it checks the value is in  bound means that it does not exceed the length of the array and secondly it checks the (hasOwnProperty(myArr,(give the value which you want to access))) js checks this and after that it checks prototype that you didn't defined the prototype that you want to access then by checking this all it becomes a risky or bulky investigation which affects the optimization 

// if your array has only integer values then it is called PACKED_SMI(SMALL INTEGER)
// if your array has double values also like point values then it is considered as PACKET_DOUBLE (CAUSE IT HAS DECIMAL VALUES)
// last if your array has string , methods , functions then it is called as PACKED_ELEMENTS(that means it has a mixture of all these in a array)

// packed and holey has again different types aheaad i will desplay as optimization perspective 

// packed = PACKED_SMI < PACKED_DOUBLE < PACKED_ELEMENT
// holey = HOLEY_SMI < HOLEY_DOUBLE < HOLEY_ELEMENT

// example of all the above : 
let packed_smi = [1,2,3,4]
let packed_double = [1,2,4,5,6.0]
let packed_elements = [1,2,3,4,5,6.0, "hello", function(){}, [1,2,3]] // yaha tak sb optimized hote hai

let holey_smi = [1,2,3,4,,5]
let holey_double = [1,2,3,4,5,6.0,,5]
let holey_elements = [1,3,4,5,,6,"hello",function helo(){console.log('hello')},[1,2,3,4,5],{name : "pardeep"}] // this holey_elements is the least case in the whole array optimization


console.log(holey_elements[9].name)
console.log(holey_elements[7]())


// One more thing if you once did any action that downgrades the array optimization means if you once defined a double decimal point number in a smi_elements array then it will be downgraded forever and theere is no chance that you can make it as before means there is no chance that you can make it again a smi_array and this works with all typeofarr that is defined above once it get downgraded then there is no come back. 



// the end of my javascript learning journey :) bye bye

