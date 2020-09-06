function longestWord(text) {
    let arr = text.split('');
    let arr2 = [''];
    let loc = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].match("^[a-zA-Z0-9]*$")) {
            arr2[loc]+=arr[i];
        }else{
            ++loc;
            arr2.push('');
        }
    }
    let max = 0;
    loc = 0;
    for(let i=0; i<arr2.length; i++){
        if( arr2[i].length > max ) {
            max = arr2[i].length;
            loc = i;
        }
    }
    return arr2[loc];
}

// console.log(longestWord("Ready[[[, steady, go!")) //steady
console.log(longestWord("A!! AA[]z")) //steady