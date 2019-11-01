function evenNumbersBeforeFixed(sequence, fixedElement) {
  if (sequence.indexOf(fixedElement) == -1) return -1;
  let result = 0;
  for (let n of sequence) {
    if (n == fixedElement) break;
    if (n % 2 == 0) result++;
  }
  return result;
}

console.log(evenNumbersBeforeFixed([1, 4, 2, 6, 3, 1], 6)); //2
