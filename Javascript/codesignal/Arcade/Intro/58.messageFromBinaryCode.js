function messageFromBinaryCode(code) {
    let result = '';
    let tmp = '';
    for(let i=0; i < code.length; i++){
        tmp+=code[i];
        if(tmp.length == 8){
            result += String.fromCharCode(parseInt(tmp, 2).toString(10));
            tmp = '';
        }
    }
    return result;
}


console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001")) //"Hello!"