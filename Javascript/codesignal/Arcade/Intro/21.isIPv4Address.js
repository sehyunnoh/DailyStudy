function isIPv4Address(str) {
  let arr = str.split(".");
  let i = 3;
  do {
    if (arr.length != 4) return false;
    if (arr[i] == "") return false;
    let tmp = Number(arr[i]);
    if (isNaN(tmp)) return false;
    if (tmp < 0 || tmp > 255) return false;
  } while (i--);
  return true;
}

console.log(isIPv4Address(".254.255.")); //false;
// console.log(isIPv4Address("172.16.254.1")); //true;
// console.log(isIPv4Address("1.1.1.1a")); //false
