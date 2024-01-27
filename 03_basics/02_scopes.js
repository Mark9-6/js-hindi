// var c =300
let a = 100

if(true){

    let a =10

    const  b = 20             // inside if is called BLOCK scope 
                              // outside if is called GLOBAL SCOPE      
    var c = 30                 ///////only v gets prnted this is SCOPING
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "swastik"

function two(){
const website = "youtube"
console.log(username)

}
// console.log(website);
two()
}
// one()
 
if(true){
const username = "swastik"
if(username=="swastik"){

    // const website = "youtube"
    // console.log(username+website);
}
// console.log(website);

}
// console.log(username);


function addone(num){
return num+1

}
addone(5)
 const addtwo = function(num){
    return num+2
 }
 addtwo(5)



 

