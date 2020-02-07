function isMAC48Address(input) {
  let arr = input.split("-");
  if (arr.length !== 6) return false;

  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split("");
    if(arr2.length !== 2) return false;
    for (let j = 0; j < arr2.length; j++) {
      let tmp = arr2[j].charCodeAt(0);

      if ((+arr2[j] >= 0 && +arr2[j] <= 9) || (tmp >= 65 && tmp <= 70)) {
      } else {
        return false;
      }
    }
  }
  return true;
}

// console.log(isMAC48Address("00-1B-63-84-45-E6")); // true
console.log(isMAC48Address("02-03-04-05-06-07-")); // false
