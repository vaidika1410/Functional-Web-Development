let ans = new Promise(function(res, rej){
    return res("step 1 is executed");
})

let a = ans.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("step 2 is executed");
    })
}) 

let b = a.then(function(data){
    console.log(data)
    return new Promise(function(res, rej){
        return res("step 3 is executed");
    })
})

b.then(function(data){
    console.log(data)
})