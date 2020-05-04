function salesLeadsScore(names, time, netValue, isOnVacation) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    if (isOnVacation[i]) continue;
    let obj = {};
    obj["name"] = names[i];
    obj["score"] = (time[i] * netValue[i]);
    arr.push(obj);
  }

  arr.sort((a, b) => {
    if (a.score == b.score) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
    }
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
  });
  return arr.map((x) => x.name);
}

// console.log(
//   salesLeadsScore(
//     ["lead1", "lead2", "lead3", "lead4", "lead5"],
//     [250, 300, 250, 260, 310],
//     [1000, 800, 1100, 1200, 1000],
//     [true, false, true, false, false]
//   )
// );

// ["lead4",
//  "lead5",
//  "lead2"]

// console.log(
//   salesLeadsScore(
//     ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
//     [1, 2, 3, 4, 5, 6, 8, 10, 12],
//     [120, 60, 40, 30, 24, 20, 15, 12, 10],
//     [false, true, false, false, true, false, false, false, false]
//   )
// );

// console.log(
//   salesLeadsScore(
//     [
//       "abcd",
//       "dba",
//       "abc",
//       "abcdd",
//       "abcc",
//       "abd",
//       "abcde",
//       "abcda",
//       "abca",
//       "abcbc",
//       "bba",
//     ],
//     [20, 20, 20, 20, 10, 20, 10, 10, 20, 20, 10],
//     [1000, 1200, 1000, 1000, 1000, 1200, 1200, 1200, 1000, 1000, 1100],
//     [false, false, false, false, false, true, false, false, true, false, false]
//   )
// );

console.log(
  salesLeadsScore(
    ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
    [1, 2, 3, 4, 5, 6, 8, 10, 12],
    [120, 60, 40, 30, 24, 20, 15, 12, 10],
    [false, true, false, false, true, false, false, false, false]
  )
);
