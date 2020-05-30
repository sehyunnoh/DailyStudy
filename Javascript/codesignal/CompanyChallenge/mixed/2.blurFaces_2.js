function blurFaces(img) {
  let arr = JSON.parse(JSON.stringify(img)); //deep copy
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[i].length; j++) {
      let total = 0;
      let cnt = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let z = j - 1; z <= j + 1; z++) {
          if (k === i && z === j) continue;
          if (k < 0 || z < 0 || k > img.length - 1 || z > img[i].length - 1)
            continue;
          total += img[k][z];
          cnt++;
        }
      }
      arr[i][j] = total / cnt;
    }
  }
  return arr;
}

console.log(
  blurFaces([
    [1, 4],
    [7, 10],
  ])
);
