function fileNaming(names) {
  for (let i = 1; i < names.length; i++) {
    let first = true;
    for (let j = 0; j < i; j++) {
      if (names[i] === names[j]) {
        if (first) {
          names[i] = names[i] + "(1)";
          first = false;
        } else {
          let findex = names[i].lastIndexOf('(')+1;
          let lindex = names[i].length-1;
          let newNum = +names[i].slice(findex, lindex)  + 1;
          names[i] = names[i].slice(0,findex)+ newNum + ')';
        }
        j = -1;
      }
    }
  }
  return names;
}

// console.log(
//   fileNaming(["name", "name", "name(1)", "name(3)", "name(2)", "name(2)"])
// );
console.log(
  fileNaming(["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"])
);

// ["name",
//  "name(1)",
//  "name(1)(1)",
//  "name(3)",
//  "name(2)",
//  "name(2)(1)"]

// ["a(1)",
//  "a(6)",
//  "a",
//  "a(2)",
//  "a(3)",
//  "a(4)",
//  "a(5)",
//  "a(7)",
//  "a(8)",
//  "a(9)",
//  "a(10)",
//  "a(11)"]
