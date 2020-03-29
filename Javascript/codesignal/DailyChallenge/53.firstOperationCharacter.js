function firstOperationCharacter(expr) {
  let depthLevel = 0;
  let index = [];
  let compare = [];
  for (let i = 0; i < expr.length; i++) {
    let val = expr[i];
    if (val === "(") {
      depthLevel++;
      continue;
    }
    if (val === ")") {
      depthLevel--;
      continue;
    }
    if (val === "+" || val === "-") {
      index.push(i);
      compare.push(+("" + depthLevel + 1));
    }
    if (val === "*" || val === "/") {
      index.push(i);
      compare.push(+("" + depthLevel + 2));
    }
  }

  let max = 0;
  let result = 0;
  for (let i = 0; i < compare.length; i++) {
    if (compare[i] > max) {
      max = compare[i];
      result = index[i];
    }
  }
  return result;
}

// console.log(firstOperationCharacter("((2 + 2) * 2) * 3 + (2 + (2 * 2))")); // 28
console.log(firstOperationCharacter("(2 + 2) * 2")); // 3
