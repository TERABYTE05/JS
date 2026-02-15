let myHeroes = ["thor","spiderman","ironman"];

let heroPower = {
    thor: "hammer",
    spiderman: "web",
    ironman: "suit",

    getSpiderManPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hey = function(){
    console.log(`Hey Everyone`);
    
};

Array.prototype.hello = function(){
    console.log(`Nice to meet you`);
    
}

//heroPower.hey();
myHeroes.hello();
myHeroes.hey();
//heroPower.hello();

//inheritance 
//Old method
const User = {
    name: "default",
    role: "user",
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport ={
    isAvailable: false,
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;


//Modern Method

Object.setPrototypeOf(TeachingSupport,Teacher);//Here TeachingSupport can access all the properties of Teacher and User as well because Teacher is inheriting from User and TeachingSupport is inheriting from Teacher

let anotherUsername = "Chai aur Coffee         ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
   
    console.log(`True Length is ${this.trim().length}`);
    
    
    
}

anotherUsername.trueLength();
"HelloWorld".trueLength();