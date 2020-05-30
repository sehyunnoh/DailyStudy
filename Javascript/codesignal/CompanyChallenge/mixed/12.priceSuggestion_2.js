function priceSuggestion(cont) {
  if (cont.length < 2) return [];
  cont.sort((a, b) => a - b);
  let arr = [
    [...cont.slice(0, cont.length / 2)],
    [...cont.slice(cont.length / 2)],
  ];

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0) {
      let index = ~~(arr[i].length / 2);
      result.push(arr[i][index]);
      continue;
    }
    let index = arr[i].length / 2 - 1;
    if (i == 0) {
      result.push(arr[i][index]);
    } else {
      result.push(arr[i][index + 1]);
    }
  }
  return result;
}

console.log(priceSuggestion([10, 15, 14, 7, 11, 15])); // [10,15]
// console.log(priceSuggestion([10, 15, 14, 7])); // [10,15]

// console.log(priceSuggestion([1, 5, 6, 3, 2, 4, 7, 8, 9, 9]));
