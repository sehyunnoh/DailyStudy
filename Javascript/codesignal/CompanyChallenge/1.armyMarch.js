function armyMarch(a, b, v1, v2) {
  let y = a[1] - ((a[1] - b[1]) / (a[0] - b[0])) * a[0];
  // let y = 1.31899;
  let fDis = Math.sqrt(a[0] ** 2 + (y - a[1]) ** 2);
  let sDis = Math.sqrt(b[0] ** 2 + (b[1] - y) ** 2);
  return fDis / v1 + sDis / v2;
}

console.log(armyMarch([-1.5, 0.5], [1.5, 1.5], 4.4, 1.1)); // 1.761942
// console.log(armyMarch([-1.0001, 0.00001], [0.00001, 0.00001], 1.5, 1.3)); // 0.666741025641
