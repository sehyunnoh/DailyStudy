function reflectString(inputString) {
  let result = "";
  let array = inputString.split("");
  for (let i = 0; i < array.length; i++) {
    result += String.fromCharCode(219 - array[i].charCodeAt(0));
  }
  return result;
}

console.log("name");
