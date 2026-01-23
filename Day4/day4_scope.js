let a = 300;

if (true) {
  let a = 90;
  const b = 80;
  var c = 70;
  console.log(`Inner Block: ${a}`); // 90
}

console.log(a); // ReferenceError: a is not defined 
//In second case when a=300 is declared with let in the global scope, it is not accessible inside the block scope where a=90 is declared. Hence, it will throw ReferenceError when trying to access a outside the block.
//console.log(b); // ReferenceError: b is not defined
//console.log(c); // 70
