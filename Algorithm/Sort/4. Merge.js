function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const m = ~~(arr.length / 2);
  const l = arr.slice(0, m);
  const r = arr.slice(m);

  return merge(mergeSort(l), mergeSort(r));
}

function merge(left, right) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 7, 2, 1, 4, 10, 8]));
