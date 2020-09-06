function isBeautifulString(str) {
  let arr = new Array(26).fill(0);
  let tmp = str.split("").map((x) => x.charCodeAt(0) - 97);
  for (let i = 0; i < tmp.length; i++) {
    arr[tmp[i]]++;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true;
}

console.log(isBeautifulString("bbbaacdafe"));
