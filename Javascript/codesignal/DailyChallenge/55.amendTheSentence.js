function amendTheSentence(s) {
    let result = s[0].toLowerCase();
    for(let i=1; i < s.length; i++){
        if(s[i] === s[i].toUpperCase()){
            result+=` ${s[i].toLowerCase()}`;
        }else{
            result+=s[i];
        }
    }
    return result;
}


console.log(amendTheSentence("vSKwWDjwIerQKMgVaAniorRJlerbKpDgvyKBLPNwSRWtylqKewNFtERNuUBBHAsGkTSSfdhQHJYvAighAdeG"))