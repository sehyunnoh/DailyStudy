function reversedSumOfDigits(p, n) {
  let result = "";
  if (p == 0) {
    if (n == 1) {
      return (result += 0);
    } else {
      return (result += -1);
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 9; j >= 0; j--) {
      if (p - j > 0) {
        p = p - j;
        result += j;
        break;
      }
    }
  }

  if (p > 9) {
    return (-1).toString(10);
  } else {
    result += p;
    return result
      .split("")
      .reverse()
      .join("");
  }
}

console.log(reversedSumOfDigits(2, 5));
