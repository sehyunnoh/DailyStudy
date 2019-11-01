function minimalMultiple(divisor, lowerBound) {
  let result = 0;
  while (result < lowerBound) {
    result += divisor;
  }
  return result;
}

console.log(minimalMultiple(5, 12)); // 15
