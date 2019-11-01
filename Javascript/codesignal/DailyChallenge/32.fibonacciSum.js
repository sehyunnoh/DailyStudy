function fibonacciSum(n) {
  let arr = [0, 1];
  let l = 2,
    t = 0;
  while (1) {
    t = arr[l - 2] + arr[l - 1];
    if (t > n) break;
    arr[l++] = t;
  }

  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (n - arr[i] >= 0) {
      result.push(arr[i]);
      n -= arr[i];
    }
    if (n == 0) break;
  }
  return result.sort((a, b) => a - b);
}

console.log(fibonacciSum(33)); //[ 1, 3, 8, 21]
