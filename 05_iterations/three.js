// higher order of ArrayLoops 

const arr = [1, 2, 3, 4, 5]

//  for (const num  of arr) {
//     console.log(num );
//     }

// const greetings = "Helloworld!"
// for(const greet of greetings ){
//     console.log(`each char is ${greet}`);
// }

//MAP

const map = new Map()
map.set('IN', "INDIA")
map.set('FR', "FRANCE")
map.set('UK', "UNITED KINGDOM")

console.log(map);
// they carry unique values and in same order 
for (const [key, value] of map) {                                // key is iteratorlike and index and map is like array
    console.log(key, value);

}


const myObject = {

    'game1 ': 'NFS',
    'game2 ': 'GTA5',
    'game3 ': 'spiderman'


}

for(const [key , value ] of myObject ){

    console.log(key , value);
    

}



