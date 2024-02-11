class user{
    constructor(email , password){
        this.email=email
        this.password=password    
    }
  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value.toUpperCase()
  }
    
    
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const swastik = new user("swastik@gmail.com" , "abc")
console.log(swastik.password);
console.log(swastik.email); 
  ////////////////////////////// underscore _email and _password are used to preventstack overflow condition

  



