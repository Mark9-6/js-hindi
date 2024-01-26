// Primitve 
// 7 tpyes : String , Number , Boolean , Null , undefined , symbol , BigInt
 

const score = 100
const scorevalue  = 100.3

const isloggedin = false
const outsidetemp = null
let useremail;  //basically its value is automaticvally undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id==anotherid);

// const bignumber = 83467589347n     

// Reference (non primitve) 
// Arrays , Objects , Functions 

const heroes = ["ironman" , "captain" , "thor"]


let myobj = {      // this  stores the value of objects and objects itself

name : "swastik",
age : 21,

} 

const myfunction = function(){
    console.log("hello world")
}
myfunction()

console.log(typeof anotherid);
console.log(anotherid);

