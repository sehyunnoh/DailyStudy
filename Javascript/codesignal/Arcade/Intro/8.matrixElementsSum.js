function matrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] != 0) {
        let check = true;
        let num = i;
        if (num > 0) {
          while (--num >= 0) {
            if (matrix[num][j] == 0) {
              check = false;
              break;
            }
          }
        }
        if (check) result += matrix[i][j];
      }
    }
  }
  return result;
}

var matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];

console.log(matrixElementsSum(matrix));
