function equalPairOfBits(n, m) {
    let a = n.toString(2).split('').reverse().join('');
    let b = m.toString(2).split('').reverse().join('');
    a.length > b.length ? b=b.padEnd(a.length, 0) : a=a.padEnd(b.length, 0);
    for(let i=0; i<a.length; i++){
        if(a[i] === b[i]) return 2**i;
    }
  }

  
  console.log(equalPairOfBits(10,11)); //2