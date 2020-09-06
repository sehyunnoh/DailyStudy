function sudoku(g) {
  let check = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let loop = [
    [0, 0],
    [3, 0],
    [6, 0],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];
  let index = 0;

  while (index < loop.length) {
    let tmp = [];
    for (let i = 0 + loop[index][1]; i < 3 + loop[index][1]; i++) {
      for (let j = 0 + loop[index][0]; j < 3 + loop[index][0]; j++) {
        tmp.push(g[i][j]);
      }
    }
    if (!(JSON.stringify(check) === JSON.stringify(tmp.sort((a, b) => a - b))))
      return false;
    index++;
  }

  for (let i = 0; i < g.length; i++) {
    let tmp = [...g[i]];
    if (!(JSON.stringify(check) === JSON.stringify(tmp.sort((a, b) => a - b))))
      return false;
  }

  for (let i = 0; i < 9; i++) {
    let col = [];
    for (let j = 0; j < 9; j++) {
      col.push(g[j][i]);
    }
    if (!(JSON.stringify(check) === JSON.stringify(col.sort((a, b) => a - b))))
      return false;
  }

  return true;
}
