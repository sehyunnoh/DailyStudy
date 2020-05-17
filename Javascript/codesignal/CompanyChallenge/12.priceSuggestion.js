function priceSuggestion(cont) {
  if (cont.length < 2) return [];
  cont.sort((a, b) => a - b);
  let arr = [
    [...cont.slice(0, cont.length / 2)],
    [...cont.slice(cont.length / 2)],
  ];

  if (arr[0].length % 2 !== 0) {
    let index = ~~(arr[0].length / 2);
    return [arr[0][index], arr[1][index]];
  } else {
    let index = arr[0].length / 2 - 1;
    return [arr[0][index], arr[1][index + 1]];
  }
}

console.log(priceSuggestion([10, 15, 14, 7, 11, 15])); // [10,15]
// console.log(priceSuggestion([10, 15, 14, 7])); // [10,15]

// console.log(priceSuggestion([1, 5, 6, 3, 2, 4, 7, 8, 9, 9]));
