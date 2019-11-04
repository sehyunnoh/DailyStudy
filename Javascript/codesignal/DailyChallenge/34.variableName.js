function variableName(name) {
  if (!isNaN(name.substring(0, 1)) || name != name.match(/[a-zA-Z0-9_]+/)[0])
    return false;
  return true;
}

console.log(variableName("var_1__Int")); // true
console.log(variableName("qq-q")); // false
console.log(variableName("2w2")); // false
