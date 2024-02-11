class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const chai = new User("mark")
// console.log(chai.createId())

class Teacher extends User{
    constructor(username ,email){
       super(username)
       this.email = email
    }
}
const vha = new Teacher("iphone" , "v@h.com")
console.log(vha.createId())




