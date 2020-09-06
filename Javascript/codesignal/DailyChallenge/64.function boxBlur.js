function boxBlur(image) {
  let H = image.length - 2;
  let W = image[0].length - 2;
  let arr = new Array(H).fill().map(() => new Array(W).fill(""));
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      arr[i][j] = Math.floor((image[i][j] + image[i + 1][j] + image[i + 2][j] +
                              image[i][j + 1] + image[i + 1][j + 1] + image[i + 2][j + 1] +
                              image[i][j + 2] + image[i + 1][j + 2] + image[i + 2][j + 2]) / 9 );
    }
  }
  return arr;
}

console.log(
  boxBlur([
    [36, 0, 18, 9],
    [27, 54, 9, 0],
    [81, 63, 72, 45],
  ])
);

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
