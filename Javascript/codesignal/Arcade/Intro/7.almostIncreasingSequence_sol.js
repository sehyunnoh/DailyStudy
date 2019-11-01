function almostIncreasingSequence(seq) {
  var bad = 0;
  for (var i = 1; i < seq.length; i++)
    if (seq[i] <= seq[i - 1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }
  return true;
}

console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6])); // true
console.log(almostIncreasingSequence([3, 5, 67, 98, 3])); // true
console.log(almostIncreasingSequence([1, 2, 5, 3, 5])); // true
console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6])); // true
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5])); // true
console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30])); // false
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6])); // false
console.log(almostIncreasingSequence([1, 2, 1, 2])); // false
