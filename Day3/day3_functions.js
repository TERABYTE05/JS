// Functions

function sayMyName(){
    console.log("I");
    console.log("am");
    console.log("Ishita");
}
sayMyName();

function add_two_numbers(num1, num2){
    return num1 + num2;
}

const result = add_two_numbers(5, 10);
console.log(result); // 15

const string = add_two_numbers( 3 , "World!");
console.log(string); // 3World!

function loginUserMessage(username){
    if(username==undefined){
        console.log("Please provide a username");
        return;
    }
    return `Welcome back, ${username}!`;
}

console.log(loginUserMessage()); // Welcome back, Ishita!