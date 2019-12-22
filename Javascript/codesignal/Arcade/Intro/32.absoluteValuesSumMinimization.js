function absoluteValuesSumMinimization(a) {
    let result = a[0];
    let total = Number.MAX_VALUE;

    for(let i=0; i<a.length; i++){
        let tmp = 0;
        for(let j=0; j<a.length; j++){
            tmp += Math.abs(a[j]-a[i]);
        }
        if(tmp < total) {
            result = a[i];
            total = tmp;
        }
    }
    return result;
}

console.log(absoluteValuesSumMinimization([2, 4, 7])); //4
