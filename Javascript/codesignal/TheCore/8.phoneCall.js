function phoneCall(min1, min2_10, min11, s) {
  let result = 0;
  let i = 0;

  while (result <= s) {
    i++;
    if (i == 1) result += min1;
    if (i >= 2 && i <= 10) result += min2_10;
    if (i > 10) result += min11;
  }

  return --i;
}

console.log(phoneCall(3, 1, 2, 20)); // 14
console.log(phoneCall(2, 2, 1, 24)); // 14
console.log(phoneCall(10, 1, 2, 22)); // 11
