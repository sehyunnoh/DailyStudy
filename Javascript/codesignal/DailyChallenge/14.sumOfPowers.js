function sumOfPowers(n, divisor) {
  let p = 0;
  let multiply = 1;
  while (n >= multiply) {
    multiply *= divisor;
    p++;
  }
  p--;

  let result = 0;
  for (let i = 1; i <= p; i++) {
    result += Math.floor(n / divisor ** i);
  }

  return result;
}

console.log(sumOfPowers(10, 3)); // 4
