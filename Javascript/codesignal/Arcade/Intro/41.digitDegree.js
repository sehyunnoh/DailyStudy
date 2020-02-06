function digitDegree(n) {
    let result = 0;
    while(true){
        if(n.toString().length <= 1) break;
        let tmp = n.toString().split("").reduce((a,b)=>+a + +b);
        n = tmp;
        result++;
    }
    return result;
}


console.log(digitDegree(100)) //1