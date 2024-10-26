// then and catch statements in js?
// In synchronous JavaScript, code is executed line by line, one at a time. Each statement is completed before moving on to the next one. This means that if a task takes a long time to complete, the code will wait for it to finish before continuing.

// the 'then' statement
// The 'then' statement is used to specify a callback function that will be executed when a Promise is resolved => successful operation
// The 'then' method returns a new Promise, allowing you to chain multiple 'then' statements together.

// The 'catch' statement

// The 'catch' statement is used to specify a callback function that will be executed when a Promise is rejected (i.e., when the operation fails). The 'catch' method returns a new Promise, allowing you to chain multiple 'catch' statements together.


// callback functions?
// A callback function is a function passed as an argument to another function, which is then executed inside  the other function. Callback functions are often used in asynchronous programming to handle the result of an operation. 
// In JavaScript, callback functions are often used with the 'then' and 'catch' methods of  Promises.


// promises?
// A Promise is a result object that is used to handle asynchronous operations. It represents a value that  may not be available yet, but will be resolved at some point in the future. When a Promise  is created, it can be in one of three states: pending, fulfilled, or rejected. 
// Pending: The Promise is created and has not yet been resolved or rejected.
// Fulfilled: The Promise has been resolved and the value is available.
// Rejected: The Promise has been rejected and the reason for the rejection is available.
// A Promise can be created using the 'Promise' constructor, which takes a callback function as an  argument. The callback function is executed when the Promise is resolved or rejected.
// A Promise can also be created using the 'async/await' syntax, which is a more  concise way of  writing asynchronous code. 
