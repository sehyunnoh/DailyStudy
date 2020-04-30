function candles(c, m) {
  let result = 0;
  let leftOver = 0;
  while (true) {
    // 태우고
    result += c;
    leftOver += c;
    c = 0;
    // 양초 만들고
    if (leftOver >= m) {
      c = ~~(leftOver / m);
      leftOver -= c * m;
    } else {
      break;
    }
  }
  return result;
}

console.log(candles(5, 2)); //9
