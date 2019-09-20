function firstReverseTry(arr) {
  if(arr.length == 0) return [];
  let tmp = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = tmp;
  return arr;
}


console.log(firstReverseTry([1, 2, 3, 4, 5]));
