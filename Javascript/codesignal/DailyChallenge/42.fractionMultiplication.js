function fractionMultiplication(a, b) {
  let result = [a[0] * b[0], a[1] * b[1]];
  let num = 2;
  while (num <= result[0] && num <= result[1]) {
    if (result[0] % num == 0 && result[1] % num == 0) {
      result[0] /= num;
      result[1] /= num;
      num = 2;
      continue;
    }
    num++;
  }
  return result;
}

// console.log(fractionMultiplication([2, 3], [3, 5])); //[2, 5]
// console.log(fractionMultiplication([4, 3], [6, 10])); //[4, 5]
// console.log(fractionMultiplication([3, 4], [2, 5])); //[3, 10]
// console.log(fractionMultiplication([3, 4], [3, 5])); //[9, 20]
console.log(fractionMultiplication([7, 15], [3, 7])); //[1, 5]
