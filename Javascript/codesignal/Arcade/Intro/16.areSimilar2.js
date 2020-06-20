function areSimilar(a, b) {
  let result = [];
  if (JSON.stringify(a) == JSON.stringify(b)) return true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) result.push(a[i], b[i]);
    if (result.length > 4) return false;
  }
  if (result.length !== 4) return false;
  return result[0] === result[3] && result[1] === result[2] ? true : false;
}

// console.log(areSimilar([2, 3, 9], [10, 3, 2])); //false
// console.log(areSimilar([1, 2, 3], [2, 1, 3])); //true
// console.log(areSimilar([4, 6, 3], [3, 4, 6])); //false
console.log(areSimilar([1, 2, 3], [1, 2, 3])); //true
