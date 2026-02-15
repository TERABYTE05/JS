function multiply_by_5(num){
    return num*5;
}

multiply_by_5.power = 2;
console.log(multiply_by_5(5));
console.log(multiply_by_5.power);
console.log(multiply_by_5.prototype);


function createUser(username,price){
    this.username = username;
    this.price = price;

}

createUser.prototype.increment = function(){
    this.price++;
}
createUser.prototype.printMe = function(){
    console.log(`price : ${this.price}`);
    
}
const chai = new createUser("chai",10);
const tea = new createUser("tea",100);

chai.printMe();
tea.printMe();

chai.increment();
chai.printMe();
