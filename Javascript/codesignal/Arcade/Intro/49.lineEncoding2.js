function lineEncoding(s) {
  let index = 0;
  let loc = [0];
  let num = [1];

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      num[index]++;
    } else {
      loc.push(i);
      num.push(1);
      index++;
    }
  }

  let result = "";
  for (let i = 0; i < loc.length; i++) {
    if (num[i] !== 1) result += num[i];
    result += s[loc[i]];
  }
  return result;
}

console.log(lineEncoding("aabbbc")); // 2a3bc
console.log(lineEncoding("abbcabb")) // a2bca2b
console.log(lineEncoding("ccccccccccccccc")) // 15c
