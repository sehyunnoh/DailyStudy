function lineEncoding(s) {

    let arrC = [s[0]];
    let arrN = [1];
    let loc = 0;
    for(let i=1; i<s.length; i++){
        if(arrC[loc] !== s[i]){
            ++loc;
            arrC.push(s[i]);
            arrN.push(1);
        }else{
            arrN[loc]++;
        }
    }
    let result = '';
    for(let i=0; i < arrN.length; i++){
        if(arrN[i] !== 1){
            result+=arrN[i];
        }
        result+=arrC[i];
    }
    return result;
}

// console.log(lineEncoding("aabbbc")) // 2a3bc
// console.log(lineEncoding("abbcabb")) // a2bca2b
console.log(lineEncoding("ccccccccccccccc")) // 15c