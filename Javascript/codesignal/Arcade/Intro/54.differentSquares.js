function differentSquares(m) {
  if (!(m.length >= 2 && m[0].length >= 2)) return 0;
  let result = [];
  for (let j = 0; j < m.length - 1; j++) {
    for (let i = 0; i < m[0].length - 1; i++) {
      let tmp = ''+m[j][i]+ m[j][i+1]+ m[j+1][i]+m[j+1][i + 1];
      if (!check(result, tmp)) result.push(tmp);
    }
  }
  return result.length;
}
const check = (result, str) => {
  for (let i = 0; i < result.length; i++) {
    if (result[i] === str) return true;
  }
  return false;
};
console.log(
  differentSquares([
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1]
  ])
); // 6
