// Dates

let today = new Date();
//console.log(today.toDateString());
console.log(`Today's date is: ${today}`);

console.log(typeof today); // object

let myBirthday= new Date(2021,11,5);
console.log(myBirthday.toDateString());


//Timestamp

let timestamp = today.getTime();
console.log(`Timestamp is: ${timestamp}`);

let birthday_timestamp = myBirthday.getTime();
console.log(`My birthday timestamp is: ${birthday_timestamp}`);

//console.log(Math.floor(today.now()/1000)); to convert to seconds

let date_from_timestamp = new Date();
console.log(date_from_timestamp.getMonth()+1); // month is 0 based index
console.log(date_from_timestamp.getDate());
console.log(date_from_timestamp.getFullYear());


console.log(date_from_timestamp.toLocaleString('default', { weekday: 'long' })); // to get day name
