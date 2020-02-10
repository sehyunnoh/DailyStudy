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
    [6, 6]
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

// console.log(
//   sudoku([
//     [1, 3, 2],
//     [4, 6, 5],
//     [7, 9, 8]
//   ])
// ); // true

console.log(sudoku([[1,3,2,5,4,6,9,8,7],
                    [4,6,5,8,7,9,3,2,1],
                    [7,9,8,2,1,3,6,5,4],
                    [9,2,1,4,3,5,8,7,6],
                    [3,5,4,7,6,8,2,1,9],
                    [6,8,7,1,9,2,5,4,3],
                    [5,7,6,9,8,1,4,3,2],
                    [2,4,3,6,5,7,1,9,8],
                    [8,1,9,3,2,4,7,6,5]])) // true

// console.log(
//   sudoku([
//     [1, 3, 2, 5, 4, 6, 9, 2, 7],
//     [4, 6, 5, 8, 7, 9, 3, 8, 1],
//     [7, 9, 8, 2, 1, 3, 6, 5, 4],
//     [9, 2, 1, 4, 3, 5, 8, 7, 6],
//     [3, 5, 4, 7, 6, 8, 2, 1, 9],
//     [6, 8, 7, 1, 9, 2, 5, 4, 3],
//     [5, 7, 6, 9, 8, 1, 4, 3, 2],
//     [2, 4, 3, 6, 5, 7, 1, 9, 8],
//     [8, 1, 9, 3, 2, 4, 7, 6, 5]
//   ])
// ); // false
