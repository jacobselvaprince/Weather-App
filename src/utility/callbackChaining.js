var add = function (x, y, cb){
    setTimeout(function(){
        var sum = x + y;
        var mul = x * y;
        cb(sum, mul);
    }, 1000)
}

var sub = function (x, y, cb){
    setTimeout(function(){
        cb(x - y);
    }, 2000)
}
add(10, 5, function(addRes, mulRes){
    console.log(addRes, mulRes);
    sub(mulRes, addRes, function(subRes){
        console.log(subRes);
    })
});