function polygonPerimeter(m) {
  let result = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] == true) {
        if (j === 0) {
          result++;
        } else {
          if (m[i][j] !== m[i][j - 1]) result++;
        }
        if (i === 0) {
          result++;
        } else {
          if (m[i - 1][j] !== m[i][j]) result++;
        }
        if (j === m[i].length - 1) {
          result++;
        } else {
          if (m[i][j] !== m[i][j + 1]) result++;
        }
        if (i === m.length - 1) {
          result++;
        } else {
          if (m[i + 1][j] !== m[i][j]) result++;
        }
      }
    }
  }
  return result;
}

console.log(
  polygonPerimeter([
    [false, true, true],
    [true, true, false],
    [true, false, false],
  ])
); // 12
