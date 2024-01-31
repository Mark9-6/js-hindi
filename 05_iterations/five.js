const coding = ["js", "cpp", "java", "ruby", "python"]

// coding.forEach(function (val) {     //because this is a call back function for an array therfore it doesnt have name

// console.log(val);

// })

// coding.forEach( (val) => {

//     console.log(val);
// }   )

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item , index , arr) => {

//     console.log(item ,","  , index  ,",", arr);
// })

const mycoding = [

    
        {
languagename : "javascript" , 
languagefile : "java"
} ,
    
    {
    languagename : "python" , 
    languagefile : "py"}

]
mycoding.forEach((item) => {
    console.log(item.languagename);
    
})

