function sortByHeight(a) {
  let tmp = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) tmp.push(a[i]);
  }
  tmp.sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) {
      a[i] = tmp.shift();
    }
  }
  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
//[-1, 150, 160, 170, -1, -1, 180, 190]
