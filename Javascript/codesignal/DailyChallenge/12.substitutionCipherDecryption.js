function substitutionCipherDecryption(contents, signature, encryptedSignature) {
  let cs = convertToNum(signature);
  let ce = convertToNum(encryptedSignature);

  let array = new Array(26).fill(-1);
  for (let i = 0; i < cs.length; i++) {
    array[cs[i]] = ce[i];
  }

  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == -1) {
      while (ce.includes(num)) {
        num++;
      }
      array[i] = num++;
    }
  }

  let cc = convertToNum(contents);
  let tmp = [];
  for (let i = 0; i < cc.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (cc[i] == array[j]) {
        tmp.push(j);
      }
    }
  }

  let result = "";
  tmp.forEach(function(v) {
    result += String.fromCharCode(v + 97);
  });

  return result;
}

function convertToNum(str) {
  let array = str.split("");
  return array.map(a => a.charCodeAt() - 97);
}

console.log(substitutionCipherDecryption("issomtoqmvjts", "alice", "james"));
