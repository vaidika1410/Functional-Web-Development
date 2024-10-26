// what is async js?

// Async JS, short for Asynchronous JavaScript, is a programming paradigm in JavaScript that allows multiple tasks to be executed concurrently, improving the overall performance and responsiveness of web applications.

// difference between sync and async js?
// Sync JS is a blocking paradigm, where the execution of a task is blocked until it is completed . In contrast, Async JS is a non-blocking paradigm, where the execution of a task is not  blocked, and other tasks can be executed concurrently.
// example of sync js 
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 
// output: 5

// example of async js
function add(a, b, callback) {
    setTimeout(() => {
            callback(a + b);
        }, 0);
    }
    add(2, 3, (result) => {
            console.log(result); //output: 5
});

//  what is callback function?
// A callback function is a function that is passed as an argument to another function, and is executed  when a specific task is completed. In the example above, the callback function is the function that is passed as an argument to the add function, and is executed when the addition is completed.


// javascript is not asyncronous as it does not use multithreading
// JS has a Main stack and a side stack , the main stack is used for synchronous code and the side stack is used for asynchronous code. When  a function is called, it is added to the main stack, and when it is completed, it  is removed from the stack. When an asynchronous function is called, it is added to the side stack (which has the same scope as the main stack) , and when it is completed, it is removed from the side stack. This allows multiple tasks to  be executed concurrently, improving the performance and responsiveness of web applications.



// event loop is responsible for bringing  the asynchronous code to the main thread 

// the event loop is a mechanism that allows the browser to process multiple tasks concurrently, improving the performance  and responsiveness of web applications. It is responsible for bringing the asynchronous code to the main thread, where  it can be executed. The event loop is a key component of the asynchronous programming model in JavaScript.

// example of event loop
console.log("hey")
console.log("hello")
setTimeout(function(){
    console.log("bonjour")
}, 2)
console.log("konichiwa")


// why do we use fetch, axios, promises, settimeout, and setinterval?
// We use these APIs to handle asynchronous code in JavaScript. They provide a way to execute tasks concurrently and improve the performance and responsiveness of web applications. They are used to handle tasks that take a  long time to complete, such as making network requests or performing I/O operations.
