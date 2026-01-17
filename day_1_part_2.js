// Stack and Heap Memory Usage Example in JavaScript

// Primitive data types are stored in stack memory
// Non-primitive data types (objects, arrays, functions) are stored in heap memory

//When we store something in stack memory , we get a copy of that value.

//When we store something in heap memory , we get a reference to that value.

let myYoutubeChannel = "Codevolution"; // stored in stack memory
let anotherChannel = myYoutubeChannel; // anotherChannel gets a copy of the value from myYoutubeChannel

console.log(myYoutubeChannel); // Codevolution
console.log(anotherChannel); // Codevolution

anotherChannel = "TechWorld with Nana"; // changing anotherChannel does not affect myYoutubeChannel

console.log(myYoutubeChannel); // Codevolution
console.log(anotherChannel); // TechWorld with Nana


//Example of heap memory

let userOne = {
    name: "Alice",
    age: 25
}; // userOne is a reference to an object stored in heap memory

let userTwo = userOne; // userTwo gets a reference to the same object in heap memory

console.log(userOne); // { name: 'Alice', age: 25 }
console.log(userTwo); // { name: 'Alice', age: 25 }

userTwo.age = 30; // changing age through userTwo affects the object in heap memory

console.log(userOne); // { name: 'Alice', age: 30 }
console.log(userTwo); // { name: 'Alice', age: 30 }