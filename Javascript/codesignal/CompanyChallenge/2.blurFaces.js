function blurFaces(img) {
  const m = new Array(img.length)
    .fill()
    .map(() => new Array(img[0].length).fill(0));

  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[i].length; j++) {
      let total = 0;
      let cnt = 0;
      if (i - 1 >= 0 && j - 1 >= 0) {
        total += img[i - 1][j - 1];
        cnt++;
      }
      if (i - 1 >= 0) {
        total += img[i - 1][j];
        cnt++;
      }
      if (i - 1 >= 0 && j + 1 <= img[i].length - 1) {
        total += img[i - 1][j + 1];
        cnt++;
      }
      if (j + 1 <= img[i].length - 1) {
        total += img[i][j + 1];
        cnt++;
      }
      if (i + 1 <= img.length - 1 && j + 1 <= img[i].length - 1) {
        total += img[i + 1][j + 1];
        cnt++;
      }
      if (i + 1 <= img.length - 1) {
        total += img[i + 1][j];
        cnt++;
      }
      if (i + 1 <= img.length - 1 && j - 1 >= 0) {
        total += img[i + 1][j - 1];
        cnt++;
      }
      if (j - 1 >= 0) {
        total += img[i][j - 1];
        cnt++;
      }
      m[i][j] = total / cnt;
    }
  }
  return m;
}

console.log(
  blurFaces([
    [1, 4],
    [7, 10],
  ])
);
