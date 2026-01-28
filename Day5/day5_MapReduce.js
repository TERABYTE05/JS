// const nums = [1,2,3,4,5,6,7,8,9,10];

//  const new_Nums=nums.filter((num)=>{
//      if(num>4){
//          console.log(num);
//      }
// return num > 4;
// })

// // const new_Nums =nums.filter((num) => num > 4);
// console.log(new_Nums);

// // Here for each never returns a value, it just iterates through the array whereas filter returns a new array based on the condition provided.

// //Whenever we use curly braces {} in arrow function, we need to use return statement to return a value. If we don't use curly braces, the value is returned by default.


// // Using differnt method to push 

// const new_Array =[];
// nums.forEach((num)=>{
//     if(num>4){
//         new_Array.push(num);
//     }
// })
// console.log(new_Array);


// const Books = [
//     {title: "Book One", author: "Author A", rating: 4.5},
//     {title: "Book Two", author: "Author B", rating: 3.8},
//     {title: "Book Three", author: "Author C", rating: 4.2},
//     {title: "Book Four", author: "Author D", rating: 4.9},
//     {title: "Book Five", author: "Author E", rating: 2.9},
// ];

// const user_Books=Books.filter((book) => book.rating > 4.0);
// console.log(user_Books);




// Map Method

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const squared_Nums = nums.map((num) => num * num);
// console.log(squared_Nums);

// const new_nums = nums.map((num)=> num + 10).map((num)=> num * 2).filter((num)=> num > 30);
// console.log(new_nums);


// //Reduce Method

// const nums = [1,2,3,4,5];

// const sum = nums.reduce(function(acc,current_value){
//     console.log(`Accumulator: ${acc} Current Value: ${current_value}`);
//     return acc + current_value;
// },3);

// console.log(sum);


// // Using Arrow Function

// const sum2 = nums.reduce((acc,current_value) => acc + current_value,0);
// console.log(sum2);


const Shopping_Cart = [
    {item: "Laptop", price: 1000, quantity: 1},
    {item: "Phone", price: 500, quantity: 2},
    {item: "Tablet", price: 300, quantity: 3},
];

const total = Shopping_Cart.reduce((acc,cart_item)=>acc+cart_item.price * cart_item.quantity,0);

console.log(total);