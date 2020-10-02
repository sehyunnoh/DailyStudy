function additionWithoutCarrying(p1, p2) {
  let s1 = "" + p1;
  let s2 = "" + p2;
  s1.length > s2.length ? s2=s2.padStart(s1.length, 0) : s1=s1.padStart(s2.length, 0);
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    result += (+s1[i] + +s2[i]) % 10;
  }
  return +result;
}

console.log(additionWithoutCarrying(456, 1734)); //1180
