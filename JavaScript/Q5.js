// removing or updating a specific object in array of data based on a unique ID

// create an array of object
let data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Alice', age: 20 }
    ]

const newarr = data.filter(function(user){
    return user.id !== 3;
})

console.log(newarr)