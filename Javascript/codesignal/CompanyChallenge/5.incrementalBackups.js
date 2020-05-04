function incrementalBackups(l, c) {
  let result = [];
  for (let i = 0; i < c.length; i++) {
    if (c[i][0] > l) {
      if (!result.includes(c[i][1])) result.push(c[i][1]);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
); // [1,3,5]
