const LoggedIn = true;

if(2==="2"){
    console.log("Condition is true");
}

console.log("Outside if block");


const score = 85;
if(score>50){
    const power = "Fire";

    //var power = "Fire";
    console.log(`You have unlocked ${power} power!`);

}

//console.log(`You have unlocked ${power} power!`);
// The above line will throw ReferenceError because 'power' is declared with 'const' inside the if block, making it inaccessible outside that block. If 'power' were declared with 'var', it would be accessible outside the block due to function scope of 'var'.


const balance = 1000;
// if (balance > 500) console.log("test),console.log("test2); // SyntaxError: missing closing quote}

// if(balance > 500) {
//     console.log("You have sufficient balance.");
//     console.log("You can make a purchase.");
// } else if(balance <750) {

//     console.log("Insufficient balance. Please add funds.");
// }
// else if (balance < 900){
//     console.log("Your balance is getting low.");
// }
// else {
//     console.log("Your balance is excellent!");
// }



// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if(userLoggedIn && debitCard){
//     console.log("You can make a purchase.");
// }

// if( loggedInFromGoogle || loggedInFromEmail){
//     console.log("Welcome back, user!");
// }



// Switch

const day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}



// Some values are always truthy or falsy

// Falsy values: false, 0, "", null, undefined, NaN, BigInt(0),-0
// Truthy values: All values that are not falsy
// Some surprising truthy values: "0", "false", [], {}, function(){}, new Date() 

// const userEmail = "Ishita@.hello.com";
// if(userEmail){
//     console.log("You have entered an email");
// } else {
//     console.log("Please enter an email");
// }



// const userEmail = "";
// if(userEmail.length==0){
//     console.log("Please enter an email");
// }


// For objects 

const empty_Object = {};
if(Object.keys(empty_Object).length===0){
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}


//Nullish Coalescing Operator (??)
let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10 // We use this for safety purpose that is if in case  the program does not run beacause of null or undefined value it will assign a default value to it.

val1 = undefined ?? 10;
console.log(val1); // 10


//Ternary Operator

//condition ? expression_if_true : expression_if_false

const age = 18;
const canVote = (age>=18) ? "Yes, you can vote." : "No, you cannot vote yet.";
console.log(canVote); // Yes, you can vote.

