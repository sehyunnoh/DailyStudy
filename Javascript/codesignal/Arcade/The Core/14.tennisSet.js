function tennisSet(s1, s2) {
  if (s1 < 5) {
    if (s2 === 6) {
      return true;
    } else {
      return false;
    }
  } else if (s1 === 5) {
    if (s2 === 7) {
      return true;
    } else {
      return false;
    }
  } else if (s1 === 6) {
    if (s2 === 7 || s2 < 5) {
      return true;
    } else {
      return false;
    }
  } else if(s1 === 7){
      if(s2 === 5 || s2 === 6){
          return true;
      }else{
          return false;
      }
  } else{
      return false;
  }
}

console.log(tennisSet(3, 6)); //true
console.log(tennisSet(8, 5)); //false
