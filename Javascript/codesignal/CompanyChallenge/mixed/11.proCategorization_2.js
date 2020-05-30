function proCategorization(pros, preferences) {
  tem = [];
  res = [];
  preferences.map((d, i) => d.map((key) => tem.push([[key], [pros[i]]])));
  tem.sort((a, b) => a[0][0].localeCompare(b[0][0]));
  res.push(tem[0]);
  for (let i = 0; i < tem.length - 1; i++) {
    tem[i][0][0] === tem[i + 1][0][0]
      ? res[res.length - 1][1].push(tem[i + 1][1][0])
      : res.push(tem[i + 1]);
  }
  return res;
}

console.log(
  proCategorization(
    ["Jack", "Leon", "Maria"],
    [
      ["Computer repair", "Handyman", "House cleaning"],
      ["Computer lessons", "Computer repair", "Data recovery service"],
      ["Computer lessons", "House cleaning"],
    ]
  )
);
