function shapeArea(n) {
  let result = 1;
  for (let i = 1; i < n; i++) {
    result += 4 * (i + 1) - 4;
  }
  return result;
}

for (let i = 1; i < 5; i++) {
  console.log(shapeArea(i));
}
