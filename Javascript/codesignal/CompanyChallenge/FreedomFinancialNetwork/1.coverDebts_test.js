function coverDebts(s, d, int) {
  let arr = [];
  for (let i = 0; i < d.length; i++) {
    let obj = {};
    obj[int[i]]=d[i];

    // obj["debt"] = d[i];
    // obj["interest"] = int[i];
    arr.push(obj);
  }
  arr.sort((a, b) => b.interest - a.interest);

  let eachMonth = s * 0.1;
  let result = 0;
  while (true) {
    let tmp = eachMonth;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].debt < tmp) {
        tmp -= arr[i].debt;
        result += arr[i].debt;
        arr[i].debt = 0;
        continue;
      }
      if (arr[i].debt >= tmp) {
        arr[i].debt -= tmp;
        result += tmp;
        tmp = 0;
      }
    }

    let debtZero = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].debt > 0) {
        arr[i].debt += (arr[i].debt * arr[i].interest) / 100;
        debtZero = false;
      }
    }
    if (debtZero) break;
  }
  return result;
}

console.log(coverDebts(50, [2, 2, 5], [200, 100, 150])); //22
