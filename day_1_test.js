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