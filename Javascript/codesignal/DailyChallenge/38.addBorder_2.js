function addBorder(p) {
  let w = p[0].length + 2;
  let result = [];
  let tmp = "";
  while (w--) {
    tmp += "*";
  }
  result.push(tmp);
  for (let i = 0; i < p.length; i++) {
    result.push(`*${p[i]}*`);
  }
  result.push(tmp);
  return result;
}

console.log(addBorder(["abcde", "fghij", "klmno", "pqrst", "uvwxy"]));
