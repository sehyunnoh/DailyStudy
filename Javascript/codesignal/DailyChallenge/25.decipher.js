function decipher(cipher) {
  let result = "";
  let array = cipher.split("");
  for (let i = 0; i < array.length; i++) {
    let tmp = "";
    if (array[i] == 1) {
      tmp = array[i] + array[i + 1] + array[i + 2];
      i += 2;
    } else if (array[i] == 9) {
      tmp = array[i] + array[i + 1];
      i += 1;
    }
    result += String.fromCharCode(parseInt(tmp, 10));
  }
  return result;
}

console.log(decipher("10197115121")); // easy
