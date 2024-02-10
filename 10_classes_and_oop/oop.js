// const user = {
//     username : "Mark" ,
//     loginCount : 8,
// signedIn : true ,
// getUserDetails: function(){
//     // console.log("got details")
//     // console.log(`username : ${this.username}`)
//     console.log(this)
// }
// }
// // this keyword is used to get which function context we are taking that is current context
// console.log(user.username)
// // console.log(user.getUserDetails())
// console.log(this)

function user(username , loginCount , isLoggedIn){
    this.username = username;
    this.logincount = loginCount;
    this.isloggedin = isLoggedIn;
    // return this
    
}
const userONE = new user("mark" , 12 , true)
const userTwo =  new user("swat" , 19 , false)
console.log(userONE)
// console.log(userTwo)

// NEW keyword helps to create a duplicate object so that the original one does affects
// NEW creates a new object
// NEW is  a constructor function

 









