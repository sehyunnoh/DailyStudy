function additionWithoutCarrying(param1, param2) {
  let arr1 = ("" + param1).split("").reverse();
  let arr2 = ("" + param2).split("").reverse();

  let cnt = arr1.length > arr2.length ? arr1.length : arr2.length;

  let result = [];
  for (let i = 0; i < cnt; i++) {
    result.push((+(arr1[i]||0) + +(arr2[i]||0)) % 10);
  }
  return +result.reverse().join("");
}

console.log(additionWithoutCarrying(456, 1734)); // 1180
