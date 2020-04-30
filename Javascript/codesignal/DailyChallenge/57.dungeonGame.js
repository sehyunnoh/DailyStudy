function dungeonGame(d) {
  for (let i = 0; i < d.length; i++) {
    for (let j = 0; j < d[i].length; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        d[i][j] = d[i][j] + d[i][j - 1];
        continue;
      }
      if (j === 0) {
        d[i][j] = d[i - 1][j] + d[i][j];
        continue;
      }
      if (i === d.length - 1 && j === d[i].length - 1) break;
      let addNum = d[i - 1][j] > d[i][j - 1] ? d[i - 1][j] : d[i][j - 1];
      d[i][j] += addNum;
    }
  }

  let num1 =
    d[d.length - 1][d[0].length - 1] + (d[d.length - 2][d[0].length - 1] || 0);
  let num2 =
    d[d.length - 1][d[0].length - 1] + (d[d.length - 1][d[0].length - 2] || 0);

  let result = num1 < num2 ? num1 : num2;
  return -result + 1;
}

console.log(
  dungeonGame([
    [-2, -3, 4],
    [-6, -15, 0],
    [10, 25, -6],
  ])
); // 8

console.log(dungeonGame([[1,-2,3], 
    [2,-2,-2]]));

    console.log(dungeonGame([[0,-51,-51,51], 
        [-50,-1000,-1000,-51], 
        [-150,-1000,-1000,51], 
        [1000,-100,-100,0]]));

console.log(dungeonGame([[3], 
    [49], 
    [38], 
    [30], 
    [-93], 
    [-99], 
    [13], 
    [10], 
    [6], 
    [-77], 
    [-83], 
    [-76], 
    [24], 
    [-40], 
    [-73]]));