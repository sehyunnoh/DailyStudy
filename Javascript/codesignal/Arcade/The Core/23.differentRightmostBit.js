function differentRightmostBit(n, m) {
  let a = n.toString(2).split('').reverse().join('');
  let b = m.toString(2).split('').reverse().join('');
  a.length > b.length ? b=b.padEnd(a.length, 0) : a=a.padEnd(b.length, 0);
  for(let i=0; i<a.length; i++){
      if(a[i] !== b[i]) return 2**i;
  }
}

// console.log(differentRightmostBit(11, 13)); // 2
console.log(differentRightmostBit(7, 23)); // 16
