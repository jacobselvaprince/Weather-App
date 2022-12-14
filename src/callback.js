function check(x, y, cb){
    setTimeout(function(){
        cb(x + y);
    }, 1000)
    console.log("Test");
}
check(10, 5, function(result){
    console.log(result);
});