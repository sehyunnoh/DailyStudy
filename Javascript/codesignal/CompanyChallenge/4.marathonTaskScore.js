function marathonTaskScore(
  marathonLength,
  maxScore,
  submissions,
  successfulSubmissionTime
) {
  if (successfulSubmissionTime < 0) return 0;
  let result =
    maxScore -
    (submissions - 1) * 10 -
    successfulSubmissionTime * (((maxScore / 2) * 1) / marathonLength);

  return result < maxScore / 2 ? maxScore / 2 : result;
}

console.log(marathonTaskScore(100, 400, 4, 30)); // 310
