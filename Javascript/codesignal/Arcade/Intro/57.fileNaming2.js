function fileNaming(names) {
  for (let i = 1; i < names.length; i++) {
    let index = 0;
    let checkNew = "Y";
    while (index < i) {
      if (names[i] === names[index]) {
        if (checkNew === "Y") {
          names[i] = names[i] + "(1)";
          checkNew = "N";
        } else {
          let num =
            +names[i].substring(
              names[i].lastIndexOf("(") + 1,
              names[i].lastIndexOf(")")
            ) + 1;
          names[i] =
            names[i].substring(0, names[i].lastIndexOf("(") + 1) + num + ")";
        }
        index = 0;
      } else {
        index++;
      }
    }
  }
  return names;
}

console.log(
  fileNaming([
    "dd",
    "dd(1)",
    "dd(2)",
    "dd",
    "dd(1)",
    "dd(1)(2)",
    "dd(1)(1)",
    "dd",
    "dd(1)",
  ])
);

// console.log(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]));

// console.log(
//   fileNaming(["name", "name", "name(1)", "name(3)", "name(2)", "name(2)"])
// );
// console.log(
//   fileNaming(["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"])
// );

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
