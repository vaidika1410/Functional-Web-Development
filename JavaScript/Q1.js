//merging two arrays of data fetched from seperate API into a single array
let array1 = [1,2,3]
let array2 = [4,5,6]

const mergedArray = [...array1, ...array2];
console.log(mergedArray)