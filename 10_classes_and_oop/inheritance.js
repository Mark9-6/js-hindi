class User {
    constructor(username) {
        this.username = username

    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)    
        this.email = email
        this.password = password

    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai" , "chai@email.com" , "123")

// chai.addCourse()
chai.logMe()

const masalachai = new User("masalachai")
masalachai.logMe() 

console.log(masalachai instanceof User)








