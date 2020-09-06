function tennisSet(s1, s2) {
  let arr = [];
  s1 >= s2 ? arr.push(s1, s2) : arr.push(s2, s1);
  if (arr[0] === 6) {
    return [1, 2, 3, 4].includes(arr[1]);
  } else if (arr[0] === 7) {
    return [5, 6].includes(arr[1]);
  }
  return false;
}

console.log(tennisSet(3, 6)); //true
console.log(tennisSet(8, 5)); //false
