function allLongestStrings(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i].length) num = arr[i].length;
  }
  return arr.filter((x) => x.length === num);
}

console.log(
  allLongestStrings([
    "a",
    "abc",
    "cbd",
    "zzzzzz",
    "a",
    "abcdef",
    "asasa",
    "aaaaaa",
  ])
);
