function sumOfDivisors(n) {
  if (n == 1) return 1;
  let result = 0;
  let max = n;
  for (let i = 1; i < max; i++) {
    if (n % i == 0) {
      max = n / i;
      if (i == max) {
        result += i;
      } else {
        result += i + max;
      }
    }
    if(i>100000) break;
  }
  return result;
}

// console.log(sumOfDivisors(12)); //28
// console.log(sumOfDivisors(10)); //18
console.log(sumOfDivisors(100)); //217
