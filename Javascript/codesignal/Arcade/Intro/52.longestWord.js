function longestWord(text) {
  let arr = text.split(/([^a-zA-Z])/);
  let arr2 = arr.filter((x) => x.match(/[a-zA-Z]*/)[0].length > 0);
  let max = 0;
  let result = "";
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].length > max) {
      max = arr2[i].length;
      result = arr2[i];
    }
  }
  return result;
}

console.log(longestWord("Ready[[[, steady, go!")); //steady
