function almostIncreasingSequence(sequence) {
  let result = true;
  if (sequence.length >= 3) {
    if (
      sequence[0] >= sequence[sequence.length - 1] &&
      sequence[0] >= sequence[sequence.length - 2]
    ) {
      result = false;
    }
  }
  let decrease = 0;
  let dup = 0;
  let tmpArray = [...sequence];
  tmpArray.sort();
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) decrease++;
    if (tmpArray[i] == tmpArray[i + 1]) dup++;
    if (decrease > 1 || dup > 1) {
      result = false;
      break;
    }
  }
  tmpArray = [...sequence];
  tmpArray.shift();

  for (let i = 0; i < tmpArray.length - 1; i++) {
    if (tmpArray[i] >= tmpArray[i + 1]) result = false;
  }
  result = true;
  return result;
}

console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
// console.log(almostIncreasingSequence([1, 3, 2, 1]));
// console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30]));
// console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]));
// console.log(almostIncreasingSequence([1, 2, 1, 2]));
