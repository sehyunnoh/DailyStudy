function questionCorrectionBot(question) {
  let arr = question.split(" ").filter((x) => x !== "");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(",")) {
      if (arr[i][0] === ",") {
        let tmp = result.pop();
        result.push(`${tmp},`);
      }
      if (arr[i].length === 1) {
        continue;
      } else {
        let tmp = arr[i].split(",").filter((x) => x !== "");
        tmp.map((x, index) => {
          if (tmp.length - 1 === index) {
            result.push(x);
          } else {
            result.push(x + ",");
          }
        });
      }

      let tmp = arr[i].split("").pop();
      if (tmp === ",") {
        let tmp = result.pop();
        result.push(`${tmp},`);
      }
      continue;
    }
    result.push(arr[i]);
  }

  result[0] = result[0][0].toUpperCase() + result[0].slice(1);
  result[result.length - 1] = result[result.length - 1]
    .split("")
    .filter((x) => x !== "?")
    .join("");
  let tmp = result.pop();
  if (tmp[tmp.length - 1] == ",") {
    result.push(tmp, "?");
  } else {
    result.push(tmp + "?");
  }
  return result.join(" ");
}

// console.log(
//   questionCorrectionBot(" this  isn't   a     relevant question , is it??? ")
// );
console.log(questionCorrectionBot("questionword ,anotherquestionword,"));
console.log(questionCorrectionBot("  Is,it    correct    ,    question"));
console.log(questionCorrectionBot("a,b,c,d,e "));
// "A, b, c, d, e?"
