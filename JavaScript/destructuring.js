//write a program to destructure an array of objects
let arr = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
];
let [first, second, third] = arr.map(({ id, name, age }) => ({
  id,
  name,
  age,
}));
console.log(first);
console.log(second);
console.log(third);
 

//destructuring an array of objects with default values

const user = {
    id : 1,
    name : "John",
    age : 25,
    address : {
        street : "123 Main St",
        city : "Anytown",
        state : "CA",
        },
    phoneNumbers : {
        home : "123-456-7890",
        work : "987-654-3210",
        }
    }

let {home} = user.phoneNumbers
console.log(home)

let {street, city, state} = user.address
console.log(street, city, state)
