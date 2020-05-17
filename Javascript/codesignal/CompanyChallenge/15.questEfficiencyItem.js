function questEfficiencyItem(h, points, timeForQuests) {
  let arr = [];
  for (let i = 0; i < h.length; i++) {
    let obj = {};
    obj["hour"] = h[i];
    obj["point"] = points[i];
    obj["rate"] = points[i] / h[i];
    arr.push(obj);
  }
  let max = 0;
  arr.sort((a, b) => b.rate - a.rate);
  let time = timeForQuests;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (time < arr[i].hour) continue;
    time -= arr[i].hour;
    result += arr[i].point;
  }
  if (max < result) max = result;

  arr.sort((a, b) => b.point - a.point);
  time = timeForQuests;
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (time < arr[i].hour) continue;
    time -= arr[i].hour;
    result += arr[i].point;
  }
  if (max < result) max = result;
  return max;
}

// console.log(questEfficiencyItem([1, 4, 2], [2, 3, 2], 4)); // 4
console.log(questEfficiencyItem([1, 4, 2], [2, 5, 2], 4)); // 5
// console.log(
//   questEfficiencyItem(
//     [2, 5, 3, 8, 12, 2, 3, 1, 5, 4, 2, 10, 9, 6],
//     [12, 24, 32, 1, 2, 21, 18, 17, 5, 6, 8, 10, 11, 14],
//     41
//   )
// ); // 163
