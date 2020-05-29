function rangeBitCount(a, b) {
    let str = "";
    for(let i=a; i<=b; i++){
        str+=i.toString(2);
    }
    let result = str.split("").sort((a,b)=>b-a).join('');
    return result.lastIndexOf('1') + 1;
}

console.log(rangeBitCount(2,7)); //1