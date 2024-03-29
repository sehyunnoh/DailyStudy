// function parkingSpot(carDimensions, parkingLot, luckySpot) {
function parkingSpot(c, p, l) {
  // point를 왼쪽 상단에서 시작해서 오른쪽 하단으로
  let s = [
    Math.min(l[0], l[2]),
    Math.min(l[1], l[3]),
    Math.max(l[0], l[2]),
    Math.max(l[1], l[3])
  ];

  console.dir(s);

  // luckspot에 공간이 없으면 false
  for (let i = s[0]; i <= s[2]; i++) {
    for (let j = s[1]; j <= s[3]; j++) {
      if (p[i][j] != 0) {
        return false;
      }
    }
  }

  // 차가 공간 안에 안 들어가면 false;
  let a = s[2] - s[0] + 1;
  let b = s[3] - s[1] + 1;
  if (Math.max(a, b) < c[0] || Math.min(a, b) < c[1]) return false;

  // 주차 들어가는 공간 없으면 false
  let check = 0;
  if (a < b) {
    // 가로
    if (s[0] == 0) return true; // 왼쪽에 붙어 있을때
    if (s[2] == p[0].length - 1) return true; // 오른쪽에 붙어 있을때
    // 왼쪽에 빈자리 있는지 체크
    check = 0;
    for (let i = s[0]; i <= s[2]; i++) {
      for (let j = 0; j < s[1]; j++) {
        if (p[i][j] != 0) {
          check = 1;
          break;
        }
      }
    }
    if (check == 0) return true;

    // 오른쪽에 빈자리 있는지 체크
    check = 0;
    for (let i = s[0]; i <= s[2]; i++) {
      for (let j = s[3] + 1; j <= p[0].length - 1; j++) {
        if (p[i][j] != 0) {
          check = 1;
          break;
        }
      }
    }
    if (check == 0) return true;
  } else if (a > b) {
    // 세로
    if (s[1] == 0) return true; // 상단에 붙어 있을때
    if (s[3] == p.length - 1) return true; // 하단에 붙어 있을때
    // 위쪽에 빈자리 있는지 체크
    check = 0;
    for (let i = 0; i < s[1]; i++) {
      for (let j = s[1]; j <= s[3]; j++) {
        if (p[i][j] != 0) {
          check = 1;
          break;
        }
      }
    }
    if (check == 0) return true;

    // 아래쪽에 빈자리 있는지 체크
    check = 0;
    for (let i = s[3] + 1; i <= p.length - 1; i++) {
      for (let j = s[1]; j <= s[3]; j++) {
        if (p[i][j] != 0) {
          check = 1;
          break;
        }
      }
    }
    if (check == 0) return true;
  }
  return false;
}

console.log(
  parkingSpot(
    [3, 2],
    [
      [1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1]
    ],
    [1, 1, 2, 3]
  )
); //true
