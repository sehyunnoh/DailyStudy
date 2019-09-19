function firstNotRepeatingCharacter(s) {
  let array = s.split("");
  let tmp = [...array];
  tmp.sort();
  let set = new Set();
  for (let i = 0; i < tmp.length - 1; i++) {
    if (set.has(tmp[i])) continue;
    if (tmp[i] == tmp[i + 1]) {
      set.add(tmp[i]);
    }
  }

  let result = '_';
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      result = array[i];
      break;
    }
  }
  return result;
}

console.log(firstNotRepeatingCharacter("abacabad")); // c
