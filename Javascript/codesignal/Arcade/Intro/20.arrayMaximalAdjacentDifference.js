function arrayMaximalAdjacentDifference(arr) {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let tmp = Math.abs(arr[i+1] - arr[i]);
    if (tmp > result) result = tmp;
  }
  return result;
}

console.log(arrayMaximalAdjacentDifference([10, 11, 13])); //2
// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0])); //3
