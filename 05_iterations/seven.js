const mynumbers = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynumbers.map((num) =>  num+10)

// console.log(newnums);

const newnums = mynumbers.map((num)  => num*10).map((num) => num+1) // thisis CHAINING
//in chaining new updated umber is passed to new map 
console.log(newnums);













