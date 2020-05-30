function proCategorization(pro, pre) {
  let obj = {};
  for (let i = 0; i < pre.length; i++) {
    for (let j = 0; j < pre[i].length; j++) {
      let key = pre[i][j];
      if (key in obj) {
        obj[key] = [...obj[key], pro[i]].sort();
      } else {
        obj[key] = [pro[i]];
      }
    }
  }

  let sorted = Object.keys(obj)
    .sort()
    .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});

  let result = [];
  for (let [key, value] of Object.entries(sorted)) {
    result.push([[key], value]);
  }

  return result;
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
