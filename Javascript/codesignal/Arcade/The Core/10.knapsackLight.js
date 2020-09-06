function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let vArr = [],
    wArr = [];
  let result = 0;
  if (value1 >= value2) {
    vArr.push(value1, value2);
    wArr.push(weight1, weight2);
  } else {
    vArr.push(value2, value1);
    wArr.push(weight2, weight1);
  }

  let w = maxW;
  for (let i = 0; i < 2; i++) {
    if (wArr[i] <= w) {
      result += vArr[i];
      w -= wArr[i];
    }
  }

  return result;
}

console.log(knapsackLight(10, 5, 6, 4, 8)); //10
