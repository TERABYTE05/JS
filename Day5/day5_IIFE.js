// Immediately Invoked Function Expression (IIFE) 
// Named Function IIFE
(function chai(){
    console.log("Today we are learning about IIFE");
})(); // IIFE is invoked immediately after its definition

// Inside first paranthesis, we define a function named 'chai' that logs a message to the console. The function is immediately invoked by adding '()' at the end of the function definition. This results in the message being logged to the console right away. IIFEs are often used to create a new scope and avoid polluting the global namespace.

// Here we have to add semicolon at the end  as in IIFE ,it does not know where the function ends and where the next line starts. So to avoid any confusion we add semicolon at the end of IIFE.


((name)=>{
    console.log(`${name} is learning IIFE`);
})("Ishita"); // Arrow function IIFE