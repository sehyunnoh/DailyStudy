function areSimilar(a, b) {
  let arrayA = [];
  let arrayB = [];
  let cnt = 0;
  for(let i=0; i<a.length; i++){
    if(a[i] != b[i]){
      arrayA.push(a[i]);
      arrayB.push(b[i]);
      cnt++;
    }
    if(cnt>2) return false;
  }

  if(!(arrayA[0]==arrayB[1] && arrayA[1] == arrayB[0])) return false;
  return true;
}

console.log(areSimilar([2, 3, 9], [10, 3, 2])); //false
