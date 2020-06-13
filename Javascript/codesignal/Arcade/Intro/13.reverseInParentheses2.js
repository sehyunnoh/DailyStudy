function reverseInParentheses(str) {
  while(1){
    let s=0, exist = false;
    for(let i=0; i<str.length; i++){
      if(str[i] == '(') {
        s = i; 
        exist = true};
      if(str[i] == ')') {
        str = str.slice(0,s) + str.slice(s+1, i).split("").reverse().join('') + str.slice(i+1);
        break;
      }
    }
    if(!exist) break;
  }
  return str;
}

// console.log(reverseInParentheses("a(bcd)e")); // "foorabbazmilb"
// console.log(reverseInParentheses("foo(bar)baz(blim)")); // "foorabbazmilb"
// console.log(reverseInParentheses("foo(bar(baz))blim")); // "foobazrabblim"
console.log(reverseInParentheses("(abc)d(efg)")); // "foobazrabblim"
