const user = {
    username : "Swastik",
    price : 999,
    wlecomemessage : function(){
        console.log(`${this.username} , welcome to website`);  //refers to current context
console.log(this)

    }

}
// user.wlecomemessage()
// user.username = "mark"   
// user.wlecomemessage()
// console.log(this)       // refers to empty array but in a browser it refers to window object(global object)

// function chai(){
//     let username = "swastik"
//     console.log(this.username);
// }
// chai()

const chai = () => {                    //ban gya ARROW function
    let username = "swastik"
    console.log(this.username);
}
// chai()

// () => {}  // this is arrow function 

// const addtwo = (num1, num2)  =>  (num1+num2)  //implicit return

const addtwo = (num1, num2)  =>  ({username : "swastik"})


console.log(addtwo(4,3));


