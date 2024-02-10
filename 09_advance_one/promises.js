/////////////////////////////////////////////////////////////////////////////////1
//  const promiseOne =  new Promise(function(resolve , reject) {
// //To do an async task 
// // DB calls  , network calls
// setTimeout(function(){
// console.log('async task is completed')
// resolve()
// } , 1000)

//  })
// promiseOne.then(function(){
// console.log("promise consumed");
// })

/////////////////////////////////////////////////////////////////////////////////2
// new Promise(function(resolve , reject ){
//    setTimeout(function(){
//     console.log("Async task 2");
//     resolve()
//    } , 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })
/////////////////////////////////////////////////////////////////////////////////3
// const promisethree = new Promise(function(resolve, reject){
//  setTimeout( function(){
//     resolve({username: "Chai" , email: "chai@example.com" })
//  }, 1000)

// })

// promisethree.then(function(user){
// console.log(user)
// })
/////////////////////////////////////////////////////////////////////////////////4
// const promiseFour = new Promise(function(resolve, reject){
// setTimeout( function(){
//     let err = true
//     if(!err){
//         resolve({username : "MArk" , password: "1234"})
//     }
//     else{
//         reject('ERROR:something went wrong')
//     }
// }, 1000)
// })
// promiseFour
// .then((user) => {
// console.log(user);
// return user.username;})
// .then((username)=>{
// console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("the promise is either resolved or rejected")
// })

/////////////////////////////////////////////////////////////////////////////////5
 
const promiseFive = new Promise(function(resolve , reject){
    setTimeout( function(){
    let err = true
    if(!err){
        resolve({username : "Javascript" , password: "123"})
    }
    else{
        reject('ERROR:JS went wrong')
    }
}, 1000)
})


async function consumePromiseFive(){
try {
    const response =  await promiseFive 
console.log(response)
} catch (error) {
    console.log(error);
}
}
consumePromiseFive()
 ///////////////////////////////
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers() 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

})
.then((data)=>
console.log(data))
.catch((error)=>
    console.log(error)
)

