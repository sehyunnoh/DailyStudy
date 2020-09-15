function secondRightmostZeroBit(n) {
    let arr = n.toString(2).split('').reverse().map(x=>+x);
    let pos = arr.indexOf(0);
    for(let i=pos+1; i<arr.length; i++){
        pos++;
        if(arr[i] === 0) break;
    }
    return 2**pos;
  }

  
console.log(secondRightmostZeroBit(37)); //8
console.log(secondRightmostZeroBit(1073741824)); //2