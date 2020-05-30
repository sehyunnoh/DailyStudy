function ratingThreshold(threshold, ratings) {
  let result = [];
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].reduce((a, b) => a + b) / ratings[i].length < threshold)
      result.push(i);
  }
  return result;
}

// console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
// console.log(
//   ratingThreshold(1.3, [
//     [1, 1, 2],
//     [1, 2, 2],
//     [1, 4],
//   ])
// );

// console.log(ratingThreshold(5, [[2,4,5,2,1,3,4],
//     [3,4,5,5,5,3,2],
//     [1,1,1,2,1,1]]));

console.log(
  ratingThreshold(3.8, [[4, 4, 3, 4, 4], [2, 4, 3, 3, 2, 2, 1], [5, 5, 3], [3]])
);
