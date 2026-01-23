const languages = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  java: "Java",
  cpp: "C++",
};

// Using for in to iterate over object properties
// to get keys

for (const key in languages) {
  console.log(key);
}

// to get values

// for (const key in languages) {
//   console.log(languages[key]);
// }

// // to get key value pairs
// for (const key in languages) {
//   console.log(key + " : " + languages[key]);
// }

// For in loop when used with arrays give index values

// let myArray = ["A", "B", "C", "D", "E"];

// for (const index in myArray) {
//   console.log(index); // gives index values
// }

// for (const index in myArray) {
//   console.log(myArray[index]); // gives element values
// }

const map = new Map();
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");

for (const key in map) {
  console.log(key); // gives index values
}

for (const key in map) {
  console.log(map[key]); // gives undefined as map is not indexed collection
}

//No values are printed for map using for in loop as it is not  iterable using for in loop
