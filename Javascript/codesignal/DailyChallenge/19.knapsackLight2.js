function knapsackLight2(weight1, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return "both";
  }
  if (weight1 <= maxW && weight2 > maxW) {
    return "first";
  }
  if (weight1 > maxW && weight2 <= maxW) {
    return "second";
  }
  if (weight1 > maxW && weight2 > maxW) {
    return "none";
  }
  if (weight1 <= maxW && weight2 <= maxW && weight1 + weight2 > maxW) {
    return "either";
  }
}

console.log(knapsackLight2(5, 4, 8));
