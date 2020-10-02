function appleBoxes(k) {
  let result = 0;
  for (let i = 1; i <= k; i++) {
    i % 2 !== 0 ? (result -= i ** 2) : (result += i ** 2);
  }
  return result;
}

// console.log(appleBoxes(5));
console.log(appleBoxes(15));
-120;
