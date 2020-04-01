function arrayPacking(a) {
  let arr = a.map(x => x.toString(2));
  let binary = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    binary += arr[i].padStart(8,0);
  }
  return parseInt(binary, 2);
}

console.log(arrayPacking([24, 85, 0])); //21784