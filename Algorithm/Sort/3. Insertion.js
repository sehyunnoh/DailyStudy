function Insertion(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(Insertion([3, 7, 2, 1, 4, 10, 8]));
