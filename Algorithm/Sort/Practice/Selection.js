function Selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  return arr;
}

console.log(Selection([4, 6, 1, 3, 2, 5]));
