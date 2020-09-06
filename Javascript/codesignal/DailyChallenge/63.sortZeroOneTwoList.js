function sortZeroOneTwoList(l) {
  a = [];
  L = l;
  while (l) {
    a.push(l.value);
    l = l.next;
  }
  l = L;
  a.sort((a, b) => a - b).map((x) => ((l.value = x), (l = l.next)));

  return L;
}

console.log(sortZeroOneTwoList([1, 3, 2]));