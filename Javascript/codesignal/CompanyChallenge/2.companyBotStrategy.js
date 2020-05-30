function companyBotStrategy(trainingData) {
  let sum = 0,
    cnt = 0;
  for (let i = 0; i < trainingData.length; i++) {
    if (trainingData[i][1] === 1) {
      sum += trainingData[i][0];
      cnt++;
    }
  }
  return (cnt === 0 )? 0 : sum / cnt;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
); // 4.5
