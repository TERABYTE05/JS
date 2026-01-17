console.log("Test file for Day 1 loaded successfully.");

// Variables


// when variable is assigned with const keyword , it cannot be reassigned.
const accountID = "12234322";

let accountEmail = "teesha@example.com";

let account_state; // Implicit global variable declaration
// var has an issue of scope, it does not understand the concept of scope like let and hence it is better to avoid using var.
var accountPassword = "securePassword123";
account_city="New York";

//accountID="54321"; // This will cause an error because accountID is declared with const
accountEmail="hello.example.com"; // Reassignment is allowed for let
accountPassword="newPassword456"; // Reassignment is allowed for var
account_city="Los Angeles"; // Implicit global variable assignment
console.table([accountID, accountEmail, accountPassword, account_city,account_state]);



// Data Types and ECMA standards

 " use strict"; // Allows to use latest features of JS and avoid some pitfalls of older versions 


// alert(3+3); we are using nodejs to run this file so alert will not work here. 

//primitive data types : number ,string,boolean,null,undefined,symbol(bigint)

console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined);


//Datatype conversion confusion

let age = "23abc";

let Value = Number(age); // Converts string to number
console.log(typeof Value); // number
console.log(Value); // NaN (Not a Number because "23abc" cannot be converted to a valid number)

let score = null;

let scoreValue = Number(score); // Converts null to number
console.log(typeof scoreValue); // number
console.log(scoreValue); // 0 (null is converted to 0)

// In case of number to boolean conversion , 0 is converted to false and any non zero number is converted to true.

// " "==> false , "hello"==> true


// Why string to number is confusing?

let str1 = "Hello";
let str2 = "World";
let str3 = str1+str2;
console.log(str3); // HelloWorld (string concatenation)

console.log(1+"2"); // "12" (number 1 is converted to string and concatenated)
console.log("1"+2); // "12" (number 2 is converted to string and concatenated)
console.log("1"+2+3); // "123" (2 is converted to string and concatenated with "1", then 3 is also converted to string and concatenated)
console.log(1+2+"3"); // "33" (1 and 2 are added to get 3, then 3 is converted to string and concatenated)

console.log(true);
console.log(+true); // 1 (boolean true is converted to number 1)
//console.log(true+);// will give error



// Comparison of datatypes

console.log(1=="1"); 

console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true

// the reason is that an equality check(==) and comparisons > < >= <= work differently in JS.
// Comparisons convert null to number 0 for comparison, but equality check does not convert null to any value and considers it as a unique value. Hence null==0 is false but null>=0 is true.

console.log(undefined==0); // false
console.log(undefined>0); // false
console.log(undefined<0); // false

// Similar to null, undefined is also treated as a unique value in equality checks and does not convert to any number for comparisons. Hence all comparisons with undefined return false except undefined==undefined which is true.


// Strict equality operator(===) vs Abstract equality operator(==)

console.log(1==="1"); // false , because === checks for both value and datatype


//Summary of Datatypes

//objects

let myObject = {
    name: "Ishita",
    age: 25,
    isStudent: true
};

//Functions
 const myFunction = function(){
    console.log("Hello from myFunction!");
 }

    myFunction();