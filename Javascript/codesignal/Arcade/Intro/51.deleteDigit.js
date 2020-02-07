function deleteDigit(n) {
    let result = 0;
    let arr = (''+n).split('');
    for(let i=0; i<arr.length;i++){
        let tmp = [...arr];
        tmp.splice(i,1);
        let num = +(tmp.join(''));
        if(num > result) result = num;
    }
    return result;
}


console.log(deleteDigit(152)) //52