function Setusername(username){
    this.username = username
}

function createuser(username , email , password){
   Setusername.call(this , username)  // current context deta hai
    this.password = password 
    this.email = email
}

const chai = new createuser("chai" , "chai@fb.com" , "123")
console.log(chai); 



