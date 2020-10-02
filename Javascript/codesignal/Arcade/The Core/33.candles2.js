function candles(c, m) {
  let result = 0;
  let lo = 0;

  while (c !== 0) {
    result += c;
    lo += c;
    c = ~~(lo / m);
    lo = lo % m;
  }
  return result;
}

console.log(candles(5, 2)); //9
