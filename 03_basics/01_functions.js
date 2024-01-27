
function saymyname() {
    console.log("s");
    console.log("w");
    console.log("a");
    console.log("s");
    console.log("t");
    console.log("i");
    console.log("k");
}
//   saymyname()

function addtwonumbers(number1, number2) {

    //   const result =  (number1+ number2);
    //   return result                        //return k badd kuch bhi print nhi hota
    return number1 + number2
}
//   addtwonumbers("4","6") // simply adds it as a string

const result = addtwonumbers(4, 5)
// console.log("result:", result);



function loginusermessage(username="mark") {         //mark here is a base value if no username isn eneterd
    if (!username) {
        console.log("please enter a user name");
        return

    }
    return `${username} just logged in`
}

// console.log(loginusermessage())


///DOT DOT DOT is called spread and  rest operator    
function calculatecartprice(val1 , val2 , ...num1){
return num1

}
// console.log(calculatecartprice(200, 400, 500 , 2000));

const user = {
 username : "swastik", 
prices : 199
}
 
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
// handleobject(user)

// handleobject({
//   username : "mark",        //direct object bhi pass krskte as an argument
//   price : 100
// })

const mynewarray = [200, 400, 100 ,600]

function returnsecondvalueinarray(getarray){
    return getarray[1]

}
console.log(returnsecondvalueinarray(mynewarray));
console.log(returnsecondvalueinarray(mynewarray));
console.log(returnsecondvalueinarray([200,400,1000,500]));

           


    