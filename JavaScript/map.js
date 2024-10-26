// create an array of names in js
let names = ["John", "Mary", "David", "Emily", "Michael"];

let newarr = names.map(function(value){
    return value;
})

console.log(newarr)

//why do we use map() in js?
//map() is used to create a new array with the results of applying a provided function on every element in this array. It does not modify the original array.

let arr = names.map(function(value){
    return value + "  is a good person";
})

console.log(arr) //copy of the original array with same no. of elements

console.log(names) //does not modify the original array