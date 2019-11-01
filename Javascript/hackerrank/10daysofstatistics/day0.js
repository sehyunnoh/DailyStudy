function processData(input) {
  let result = [];
  input.sort((a,b)=>a-b);
  result.push(input.reduce((a, b) => a + b) / input.length);
  let half = input.length / 2;
  result.push(
    input.length % 2 == 0
      ? (input[half - 1] + input[half]) / 2
      : input[Math.floor(half)]
  );

  let min = Number.MAX_VALUE, cc = 0;
  let map = new Map();
  for (let i of input) {
    if (map.has(i)) {
      let tmp = map.get(i);
      if (tmp++ > cc) cc = tmp;
      min = i
      map.set(i, tmp);
    } else {
      map.set(i, 1);
      cc = 1;
      if (min > i) min = i;
    }
  }

  result.push(min);
  return result;
}

console.log(
  processData([
    64630,
    11735,
    14216,
    99233,
    14470,
    4978,
    4978,
    4978,
    73429,
    38120,
    51135,
    67060,
    67060
  ])
);
// console.log(processData([1,2,3]));
