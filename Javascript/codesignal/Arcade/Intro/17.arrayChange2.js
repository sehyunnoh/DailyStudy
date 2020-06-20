function arrayChange(arr) {
  let result = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= arr[i]) {
      let tmp = arr[i - 1] - arr[i] + 1;
      arr[i] += tmp;
      result += tmp;
    }
  }
  return result;
}

console.log(arrayChange([1, 1, 1])); //3
console.log(arrayChange([-1000, 0, -2, 0])); //5
