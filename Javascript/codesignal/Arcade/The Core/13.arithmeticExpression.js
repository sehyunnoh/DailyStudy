function arithmeticExpression(a, b, c) {
  let arr = [a + b, a - b, a * b, a / b];
  return arr.includes(c);
}

console.log(arithmeticExpression(2, 3, 5));
