function longestUncorruptedSegment(s, d) {
  const arr = s.map((x, i) => (x === d[i] ? 0 : 1));
  const arr2 = arr.join("").split(1);
  const arr3 = arr2.map((x) => x.length);
  let max = 0;
  let loc = 0;
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > max) {
      max = arr3[i];
      loc = i;
    }
  }
  let finalLoc = loc;
  for (let i = 0; i < loc; i++) {
    finalLoc += arr3[i];
  }
  return [max, finalLoc];
}

console.log(
  longestUncorruptedSegment(
    [33531593, 96933415, 28506400, 39457872, 29684716, 86010806],
    [33531593, 96931415, 28506400, 39457872, 29684716, 86010806]
  )
);

// [4,2];
