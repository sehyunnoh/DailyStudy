const n = 20;
const d = 10;

const a = [
  41,
  73,
  89,
  7,
  10,
  1,
  59,
  58,
  84,
  77,
  77,
  97,
  58,
  1,
  86,
  58,
  26,
  10,
  86,
  51
];

let result = leftRotation(a, d, n);
console.log(result);

function leftRotation(result, rotate, number) {
  let index = rotate % number;
  let tmp = [];
  tmp = result.splice(index, number);
  let tmp2 = result.splice(0, index);
  for (let i = 0; i < tmp2.length; i++) {
    tmp.push(tmp2[i]);
  }

  let returnStr = "";
  tmp.forEach(element => {
    returnStr += element + " ";
  });

  return returnStr;
}
