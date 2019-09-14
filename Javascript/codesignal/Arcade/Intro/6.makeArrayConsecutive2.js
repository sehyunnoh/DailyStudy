function makeArrayConsecutive2(statues) {
  let t = statues;
  t.sort(function(a,b){return a-b});
  return t[t.length - 1] - t[0] - 1 - (t.length - 2);
}

console.log(makeArrayConsecutive2([4, 2, 7, 18]));
