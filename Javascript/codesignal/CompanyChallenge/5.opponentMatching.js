function opponentMatching(xp) {
  if (xp.length <= 1) return [];
  let arr = [];
  for (let i = 0; i < xp.length; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < xp.length; j++) {
      if (i == j) continue;
      let diff = Math.abs(xp[i] - xp[j]);
      if (min > diff) min = diff;
    }
    arr.push([min, i]);
  }

  arr.sort((a, b) => a[0] - b[0]);
  if (arr.length % 2 !== 0) arr.pop();
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push([arr[i][1], arr[i + 1][1]]);
  }

  return result;
}

// console.log(opponentMatching([200, 100, 70, 130, 100, 800, 810]));
// console.log(opponentMatching([200, 100, 70, 120, 100, 800, 810]));
console.log(opponentMatching([1, 5, 11, 3, 1, 16, 100]));

// [[1,4],
//  [5,6],
//  [2,3]]
