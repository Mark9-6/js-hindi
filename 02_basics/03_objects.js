//singleton  object ==>  only cnstructor makes a singleton 
 //object literals 
 
 //object litterls
//  const  jsuser = {}                // ye ban gya hamra object 

const mySym = Symbol("key1")

const  JsUser = { 

name : "Swastik" ,
"full name" : "Swastik Uttam" ,
[mySym]: "key1",      // square bracekt to use treat this  as symbol
age: "21" ,
location: "seattle",
email : "swat@gmial.com",
isloggedin : false ,
lastloggedin : ["monday " , " wednesday"]


}     
// console.log(JsUser.name);  // used to acess in an object not a good pracxtise
// console.log(jsuser.full name);   // chance hi nhi h acess karpaenge
// console.log(JsUser["name"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);
// console.log(JsUser["email"]);
// JsUser.email = "swastik@gmail.com" // to change the value of object 
// console.log(JsUser["email"]);
// Object.freeze(JsUser)              // freeze so that nobody can change its value 
// JsUser.email = "mark@gmail.com"
// console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log(`hello js user : ${this.name}`);
}

console.log(JsUser.greeting());

