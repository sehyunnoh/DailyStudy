function rangeBitCount(a, b) {
  let binary = [];
  for (let i = a; i <= b; i++) {
    binary.push(i.toString(2));
  }
  let result = 0;
  for (let i = 0; i < binary.length; i++) {
    result += getNum(binary[i]);
  }
  return result;
}

const getNum = str => {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += +str[i];
  }
  return num;
};

console.log(rangeBitCount(2, 7)); // 11
