const name = "swastik "
const repocount  = 800
console.log(name + repocount+ " value")
console.log(`Hello my name is ${name} and my repo count is ${repocount}`); /// very impotant
                                             ///////////////COMMON TYPING PRTACTICE ////////////
const gamename = new String(`hiteshhc-com`)
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(1));
console.log(gamename.indexOf('k'));


const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(-8 ,4)
console.log(anotherstring);

const newstringone = "   swatt   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://m.com/m%20william"


console.log(url.replace('%20' , '-'));
console.log(url.includes('swat'));

console.log(gamename.split( '-' ));

