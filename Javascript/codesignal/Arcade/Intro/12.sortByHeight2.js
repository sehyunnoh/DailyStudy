function sortByHeight(a) {
  let arr = a.filter((x) => x != -1).sort((a, b) => a - b);
  let cnt = 0;
  return a.map((x) => (x === -1 ? -1 : arr[cnt++]));
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
//[-1, 150, 160, 170, -1, -1, 180, 190]
