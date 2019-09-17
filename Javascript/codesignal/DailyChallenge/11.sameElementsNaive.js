function sameElementsNaive(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        result++;
      }
    }
  }

  return result;
}

console.log(sameElementsNaive([1, 2, 3], [3, 4, 5]));
