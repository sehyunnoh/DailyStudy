function rightTriangle(sides) {
  sides.sort(function(a,b){return a-b});
  return sides[0]**2+sides[1]**2==sides[2]**2;
}


console.log(rightTriangle([4, 3, 5]));
console.log(rightTriangle([13, 12, 5]));