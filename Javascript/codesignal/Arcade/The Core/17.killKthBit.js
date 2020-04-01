function killKthBit(n, k) {
  let binary = n.toString(2).split("");
  binary[binary.length - k] = 0;
  return parseInt(binary.join(""), 2);
}

console.log(killKthBit(37, 3)); // 33


// n = 37, k = 3;
// 37 <=> 100101
// 1 <=> 000001
// 1 << (k - 1) <=> 1 << 2 <=> 000100
// ~(1 << (k-1)) <=> 111011
// n&~(1<<(k-1)) <=> 100101 & 111011 = 100001