// async and await in js

// whenever we write any async code and  we want to wait for the result of that code then we use await keyword 

// await keyword is used with async function only
// by using await keyword, we can replace then() method

async  function myFunction(){
    let raw = await fetch(`https://www.google.com`) 
    let ans = await raw.json();  
    console.log(ans)
}
