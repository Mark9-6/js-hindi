// let myName = "Mark    "

// console.log(myName.trueLength)

let myHeroes = ["thor " , "spiderman"]

let heropower = {
    thor : "hammer" ,
    spiderman: "sling" ,
    getSpiderPower : function(){
        console.log(`Spidey power is  : ${this.spiderman}`);
    }
}

// Object.prototype.mark = function(){
//     console.log(`mark in all objects`);
// }
// Array.prototype.swastik = function(){
//     console.log(`swastik helo`)
// }
// myHeroes.swastik()
// heropower.swastik()
// // heropower.mark()
// myHeroes.mark()

const teacher = {
    makevideo : true
}
const user = {
user : 'chai',
mail : 'chai@google.com'
}
const teachingsupport ={
    isavailable : false
}
const TAsupport = {
    makeassignment : 'JS assignment',
    fulltime : true ,
    __proto__ : teachingsupport
}
 teacher.__proto__ = user

 // modern method 
//  Object.setPrototypeOf(teachingsupport , teacher)




let anotheruser = "chai aur code"
String.prototype.trueLength = function(){
console.log(`${this}`)
console.log(`${this.name}`)
console.log(`true length is ${this.trim().length}`)
}
anotheruser.trueLength()
"swastik".trueLength()
"icetea".trueLength()










