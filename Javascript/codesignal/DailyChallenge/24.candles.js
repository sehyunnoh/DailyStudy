function candles(candlesNumber, makeNew) {
  let result = 0;
  let candle = candlesNumber;
  let leftovers = 0;

  while (candle > 0) {
    result += candle;
    leftovers += candle;
    candle = 0;
    candle = Math.floor(leftovers / makeNew);
    leftovers = leftovers % makeNew;
  }
  return result;
}

console.log(candles(5, 2)); //9
console.log(candles(1, 2)); //1
console.log(candles(3, 3)); //4
