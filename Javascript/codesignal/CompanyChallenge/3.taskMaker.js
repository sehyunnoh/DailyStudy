function taskMaker(source, challengeId) {
  let pos = 0;
  let str = "";
  for (let i = 0; i < source.length; i++) {
    if (source[i].includes(`//DB ${challengeId}//`)) {
      pos = i;
      loc = source[i].indexOf("//DB");
      let blank = "";
      while (loc--) {
        blank += " ";
      }
      str = blank + source[i].split(`//DB ${challengeId}//`)[1];
      break;
    }
  }

  let index = 0;
  for (let i = pos - 1; i >= 0; i--) {
    if (!source[i].includes("//DB")) {
      index = i;
      break;
    }
  }

  source[index] = str;
  return source.filter((x) => !x.includes("//DB"));
}

console.log(
  taskMaker(
    [
      "ans = 0",
      "for i in range(n):",
      "    for j in range(n):",
      "    //DB 3//for j in range(1, n):",
      "    //DB 2//for j in range(n + 1):",
      "        ans += 1",
      "return ans",
    ],
    3
  )
);

[
  "ans = 0",
  "for i in range(n):",
  "    for j in range(1, n):",
  "        ans += 1",
  "return ans",
];
