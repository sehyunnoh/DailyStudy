function insertDashes(input) {
  let array = input.split(" ");
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i][0];
    for (let j = 1; j < array[i].length; j++) {
      result += "-" + array[i][j];
    }
    result += " ";
  }
  return result.slice(0,-1);
}

console.log(insertDashes("aba caba")); //"a-b-a c-a-b-a"
