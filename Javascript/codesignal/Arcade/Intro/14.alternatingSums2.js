function alternatingSums(a) {
  let result = [0, 0];
  a.forEach((x, i) => (i % 2 === 0 ? (result[0] += x) : (result[1] += x)));
  return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70])); // [180, 105]
