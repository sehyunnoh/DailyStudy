let arr = [3, 7, 2, 1, 4, 10, 8];


// 앞에서 부터 채워짐
function Selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    let tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  return arr;
}

console.log(Selection(arr));
