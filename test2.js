function palindromeRearranging(inputString) {
  var charArray = inputString.split("");

  var letter = {};
  for (var i = 0; i < charArray.length; i++) {
    if (!letter.hasOwnProperty(charArray[i])) {
      letter[charArray[i]] = 1;
    } else {
      letter[charArray[i]]++;
    }
  }
  var oddCount = 0;
  for (val in letter) {
    if (letter[val] % 2 != 0) {
      oddCount++;
    }
  }
  return oddCount > 1 ? false : true;
}

palindromeRearranging("aaaabbbb");
