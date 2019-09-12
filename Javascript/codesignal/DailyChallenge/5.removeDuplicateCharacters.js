function removeDuplicateCharacters(str) {
  let array = str.split("");
  array.sort();
  let tmpSet = new Set();
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == array[i + 1]) {
      tmpSet.add(array[i]);
      if (i + 1 >= array.length - 1) {
        break;
      } else {
        i++;
      }
    }
  }
  let result = "";
  str.split("").forEach(function(c) {
    if (!tmpSet.has(c)) result += c;
  });
  return result;
}

console.log(removeDuplicateCharacters("zaabcbd"));
