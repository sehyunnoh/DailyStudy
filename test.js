function perfectCheck(num) {
  let arr = [];
  let lastIndex = num;
  for (let i = 2; i < lastIndex; i++) {
    if (num % i == 0) {
      let tmp = num/i;
      arr.push(i, tmp);
      if(tmp < lastIndex) lastIndex = tmp;      
    }
  }
  let result = 0;
  if (arr.length > 0) result = arr.reduce((a, b) => a + b);
  return result + 1 === num ? true : false;
}

function getPerfectNumber(num) {
  let checkNum = 6;
  let result = [];
  while (1) {
    if (perfectCheck(checkNum)) {
      result.push(checkNum);
    }
    checkNum++;
    if (result.length === num) break;
  }
  return result;
}

// console.log(perfectCheck(33550336));
console.log(getPerfectNumber(5));
