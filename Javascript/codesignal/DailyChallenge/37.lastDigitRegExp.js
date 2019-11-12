function lastDigitRegExp(inputString) {
  for (let i = inputString.length - 1; i >= 0; i--) {
    if (!isNaN(inputString[i])) {
      return Number(inputString[i]);
    }
  }
}

console.log(lastDigitRegExp("0ss"));
