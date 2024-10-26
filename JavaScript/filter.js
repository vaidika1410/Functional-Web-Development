//write a js program to filter the name John from the array of names
let names = ["John", "Mary", "John", "David", "John"];
let filteredNames = names.filter(function (name) {
  if (name === "John") {
    return true;
  } else {
    return false;
  }
});
console.log(filteredNames);
//output: ["John", "John", "John"]
//filter() method returns a new array with all elements that pass the test implemented by the provided function.

//write a program to filter the names having first letter 'V' in the array of 10 elements and copy the result to another array

let arr = [
  "Vivek",
  "Mary",
  "John",
  "David",
  "Vishal",
  "Vikas",
  "Rahul",
  "Raj",
  "Rohan",
  "Rahul",
];
let filteredArr = arr.filter(function (name) {
  if (name.startsWith('V')) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredArr);
