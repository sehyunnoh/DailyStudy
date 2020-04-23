function appleBoxes(k) {
  let y = 0,
    r = 0;
  for (let i = k; i >= 1; i--) {
    if (i % 2 == 0) {
      r += i * i;
    } else {
      y += i * i;
    }
  }
  return r - y;
}

console.log(appleBoxes(5));
