function commonCharacterCount(s1, s2) {
  let arr1 = s1.split("").sort();
  let arr2 = s2.split("").sort();
  let result = 0;
  while (true) {
    if (arr1.length == 0 || arr2.length == 0) break;
    if (arr1[0] == arr2[0]) {
      result++;
      arr1.shift();
      arr2.shift();
    } else if (arr1[0] > arr2[0]) {
      arr2.shift();
    } else {
      arr1.shift();
    }
  }
  return result;
}

let s1 = "aabcc";
let s2 = "adcaa";

console.log(commonCharacterCount(s1, s2));
