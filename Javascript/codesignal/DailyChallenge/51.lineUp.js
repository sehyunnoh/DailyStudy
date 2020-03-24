function lineUp(commands) {
  let result = 0;
  let acc = 0;
  let arr = [];
  if (commands.length === 0) return 0;
  if (commands[0] === "A") {
    arr.push(2);
    acc += 2;
  } else {
    arr.push(1);
    acc += 1;
  }

  for (let i = 1; i < commands.length; i++) {
    if (commands[i] === "A") {
      acc += 2;
      arr.push(acc);
      continue;
    }
    if (commands[i - 1] === commands[i]) {
      acc += 1;
      arr.push(acc);
    } else {
      acc -= 1;
      arr.push(acc);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) result++;
  }
  return result;
}

console.log(lineUp("AALAAALARAR"));
