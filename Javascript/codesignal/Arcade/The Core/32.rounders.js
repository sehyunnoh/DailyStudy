function rounders(n) {
  if (n < 10) return n;
  let arr = ("" + n).split("");
  let add = +arr[arr.length - 1] >= 5 ? true : false;
  arr[arr.length - 1] = 0;
  for (let i = arr.length - 2; i > 0; i--) {
    let num = add ? +arr[i] + 1 : +arr[i];
    add = num >= 5 ? true : false;
    arr[i] = 0;
  }
  arr[0] = add ? "" + (+arr[0] + 1) : arr[0];
  return +arr.join("");
}

console.log(rounders(1445)); // 2000
