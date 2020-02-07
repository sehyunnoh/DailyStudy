function chessKnight(cell) {
  const tmp = cell.split("");
  const arr = tmp.map(x => x.charCodeAt(0));
  const tArray = [
    [arr[0] - 2, arr[1] + 1],
    [arr[0] - 1, arr[1] + 2],
    [arr[0] + 1, arr[1] + 2],
    [arr[0] + 2, arr[1] + 1],
    [arr[0] + 2, arr[1] - 1],
    [arr[0] + 1, arr[1] - 2],
    [arr[0] - 1, arr[1] - 2],
    [arr[0] - 2, arr[1] - 1]
  ];

  let result = 0;
  for (let i = 0; i < tArray.length; i++) {
    if (check(tArray[i])) result++;
  }
  return result;
}

const check = data => {
  if (data[0] >= 97 && data[0] <= 104 && data[1] >= 49 && data[1] <= 56) {
    return true;
  } else {
    return false;
  }
};

console.log(chessKnight("a1")); // 2
