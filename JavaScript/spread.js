let names = ["John", "Alice", "Bob", "Eve"]

let newNames = names //creating a reference of array names which means that any change in the newNames will change array names as well
newNames.pop()
console.log(newNames) 
console.log(names)

let newarr = [...names] //creating a copy of array names which means that any change in newarr will not change names array

console.log(newarr)

newarr.pop()
console.log(newarr)
console.log(names)

//copying an object in another object using spread operator
let person = {name:"John",age:30,city:"New York"}
let newPerson = {...person} //creating a copy of person object which means that any change in  newPerson will not change person object
console.log(newPerson)

newPerson.name = "Alice"
console.log(newPerson)
console.log(person) //not changed
