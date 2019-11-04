function bishopAndPawn(bishop, pawn) {
  let a1 = bishop.split("");
  let a2 = pawn.split("");
  if (
    Math.abs(a2[0].charCodeAt(0) - a1[0].charCodeAt(0)) ==
    Math.abs(a1[1] - a2[1])
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(bishopAndPawn("a1", "c3"));
