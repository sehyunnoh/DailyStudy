function stringsRearrangement(input) {
    let array = [];
    for(let i=0; i<input.length; i++){
        let tmp = input[i].split("");
        let num = 0;
        for(let j=0; j < tmp.length; j++){
            num+=tmp[j].charCodeAt(0)
        }
        array.push(num);
    }
    array.sort((a,b)=>a-b);
    if((array[array.length-1] - array[0] ) === array.length -1) return true;
    return false;
}


console.log(stringsRearrangement(["ab", "bb", "aa"])) // true