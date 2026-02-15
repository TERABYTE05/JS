const user = {
    username:"Terabyte05",
    loginCount : 8,
    signedIn:true,

    getUserDetails:function(username){
        //console.log("Get user details");
        //console.log(`Username:${this.username}`);
        //this refers to the current object, which is user in this case
        //this is used to access the properties of the current object within a method
       // return username;
       console.log(this);
       
    }
}
// console.log(user.loginCount);
// console.log(user.getUserDetails("Terabyte05"));


//Creating a new object using constructor function
// new keyword is used to create an instance of the constructor function


function User(username,logincount,isLoggedIn){
    this.username = username;
    this.loginCount = logincount;
    this.signedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;//
}

const user1  =  new User("Terabyte05",8,true);
const user2 = new User("JavaScript",10,false);
// new keyword is necessary to create an instance of the constructor function, it creates a new object and sets the value of this to the new object, and returns the new object at the end of the function. If we don't use new keyword, then whenever we call constructor function with different arguments, it will overwrite the properties of the same object and return the same object every time, which is not the desired behavior when we want to create multiple objects with different properties. By using new keyword, we can create multiple instances of the constructor function, each with its own set of properties and values.
console.log(user1.constructor);
console.log(user2);
