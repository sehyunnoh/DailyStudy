function halvingSum(n) {
    let result = Number(n);
    while(n>0){
        n = Math.floor(n/2);
        result+= n;
    }
    return result;
}


console.log(halvingSum(25)) //47