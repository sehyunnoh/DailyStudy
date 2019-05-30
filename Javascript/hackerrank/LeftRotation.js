const n = 7;
const d = 12;

const a = [1, 3, 5, 7, 9];

let result = leftRotation(a, d, n);
console.log(result);

function leftRotation(result, rotate, number) {
  while (rotate > 0) {
    let index;
    for (let i = 0; i < result.length; i++) {
      if (result[i] == number) {
        index = i;
        break;
      }
    }
    let tmp = [];
    if (index == 0) {
      tmp = result.slice(1, result.length);
      tmp.push(number);
    } else {
      for (let i = 0; i < index - 1; i++) {
        tmp.push(result[i]);
      }
      tmp.push(number);
      for (let i = index - 1; i < result.length; i++) {
        if (result[i] != number) {
          tmp.push(result[i]);
        }
      }
    }

    result = tmp;
    rotate--;
  }

  let returnStr = "";
  result.forEach(element => {
    returnStr += element + " ";
  });

  return returnStr;
}
