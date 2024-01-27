// const tinderuser = new Object() this is a singleton object
const tinderuser = {} // this is non sngleton object 

tinderuser.id = "123abc"                // ID , Name , isoggedin are called KEYS 
tinderuser.name = "sam"
tinderuser.isloggedin = false
// console.log(tinderuser);
// console.log(tinderuser.id);
// console.log(tinderuser.name);
// console.log(tinderuser.isloggedin);

const regularuser = {

    email: "regular@gmial.com",
    fullname: {
        userfullname: {
            firstname: "mark",
            lastname: "william",
        }
    }     // nesting lagi hai access karne k liye dot k andar dot put cro aur print karo
}
// console.log(regularuser.fullname.userfullname.firstname);

/////////////////////////merging in objects 

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign( {} , obj1 , obj2)  // boject assign copies and merge two objects 
//   {} is a good practice it acts as a target IMP

const obj3 = { ...obj1, ...obj2 }  // spread karta haui best way                           
// console.log(obj3);

const users = [
    {

        id: "1",
        email: "m@gmial.com"
    }, {
        name: "mark"
    }
]
// console.log(users[1]);
// console.log(users[0].email);

// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isloggedin'));  // check karta hai uske pass ye property hai 
// console.log(tinderuser.hasOwnProperty('adress')); // false because property NA 


const course = {

    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"

}

const{courseinstructor : instructor} = course
// console.log(instructor);  // badiya se course.courseinstructor ni likhna parega

// const navbar = ({company}) => {

// }

// navbar(company = "mark")

// {

// "name" : "swastik",                        // API             //this is JSON simple object nameless
// "coursename" : "js in hindi ",
// "price" : "free"

// }

[
  {},
  {},
  {}



]



