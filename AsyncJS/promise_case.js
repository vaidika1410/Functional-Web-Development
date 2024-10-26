// take an input (between 0 and 9), if the input is below 5, resolve if not reject


let ans = new Promise((res, rej) => {
    var n = Math.floor(Math.random() * 10);

    if (n < 5){
        return res();
    }
    else{
        return rej();
    }
})

ans
.then(function(){
    console.log("number is below 5")
})
.catch(function(){
    console.log("number is above 5")
})
    