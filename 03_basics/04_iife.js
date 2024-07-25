// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
(function hello () {
    console.log(`DB CONNECTED`)
})();
// ()()    This is called IIFE 
((name)=> {
    console.log(`DB CONNECTED TWO ${name}`)
})('pardeep')

