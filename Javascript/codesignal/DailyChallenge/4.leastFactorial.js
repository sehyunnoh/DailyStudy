function leastFactorial(n) {
  let result = 1, num = 0;
  while (1) {
    result *= ++num;
    if(result >= n) break;
  }
  return result;
}

console.log(leastFactorial(1));
