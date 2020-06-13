function commonCharacterCount(s1, s2) {
  let result = 0;
  for (let i = 0; i < ~~s1.length; i++) {
    let index = s2.indexOf(s1[i]);
    if (index !== -1) {
      result++;
      s2 = s2.substr(0, index) + s2.substr(index + 1, s2.length);
    }
  }
  return result;
}

let s1 = "aabcc";
let s2 = "adcaa";

console.log(commonCharacterCount(s1, s2));
