function oddNumbers(l, r) {
    let result = [];
    let num;
        if(l%2==0){
            num = l+1;
        }else{
            num=l;
        }

        while(num<=r){
            result.push(num);
            num+=2;
        }
        return result;
    }

console.log(oddNumbers(2,5));