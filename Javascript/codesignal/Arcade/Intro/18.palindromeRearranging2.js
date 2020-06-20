function palindromeRearranging(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  let cnt = 0;
  for (let [key, value] of Object.entries(obj)) {
    if (value % 2 !== 0) cnt++;
    if (cnt > 1) return false;
  }
  return true;
}

// console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")); // false;
console.log(palindromeRearranging("aabb")); // true;
