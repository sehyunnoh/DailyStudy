function isLucky(n) {
  let arr = ("" + n).split("");
  let num = 0;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    num += Number(arr[i]);
    num -= Number(arr[arr.length - i - 1]);
  }
  return num == 0 ? true : false;
}

console.log(isLucky(1230));
