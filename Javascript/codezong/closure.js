function outer(){
    var a = 1;
    var b = 2;

    function inner(){
        var a = 2;
        console.log(b);
    }
    inner();
}

outer();