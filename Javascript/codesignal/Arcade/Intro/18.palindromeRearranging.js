function palindromeRearranging(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      let tmp = map.get(str[i]);
      map.set(str[i], ++tmp);
    } else {
      map.set(str[i], 1);
    }
  }

  let odd = 0;
  for (let cnt of map.values()) {
    if (cnt % 2 != 0) odd++;
    if (odd > 1) return false;
  }
  return true;
}

// console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")); // false;
console.log(palindromeRearranging("aabb")); // true;
