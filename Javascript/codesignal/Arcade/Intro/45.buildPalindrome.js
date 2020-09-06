function buildPalindrome(st) {
  let lastC = st[st.length - 1];
  let loc = [];
  for (let i = 0; i < st.length - 1; i++) {
    if (st[i] === lastC) loc.push(i);
  }

  if (loc.length === 0) {
    return (
      st + st.slice(0, st.length - 1).split("").reverse().join(""));
  } else {
    for (let i = 0; i < loc.length; i++) {
      let result = st + st.slice(0, loc[i]).split("").reverse().join("");
      let check = true;
      for (let j = 0; j < Math.floor(result.length / 2); j++) {
        if (result[j] !== result[result.length - 1 - j]) {
          check = false;
          break;
        }
      }
      if (check) return result;
    }
    
    return (st + st.slice(0, st.length - 1).split("").reverse().join(""));
  }
}

console.log(buildPalindrome('abcdc')) // abcdcba
// console.log(buildPalindrome("abaa")); // abaaba
// console.log(buildPalindrome('ababab')) // abababa
// console.log(buildPalindrome('abc')) // abcba
// console.log(buildPalindrome("abcabc")); // abcabcbacba
