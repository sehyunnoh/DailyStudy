function rangeBitCount(a, b) {
  let numOne = [];
  for(let i=a; i<=b; i++){
    numOne.push(i.toString(2).split("").sort((a,b)=>b-a).lastIndexOf('1')+1)
  }
  return numOne.reduce((a,b)=>a+b);
}

console.log(rangeBitCount(2, 7)); // 11
