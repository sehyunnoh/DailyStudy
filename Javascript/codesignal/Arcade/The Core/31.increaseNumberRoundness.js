function increaseNumberRoundness(n) {
  let tmp = "" + n;
  let bp = 0;
  for (let i = tmp.length - 1; i >= 0; i--) {
    if (tmp[i] !== '0') {
      bp = i;
      break;
    }
  }
  let str = ("" + n).slice(0, bp+1);
  let check = str.split(0);
  return check.length > 1 ? true:false;
}

console.log(increaseNumberRoundness(101000)); // false
