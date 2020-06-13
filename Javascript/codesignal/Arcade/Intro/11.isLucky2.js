function isLucky(n) {
  let arr = ("" + n).split("");
  let result = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    result += +arr[i] - arr[arr.length - 1 - i];
  }
  return result === 0 ? true : false;
}

console.log(isLucky(1230));
