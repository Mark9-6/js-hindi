///DATES 

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toString());
// console.log(mydate.getTimezoneOffset());
// console.log(typeof mydate);

// let mycreatedate  = new Date(2023 , 0 , 23 , 5,3)
// console.log(mycreatedate.toLocaleString());

let mycreateddate = new Date("01-14-2023")
// console.log(mycreratedate.toLocaleString());

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getHours());
console.log(newdate.getDay());
console.log(newdate.getMonth());

newdate.toLocaleString('default' , 
{

weekday : "long"

}
)






