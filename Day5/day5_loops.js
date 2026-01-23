// //For Loop

let myArray = [10,20,30,40,50,60,70,80,90,100];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// //While Loop

// let count = 0;
// let sum=0;
// while(count < myArray.length){
//     //console.log(myArray[count]);
//     sum += myArray[count];
//     count++;
    
// }
// console.log("Sum is: " + sum);


// //Do-While Loop

// let i = 100;
// do{
//     console.log(i);
//     i++;
// }while(i < myArray.length);


//Higher Order Functions with Loops

// for of 

for(const element of myArray){
    console.log(element);
}

const greeting = "Good Morning";
for(const char of greeting){
    console.log(char);
}


// Map

const map = new Map();
map.set(1,'One');
map.set(2,'Two');
map.set(3,'Three');
//map.set(3,'Three Updated'); values can be updated
//console.log(map);


//Using for of
for(const key of map){
    console.log(key);
}

// for destructuring 

for(const [key,values] of map){
    console.log(`Key is: ${key} and Value is: ${values}`);
}