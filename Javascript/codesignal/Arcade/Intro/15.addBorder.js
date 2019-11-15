function addBorder(p) {
  let w = p[0].length + 2;
  let star = "";
  while (w--) {
    star += "*";
  }
  let result = [];
  result.push(star);
  for (let i = 0; i < p.length; i++) {
    result.push(`*${p[i]}*`);
  }
  result.push(star);
  return result;
}

console.log(addBorder(["abc", "ded"]));

// ["*****",
//  "*abc*",
//  "*ded*",
//  "*****"]
