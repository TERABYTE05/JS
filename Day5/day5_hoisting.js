//Nested Functions

function one(){
    const username = "Ishita";
    function two(){
        const website = "youtube.com";
        console.log(username);
        
    }
    //console.log(website);
    two();
}

one(); // ReferenceError: website is not defined
//In the above example, the function 'two' is nested inside the function 'one'. The inner function 'two' can access the variable 'username' declared in the outer function 'one'. However, the outer function 'one' cannot access the variable 'website' declared in the inner function 'two', resulting in a ReferenceError when trying to log 'website' outside of its scope.



if(true){
    const username = "Ishita";
    if(username=="Ishita"){
        const website = "youtube.com";
        console.log(username+" "+website);
}
console.log(website); // ReferenceError: website is not defined
}
console.log(username); // ReferenceError: username is not defined
//In this example, the variable 'website' is declared inside the inner if block and is not accessible outside of it, leading to a ReferenceError when trying to log 'website' outside its scope. Similarly, 'username' is declared in the outer if block and is not accessible outside of it, resulting in another ReferenceError when trying to log 'username' outside its scope.



function addone(num){
    return num+1;
}

const result = addone(5); // 6
console.log(result);

addTwo(10); // TypeError: addTwo is not a function
//In this example, the function 'addone' is declared using a function declaration, which is hoisted to the top of its scope, allowing it to be called before its definition. However, 'addTwo' is declared using a function expression and is not hoisted in the same way, resulting in a TypeError when trying to call it before its definition.
const addTwo = function(num){
    return num+2;
}