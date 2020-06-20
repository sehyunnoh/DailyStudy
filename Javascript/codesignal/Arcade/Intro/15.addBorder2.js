function addBorder(p) {
  let result = p.map(x=>`*${x}*`);
  let star = result[0].split('').map(x=>'*').join('');
  result.unshift(star);
  result.push(star);
  return result;
}

console.log(addBorder(["abc", "ded"]));

// ["*****",
//  "*abc*",
//  "*ded*",
//  "*****"]
