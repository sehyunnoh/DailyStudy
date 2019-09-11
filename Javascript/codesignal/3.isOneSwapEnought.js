// Given a string, check if a palindrome can be obtained from it by at most one swap of some pair of characters.

function isOneSwapEnough(inputString) {
  for (var i = 0; i < Math.floor(inputString.length / 2); i++) {
    if (inputString[i] == inputString[inputString.length - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isOneSwapEnough("abab")); //true
