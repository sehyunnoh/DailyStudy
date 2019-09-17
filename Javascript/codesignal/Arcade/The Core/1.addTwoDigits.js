function addTwoDigits(n) {
  let array = n.toString().split("");
  let result = 0;
  array.forEach(function(v) {
    result += Number(v);
  });
  return result;
}

console.log(addTwoDigits(29));
