function replaceAllDigitsRegExp(input) {
  let arr = input.split("");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += isNaN(arr[i]) ? arr[i] : arr[i] == " " ? " " : "#";
  }
  return result;
}

console.log(replaceAllDigitsRegExp("There are 12 points"));
