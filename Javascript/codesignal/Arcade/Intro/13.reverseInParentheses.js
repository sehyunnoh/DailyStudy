function reverseInParentheses(str) {
  while (true) {
    let check = 0;
    let exist = false;
    let s = 0,
      e = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == "(") {
        check = 1;
        s = i;
        exist = true;
      }
      if (str.charAt(i) == ")") {
        check--;
        e = i;
        exist = true;
      }
      if (exist == true && check == 0) {
        //a.substr(0,3)+a.substr(4,3).split("").reverse().join("")+a.substr(8);
        str =
          str.substr(0, s) +
          str.substr(s + 1, e - s - 1).split("").reverse().join("") +
          str.substr(e + 1);
        break;
      }
    }
    if (exist == false) break;
  }
  return str;
}

console.log(reverseInParentheses("foo(bar)baz(blim)")); // "foorabbazmilb"
console.log(reverseInParentheses("foo(bar(baz))blim")); // "foobazrabblim"
