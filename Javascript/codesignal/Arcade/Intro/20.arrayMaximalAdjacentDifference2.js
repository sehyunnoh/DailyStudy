function arrayMaximalAdjacentDifference(arr) {
  let result = Math.abs(arr[1] - arr[0]);
  for (let i = 2; i < arr.length; i++) {
    let tmp = Math.abs(arr[i] - arr[i - 1]);
    if (tmp > result) result = tmp;
  }
  return result;
}

console.log(arrayMaximalAdjacentDifference([10, 11, 13])); //2
// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0])); //3
