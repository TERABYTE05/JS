// Promise created

const PromiseOne = new Promise(function (resolve, reject) {
    // Do some asynchronous operation here
    //DB calls, cryptography, networks
    setTimeout(function(){

     console.log("Asynchronous operation completed");
     resolve();
    }, 2000);
});


//Promise Consumption

PromiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();

        
    },1000);
}).then(function(){
    console.log("Promise 2 consumed");
})


//Creating third promise

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 3");
        resolve({username:"Terabyte05",email:"terabyte05@example.com"});
    },3000);

})

PromiseThree.then(function(user){
    console.log("Promise 3 consumed");
    console.log(user);
})


//Creating fourth promise

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Terabyte05",email:"terabyte05@example.com"});
        }else{
            reject("Error: Something went wrong");
        }
},4000)

});

PromiseFour.then((user)=>{
    //console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise 4 completed");
})


//Creating fifth promise

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username :"javascript",password:"12345"});
        }
        else{
            reject("Error: Something went wrong in Promise Five");
        }
    },5000)
});


// async function consumePromiseFive(){
//     const response = await PromiseFive
//     console.log(response);
    
// }
// consumePromiseFive();


async function consumePromiseFive(){
    try{
        const response = await PromiseFive;
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data =  await response.json(); // If we don't use await here, we will get a promise(pending) instead of the actual data
//     console.log(data);
//     }
//     catch(error){
//         console.log("Error fetching users:", error);
//     }
// }

// getAllUsers();


fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error fetching users:", error);
})