function almostIncreasingSequence(sequence) {
  let result = true;
  let a=sequence;
  // 맨 앞에 숫자를 뺀다고 가정
  if(a[0] >= a[1]){
      for(let i=1; i<a.length-1;i++){
        if(a[i] >= a[i+1]){
          result=false;
          break;
        }
      }
  }else{
    cnt = 0;
    for(let i=1; i<a.length-1;i++){
      // 두번째 숫자부터 오른쪽 숫자와 비교해서 왼쪽이 크면 count 1 올림
      if(a[i]>=a[i+1]){
          cnt++;
          // 연속으로 숫자 작아지면 false
          if(a[i-1] >= a[i+1]){
            result=false;
            break;
          }
          // count 2 이상이면 false
          if(cnt>=2){
            result=false;
            break;
          }
      }
    }
  }

  // 예외처리 
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
