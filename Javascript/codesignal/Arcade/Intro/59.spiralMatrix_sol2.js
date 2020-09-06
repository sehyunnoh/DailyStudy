function matrix(n) {
  let result = new Array(n).fill().map(() => new Array(n).fill(""));

  let count = 1;
  let sCol = 0;
  let eCol = n - 1;
  let sRow = 0;
  let eRow = n - 1;

  while (sCol <= eCol && sRow <= eRow) {
    for (let i = sCol; i <= eCol; i++) {
      result[sRow][i] = count++;
    }
    sRow++;
    for (let i = sRow; i <= eRow; i++) {
      result[i][eCol] = count++;
    }
    eCol--;
    for (let i = eCol; i >= sCol; i--) {
      result[eRow][i] = count++;
    }
    eRow--;
    for (let i = eRow; i >= sRow; i--) {
      result[i][sCol] = count++;
    }
    sCol++;
  }
  return result;
}

console.log(matrix(5));
