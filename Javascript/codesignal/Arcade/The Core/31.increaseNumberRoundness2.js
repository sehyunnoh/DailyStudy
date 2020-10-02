function increaseNumberRoundness(n) {
  return (''+n).replace(/0/g,' ').trim().indexOf(' ') < 0;
}


console.log(increaseNumberRoundness(101000)); // false
