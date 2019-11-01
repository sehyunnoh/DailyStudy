function differentSubstringsTrie(inputString) {
  let result = 0;
  let map = new Map();
  let array = inputString.split("");

  for (let i = 0; i < array.length; i++) {
    let num = i + 1;
    for (let j = 0; j < array.length - i; j++) {
      let checkNum = num;
      let checkString = "";
      let tmpJ = j;
      while (checkNum--) {
        checkString += array[tmpJ++];
      }
      if (!map.has(checkString)) {
        map.set(checkString);
        result++;
      }
    }
  }
  return result;
}

console.log(differentSubstringsTrie("abac")); // 9
