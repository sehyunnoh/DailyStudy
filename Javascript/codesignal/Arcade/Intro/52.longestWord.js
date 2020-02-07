function longestWord(text) {
    let arr = text.split(' ');
    let arr2 = arr.map(x=>x.replace(/([^a-zA-Z])/g,''));
    let max = 0;
    let loc = 0;
    for(let i=0; i<arr2.length; i++){
        if( arr2[i].length > max ) {
            max = arr2[i].length;
            loc = i;
        }
    }
    return arr2[loc];
}

console.log(longestWord("Ready[[[, steady, go!")) //steady