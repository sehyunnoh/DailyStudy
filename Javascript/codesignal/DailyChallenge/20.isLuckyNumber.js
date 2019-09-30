function isLuckyNumber(n) {
    let array = (""+n).split("");
    for(let i=0; i<array.length;i++){
      if(!(array[i] == 4 || array[i] == 7)) return false;
    }
    return true;
}


console.log(isLuckyNumber(47));