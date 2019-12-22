function avoidObstacles(arr) {
  arr.sort((a, b) => a - b);
  let result = arr[arr.length-1]+1;
  for (let i = 2; i < arr[arr.length - 1]; i++) {
    if (arr.includes(i)) continue;
    let check = "N";
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % i == 0) {
        check = "Y";
        break;
      }
    }
    if (check == "Y") continue;
    result = i;
    break;
  }
  return result;
}

console.log(avoidObstacles([2, 3])); //4
// console.log(avoidObstacles([1, 4, 10, 6, 2])); //7
