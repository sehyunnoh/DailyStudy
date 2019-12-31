var gcd = function(x, y) {
  var tmp,
    tmpX = x,
    tmpY = y;

  while (tmpY) {
    tmp = tmpX % tmpY;
    tmpX = tmpY;
    tmpY = tmp;
  }
  return (x * y) / tmpX;
};

function divisorsSubset(s, n) {
  var nums = [],
    i = 0,
    result = 0,
    leng = s.length;

  if (s.length > 1) {
    for (; i < leng; i++) {
      nums.push(s[i]);
    }
  } else {
    nums = s[0];
  }

  for (i = 1; i < nums.length; i++) {
    result = nums[i] = gcd(nums[i - 1], nums[i]);
  }

  return Math.floor(n / result);
}

console.log(divisorsSubset([12, 2, 4, 6], 143)); //11
