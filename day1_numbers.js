const score = 5;
console.log(score);

const scoreValue = new Number(5);
console.log(scoreValue);

console.log(scoreValue.toString());

console.log(typeof scoreValue);


const num1 = 53.7804;
console.log(num1.toPrecision(3)); // 53.8


const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000


//Maths function

console.log(Math.PI); // 3.141592653589793

console.log(Math.round(4.6));
console.log(Math.abs(-5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));


//math random

console.log(Math.random()); // random number between 0 and 1

console.log(Math.floor(Math.random()*10)+1); // random number between 1 and 10, +1  is added to avoid the condition of 0.041... which will give 0 after flooring.


//to get random number between min and max

const min = 5;
const max = 12;

console.log((Math.floor(Math.random()*(max-min+1)))+min);
