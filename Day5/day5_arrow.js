const user = {
    username : "Ishita",
    website : "youtube.com",
    greet : function() {
        console.log(`Hello, ${this.username} ! Welcome to ${this.website}`);
    }
}

// user.greet();
// user.username = "John";
// user.greet();

console.log(this); // In global context, 'this' refers to the global object (window in browsers, global in Node.js)


function chai(){
    let username = "Ishita";
    console.log(this.username); // In a regular function, 'this' refers to the global object (window in browsers, global in Node.js)
}
chai(); // undefined


//this works only with objects , not with functions

const coffee = function(){
    let username  = "Ishita";
    console.log(this.username);
}

coffee(); // undefined


// Arrow function 

const latte = () =>{
    let username  = "Ishita";
    console.log(this.username);
}

latte(); // undefined


const addTwo = (num1,num2)=>{
    return num1 + num2;
}

console.log(addTwo(5,10)); // 15


// Implicit return

const multiplyTwo = (num1,num2) => num1 * num2;

console.log(multiplyTwo(5,10)); // 50


const add_Two = (num1,num2)=>({username: "Ishita"});

console.log(add_Two(5,10)); // undefined
// In the above example, the arrow function 'addTwo' is intended to return an object with a property 'username'. However, due to the use of curly braces without parentheses, JavaScript interprets it as a block of code rather than an object literal. As a result, the function does not return the intended object, leading to 'undefined' when trying to access the 'username' property. To fix this, we can wrap the object literal in parentheses: const addTwo = (num1,num2) => ({username: "Ishita"});
