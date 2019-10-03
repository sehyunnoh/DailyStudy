function almostIncreasingSequence(sequence) {
  let result = true;
  let a=sequence;
  if(a[0] >= a[1]){
      for(let i=1; i<a.length-1;i++){
        if(a[i] >= a[i+1]){
          result=false;
          break;
        }
      }
  }else{
    cnt = 0;
    for(let i=0; i<a.length-1;i++){
      if(a[i]>=a[i+1]){
          cnt++;
          if(a[i-1] >= a[i+1]){
            result=false;
            break;
          }
          if(cnt>=2){
            result=false;
            break;
          }
      }
    }
  }

  if(result==false){
    result=true;
    cnt = 0;
    for(let i=0; i<a.length-1;i++){
      if(a[i]>=a[i+1]){
          cnt++;
          if(i+2<=a.length-1){
            if(a[i]>= a[i+2]){
              result=false;
              break;
            }
          }
          i++;
          if(cnt>=2){
            result=false;
            break;
          }
      }
    }
  }

  return result;
}

console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6])); // true
console.log(almostIncreasingSequence([3, 5, 67, 98, 3])); // true
console.log(almostIncreasingSequence([1, 2, 5, 3, 5])); // true
console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6])); // true
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));    // true
console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30])); // false
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6])); // false
console.log(almostIncreasingSequence([1, 2, 1, 2])); // false
