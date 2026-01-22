function calculatePrice(val1,val2,...nums){
    return nums
}

console.log(calculatePrice(10, 20, 30, 40)); // [10, 20, 30, 40]

const user ={
    name: "Ishita",
    age: 20
}

function handleObject(any_objects){
    console.log(any_objects.name);
    console.log(any_objects.age);

}

//handleObject(user); // Ishita 20

handleObject({name: "John", age: 25}); // John 25


const array = [1, 2, 3, 4, 5];

function handleArray(any_array){
    for(let i=0; i<any_array.length; i++){
        console.log(any_array[i]);
    }
}

handleArray(array); // 1 2 3 4 5