function outer (){
    let name = "Pardeep"
    function inner(){
        let name2 = "Deep Singh"
        console.log(name)
    }
    // console.log(name2) 
    // Parent function cannot borrow properties of the child function means if ur in a global scope then u can't access the properties of a function but the child function can access the properties of the outer function or its parent's
    return inner
}
outer()


// Summary :-) this is called lexical scope in which the child function can access the properties of a parent function but the parent function can't access the properties of a child function

function parent(){
    let name = "Pardeep"
    function child(){
        console.log(name)
    }
    return child;
}

let closure = parent()
closure();

// the above code will give "Pardeep" because it's a closure and it has access to the parent function's scope
// in this we have give a variable name the whole function and executing it and in the line number 25 of the function we have executed the function so in which case we return the function like child function and access it using a memory space is called closure ; 