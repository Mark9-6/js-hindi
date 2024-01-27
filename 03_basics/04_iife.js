//Immediately Invoked Function

(function chai(){                 //this named IIFE
    console.log(`db connected`);
})() ;                   // totally invoked now 
 // semicolon is important to end iife code
// ()  first wala function  // () second wala function excution call
// IIFE use to remove the declaration in  global scope which might pollute function

( () => {            // this is unnamed iife
    console.log("db connected")
} )();

( (name) => {
    console.log("db connected ${name}")
} )()





