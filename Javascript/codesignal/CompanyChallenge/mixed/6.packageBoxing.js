function packageBoxing(pkg, boxes) {
  pkg.sort((a, b) => b - a);
  let result = [];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].sort((a, b) => b - a);
    let check = true;
    for (let j = 0; j < pkg.length; j++) {
      if (pkg[j] > boxes[i][j]) {
        check = false;
        break;
      }
    }
    if (check) {
      let total = boxes[i].reduce((a, b) => a * b);
      result.push([total, i]);
    }
  }
  return result.length === 0 ? -1 : result.sort((a, b) => a[0] - b[0])[0][1];
}

console.log(
  packageBoxing(
    [4, 2, 5],
    [
      [4, 3, 5],
      [5, 2, 5],
    ]
  )
);
