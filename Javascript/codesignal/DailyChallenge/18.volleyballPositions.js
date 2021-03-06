function volleyballPositions(formation, k) {
  let array = [];
  array.push(formation[0][1]);
  array.push(formation[1][2]);
  array.push(formation[3][2]);
  array.push(formation[2][1]);
  array.push(formation[3][0]);
  array.push(formation[1][0]);

  k %= 6;

  if (k == 1) {
    formation[0][1] = array[1];
    formation[1][2] = array[2];
    formation[3][2] = array[3];
    formation[2][1] = array[4];
    formation[3][0] = array[5];
    formation[1][0] = array[0];
  } else if (k == 2) {
    formation[0][1] = array[2];
    formation[1][2] = array[3];
    formation[3][2] = array[4];
    formation[2][1] = array[5];
    formation[3][0] = array[0];
    formation[1][0] = array[1];
  } else if (k == 3) {
    formation[0][1] = array[3];
    formation[1][2] = array[4];
    formation[3][2] = array[5];
    formation[2][1] = array[0];
    formation[3][0] = array[1];
    formation[1][0] = array[2];
  } else if (k == 4) {
    formation[0][1] = array[4];
    formation[1][2] = array[5];
    formation[3][2] = array[0];
    formation[2][1] = array[1];
    formation[3][0] = array[2];
    formation[1][0] = array[3];
  } else if (k == 5) {
    formation[0][1] = array[5];
    formation[1][2] = array[0];
    formation[3][2] = array[1];
    formation[2][1] = array[2];
    formation[3][0] = array[3];
    formation[1][0] = array[4];
  }

  return formation;
}

let formation = [
  ["empty", "Player5", "empty"],
  ["Player4", "empty", "Player2"],
  ["empty", "Player3", "empty"],
  ["Player6", "empty", "Player1"]
];

console.log(volleyballPositions(formation, 2));
