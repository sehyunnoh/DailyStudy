function digitsProduct(p) {

    if (p === 0) return 10;
    if (p === 1) return 1;
    let result = '';
    while(p.toString().length > 1){
        let check = false;
        for(let i = 9; i >= 2; i--){
            if(p % i === 0 ) {
                check = true;
                let mok = p / i;
                result+=i;
                p = mok;
                break;
            }
        }
        if (!check) return -1
    }
    result+=p;
    return +(result.split('').reverse().join(''));
}


console.log(digitsProduct(12)) //26
console.log(digitsProduct(19)) //-1
console.log(digitsProduct(450)) //2559