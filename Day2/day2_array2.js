const marvel_heroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];

const dc_heroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];

//marvel_heroes.push(dc_heroes); 
const heroes=marvel_heroes.concat(dc_heroes);
console.log(heroes);
// This will add the entire dc_heroes array as a single element at the end of marvel_heroes


//spread operator
const all_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_heroes);
// This will merge both arrays into a single array

const array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10]]];

const flatten_array = array.flat(Infinity);
console.log(flatten_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Array.isArray(marvel_heroes)); // true
console.log(Array.isArray("Ishita")); // false

console.log(Array.from("Ishita")); // [ 'I', 's', 'h', 'i', 't', 'a' ]

console.log(Array.from({name: "Ishita"})); // [ undefined ]

let num1=100;
let num2=200;
console.log(Array.of(num1,num2)); // [ 100, 200 ]