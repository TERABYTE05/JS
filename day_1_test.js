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