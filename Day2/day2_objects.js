//singleton

 // object literals
const mySymbol = Symbol("mySymbol");
 const person = {
    name: "Ishita",
    age: 21,
    mySymbol:"mykey1", // here its used as a string and not as symbol
    [mySymbol]:"myvalue1", // here its used as a symbol
    hobbies: ['reading', 'traveling', 'coding'],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
 }

person.greet(); // Hello, my name is Ishita
console.log(person["name"]); // Ishita
console.log(person.hobbies[1]); // traveling
console.log(person.mySymbol); // mykey1
console.log(person[mySymbol]); // myvalue1

person.age=22;
Object.freeze(person); // freeze the object