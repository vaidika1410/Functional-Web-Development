//create an array of names in javascript
let names = ["John", "Mary", "David", "Emily", "Michael"];

names.forEach(function(value){
    console.log(value);
}) 

console.log("---------------------------")

names.forEach(function(value){
    if(value === 'John'){}
    else{
        console.log(value);
    }
})   


// forEach() method is used to execute a function on each element of an array. 
// The function takes three arguments: the value of the element, the index of the element, and  the array itself. 

// forEach() does not use break and continue statements as it is a higher order function (syntactical sugar) and does not support them. 

