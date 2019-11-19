function arrayChange(arr) {
  let result = 0;
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i] - arr[i - 1];
    if (tmp <= 0) {
      let tmp2 = Math.abs(tmp) + 1;
      arr[i] += tmp2;
      result += tmp2;
    }
  }
  return result;
}

console.log(arrayChange([1, 1, 1])); //3
console.log(arrayChange([-1000, 0, -2, 0])); //5
