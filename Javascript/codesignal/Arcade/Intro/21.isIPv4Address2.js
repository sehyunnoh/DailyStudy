function isIPv4Address(str) {
  let arr = str.split(".");
  if (arr.length !== 4) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") return false;
    if (isNaN(+arr[i])) return false;
    if (arr[i].length !== ("" + +arr[i]).length) return false;
    if (+arr[i] < 0 || +arr[i] > 255) return false;
  }
  return true;
}

// console.log(isIPv4Address(".254.255.")); //false;
// console.log(isIPv4Address("172.16.254.1")); //true;
// console.log(isIPv4Address("1.1.1.1a")); //false
console.log(isIPv4Address("01.233.161.131")); //false
