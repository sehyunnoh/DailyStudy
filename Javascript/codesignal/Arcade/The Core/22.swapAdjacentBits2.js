function swapAdjacentBits(n) {
  let arr = n.toString(2).split("");
  if (arr.length % 2 !== 0) arr.unshift(0);

  for (let i = 0; i < arr.length; i += 2) {
    let tmp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = tmp;
  }
  return parseInt(arr.join(""), 2);
}

console.log(swapAdjacentBits(13)); //14
