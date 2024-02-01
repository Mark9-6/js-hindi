// Array.reduce() method Sum up karta jata hai element of arrays ko

const mynums = [1,2,3]
// const mytotal = mynums.reduce(function(acc , currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc+currval
// } , 0
// )
const mytotal = mynums.reduce( ( acc, currval) => (
    console.log(`acc : ${acc} and currval : ${currval}`),
    acc+currval
    
)  , 0  )

// console.log(mytotal);



const shopppingcart = [{
itemName : "js-course",
price  : 2999

},
{itemName : "python",
price  : 1999

},
{itemName : "mobile",
price  : 5999

},
{itemName : "data-science",
price  : 12999

}]

const total = shopppingcart.reduce( (acc , item) => (acc+item.price) , 0)

console.log(total);



