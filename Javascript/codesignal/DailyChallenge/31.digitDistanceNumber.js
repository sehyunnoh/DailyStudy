function digitDistanceNumber(n) {
  let arr = ("" + n).split("");
  let result ="";
  for (let i = 0; i < arr.length - 1; i++) {
    result += ""+Math.abs(arr[i + 1] - arr[i]);
  }
  return Number(result);
}

console.log(digitDistanceNumber(2744));
