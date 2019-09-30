function waterTubes(water, flowPerMinute) {
  let result = 0;
  for (let i = 0; i < water.length; i++) {
    let tmp = Math.ceil(water[i] / flowPerMinute[i]);
    if (tmp > result) result = tmp;
  }

  return result;
}

console.log(waterTubes([1, 2, 5], [1, 1, 2]));
