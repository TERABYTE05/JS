const InstaUser = new Object();

InstaUser.username = "john_doe";
InstaUser.fullName = "John Doe";
InstaUser.bio = "Photographer & Traveler";
InstaUser.followers = 1500;
InstaUser.following = 300;


const regularUser = {
    username: "jane_smith",
    fullName: {
        firstName: "Jane",
        lastName: "Smith"
    }
};

console.log(regularUser.fullName.firstName); // Jane

const obj1 = {1:"A",2:"B"};
const obj2 = {3:"C",4:"D"};

//const obj3 ={obj1, obj2}; // nested objects
const obj3 = Object.assign({}, obj1, obj2); // merged objects
console.log(obj3);

const user = {...obj1, ...obj2}; // spread operator to merge objects

console.log(Object.keys(InstaUser)); // get all keys

console.log(Object.values(InstaUser)); // get all values
console.log(Object.entries(InstaUser)); // get all entries as [key, value] pairs

console.log(InstaUser.hasOwnProperty('bio')); // true


// Object destructuring and JSON API intro

const course ={
    courseName: "JavaScript Basics",
    duration: "4 weeks",
    level: "Beginner",
    instructor: {
        name: "Alice Johnson",
        experience: "5 years"
    }
}

const  {courseName : CName}= course; // object destructuring
console.log(CName); // JavaScript Basics


// JSON API

//format in which data is sent by APIs over the internet
// {
//     name:"Ishita",
//     age:21,
//     hobbies:['reading', 'traveling', 'coding']
// }