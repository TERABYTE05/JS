const name = "Ishita";
const repoCount = 15;
console.log(name + repoCount + " repositories");

console.log(`Hello ${name}, you have ${repoCount} repositories.`);

const gameName = new String("hiteshhcoder");
console.log(gameName[0]); // h key value pairs
console.log(gameName.__proto__); // {}
console.log(gameName.length); // 11
console.log(gameName.toUpperCase()); // HITESHHCODER

console.log(gameName.charAt(5));
console.log(gameName.indexOf("h")); // 0

const newString = gameName.substring(0, 5);
console.log(newString); // hites

const anotherString = gameName.slice(-11, 4);
console.log(anotherString); // hi

const str1 = "   Hello World   ";
console.log(str1);
console.log(str1.trim()); // "Hello World"

const url = "https://hitesh.com/hitesh%20coder";
url.replace("%20", "-");
console.log(url);


console.log(url.includes("hitesh")); // true



const gameName2 = new String('ishita-coder-hc');
console.log(gameName2.split('-')); // [ 'ishita', 'coder', 'hc' ]