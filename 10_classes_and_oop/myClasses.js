// //ES6

// class User {
//     constructor(username, email, password) {
//              this.username = username
//             this.email = email
//             this.password = password
//     }
//     encrytPassword() {
//         return `${this.password}abc`

//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const chai = new User("chai " , "chai@gmail.com" , "123")
// console.log(chai.encrytPassword())
// console.log(chai.changeusername())

///////////////////////////////////////////bheind scene 

function User(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encrytPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}
const chai = new User("chai " , "chai@gmail.com" , "123")
console.log(chai.encrytPassword())
console.log(chai.changeusername())
