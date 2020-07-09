function findTheNumbers(a) {
  a.sort((a, b) => a - b);
  let obj = {};
  a.forEach((x) => {
    if (x in obj) {
      obj[x]++;
    } else {
      obj[x] = 1;
    }
  });

  let result = [];
  for (let [key, value] of Object.entries(obj)) {
    if (value < 2) result.push(+key);
  }
  return result;
}

console.log(findTheNumbers([4, 5, 6, 5, 3, 4])); //[3,6]
