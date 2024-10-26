var ans = new Promise((res, rej) => {
    if(true) {
        return res();
    }
    else{
        return rej();
    }
})

ans
.then(function(){
    //if the promise is resolved then this statement is executed
    console.log("resolved");
})
.catch(function(){
    //if the promise is rejected then this statement is executed
    console.log("rejected")
})