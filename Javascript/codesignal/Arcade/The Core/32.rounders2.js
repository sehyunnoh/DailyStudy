function rounders(n) {
  let arr = ("" + n).split("");
  for (let i = arr.length - 1; i > 0; i--) {
    if(+arr[i] >= 5) +arr[i - 1]++;
    arr[i]=0;
  }
  return +arr.join('');
}

console.log(rounders(1445)); // 2000
