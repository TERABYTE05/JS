const myArray = [10, 20, 30, 40, 50];

console.log(myArray[0]); // 10

// copy of arrays make shallow copy
const newArray = myArray;
newArray[0] = 100;
console.log(myArray); // [ 100, 20, 30, 40, 50 ]

myArray.push(60);
myArray.push("Ishita")
myArray.pop();
console.log(myArray); // [ 100, 20, 30, 40, 50, 60 ]

 myArray.unshift(5);
 myArray.shift();
    console.log(myArray); // [ 5, 100, 20, 30, 40, 50, 60 ]

console.log(myArray.includes(5)); // false

console.log(myArray.indexOf(30)); // 3

const hello = myArray.join();
console.log(hello); // 100,20,30,40,50,60
console.log(typeof hello); // string
console.log(myArray);
console.log(typeof myArray); // object


// slice and splice

 console.log("A",myArray);

 const myn1 = myArray.slice(1,3);
 console.log(myn1);

 console.log("B",myArray);

    const myn2 = myArray.splice(1,3);
    console.log("C",myArray);
    console.log(myn2);
