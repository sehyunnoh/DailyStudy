function sockMerchant(n, ar) {
  let result = 0;
  ar.sort();
  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i] == ar[i + 1]) {
      result++;
      i++;
    }
  }
  return result;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
